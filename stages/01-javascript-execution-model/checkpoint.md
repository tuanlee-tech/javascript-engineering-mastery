# Stage 1 Checkpoint — JavaScript Execution Model

<LecturePlayer
  src="/audio/stage-01/checkpoint.aac"
  title="Stage 1 Checkpoint — JavaScript Execution Model"
  subtitle=" 47 phút"
/>

## 0. Checkpoint Metadata (Thông tin checkpoint)

| Thuộc tính | Giá trị |
|---|---|
| **Course** | JavaScript Engineering Mastery |
| **Stage** | 1 — JavaScript Execution Model |
| **Position** | Sau Project 1 — Closure-based State Library |
| **Checkpoint** | Stage 1 Checkpoint |
| **Primary Competency** | C02 — JavaScript Runtime |
| **Coverage** | Execution Context, Scope, Lexical Environment, Hoisting/TDZ, Closure, Call Stack |
| **Depth Target** | L3 Use → L4 Debug → L5 Implement |
| **Prerequisites** | Modules 1.1–1.5 + Project 1 |
| **Cognitive Load** | High |

## 1. Checkpoint Purpose (Mục đích)

Stage 1 không kết thúc khi bạn nhớ được định nghĩa `closure`, `scope` hay `call stack`. Stage chỉ thực sự hoàn thành khi bạn có thể nhìn một behavior mới và truy ngược nó về đúng execution model.

Checkpoint này gom các năng lực cuối Stage 1 thành một flow duy nhất:

```text
Mental Model
    ↓
Predict
    ↓
Trace
    ↓
Implement
    ↓
Edge Cases
    ↓
Debug
    ↓
Verify Sources
    ↓
Teach Back
    ↓
Capstone
    ↓
Exit Criteria
```

:::info Cách sử dụng checkpoint
Mỗi exercise đều có **solution ngay trong file**, nhưng solution được đặt trong `:::details`. Hãy commit câu trả lời trước, sau đó mới mở reveal để so sánh reasoning.
:::

### Quy tắc làm bài

1. Không chạy code trước khi prediction được ghi ra.
2. Không sửa code trước khi có hypothesis.
3. Khi giải thích, ưu tiên các từ khóa đã học: **binding, environment, lexical relationship, invocation, call stack, return value, closure reference**.
4. Không dùng câu “JavaScript hoạt động như vậy” làm explanation.
5. Khi solution của bạn khác đáp án, tìm **điểm mental model bắt đầu lệch**, không chỉ sửa output cuối.

## 2. Competency Map (Bản đồ năng lực)

| Năng lực | Bạn phải chứng minh được |
|---|---|
| **Execution Context** | Xác định code đang chạy trong context nào và mỗi invocation tạo context riêng. |
| **Scope** | Phân biệt Global / Function / Block Scope và trace variable visibility. |
| **Lexical Environment** | Resolve identifier qua current environment → outer environment. |
| **Hoisting / TDZ** | Giải thích behavior bằng declaration / initialization / assignment thay vì “move code”. |
| **Closure** | Xác định function đang giữ outer environment nào và vì sao state vẫn reachable. |
| **Call Stack** | Vẽ nested calls, recursion và stack unwinding. |
| **Integration** | Kết hợp environment + stack + value flow để debug và implement abstraction nhỏ. |

---

# Part A — Mental Model

## 3. Một Function Call Tạo Ra Những Gì?

Không nhìn lesson cũ. Hãy vẽ mental model cho một function call từ lúc caller gọi function cho tới khi control quay lại caller.

Ví dụ để suy nghĩ:

```js
function add(a, b) {
  const result = a + b;
  return result;
}

const total = add(2, 3);
```

Bạn cần thể hiện ít nhất:

- invocation;
- Function Execution Context;
- local bindings;
- Call Stack;
- execution;
- return value;
- frame exit;
- caller resume.

:::details Solution — Mental Model
Một mental model đủ dùng ở Stage 1:

```text
Global execution
      ↓
call add(2, 3)
      ↓
new invocation of add
      ↓
Function Execution Context
├── a = 2
├── b = 3
└── result binding
      ↓
push add frame onto Call Stack
      ↓
execute function body
      ↓
result = 5
      ↓
return 5
      ↓
pop add frame
      ↓
resume caller
      ↓
total = 5
```

Điểm quan trọng:

- Hai lần gọi `add()` tạo **hai invocation riêng**, không dùng chung local execution state.
- Call Stack mô tả invocation nào đang active, không phải variable lookup path.
- Scope/Lexical Environment quyết định identifier được resolve từ đâu.
- `return 5` đưa value về caller; caller sau đó mới gán value đó cho `total`.
:::

### Transfer Check

Nếu gọi `add(10, 20)` ngay sau đó, invocation mới có dùng lại binding `result` của lần gọi trước không?

:::details Solution — Transfer Check
Không. Function definition được reuse, nhưng mỗi invocation tạo execution state riêng. `result` của invocation mới là local binding thuộc lần thực thi mới.
:::

---

# Part B — Predict

## 4. Prediction Protocol

Với mỗi case:

1. Ghi output hoặc error.
2. Ghi concept chính.
3. Giải thích bằng mental model.
4. Sau đó mới mở solution.

## 4.1. Predict 1 — `var` Before Assignment

```js
console.log(a);
var a = 10;
console.log(a);
```

:::details Solution — Predict 1
Output là `undefined` rồi `10`.

Ở mental model Stage 1, binding `a` của `var` đã tồn tại và được initialize với `undefined` trước khi execution chạy statement đầu tiên. Assignment `a = 10` chỉ xảy ra khi execution tới dòng đó.

Đây không nên được mô tả là source code thật sự bị “move lên đầu file”.
:::

