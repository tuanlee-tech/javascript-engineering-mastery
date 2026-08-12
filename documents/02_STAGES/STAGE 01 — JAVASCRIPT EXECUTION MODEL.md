# JAVASCRIPT ENGINEERING MASTERY
## STAGE 1 — JAVASCRIPT EXECUTION MODEL
### Detailed Curriculum v1

---

# 0. Stage Overview

## Mục tiêu

Stage 1 trả lời một câu hỏi trung tâm:

> **Khi JavaScript chạy một đoạn code, engine thực sự làm gì?**

Stage 0 giúp người học biết **viết JavaScript**.

Stage 1 bắt đầu dạy họ **hiểu JavaScript**.

Đây là foundation trực tiếp cho:

```text
Execution Context
        ↓
Scope
        ↓
Lexical Environment
        ↓
Variable Resolution
        ↓
Closure
        ↓
Call Stack
        ↓
Async JavaScript
        ↓
React Hooks
        ↓
Memory & Debugging
```

Nếu Stage 0 là:

> “JavaScript có những gì?”

thì Stage 1 là:

> “JavaScript vận hành những thứ đó như thế nào?”

---

# 1. Phạm vi kiến thức

Stage 1 gồm **5 Modules / 24 Lessons**:

```text
1.1 Execution Context
1.2 Scope & Lexical Environment
1.3 Hoisting & Temporal Dead Zone
1.4 Closures
1.5 Call Stack & Execution Tracing
```

Đây là Stage đầu tiên mà người học phải bắt đầu:

- vẽ diagram
- trace code bằng tay
- dự đoán behavior
- debug bằng mental model
- giải thích "why"

---

# 2. MODULE 1.1 — EXECUTION CONTEXT

## Mục tiêu

Xây mental model cho việc JavaScript thực thi function và script như thế nào.

Không được học thuộc câu:

> “Execution Context là môi trường để code chạy.”

Phải hình dung được **khi function được gọi thì những thứ gì xuất hiện và biến mất**.

---

## Lesson 1.1.1 — Execution Context là gì?

### Kiến thức

- Execution Context
- Code đang được thực thi trong context nào
- Global code
- Function code
- Eval code ở mức awareness

### Mental Model

```text id="5h6x8e"
JavaScript Code
      ↓
Execution Context
      ↓
Execution
      ↓
Result
```

### Bài tập

Xác định context của:

```js id="m48g2l"
const x = 1;

function foo() {
  const y = 2;
}

foo();
```

Phân biệt:

```text
global execution
function execution
```

---

## Lesson 1.1.2 — Global Execution Context

### Kiến thức

- Global code
- Global bindings
- Global execution lifecycle
- Browser vs Node.js khác nhau ở mức conceptual

### Thực hành

Trace:

```js id="i5d4m5"
const a = 10;
const b = 20;

console.log(a + b);
```

Mô tả:

```text
Global Context Created
        ↓
Bindings Available
        ↓
Code Executed
```

---

## Lesson 1.1.3 — Function Execution Context

### Kiến thức

Khi:

```js id="q2uyqg"
foo();
```

xảy ra:

```text id="bgj2lr"
Call function
      ↓
Create Function Execution Context
      ↓
Execute function body
      ↓
Return
      ↓
Context removed
```

### Phải hiểu

Mỗi lần gọi function tạo ra một execution context riêng.

Ví dụ:

```js id="h6t5vz"
function add(a, b) {
  const result = a + b;
  return result;
}

add(1, 2);
add(10, 20);
```

Hai invocation không dùng chung local execution context.

---

## Lesson 1.1.4 — Creation Phase vs Execution Phase

### Creation Phase

Ở mức conceptual, người học phải hiểu engine chuẩn bị môi trường trước khi thực thi statement.

### Execution Phase

Sau đó code thực sự chạy.

### Diagram

```text id="g4g6f8"
FUNCTION CALL
     ↓
┌──────────────────────┐
│ Creation Phase       │
│ - environment setup  │
│ - bindings setup     │
│ - this setup         │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│ Execution Phase      │
│ - statements run     │
│ - expressions eval   │
└──────────┬───────────┘
           ↓
        return
```

Chi tiết `this`, bindings và lexical environment sẽ được bóc tách ở các module sau.

---

## Lesson 1.1.5 — Execution Context Stack

### Kiến thức

- Context stack
- Push
- Execute
- Pop
- Nested calls

### Trace

```js id="n5n08m"
function a() {
  b();
}

function b() {
  c();
}

function c() {
  console.log("done");
}

a();
```

