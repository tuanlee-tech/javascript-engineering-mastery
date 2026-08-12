# JAVASCRIPT ENGINEERING MASTERY

## STAGE 11 — PERFORMANCE, MEMORY & SECURITY

### Detailed Curriculum v1

---

# 0. Stage Overview

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

# 1. Nguyên tắc của Stage 11

Có 4 nguyên tắc:

### 1. Không tối ưu bằng cảm giác

Không:

> “`useMemo` chắc sẽ nhanh hơn.”

Mà:

```text
Hypothesis
→ Measure
→ Change
→ Measure again
```

### 2. Không debug memory bằng `console.log`

Phải dùng:

* Heap Snapshot
* Allocation Timeline
* Detached Elements
* Retainer / retaining tree

Chrome DevTools Memory panel hỗ trợ heap snapshots, allocation instrumentation, allocation sampling và detached elements; heap snapshots có thể được so sánh để tìm object giữ lại bất thường. ([Chrome for Developers][1])

### 3. Không coi security là một module riêng

Security phải nằm ở:

```text
Input
→ Parsing
→ State
→ Rendering
→ Network
→ Authentication
→ Authorization
→ Dependencies
→ Deployment
```

### 4. Không học V8 để trở thành V8 engineer

Mục tiêu là:

> hiểu engine đủ để giải thích performance behavior và debug đúng.

MDN mô tả JavaScript dùng automatic memory management/garbage collection, với reachability là mental model quan trọng; các engine hiện đại đều dùng mark-and-sweep và các cải tiến generational/incremental/concurrent/parallel. ([MDN Web Docs][2])

---

# 2. Phạm vi kiến thức

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

# 3. MODULE 11.1 — PERFORMANCE MENTAL MODEL

## Mục tiêu

Trước khi tối ưu phải biết:

> **“Performance” thực sự nghĩa là gì?**

Không phải chỉ là:

```text
Lighthouse score
```

---

## Lesson 11.1.1 — Performance vs Speed

Phân biệt:

```text
speed
latency
throughput
responsiveness
resource efficiency
```

Một application có thể:

* load nhanh nhưng tương tác chậm
* load chậm nhưng runtime mượt
* frontend nhanh nhưng API chậm

---

## Lesson 11.1.2 — User-centric Performance

Người dùng quan tâm:

```text
Khi nào thấy content?
Khi nào có thể interact?
Click có phản hồi không?
Layout có nhảy không?
App có lag dần theo thời gian không?
```

Từ đây giới thiệu:

* LCP
* INP
* CLS

Core Web Vitals hiện tập trung vào loading, interactivity và visual stability với LCP ≤ 2.5s, INP ≤ 200ms và CLS ≤ 0.1 ở ngưỡng 75th percentile. ([web.dev][3])

---

## Lesson 11.1.3 — Lab vs Field

Phân biệt:

```text
Lab
→ controlled environment

Field
→ real users / devices / networks
```

Điểm rất quan trọng:

> Lighthouse không thể đo INP theo cách field measurement làm được, vì INP cần các interaction thực tế; trong lab, TBT thường được dùng như proxy cho responsiveness. ([web.dev][3])

---

## Lesson 11.1.4 — Performance Budget

Thiết lập budget cho:

```text
JavaScript
Images
Fonts
Requests
DOM
LCP
INP
CLS
```

Không phải mọi project đều có cùng budget.

Budget phải dựa trên:

* product
* target device
* target market
* business requirement

---

## Lesson 11.1.5 — Measurement Hierarchy

Khi user nói:

> “App chậm.”

Không nhảy vào code.

Đi theo:

```text
User complaint
→ Metric
→ Reproduce
→ Profile
→ Root cause
→ Fix
→ Verify
```

---

# 4. MODULE 11.2 — JAVASCRIPT ENGINE & CPU PERFORMANCE

## Mục tiêu

Hiểu đủ về engine để biết code nào tạo ra expensive work.

---

## Lesson 11.2.1 — Parsing

Mental model:

```text
Source
 ↓
Parse
 ↓
Executable representation
```

Mục tiêu:

> source size và complexity có cost.

---

## Lesson 11.2.2 — Interpreter & Bytecode

Hiểu ở mức conceptual:

```text
Source
→ bytecode/intermediate representation
→ execute
```