## 4.2. Predict 2 — TDZ

```js
console.log(a);
let a = 10;
```

:::details Solution — Predict 2
Dòng đầu throw `ReferenceError`.

Binding của `a` đã thuộc lexical environment nhưng chưa được initialize. Khoảng từ khi environment được thiết lập tới lúc statement `let a = 10` thực hiện initialization là **Temporal Dead Zone**.
:::

## 4.3. Predict 3 — Block Scope

```js
if (true) {
  const message = "inside";
}

console.log(message);
```

:::details Solution — Predict 3
`console.log(message)` throw `ReferenceError` vì `message` thuộc block scope và không thể được resolve từ global environment.
:::

## 4.4. Predict 4 — Shadowing

```js
let x = 1;

function outer() {
  let x = 2;

  function inner() {
    let x = 3;
    console.log(x);
  }

  inner();
  console.log(x);
}

outer();
console.log(x);
```

:::details Solution — Predict 4
Output là `3`, `2`, `1`.

Mỗi `x` là một binding khác nhau ở một lexical environment khác nhau. Identifier lookup dừng ở binding gần nhất được tìm thấy.
:::

## 4.5. Predict 5 — Closure Private State

```js
function createCounter() {
  let count = 0;

  return function increment() {
    count += 1;
    return count;
  };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
```

:::details Solution — Predict 5
Output là `1` rồi `2`.

`createCounter()` đã return nên frame của invocation đó không còn trên Call Stack. Tuy nhiên function `increment` vẫn giữ reference tới lexical environment có binding `count`, vì vậy binding này vẫn reachable qua closure.
:::

## 4.6. Predict 6 — Hai Closure Instance

```js
function createCounter() {
  let count = 0;
  return () => ++count;
}

const a = createCounter();
const b = createCounter();

console.log(a());
console.log(a());
console.log(b());
```

:::details Solution — Predict 6
Output là `1`, `2`, `1`.

Hai lần gọi `createCounter()` tạo hai outer invocation khác nhau, do đó hai closure giữ hai environment khác nhau. `a` và `b` không dùng chung binding `count`.
:::

## 4.7. Predict 7 — Return-value Propagation

```js
function c() {
  return 42;
}

function b() {
  c();
}

function a() {
  return b();
}

console.log(a());
```

:::details Solution — Predict 7
Output là `undefined`.

`c()` trả `42`, nhưng `b()` không `return c();`. Vì vậy invocation `b()` hoàn tất với `undefined`. `a()` return chính value từ `b()`, nên `a()` cũng trả `undefined`.

Return value không tự động “đi xuyên” mọi caller.
:::

## 4.8. Predict 8 — Recursion

```js
function countdown(n) {
  if (n === 0) return;

  console.log(n);
  countdown(n - 1);
}

countdown(3);
```

:::details Solution — Predict 8
Output là `3`, `2`, `1`.

Call Stack grow theo các invocation `countdown(3) → countdown(2) → countdown(1) → countdown(0)`. Base case ở `n === 0` bắt đầu quá trình return/pop ngược lại.
:::

## 4.9. Predict 9 — Exception Propagation

```js
function c() {
  throw new Error("boom");
}

function b() {
  c();
  console.log("b done");
}

function a() {
  try {
    b();
  } catch (error) {
    console.log("caught");
  }
}

a();
```

:::details Solution — Predict 9
Output chỉ là `caught`.

`c()` throw. Không có `catch` trong `c()` hoặc `b()`, nên exception propagate lên caller và các frame bị unwind. Dòng `console.log("b done")` bị skip. `a()` có catch boundary nên exception được xử lý tại đó.
:::

## 4.10. Predict 10 — Closure + Callback

```js
function createFormatter(prefix) {
  return function format(value) {
    return `${prefix}:${value}`;
  };
}

function run(callback, value) {
  return callback(value);
}

const formatUser = createFormatter("USER");
console.log(run(formatUser, 7));
```

:::details Solution — Predict 10
Output là `USER:7`.

Dynamic caller của `format()` là `run()`, nhưng lexical parent của `format()` vẫn là environment nơi function được tạo bên trong `createFormatter()`. `prefix` được resolve qua closure, không phải từ caller `run()`.
:::

---

# Part C — Full Execution Trace

## 5. Trace Challenge

Không chạy code. Hãy trace chương trình sau bằng ba lens:

1. **Call Stack** — invocation nào đang active?
2. **Environment Graph** — identifier được resolve từ đâu?
3. **Value Flow** — value đi qua arguments / bindings / return như thế nào?

```js
const taxRate = 0.1;

function createProcessor(prefix) {
  const history = [];

  function processOrder(order, onResult) {
    function calculateSubtotal(items) {
      let total = 0;

      for (const item of items) {
        total += item.price;
      }

      return total;
    }

    function finalize(subtotal) {
      if (subtotal < 0) {
        throw new Error("invalid subtotal");
      }

      const total = subtotal + subtotal * taxRate;
      history.push(total);
      onResult(`${prefix}:${total}`);
      return total;
    }

    const subtotal = calculateSubtotal(order.items);
    return finalize(subtotal);
  }

  return {
    processOrder,
    getHistory: () => [...history],
  };
}

const processor = createProcessor("ORDER");

try {
  const total = processor.processOrder(
    { items: [{ price: 100 }, { price: 50 }] },
    message => console.log(message),
  );

  console.log(total);
  console.log(processor.getHistory());
} catch (error) {
  console.log(error.message);
}
```

### Nhiệm vụ

