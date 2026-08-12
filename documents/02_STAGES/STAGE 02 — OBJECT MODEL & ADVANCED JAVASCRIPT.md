# JAVASCRIPT ENGINEERING MASTERY
## STAGE 2 — OBJECT MODEL & ADVANCED JAVASCRIPT
### Detailed Curriculum v1

---

# 0. Stage Overview

## Mục tiêu

Stage 2 trả lời câu hỏi:

> **JavaScript thực sự mô hình hóa Object, Function và Inheritance như thế nào?**

Sau Stage 0, người học biết sử dụng Object và Function.

Sau Stage 1, người học hiểu:

```text
Execution Context
Scope
Lexical Environment
Closure
Call Stack
```

Stage 2 xây tiếp tầng:

```text
Object
 ↓
Property
 ↓
Prototype
 ↓
Property Lookup
 ↓
this
 ↓
new
 ↓
Class
 ↓
Meta-programming
```

Đây là foundation cho:

- JavaScript libraries
- framework internals
- state libraries
- class-based legacy code
- debugging `this`
- understanding React/third-party abstractions
- advanced TypeScript modeling
- API/library design

---

# 1. Phạm vi kiến thức

Stage 2 gồm **7 Modules / 30 Lessons**:

```text
2.1 Object Internals
2.2 Property Access & Descriptors
2.3 this Binding
2.4 Prototype & Inheritance
2.5 Classes
2.6 Iteration, Symbols & Generators
2.7 Proxy, Reflect & Meta-programming
```

Không đào sâu vào:

- V8 Hidden Classes
- JIT
- Garbage Collection
- Promise
- Event Loop

Các phần đó thuộc Stage 11 và Stage 3.

---

# 2. MODULE 2.1 — OBJECT INTERNALS

## Mục tiêu

Thoát khỏi mental model:

> “Object chỉ là một cái dictionary key/value.”

Object trong JavaScript có identity, properties và prototype relationship.

---

## Lesson 2.1.1 — Object Identity

### Kiến thức

- Object value
- Identity
- Reference
- Equality

Ví dụ:

```js
const a = {};
const b = {};

a === b; // false
```

Phải giải thích được:

> Hai object có nội dung giống nhau nhưng không cùng identity.

---

## Lesson 2.1.2 — Property

- Property key
- Property value
- String keys
- Symbol keys
- Computed property

```js
const key = "name";

const user = {
  [key]: "Alice"
};
```

---

## Lesson 2.1.3 — Property Access

- Dot notation
- Bracket notation
- Dynamic property access
- Nested lookup

```js
user.name;
user["name"];
user[key];
```

Phải phân biệt:

```text
property key
vs
property value
```

---

## Lesson 2.1.4 — Add / Update / Delete

- create property
- update property
- delete property
- absent property
- property value `undefined`

Đặc biệt:

```js
obj.x === undefined
```

không đồng nghĩa:

> property `x` không tồn tại.

Phải biết:

```js
"x" in obj
Object.hasOwn(obj, "x")
```

---

# 3. MODULE 2.2 — PROPERTY DESCRIPTORS & ACCESS SEMANTICS

## Mục tiêu

Hiểu object property không chỉ có key/value.

Mỗi property có behavior.

---

## Lesson 2.2.1 — Property Descriptors

- `value`
- `writable`
- `enumerable`
- `configurable`

Ví dụ:

```js
Object.getOwnPropertyDescriptor(obj, "name");
```

---

## Lesson 2.2.2 — Define Property

- `Object.defineProperty`
- `Object.defineProperties`

### Lab

Tạo:

```text
read-only property
non-enumerable property
non-configurable property
```

---

## Lesson 2.2.3 — Getter / Setter

```js
const user = {
  get fullName() {},
  set fullName(value) {}
};
```

### Phải hiểu

Getter/setter vẫn là property behavior, không phải method bình thường.

---

## Lesson 2.2.4 — Enumerability

So sánh:

```js
Object.keys()
Object.values()
Object.entries()
for...in
Object.getOwnPropertyNames()
Object.getOwnPropertySymbols()
Reflect.ownKeys()
```

### Lab

Tạo object với property:

- enumerable
- non-enumerable
- symbol

và xác định API nào nhìn thấy property nào.

---

## Lesson 2.2.5 — Own Property vs Inherited Property

Phân biệt:

```text
own property
inherited property
```

Sử dụng:

```js
Object.hasOwn()
"x" in obj
```

---

# 4. MODULE 2.3 — `this` BINDING

## Mục tiêu

Đây là một trong những phần dễ hiểu sai nhất của JavaScript.