Không cần học instruction set.

---

## Lesson 11.2.3 — JIT Compilation

Hiểu:

```text
frequently executed code
→ optimization opportunity
```

Nhưng không học theo mental model đơn giản:

> “V8 compile hết JavaScript thành machine code ngay.”

---

## Lesson 11.2.4 — Optimization & Deoptimization

Một đoạn code có thể được optimize rồi deoptimize khi assumptions thay đổi.

Mục tiêu:

> hiểu dynamic language có runtime assumptions.

---

## Lesson 11.2.5 — Hidden Classes / Shapes

Hiểu:

```text
object shape consistency
→ property access optimization
```

Không cần trở thành expert V8 internals.

---

## Lesson 11.2.6 — Inline Caching

Concept:

```text
repeated property access
→ cache information
→ faster lookup
```

---

## Lesson 11.2.7 — Object Shape Stability

So sánh:

```js
const a = { x: 1, y: 2 };
const b = { x: 3, y: 4 };
```

với object được tạo ra qua nhiều mutation/order khác nhau.

Mục tiêu:

> hiểu consistency có thể giúp engine optimize.

Không biến thành “mọi object phải cùng shape bằng mọi giá”.

---

## Lesson 11.2.8 — Allocation Cost

Phân tích:

```text
object creation
array creation
closure
string
intermediate value
```

và allocation pressure.

---

## Lesson 11.2.9 — Algorithmic Cost

Đây là phần quan trọng hơn micro-optimization.

Phải nhận biết:

```text
O(n)
O(n²)
O(log n)
```

và đặc biệt:

> Một thuật toán tốt thường đáng giá hơn trick tối ưu V8.

---

## Lesson 11.2.10 — CPU Profiling

Dùng Chrome Performance:

* CPU time
* call tree
* bottom-up
* flame chart
* hot functions

Chrome DevTools Performance tooling cho phép ghi và phân tích runtime performance; Performance Monitor còn theo dõi CPU, heap size, DOM nodes, event listeners, frames và layout/style recalculations theo thời gian. ([Chrome for Developers][4])

---

## Lesson 11.2.11 — Main Thread Saturation

Khi main thread bị:

```text
JS
+
layout
+
paint
+
event handling
```

chiếm quá nhiều thời gian.

User sẽ thấy:

```text
slow click
jank
input delay
```

---

# 5. MODULE 11.3 — MEMORY MANAGEMENT & GARBAGE COLLECTION

## Mục tiêu

Hiểu:

> Object sống bao lâu và vì sao nó vẫn chưa được garbage collect?

---

## Lesson 11.3.1 — Memory Lifecycle

Mental model:

```text
Allocate
 ↓
Use
 ↓
Become unreachable
 ↓
GC
 ↓
Reclaim
```

Đây là lifecycle cơ bản của memory management. ([MDN Web Docs][2])

---

## Lesson 11.3.2 — Reachability

Phải hiểu:

```text
root
 ↓
reference
 ↓
object
```

Object còn reachable thì chưa thể xem là garbage.

---

## Lesson 11.3.3 — GC Roots

Awareness:

* global roots
* active execution
* reachable references

Không cần học engine-specific root layout.

---

## Lesson 11.3.4 — Mark and Sweep

Mental model:

```text
Mark reachable
      ↓
Sweep unreachable
```

JavaScript engine hiện đại sử dụng các biến thể/phát triển quanh mark-and-sweep; vòng đời cụ thể là implementation detail. ([MDN Web Docs][2])

---

## Lesson 11.3.5 — Generational GC

Concept:

```text
short-lived objects
vs
long-lived objects
```

Hiểu tại sao generational strategies tồn tại.

---

## Lesson 11.3.6 — Promotion

Objects sống lâu có thể được xử lý khác với temporary allocations.

Mục tiêu:

> hiểu allocation patterns ảnh hưởng GC behavior.

---

## Lesson 11.3.7 — GC Is Not a Memory Leak Solution

Cực kỳ quan trọng:

```text
unreachable object
→ GC

reachable but useless object
→ NOT GC
```

Đây chính là bản chất nhiều memory leaks.

---

## Lesson 11.3.8 — Common Memory Leaks

Các nguồn:

```text
event listeners
timers
subscriptions
closures
global references
caches
DOM references
workers
```

