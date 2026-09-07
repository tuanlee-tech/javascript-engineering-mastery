# Project 1 — Closure-based State Library

<LecturePlayer
  src="/audio/stage-01/project-1.aac"
  title="Project 1 — Closure-based State Library"
  subtitle=" 25 phút"
/>

## 0. Project Metadata (Thông tin project)

| Thuộc tính | Giá trị |
|---|---|
| **Course** | JavaScript Engineering Mastery |
| **Stage** | 1 — JavaScript Execution Model |
| **Position** | Integration Lab — sau Module 1.5 |
| **Project** | Project 1 — Closure-based State Library |
| **Primary Competency** | C02 — JavaScript Runtime |
| **Focus** | C02.2 Scope, C02.3 Lexical Environment, C02.5 Closure, C02.6 Call Stack |
| **Depth Target** | L5 Implement + L4 Debug |
| **Prerequisites** | Module 1.1 → 1.5 hoàn tất |
| **Cognitive Load** | High |

## 1. Context (Bối cảnh)

Bạn đã học từng cơ chế riêng lẻ của Stage 1: Execution Context, Scope, Lexical Environment, Hoisting/TDZ, Closure và Call Stack.

Project này kiểm tra một câu hỏi khác: **bạn có dùng các mental model đó để tự xây một abstraction nhỏ nhưng đúng cơ chế hay không?**

Bạn sẽ xây một state container tối giản chỉ bằng JavaScript. State phải được giữ private bằng closure, subscriber phải có thể đăng ký và hủy đăng ký, nhiều store phải hoạt động độc lập, và khi behavior sai bạn phải debug bằng execution model thay vì sửa thử.

:::info Project Intent (Mục đích project)
Đây không phải bài tập xây Redux, Zustand hay một production state manager. Mục tiêu là chứng minh bạn có thể biến **scope + closure + callback + execution tracing** thành implementation thực tế.
:::

## 2. Product Goal (Mục tiêu sản phẩm)

Xây function `createStore(initialState)` trả về một store có API tối thiểu:

```js
const store = createStore(initialState);

store.getState();
store.setState(nextState);

const unsubscribe = store.subscribe(listener);
unsubscribe();
```

Store phải đáp ứng bốn behavior cốt lõi:

1. Giữ state private bên trong mỗi store instance.
2. Cho phép đọc và cập nhật state qua API công khai.
3. Notify các subscriber đang active mỗi khi `setState(nextState)` thành công.
4. Cho phép mỗi subscriber tự unsubscribe mà không ảnh hưởng subscriber khác.

Ngoài ra, hai store được tạo từ hai lần gọi `createStore()` phải **hoàn toàn độc lập về state và subscriber collection**.

## 3. Technical Constraints (Ràng buộc kỹ thuật)

Project chỉ dùng JavaScript core đã học.

Bắt buộc:

- Không dùng library state management.
- Không dùng class.
- Không dùng framework.
- Không dùng biến mutable ở module/global scope để chứa state của store.
- `createStore()` phải là factory function.
- Private state phải được giữ bằng closure.
- `subscribe(listener)` phải return một function `unsubscribe`.
- `setState(nextState)` dùng semantics đơn giản: **replace state hiện tại bằng `nextState`**, sau đó notify subscriber đang active.
- Không yêu cầu async behavior.

Không bắt buộc:

- immutable update helper;
- deep clone;
- selector;
- derived state;
- middleware;
- batching;
- transaction;
- persistence;
- framework integration.

:::warning Scope Control (Kiểm soát phạm vi)
Nếu implementation bắt đầu có action type, reducer protocol, selector cache, async middleware hoặc React integration, bạn đang xây vượt yêu cầu Stage 1.
:::

## 4. New Competencies (Năng lực được nâng độ sâu)

Project này **không giới thiệu cơ chế JavaScript mới**. Nó nâng các competency đã học từ explain/use sang implementation/debug.

