---
title: "Stage 2: Object Model & Advanced JavaScript"
description: "Trang tổng quan Stage 2: Object Model & Advanced JavaScript."
head:
  - - meta
    - property: og:image
      content: /og/stage-02.png
---

# Stage 2: Object Model & Advanced JavaScript

<div style="text-align: center; margin: 1.5rem 0;">
  <img src="/icons/stage-02.svg" alt="Stage Icon" style="width: 80px; height: 80px; margin: 0 auto;" />
</div>

<div class="vp-doc">

## 1. Tổng quan Stage (Stage Overview)

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

---

## 2. Phạm vi Kiến thức & Mô-đun (Scope & Modules)

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

---

## 3. Dự án Thực hành (Stage Project)



---

## 4. Tiêu chí Hoàn thành & Đầu ra (Exit & Prerequisites)

* **Điều kiện tiên quyết (Prerequisites)**: Hoàn thành Stage 1
* **Cấp bậc đầu ra (Exit Level)**: `OOP & Prototype System Mastered (L5-L6)`

### Tiêu chí kiểm thử năng lực thực tế:

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

</div>