---

## Lesson 11.3.9 — Detached DOM

Scenario:

```text
DOM removed
+
JS still references it
```

DOM subtree có thể tiếp tục bị giữ lại.

Chrome DevTools có cơ chế tìm detached DOM trees qua Memory/Heap Snapshot. ([Chrome for Developers][5])

---

## Lesson 11.3.10 — Closure Retention

Kết nối Stage 1:

```text
closure
 ↓
environment
 ↓
object reference
 ↓
object remains reachable
```

---

## Lesson 11.3.11 — Cache Memory Leaks

Một cache không có:

* TTL
* eviction
* size bound

có thể biến thành memory leak/bloat.

---

## Lesson 11.3.12 — WeakMap / WeakSet

Hiểu use case:

> metadata không nên giữ object alive.

---

## Lesson 11.3.13 — WeakRef / FinalizationRegistry

Chỉ học awareness + extremely limited use cases.

MDN lưu ý `WeakRef`/`FinalizationRegistry` không có guarantee về thời điểm cleanup; không nên dùng cho logic chính xác hoặc critical cleanup. ([MDN Web Docs][2])

---

## Lesson 11.3.14 — Heap Snapshot

Workflow:

```text
Snapshot A
→ perform action
→ Snapshot B
→ repeat
→ compare
```

Chrome DevTools hỗ trợ Summary, Comparison, Containment và Statistics views để điều tra object allocation và retaining references. ([Chrome for Developers][1])

---

# 6. MODULE 11.4 — BROWSER RENDERING & INTERACTION PERFORMANCE

## Mục tiêu

Kết hợp Stage 4 Browser Rendering với Stage 8 React Rendering.

---

## Lesson 11.4.1 — Main Thread Work

Phân loại:

```text
JavaScript
Style
Layout
Paint
Composite
```

---

## Lesson 11.4.2 — Long Task

Một task quá dài có thể:

```text
block input
delay rendering
increase INP
```

---

## Lesson 11.4.3 — Interaction Lifecycle

Mental model:

```text
Input
 ↓
Event handlers
 ↓
JavaScript
 ↓
Style/Layout
 ↓
Paint
 ↓
Next Paint
```

INP đo responsiveness của các qualifying interactions trong page lifetime; target tốt hiện tại là ≤200ms ở p75. ([web.dev][6])

---

## Lesson 11.4.4 — Diagnosing INP

Không chỉ:

> “React render chậm.”

Có thể là:

```text
input delay
+
event handler
+
presentation delay
```

Phải xác định phần nào chiếm thời gian.

---

## Lesson 11.4.5 — React Render Cost

Trace:

```text
interaction
→ state update
→ render
→ reconciliation
→ commit
→ browser paint
```

---

## Lesson 11.4.6 — Unnecessary React Rendering

Điều tra:

```text
state placement
props identity
context
external store
component boundary
```

---

## Lesson 11.4.7 — Large Lists

Các strategy:

```text
pagination
windowing
virtualization
incremental rendering
```

---

## Lesson 11.4.8 — Virtualization

Mental model:

```text
100,000 logical items
        ↓
visible window
        ↓
~20–100 DOM items
```

Trade-off:

* accessibility
* dynamic height
* keyboard navigation
* measurement
* SEO

---

## Lesson 11.4.9 — Layout Thrashing

Kết nối Stage 4:

```text
write
→ read layout
→ write
→ read layout
```

Phải phát hiện bằng profiling.

---

## Lesson 11.4.10 — Animation Performance

So sánh:

```text
layout-heavy animation
vs
compositing-friendly animation
```

Không tuyệt đối hóa `transform`.

---

## Lesson 11.4.11 — `content-visibility` / Modern Rendering Tools

Awareness về modern platform features và compatibility.

Các browser features mới tiếp tục trở thành Baseline; curriculum phải kiểm tra compatibility hiện tại thay vì coi mọi feature modern là universal. Baseline 2026 hiện liệt kê thêm nhiều JavaScript/Web API và CSS capabilities mới. ([web.dev][7])

---

# 7. MODULE 11.5 — NETWORK & LOADING PERFORMANCE

## Mục tiêu

Tối ưu từ:

```text
URL
→ Network
→ Server
→ Response
→ Browser
→ Render
```

