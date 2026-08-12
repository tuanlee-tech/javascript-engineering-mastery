---
title: "Stage 5: Network & Web Platform"
description: "Trang tổng quan Stage 5: Network & Web Platform."
head:
  - - meta
    - property: og:image
      content: /og/stage-05.png
---

# Stage 5: Network & Web Platform

<div style="text-align: center; margin: 1.5rem 0;">
  <img src="/icons/stage-05.svg" alt="Stage Icon" style="width: 80px; height: 80px; margin: 0 auto;" />
</div>

<div class="vp-doc">

## 1. Tổng quan Stage (Stage Overview)

## Mục tiêu

Stage 5 trả lời câu hỏi:

> **Frontend giao tiếp với Internet và Backend như thế nào, và tại sao một request từ browser có thể chậm, sai, thất bại hoặc mất an toàn?**

Sau Stage 4, người học đã hiểu:

```text
JavaScript
→ Async
→ Browser
→ DOM
→ Rendering
→ Browser APIs
```

Nhưng một ứng dụng thực tế còn có:

```text
Browser
   ↓
DNS
   ↓
Network
   ↓
TLS
   ↓
HTTP
   ↓
CDN / Proxy / Server
   ↓
API
   ↓
Response
   ↓
Browser
```

Stage 5 xây **Web Platform + Network mental model** để sau này hiểu được:

- `fetch`
- TanStack Query
- HTTP caching
- Authentication
- CORS
- CDN
- API design
- WebSocket
- SSE
- Next.js
- BFF
- Performance
- Frontend security

Đây là một trong những foundation quan trọng nhất để từ **Frontend Developer** chuyển thành **Frontend Engineer**.

---

---

## 2. Phạm vi Kiến thức & Mô-đun (Scope & Modules)

Stage 5 gồm **7 Modules / 34 Lessons**:

```text id="5xq7z4"
5.1 Network Fundamentals
5.2 HTTP
5.3 TLS, DNS & Connection Lifecycle
5.4 Browser Security Model
5.5 Caching & Delivery
5.6 API & Data Communication
5.7 Realtime & Resilient Networking
```

Không đào sâu:

- Database internals
- Backend framework internals
- Kubernetes
- Cloud architecture
- Distributed systems ở cấp backend

Nhưng phải hiểu đủ để frontend đưa ra quyết định đúng.

---

---

## 3. Dự án Thực hành (Stage Project)



---

## 4. Tiêu chí Hoàn thành & Đầu ra (Exit & Prerequisites)

* **Điều kiện tiên quyết (Prerequisites)**: Hoàn thành Stage 4
* **Cấp bậc đầu ra (Exit Level)**: `Network Protocols Mastered (L6-L7)`

### Tiêu chí kiểm thử năng lực thực tế:

## Network

- [ ] Giải thích được URL → DNS → connection → TLS → HTTP.
- [ ] Phân biệt domain, IP, port, protocol.
- [ ] Giải thích DNS caching ở mức practical.
- [ ] Giải thích connection reuse.

## HTTP

- [ ] Hiểu request/response.
- [ ] Hiểu HTTP methods.
- [ ] Phân biệt safe và idempotent.
- [ ] Chọn status code hợp lý trong các scenario phổ biến.
- [ ] Hiểu headers quan trọng.

## TLS

- [ ] Giải thích TLS handshake ở mức conceptual.
- [ ] Hiểu certificate trust chain.
- [ ] Phân biệt TLS và HTTP.
- [ ] Giải thích HTTP/1.1 vs HTTP/2 vs HTTP/3.

## Security

- [ ] Định nghĩa origin chính xác.
- [ ] Giải thích Same-Origin Policy.
- [ ] Giải thích CORS.
- [ ] Biết khi nào xảy ra preflight.
- [ ] Hiểu cookie security attributes.
- [ ] Nhận biết mixed content.

## Caching

- [ ] Phân biệt `no-cache` và `no-store`.
- [ ] Hiểu ETag / 304.
- [ ] Hiểu CDN cache hit/miss.
- [ ] Chọn cache strategy cơ bản.
- [ ] Nhận biết cache invalidation problem.

## API

- [ ] Thiết kế API contract cơ bản.
- [ ] Implement cursor pagination.
- [ ] Xử lý rate limiting.
- [ ] Thiết kế idempotent operation.
- [ ] Validate API response runtime.

## Realtime

- [ ] So sánh polling / SSE / WebSocket.
- [ ] Implement reconnect.
- [ ] Xử lý duplicate events.
- [ ] Xử lý connection loss.
- [ ] Thiết kế resync strategy.

## Engineering

- [ ] Hoàn thành Network-aware Frontend Client.
- [ ] Debug được stale cache.
- [ ] Debug được CORS/preflight.
- [ ] Debug được reconnect storm.
- [ ] Debug được duplicate pagination/realtime events.
- [ ] Đưa ra network architecture decision có trade-off.

---

</div>