Người học phải vẽ được:

```text id="nt7d4n"
Global
  ↓
a()
  ↓
b()
  ↓
c()
  ↓
console.log()
```

và quá trình pop ngược lại.

---

# 3. MODULE 1.2 — SCOPE & LEXICAL ENVIRONMENT

## Mục tiêu

Hiểu:

> JavaScript tìm một variable từ đâu?

Đây là prerequisite trực tiếp của Closure.

---

## Lesson 1.2.1 — Scope là gì?

### Kiến thức

- Scope
- Visibility
- Accessibility
- Lexical scope

Phân biệt:

```text
scope ≠ lifetime
scope ≠ value
scope ≠ execution context
```

---

## Lesson 1.2.2 — Global Scope

### Kiến thức

- Global bindings
- Global lookup
- Global pollution
- Global variable risk

### Lab

Tìm những gì trong code đang phụ thuộc global:

```js id="r1c9gz"
const config = {};

function render() {
  console.log(config);
}
```

---

## Lesson 1.2.3 — Function Scope

### Kiến thức

```text id="0a7u1e"
function foo() {
  const x = 1;
}
```

`x` chỉ có thể được resolve trong vùng lexical phù hợp.

### Lab

Dự đoán:

```js id="z5uh9w"
function foo() {
  const x = 10;
}

console.log(x);
```

---

## Lesson 1.2.4 — Block Scope

### Kiến thức

- Block
- `{ }`
- `let`
- `const`

Ví dụ:

```js id="zckg1k"
if (true) {
  const x = 10;
}

console.log(x);
```

---

## Lesson 1.2.5 — Nested Scope

### Kiến thức

Outer / Inner lexical scope.

```js id="lp0ip5"
const a = 1;

function outer() {
  const b = 2;

  function inner() {
    const c = 3;
  }
}
```

### Scope Graph

```text id="7wl6b6"
Global
 └── outer
      └── inner
```

---

## Lesson 1.2.6 — Variable Resolution

Đây là lesson quan trọng.

Khi code:

```js id="xv6u0k"
console.log(a);
```

engine phải xác định:

```text id="m8d1r8"
Current Environment
        ↓
Outer Environment
        ↓
Outer Environment
        ↓
Global
        ↓
Not Found → ReferenceError
```

### Lab

Trace variable lookup với nested functions 3–4 tầng.

---

## Lesson 1.2.7 — Lexical Environment

### Kiến thức

- Lexical Environment
- Environment Record
- Outer reference
- Identifier resolution

Không cần học specification algorithm một cách máy móc.

Mục tiêu là có mental model:

```text id="c8e8iy"
Environment
├── local bindings
└── outer environment reference
```

---

## Lesson 1.2.8 — Scope vs Execution Context

Đây là bài phân biệt quan trọng.

| Khái niệm | Trả lời câu hỏi |
|---|---|
| Scope | Variable có thể được nhìn thấy từ đâu? |
| Execution Context | Code hiện tại đang được thực thi trong context nào? |
| Lexical Environment | Environment lưu bindings + liên kết outer |
| Call Stack | Context nào đang thực thi trước context nào? |

### Exit Criteria

Không được dùng các khái niệm này thay thế cho nhau.

---

# 4. MODULE 1.3 — HOISTING & TEMPORAL DEAD ZONE

## Mục tiêu

Phá bỏ mental model sai:

> “JavaScript đưa tất cả variable lên đầu file.”

Đây là module cần dạy theo cơ chế, không theo mẹo.

---

## Lesson 1.3.1 — Declaration vs Initialization

Phân biệt:

```text id="s5vf83"
declaration
initialization
assignment
```

Ví dụ:

```js id="6a1npi"
let x;
x = 10;
```

---

## Lesson 1.3.2 — `var`

### Kiến thức

- `var`
- Function scope
- Declaration behavior
- Initialization behavior

Trace:

```js id="sll07q"
console.log(x);
var x = 10;
```

---

## Lesson 1.3.3 — `let` và `const`

### Kiến thức

- Block scope
- Declaration
- Initialization
- Access before initialization

---

## Lesson 1.3.4 — Temporal Dead Zone

### Mental Model

```text id="uw4gxb"
Binding created
      ↓
TDZ
      ↓
Initialization
      ↓
Usable
```

Ví dụ:

```js id="86n8k8"
{
  console.log(x);
  let x = 10;
}
```

### Câu hỏi bắt buộc