---

## Lesson 11.5.1 — Performance Waterfall

Đọc:

```text
DNS
TCP/TLS
TTFB
download
parse
execute
render
```

---

## Lesson 11.5.2 — TTFB

TTFB cao có thể kéo LCP lên đáng kể; web.dev khuyến nghị xem TTFB/FCP khi phân tích nguyên nhân LCP chậm. ([web.dev][8])

---

## Lesson 11.5.3 — Critical Rendering Path

Từ:

```text
HTML
CSS
JS
Images
Fonts
```

đến first useful content.

---

## Lesson 11.5.4 — JavaScript Cost

Tách:

```text
download
parse
compile
execute
```

Một file JS “chỉ 500KB” không có nghĩa cost chỉ là 500KB network.

---

## Lesson 11.5.5 — Code Splitting

Kết nối Stage 7:

```text
route split
component split
feature split
```

---

## Lesson 11.5.6 — Lazy Loading

* dynamic import
* below-the-fold content
* heavy widgets

Phải tránh lazy-load critical content.

---

## Lesson 11.5.7 — Images

* format
* dimensions
* responsive images
* compression
* priority
* lazy loading

---

## Lesson 11.5.8 — Fonts

* font loading
* font-display
* preloading
* subset
* layout implications

---

## Lesson 11.5.9 — Third-party JavaScript

Ví dụ:

```text
analytics
ads
chat
maps
A/B testing
```

Third-party code có thể làm:

* network cost
* CPU cost
* privacy/security surface

---

## Lesson 11.5.10 — Cache & CDN Performance

Kết nối Stage 5/10:

```text
cache hit
cache miss
revalidation
CDN
```

---

## Lesson 11.5.11 — Compression

So sánh:

```text
minification
Brotli
gzip
modern compression
```

---

## Lesson 11.5.12 — Performance Budget Enforcement

CI phải detect:

```text
bundle regression
LCP regression
JS budget
```

---

# 8. MODULE 11.6 — CORE WEB VITALS & REAL USER PERFORMANCE

## Mục tiêu

Đưa performance từ:

> local measurement

sang:

> **real-user engineering**.

---

## Lesson 11.6.1 — LCP

LCP đo thời điểm phần tử nội dung lớn nhất trong viewport được render; mức tốt hiện tại là ≤2.5s tại p75. ([web.dev][9])

---

## Lesson 11.6.2 — LCP Subparts

Phân tích:

```text
TTFB
+
resource load delay
+
resource load duration
+
render delay
```

Mục tiêu:

> biết LCP chậm ở layer nào.

---

## Lesson 11.6.3 — INP

Hiểu:

```text
interaction
→ delay
→ handler
→ presentation
```

và INP là field metric đánh giá responsiveness trong suốt page visit. ([web.dev][10])

---

## Lesson 11.6.4 — CLS

Hiểu layout shifts.

Các nguyên nhân phổ biến:

* image không có dimensions
* ads/embed
* dynamically injected content
* fonts

web.dev liệt kê các nguyên nhân này trong hướng dẫn tối ưu CLS. ([web.dev][11])

---

## Lesson 11.6.5 — Field Data

* CrUX awareness
* RUM
* percentile
* segmentation

Không lấy average làm metric duy nhất.

---

## Lesson 11.6.6 — Lab Diagnostics

Công cụ:

* Chrome DevTools Performance
* Lighthouse
* Performance Monitor

Chrome khuyến nghị dùng Lighthouse để bắt đầu đánh giá và sau đó dùng Performance panel/Performance Monitor để điều tra sâu hơn. ([Chrome for Developers][4])

---

## Lesson 11.6.7 — RUM Instrumentation

Dùng:

```text
web-vitals
```

để gửi:

```text
LCP
INP
CLS
```

về hệ thống analytics. web.dev hiện khuyến nghị đo field data ở p75 và segment mobile/desktop. ([web.dev][3])

---

## Lesson 11.6.8 — Performance Regression

Scenario:

```text
Before
LCP = 2.1s

After PR
LCP = 2.9s
```

Phải tìm:

```text
what changed?
which page?
which users?
which resource?
```

---

# 9. MODULE 11.7 — FRONTEND SECURITY

## Mục tiêu

Security không phải thuộc vài chữ viết tắt.