| Competency | Trước project | Trong project |
|---|---|---|
| Scope / Lexical Environment | Resolve identifier | Tổ chức private mutable state đúng lexical boundary |
| Closure | Explain retention | Dùng closure để tạo private state và per-instance state |
| Function / Callback | Gọi và trace | Lưu subscriber và invoke callback đúng thời điểm |
| Call Stack | Trace nested calls | Debug nested notification / recursive update |
| Execution Model | Predict behavior | Giải thích implementation bằng environment + invocation + value flow |

## 5. Reused Competencies (Năng lực tái sử dụng)

Bạn phải chủ động tái sử dụng:

- function declaration / function expression;
- object và array ở mức Stage 0;
- lexical scope;
- nested function;
- variable resolution;
- closure formation;
- closure lifetime;
- factory function;
- callback;
- return-value flow;
- nested calls;
- recursion / stack growth awareness;
- debugging theo evidence.

Project chỉ PASS nếu implementation **đúng** và bạn **giải thích được tại sao nó đúng**.

## 6. Mental Model (Mô hình tư duy của project)

Mỗi lần gọi `createStore(initialState)` phải tạo một lexical environment độc lập.

```text
createStore(initialState)
        ↓
Store Environment
├── state
├── subscribers
├── getState()
├── setState()
└── subscribe()
        ↓
returned API keeps environment reachable
```

Khi tạo hai store:

```text
createStore(userInitial)
        ↓
Environment A
├── state A
└── subscribers A

createStore(cartInitial)
        ↓
Environment B
├── state B
└── subscribers B
```

Environment A và Environment B không dùng chung mutable state.

:::info Mental Model (Mô hình tư duy)
API object được return không cần expose `state`. Các method trong API có thể tiếp tục truy cập `state` vì chúng giữ lexical relationship với environment được tạo bởi invocation `createStore()` tương ứng.
:::

### Call flow khi update

Khi gọi `store.setState(nextState)`, hãy hình dung:

```text
caller
  ↓
setState(nextState)
  ↓
update private state
  ↓
iterate active subscribers
  ↓
listener #1()
  ↓ return
listener #2()
  ↓ return
setState() completes
  ↓
caller resumes
```

Nếu một listener lại gọi `setState()` vô điều kiện, một nested call chain mới có thể hình thành và tiếp tục grow cho tới stack overflow.

## 7. Requirements (Yêu cầu chức năng)

### Part 1 — Private State

`state` không được expose trực tiếp trên object trả về.

Unacceptable và target structure nên được nhìn như sau:

:::code-group

```js [Không đạt — Shared Global State]
let state;

function createStore(initialState) {
  state = initialState;

  return {
    getState() {
      return state;
    }
  };
}
```

```js [Đúng hướng — Per-instance Closure]
function createStore(initialState) {
  let state = initialState;

  return {
    getState() {
      return state;
    }
  };
}
```

:::

Bạn chưa hoàn thành project chỉ với đoạn trên. Đây chỉ là skeleton để khóa đúng **state ownership boundary**.

Acceptance:

- `store.state` không phải public API.
- `getState()` đọc đúng state của chính store đó.
- Hai store không làm thay đổi state của nhau.

### Part 2 — `getState()`

`getState()` return state hiện tại.

Ví dụ behavior:

```js
const store = createStore({ count: 0 });

console.log(store.getState()); // { count: 0 }
```

Không thêm clone semantics. Project chỉ yêu cầu đọc current state.

### Part 3 — `setState(nextState)`

`setState(nextState)` thay current state bằng `nextState`.

Ví dụ:

```js
const store = createStore({ count: 0 });

store.setState({ count: 1 });
console.log(store.getState()); // { count: 1 }
```

Sau update, mọi subscriber đang active phải được gọi đúng một lần cho update đó.

:::warning Common Misconception (Nhầm lẫn phổ biến)
Đừng biến `setState` thành merge API chỉ vì một framework/library khác làm như vậy. Contract của project này chỉ là **replace next state**.
:::

### Part 4 — `subscribe(listener)`

`subscribe(listener)` đăng ký một callback để được invoke sau mỗi update.

