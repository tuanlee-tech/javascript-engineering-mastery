# JAVASCRIPT ENGINEERING MASTERY
## STAGE 0 — JAVASCRIPT LANGUAGE FOUNDATION
### Detailed Curriculum v1

---

# 0. Stage Overview

## Mục tiêu

Stage 0 xây lại nền tảng JavaScript từ đầu cho một Junior đã có kinh nghiệm thực tế nhưng còn thiếu mental model.

Không nhằm biến người học thành người "biết syntax".

Mục tiêu là:

> **Đọc JavaScript → hiểu value → hiểu data → hiểu function → viết code đúng → giải thích được behavior cơ bản.**

Stage này là prerequisite trực tiếp cho:

```text
Stage 1 — Execution Model
Stage 2 — Object Model
Stage 3 — Async
Stage 6 — TypeScript
Stage 8 — React
```

---

# 1. Phạm vi kiến thức

Stage 0 gồm **7 Modules / 27 Lessons**, chia thành 5 năng lực:

```text
VALUE
 ↓
TYPE
 ↓
CONTROL FLOW
 ↓
FUNCTION
 ↓
DATA & ERROR
```

Không đi sâu vào:

- Execution Context
- Closure
- Prototype
- `this`
- Promise
- Event Loop
- Browser APIs
- V8 internals

Các phần đó thuộc Stage sau để tránh trộn dependency.

---

# 2. MODULE 0.1 — JAVASCRIPT & RUNTIME FUNDAMENTALS

## Mục tiêu

Xây mental model đúng về JavaScript trước khi học syntax.

---

## Lesson 0.1.1 — JavaScript là gì?

### Core

- JavaScript
- ECMAScript
- ECMAScript specification
- JavaScript runtime
- JavaScript engine
- Host environment
- Browser
- Node.js

### Cần hiểu

```text
ECMAScript
   ↓
Language rules

JavaScript Engine
   ↓
Executes JavaScript

Host Environment
   ↓
Provides APIs
```

### Không cần đào sâu

- Engine internals
- JIT
- Garbage Collector

Các phần này thuộc Stage 11.

---

## Lesson 0.1.2 — Browser vs Node.js

### Kiến thức

- Browser runtime
- Node.js runtime
- Global environment
- Host APIs
- DOM là gì
- Vì sao Node.js không có DOM

### Thực hành

Viết cùng một đoạn JavaScript và xác định:

```text
Language feature?
Host API?
Browser-only?
Node-only?
```

### Key exercise

Phân loại:

- `Array`
- `Promise`
- `fetch`
- `document`
- `process`
- `setTimeout`
- `localStorage`

---

## Lesson 0.1.3 — JavaScript Execution ở mức khái niệm

Chỉ xây mental model sơ cấp:

```text
Source Code
    ↓
JavaScript Engine
    ↓
Execution
```

Chưa học Execution Context ở Stage 0.

---

# 3. MODULE 0.2 — VALUES, VARIABLES & TYPES

## Mục tiêu

Đây là module cực kỳ quan trọng.

Người học phải phân biệt:

```text
Value
Variable
Binding
Assignment
Mutation
Reference
```

---

## Lesson 0.2.1 — Values

- What is a value?
- Primitive value
- Object value
- Identity
- Equality

### Exercise

Phân loại:

```js
42
"hello"
true
null
undefined
{}
[]
() => {}
```

---

## Lesson 0.2.2 — Variables & Bindings

- Declaration
- Initialization
- Assignment
- Reassignment
- Binding
- `var`
- `let`
- `const`

### Phải phân biệt

```text
const variable ≠ immutable object
```

Ví dụ:

```js
const user = { name: "A" };

user.name = "B"; // hợp lệ
```

---

## Lesson 0.2.3 — Primitive Types

- String
- Number
- Boolean
- Null
- Undefined
- BigInt
- Symbol

### Đặc biệt

- `NaN`
- `Infinity`
- `-Infinity`

---

## Lesson 0.2.4 — Object Values

- Object
- Array
- Function
- Date
- RegExp
- Map
- Set

Ở đây chỉ cần biết chúng là object/value category.

Internal mechanics chuyển sang Stage 2.

---

## Lesson 0.2.5 — `typeof`

- `typeof`
- Các kết quả đặc biệt
- `typeof null`
- `typeof function`
- `typeof []`

### Lab

Dự đoán output trước khi chạy.

---

# 4. MODULE 0.3 — COERCION & EQUALITY

## Mục tiêu

