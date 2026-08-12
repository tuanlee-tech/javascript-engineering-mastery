---
title: "Stage 10: Next.js & Full-stack Frontend"
description: "Trang tổng quan Stage 10: Next.js & Full-stack Frontend."
head:
  - - meta
    - property: og:image
      content: /og/stage-10.png
---

# Stage 10: Next.js & Full-stack Frontend

<div style="text-align: center; margin: 1.5rem 0;">
  <img src="/icons/stage-10.svg" alt="Stage Icon" style="width: 80px; height: 80px; margin: 0 auto;" />
</div>

<div class="vp-doc">

## 1. Tổng quan Stage (Stage Overview)

## Mục tiêu

Stage 10 không nhằm dạy:

> “Next.js có những API nào?”

Mục tiêu là hiểu **Full-stack React architecture**:

```text
Browser
   ↕
React
   ↕
Next.js Runtime
   ↕
Server
   ↕
Data / API / Services
```

Sau Stage 9, người học đã có:

```text
JavaScript
Browser
Network
TypeScript
Tooling
React
Production Frontend
```

Vì vậy lúc này mới đủ nền để hiểu tại sao một framework như Next.js tồn tại.

Next.js hiện được định vị là framework React cho full-stack web applications; App Router là router hiện đại hỗ trợ các React features như Server Components. Next.js cũng tự cấu hình nhiều lớp tooling/build thấp hơn cho application. ([Next.js][1])

Curriculum này sẽ **không phụ thuộc cứng vào một phiên bản Next.js**. Những API/version-specific sẽ được đánh dấu là implementation layer, còn mental model phải tồn tại lâu dài.

---

---

## 2. Phạm vi Kiến thức & Mô-đun (Scope & Modules)

Stage 10 gồm **8 Modules / 38 Lessons**:

```text
10.1 Next.js Mental Model
10.2 App Router & Routing Architecture
10.3 Server / Client Boundary
10.4 Rendering Models
10.5 Data Fetching & Streaming
10.6 Caching & Revalidation
10.7 Server Functions & Mutations
10.8 Full-stack Application Architecture
```

---

---

## 3. Dự án Thực hành (Stage Project)



---

## 4. Tiêu chí Hoàn thành & Đầu ra (Exit & Prerequisites)

* **Điều kiện tiên quyết (Prerequisites)**: Hoàn thành Stage 9
* **Cấp bậc đầu ra (Exit Level)**: `Full-stack SSR Mastered (L6-L7)`

### Tiêu chí kiểm thử năng lực thực tế:

## Framework Mental Model

* [ ] Giải thích React vs Next.js.
* [ ] Hiểu framework vs library.
* [ ] Hiểu request lifecycle.

## Routing

* [ ] App Router.
* [ ] Nested routes.
* [ ] Dynamic routes.
* [ ] Layouts.
* [ ] Search params.
* [ ] Loading/error/not-found boundaries.
* [ ] Navigation/prefetching.

## Server / Client

* [ ] Giải thích Server Component.
* [ ] Giải thích Client Component.
* [ ] Hiểu `"use client"`.
* [ ] Hiểu `"use server"`.
* [ ] Hiểu serialization boundary.
* [ ] Debug được server/client boundary bug.

## Rendering

* [ ] CSR.
* [ ] SSR.
* [ ] Static.
* [ ] Dynamic.
* [ ] Streaming.
* [ ] Suspense.
* [ ] Hydration.
* [ ] Hydration mismatch debugging.

## Data

* [ ] Server-side fetching.
* [ ] Client-side fetching.
* [ ] Parallel data fetching.
* [ ] Waterfall detection.
* [ ] Streaming secondary content.
* [ ] Quyết định được nơi data nên được fetch.

## Caching

* [ ] Hiểu cache layers.
* [ ] Fresh/stale/revalidated/invalidate.
* [ ] Path revalidation.
* [ ] Tag-based invalidation.
* [ ] Hiểu mô hình caching hiện đại của Next.js.
* [ ] Debug stale cache.

## Mutations

* [ ] Server Function / Server Action model.
* [ ] Form mutation.
* [ ] Validation.
* [ ] Authentication.
* [ ] Authorization.
* [ ] Cache invalidation.
* [ ] Optimistic update.
* [ ] Pending/error state.

## Architecture

* [ ] Server-only/client-only boundaries.
* [ ] BFF.
* [ ] Authentication architecture.
* [ ] Authorization architecture.
* [ ] Full-stack folder boundaries.
* [ ] Đánh giá Next.js backend vs dedicated backend.

## Engineering

* [ ] Hoàn thành Full-stack SaaS.
* [ ] Có ít nhất 3 rendering strategies trong cùng project.
* [ ] Có server/client boundaries rõ ràng.
* [ ] Có cache/invalidation strategy.
* [ ] Có server-side authorization.
* [ ] Debug được hydration/cache/boundary issues.
* [ ] Viết ADR cho rendering + data architecture.

---

</div>