Mục tiêu:

> **Hiểu threat → attack surface → boundary → mitigation → verification.**

---

## Lesson 11.7.1 — Threat Modeling Basics

Cho một feature:

```text
Assets
Actors
Entry points
Trust boundaries
Threats
Controls
```

---

## Lesson 11.7.2 — XSS

Phân biệt:

```text
Stored XSS
Reflected XSS
DOM-based XSS
```

---

## Lesson 11.7.3 — Dangerous DOM APIs

Các API cần cảnh giác:

```text
innerHTML
outerHTML
insertAdjacentHTML
eval
Function()
```

Không có nghĩa mọi use đều vulnerable; phải xem input trust boundary.

---

## Lesson 11.7.4 — React & XSS

Hiểu React giúp escape text trong normal rendering nhưng developer vẫn có thể mở escape hatch:

```text
dangerouslySetInnerHTML
```

và các third-party library có thể tạo HTML sinks.

---

## Lesson 11.7.5 — Trusted Types

Awareness về defense-in-depth cho DOM XSS.

Trusted Types hiện nằm trong Baseline 2026. ([web.dev][7])

---

## Lesson 11.7.6 — CSP

Hiểu:

```text
CSP
→ restrict script/resource execution
```

CSP là một defense-in-depth mechanism và có thể giảm khả năng khai thác XSS bằng cách hạn chế inline/arbitrary scripts. ([OWASP Cheat Sheet Series][12])

---

## Lesson 11.7.7 — CSRF

Hiểu:

> Nếu browser tự gửi credentials, attacker có thể lợi dụng browser gửi request ngoài ý muốn.

Phân biệt mitigation:

* SameSite cookies
* CSRF token
* Origin/Referer validation
* appropriate architecture

---

## Lesson 11.7.8 — CORS ≠ CSRF Protection

Đây là misconception phải loại bỏ.

CORS và CSRF giải quyết các problem khác nhau.

---

## Lesson 11.7.9 — Authentication

Phân biệt:

```text
authentication
vs
session
vs
authorization
```

---

## Lesson 11.7.10 — Token Storage

Đánh giá trade-off:

```text
HttpOnly cookie
vs
memory
vs
localStorage
```

Không học một câu:

> “JWT luôn lưu localStorage.”

---

## Lesson 11.7.11 — OAuth / OIDC Awareness

Hiểu:

```text
User
 ↓
Identity Provider
 ↓
Authorization
 ↓
Application
```

Không yêu cầu trở thành identity engineer.

---

## Lesson 11.7.12 — Authorization

Critical principle:

```text
UI hides button
≠
user authorized
```

Authorization phải được enforce ở trusted server boundary.

---

## Lesson 11.7.13 — Clickjacking

* iframe embedding
* frame protections
* CSP `frame-ancestors`

---

## Lesson 11.7.14 — Open Redirect

Nhận biết:

```text
?redirect=https://evil.example
```

và validate destinations.

---

## Lesson 11.7.15 — Prototype Pollution Awareness

Liên hệ Stage 2 Object Model.

Hiểu attack surface từ unsafe object merging / property manipulation.

---

## Lesson 11.7.16 — Dependency Security

* vulnerable dependency
* malicious package
* typosquatting
* lockfile
* transitive dependencies

---

## Lesson 11.7.17 — Supply-chain Security

Controls:

```text
lockfile
audit
renovation
signature/provenance awareness
least dependency
```

Không coi `npm audit` là security strategy đầy đủ.

---

## Lesson 11.7.18 — Secrets

Frontend code không phải secret boundary.

Không để:

```text
private API key
database credentials
service secrets
```

trong client bundle.

---

# 10. MODULE 11.8 — SECURITY & PERFORMANCE INCIDENT LAB

## Mục tiêu

Đây là phần quan trọng nhất Stage 11.

Không học tiếp theory.

**Cố tình làm hệ thống hỏng.**

---

# Incident 1 — Memory Leak

Scenario:

```text
navigate
→ mount
→ subscribe
→ navigate away
→ repeat 100 times
```

Heap tăng liên tục.

### Phải:

```text
reproduce
→ snapshot
→ compare
→ retaining path
→ root cause
→ cleanup
→ verify
```

