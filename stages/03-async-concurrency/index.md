---
title: "Stage 3: Asynchronous JavaScript & Concurrency"
description: "Trang tổng quan Stage 3: Asynchronous JavaScript & Concurrency."
head:
  - - meta
    - property: og:image
      content: /og/stage-03.png
---

# Stage 3: Asynchronous JavaScript & Concurrency

<div style="text-align: center; margin: 1.5rem 0;">
  <img src="/icons/stage-03.svg" alt="Stage Icon" style="width: 80px; height: 80px; margin: 0 auto;" />
</div>

<div class="vp-doc">

## 1. Tổng quan Stage (Stage Overview)

## Mục tiêu

Stage 3 trả lời câu hỏi:

> **JavaScript xử lý những công việc không xảy ra ngay lập tức như thế nào?**

Đây là bước chuyển rất quan trọng:

```text
Stage 0
Biết viết JavaScript
        ↓
Stage 1
Hiểu JavaScript thực thi thế nào
        ↓
Stage 2
Hiểu Object / Function model
        ↓
Stage 3
Hiểu JavaScript xử lý thời gian,
async và concurrency thế nào
```

Frontend hiện đại phụ thuộc rất lớn vào asynchronous programming:

```text
User Input
API Request
Timer
Animation
File
Streaming
WebSocket
React Effects
Server Data
```

Nếu không hiểu Stage 3, người học thường rơi vào các lỗi:

```text
race condition
stale response
duplicate request
request leak
retry storm
infinite loading
wrong loading state
out-of-order update
```

Stage này là foundation trực tiếp cho:

- Browser Runtime
- Fetch
- React
- TanStack Query
- State Management
- Realtime
- Next.js
- Streaming
- Production reliability

---

---

## 2. Phạm vi Kiến thức & Mô-đun (Scope & Modules)

Stage 3 gồm **7 Modules / 32 Lessons**:

```text
3.1 Synchronous vs Asynchronous Execution
3.2 Event Loop
3.3 Promise Model
3.4 Async / Await
3.5 Concurrency Patterns
3.6 Cancellation & Reliability
3.7 Race Conditions & Async Architecture
```

Điểm quan trọng:

> Stage 3 không chỉ dạy API `Promise`.

Mục tiêu là xây **concurrency mental model**.

---

---

## 3. Dự án Thực hành (Stage Project)



---

## 4. Tiêu chí Hoàn thành & Đầu ra (Exit & Prerequisites)

* **Điều kiện tiên quyết (Prerequisites)**: Hoàn thành Stage 2
* **Cấp bậc đầu ra (Exit Level)**: `Asynchronous Core Mastered (L6-L7)`

### Tiêu chí kiểm thử năng lực thực tế:

## Event Loop

- [ ] Vẽ được Call Stack + Task + Microtask ở mức conceptual.
- [ ] Dự đoán đúng execution order của 20 bài async.
- [ ] Giải thích được microtask checkpoint.
- [ ] Giải thích được vì sao `setTimeout(0)` không chạy ngay.
- [ ] Nhận biết microtask starvation.

## Promise

- [ ] Hiểu Promise state.
- [ ] Hiểu Promise resolution.
- [ ] Hiểu `.then()` tạo Promise mới.
- [ ] Trace được chaining.
- [ ] Trace được error propagation.
- [ ] Chọn đúng `all`, `allSettled`, `race`, `any`.
- [ ] Implement được simplified Promise.

## Async/Await

- [ ] Giải thích `async` trả Promise.
- [ ] Giải thích behavior của `await`.
- [ ] Phân biệt sequential và parallel async.
- [ ] Không dùng sai `forEach(async ...)`.

## Concurrency

- [ ] Phân biệt sequential / concurrent / parallel.
- [ ] Implement bounded concurrency.
- [ ] Implement in-flight deduplication.
- [ ] Hiểu backpressure.

## Reliability

- [ ] Cancel được Fetch.
- [ ] Implement timeout.
- [ ] Implement retry + backoff + jitter.
- [ ] Có retry budget.
- [ ] Phân biệt retryable / non-retryable errors.

## Race Conditions

- [ ] Nhận diện stale response.
- [ ] Bảo vệ request ordering.
- [ ] Thiết kế optimistic update + rollback.
- [ ] Mô hình hóa async state.

## Engineering

- [ ] Hoàn thành Production Async Search Engine.
- [ ] Debug được race condition mà không trial-and-error.
- [ ] Đưa ra được trade-off cho ít nhất 3 async architecture decisions.
- [ ] Teach Back toàn bộ Event Loop + Promise + Concurrency.

---

</div>
