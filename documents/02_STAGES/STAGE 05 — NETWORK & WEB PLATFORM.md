# JAVASCRIPT ENGINEERING MASTERY
## STAGE 5 — NETWORK & WEB PLATFORM
### Detailed Curriculum v1

---

# 0. Stage Overview

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

# 1. Phạm vi kiến thức

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

# 2. MODULE 5.1 — NETWORK FUNDAMENTALS

## Mục tiêu

Xây mental model cho:

> Khi browser muốn lấy một resource từ server, chuyện gì xảy ra trước khi HTTP request được gửi?

---

## Lesson 5.1.1 — Internet Mental Model

Hiểu các thành phần:

```text id="6w5f9s"
Client
Server
Network
Router
DNS
CDN
Proxy
```

Không cần đi sâu routing protocols.

Mục tiêu:

> Browser không kết nối trực tiếp đến “API”.

---

## Lesson 5.1.2 — URL

Phân tích:

```text id="6g9ep4"
https://api.example.com:443/users?id=10#profile
```

Các phần:

- scheme
- host
- port
- path
- query
- fragment

Phải hiểu fragment thường không được gửi trong HTTP request.

---

## Lesson 5.1.3 — DNS

### Kiến thức

- Domain name
- Resolver
- Recursive lookup
- Authoritative server
- DNS record
- TTL

Mental model:

```text id="gdw6bg"
Browser
 ↓
Resolver
 ↓
Root
 ↓
TLD
 ↓
Authoritative
 ↓
IP
```

Không yêu cầu thuộc toàn bộ DNS record types.

Biết thực tế:

- A
- AAAA
- CNAME
- TXT

---

## Lesson 5.1.4 — DNS Caching

- Browser cache
- OS cache
- Resolver cache
- TTL
- Stale DNS

### Incident Lab

Một domain đổi server nhưng một số user vẫn truy cập IP cũ.

Giải thích tại sao.

---

## Lesson 5.1.5 — IP & Ports

- IPv4
- IPv6
- Port
- Listening service

Phân biệt:

```text id="m9c2v6"
domain
IP
port
protocol
```

---

## Lesson 5.1.6 — TCP Mental Model

Chỉ cần đủ cho Frontend Engineer:

- connection
- reliability
- ordering
- retransmission
- congestion awareness

Không học TCP implementation.

---

## Lesson 5.1.7 — Connection Setup

Mental model:

```text id="mpmcz6"
DNS
 ↓
TCP connection
 ↓
TLS
 ↓
HTTP
```

Đây là foundation cho Network waterfall analysis.

---

# 3. MODULE 5.2 — HTTP

## Mục tiêu

HTTP phải trở thành một mental model, không chỉ là:

```js id="fpb2c0"
fetch(url)
```

---

## Lesson 5.2.1 — HTTP Request

Phân tích:

```text id="20vaz9"
Method
Path
Headers
Body
```

---

## Lesson 5.2.2 — HTTP Response

- Status
- Headers
- Body

Phân biệt:

```text id="xj2mfg"
transport success
vs
application success
```

Ví dụ:

```text
HTTP 200
```

không đảm bảo business operation thành công.

---

## Lesson 5.2.3 — HTTP Methods

Core:

- GET
- POST
- PUT
- PATCH
- DELETE

Phải hiểu:

```text id="w4vh2m"
safe
idempotent
```

khác nhau thế nào.

---

## Lesson 5.2.4 — Status Codes

Không học thuộc 100 codes.

Nhóm cần biết:

```text id="h7v3j1"
2xx success
3xx redirection
4xx client / request problem
5xx server problem
```

Quan trọng:

- 200
- 201
- 204
- 301
- 302
- 304
- 307
- 308
- 400
- 401
- 403
- 404
- 409
- 422
- 429
- 500
- 502
- 503
- 504

---

## Lesson 5.2.5 — Headers

Các header frontend phải biết:

- `Content-Type`
- `Accept`
- `Authorization`
- `Cache-Control`
- `ETag`
- `Cookie`
- `Set-Cookie`
- `Location`
- `Vary`
- `Origin`

---

## Lesson 5.2.6 — Content Negotiation

Hiểu:

```text id="8axf4x"
Accept
Content-Type
Content-Encoding
```

Không đồng nhất:

```text
Content-Type
```

với:

```text
Content-Encoding
```

---

## Lesson 5.2.7 — Request / Response Body

- JSON
- text
- binary
- multipart/form-data
- FormData

Bridge trực tiếp sang:

- file upload
- form
- API

---

## Lesson 5.2.8 — Redirect

Phân biệt:

```text id="z9x3y1"
301
302
307
308
```

và vì sao method preservation khác nhau.

---

## Lesson 5.2.9 — Conditional Requests

Foundation:

```text id="z1n1lm"
ETag
If-None-Match
Last-Modified
If-Modified-Since
304
```

---

# 4. MODULE 5.3 — TLS, DNS & CONNECTION LIFECYCLE

## Mục tiêu

Hiểu request không đi thẳng từ Browser → API.

---

## Lesson 5.3.1 — TLS

Mental model:

```text id="y2clc4"
Client
 ↓
TLS handshake
 ↓
certificate verification
 ↓
secure channel
 ↓
HTTP
```

---

## Lesson 5.3.2 — Certificates

- Certificate
- CA
- Trust chain
- Hostname verification
- Expiration

Frontend không cần tự quản certificate architecture, nhưng phải hiểu:

> HTTPS dựa trên trust relationship nào?

---

## Lesson 5.3.3 — TLS vs HTTP

Phân biệt:

```text id="i9g9jp"
TLS secures transport
HTTP defines application protocol
```

---

## Lesson 5.3.4 — Connection Reuse

Hiểu:

- persistent connections
- connection reuse
- multiplexing concept

---

## Lesson 5.3.5 — HTTP/1.1

Foundation:

- persistent connection
- request ordering
- connection limitations
- head-of-line blocking ở HTTP/1.1 connection/request model

---

## Lesson 5.3.6 — HTTP/2

- binary framing
- multiplexing
- streams
- header compression concept

Không học thuộc protocol frame format.

---

## Lesson 5.3.7 — HTTP/3

- QUIC
- UDP foundation
- connection migration
- stream independence concept

---

## Lesson 5.3.8 — 0-RTT Awareness

Hiểu:

> giảm latency nhưng có replay considerations.

Không yêu cầu thiết kế TLS protocol.

---

## Lesson 5.3.9 — Full Request Lifecycle

Người học phải vẽ được:

```text id="r6j2ry"
URL
 ↓
DNS
 ↓
Connection
 ↓
TLS
 ↓
Request
 ↓
Server
 ↓
Response
 ↓
Browser
```

Đây là một **core exit criterion**.

---

# 5. MODULE 5.4 — BROWSER SECURITY MODEL

## Mục tiêu

Hiểu tại sao Browser ngăn một số request, và security model được thiết kế như thế nào.

---

## Lesson 5.4.1 — Origin

Origin gồm:

```text id="7y85r1"
scheme
+
host
+
port
```

Hai URL khác origin nếu một trong ba khác nhau.

---

## Lesson 5.4.2 — Same-Origin Policy

Hiểu:

> Browser mặc định ngăn một số cross-origin interactions để bảo vệ user.

Không đồng nhất SOP với CORS.

---

## Lesson 5.4.3 — CORS Mental Model

CORS là:

> Browser enforcement mechanism dựa trên server-provided headers.

Không phải:

> “server block request”.

---

## Lesson 5.4.4 — Simple Request

Awareness về:

- method
- headers
- content type restrictions

---

## Lesson 5.4.5 — Preflight

```text id="wz4gy1"
Browser
 ↓
OPTIONS
 ↓
Server policy
 ↓
Actual request
```

Phải biết vì sao request có thể phát sinh `OPTIONS`.

---

## Lesson 5.4.6 — Credentials

- cookies
- credentialed requests
- origin policy interaction

---

## Lesson 5.4.7 — Cookie Attributes

Foundation:

- `Secure`
- `HttpOnly`
- `SameSite`
- `Path`
- `Domain`
- `Expires` / `Max-Age`

Security implications sẽ quay lại Stage 11.

---

## Lesson 5.4.8 — CSP Awareness

Hiểu:

> Content Security Policy hạn chế những nguồn mà browser được phép tải/thực thi.