Không học:

> "`this` là object hiện tại."

Thay vào đó học:

> **`this` được xác định bởi cách function được gọi.**

Ngoại lệ quan trọng: arrow function dùng lexical `this`.

---

## Lesson 2.3.1 — Default Binding

```js
function show() {
  console.log(this);
}

show();
```

Phân biệt strict mode và non-strict mode.

---

## Lesson 2.3.2 — Implicit Binding

```js
const user = {
  name: "Alice",
  greet() {
    console.log(this.name);
  }
};

user.greet();
```

Mental model:

```text
call site
→ object.method()
→ this = object
```

---

## Lesson 2.3.3 — Lost `this`

```js
const greet = user.greet;

greet();
```

Tại sao `this` bị mất?

Đây là production bug rất phổ biến.

---

## Lesson 2.3.4 — Explicit Binding

- `call`
- `apply`
- `bind`

Ví dụ:

```js
greet.call(user);
greet.apply(user);
const bound = greet.bind(user);
```

Phải hiểu:

```text
call → execute now
apply → execute now
bind → create new function
```

---

## Lesson 2.3.5 — `new` Binding

```js
function User(name) {
  this.name = name;
}

const user = new User("Alice");
```

Chưa học prototype internals sâu, chỉ xây:

```text
new
→ tạo object
→ bind this
→ connect prototype
→ return object
```

Chi tiết sẽ nối sang Module 2.4.

---

## Lesson 2.3.6 — Arrow Function & Lexical `this`

```js
const user = {
  name: "Alice",

  greet: () => {
    console.log(this.name);
  }
};
```

Phải hiểu:

```text
Arrow function
≠ dynamic this
```

Nó không tạo binding `this` riêng.

---

## Lesson 2.3.7 — `this` Decision Tree

Người học phải có khả năng nhìn call site và đi qua:

```text
Is it new?
 ↓
explicit call/apply/bind?
 ↓
object.method()?
 ↓
arrow?
 ↓
default
```

---

## Lesson 2.3.8 — `this` Debug Lab

Các bug:

```text
setTimeout(obj.method, 0)

array.map(obj.method)

event listener
class callback
destructured method
```

Người học phải giải thích **tại call site**.

---

# 5. MODULE 2.4 — PROTOTYPE SYSTEM

## Mục tiêu

Đây là core object model của JavaScript.

---

## Lesson 2.4.1 — `[[Prototype]]`

Khái niệm:

```text
object
  ↓
[[Prototype]]
  ↓
another object
```

---

## Lesson 2.4.2 — Property Lookup

Khi:

```js
obj.name
```

không có own property:

```text
obj
 ↓
prototype
 ↓
prototype's prototype
 ↓
...
 ↓
null
```

### Lab

Tự vẽ prototype chain.

---

## Lesson 2.4.3 — `Object.prototype`

Hiểu:

- `toString`
- `hasOwnProperty`
- `valueOf`
- inherited methods

---

## Lesson 2.4.4 — `__proto__` vs `prototype`

Đây là lesson bắt buộc.

Phân biệt:

```text
obj.__proto__
Function.prototype
Constructor.prototype
```

Không được dùng ba khái niệm này thay thế cho nhau.

---

## Lesson 2.4.5 — `Object.create`

```js
const admin = Object.create(user);
```

Phân tích:

```text
admin
 ↓
user
 ↓
Object.prototype
 ↓
null
```

---

## Lesson 2.4.6 — Constructor Functions

```js
function User(name) {
  this.name = name;
}

User.prototype.greet = function () {};
```

Hiểu:

```text
User
  ↓
User.prototype
  ↓
instances
```

---

## Lesson 2.4.7 — Prototype Inheritance

Tự xây:

```js
const animal = {
  eat() {}
};

const dog = Object.create(animal);

dog.bark = function () {};
```

Phải giải thích:

> `dog.eat()` tìm method ở đâu?

---

## Lesson 2.4.8 — Shadowing

```js
const parent = {
  x: 1
};

const child = Object.create(parent);

child.x = 2;
```

Phân biệt:

```text
lookup
shadowing
mutation
```

---

## Lesson 2.4.9 — Mutation Through Prototype

Case:

```js
parent.config = {};
child.config.x = 10;
```

Tìm vấn đề:

> Object nào thực sự sở hữu `config`?

Đây là bridge sang architecture và shared mutable state.

---

# 6. MODULE 2.5 — CLASSES

## Mục tiêu

Hiểu class syntax sau khi đã hiểu prototype.

Không học class trước prototype.

---

