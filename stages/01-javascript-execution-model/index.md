---
title: "Stage 1: JavaScript Execution Model"
description: "Trang tổng quan Stage 1: JavaScript Execution Model."
head:
  - - meta
    - property: og:image
      content: /og/stage-01.png
---

# Stage 1: JavaScript Execution Model

<div style="text-align: center; margin: 1.5rem 0;">
  <img src="/icons/stage-01.svg" alt="Stage Icon" style="width: 80px; height: 80px; margin: 0 auto;" />
</div>

<div class="vp-doc">

## 1. Tổng quan Stage (Stage Overview)

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

---

## 2. Phạm vi Kiến thức & Mô-đun (Scope & Modules)

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

---

## 3. Dự án Thực hành (Stage Project)



---

## 4. Tiêu chí Hoàn thành & Đầu ra (Exit & Prerequisites)

* **Điều kiện tiên quyết (Prerequisites)**: Hoàn thành Stage 0
* **Cấp bậc đầu ra (Exit Level)**: `Execution Model Mastered (L5 Core)`

### Tiêu chí kiểm thử năng lực thực tế:

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

</div>