> “Tại sao `x` tồn tại nhưng vẫn không thể truy cập?”

---

## Lesson 1.3.5 — Hoisting không phải một cơ chế duy nhất

Phải phân biệt:

```text id="t2wmpk"
function declaration
var
let
const
class
```

### Lab

Predict output / error của 15 đoạn code.

---

## Lesson 1.3.6 — Hoisting trong Function

Trace:

```js id="k21x75"
function test() {
  console.log(a);
  var a = 10;
}
```

so với:

```js id="6uhgq3"
function test() {
  console.log(a);
  let a = 10;
}
```

Phải giải thích bằng environment model, không bằng:

> “var hoisted, let không.”

---

# 5. MODULE 1.4 — CLOSURES

## Mục tiêu

Đây là **một trong những kiến thức quan trọng nhất toàn bộ khóa JavaScript**.

Closure sẽ được sử dụng lại ở:

- callback
- async
- React Hooks
- event listeners
- factories
- state managers
- memory debugging

---

## Lesson 1.4.1 — Closure Formation

Bắt đầu từ lexical scope:

```js id="j7lsq2"
function outer() {
  const x = 10;

  function inner() {
    console.log(x);
  }

  return inner;
}
```

### Mental Model

```text id="t3zp6a"
inner()
   ↓
Needs x
   ↓
Current Environment
   ↓
Outer Environment
   ↓
x
```

---

## Lesson 1.4.2 — Closure và Lifetime

Đây là điểm Senior-level bắt đầu hình thành.

Function có thể giữ reference tới outer environment ngay cả sau khi outer function return.

```text id="s5c2p7"
outer()
  ↓
environment created
  ↓
return inner
  ↓
outer execution ends
  ↓
inner still retains needed environment
```

---

## Lesson 1.4.3 — Closure làm Private State

Implement:

```js id="6pgl5z"
createCounter()
```

API:

```text id="xky0k2"
increment()
decrement()
getValue()
```

Không expose trực tiếp `count`.

---

## Lesson 1.4.4 — Factory Functions

Implement:

```text id="l4k7uw"
createUser()
createLogger()
createStore()
```

Mỗi instance có state riêng.

---

## Lesson 1.4.5 — Closure trong Loop

Case kinh điển:

```js id="2ibxup"
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0);
}
```

Phải giải thích tại sao kết quả không phải:

```text
0 1 2 3 4
```

Sau đó sửa bằng:

- `let`
- IIFE / explicit capture
- factory function

---

## Lesson 1.4.6 — Closure + Callback

Ví dụ:

```js id="0ukxg4"
function createHandler(userId) {
  return function handleClick() {
    console.log(userId);
  };
}
```

Phải hiểu callback đang giữ lại environment nào.

---

## Lesson 1.4.7 — Closure + Async

Ví dụ:

```js id="mkd2p5"
function search(query) {
  setTimeout(() => {
    console.log(query);
  }, 1000);
}
```

Phải trace:

```text id="is2m7w"
call
→ create callback
→ callback captures query
→ function returns
→ timer later executes callback
```

---

## Lesson 1.4.8 — Stale Closure

Đây là prerequisite rất quan trọng cho React.

Khái niệm:

```text id="6l44ar"
value at creation time
        ≠
latest value in system
```

Case:

```js id="0r7q1c"
let count = 0;

function logLater() {
  setTimeout(() => {
    console.log(count);
  }, 1000);
}
```

Sau đó đưa vào các scenario phức tạp hơn.

---

## Lesson 1.4.9 — Closure & Memory

Chưa đi sâu Garbage Collection.

Chỉ xây awareness:

```text id="11q4q8"
Closure
   ↓
Retains references
   ↓
Referenced objects may stay reachable
```

Chi tiết memory retention thuộc Stage 11.

---

# 6. MODULE 1.5 — CALL STACK & EXECUTION TRACING

## Mục tiêu

Gộp Execution Context + Scope + Closure thành một kỹ năng trace code.

---

## Lesson 1.5.1 — Stack Frames

Hiểu:

```text id="ig7rzq"
Global Context
Function A
Function B
Function C
```

---

## Lesson 1.5.2 — Nested Calls

Trace:

```js id="cyhxsp"
function a() {
  b();
}

function b() {
  c();
}

function c() {
  return 42;
}

console.log(a());
```

---

## Lesson 1.5.3 — Recursion

- Recursive function
- Stack growth
- Base case
- Stack overflow

Không biến thành algorithms course.

---

## Lesson 1.5.4 — Exception & Stack Unwinding

