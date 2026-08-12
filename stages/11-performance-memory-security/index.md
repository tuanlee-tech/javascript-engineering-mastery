---
title: "Stage 11: Performance, Memory & Security"
description: "Trang tổng quan Stage 11: Performance, Memory & Security."
head:
  - - meta
    - property: og:image
      content: /og/stage-11.png
---

# Stage 11: Performance, Memory & Security

<div style="text-align: center; margin: 1.5rem 0;">
  <img src="/icons/stage-11.svg" alt="Stage Icon" style="width: 80px; height: 80px; margin: 0 auto;" />
</div>

<div class="vp-doc">

## 1. Tổng quan Stage (Stage Overview)

## Mục tiêu

Stage 11 là nơi người học chuyển từ:

> **“Tôi xây được application.”**

sang:

> **“Tôi có thể chứng minh application đang chậm, tốn memory hoặc không an toàn ở đâu — và sửa đúng nguyên nhân.”**

Từ Stage 0–10, người học đã có mental model:

```text
JavaScript
   ↓
Execution
   ↓
Async
   ↓
Browser
   ↓
Network
   ↓
TypeScript
   ↓
Toolchain
   ↓
React
   ↓
Production Frontend
   ↓
Next.js
```

Stage 11 quay lại toàn bộ stack và nhìn nó dưới 3 lăng kính:

```text
                    APPLICATION
                         │
          ┌──────────────┼──────────────┐
          ▼              ▼              ▼
      PERFORMANCE      MEMORY        SECURITY
          │              │              │
          ▼              ▼              ▼
       Measure         Retain         Protect
          │              │              │
          ▼              ▼              ▼
       Diagnose        Isolate        Threat Model
          │              │              │
          └──────────────┼──────────────┘
                         ▼
                       FIX
                         ↓
                      VERIFY
```

Đây là Stage đặc biệt quan trọng cho **Senior Frontend**.

---

---

## 2. Phạm vi Kiến thức & Mô-đun (Scope & Modules)

Stage 11 gồm **8 Modules / 42 Lessons**:

```text
11.1 Performance Mental Model
11.2 JavaScript Engine & CPU Performance
11.3 Memory Management & Garbage Collection
11.4 Browser Rendering & Interaction Performance
11.5 Network / Loading Performance
11.6 Core Web Vitals & Real User Performance
11.7 Frontend Security
11.8 Security & Performance Incident Lab
```

---

---

## 3. Dự án Thực hành (Stage Project)



---

## 4. Tiêu chí Hoàn thành & Đầu ra (Exit & Prerequisites)

* **Điều kiện tiên quyết (Prerequisites)**: Hoàn thành Stage 10
* **Cấp bậc đầu ra (Exit Level)**: `Performance Profiling & Security Mastered (L7)`

### Tiêu chí kiểm thử năng lực thực tế:

## Performance Fundamentals

* [ ] Phân biệt speed, latency, throughput, responsiveness.
* [ ] Phân biệt lab và field.
* [ ] Biết performance budget.
* [ ] Dùng measurement trước optimization.

## JavaScript Engine

* [ ] Giải thích parsing ở mức conceptual.
* [ ] Hiểu JIT awareness.
* [ ] Hiểu deoptimization.
* [ ] Hiểu hidden classes/shapes.
* [ ] Hiểu inline caching.
* [ ] Nhận biết allocation pressure.
* [ ] Ưu tiên algorithmic optimization trước micro-optimization.

## Memory

* [ ] Hiểu reachability.
* [ ] Hiểu mark-and-sweep.
* [ ] Hiểu generational GC concept.
* [ ] Phân biệt unreachable object và memory leak.
* [ ] Nhận diện closure/listener/cache/DOM leak.
* [ ] Dùng Heap Snapshot.
* [ ] Dùng Comparison view.
* [ ] Tìm retaining path.
* [ ] Dùng WeakMap đúng use case.

## Browser Performance

* [ ] Trace interaction → render → paint.
* [ ] Debug long task.
* [ ] Debug INP.
* [ ] Debug layout thrashing.
* [ ] Analyze large list.
* [ ] Chọn virtualization khi phù hợp.
* [ ] Profile React render.

## Network Performance

* [ ] Đọc waterfall.
* [ ] Phân tích TTFB.
* [ ] Debug LCP.
* [ ] Optimize JS cost.
* [ ] Optimize images/fonts.
* [ ] Analyze third-party JS.
* [ ] Enforce bundle budgets.

## Core Web Vitals

* [ ] Giải thích LCP.
* [ ] Giải thích INP.
* [ ] Giải thích CLS.
* [ ] Biết ngưỡng tốt hiện tại.
* [ ] Phân biệt lab/field measurement.
* [ ] Đo RUM.
* [ ] Phân tích p75.
* [ ] Detect regression.

## Security

* [ ] Threat model cơ bản.
* [ ] Nhận diện XSS.
* [ ] Nhận diện unsafe DOM sinks.
* [ ] Hiểu CSP.
* [ ] Hiểu Trusted Types.
* [ ] Hiểu CSRF.
* [ ] Phân biệt CORS và CSRF.
* [ ] Authentication vs Authorization.
* [ ] Token storage trade-offs.
* [ ] Open redirect.
* [ ] Prototype pollution awareness.
* [ ] Dependency/supply-chain risk.
* [ ] Không để secrets trong client.

## Engineering

* [ ] Hoàn thành 8 incident labs.
* [ ] Mỗi incident có measurement và root cause.
* [ ] Chứng minh fix bằng measurement trước/sau.
* [ ] Viết postmortem.
* [ ] Viết prevention/action items.

---

</div>