```js
const store = createStore(0);

store.subscribe(() => {
  console.log("changed");
});

store.setState(1); // changed
```

Project không bắt buộc listener nhận argument nào. Nếu listener cần state mới, nó có thể gọi `store.getState()`.

Điểm cần chứng minh bằng mental model: callback được lưu lại trong subscriber collection và vẫn callable sau khi `subscribe()` đã return.

### Part 5 — `unsubscribe()`

`subscribe(listener)` phải return một function `unsubscribe`.

```js
const unsubscribe = store.subscribe(listener);

unsubscribe();
```

Sau khi `unsubscribe()` chạy, listener đó không được gọi bởi các update tiếp theo.

Unsubscribe một listener không được vô tình remove listener khác.

### Part 6 — Multiple Instances

```js
const userStore = createStore({ name: "An" });
const cartStore = createStore({ items: [] });
```

Bắt buộc:

- `userStore.setState(...)` không đổi `cartStore`.
- subscriber của `userStore` không được gọi khi `cartStore` update.
- subscriber của `cartStore` không được gọi khi `userStore` update.

Đây là bài kiểm tra trực tiếp cho **mỗi invocation → environment riêng**.

## 8. Architecture Constraints (Ràng buộc kiến trúc)

Implementation phải giữ architecture conceptual sau:

```text
createStore(initialState)
│
├── private state
├── private subscriber collection
│
└── public API
    ├── getState()
    ├── setState(nextState)
    └── subscribe(listener)
             ↓
         unsubscribe()
```

### Constraint 1 — Không dùng shared mutable module state

Nếu `state` hoặc subscriber collection nằm ngoài `createStore`, multiple instances rất dễ vô tình dùng chung data.

### Constraint 2 — Không expose private collection

Caller không được nhận trực tiếp subscriber array/collection để mutate tùy ý.

### Constraint 3 — Không bypass API

Consumer chỉ tương tác qua `getState`, `setState`, `subscribe`, `unsubscribe`.

### Constraint 4 — Không thêm abstraction chưa cần

Không tạo base class, event bus generic, plugin system hoặc reducer protocol.

### Constraint 5 — Trace được implementation

Bạn phải có thể vẽ được environment ownership và Call Stack cho một lần `setState()` notify hai listeners.

## 9. Implementation Path (Lộ trình triển khai)

Project đi từ guided đến independent nhưng không cung cấp full solution.

### Step 1 — Starter Scaffold

```js
function createStore(initialState) {
  let state = initialState;
  // TODO: private subscriber collection

  function getState() {
    // TODO
  }

  function setState(nextState) {
    // TODO
  }

  function subscribe(listener) {
    // TODO
    // return unsubscribe function
  }

  return {
    getState,
    setState,
    subscribe
  };
}
```

### Step 2 — Chỉ implement state lifecycle

Hoàn thành `getState()` và `setState()` trước. Chưa thêm subscriber.

Exit check: `getState()` phản ánh update mới nhất qua ít nhất ba lần `setState()` liên tiếp.

### Step 3 — Thêm một subscriber

Đăng ký một listener và chứng minh listener chạy sau update.

Không implement unsubscribe vội nếu subscriber mechanism cơ bản chưa đúng.

### Step 4 — Thêm nhiều subscribers

Dùng ít nhất ba listeners khác nhau và xác nhận tất cả được gọi.

### Step 5 — Implement unsubscribe

Sau khi một listener unsubscribe, update tiếp theo chỉ notify listener còn active.

### Step 6 — Verify multiple instances

Tạo hai store với state khác nhau và subscriber khác nhau.

### Step 7 — Trace bằng tay

Với một update có hai listeners, vẽ:

```text
Call Stack
+
Store Environment
+
Subscriber callback invocation order
+
State value before/after update
```

### Step 8 — Failure Injection

Chỉ sau khi happy path pass, cố tình tạo các bug ở section tiếp theo.

## 10. Failure Injection (Cố tình tạo lỗi)

