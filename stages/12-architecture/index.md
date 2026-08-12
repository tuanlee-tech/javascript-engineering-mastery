---
title: "Stage 12: Frontend Architecture"
description: "Trang tổng quan Stage 12: Frontend Architecture."
head:
  - - meta
    - property: og:image
      content: /og/stage-12.png
---

# Stage 12: Frontend Architecture

<div style="text-align: center; margin: 1.5rem 0;">
  <img src="/icons/stage-12.svg" alt="Stage Icon" style="width: 80px; height: 80px; margin: 0 auto;" />
</div>

<div class="vp-doc">

## 1. Tổng quan Stage (Stage Overview)

## Mục tiêu

Stage 12 là bước chuyển rất rõ từ:

> **Senior-capable Developer**

sang:

> **Engineer có khả năng thiết kế và làm cho một codebase phát triển được trong nhiều năm.**

Stage 11 đã dạy người học:

```text id="d4x9r1"
Build
→ Measure
→ Debug
→ Optimize
→ Secure
```

Nhưng một hệ thống có thể:

* chạy nhanh,
* ít bug,
* có test,
* có security tốt,

vẫn có thể trở thành **technical mess** khi:

```text id="d2g8ql"
5 developers
→ 10 developers
→ 30 developers
→ 5 teams
→ 10 applications
→ shared dependencies
→ independent deployments
```

Vấn đề lúc này không còn là:

> “Function này viết thế nào?”

mà là:

> **“Code nên nằm ở đâu, dependency đi theo hướng nào, boundary đặt ở đâu, và hệ thống phải thay đổi thế nào mà không phá phần còn lại?”**

---

---

## 2. Phạm vi Kiến thức & Mô-đun (Scope & Modules)

Stage 12 gồm **8 Modules / 40 Lessons**:

```text id="l6m6vd"
12.1 Architecture Fundamentals
12.2 Frontend Module & Dependency Architecture
12.3 Feature / Domain Architecture
12.4 State & Data Architecture
12.5 Monorepo & Shared Platform
12.6 Design Systems & Internal Libraries
12.7 Micro-frontends & Distributed Frontend
12.8 Architecture Decision & Evolution
```

Đây là stage bắt đầu yêu cầu **architecture judgment**, không chỉ implementation.

---

---

## 3. Dự án Thực hành (Stage Project)



---

## 4. Tiêu chí Hoàn thành & Đầu ra (Exit & Prerequisites)

* **Điều kiện tiên quyết (Prerequisites)**: Hoàn thành Stage 11
* **Cấp bậc đầu ra (Exit Level)**: `Architecture Boundaries Mastered (L7-L8)`

### Tiêu chí kiểm thử năng lực thực tế:

## Architecture Fundamentals

* [ ] Phân biệt coupling/cohesion.
* [ ] Nhận diện change coupling.
* [ ] Thiết kế dependency direction.
* [ ] Xác định boundary.
* [ ] Phân tích architecture trade-off.

## Module Architecture

* [ ] Xây public/internal API.
* [ ] Nhận diện dependency cycle.
* [ ] Viết dependency constraints.
* [ ] Kiểm soát forbidden imports.

## Feature Architecture

* [ ] So sánh technical layers và feature boundaries.
* [ ] Thiết kế vertical slice.
* [ ] Xác định domain boundaries.
* [ ] Tránh shared-code dumping ground.

## State Architecture

* [ ] Phân loại state.
* [ ] Xác định source of truth.
* [ ] Tránh duplicate state.
* [ ] Thiết kế state machine khi phù hợp.
* [ ] Thiết kế offline/sync boundary cơ bản.

## Monorepo

* [ ] Thiết kế workspace.
* [ ] Dependency graph.
* [ ] Package boundaries.
* [ ] Task graph.
* [ ] Remote caching awareness.
* [ ] Ownership/governance.

## Design System

* [ ] Token architecture.
* [ ] Component API.
* [ ] Accessibility contract.
* [ ] Versioning.
* [ ] Documentation.
* [ ] Breaking change migration.

## Micro-frontends

* [ ] Hiểu problem mà micro-frontend giải quyết.
* [ ] So sánh integration strategies.
* [ ] Hiểu Module Federation.
* [ ] Handle distributed failure.
* [ ] Đánh giá cost.

## Architecture Evolution

* [ ] Viết ADR.
* [ ] Viết RFC.
* [ ] So sánh alternatives.
* [ ] Lập migration plan.
* [ ] Thiết kế architecture fitness functions.
* [ ] Ưu tiên technical debt.

---

</div>