## Lesson 2.5.1 — Class Syntax

- constructor
- instance methods
- static methods
- fields

---

## Lesson 2.5.2 — Class & Prototype

Phải chứng minh:

```js
class User {
  greet() {}
}
```

và xác định:

```text
User.prototype.greet
```

---

## Lesson 2.5.3 — `extends`

- inheritance
- subclass
- prototype chain

---

## Lesson 2.5.4 — `super`

- `super()`
- `super.method()`

---

## Lesson 2.5.5 — Private Fields

```js
class Counter {
  #count = 0;
}
```

So sánh:

```text
#private
closure privacy
convention-based _
```

---

## Lesson 2.5.6 — Static

- static property
- static method
- class-level behavior

---

## Lesson 2.5.7 — Class vs Factory

So sánh:

```text
Class
vs
Factory Function
vs
Object.create
```

Theo:

- identity
- inheritance
- encapsulation
- readability
- extensibility
- team convention

---

## Lesson 2.5.8 — Legacy Object-Oriented JavaScript

Đọc một đoạn code constructor/prototype đời cũ và migrate sang class.

Mục đích:

> Senior không chỉ viết code mới; phải hiểu code cũ.

---

# 7. MODULE 2.6 — ITERATION, SYMBOLS & GENERATORS

## Mục tiêu

Hiểu iteration protocol và những abstraction mà JavaScript sử dụng phía sau `for...of`.

---

## Lesson 2.6.1 — Iterable

- Iterable concept
- `Symbol.iterator`

---

## Lesson 2.6.2 — Iterator

Iterator phải có:

```js
next()
```

và trả:

```js
{
  value,
  done
}
```

---

## Lesson 2.6.3 — `for...of`

Trace:

```text
for...of
 ↓
get iterator
 ↓
next()
 ↓
value
 ↓
repeat
```

---

## Lesson 2.6.4 — Custom Iterable

Tự tạo:

```js
const range = {
  ...
};
```

để:

```js
for (const n of range) {}
```

---

## Lesson 2.6.5 — Symbols

- Symbol primitive
- Unique keys
- Well-known symbols

Tập trung vào các symbol hữu ích cho behavior:

- `Symbol.iterator`
- `Symbol.toPrimitive`

Không cần học toàn bộ symbol catalog.

---

## Lesson 2.6.6 — Generators

- `function*`
- `yield`
- generator object
- pause / resume

---

## Lesson 2.6.7 — Generator as State Machine

Hiểu:

```text
start
 ↓
yield
 ↓
resume
 ↓
yield
 ↓
resume
```

---

## Lesson 2.6.8 — Generator Use Cases

- Lazy sequence
- custom iterator
- controlled execution

Không ép người học sử dụng generator trong production nếu không phù hợp.

---

# 8. MODULE 2.7 — PROXY, REFLECT & META-PROGRAMMING

## Mục tiêu

Hiểu khả năng can thiệp vào object behavior.

Không biến Proxy thành "feature phải dùng".

Quan trọng hơn là biết:

> Khi nào Proxy giải quyết được problem và khi nào nó tạo complexity.

---

## Lesson 2.7.1 — Proxy Mental Model

```text
Operation
 ↓
Proxy
 ↓
Trap
 ↓
Target
```

---

## Lesson 2.7.2 — Basic Traps

- `get`
- `set`
- `has`
- `deleteProperty`
- `ownKeys`

---

## Lesson 2.7.3 — Validation

Implement:

```js
const user = createValidatedUser();
```

Ví dụ:

```text
age → number
email → string
```

---

## Lesson 2.7.4 — Logging / Observation

Proxy để log:

```text
read
write
delete
```

Phân tích overhead và maintainability.

---

## Lesson 2.7.5 — Reflect

- `Reflect.get`
- `Reflect.set`
- `Reflect.has`
- `Reflect.deleteProperty`
- `Reflect.ownKeys`

Phải hiểu:

> Reflect không phải "Proxy khác"; nó cung cấp explicit APIs cho object operations.

---

## Lesson 2.7.6 — Proxy Invariants

Chỉ cần awareness + một vài case quan trọng.

Mục tiêu:

> Hiểu Proxy không được tùy ý phá vỡ mọi object invariant.

---

## Lesson 2.7.7 — Proxy Trade-offs

So sánh:

```text
Proxy
vs
explicit API
vs
class
vs
closure
```

Theo:

- readability
- debugging
- performance
- implicit behavior
- maintainability

---

# 9. INTEGRATION LAB — STAGE 2

# Project 2 — Mini Object Runtime

Xây một library nhỏ tên:

```js
createModel()
```

Ví dụ:

```js
const User = createModel({
  name: String,
  age: Number
});

const user = User.create({
  name: "Alice",
  age: 20
});
```

## Requirements

### Part 1 — Prototype

Methods phải được share qua prototype.

### Part 2 — Validation

Property assignment phải được validate.

### Part 3 — Getters

Tạo computed property.

### Part 4 — Private state

Có ít nhất một field không expose trực tiếp.

### Part 5 — Inheritance

```text
User
 ↓
Admin
```

### Part 6 — Proxy

Intercept assignment.

### Part 7 — Custom iteration

Instance có thể iterate qua selected fields.

---

# 10. EDGE CASE LAB

## Case 1 — Lost `this`

```js
const method = user.greet;
method();
```

---

## Case 2 — Timer

```js
setTimeout(user.greet, 0);
```

---

## Case 3 — Destructuring Method

```js
const { greet } = user;
greet();
```

---

## Case 4 — Prototype Shadowing

```js
parent.x = 1;
child.x = 2;
```

Xác định object nào được đọc.

---

## Case 5 — Shared Prototype Mutation

```js
User.prototype.config = {};
```

Hai instance cùng mutate `config`.

Tìm bug.

---

## Case 6 — `Object.create(null)`

Phân tích:

```js
const dict = Object.create(null);
```

Khác gì object bình thường?

---

## Case 7 — Non-enumerable Property

Một property tồn tại nhưng không xuất hiện trong:

```js
Object.keys()
```

Giải thích tại sao.

---

## Case 8 — Proxy Recursion

Proxy `set` tự assign lại target theo cách gây recursion.

Tìm và sửa.

---

# 11. RE-IMPLEMENTATION LAB

Không dùng library.

Tự implement:

### 11.1 — `bind`

Phiên bản đơn giản của:

```js
myBind(fn, context, ...args)
```

---

### 11.2 — `create`

```js
myCreate(proto)
```

Mô phỏng behavior cơ bản của:

```js
Object.create()
```

---

### 11.3 — `instanceOf`

```js
myInstanceOf(obj, Constructor)
```

Đi qua prototype chain.

---

### 11.4 — Custom Iterator

Tạo iterable range.

---

### 11.5 — Mini Proxy Validator

Tạo proxy validation object.

---

# 12. DEBUG LAB

## Bug 1 — Wrong `this`

Developer nói:

> “`this` bị random.”

Người học phải tìm **call site**.

---

## Bug 2 — Shared Mutable Prototype State

Hai object vô tình chia sẻ object trên prototype.

Phải xác định:

```text
own property?
prototype property?
shared reference?
```

---

## Bug 3 — Wrong Inheritance

Subclass không tìm được method.

Phải trace:

```text
instance
 ↓
prototype
 ↓
parent prototype
 ↓
Object.prototype
```

---

## Bug 4 — Proxy Side Effect

Một assignment gây ra nhiều assignment khác.

Phải xác định:

```text
trap
→ recursive mutation
→ infinite loop
```

---

# 13. DESIGN LAB

Đây là lần đầu người học phải bắt đầu trả lời câu hỏi:

> "Có nhiều cách để làm. Chọn cách nào?"

## Scenario 1

Thiết kế `User` model bằng:

```text
Class
Factory
Object.create
```

Viết ADR ngắn:

```text
Context
Options
Decision
Trade-offs
```

---

## Scenario 2

Bạn cần private state.

So sánh:

```text
Closure
vs
#private field
vs
WeakMap
```

Chọn một phương án.

---

## Scenario 3

Bạn muốn intercept property assignment.

So sánh:

```text
Proxy
vs
setter
vs
explicit method
```

---

# 14. SOURCE & DOCUMENTATION

## JavaScript

- MDN Object guide
- MDN `this`
- MDN inheritance and prototype chain
- MDN Proxy / Reflect
- ECMAScript specification ở mức tham khảo

## Nguyên tắc

Không đọc toàn bộ specification.

Chỉ quay về spec khi cần trả lời một behavior mà documentation phổ thông không đủ chính xác.

---

# 15. TEACH-BACK

Người học phải giải thích được:

### Level 1

> Object là gì?

### Level 2

> `this` là gì?

### Level 3

> Prototype chain hoạt động thế nào?

### Level 4

> Tại sao class vẫn liên quan đến prototype?

### Level 5

> Khi nào dùng Class, Factory, Closure hoặc Proxy?

Đây là điểm chuyển từ:

```text
“How does this API work?”
```

sang:

```text
“Why would I choose this design?”
```