Stage 1 yêu cầu debug ít nhất các failure liên quan unsubscribe, retained callback và nested update.

### Failure 1 — Subscriber không unsubscribe

Tạo flow:

```js
const store = createStore(0);

function listener() {
  console.log("listener called");
}

store.subscribe(listener);
store.setState(1);
store.setState(2);
```

Sau đó mô phỏng component/consumer đã “rời hệ thống” nhưng listener vẫn nằm trong subscriber collection vì unsubscribe không được gọi.

Bắt buộc trả lời:

- Reference nào vẫn giữ `listener` reachable?
- Vì sao callback vẫn được invoke?
- Frame của `subscribe()` có còn trên Call Stack không?
- Cần cleanup ở boundary nào?

:::warning Technical Precision (Độ chính xác kỹ thuật)
Ở Stage 1, chỉ cần nói subscriber collection vẫn giữ reference tới callback nên callback còn reachable và tiếp tục được notify. Chưa kết luận sâu về GC hoặc memory leak internals; phần đó thuộc Stage 11.
:::

### Failure 2 — `unsubscribe` remove sai listener

Tạo ba listeners A, B, C. Unsubscribe B rồi update state.

Expected: A và C chạy, B không chạy.

Nếu implementation dùng sai index/reference và remove nhầm listener, hãy debug theo evidence thay vì rewrite ngay.

Bắt buộc ghi:

```text
Expected
→ Actual
→ Subscriber collection trước unsubscribe
→ Subscriber collection sau unsubscribe
→ Root cause
→ Fix
```

### Failure 3 — Callback giữ reference ngoài dự kiến

Tạo listener đóng trên một object từ outer scope:

```js
function registerUserListener(store, user) {
  return store.subscribe(() => {
    console.log(user.name, store.getState());
  });
}
```

Sau khi `registerUserListener()` return, listener vẫn có thể dùng `user`.

Bắt buộc giải thích bằng closure/environment model, không dùng câu “JavaScript tự nhớ biến”.

### Failure 4 — Nested Update / Recursive Notification

Tạo listener cố tình update store vô điều kiện:

```js
const store = createStore(0);

store.subscribe(() => {
  store.setState(store.getState() + 1);
});

store.setState(1);
```

Đừng chạy ngay. Hãy trace Call Stack trước.

Mental trace:

```text
setState(1)
  ↓
listener()
  ↓
setState(2)
  ↓
listener()
  ↓
setState(3)
  ↓
...
```

Đây là recursion gián tiếp qua notification path. Nếu không có termination condition, stack có thể tiếp tục grow cho tới stack overflow.

:::danger Failure Mode (Lỗi nghiêm trọng)
Không “fix” bằng cách bắt `RangeError`. Root cause là update cycle không có termination condition. Hãy sửa control logic tạo recursive update.
:::

## 11. Debug Protocol (Quy trình gỡ lỗi bắt buộc)

Mỗi bug trong project phải được ghi theo format:

```text
Symptom
↓
Reproduction
↓
Evidence
↓
Hypothesis
↓
Verification
↓
Root Cause
↓
Fix
↓
Prevention
```

### Debug Example — Multiple stores share state

**Symptom:** `userStore.setState()` làm `cartStore.getState()` thay đổi theo.

**Reproduction:** Tạo hai stores với initial state khác nhau, update chỉ một store rồi đọc cả hai.

**Evidence:** Hai API object khác nhau nhưng `getState()` của cả hai phản ánh cùng mutable binding.

**Hypothesis:** `state` đang nằm ngoài lexical environment riêng của từng invocation `createStore()`.

**Verification:** Kiểm tra declaration location của `state` và vẽ environment graph.

**Root Cause:** Shared mutable binding ở module/global scope.

**Fix:** Đưa state ownership về lexical environment riêng của mỗi `createStore()` invocation.

**Prevention:** Test multiple instances phải tồn tại ngay từ đầu.