1. Dự đoán output.
2. Vẽ Environment Graph.
3. Vẽ Call Stack tại thời điểm `onResult(...)` đang chạy.
4. Giải thích `taxRate`, `history` và `prefix` được resolve từ đâu.
5. Trace value từ `order.items` tới `total` ở global code.
6. Giải thích vì sao `history` vẫn tồn tại sau khi `createProcessor()` return.
7. Nếu price đầu tiên đổi thành `-200`, statement nào bị skip và catch nào xử lý lỗi?

:::details Solution — Full Execution Trace
### 1. Output

```text
ORDER:165
165
[165]
```

### 2. Environment Graph

```text
Global Environment
├── taxRate = 0.1
├── createProcessor
├── processor
└── total

createProcessor("ORDER") Environment
├── prefix = "ORDER"
├── history = []
├── processOrder
└── getHistory closure

processOrder Invocation Environment
├── order
├── onResult
├── subtotal
├── calculateSubtotal
└── finalize

calculateSubtotal Invocation Environment
├── items
└── total

finalize Invocation Environment
├── subtotal
└── total
```

`processOrder`, `getHistory` và `finalize` có lexical relationship được quyết định bởi nơi chúng được định nghĩa, không bởi caller runtime.

### 3. Call Stack khi `onResult(...)` đang chạy

```text
Global
└── processOrder(...)
    └── finalize(150)
        └── onResult("ORDER:165")
            └── console.log(...)
```

`createProcessor()` không còn trên Call Stack. Nó đã return trước khi `processOrder()` được gọi.

### 4. Identifier Resolution

- `taxRate` trong `finalize()` được lookup ra Global Environment.
- `history` trong `finalize()` được lookup qua outer lexical environment của `createProcessor()`.
- `prefix` cũng được lookup qua environment của `createProcessor()`.
- `onResult` là parameter thuộc invocation của `processOrder()`.

### 5. Value Flow

```text
[{ price: 100 }, { price: 50 }]
        ↓
calculateSubtotal(items)
        ↓
150
        ↓
subtotal
        ↓
finalize(150)
        ↓
150 + 150 * 0.1
        ↓
165
        ↓
history.push(165)
        ↓
onResult("ORDER:165")
        ↓
return 165
        ↓
processOrder returns 165
        ↓
global total = 165
```

### 6. Closure Lifetime

`createProcessor()` đã return nhưng object `processor` vẫn chứa `processOrder` và `getHistory`. Các function này cần `prefix` / `history`, nên outer environment tương ứng vẫn reachable qua closure reference.

### 7. Nếu first price là `-200`

Subtotal trở thành `-150`. `finalize(-150)` throw tại `throw new Error("invalid subtotal")`.

Các statement sau `throw` trong `finalize()` bị skip: tính `total`, `history.push`, callback và `return total`. Exception propagate qua `processOrder()` tới `try/catch` ở global code; catch in `try` xử lý và in `invalid subtotal`.
:::

### Transfer Check — Caller ≠ Lexical Parent

Nếu `processOrder` được truyền sang một function khác rồi mới gọi, `history`, `prefix` và `taxRate` có thay đổi lookup path không?

:::details Solution — Transfer Check
Không. Caller runtime có thể thay đổi, nhưng lexical relationship được quyết định bởi source structure tại thời điểm function được định nghĩa.
:::

---

# Part D — Re-implementation Lab

## 6. Implementation Contract

Không dùng library. Mỗi implementation phải ngắn, runnable và có observable behavior.

:::warning Scope Control
Mục tiêu là chứng minh execution + scope + closure. Không mở rộng thành production utility library, không thêm caching policy phức tạp, weak references, async concurrency hay framework integration.
:::

## 6.1. Implement `once(fn)`

### Contract của checkpoint

- `fn` chỉ thực thi ở lần gọi đầu tiên.
- Kết quả lần đầu được cache.
- Các lần gọi sau trả lại kết quả đã cache và không gọi `fn` nữa.
- `this` và arguments của lần gọi đầu tiên được forward cho `fn`.

Test:

```js
let calls = 0;

const init = once(function (value) {
  calls += 1;
  return value * 2;
});

console.log(init(5));
console.log(init(10));
console.log(calls);
```

Expected: `10`, `10`, `1`.

:::details Solution — `once`
```js
function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      result = fn.apply(this, args);
      called = true;
    }

    return result;
  };
}
```

Closure giữ hai private bindings: `called` và `result`. Mỗi call tới returned function dùng lại cùng environment đó.
:::

## 6.2. Implement `memoize(fn)`

### Contract của checkpoint

Để giữ scope đúng Stage 1, phiên bản này chỉ memoize function **một argument primitive**.

Test:

```js
let calls = 0;

const square = memoize(value => {
  calls += 1;
  return value * value;
});

console.log(square(4));
console.log(square(4));
console.log(square(5));
console.log(calls);
```

Expected: `16`, `16`, `25`, `2`.

:::details Solution — `memoize`
```js
function memoize(fn) {
  const cache = new Map();

  return function (value) {
    if (cache.has(value)) {
      return cache.get(value);
    }

    const result = fn(value);
    cache.set(value, result);
    return result;
  };
}
```

`cache` là private state được giữ bằng closure. `Map` ở đây chỉ là container; competency đang kiểm tra vẫn là closure + state lifetime + function invocation.
:::

## 6.3. Implement `createCounter(initialValue)`

API:

```js
const counter = createCounter(10);

counter.increment();
counter.decrement();
counter.getValue();
```

State không được expose trực tiếp.

:::details Solution — `createCounter`
```js
function createCounter(initialValue = 0) {
  let value = initialValue;

  return {
    increment() {
      value += 1;
      return value;
    },

    decrement() {
      value -= 1;
      return value;
    },

    getValue() {
      return value;
    },
  };
}
```