Không cần viết CSP policy hoàn chỉnh ở đây.

---

## Lesson 5.4.9 — HSTS

Hiểu:

> Browser có thể được yêu cầu chỉ sử dụng HTTPS cho một origin.

---

## Lesson 5.4.10 — Mixed Content

- HTTPS page
- HTTP resource
- Browser blocking

---

# 6. MODULE 5.5 — CACHING & DELIVERY

## Mục tiêu

Caching là một trong những kỹ năng phân biệt Frontend Engineer với người chỉ gọi API.

---

## Lesson 5.5.1 — Why Cache?

Hiểu:

```text id="6dn23l"
latency
bandwidth
server load
user experience
```

---

## Lesson 5.5.2 — Cache-Control

Core directives:

- `max-age`
- `no-cache`
- `no-store`
- `private`
- `public`
- `immutable`
- `must-revalidate` awareness

---

## Lesson 5.5.3 — `no-cache` vs `no-store`

Đây là edge case bắt buộc.

Phân biệt:

```text id="p3j3ew"
no-cache
≠
do not store
```

---

## Lesson 5.5.4 — Browser Cache

Mental model:

```text id="48kx4h"
Request
 ↓
Cache lookup
 ↓
Fresh?
 ├── yes → reuse
 └── no → validation/request
```

---

## Lesson 5.5.5 — ETag Validation

```text id="jvk56g"
Client
→ ETag
→ If-None-Match
→ 304
```

Phải hiểu 304 không phải resource body mới.

---

## Lesson 5.5.6 — Last-Modified

- `Last-Modified`
- `If-Modified-Since`

So sánh với ETag ở mức practical.

---

## Lesson 5.5.7 — `Vary`

Hiểu:

> Cache key có thể phụ thuộc vào request headers.

---

## Lesson 5.5.8 — CDN

Mental model:

```text id="z0w3q2"
User
 ↓
Edge
 ↓
Origin
```

Hiểu:

- cache hit
- cache miss
- purge/invalidation
- TTL

---

## Lesson 5.5.9 — Cache Invalidation

Các chiến lược:

```text id="5yy1f9"
TTL
versioned assets
purge
tag-based invalidation ở application layer
```

Mục tiêu:

> Hiểu tại sao cache invalidation là problem engineering, không phải chỉ một HTTP header.

---

## Lesson 5.5.10 — Resource Hints

- preload
- prefetch
- preconnect
- dns-prefetch

Phải hiểu trade-off:

> preload sai có thể cạnh tranh bandwidth với resource quan trọng hơn.

---

## Lesson 5.5.11 — Compression

- gzip
- Brotli
- Content-Encoding

Hiểu:

```text id="g4t7lh"
compressed bytes
vs
decoded resource
```

---

# 7. MODULE 5.6 — API & DATA COMMUNICATION

## Mục tiêu

Frontend phải biết **hợp đồng giao tiếp với Backend**, không chỉ biết endpoint.

---

## Lesson 5.6.1 — API Contract

- request contract
- response contract
- error contract
- versioning

---

## Lesson 5.6.2 — REST Mental Model

- resource
- representation
- HTTP methods
- statelessness

Không cần học REST maturity model như mục tiêu chính.

---

## Lesson 5.6.3 — Resource Modeling

Ví dụ:

```text id="3jw9te"
/users
/users/:id
/users/:id/orders
```

Phải tránh thiết kế endpoint theo UI component một cách máy móc.

---

## Lesson 5.6.4 — Pagination

### Offset

```text id="7slj2e"
?page=10
```

### Cursor

```text id="r7cvm5"
?cursor=abc
```

Phải hiểu:

- deep pagination
- consistency
- insertion/deletion effects

---

## Lesson 5.6.5 — Cursor Pagination Correctness

Scenario:

```text id="h2jxx4"
user scrolling
+
new items inserted
+
existing items deleted
```

Thiết kế để tránh:

```text id="n7n2i8"
duplicate
missing item
wrong ordering
```

---

## Lesson 5.6.6 — Idempotency

Hiểu:

> Cùng một logical operation có thể được gửi nhiều lần nhưng không tạo unintended duplicate side effects.