---

# 16. EXIT CRITERIA — STAGE 2

## Object

- [ ] Phân biệt object identity và value equality.
- [ ] Phân biệt own property và inherited property.
- [ ] Hiểu property descriptors.
- [ ] Dùng được `Object.hasOwn`, `in`, `Object.keys`, `Reflect.ownKeys`.

## `this`

- [ ] Giải thích được default binding.
- [ ] Giải thích được implicit binding.
- [ ] Giải thích được explicit binding.
- [ ] Giải thích được `new`.
- [ ] Giải thích được lexical `this`.
- [ ] Debug được lost `this`.

## Prototype

- [ ] Vẽ được prototype chain.
- [ ] Phân biệt `prototype` và `__proto__`.
- [ ] Giải thích property lookup.
- [ ] Giải thích shadowing.
- [ ] Tạo được object bằng `Object.create`.

## Class

- [ ] Giải thích class liên quan prototype thế nào.
- [ ] Implement inheritance.
- [ ] Dùng private fields.
- [ ] So sánh class và factory.

## Iteration

- [ ] Giải thích iterable và iterator.
- [ ] Tự tạo custom iterable.
- [ ] Giải thích `for...of`.
- [ ] Viết generator cơ bản.

## Meta-programming

- [ ] Implement Proxy validation.
- [ ] Dùng Reflect đúng mục đích.
- [ ] Nhận biết Proxy trade-offs.

## Engineering

- [ ] Implement `myBind`.
- [ ] Implement `myCreate`.
- [ ] Implement `myInstanceOf`.
- [ ] Debug được prototype/state bugs.
- [ ] Viết được ADR ngắn cho một object design decision.

---

# 17. STAGE 2 CHECKPOINT

## Part A — Trace

Cho một object phức tạp:

```text
instance
→ prototype
→ parent prototype
→ Object.prototype
```

Người học phải trace property lookup.

---

## Part B — `this`

10 call sites:

```text
method call
detached method
call
apply
bind
new
arrow
timer
callback
destructuring
```

Phải dự đoán `this` trước khi chạy.

---

## Part C — Reimplementation

Tự viết:

```text
myBind
myCreate
myInstanceOf
customIterator
proxyValidator
```

---

## Part D — Architecture

Chọn:

```text
Class
Factory
Closure
Proxy
```

cho 4 scenario khác nhau và giải thích trade-off.

---

## Part E — Debug

Debug một object system bị lỗi:

```text
wrong this
+
prototype mutation
+
proxy recursion
```

Không dùng trial-and-error.

---

# 18. STAGE 2 CAPSTONE

## Mini Object Runtime

Final library phải có:

```text
Model
├── create()
├── inheritance
├── prototype methods
├── private state
├── property validation
├── custom iteration
└── serialization
```

Người học phải:

```text
Design
→ Implement
→ Test
→ Break
→ Debug
→ Refactor
→ Explain
```

---

# 19. STAGE 2 → STAGE 3 DEPENDENCY

Sau Stage 2, người học đã hiểu:

```text
Object
 ↓
Property
 ↓
Prototype
 ↓
this
 ↓
Class
 ↓
Iterator
 ↓
Proxy
```

Bây giờ có thể bước sang:

# STAGE 3 — ASYNC & CONCURRENCY

vì async JavaScript sẽ kết hợp trực tiếp với:

```text
Stage 1
Closure
  ↓
Callbacks

Stage 2
Objects / Functions
  ↓
API design

Stage 3
Promise
  ↓
Event Loop
  ↓
Concurrency
  ↓
Cancellation
  ↓
Race Conditions
```

Và đặc biệt:

```text
Stage 1 Closure
       +
Stage 2 Object / Function Model
       +
Stage 3 Async
       ↓
React Effects
Data Fetching
State Management
Realtime
```

Đây là một dependency cực kỳ quan trọng của toàn bộ Frontend Engineering.

---

# 20. STAGE 2 CORE PRINCIPLE

Stage 2 không nhằm biến người học thành “JavaScript wizard”.

Mục tiêu là tạo một mental model đủ chính xác để khi gặp code:

```js
something.doWork()
```

người học không chỉ nhìn vào method.

Họ biết hỏi:

```text
Who owns `doWork`?

Own property hay inherited?

Object có prototype nào?

Call site là gì?

`this` là gì?

Property lookup dừng ở đâu?

Method có mutate shared state không?

Có abstraction nào đang intercept behavior không?
```

Đó là kiểu câu hỏi bắt đầu phân biệt **người biết JavaScript** với **người hiểu JavaScript**.