Loại bỏ một trong những nguồn bug lớn nhất của JavaScript Junior.

---

## Lesson 0.3.1 — Truthy & Falsy

- `false`
- `0`
- `-0`
- `0n`
- `""`
- `null`
- `undefined`
- `NaN`

### Lab

Dự đoán:

```js
if ("0")
if ([])
if ({})
if (0)
if (NaN)
```

---

## Lesson 0.3.2 — Equality

- `==`
- `===`
- `Object.is`

### Phải hiểu

```text
value equality
identity
coercion
```

Không học bằng mẹo.

---

## Lesson 0.3.3 — Type Conversion

### Explicit

- `Number()`
- `String()`
- `Boolean()`
- `BigInt()`

### Implicit

- string concatenation
- numeric conversion
- boolean conversion

---

## Lesson 0.3.4 — Coercion Lab

Không đọc thêm lý thuyết.

Chỉ làm bài:

```js
[] == false
"" == false
0 == ""
null == undefined
NaN === NaN
Object.is(NaN, NaN)
```

Sau mỗi câu phải giải thích:

> JavaScript đã chuyển value nào thành cái gì?

### Exit Criteria

Không được trả lời:

> "JavaScript nó thế."

Phải chỉ ra được cơ chế.

---

# 5. MODULE 0.4 — OPERATORS & CONTROL FLOW

## Mục tiêu

Xây khả năng điều khiển logic chương trình.

---

## Lesson 0.4.1 — Operators

### Arithmetic

- `+`
- `-`
- `*`
- `/`
- `%`
- `**`

### Comparison

- `<`
- `>`
- `<=`
- `>=`
- `==`
- `===`

### Logical

- `&&`
- `||`
- `!`
- `??`

### Assignment

- `=`
- `+=`
- `-=`
- `*=`
- `??=`
- `||=`
- `&&=`

---

## Lesson 0.4.2 — Conditional Logic

- `if`
- `else`
- `else if`
- nested conditions
- ternary
- switch

---

## Lesson 0.4.3 — Short-circuit Evaluation

Đây là lesson quan trọng hơn vẻ ngoài.

```js
user && user.profile
```

```js
value ?? fallback
```

```js
condition && doSomething()
```

### Phải hiểu

Short-circuiting là behavior của operator, không chỉ là syntax shortcut.

---

## Lesson 0.4.4 — Guard Clauses & Early Return

Từ đây bắt đầu đưa vào engineering style.

So sánh:

```js
if (...) {
  if (...) {
    if (...) {
      ...
    }
  }
}
```

với:

```js
if (!condition) return;
if (!otherCondition) return;
...
```

---

## Lesson 0.4.5 — Loops

- `for`
- `while`
- `do...while`
- `break`
- `continue`

---

## Lesson 0.4.6 — `for...of` vs `for...in`

Không chỉ học syntax.

Phải hiểu:

```text
for...in → enumerable properties
for...of → iterable values
```

Iterable protocol sẽ đào sâu ở Stage 2.

---

# 6. MODULE 0.5 — FUNCTIONS

## Mục tiêu

Chuẩn bị cho Execution Context, Closure và functional programming.

Đây là một trong những module quan trọng nhất Stage 0.

---

## Lesson 0.5.1 — Function Declaration

- Function declaration
- Parameters
- Arguments
- Return
- Side effect

---

## Lesson 0.5.2 — Function Expression

```js
const add = function () {};
```

Hiểu:

- function là value
- function có thể được gán vào variable
- function có thể truyền như argument

---

## Lesson 0.5.3 — Arrow Functions

- Syntax
- Return implicit
- Parameter syntax

Không học `this` ở đây.

`this` thuộc Stage 2.

---

## Lesson 0.5.4 — Parameters

- Default parameters
- Rest parameters
- Arguments
- Parameter destructuring

---

## Lesson 0.5.5 — Callback

- Function as argument
- Function as value
- Callback concept

Ví dụ:

```js
users.map(transform)
```

---

## Lesson 0.5.6 — Higher-order Functions

- Function nhận function
- Function trả về function

Chỉ cần concept.

Closure sẽ đào sâu ở Stage 1.

---

## Lesson 0.5.7 — Function Design

### Engineering

- Pure vs impure function
- Side effect
- Single responsibility
- Input / output
- Naming
- Composition cơ bản

### Lab

Refactor một function:

```text
200 lines
↓
small pure functions
↓
composition
```

---

# 7. MODULE 0.6 — DATA STRUCTURES