Ví dụ:

```text id="l7g8u5"
payment
order creation
form submission
```

---

## Lesson 5.6.7 — Rate Limiting

- `429`
- Retry-After
- client behavior
- backoff

---

## Lesson 5.6.8 — API Errors

Thiết kế error model:

```text id="qbe5e3"
network failure
HTTP failure
validation error
business error
timeout
cancelled
```

Không gộp tất cả thành:

```text
"Something went wrong"
```

---

## Lesson 5.6.9 — Fetch Engineering

Dùng `fetch` đúng cách:

- timeout
- abort
- response validation
- JSON parsing
- status handling
- retry policy

---

## Lesson 5.6.10 — Runtime Validation

Kết nối Stage 6:

```text id="r4nd9u"
TypeScript
≠
runtime truth
```

API response phải được xem là untrusted data.

---

# 8. MODULE 5.7 — REALTIME & RESILIENT NETWORKING

## Mục tiêu

Hiểu communication không phải lúc nào cũng:

```text id="xqv5re"
request
→ response
→ done
```

Realtime system có:

- long-lived connections
- reconnect
- ordering
- duplicate events
- connection loss
- backpressure

---

## Lesson 5.7.1 — Polling

- fixed interval
- adaptive polling
- problems

---

## Lesson 5.7.2 — Long Polling

Mental model:

```text id="3z5d0q"
request
→ server waits
→ response
→ new request
```

---

## Lesson 5.7.3 — Server-Sent Events

- one-way server → client
- persistent connection
- reconnect behavior

---

## Lesson 5.7.4 — WebSocket

- connection
- upgrade
- open
- message
- close
- error

---

## Lesson 5.7.5 — SSE vs WebSocket

So sánh theo:

```text id="55tr91"
directionality
protocol complexity
reconnect
proxy friendliness
use case
```

Không mặc định WebSocket luôn tốt hơn SSE.

---

## Lesson 5.7.6 — Reconnection

Thiết kế:

```text id="z8e9l5"
disconnect
 ↓
backoff
 ↓
reconnect
 ↓
resync
```

---

## Lesson 5.7.7 — Duplicate Events

Server/client có thể gửi hoặc nhận duplicate.

Thiết kế:

```text id="0f3b0q"
eventId
deduplication
idempotent handler
```

---

## Lesson 5.7.8 — Ordering

Events:

```text id="m3my3f"
A
B
C
```

nhưng network có thể tạo behavior khó đoán.

Phải xác định:

- sequence number
- event timestamp awareness
- server ordering

---

## Lesson 5.7.9 — Realtime State Recovery

Connection bị mất 20 giây.

Khi reconnect:

```text id="wwrv0u"
replay?
resync?
full refetch?
```

Phải lựa chọn theo protocol/application design.

---

## Lesson 5.7.10 — Network Resilience

Đưa Stage 3 patterns vào network:

- timeout
- retry
- cancellation
- backoff
- jitter
- offline detection
- reconnect
- stale state

---

# 9. INTEGRATION LAB — STAGE 5

# Project 5 — Network-aware Frontend Client

Tự xây một API client nhỏ.

```js id="s9i1od"
const client = createClient({
  baseURL,
  timeout,
  retry
});
```

---

## Requirement 1 — HTTP

Hỗ trợ:

```text id="c8v4z6"
GET
POST
PATCH
DELETE
```

---

## Requirement 2 — Error Classification

Phân loại:

```text id="1tvkqf"
4xx
5xx
network
timeout
abort
parse
validation
```

---

## Requirement 3 — Retry

Chỉ retry theo policy.

---

## Requirement 4 — Timeout

Không để request treo vô thời hạn.

---

## Requirement 5 — Response Validation

Response phải pass runtime schema.

---

## Requirement 6 — Pagination

Implement cursor pagination.

---

## Requirement 7 — Cache

Implement memory cache đơn giản:

```text id="n7cv63"
key
value
TTL
invalidation
```

---

## Requirement 8 — Realtime

Thêm:

```text id="4c2b7l"
SSE or WebSocket
```

với:

- reconnect
- duplicate protection
- resync

---

# 10. EDGE CASE LAB

## Case 1 — DNS Stale

