---
title: "Stage 0: JavaScript Language Foundation"
description: "Trang tổng quan Stage 0: JavaScript Language Foundation."
head:
  - - meta
    - property: og:image
      content: /og/stage-00.png
---

# Stage 0: JavaScript Language Foundation

<div style="text-align: center; margin: 1.5rem 0;">
  <img src="/icons/stage-00.svg" alt="Stage Icon" style="width: 80px; height: 80px; margin: 0 auto;" />
</div>

<div class="vp-doc">

## 1. Tổng quan Stage (Stage Overview)

## Mục tiêu

Stage 0 xây lại nền tảng JavaScript từ đầu cho một Junior đã có kinh nghiệm thực tế nhưng còn thiếu mental model.

Không nhằm biến người học thành người "biết syntax".

Mục tiêu là:

> **Đọc JavaScript → hiểu value → hiểu data → hiểu function → viết code đúng → giải thích được behavior cơ bản.**

Stage này là prerequisite trực tiếp cho:


>Stage 1 — Execution Model
>
>Stage 2 — Object Model
>
>Stage 3 — Async
>
>Stage 6 — TypeScript
>
>Stage 8 — React



## 2. Phạm vi Kiến thức & Mô-đun (Scope & Modules)

Stage 0 gồm **7 Modules / 27 Lessons**, chia thành 5 năng lực:


> VALUE
>
>   ↓
>
> TYPE
>
>   ↓
>
> CONTROL FLOW
>
>   ↓
>
> FUNCTION
>
>   ↓
>
> DATA & ERROR


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


## 3. Tiêu chí Hoàn thành & Đầu ra (Exit & Prerequisites)

* **Điều kiện tiên quyết (Prerequisites)**: Không có (Chỉ cần có 6 tháng kinh nghiệm viết JS cơ bản)
* **Cấp bậc đầu ra (Exit Level)**: `Strong Junior Foundation`

### Tiêu chí kiểm thử năng lực thực tế:

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



</div>