## Mục tiêu

Biết sử dụng dữ liệu đúng cách trước khi học algorithms và state architecture.

---

## Lesson 0.6.1 — Strings

- Creation
- Indexing
- Length
- Template literals

### Methods

- `includes`
- `startsWith`
- `endsWith`
- `slice`
- `substring`
- `split`
- `replace`

---

## Lesson 0.6.2 — Arrays

### Creation & Access

- Array literal
- Index
- Length

### Mutation

- `push`
- `pop`
- `shift`
- `unshift`
- `splice`

### Non-mutating

- `slice`
- spread

---

## Lesson 0.6.3 — Array Iteration

- `forEach`
- `map`
- `filter`
- `find`
- `findIndex`
- `some`
- `every`
- `includes`

---

## Lesson 0.6.4 — Reduce

Không dạy `reduce` như magic.

Phải hiểu:

```text
collection
→ accumulator
→ current value
→ next accumulator
→ final result
```

### Lab

Implement:

- sum
- count
- group
- index by ID

---

## Lesson 0.6.5 — Objects

- Property
- Access
- Computed access
- Add / update / delete
- Nested objects

---

## Lesson 0.6.6 — Object Utilities

- `Object.keys`
- `Object.values`
- `Object.entries`

### Exercise

Transform object ↔ array.

---

## Lesson 0.6.7 — Destructuring

- Object destructuring
- Array destructuring
- Default values
- Nested destructuring

---

## Lesson 0.6.8 — Spread & Shallow Copy

- Object spread
- Array spread
- Copy
- Reference sharing

### Đây là điểm nối với Stage 1/2

Phải hiểu:

```js
const b = { ...a };
```

không đồng nghĩa deep clone.

---

# 8. MODULE 0.7 — ERROR HANDLING & CODE QUALITY

## Mục tiêu

Ngay từ nền tảng đã phải hình thành tư duy:

> Code không chỉ cần chạy đúng path.

---

## Lesson 0.7.1 — Errors

- Error object
- Error message
- Stack
- Built-in errors

---

## Lesson 0.7.2 — Throw

- `throw`
- Error propagation concept

---

## Lesson 0.7.3 — Try/Catch

- `try`
- `catch`
- `finally`

Chưa đi sâu async errors.

---

## Lesson 0.7.4 — Defensive Programming

- Input validation
- Guard clause
- Null handling
- Boundary checking

---

## Lesson 0.7.5 — Readable JavaScript

- Naming
- Function size
- Mutation control
- Avoid deep nesting
- Early return
- Explicitness

### Lab

Review một đoạn code xấu và:

```text
identify problems
→ refactor
→ explain trade-offs
```

---

# 9. INTEGRATION LAB — STAGE 0

Sau khi hoàn thành 7 modules, không học thêm kiến thức mới.

Xây:

# Project 0 — CLI Data Processor

## Input

```json
[
  {
    "id": 1,
    "name": "Alice",
    "age": 24,
    "department": "engineering",
    "salary": 1800
  }
]
```

## Requirements

### Part 1 — Validation

- kiểm tra object
- kiểm tra required fields
- kiểm tra type

### Part 2 — Transform

- normalize data
- format name
- calculate derived values

### Part 3 — Filtering

- age
- department
- salary

### Part 4 — Aggregation

- count
- average
- group by department
- total salary

### Part 5 — Error Handling

- malformed input
- missing property
- invalid type
- empty data

### Part 6 — Refactoring

Code ban đầu có thể là một function lớn.

Người học phải refactor thành:

```text
parse
→ validate
→ normalize
→ filter
→ aggregate
→ format
```

---

# 10. DELIBERATE PRACTICE — STAGE 0

Mỗi module bắt buộc có 4 loại bài tập.

## A. Prediction

Đọc code và đoán output.

Không chạy code trước.

---

## B. Implementation

Tự viết từ đầu.

Ví dụ:

```text
groupBy
indexBy
countBy
uniqueBy
```

không dùng thư viện.

---

## C. Debug

Được cung cấp code hỏng.

Phải:

```text
reproduce
→ inspect
→ identify
→ fix
```

---

## D. Explain

Giải thích lại bằng lời.

Ví dụ:

> Tại sao `const` vẫn cho phép mutation?

> Tại sao `{...object}` chỉ shallow copy?

> Tại sao `for...of` khác `for...in`?

---

# 11. SOURCE & DOCUMENTATION

Stage 0 **không bắt buộc đọc V8 source**.