Domain đổi IP nhưng một số user vẫn vào server cũ.

---

## Case 2 — CORS Preflight

Request JSON:

```http
POST
Content-Type: application/json
```

Phải giải thích vì sao browser có thể gửi `OPTIONS`.

---

## Case 3 — Cache Bug

User vừa update profile nhưng vẫn nhận response cũ từ cache.

Thiết kế invalidation.

---

## Case 4 — `no-cache` Misunderstanding

Developer nghĩ:

> `no-cache` = browser không lưu.

Giải thích tại sao sai.

---

## Case 5 — ETag

Server trả:

```text
304 Not Modified
```

Frontend code đang cố parse body JSON.

Xác định bug.

---

## Case 6 — Rate Limit

API trả:

```text
429
Retry-After: 10
```

Client phải làm gì?

---

## Case 7 — Cursor Pagination

User load page 1.

Một item mới được insert ở đầu dataset.

Page 2 bị duplicate/missing item.

Phân tích.

---

## Case 8 — Reconnect Storm

100,000 clients mất connection cùng lúc.

Tất cả reconnect ngay.

Phân tích hệ quả và remediation.

---

# 11. RE-IMPLEMENTATION LAB

## 11.1 — Simple HTTP Client

```js id="u8jk39"
request(url, options)
```

Có:

- timeout
- abort
- JSON parsing
- error normalization

---

## 11.2 — Memory Cache

```js id="vkj7n3"
get
set
delete
clear
```

có TTL.

---

## 11.3 — Cursor Pagination Manager

```text id="qylz52"
loadNext
hasNext
items
dedupe
```

---

## 11.4 — Retry Scheduler

```text id="012m4g"
retry
backoff
jitter
budget
```

---

## 11.5 — Reconnection Manager

```text id="2sw8vm"
connect
disconnect
retry
backoff
reset
```

---

# 12. DEBUG LAB

## Bug 1 — Works Locally, Fails in Production

Phân tích:

```text id="e4jz5p"
CORS
TLS
DNS
CDN
cache
environment
```

---

## Bug 2 — User Sees Old Data

Điều tra:

```text id="7h1e0o"
browser cache
CDN cache
application cache
server response
```

---

## Bug 3 — API Suddenly Gets 10x Traffic

Điều tra:

```text id="qdx8ah"
retry
polling
duplicate request
component mounting
reconnect storm
```

---

## Bug 4 — Duplicate Feed Items

Điều tra:

```text id="dsldgk"
pagination
realtime event
retry
reconnect
deduplication
```

---

## Bug 5 — Request Never Finishes

Kiểm tra:

```text id="1o8xv2"
network
server
timeout
abort
connection
```

---

# 13. DESIGN LAB

## Scenario 1 — User Profile

Chọn:

```text id="e4sl1p"
Cacheable?
TTL?
ETag?
revalidation?
```

---

## Scenario 2 — Product Catalog

Thiết kế:

```text id="m2oqnh"
CDN
browser cache
API cache
cursor pagination
```

---

## Scenario 3 — Payment

Thiết kế:

```text id="6cddwx"
POST
idempotency
retry
timeout
failure recovery
```

Không được retry payment một cách mù quáng.

---

## Scenario 4 — Realtime Dashboard

Chọn:

```text id="z5vafm"
polling
SSE
WebSocket
```

và bảo vệ quyết định.

---

# 14. SOURCE & DOCUMENTATION

Primary references:

- MDN HTTP
- MDN Fetch
- MDN CORS
- MDN HTTP caching
- MDN WebSocket
- MDN Server-sent events
- WHATWG Fetch
- WHATWG HTML networking concepts
- RFC material ở mức cần thiết

Browser/network tooling:

- Chrome DevTools Network
- `curl`
- browser security panel

Không yêu cầu đọc toàn bộ RFC.

Mục tiêu:

> Có thể truy nguồn khi một behavior HTTP/network cần được xác minh chính xác.

---

# 15. TEACH-BACK

## Level 1

> HTTP request gồm những thành phần nào?

## Level 2

> Browser thực hiện DNS/TLS/HTTP theo flow nào?

## Level 3

> CORS thực sự làm gì?

## Level 4

> Cache-Control + ETag hoạt động như thế nào?