Ba method closure cùng giữ reference tới environment có binding `value`.
:::

## 6.4. Implement `createStore(initialState)`

API:

```js
const store = createStore({ count: 0 });

store.getState();
store.setState({ count: 1 });

const unsubscribe = store.subscribe(state => {
  console.log(state);
});

unsubscribe();
```

Requirements:

- state private;
- `setState(nextState)` replace state;
- notify active subscribers;
- `subscribe()` return `unsubscribe()`;
- nhiều store instance độc lập.

:::details Solution — `createStore`
```js
function createStore(initialState) {
  let state = initialState;
  const listeners = new Set();

  function getState() {
    return state;
  }

  function setState(nextState) {
    state = nextState;

    for (const listener of listeners) {
      listener(state);
    }
  }

  function subscribe(listener) {
    listeners.add(listener);

    return function unsubscribe() {
      listeners.delete(listener);
    };
  }

  return {
    getState,
    setState,
    subscribe,
  };
}
```

Mỗi invocation của `createStore()` tạo environment riêng chứa `state` và `listeners`, vì vậy các store instance không dùng chung private state.
:::

## 6.5. Implement `compose(...functions)`

Contract: `compose(f, g, h)(value)` tương đương `f(g(h(value)))`.

Test:

```js
const double = x => x * 2;
const addOne = x => x + 1;

const transform = compose(double, addOne);
console.log(transform(3));
```

Expected: `8`.

:::details Solution — `compose`
```js
function compose(...functions) {
  return function (value) {
    return functions.reduceRight(
      (currentValue, fn) => fn(currentValue),
      value,
    );
  };
}
```

Execution order là từ function cuối về function đầu. `functions` được giữ trong closure của returned function.
:::

---

# Part E — Edge Case Lab

## 7. Edge Case Protocol

Mỗi case phải trả lời:

```text
Observed Behavior
      ↓
Classification
      ↓
Mental Model
      ↓
Root Cause
      ↓
Fix / Decision
```

## 7.1. Case 1 — Hoisting

```js
console.log(a);
var a = 10;
```

Câu hỏi: output gì, binding `a` đang ở trạng thái nào, và vì sao đây không phải TDZ?

:::details Solution — Edge Case 1
Output là `undefined`. Binding `a` của `var` đã được initialize với `undefined`, nên access hợp lệ. TDZ liên quan tới lexical bindings như `let`/`const` trước initialization, không phải case này.
:::

## 7.2. Case 2 — TDZ

```js
console.log(a);
let a = 10;
```

:::details Solution — Edge Case 2
Throw `ReferenceError`. Binding đã tồn tại trong lexical environment nhưng chưa được initialize, nên access trước initialization nằm trong TDZ.
:::

## 7.3. Case 3 — Scope Shadowing

```js
let x = 1;

function test() {
  let x = 2;

  function inner() {
    let x = 3;
    console.log(x);
  }

  inner();
}

test();
```

:::details Solution — Edge Case 3
Output là `3`. Identifier lookup bắt đầu ở current environment của `inner()`. Binding `x = 3` được tìm thấy ngay tại đó, nên lookup không tiếp tục ra `test()` hoặc global environment.
:::

## 7.4. Case 4 — Closure

```js
function outer() {
  const value = 10;
  return () => value;
}

const read = outer();
console.log(read());
```

:::details Solution — Edge Case 4
Output là `10`. Frame của `outer()` đã rời Call Stack, nhưng returned function vẫn giữ reference tới outer lexical environment có binding `value`.
:::

## 7.5. Case 5 — Loop Closure

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

Dự đoán output và giải thích bằng binding, không dùng câu “`var` bị lỗi”.

:::details Solution — Edge Case 5
Các callback đều quan sát cùng binding `i` của `var`. Khi callbacks chạy, loop đã kết thúc và binding đó có value `3`, nên output là `3`, `3`, `3`.

So sánh hai cách sửa:

::: code-group

```js [Dùng let]
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

```js [Explicit capture]
for (var i = 0; i < 3; i++) {
  ((captured) => {
    setTimeout(() => console.log(captured), 0);
  })(i);
}
```

:::

Cả hai đều tạo cách capture value theo iteration thay vì để mọi callback đọc cùng một binding `var i` sau loop.
:::

## 7.6. Case 6 — Stale State

```js
function createLogger() {
  let count = 0;
  const snapshot = count;

  return {
    increment() {
      count += 1;
    },

    logSnapshot() {
      console.log(snapshot);
    },

    logCurrent() {
      console.log(count);
    },
  };
}

const logger = createLogger();
logger.increment();
logger.increment();
logger.logSnapshot();
logger.logCurrent();
```

:::details Solution — Edge Case 6
Output là `0` rồi `2`.

`snapshot` nhận value của `count` tại thời điểm assignment `const snapshot = count`. Sau đó `count` tiếp tục được reassignment nhưng `snapshot` không tự đồng bộ theo binding `count`.

Đây là một dạng stale captured value ở mức synchronous, giúp chuẩn bị mental model cho stale closure trong async/React sau này.
:::

## 7.7. Case 7 — Stack Overflow

```js
function recurse(n) {
  return recurse(n + 1);
}

recurse(0);
```

:::details Solution — Edge Case 7
Function không có base case nên mỗi invocation gọi tiếp invocation khác trước khi invocation hiện tại có thể return. Call Stack grow cho đến khi runtime không thể thêm frame mới và throw stack overflow error.

Fix phải tạo termination path thực sự, ví dụ:

```js
function recurse(n) {
  if (n >= 3) return n;
  return recurse(n + 1);
}
```
:::

---

# Part F — Debug Lab

## 8. Debugging Contract

Không nhảy từ `error → fix`. Mỗi bug phải đi qua:

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

## 8.1. Bug 1 — Wrong Value

### Reproduction

```js
let status = "idle";

