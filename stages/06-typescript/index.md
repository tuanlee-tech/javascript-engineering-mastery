---
title: "Stage 6: TypeScript Engineering"
description: "Trang tổng quan Stage 6: TypeScript Engineering."
head:
  - - meta
    - property: og:image
      content: /og/stage-06.png
---

# Stage 6: TypeScript Engineering

<div style="text-align: center; margin: 1.5rem 0;">
  <img src="/icons/stage-06.svg" alt="Stage Icon" style="width: 80px; height: 80px; margin: 0 auto;" />
</div>

<div class="vp-doc">

## 1. Tổng quan Stage (Stage Overview)

## Mục tiêu

Stage 6 trả lời câu hỏi:

> **Làm thế nào biến một codebase JavaScript lớn thành một hệ thống mà compiler có thể giúp chúng ta phát hiện sai lầm trước khi chạy?**

Cho đến Stage 5, người học đã xây được mental model:

```text id="c7d6h4"
JavaScript
→ Runtime
→ Async
→ Browser
→ Network
→ API
```

Nhưng khi application lớn lên, một vấn đề khác xuất hiện:

```text id="x7n4b8"
Code nhiều
↓
State nhiều
↓
Data model phức tạp
↓
Team nhiều người
↓
Thay đổi một nơi
↓
Break nơi khác
```

TypeScript được đưa vào để **kiểm soát complexity**, không phải chỉ để thêm annotation.

Mental model cuối Stage:

```text id="n6l4d0"
Runtime Reality
        ↑
        │
Runtime Validation
        │
        ↑
Type System
        │
        ↑
Domain Model
        │
        ↑
Application Code
```

Điểm quan trọng nhất:

```text id="p3e8m2"
TypeScript
≠
Runtime Validation
```

TypeScript giúp kiểm tra **static program model**.

Runtime validation bảo vệ hệ thống trước **data thực tế**.

---

---

## 2. Phạm vi Kiến thức & Mô-đun (Scope & Modules)

Stage 6 gồm **6 Modules / 31 Lessons**:

```text id="4f8k1a"
6.1 TypeScript Mental Model
6.2 Type System & Type Inference
6.3 Generics & Type Composition
6.4 Advanced Type System
6.5 Runtime Validation & External Data
6.6 Library / Application Type Architecture
```

Đây là Stage có chiều sâu cao, nhưng không nhằm biến người học thành type-system researcher.

Mục tiêu là:

> **Dùng TypeScript để model domain, constrain code và thiết kế API tốt hơn.**

---

---

## 3. Dự án Thực hành (Stage Project)



---

## 4. Tiêu chí Hoàn thành & Đầu ra (Exit & Prerequisites)

* **Điều kiện tiên quyết (Prerequisites)**: Hoàn thành Stage 5
* **Cấp bậc đầu ra (Exit Level)**: `TypeScript Static Safety Mastered (L6)`

### Tiêu chí kiểm thử năng lực thực tế:

## Mental Model

- [ ] Phân biệt TypeScript compile-time và JavaScript runtime.
- [ ] Hiểu type erasure.
- [ ] Hiểu structural typing.
- [ ] Phân biệt type space và value space.
- [ ] Nhận biết type assertion không tạo runtime guarantee.

## Type System

- [ ] Dùng union/intersection đúng.
- [ ] Dùng discriminated union.
- [ ] Dùng `unknown`, `never`, `any` có chủ đích.
- [ ] Implement type narrowing.
- [ ] Viết custom type guard.

## Generics

- [ ] Viết generic function.
- [ ] Dùng constraints.
- [ ] Dùng generic interfaces/classes.
- [ ] Dùng `keyof` và indexed access.
- [ ] Thiết kế generic API với inference tốt.

## Advanced Types

- [ ] Dùng mapped types.
- [ ] Conditional types.
- [ ] `infer`.
- [ ] Recursive types cơ bản.
- [ ] Utility types.
- [ ] `satisfies`.
- [ ] Exhaustive checking bằng `never`.

## Runtime

- [ ] Hiểu trust boundary.
- [ ] Validate external data.
- [ ] Dùng Zod.
- [ ] Infer type từ schema.
- [ ] Phân biệt transport/HTTP/schema/business errors.

## Architecture

- [ ] Phân biệt DTO/domain/view model.
- [ ] Model async state bằng discriminated union.
- [ ] Thiết kế `Result<T, E>`.
- [ ] Xây generic repository/client.
- [ ] Thiết kế public type API cho library.

## Engineering

- [ ] Hoàn thành Typed Domain SDK.
- [ ] Debug được unsafe assertion.
- [ ] Debug được runtime/type mismatch.
- [ ] Refactor được over-complex type.
- [ ] Viết ADR cho một type architecture decision.

---

</div>