## Level 5

> Thiết kế network client thế nào để chịu được timeout, retry storm, duplicate event, stale cache và reconnect?

---

# 16. EXIT CRITERIA — STAGE 5

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

# 17. STAGE 5 CHECKPOINT

## Part A — Request Lifecycle

Không nhìn tài liệu, vẽ:

```text id="8h6p2u"
URL
 ↓
DNS
 ↓
Connection
 ↓
TLS
 ↓
Request
 ↓
CDN / Proxy
 ↓
Origin
 ↓
Response
 ↓
Browser
```

---

## Part B — HTTP Design

Thiết kế request cho:

```text id="3d3p89"
Create order
Update profile
Delete comment
Fetch feed
Upload image
```

Chọn:

```text
method
status
headers
idempotency
```

---

## Part C — Cache Diagnosis

User:

> “Tôi vừa publish bài viết nhưng trình duyệt vẫn hiện version cũ.”

Người học phải xác định từng tầng:

```text id="7kg30t"
Browser
CDN
Application cache
Server
```

---

## Part D — Security

Scenario:

Frontend:

```text id="f6kgee"
https://app.example.com
```

API:

```text id="r3g0cz"
https://api.example.com
```

Yêu cầu credentialed request.

Phải thiết kế:

```text id="hgrxj3"
Origin
CORS
credentials
cookie
preflight
```

---

## Part E — Realtime

100,000 clients mất connection cùng lúc.

Phải thiết kế:

```text id="q6y8ct"
reconnect
backoff
jitter
rate protection
resync
```

---

# 18. STAGE 5 CAPSTONE

# Network-aware Frontend Platform

Final system gồm:

```text id="1u1ccm"
HTTP Client
├── timeout
├── cancellation
├── retry
├── backoff
├── error normalization
├── runtime validation
└── logging

Cache Layer
├── TTL
├── invalidation
└── deduplication

Pagination Layer
├── cursor
├── dedupe
└── ordering

Realtime Layer
├── SSE/WebSocket
├── reconnect
├── duplicate protection
└── resync
```

Sau đó inject:

```text id="9k5n6b"
DNS failure
CORS failure
500
503
429
timeout
stale cache
duplicate event
reconnect storm
```

Người học phải debug và đưa ra remediation.

---

# 19. STAGE 5 → STAGE 6 DEPENDENCY

Sau Stage 5, người học hiểu:

```text id="q0nf60"
Browser
+
Async
+
HTTP
+
Security
+
Caching
+
API
+
Realtime
```

Đây là thời điểm phù hợp để bước sang:

# STAGE 6 — TYPESCRIPT ENGINEERING

Vì TypeScript lúc này sẽ không còn được học như:

> “thêm type vào JavaScript”.

Mà được dùng để giải quyết những problem thực tế vừa xuất hiện:

```text id="d6knrf"
API Contract
        ↓
Domain Model
        ↓
State Model
        ↓
Component Props
        ↓
Generic Data Layer
```

Đồng thời Stage 6 sẽ sửa một misconception quan trọng:

```text id="h9ltzc"
TypeScript compile-time safety
        ≠
Runtime data safety
```

Để sau đó kết hợp:

```text id="9l0ta8"
TypeScript
+
Zod / runtime validation
+
API
+
React
```

---

# 20. STAGE 5 CORE PRINCIPLE

Một Junior thường nhìn network như:

```text id="w6zdb1"
fetch()
↓
JSON
```

Một Frontend Engineer phải nhìn:

```text id="6j8d5f"
DNS
 ↓
Connection
 ↓
TLS
 ↓
HTTP
 ↓
Cache
 ↓
CDN
 ↓
API contract
 ↓
Browser security
 ↓
Failure
 ↓
Retry
 ↓
Consistency
 ↓
User experience
```

Và khi API chậm hoặc sai, câu hỏi không còn là:

> “Backend chậm à?”

mà phải trở thành:

```text id="hdz9av"
DNS?
Connection?
TLS?
CDN?
Cache?
Request payload?
Server processing?
Retry?
Serialization?
Client parsing?
Rendering?
```

Đó là mental model Network mà Stage 6–15 sẽ tiếp tục dựa vào.