function start() {
  let status = "done";
  console.log("inside:", status);
}

start();
console.log("outside:", status);
```

Developer nói: “`start()` đã đổi `status` thành `done`, tại sao ngoài function vẫn là `idle`?”

:::details Solution — Debug Bug 1
**Symptom:** `inside: done`, nhưng `outside: idle`.

**Evidence:** Có hai declaration `let status` ở hai lexical scopes khác nhau.

**Hypothesis:** Đây là shadowing, không phải mutation/reassignment của global binding.

**Verification:** Xóa local declaration và chỉ assignment `status = "done"`; behavior bên ngoài thay đổi.

**Root Cause:** `let status = "done"` trong `start()` tạo local binding mới che khuất global `status`.

**Fix:** Nếu chủ đích là update global binding thì assign đúng binding; trong production code tốt hơn nên tránh shared mutable global state và truyền state rõ ràng.

**Prevention:** Khi thấy “value bị đổi / không đổi”, trước tiên xác định identifier đang resolve tới binding nào.
:::

## 8.2. Bug 2 — `undefined` vs `ReferenceError`

### Reproduction

::: code-group

```js [Case A]
console.log(value);
var value = 10;
```

```js [Case B]
console.log(value);
let value = 10;
```

```js [Case C]
console.log(missing);
```

:::

Hãy phân biệt ba failure/behavior bằng binding model.

:::details Solution — Debug Bug 2
**Case A:** in `undefined` vì `var value` có binding đã initialized với `undefined` trước assignment.

**Case B:** throw `ReferenceError` vì lexical binding `value` chưa được initialized và đang trong TDZ.

**Case C:** throw `ReferenceError` vì identifier lookup đi hết environment chain mà không tìm thấy binding `missing`.

Cả B và C đều là `ReferenceError`, nhưng **root cause khác nhau**: một case binding tồn tại nhưng chưa usable; case còn lại binding không được tìm thấy.
:::

## 8.3. Bug 3 — Closure Retaining State

### Reproduction

```js
function createTracker() {
  const records = [];

  return {
    add(record) {
      records.push(record);
    },

    getCount() {
      return records.length;
    },
  };
}

const tracker = createTracker();
tracker.add({ id: 1 });
tracker.add({ id: 2 });
```

Câu hỏi không phải “GC chạy thế nào?”. Hãy xác định reference nào khiến `records` còn reachable.

:::details Solution — Debug Bug 3
**Symptom:** `records` vẫn tồn tại sau khi `createTracker()` return.

**Evidence:** Object `tracker` còn reachable và chứa hai methods `add` / `getCount`.

**Hypothesis:** Các methods là closures giữ outer environment chứa `records`.

**Verification:** Khi `tracker.getCount()` chạy, function vẫn resolve được `records` và trả `2`.

**Root Cause:** Đây không phải bug tự thân; lifetime dài hơn outer frame là behavior bình thường của closure. Nếu application không còn cần tracker nhưng vẫn giữ reference tới tracker hoặc callback liên quan, data cũng có thể tiếp tục reachable.

**Fix / Prevention:** Cleanup các long-lived references khi lifecycle kết thúc. Chi tiết GC internals thuộc Stage 11.
:::

## 8.4. Bug 4 — Recursive Stack Overflow

### Reproduction

```js
function walk(node) {
  console.log(node.value);
  return walk(node.next);
}

walk({
  value: 1,
  next: {
    value: 2,
    next: null,
  },
});
```

:::details Solution — Debug Bug 4
**Symptom:** Sau khi in `1`, `2`, code không kết thúc đúng mà tiếp tục fail.

**Evidence:** Khi `node` trở thành `null`, function vẫn cố đọc `node.value` hoặc tiếp tục recursion tùy code variant.

**Hypothesis:** Thiếu base case cho terminal node.

**Verification:** Thêm check `if (node === null) return;` trước khi access `node.value`.

**Root Cause:** Recursion không có termination path cho cấu trúc linked data kết thúc bằng `null`.

**Fix:** 

```js
function walk(node) {
  if (node === null) return;

  console.log(node.value);
  walk(node.next);
}
```

**Prevention:** Trước khi viết recursion, luôn trả lời hai câu: base case là gì, và mỗi recursive step có tiến gần base case không?
:::

---

# Part G — Source & Documentation

## 9. Source Selection Mental Model

Khi mental model không chắc, hãy phân loại câu hỏi trước khi chọn source:

```text
Practical JavaScript behavior
        ↓
       MDN

Core language semantics
        ↓
ECMAScript specification

Engine-specific implementation / optimization
        ↓