Chrome DevTools hỗ trợ comparison giữa heap snapshots để xác nhận memory leak và lần theo retained references. ([Chrome for Developers][1])

---

# Incident 2 — INP Regression

Scenario:

```text
Click Filter
→ 800ms lag
```

Phải xác định:

```text
input delay
event handler
render
layout
paint
```

Không được chỉ tăng debounce.

---

# Incident 3 — LCP Regression

Trước:

```text
2.2s
```

Sau deployment:

```text
3.8s
```

Điều tra:

```text
TTFB
HTML
CSS
font
image
JS
render delay
```

---

# Incident 4 — CLS

Page layout nhảy khi:

```text
font loads
image loads
banner appears
```

Phải xác định root causes.

---

# Incident 5 — XSS

Một search result render:

```text
<span>{userInput}</span>
```

thay bằng unsafe HTML path.

Phải:

```text
identify sink
→ identify taint source
→ reproduce safely
→ sanitize / remove sink
→ harden CSP/Trusted Types where appropriate
```

---

# Incident 6 — CSRF

Một endpoint mutation sử dụng cookie credentials.

Attacker-controlled page trigger request.

Phân tích:

```text
credential
+
cross-site request
+
server validation
```

---

# Incident 7 — Bundle Explosion

Một PR thêm editor library:

```text
+700 KB transfer
+1.2 MB parsed JS
```

Phải quyết định:

```text
replace?
lazy load?
split?
subset?
accept?
```

---

# Incident 8 — CPU Spike

Một feature làm:

```text
CPU 25%
→ 90%
```

Điều tra:

```text
JS loop
render loop
observer
event listener
worker
```

---

# 11. INTEGRATION LAB — STAGE 11

# Project 11 — Performance & Security Lab

Không xây application hoàn toàn mới.

Lấy Project 10 và tạo **version cố tình bị lỗi**.

---

## Performance faults

Phải inject:

```text
memory leak
long task
unnecessary render
layout thrashing
large bundle
large images
font blocking
slow API
```

---

## Security faults

Phải inject trong môi trường local/test:

```text
unsafe HTML rendering
weak authorization
CSRF-prone mutation
open redirect
unsafe postMessage handling
dependency vulnerability
exposed client secret
```

---

## Deliverable

Mỗi incident phải có:

```text
Incident
├── Symptom
├── Impact
├── Reproduction
├── Measurement
├── Root Cause
├── Fix
├── Verification
└── Prevention
```

Đây là lần đầu curriculum yêu cầu **postmortem kỹ thuật hoàn chỉnh**.

---

# 12. EDGE CASE LAB

## Performance

### Case A

Một component render 1000 items.

Không được ngay lập tức dùng virtualization.

Trước tiên xác định:

```text
Is 1000 actually the bottleneck?
```

---

### Case B

`useMemo` làm code phức tạp hơn nhưng performance không cải thiện.

Quyết định remove hay giữ.

---

### Case C

GC chạy thường xuyên.

Không được kết luận ngay:

> “GC là bug.”

Phải xác định allocation pressure trước.

---

### Case D

Heap tăng trong DevTools nhưng sau GC giảm xuống.

Phân biệt:

```text
normal allocation
vs
retained leak
```

---

## Security

### Case E

API trả HTML cần render.

So sánh:

```text
plain text
sanitization
Trusted Types
CSP
```

---

### Case F

JWT được lưu client-side.

Phân tích threat model thay vì tuyên bố ngay “đúng/sai”.

---

### Case G

CORS policy:

```text
Access-Control-Allow-Origin: *
```

kết hợp credentials.

Phân tích vì sao không phù hợp.

---

### Case H

User chỉ thấy button Delete khi có quyền.

Nhưng API không check authorization.

Phân tích.

---

# 13. RE-IMPLEMENTATION LAB

## 13.1 — Simple LRU Cache

```text
get
set
evict
```

Mục tiêu:

> hiểu memory-bounded cache.

---

## 13.2 — Performance Markers

Dùng:

```js
performance.mark()
performance.measure()
```

để tạo custom measurement.

---

## 13.3 — Leak Detector Demo

Tạo component lifecycle:

```text
mount
→ subscribe
→ unmount
```

và intentional leak.

Sau đó chứng minh bằng heap snapshot.

---

## 13.4 — Safe HTML Boundary