:::tip Debug Lens (Góc nhìn debug)
Khi behavior sai, đừng hỏi ngay “dòng code nào sai?”. Trước hết hỏi **binding nào đang được đọc**, **environment nào sở hữu binding đó**, và **invocation nào đang active**.
:::

## 12. Performance / Security Expectations (Kỳ vọng hiệu năng / bảo mật)

### Performance

Stage 1 không yêu cầu tối ưu subscriber algorithm.

Chấp nhận:

- notify bằng iteration tuyến tính qua subscriber collection;
- unsubscribe bằng search/filter tuyến tính;
- small in-memory store;
- synchronous notification.

Không cần:

- batching;
- scheduler;
- microtask queue;
- priority;
- structural sharing optimization;
- selector memoization.

### Security

Project không có security boundary đáng kể vì không xử lý network/user input hay authorization.

Yêu cầu duy nhất ở đây là **encapsulation correctness**: private state/subscriber collection không bị expose ngoài API contract.

:::info Out of Scope
Performance profiling sâu, GC/memory profiling, async concurrency, framework integration và production state architecture sẽ được học ở các Stage sau.
:::

## 13. Test Requirements (Yêu cầu kiểm thử)

Không cần test framework. Có thể dùng `console.assert` hoặc helper nhỏ.

### Test Helper

```js
function assertEqual(actual, expected, message) {
  if (!Object.is(actual, expected)) {
    throw new Error(`${message}: expected ${expected}, got ${actual}`);
  }
}
```

Nếu state là object, bạn có thể assert property cụ thể thay vì thêm deep-equality library.

### Test 1 — Initial State

```js
const store = createStore(10);
assertEqual(store.getState(), 10, "initial state");
```

### Test 2 — State Replacement

```js
const store = createStore(10);
store.setState(20);
assertEqual(store.getState(), 20, "state after setState");
```

### Test 3 — Subscriber Notification

```js
const store = createStore(0);
let calls = 0;

store.subscribe(() => {
  calls += 1;
});

store.setState(1);
store.setState(2);

assertEqual(calls, 2, "subscriber calls");
```

### Test 4 — Unsubscribe

```js
const store = createStore(0);
let calls = 0;

const unsubscribe = store.subscribe(() => {
  calls += 1;
});

store.setState(1);
unsubscribe();
store.setState(2);

assertEqual(calls, 1, "unsubscribe stops notifications");
```

### Test 5 — Unsubscribe One of Many

```js
const store = createStore(0);
let a = 0;
let b = 0;
let c = 0;

store.subscribe(() => { a += 1; });
const unsubscribeB = store.subscribe(() => { b += 1; });
store.subscribe(() => { c += 1; });

unsubscribeB();
store.setState(1);

assertEqual(a, 1, "listener A");
assertEqual(b, 0, "listener B");
assertEqual(c, 1, "listener C");
```

### Test 6 — Multiple Instances

```js
const userStore = createStore("user-0");
const cartStore = createStore("cart-0");

let userCalls = 0;
let cartCalls = 0;

userStore.subscribe(() => { userCalls += 1; });
cartStore.subscribe(() => { cartCalls += 1; });

userStore.setState("user-1");

assertEqual(userStore.getState(), "user-1", "user state");
assertEqual(cartStore.getState(), "cart-0", "cart state stays independent");
assertEqual(userCalls, 1, "user listener");
assertEqual(cartCalls, 0, "cart listener must not run");
```

### Test 7 — Returned `unsubscribe` là function độc lập

```js
const store = createStore(0);
const unsubscribe = store.subscribe(() => {});

assertEqual(typeof unsubscribe, "function", "subscribe returns unsubscribe");
```

### Test 8 — Private State không nằm trên public API

```js
const store = createStore(0);
assertEqual("state" in store, false, "state is not public API");
```

:::tip Test Rule (Quy tắc test)
Chỉ khi 8 test happy-path pass mới bắt đầu Failure Injection. Nếu basic contract chưa ổn, failure lab sẽ chỉ tạo thêm noise.
:::

## 14. Deliverables (Sản phẩm phải nộp)

Project hoàn thành phải có tối thiểu:

```text
project-1/
├── create-store.js
├── create-store.test.js
├── execution-trace.md
└── debug-notes.md
```

### `create-store.js`

Chứa implementation `createStore(initialState)`.

### `create-store.test.js`

Chứa ít nhất 8 acceptance tests ở section trên hoặc equivalent tests có cùng coverage.

### `execution-trace.md`

Vẽ ít nhất một trace cho scenario:

```js
const store = createStore(0);

store.subscribe(() => console.log("A", store.getState()));
store.subscribe(() => console.log("B", store.getState()));

store.setState(1);
```

Trace phải có:

```text
Call Stack checkpoints
+
Store lexical environment
+
state value flow
+
subscriber invocation order
```

### `debug-notes.md`

Ghi ít nhất hai failure theo full Debug Protocol. Một trong hai bắt buộc là **Nested Update / Recursive Notification**.

## 15. Review Rubric (Rubric review)

| Tiêu chí | Không đạt | Đạt | Strong |
|---|---|---|---|
| **API Contract** | Thiếu API hoặc behavior sai | `getState/setState/subscribe/unsubscribe` đúng | Contract đúng và code tối giản, rõ ownership |
| **Private State** | State public hoặc module-global | State nằm trong closure | Giải thích chính xác environment ownership |
| **Multiple Instances** | Store dùng chung state/listener | State và subscriber độc lập | Có test chứng minh independence |
| **Subscription** | Notify sai / unsubscribe sai | Notify + unsubscribe đúng | Nhiều listeners vẫn đúng sau selective unsubscribe |
| **Execution Model** | Giải thích bằng “JS nhớ” | Dùng scope/closure/call stack | Trace được environment + invocation + value flow |
| **Debugging** | Fix bằng trial-and-error | Có hypothesis + verification | Root cause và prevention được chứng minh bằng evidence |
| **Failure Injection** | Không tạo lỗi có chủ đích | Debug được ít nhất 2 case | Debug được cả retained callback + nested update |
| **Scope Control** | Tự biến thành framework/library lớn | Giữ API tối thiểu | Biết chỉ ra feature nào phải defer |

Project không PASS nếu implementation chạy đúng nhưng learner không giải thích được **tại sao multiple instances độc lập** hoặc **tại sao subscriber vẫn callable sau khi `subscribe()` return**.

## 16. Exit Criteria (Tiêu chí hoàn thành)

- [ ] Tự implement được `createStore(initialState)` mà không dùng state-management library.
- [ ] `state` và subscriber collection nằm trong lexical environment riêng của mỗi store instance.
- [ ] `getState()` luôn return current state của đúng store.
- [ ] `setState(nextState)` replace state và notify subscriber đang active.
- [ ] `subscribe(listener)` return một function `unsubscribe` hoạt động đúng.
- [ ] Unsubscribe một listener không ảnh hưởng listener khác.
- [ ] Hai store instances không dùng chung state hoặc subscriber collection.
- [ ] Pass ít nhất 8 acceptance tests của project.
- [ ] Vẽ được Call Stack cho một `setState()` notify ít nhất hai listeners.
- [ ] Vẽ được lexical environment giải thích private state và multiple instances.
- [ ] Giải thích được vì sao subscriber callback vẫn callable sau khi `subscribe()` return.
- [ ] Debug được subscriber không cleanup bằng reference/closure model mà không đi sâu GC internals.
- [ ] Trace được nested update thành recursive call chain và giải thích nguy cơ stack overflow.
- [ ] Ghi ít nhất hai bug theo `Symptom → Reproduction → Evidence → Hypothesis → Verification → Root Cause → Fix → Prevention`.
- [ ] Có thể review implementation và chỉ ra feature nào thuộc Stage sau thay vì tự kéo vào project.

Project 1 hoàn thành khi bạn không chỉ có một store “chạy được”, mà có thể dùng **Execution Context + Scope + Lexical Environment + Closure + Call Stack** để giải thích và debug toàn bộ behavior cốt lõi của nó.
