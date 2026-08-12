---
title: "Stage 8: React Engineering"
description: "Trang tổng quan Stage 8: React Engineering."
head:
  - - meta
    - property: og:image
      content: /og/stage-08.png
---

# Stage 8: React Engineering

<div style="text-align: center; margin: 1.5rem 0;">
  <img src="/icons/stage-08.svg" alt="Stage Icon" style="width: 80px; height: 80px; margin: 0 auto;" />
</div>

<div class="vp-doc">

## 1. Tổng quan Stage (Stage Overview)

## Mục tiêu

Stage 8 là điểm chuyển từ:

```text id="y6o6k3"
JavaScript Engineer
        ↓
Frontend Engineer
```

Đây là lần đầu tiên Framework trở thành trung tâm, nhưng React **không được học như một danh sách API**.

Không bắt đầu bằng:

```text id="k4uytu"
JSX
→ useState
→ useEffect
→ useMemo
→ React Query
```

Thay vào đó:

```text id="ey7f4f"
JavaScript Execution Model
        ↓
Browser Rendering
        ↓
UI as a Function of State
        ↓
React Element
        ↓
Reconciliation
        ↓
Fiber
        ↓
Render / Commit
        ↓
Hooks
        ↓
State Architecture
        ↓
Server State
        ↓
Application Architecture
```

Mục tiêu cuối Stage:

> **Không chỉ dùng được React, mà hiểu React đang giải quyết problem gì và tại sao abstraction của React được thiết kế như vậy.**

---

---

## 2. Phạm vi Kiến thức & Mô-đun (Scope & Modules)

Stage 8 gồm **9 Modules / 43 Lessons**:

```text id="4cnk8q"
8.1 React Mental Model
8.2 Elements, Trees & Reconciliation
8.3 Fiber & Rendering
8.4 Hooks & Effects
8.5 State Architecture
8.6 Component Architecture
8.7 Server State & Data Fetching
8.8 Advanced React Patterns
8.9 React Performance & Debugging
```

---

---

## 3. Dự án Thực hành (Stage Project)



---

## 4. Tiêu chí Hoàn thành & Đầu ra (Exit & Prerequisites)

* **Điều kiện tiên quyết (Prerequisites)**: Hoàn thành Stage 7
* **Cấp bậc đầu ra (Exit Level)**: `React Internals & Fiber Mastered (L6-L7)`

### Tiêu chí kiểm thử năng lực thực tế:

## React Mental Model

- [ ] Giải thích được declarative UI.
- [ ] Phân biệt React Element và DOM element.
- [ ] Giải thích component render.

## Reconciliation

- [ ] Hiểu identity.
- [ ] Hiểu role của key.
- [ ] Debug được state reset/misassociation.
- [ ] Giải thích tree reconciliation ở mức conceptual.

## Fiber

- [ ] Giải thích Fiber giải quyết vấn đề gì.
- [ ] Vẽ được Fiber tree đơn giản.
- [ ] Phân biệt render và commit.
- [ ] Hiểu scheduling awareness.

## Hooks

- [ ] Hiểu `useState`.
- [ ] Hiểu state update semantics.
- [ ] Hiểu `useRef`.
- [ ] Hiểu `useEffect`.
- [ ] Hiểu cleanup.
- [ ] Debug stale closure.
- [ ] Phân biệt event và effect.
- [ ] Dùng `useMemo`/`useCallback` có lý do.

## State Architecture

- [ ] Phân biệt UI/client/server/derived state.
- [ ] Chọn state owner.
- [ ] Dùng Context phù hợp.
- [ ] Hiểu Zustand và Redux Toolkit ở mức implementation model.
- [ ] Model state machine cơ bản.

## Server State

- [ ] Hiểu query lifecycle.
- [ ] Dùng cache/invalidation.
- [ ] Implement optimistic update.
- [ ] Xử lý pagination.
- [ ] Deduplicate requests.
- [ ] Xử lý mutation race.

## Component Architecture

- [ ] Thiết kế component API.
- [ ] Dùng composition.
- [ ] Controlled/uncontrolled.
- [ ] Compound components.
- [ ] Headless pattern awareness.

## Performance

- [ ] Dùng Profiler.
- [ ] Xác định render trigger.
- [ ] Tìm unnecessary render.
- [ ] Fix context-driven rerenders.
- [ ] Hiểu virtualization cơ bản.

## Engineering

- [ ] Hoàn thành Production SaaS.
- [ ] Debug được stale closure.
- [ ] Debug được key/state identity bug.
- [ ] Debug được unnecessary renders.
- [ ] Debug được cache invalidation.
- [ ] Thiết kế được state architecture cho feature mới.

---

</div>