Thiết kế abstraction:

```text
raw HTML
→ sanitizer / trusted path
→ render
```

Mục tiêu:

> tạo security boundary rõ ràng.

---

# 14. DEBUG WORKFLOW — STAGE 11

Từ Stage này trở đi, workflow chính thức trở thành:

```text
┌──────────────────┐
│      REPORT      │
│ "App is slow"    │
└────────┬─────────┘
         ↓
┌──────────────────┐
│     MEASURE      │
│ Metric / Trace   │
└────────┬─────────┘
         ↓
┌──────────────────┐
│     ISOLATE      │
│ Layer / Feature  │
└────────┬─────────┘
         ↓
┌──────────────────┐
│    HYPOTHESIS    │
└────────┬─────────┘
         ↓
┌──────────────────┐
│      VERIFY      │
│ Profile / Test   │
└────────┬─────────┘
         ↓
┌──────────────────┐
│       FIX        │
└────────┬─────────┘
         ↓
┌──────────────────┐
│  MEASURE AGAIN   │
└────────┬─────────┘
         ↓
┌──────────────────┐
│    PREVENTION    │
└──────────────────┘
```

Security cũng dùng cùng tư duy:

```text
Asset
→ Threat
→ Attack surface
→ Boundary
→ Exploitability
→ Mitigation
→ Verification
```

---

# 15. SOURCE & DOCUMENTATION

Primary sources:

* MDN Memory Management
* Chrome DevTools Performance
* Chrome DevTools Memory
* web.dev Core Web Vitals
* web.dev performance guides
* OWASP Cheat Sheet Series
* browser security documentation

Chrome DevTools hiện có Performance và Memory tooling riêng cho runtime/per-memory investigation; Performance Monitor có thể theo dõi CPU, JS heap, DOM nodes, listeners, frames và layout/style calculations. ([Chrome for Developers][4])

OWASP Cheat Sheet Series nên được dùng làm security reference vì nó bao phủ trực tiếp các chủ đề như CSP, XSS, WebSocket Security, vulnerable dependencies, authentication/authorization và nhiều web security domains khác. ([OWASP Cheat Sheet Series][13])

---

# 16. TEACH-BACK

### Level 1

> Garbage Collector làm gì?

### Level 2

> Memory leak khác high memory usage thế nào?

### Level 3

> Một interaction chậm có thể chậm ở những layer nào?

### Level 4

> Tại sao LCP chậm dù image đã được compress?

### Level 5

> Tại sao CSP, sanitization và Trusted Types giải quyết những phần khác nhau của XSS defense?

### Level 6

> Khi performance và business deadline xung đột, quyết định tối ưu nào đáng làm trước?

---

# 17. EXIT CRITERIA — STAGE 11

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

# 18. STAGE 11 CHECKPOINT

## Part A — Performance Diagnosis

App report:

```text
INP = 780ms
```

Người học phải xác định:

```text
input delay?
handler?
render?
layout?
paint?
```

---

## Part B — LCP Diagnosis

```text
LCP = 4.2s
TTFB = 2.1s
```

Không được ngay lập tức tối ưu image.

Phải xác định bottleneck ở server/network trước.

---

## Part C — Memory Diagnosis

Sau 20 lần navigation:

```text
Heap
100MB → 850MB
```

Phải:

```text
snapshot
→ compare
→ retaining path
→ identify leak
→ fix
→ verify
```

---

## Part D — Security Review

Review một feature có:

```text
HTML rendering
authentication
cookie
mutation
redirect
third-party script
```

Tìm ít nhất 5 security risks và ưu tiên chúng.

---

## Part E — Architecture Judgment

Business yêu cầu:

> “Trang phải nhanh hơn 20%, deadline 2 tuần.”

Có 12 potential optimizations.

Người học phải chọn top 3 dựa trên:

```text
impact
confidence
effort
risk
```

---

# 19. STAGE 11 CAPSTONE

# Performance & Security War Room

Một production-like application được cung cấp.

Ban đầu có:

```text
LCP: poor
INP: poor
CLS: poor
memory leak
bundle regression
XSS vulnerability
weak authorization
retry storm
```

Người học không được biết trước root causes.

Phải vận hành như incident thật:

```text
Detect
 ↓
Triage
 ↓
Measure
 ↓
Prioritize
 ↓
Investigate
 ↓
Mitigate
 ↓
Fix
 ↓
Verify
 ↓
Prevent recurrence
```

Deliverables:

```text
1. Performance audit
2. Security audit
3. Incident timeline
4. Root cause report
5. Before/after measurements
6. Security remediation plan
7. Performance budget
8. Prevention plan
```

---

# 20. STAGE 11 → STAGE 12 DEPENDENCY

Sau Stage 11, người học đã có khả năng:

```text
BUILD
+
OPERATE
+
MEASURE
+
DEBUG
+
SECURE
+
OPTIMIZE
```

Nhưng application hiện tại vẫn có một vấn đề:

> **Một developer có thể xây một feature tốt không có nghĩa codebase sẽ tiếp tục tốt khi có 10–30 developers cùng thay đổi nó.**

Đó là Stage 12:

# FRONTEND ARCHITECTURE

Stage 12 sẽ chuyển từ:

```text
Component Architecture
```

sang:

```text
Application Architecture
```

và từ:

```text
“How should I implement this feature?”
```

sang:

```text
“How should this codebase evolve?”
```

Các chủ đề chính:

```text
Boundaries
Coupling
Cohesion
Modules
Dependencies
Feature architecture
State architecture
Monorepo
Design systems
Micro-frontends
BFF
Architecture decisions
Migration
```

Đây là nơi người học bắt đầu bước thật sự vào **Senior engineering territory**.

---

# 21. STAGE 11 CORE PRINCIPLE

Junior thường nói:

> “App chậm.”

Senior phải nói:

```text
LCP is high because TTFB is high.

INP is high because this interaction
blocks the main thread with a 600ms task.

Memory grows because this subscription
retains the component tree after unmount.

The XSS exists because untrusted HTML
crosses a dangerous DOM sink without a
trusted/sanitized boundary.
```

Đó chính là khác biệt.

> **Performance và Security không phải danh sách tricks. Chúng là năng lực điều tra hệ thống.**

Và từ Stage 11 trở đi, tiêu chuẩn của curriculum thay đổi rõ rệt:

```text
Before:
Understand → Implement

Now:
Observe → Measure → Hypothesize → Verify → Decide
```

Người học đã bắt đầu hành xử như **Senior Engineer**, không còn chỉ là một developer biết nhiều công nghệ.

[1]: https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots?hl=en&utm_source=chatgpt.com "Record heap snapshots  |  Chrome DevTools  |  Chrome for Developers"
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Memory_management?utm_source=chatgpt.com "Memory management - JavaScript | MDN"
[3]: https://web.dev/articles/vitals?hl=en&utm_source=chatgpt.com "Web Vitals  |  Articles  |  web.dev"
[4]: https://developer.chrome.com/docs/devtools/performance-monitor?utm_source=chatgpt.com "Performance monitor panel  |  Chrome DevTools  |  Chrome for Developers"
[5]: https://developer.chrome.com/docs/devtools/memory-problems?utm_source=chatgpt.com "Fix memory problems  |  Chrome DevTools  |  Chrome for Developers"
[6]: https://web.dev/articles/inp?authuser=6&utm_source=chatgpt.com "Interaction to Next Paint (INP)  |  web.dev"
[7]: https://web.dev/baseline/2026?utm_source=chatgpt.com "Baseline 2026  |  web.dev"
[8]: https://web.dev/articles/vitals-tools?utm_source=chatgpt.com "Core Web Vitals workflows with Google tools  |  Articles  |  web.dev"
[9]: https://web.dev/articles/lcp?hl=en&utm_source=chatgpt.com "Largest Contentful Paint (LCP)  |  Articles  |  web.dev"
[10]: https://web.dev/articles/optimize-inp?hl=en&utm_source=chatgpt.com "Optimize Interaction to Next Paint  |  web.dev"
[11]: https://web.dev/articles/optimize-cls?hl=en&utm_source=chatgpt.com "Optimize Cumulative Layout Shift  |  Articles  |  web.dev"
[12]: https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html?utm_source=chatgpt.com "Content Security Policy - OWASP Cheat Sheet Series"
[13]: https://cheatsheetseries.owasp.org/?utm_source=chatgpt.com "Introduction - OWASP Cheat Sheet Series"