Ví dụ:

```js id="86t22c"
function a() {
  b();
}

function b() {
  throw new Error("boom");
}

a();
```

Trace:

```text id="nz4hsn"
throw
 ↓
current frame exits
 ↓
caller
 ↓
caller
 ↓
catch boundary / unhandled
```

---

## Lesson 1.5.5 — Full Execution Trace

Đây là bài tổng hợp.

Code có:

- global
- nested function
- local variable
- closure
- callback
- exception

Người học phải vẽ:

```text id="wqhpqe"
Environment graph
+
Call Stack
+
Value flow
```

---

# 7. INTEGRATION LAB — STAGE 1

# Project 1 — Closure-based State Library

Xây một state container tối giản chỉ bằng JavaScript.

## API

```js id="n0y96n"
const store = createStore(initialState);

store.getState();

store.setState(nextState);

const unsubscribe = store.subscribe(listener);

unsubscribe();
```

## Yêu cầu

### Part 1 — Private state

State không được expose trực tiếp.

### Part 2 — Subscribers

Mỗi subscriber là callback được lưu lại.

### Part 3 — Update

`setState()` update state và notify subscribers.

### Part 4 — Unsubscribe

Subscriber có thể tự remove.

### Part 5 — Multiple instances

```js id="l0bfje"
const userStore = createStore(...);
const cartStore = createStore(...);
```

Hai store không được dùng chung state.

### Part 6 — Debug

Tạo cố tình bug:

```text id="h9r1kv"
subscriber không unsubscribe
callback giữ reference
nested update
```

Người học phải tìm root cause.

---

# 8. EDGE CASE LAB

Stage 1 phải có các case sau.

## Case 1 — Hoisting

```js id="q9db3a"
console.log(a);
var a = 10;
```

## Case 2 — TDZ

```js id="39u05f"
console.log(a);
let a = 10;
```

## Case 3 — Scope Shadowing

```js id="5yoc4k"
let x = 1;

function test() {
  let x = 2;

  function inner() {
    let x = 3;
    console.log(x);
  }

  inner();
}
```

## Case 4 — Closure

```js id="2vnsj7"
function outer() {
  const value = 10;

  return () => value;
}
```

## Case 5 — Loop Closure

```js id="gc6m5v"
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
```

## Case 6 — Stale State

Thiết kế callback sử dụng state cũ.

## Case 7 — Stack Overflow

Recursive function không có base case.

---

# 9. DEBUG LAB

## Bug 1 — Wrong Value

Developer cho rằng variable "bị đổi".

Người học phải xác định:

```text
mutation?
reassignment?
shadowing?
closure?
```

---

## Bug 2 — Undefined vs ReferenceError

Phân biệt:

```text id="r3j3y0"
undefined
vs
ReferenceError
```

và giải thích tại sao.

---

## Bug 3 — Closure Retaining State

Một callback vẫn giữ reference tới object.

Người học chưa cần phân tích GC sâu, chỉ cần xác định:

> Callback nào đang giữ reference?

---

## Bug 4 — Recursive Stack Overflow

Tìm:

- base case thiếu
- recursion depth
- stack growth

---

# 10. SOURCE & DOCUMENTATION

Stage 1 bắt đầu đọc primary source nghiêm túc hơn Stage 0.

## JavaScript

- ECMAScript specification: Environment Records / execution semantics ở mức tham khảo
- MDN JavaScript Guide
- MDN Closures

## Runtime

- V8 documentation / blog ở mức supporting material

Không yêu cầu đọc source engine.

Mục tiêu là:

> Kiểm tra semantics bằng nguồn chuẩn khi mental model không chắc.

---

# 11. RE-IMPLEMENTATION LAB

Không được dùng library.

Tự implement:

### 11.1 — `once`

```js id="mtefqi"
once(fn)
```

Function chỉ chạy một lần.

### 11.2 — `memoize`

```js id="y3cw6n"
memoize(fn)
```

### 11.3 — `createCounter`

Closure private state.

### 11.4 — `createStore`

Private state + subscription.

### 11.5 — `compose`

Function composition cơ bản.

Mục tiêu không phải tạo library production.

Mục tiêu:

> chứng minh đã hiểu execution + scope + closure.

---

# 12. TEACH-BACK

Người học phải có thể giải thích không nhìn tài liệu:

### Level 1

> Execution Context là gì?

### Level 2

> Scope khác Execution Context thế nào?

### Level 3

> Tại sao function bên trong có thể truy cập variable của outer function?