Engine documentation
```

Không yêu cầu đọc engine source ở Stage 1.

## 9.1. Source Exercise 1

Bạn muốn verify: “Closure trong JavaScript là gì và function có thể access outer scope sau khi outer function return như thế nào?”

Nguồn nào nên đọc trước: MDN, ECMAScript spec hay V8 blog?

:::details Solution — Source Exercise 1
Đọc **MDN Closures** trước để có explanation thực dụng và examples. Nếu cần wording semantics sâu hơn về environment records / execution semantics, mới đi xuống ECMAScript specification.
:::

## 9.2. Source Exercise 2

Bạn muốn verify chính xác core-language semantics của lexical binding và Environment Record.

:::details Solution — Source Exercise 2
Ưu tiên **ECMAScript specification** vì câu hỏi nằm ở language semantics. MDN có thể giúp diễn giải nhưng không phải source formal nhất cho algorithm/record semantics.
:::

## 9.3. Source Exercise 3

Một bài blog nói: “Mọi JavaScript engine luôn lưu closure variables ở heap.” Bạn có nên biến câu này thành universal rule trong mental model không?

:::details Solution — Source Exercise 3
Không. Đây là implementation-level claim và có thể phụ thuộc engine/optimization. Mental model Stage 1 chỉ cần nói closure giữ **reference tới lexical environment cần thiết để bindings còn reachable**. Không cần khóa vào một layout bộ nhớ cụ thể.
:::

## 9.4. Source Exercise 4 — Audit AI

AI trả lời: “Khi function return, tất cả local variables của nó bị destroy.” Hãy audit câu này.

:::details Solution — Source Exercise 4
Câu này quá tuyệt đối. Frame của invocation có thể rời Call Stack, nhưng nếu một returned/captured function vẫn giữ outer environment cần thiết thì các bindings liên quan vẫn có thể tiếp tục reachable. Phải phân biệt **frame lifetime** với **environment reachability**.
:::

---

# Part H — Teach Back

## 10. Teach-back Protocol

Trả lời mỗi câu trong khoảng 1–2 phút, không nhìn solution trước. Một câu trả lời đạt yêu cầu phải có **accuracy + causality + clarity**.

## 10.1. Level 1 — Execution Context là gì?

:::details Model Answer — Level 1
Execution Context là mental model cho environment thực thi của một đoạn JavaScript code tại một thời điểm. Khi function được gọi, một Function Execution Context mới được tạo cho invocation đó; nó cung cấp execution state cần thiết cho function body chạy. Trong Stage 1, điều quan trọng là mỗi invocation có context riêng và context active được tổ chức theo Call Stack.
:::

## 10.2. Level 2 — Scope khác Execution Context thế nào?

:::details Model Answer — Level 2
**Scope** trả lời identifier có thể được nhìn thấy và resolve từ đâu theo lexical structure. **Execution Context** trả lời code hiện tại đang được thực thi trong context nào. Scope thiên về visibility/lexical relationship; execution context thiên về runtime invocation/execution state. Hai khái niệm liên quan nhưng không thay thế cho nhau.
:::

## 10.3. Level 3 — Tại sao inner function truy cập được outer variable?

:::details Model Answer — Level 3
Vì function được định nghĩa trong lexical environment của outer function. Khi inner code cần một identifier không có ở current environment, lookup tiếp tục qua outer environment reference. Đây là lexical resolution, không phụ thuộc function nào gọi inner tại runtime.
:::

## 10.4. Level 4 — Tại sao outer function đã return mà closure vẫn hoạt động?

:::details Model Answer — Level 4
Outer invocation đã kết thúc nên frame của nó không còn active trên Call Stack. Nhưng returned inner function vẫn giữ reference tới lexical environment cần thiết. Khi inner function được gọi sau đó, nó vẫn resolve được captured bindings qua reference này. Vì vậy frame lifetime và environment reachability là hai vấn đề khác nhau.
:::

## 10.5. Level 5 — Closure có thể gây memory retention như thế nào?

:::details Model Answer — Level 5
Nếu một long-lived function vẫn reachable và closure của nó giữ reference tới outer environment, những objects được environment đó tham chiếu cũng có thể tiếp tục reachable lâu hơn mong đợi. Stage 1 chỉ cần nhận ra reference chain này; GC internals và memory profiling sâu thuộc Stage 11.
:::

---

# Part I — Capstone: Closure & Execution Lab

## 11. Product Goal

Xây một state library nhỏ:

```js
const state = createState(initialState);

state.get();
state.set(nextState);

const unsubscribe = state.subscribe(listener);
unsubscribe();

state.select(selector);
```

Sau đó thêm:

- memoized selector;
- derived state;
- listener cleanup;
- intentional failure cases để debug.

:::info Capstone Intent
Đây không phải state manager production. Mục tiêu là chứng minh bạn có thể kết hợp closure private state, subscriber lifecycle, callback execution và debugging bằng Stage 1 mental model.
:::

## 11.1. Requirements

`createState(initialState)` phải đáp ứng:

1. `get()` trả current state.
2. `set(nextState)` replace state và notify active listeners.
3. `subscribe(listener)` đăng ký listener và return `unsubscribe()`.
4. `select(selector)` tính derived value từ current state.
5. Nhiều state instances độc lập.
6. Listener đã unsubscribe không được gọi nữa.
7. Không expose mutable internal listener collection.

### Memoized selector contract

Checkpoint dùng một memoization đơn giản theo **state identity**:

- nếu selector được gọi lại với cùng state reference, trả cached result;
- khi state reference thay đổi, selector chạy lại.

## 11.2. Starter Scaffold

```js
function createState(initialState) {
  // TODO: private state
  // TODO: listener collection

  function get() {
    // TODO
  }

  function set(nextState) {
    // TODO
  }

  function subscribe(listener) {
    // TODO
  }

  function select(selector) {
    // TODO
  }

  return {
    get,
    set,
    subscribe,
    select,
  };
}

function createSelector(selector) {
  // TODO
}
```

## 11.3. Acceptance Tests

```js
const store = createState({ count: 0 });
const events = [];

const unsubscribe = store.subscribe(state => {
  events.push(state.count);
});

console.log(store.get());

store.set({ count: 1 });
store.set({ count: 2 });

console.log(events);
console.log(store.select(state => state.count * 10));

unsubscribe();
store.set({ count: 3 });

