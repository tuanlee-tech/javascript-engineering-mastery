---
title: "Stage 4: Browser Runtime & Web Platform"
description: "Trang tổng quan Stage 4: Browser Runtime & Web Platform."
head:
  - - meta
    - property: og:image
      content: /og/stage-04.png
---

# Stage 4: Browser Runtime & Web Platform

<div style="text-align: center; margin: 1.5rem 0;">
  <img src="/icons/stage-04.svg" alt="Stage Icon" style="width: 80px; height: 80px; margin: 0 auto;" />
</div>

<div class="vp-doc">

## 1. Tổng quan Stage (Stage Overview)

## Mục tiêu

Stage 4 trả lời câu hỏi:

> **JavaScript chạy trong Browser như thế nào, và từ một hành động của user đến pixel trên màn hình đã xảy ra những gì?**

Ba Stage trước tập trung vào:

```text id="t0t9o0"
Stage 0
Language
        ↓
Stage 1
Execution Model
        ↓
Stage 2
Object Model
        ↓
Stage 3
Async & Concurrency
```

Stage 4 đưa toàn bộ kiến thức đó vào **host environment quan trọng nhất của Frontend: Browser**.

Mental model cuối Stage:

```text id="pbz3a2"
User Input
    ↓
Browser Event System
    ↓
JavaScript
    ↓
State / DOM Mutation
    ↓
Style Calculation
    ↓
Layout
    ↓
Paint
    ↓
Composite
    ↓
Pixels
```

Đây là foundation trực tiếp cho:

- React rendering
- React Fiber
- UI performance
- Animation
- Forms
- Infinite scrolling
- Virtualization
- Web Workers
- PWA
- Offline applications
- Browser debugging
- Core Web Vitals

---

---

## 2. Phạm vi Kiến thức & Mô-đun (Scope & Modules)

Stage 4 gồm **8 Modules / 36 Lessons**:

```text id="4f5h7d"
4.1 Browser & Document Model
4.2 DOM Manipulation
4.3 Browser Events
4.4 Rendering Pipeline
4.5 Browser Scheduling & Animation
4.6 Browser APIs, Observers & Workers
4.7 Storage & Persistence
4.8 Web Components & Shadow DOM
```

Stage này **không đi sâu vào React**.

React sẽ đến Stage 8 sau khi Browser mental model đã đủ vững.

---

---

## 3. Dự án Thực hành (Stage Project)



---

## 4. Tiêu chí Hoàn thành & Đầu ra (Exit & Prerequisites)

* **Điều kiện tiên quyết (Prerequisites)**: Hoàn thành Stage 3
* **Cấp bậc đầu ra (Exit Level)**: `Browser Internals Mastered (L6)`

### Tiêu chí kiểm thử năng lực thực tế:

## Browser Model

- [ ] Phân biệt JavaScript language và browser host APIs.
- [ ] Giải thích được browser document lifecycle ở mức conceptual.
- [ ] Phân biệt `window`, `document`, `navigator`, `location`.

## DOM

- [ ] Vẽ được DOM tree.
- [ ] Traverse và mutate DOM đúng.
- [ ] Phân biệt Node và Element.
- [ ] Phân biệt attribute và property.

## Events

- [ ] Vẽ được Capture → Target → Bubble.
- [ ] Giải thích bubbling/capturing.
- [ ] Dùng event delegation.
- [ ] Quản lý listener lifecycle đúng.

## Rendering

- [ ] Vẽ được HTML → DOM → CSSOM → Render Tree → Layout → Paint → Composite.
- [ ] Phân biệt layout, paint, composite.
- [ ] Nhận diện forced synchronous layout.
- [ ] Nhận diện layout thrashing.
- [ ] Profile được một rendering problem cơ bản.

## Scheduling

- [ ] Giải thích vai trò của `requestAnimationFrame`.
- [ ] Phân biệt rAF với timer.
- [ ] Hiểu frame budget.
- [ ] Nhận diện long task ảnh hưởng UI.

## Browser APIs

- [ ] Dùng IntersectionObserver.
- [ ] Dùng ResizeObserver.
- [ ] Dùng MutationObserver.
- [ ] Dùng Web Worker cho CPU-heavy work.
- [ ] Cleanup Worker đúng lifecycle.

## Storage

- [ ] So sánh localStorage, sessionStorage, Cookie, IndexedDB, Cache Storage.
- [ ] Chọn storage phù hợp với requirement.
- [ ] Nhận diện quota/failure scenario.
- [ ] Thiết kế cross-tab synchronization.

## Web Components

- [ ] Tạo Custom Element.
- [ ] Tạo Shadow DOM.
- [ ] Sử dụng slot.
- [ ] Hiểu event retargeting.
- [ ] Nhận biết use case cho interoperability.

---

</div>