### Level 4

> Tại sao outer function đã return nhưng closure vẫn hoạt động?

### Level 5

> Closure có thể gây memory retention như thế nào?

Level 5 chỉ cần giải thích conceptual, chưa yêu cầu GC internals.

---

# 13. EXIT CRITERIA — STAGE 1

## Execution Context

- [ ] Giải thích được Global vs Function Execution Context.
- [ ] Vẽ được Execution Context Stack.
- [ ] Trace được nested function calls.

## Scope

- [ ] Phân biệt Global / Function / Block Scope.
- [ ] Vẽ được Scope Chain cho nested functions.
- [ ] Giải thích variable resolution.

## Hoisting

- [ ] Phân biệt declaration / initialization / assignment.
- [ ] Giải thích behavior của `var`.
- [ ] Giải thích behavior của `let` / `const`.
- [ ] Giải thích TDZ bằng environment model.

## Closure

- [ ] Định nghĩa closure chính xác.
- [ ] Vẽ được closure environment.
- [ ] Implement private state bằng closure.
- [ ] Giải thích closure trong callback.
- [ ] Giải thích stale closure.
- [ ] Nhận biết reference retention do closure.

## Call Stack

- [ ] Vẽ được call stack của nested calls.
- [ ] Giải thích stack overflow.
- [ ] Giải thích stack unwinding khi throw.

## Integration

- [ ] Tự implement `createStore`.
- [ ] Implement được `once`.
- [ ] Implement được `memoize`.
- [ ] Debug được 4 edge cases.
- [ ] Teach Back Execution Context + Closure mà không dùng tài liệu.

---

# 14. STAGE 1 CHECKPOINT

## Part A — Mental Model

Trả lời bằng sơ đồ:

> Một function call tạo ra những gì?

---

## Part B — Predict

10 đoạn code gồm:

```text id="rgdxwe"
scope
hoisting
TDZ
shadowing
closure
nested invocation
exception
```

Không chạy code.

---

## Part C — Trace

Cho một đoạn code khoảng 30–50 dòng.

Người học phải vẽ:

```text id="bq58x4"
Execution Context
+
Scope
+
Call Stack
+
Closure reference
```

---

## Part D — Implement

Tự viết:

```text id="zmr31r"
once
memoize
createCounter
createStore
```

---

## Part E — Debug

Một bug closure + async.

Không được fix bằng trial-and-error.

Phải trình bày:

```text id="0j8v6p"
Observed Behavior
→ Mental Model
→ Hypothesis
→ Verification
→ Root Cause
→ Fix
```

---

# 15. STAGE 1 CAPSTONE

# Closure & Execution Lab

Xây một thư viện nhỏ:

```js id="vxdq7v"
createState(initialState)
```

Có:

```text id="l3v2i9"
get()
set()
subscribe()
unsubscribe()
select()
```

Sau đó thêm:

```text id="7tlt5n"
memoized selector
derived state
listener cleanup
```

### Challenge

Cố tình đưa vào:

```text
1. stale closure
2. forgotten unsubscribe
3. state shadowing
4. incorrect initialization
5. recursive update
```

Người học phải tự tìm và sửa.

---

# 16. STAGE 1 → STAGE 2 DEPENDENCY

Sau Stage 1, người học đã hiểu:

```text id="4uc6au"
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

Do đó mới đủ nền để học Stage 2:

```text id="0w4h78"
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

Đặc biệt:

```text id="6n7y4x"
Stage 1 Closure
        ↓
Stage 3 Async callbacks
        ↓
Stage 8 React Hooks
        ↓
Stage 11 Memory debugging
```

và:

```text id="3p6hkf"
Stage 1 Scope
        ↓
Stage 2 this / Prototype
        ↓
Stage 6 TypeScript mental model
        ↓
Stage 8 React mental model
```

---

# 17. STAGE 1 CORE PRINCIPLE

Stage này có một nguyên tắc:

> **Không được giải thích JavaScript bằng câu “nó hoạt động như vậy”.**

Mỗi behavior phải truy được về một mental model:

```text id="yx8f6t"
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

Đến cuối Stage 1, mục tiêu không phải người học thuộc định nghĩa “closure”.

Mục tiêu là khi thấy một bug như:

```text
“callback đang đọc giá trị cũ”
```

họ lập tức nghĩ:

```text
Scope?
Closure?
Environment?
Reference?
Execution timing?
```

Đó mới là **JavaScript Core competency** mà các Stage sau có thể xây lên.