console.log(events);
```

Expected behavior:

- first `get()` returns `{ count: 0 }`;
- events sau hai update là `[1, 2]`;
- selector trả `20`;
- sau unsubscribe, update thành `3` không thêm event mới.

:::details Full Solution — Capstone
```js
function createState(initialState) {
  let state = initialState;
  const listeners = new Set();

  function get() {
    return state;
  }

  function set(nextState) {
    state = nextState;

    for (const listener of [...listeners]) {
      listener(state);
    }
  }

  function subscribe(listener) {
    listeners.add(listener);

    return function unsubscribe() {
      listeners.delete(listener);
    };
  }

  function select(selector) {
    return selector(state);
  }

  return {
    get,
    set,
    subscribe,
    select,
  };
}

function createSelector(selector) {
  let hasCache = false;
  let previousState;
  let previousResult;

  return function memoizedSelector(state) {
    if (hasCache && state === previousState) {
      return previousResult;
    }

    previousState = state;
    previousResult = selector(state);
    hasCache = true;

    return previousResult;
  };
}
```

`[...listeners]` tạo snapshot nhỏ trước khi notify, giúp iteration ổn định nếu một listener unsubscribe chính nó trong lúc notification đang chạy. Đây vẫn chỉ là implementation nhỏ cho lab, không phải batching/transaction system.

Ví dụ memoized selector:

```js
const selectDoubleCount = createSelector(
  state => state.count * 2,
);

const store = createState({ count: 2 });

console.log(selectDoubleCount(store.get()));
console.log(selectDoubleCount(store.get()));

store.set({ count: 3 });
console.log(selectDoubleCount(store.get()));
```
:::

## 11.4. Derived State

Derived state không cần lưu thêm nếu có thể tính từ source state.

Ví dụ:

```js
const store = createState({ price: 100, quantity: 3 });

const total = store.select(
  state => state.price * state.quantity,
);

console.log(total);
```

`total` là derived value được tính từ current state. Nếu computation đắt, `createSelector()` có thể memoize theo state identity trong contract của checkpoint.

## 11.5. Failure Injection 1 — Stale Closure

Buggy version capture snapshot quá sớm.

::: code-group

```js [Buggy]
function createLogger(store) {
  const snapshot = store.get();

  return function log() {
    console.log(snapshot.count);
  };
}
```

```js [Fixed]
function createLogger(store) {
  return function log() {
    console.log(store.get().count);
  };
}
```

:::

:::details Diagnosis — Failure 1
Buggy version closure giữ binding `snapshot`, là value lấy tại thời điểm `createLogger()` chạy. Sau này store update không tự thay đổi `snapshot`. Fixed version đọc current state tại thời điểm `log()` execution.
:::

## 11.6. Failure Injection 2 — Forgotten Unsubscribe

::: code-group

```js [Buggy]
function mount(store) {
  store.subscribe(state => {
    console.log(state);
  });
}

mount(store);
```

```js [Fixed]
function mount(store) {
  const unsubscribe = store.subscribe(state => {
    console.log(state);
  });

  return function unmount() {
    unsubscribe();
  };
}
```

:::

:::details Diagnosis — Failure 2
Nếu lifecycle kết thúc nhưng listener vẫn nằm trong internal collection, store vẫn giữ reference tới callback. Callback cũng có thể giữ thêm outer references qua closure. Fix là expose cleanup path và thực sự gọi nó khi lifecycle kết thúc.
:::

## 11.7. Failure Injection 3 — State Shadowing

::: code-group

```js [Buggy]
function createState(initialState) {
  let state = initialState;

  function set(state) {
    state = state;
  }

  return {
    get: () => state,
    set,
  };
}
```

```js [Fixed]
function createState(initialState) {
  let state = initialState;

  function set(nextState) {
    state = nextState;
  }

  return {
    get: () => state,
    set,
  };
}
```

:::

:::details Diagnosis — Failure 3
Parameter `state` trong buggy version shadow outer binding `state`. Statement `state = state` chỉ assign parameter cho chính nó, nên private outer state không đổi.
:::

## 11.8. Failure Injection 4 — Incorrect Initialization

::: code-group

```js [Buggy]
function createState(initialState) {
  let state;

  return {
    get: () => state,
  };
}
```

```js [Fixed]
function createState(initialState) {
  let state = initialState;

  return {
    get: () => state,
  };
}
```

:::

:::details Diagnosis — Failure 4
Binding `state` ở buggy version tồn tại nhưng được initialize với `undefined` vì declaration `let state;` không lấy `initialState`. Đây là initialization bug, không phải closure bug.
:::

## 11.9. Failure Injection 5 — Recursive Update

```js
const store = createState({ count: 0 });

store.subscribe(state => {
  store.set({ count: state.count + 1 });
});

store.set({ count: 1 });
```

Dự đoán call stack behavior trước khi mở solution.

:::details Diagnosis & Fix — Failure 5
`set()` notify listener. Listener lại gọi `set()`, invocation mới lại notify cùng listener, tạo nested update không có termination condition. Call Stack grow cho tới stack overflow.

Ở Stage 1, fix đơn giản nhất là **không tạo subscriber đồng bộ luôn gọi lại `set()` vô điều kiện**. Nếu business rule cần update tiếp, phải có termination condition rõ ràng.

Ví dụ:

```js
const store = createState({ count: 0 });

store.subscribe(state => {
  if (state.count < 3) {
    store.set({ count: state.count + 1 });
  }
});

store.set({ count: 1 });
```

Các vấn đề production như batching, scheduling, transaction hoặc re-entrancy policy thuộc các Stage sau, không mở rộng ở đây.
:::

## 11.10. Capstone Trace

Với correct implementation, tại thời điểm một listener đang chạy sau `store.set({ count: 1 })`, hãy xác định Call Stack và lexical references.

:::details Solution — Capstone Trace
Một stack conceptual:

```text
Global
└── set({ count: 1 })
    └── listener({ count: 1 })