Nhưng bắt đầu hình thành thói quen đọc primary source:

### JavaScript

- ECMAScript specification ở mức tham khảo

### Runtime

- MDN
- Node.js documentation

### Browser

- MDN Web Docs

Mục tiêu không phải đọc spec từ đầu đến cuối.

Mục tiêu:

> Biết tìm semantics chính xác thay vì dựa vào blog giải thích sai.

---

# 12. EXIT CRITERIA — STAGE 0

Chỉ pass Stage 0 khi đạt tất cả nhóm sau.

## Language

- [ ] Giải thích được JavaScript, ECMAScript, Engine và Runtime khác nhau thế nào.
- [ ] Phân biệt value, variable, binding, assignment và mutation.
- [ ] Phân biệt Primitive và Object.
- [ ] Giải thích được `==`, `===`, `Object.is`.
- [ ] Giải thích được truthy/falsy và coercion.

## Control Flow

- [ ] Viết control flow không cần tutorial.
- [ ] Sử dụng guard clause và early return hợp lý.
- [ ] Phân biệt `for...in` và `for...of`.

## Functions

- [ ] Viết được function declaration, expression và arrow function.
- [ ] Giải thích function là value.
- [ ] Sử dụng callback và higher-order function.
- [ ] Tách được function lớn thành các function có trách nhiệm rõ ràng.

## Data

- [ ] Thành thạo các thao tác Array phổ biến.
- [ ] Dùng `map/filter/reduce` đúng bản chất.
- [ ] Chuyển đổi Object ↔ Array.
- [ ] Giải thích shallow copy.
- [ ] Không nhầm mutation với reassignment.

## Errors

- [ ] Xử lý input không hợp lệ.
- [ ] Sử dụng `throw/try/catch` đúng mục đích.
- [ ] Có thể đọc stack trace cơ bản.

## Integration

- [ ] Hoàn thành CLI Data Processor.
- [ ] Không copy solution.
- [ ] Có test/manual verification cho edge cases.
- [ ] Có thể giải thích toàn bộ architecture của project.

---

# 13. STAGE 0 CHECKPOINT

Người học phải hoàn thành bài kiểm tra tổng hợp:

## Part A — Predict

10 đoạn code, không chạy.

## Part B — Implement

5 bài:

```text
groupBy
uniqueBy
indexBy
flatten
safeGet
```

## Part C — Debug

3 bug:

```text
unexpected coercion
mutation bug
incorrect iteration
```

## Part D — Refactor

Một function khoảng 100 dòng thành architecture sạch hơn.

## Part E — Teach Back

Giải thích 10 phút:

> “JavaScript value, variable, function và object khác nhau như thế nào?”

---

# 14. KẾT QUẢ CỦA STAGE 0

Sau Stage 0, người học **chưa phải Senior và cũng chưa phải Advanced JavaScript Engineer**.

Đúng mục tiêu hơn là:

```text
Junior
   ↓
Strong Junior Foundation
   ↓
READY FOR RUNTIME
```

Người học lúc này mới đủ nền để bước vào:

```text
STAGE 1
Execution Context
Scope
Hoisting
TDZ
Closure
Call Stack
```

Và đây là điểm rất quan trọng:

> **Stage 0 không cố dạy quá sâu.**

Không đưa V8 vào đây.

Không đưa Event Loop vào đây.

Không đưa Prototype vào đây.

Không đưa React vào đây.

Không đưa TypeScript vào đây.

Mục đích là giữ mental model sạch và dependency rõ ràng.

---

# 15. ROADMAP SAU STAGE 0

```text
STAGE 0
Language Foundation
        ↓
        └── prerequisite cho mọi thứ

STAGE 1
Execution Model
        ↓
        ├── Closure
        ├── Async
        ├── React
        └── Debugging

STAGE 2
Object Model
        ↓
        ├── Libraries
        ├── Framework internals
        └── Advanced JS

STAGE 3
Async & Concurrency
        ↓
        ├── Browser
        ├── Data Fetching
        ├── Realtime
        └── React

STAGE 4
Browser Runtime
        ↓
        ├── Rendering
        ├── React
        └── Performance
```

**Đây là giáo án chi tiết cấp Module/Lesson cho Stage 0.**

Stage tiếp theo cần làm theo đúng cách này là **Stage 1 — Execution Model**, vì đây mới là nơi bắt đầu phần JavaScript Core sâu và là foundation trực tiếp cho Closure, Event Loop, React Hooks, Memory và Debugging.