```

`set()` và `subscribe()` đều là closures giữ environment của `createState()` chứa `state` và `listeners`. Listener có lexical environment riêng theo nơi nó được định nghĩa; việc store gọi listener không làm store environment trở thành lexical parent của listener.
:::

---

# Part J — Stage Assessment

## 12. Assessment Matrix

| Area | Evidence cần có | Depth |
|---|---|---|
| Execution Context | Giải thích được mỗi invocation tạo execution state riêng | L2–L3 |
| Scope / Environment | Trace đúng identifier lookup trong nested code | L3 |
| Hoisting / TDZ | Predict đúng behavior và giải thích bằng binding state | L3–L4 |
| Closure | Trace outer reference, lifetime và private state | L3–L5 |
| Call Stack | Vẽ nested calls / recursion / unwinding | L3–L4 |
| Integration | Full trace environment + stack + value | L4 |
| Implementation | `once`, `memoize`, `createCounter`, `createStore` | L5 |
| Debugging | Root cause 4 bug families bằng evidence | L4 |
| Teach Back | Giải thích causality rõ ràng, không học thuộc | L2–L4 |
| Capstone | `createState` + selector + cleanup + failure diagnosis | L4–L5 |

### Self-review rule

Một câu trả lời chưa đạt nếu chỉ đúng output nhưng explanation sai mental model. Checkpoint ưu tiên **reasoning đúng cơ chế** hơn việc đoán đúng bằng trực giác.

---

# Part K — Exit Criteria

## 13. Stage 1 Exit Criteria

### Execution Context

- [ ] Giải thích được Global vs Function Execution Context.
- [ ] Vẽ được Execution Context Stack.
- [ ] Trace được nested function calls.

### Scope

- [ ] Phân biệt Global / Function / Block Scope.
- [ ] Vẽ được Scope Chain cho nested functions.
- [ ] Giải thích variable resolution.

### Hoisting

- [ ] Phân biệt declaration / initialization / assignment.
- [ ] Giải thích behavior của `var`.
- [ ] Giải thích behavior của `let` / `const`.
- [ ] Giải thích TDZ bằng environment model.

### Closure

- [ ] Định nghĩa closure chính xác ở mức Stage 1.
- [ ] Vẽ được closure environment.
- [ ] Implement private state bằng closure.
- [ ] Giải thích closure trong callback.
- [ ] Giải thích stale closure / stale captured value.
- [ ] Nhận biết reference retention do closure ở mức conceptual.

### Call Stack

- [ ] Vẽ được Call Stack của nested calls.
- [ ] Giải thích stack overflow.
- [ ] Giải thích stack unwinding khi `throw`.

### Integration

- [ ] Tự implement được `once`.
- [ ] Tự implement được `memoize` theo contract của lab.
- [ ] Tự implement được `createCounter`.
- [ ] Tự implement được `createStore`.
- [ ] Trace được một chương trình bằng Environment Graph + Call Stack + Value Flow.
- [ ] Debug được wrong binding, TDZ/ReferenceError, retained closure state và recursive stack growth.
- [ ] Teach Back Execution Context + Scope + Closure mà không nhìn tài liệu.
- [ ] Hoàn thành Capstone `createState` và giải thích được vì sao implementation hoạt động.

:::tip Checkpoint Complete
Nếu một checkbox chỉ đạt được bằng cách nhớ solution cụ thể trong file, chưa nên coi là mastery. Hãy đổi tên variable, đổi nesting hoặc đổi input rồi thử lại mental model trên một case mới.
:::

---

# Part L — Stage 1 → Stage 2 Bridge

## 14. Dependency Bridge

Sau Stage 1, bạn đã có chuỗi mental model:

```text
Execution Context
        ↓
Scope
        ↓
Lexical Environment
        ↓
Closure
        ↓
Call Stack
```

Nền này chuẩn bị cho Stage 2:

```text
Object
  ↓
this
  ↓
Prototype
  ↓
Property Lookup
  ↓
Class
  ↓
Proxy / Reflect
```

Stage 2 sẽ không thay thế mental model Stage 1. Nó xây thêm object/property behavior lên trên execution model đã có.

## 15. Spiral Connection (Liên kết xoắn ốc)

> **Previous (Trước):** Modules 1.1–1.5 đã tách Execution Context, Scope, Lexical Environment, Hoisting/TDZ, Closure và Call Stack thành từng mental model có thể dự đoán. Project 1 đã buộc các concept đó đi vào một abstraction state nhỏ.

> **Current (Hiện tại):** Stage 1 Checkpoint kiểm tra khả năng kết hợp các mental model thành một competency duy nhất: **predict → trace → implement → debug → explain**. Solution được cung cấp để self-check, nhưng mastery chỉ được chứng minh khi bạn có thể giải một variant mới mà không nhìn reveal.

> **Next (Tiếp theo):** Stage 2 dùng nền Scope / Execution / Call Stack để học `this`, Object Model, Prototype và Property Lookup. Closure sẽ quay lại ở Stage 3 với async callbacks, Stage 8 với React stale closure và Stage 11 với memory debugging.

## 16. Stage 1 Core Principle

Không giải thích JavaScript bằng câu **“nó hoạt động như vậy.”**

Khi gặp behavior mới, hãy truy ngược:

```text
Code
 ↓
Environment
 ↓
Binding
 ↓
Lookup
 ↓
Execution
 ↓
Stack
 ↓
Result
```

Đến đây, mục tiêu không phải nhớ nhiều thuật ngữ hơn. Mục tiêu là khi thấy một bug như callback đọc giá trị cũ, value không đổi, `ReferenceError`, `undefined`, nested call sai return hoặc stack overflow, bạn có thể chọn đúng mental model và chứng minh root cause bằng execution trace.
