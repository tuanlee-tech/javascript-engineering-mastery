# JAVASCRIPT ENGINEERING MASTERY

## STAGE 10 — NEXT.JS & FULL-STACK FRONTEND

### Detailed Curriculum v1

---

# 0. Stage Overview

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

# 1. Mental Model Toàn Stage

Người học phải đi từ:

```text
Traditional SPA

Browser
  ↓
React
  ↓
fetch API
  ↓
Backend
```

đến:

```text
Full-stack React

Request
  ↓
Next.js routing
  ↓
Server rendering
  ↓
Server Components
  ↓
Data layer
  ↓
Cache
  ↓
HTML / RSC payload
  ↓
Client Components
  ↓
Hydration / Interactivity
```

Và với mutation:

```text
User interaction
      ↓
Client Component / Form
      ↓
Server Function
      ↓
Validation
      ↓
Mutation
      ↓
Cache invalidation / refresh
      ↓
Updated UI
```

React hiện gọi abstraction `"use server"` là **Server Functions**; Server Actions là trường hợp Server Function được dùng trong action context. Đây là distinction curriculum cần giữ rõ, thay vì gọi mọi thứ là “Server Action”. ([React][2])

---

# 2. Phạm vi kiến thức

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

# 3. MODULE 10.1 — NEXT.JS MENTAL MODEL

## Mục tiêu

Hiểu Next.js giải quyết những vấn đề nào mà React alone không giải quyết.

---

## Lesson 10.1.1 — React vs Next.js

So sánh:

```text
React
→ UI library

Next.js
→ application framework
```

Next.js thêm các capability:

* routing
* server rendering
* server/client boundaries
* data fetching architecture
* caching
* metadata
* image/font optimization
* deployment integration

Next.js official documentation hiện mô tả chính nó là React framework cho full-stack web applications. ([Next.js][1])

---

## Lesson 10.1.2 — Framework vs Library

Phân biệt:

```text
Library
→ application controls flow

Framework
→ framework controls lifecycle / boundaries
```

Đây là một khái niệm quan trọng cho Architecture sau này.

---

## Lesson 10.1.3 — The Application Server

Browser không phải nơi duy nhất code React chạy.

Mental model:

```text
Browser
    +
Next.js Server Runtime
    +
Build System
```

---

## Lesson 10.1.4 — Request Lifecycle

Một request:

```text
User
 ↓
DNS / Network
 ↓
Next.js
 ↓
Route
 ↓
Render / Data
 ↓
Response
 ↓
Browser
```

Nối Stage 5 Network với Stage 8 React.

---

## Lesson 10.1.5 — App Router vs Pages Router

Người học phải hiểu:

* Pages Router là architecture cũ nhưng vẫn được hỗ trợ.
* App Router là architecture hiện đại của Next.js và được thiết kế quanh các React features mới như Server Components. ([Next.js][1])

Không cần học Pages Router như một track ngang bằng.

Chỉ học đủ để:

* maintain legacy systems
* migrate
* debug

---

# 4. MODULE 10.2 — APP ROUTER & ROUTING ARCHITECTURE

## Mục tiêu

Hiểu routing như một application architecture, không phải chỉ là URL mapping.

---

## Lesson 10.2.1 — File-system Routing

Mental model:

```text
app/
├── page
├── layout
├── loading
├── error
└── not-found
```

---

## Lesson 10.2.2 — Route Segments

* static segment
* dynamic segment
* catch-all
* optional catch-all

---

## Lesson 10.2.3 — Nested Layouts

Ví dụ:

```text
Root Layout
    ↓
Dashboard Layout
    ↓
Project Layout
    ↓
Page
```

Hiểu:

> Layout có lifecycle và ownership khác page.

---

## Lesson 10.2.4 — Dynamic Routes

Ví dụ:

```text
/products/[id]
```

Phải kết nối:

```text
URL
→ params
→ data
→ rendering
```

---

## Lesson 10.2.5 — Search Params

Dùng URL như một phần state:

```text
/search?q=react&page=2
```

Phân biệt:

```text
URL state
vs
local UI state
vs
server state
```

Next.js official learning material cũng dùng URL search params cho search và pagination. ([Next.js][3])

---

## Lesson 10.2.6 — Layout State Preservation

Hiểu tại sao navigation có thể giữ một số layout state thay vì reload toàn bộ document.

---

## Lesson 10.2.7 — Loading UI

* loading boundary
* partial loading
* Suspense relationship

---

## Lesson 10.2.8 — Error UI

* segment error boundary
* `not-found`
* recovery

---

## Lesson 10.2.9 — Navigation & Prefetching

Hiểu:

```text
<Link>
→ client navigation
→ prefetch where appropriate
→ route transition
```

Next.js hiện tự động code-split theo route segments và trong production có thể prefetch các route được link xuất hiện trong viewport. ([Next.js][4])

---

# 5. MODULE 10.3 — SERVER / CLIENT BOUNDARY

## Mục tiêu

Đây là **core mental model quan trọng nhất của Next.js App Router**.

---

## Lesson 10.3.1 — Server Component

Server Component là component được render trong một environment tách khỏi client application/SSR server và **không được gửi nguyên component code xuống browser**. ([React][5])

Phải hiểu:

```text
Server Component
→ can access server-side resources
→ doesn't need client JS for its own interactivity
```

---

## Lesson 10.3.2 — Client Component

Client Component cần khi component sử dụng những capability client-side như:

* state
* event handlers
* browser APIs
* interactive hooks

---

## Lesson 10.3.3 — `"use client"`

Phải hiểu:

> `"use client"` tạo một boundary, không chỉ là “cho component chạy trên browser”.

Boundary này ảnh hưởng:

* module graph
* bundle
* serialization
* architecture

React hiện mô tả `"use client"` là directive đánh dấu code chạy phía client trong RSC architecture. ([React][6])

---

## Lesson 10.3.4 — `"use server"`

Phân biệt với Server Component.

```text
"use client"
→ client boundary

"use server"
→ server-callable function boundary
```

React docs hiện gọi `"use server"` là cách đánh dấu Server Functions. ([React][2])

---

## Lesson 10.3.5 — Serialization Boundary

Không phải mọi JavaScript value đều có thể đi qua server/client boundary.

Phải hiểu:

```text
Server
 ↓
Serialized representation
 ↓
Client
```

---

## Lesson 10.3.6 — Props Across the Boundary

Thiết kế:

```text
Server Component
        ↓
Client Component
```

với data serializable.

---

## Lesson 10.3.7 — Composition Pattern

Pattern quan trọng:

```text
Server Component
   ↓
Client Component
   ↓
children from Server
```

Mục tiêu:

> giữ client boundary nhỏ nhất có thể.

---

## Lesson 10.3.8 — Client Boundary Cost

Phân tích:

```text
"use client" ở root
```

vs

```text
"use client" ở leaf
```

Ảnh hưởng:

* client JavaScript
* bundle
* hydration/interactivity boundary
* architecture

---

# 6. MODULE 10.4 — RENDERING MODELS

## Mục tiêu

Không còn tư duy:

> Next.js = SSR.

Next.js có nhiều rendering strategies và combination.

---

## Lesson 10.4.1 — CSR

```text
Browser
→ JS
→ fetch
→ render
```

Nhắc lại từ Stage 8.

---

## Lesson 10.4.2 — SSR

```text
Request
→ Server renders
→ HTML
→ Browser
```

Hiểu SSR giải quyết:

* initial content
* SEO
* perceived loading

nhưng không tự động giải quyết mọi performance problem.

---

## Lesson 10.4.3 — Static Rendering

Static rendering có thể render tại build hoặc khi revalidating; cached result sau đó có thể phục vụ nhiều requests. ([Next.js][7])

---

## Lesson 10.4.4 — Dynamic Rendering

Khi content phụ thuộc request/user/runtime state.

Phải biết:

```text
static
vs
dynamic
```

là architecture decision.

---

## Lesson 10.4.5 — Streaming

Mental model:

```text
Request
 ↓
Server starts rendering
 ↓
Critical UI
 ↓
stream
 ↓
secondary UI
 ↓
stream
```

---

## Lesson 10.4.6 — Suspense + Streaming

Kết nối React Stage 8.

```text
Suspense boundary
        ↓
server can stream ready portions
```

React hiện hỗ trợ async Server Components và streaming qua Suspense; một phần dữ liệu có thể được giữ dưới dạng Promise và được consume sau bằng `use`. ([React][5])

---

## Lesson 10.4.7 — Hydration

Phải hiểu:

```text
Server HTML
 ↓
Browser receives markup
 ↓
React attaches interactivity
```

Và vì sao hydration mismatch xảy ra.

---

## Lesson 10.4.8 — Hydration Failure

Các nguyên nhân:

```text
Date/time
Randomness
Browser-only API
Different server/client state
Non-deterministic rendering
```

---

## Lesson 10.4.9 — Rendering Decision

Cho một page:

```text
Public product page
Private dashboard
Realtime admin screen
Marketing page
```

chọn:

```text
CSR
SSR
Static
Dynamic
Streaming
```

và giải thích.

---

# 7. MODULE 10.5 — DATA FETCHING & STREAMING

## Mục tiêu

Học data fetching ở **đúng nơi**.

---

## Lesson 10.5.1 — Client-side Fetching

Khi appropriate:

```text
interactive / user-specific / frequently changing client state
```

---

## Lesson 10.5.2 — Server-side Fetching

Server Components có thể fetch data trong server environment, tránh việc mọi data phải đi qua client-side effect. React docs mô tả Server Components có thể truy cập data layer và render trước khi client bundle được tạo. ([React][5])

---

## Lesson 10.5.3 — Data Colocation

Thay vì:

```text
page
 ↓
API client
 ↓
deep component
```

có thể colocate data requirement gần component cần nó khi architecture cho phép.

---

## Lesson 10.5.4 — Request Waterfalls

Scenario:

```text
A
 ↓
B
 ↓
C
```

Tìm cách:

```text
parallelize
prefetch
co-locate
stream
```

Next.js documentation hiện nhấn mạnh tránh unintended waterfalls và dùng server-side fetching/streaming để cải thiện data delivery. ([Next.js][7])

---

## Lesson 10.5.5 — Parallel Data Fetching

```text
A ─┐
B ─┼→ render
C ─┘
```

---

## Lesson 10.5.6 — Sequential Data Fetching

Chỉ dùng khi:

```text
B genuinely depends on A
```

---

## Lesson 10.5.7 — Streaming Data

Chọn:

```text
critical data
vs
secondary data
```

Ví dụ:

```text
product details
      ↓
render immediately

reviews
      ↓
stream later
```

---

## Lesson 10.5.8 — Client vs Server Data Library

Không phải mọi data fetching đều chuyển sang Server Components.

So sánh:

```text
Server Component fetching
vs
TanStack Query
vs
client fetch
```

theo:

* freshness
* interactivity
* caching
* ownership
* client lifecycle

---

# 8. MODULE 10.6 — CACHING & REVALIDATION

## Mục tiêu

Đây là phần phải học sâu nhất của Next.js vì caching là nơi framework abstraction dễ tạo bug nhất.

---

## Lesson 10.6.1 — Why Framework Caching Exists

Các mục tiêu:

```text
latency
server work
network round trips
navigation speed
```

---

## Lesson 10.6.2 — Cache Layers

Không học thuộc một diagram cố định của một version.

Thay vào đó xác định:

```text
Request/Data cache
Server/render cache
Client/router cache
CDN/cache
```

và luôn hỏi:

> **Cache nào đang giữ dữ liệu này?**

Next.js có client-side Router Cache và dùng prefetching để làm navigation nhanh hơn; official learning material minh họa việc revalidate route sau mutation. ([Next.js][8])

---

## Lesson 10.6.3 — Freshness

Phân biệt:

```text
fresh
stale
revalidated
invalidated
```

---

## Lesson 10.6.4 — Revalidation

Concept:

```text
cache
 ↓
stale
 ↓
revalidate
 ↓
fresh
```

---

## Lesson 10.6.5 — Path-based Revalidation

Hiểu concept của:

```text
revalidatePath
```

và khi nào invalidate route/page data.

Next.js hiện sử dụng `revalidatePath` trong các mutation workflows để làm mới dữ liệu associated với route. ([Next.js][8])

---

## Lesson 10.6.6 — Tag-based Invalidation

Hiểu concept:

```text
data tag
 ↓
mutation
 ↓
invalidate tag
 ↓
related consumers refresh
```

---

## Lesson 10.6.7 — Cache Components / Modern Next.js Caching

Next.js 16 đã đưa **Cache Components** và mô hình `"use cache"` vào hướng caching mới, cùng với các API như `updateTag()`, `refresh()` và cải tiến `revalidateTag()`. ([Next.js][9])

Curriculum phải học:

* caching as programming model
* static/dynamic boundary
* cache lifetime
* invalidation

chứ không cố học một API/version cụ thể như kiến thức vĩnh viễn.

---

## Lesson 10.6.8 — Cache Invalidation Bugs

Các lỗi:

```text
user updates data
→ UI still stale
```

Phải trace:

```text
mutation
→ data source
→ cache
→ invalidation
→ router/client
→ render
```

---

## Lesson 10.6.9 — Cache Decision Lab

Scenario:

```text
product price
user profile
blog article
analytics dashboard
notifications
```

Chọn:

```text
cache
TTL
revalidation
dynamic
no-store/no-cache equivalent strategy
```

---

# 9. MODULE 10.7 — SERVER FUNCTIONS & MUTATIONS

## Mục tiêu

Hiểu mutation trong full-stack React architecture.

---

## Lesson 10.7.1 — Server Function Mental Model

```text
Client
 ↓
call function reference
 ↓
network request
 ↓
server executes
 ↓
serialized result
 ↓
client
```

React docs xác nhận Server Functions được framework/bundler biến thành callable server references; việc gọi từ client dẫn đến network request tới server. ([React][2])

---

## Lesson 10.7.2 — Server Actions vs Server Functions

Phải phân biệt terminology:

```text
Server Function
→ general abstraction

Server Action
→ Server Function used in action context
```

Đây là nomenclature hiện tại của React docs. ([React][2])

---

## Lesson 10.7.3 — Form Actions

```tsx
<form action={createOrder}>
```

Hiểu progressive enhancement.

Next.js cũng tích hợp Server Actions/Functions sâu với forms và revalidation workflows. ([Next.js][8])

---

## Lesson 10.7.4 — Input Validation

Mọi Server Function input đều phải được coi là:

> untrusted.

Phải:

```text
receive
→ validate
→ authorize
→ mutate
```

React documentation cũng nhấn mạnh arguments của Server Functions phải được coi là untrusted input và mutation cần authorization. ([React][10])

---

## Lesson 10.7.5 — Authorization

Đừng nhầm:

```text
authentication
vs
authorization
```

Server Function không được tin client chỉ vì function được gọi từ UI.

---

## Lesson 10.7.6 — Mutation Lifecycle

```text
submit
 ↓
validate
 ↓
authorize
 ↓
mutate
 ↓
invalidate
 ↓
redirect / refresh
```

---

## Lesson 10.7.7 — Pending / Error State

Kết nối React 19:

* `useActionState`
* pending state
* result state

React hiện hỗ trợ `useActionState` cho trạng thái pending/kết quả của Server Function trong các action workflows. ([React][2])

---

## Lesson 10.7.8 — Optimistic Mutation

Kết nối Stage 3 + Stage 8:

```text
optimistic UI
→ server mutation
→ success
or
→ rollback
```

---

## Lesson 10.7.9 — Revalidation After Mutation

```text
mutation
 ↓
invalidate appropriate cache
 ↓
UI gets fresh state
```

---

## Lesson 10.7.10 — Security Lab

Các vấn đề:

```text
unauthorized mutation
over-posting
tampered input
privilege escalation
```

---

# 10. MODULE 10.8 — FULL-STACK APPLICATION ARCHITECTURE

## Mục tiêu

Đây là nơi Next.js trở thành **architecture exercise**, không còn là framework tutorial.

---

## Lesson 10.8.1 — Application Boundaries

Phân biệt:

```text
UI
Presentation
Domain
Data access
Infrastructure
```

---

## Lesson 10.8.2 — Server-only Code

Nhận biết code không được gửi xuống client:

```text
database
secret
private API credentials
filesystem
server-only SDK
```

---

## Lesson 10.8.3 — Client-only Code

Nhận biết:

```text
DOM
localStorage
navigator
interactive event
browser APIs
```

---

## Lesson 10.8.4 — BFF

Kết nối Stage 5:

```text
Browser
 ↓
Next.js BFF
 ↓
Backend services
```

Khi nào BFF đáng dùng:

* aggregate multiple APIs
* normalize backend contracts
* hide internal services
* server-side auth boundary

---

## Lesson 10.8.5 — Authentication Architecture

Phân biệt:

```text
session
cookie
token
OAuth
identity provider
```

Không biến NextAuth/Auth.js thành kiến thức core; framework/library có thể thay đổi.

---

## Lesson 10.8.6 — Authorization Architecture

* route protection
* server checks
* UI gating
* role/permission

Nguyên tắc:

> UI authorization là UX; server authorization là security boundary.

---

## Lesson 10.8.7 — Error Architecture

Thiết kế:

```text
route error
server error
not found
validation
auth
business
network
```

---

## Lesson 10.8.8 — Full-stack Folder Architecture

Không ép một folder structure duy nhất.

So sánh:

```text
route-oriented
feature-oriented
domain-oriented
vertical-slice
```

và chọn dựa trên project.

---

## Lesson 10.8.9 — Build vs Separate Backend

Không phải application nào cũng nên nhét backend vào Next.js.

Phân tích:

```text
Next.js full-stack
vs
Next.js + dedicated backend
vs
Next.js + BFF
```

---

# 11. INTEGRATION LAB — STAGE 10

# Project 10 — Full-stack SaaS Platform

Xây một SaaS application hoàn chỉnh với:

```text
Public Website
+
Authentication
+
Dashboard
+
Data CRUD
+
Search
+
Pagination
+
Realtime area
+
Admin area
```

---

## Requirement 1 — Routing

Có:

```text
/
 /pricing
 /login
 /dashboard
 /dashboard/projects
 /dashboard/projects/[id]
 /admin
```

---

## Requirement 2 — Rendering Strategy

Mỗi page phải được quyết định:

```text
Static?
Dynamic?
Server rendered?
Client interactive?
Streaming?
```

Không cho người học dùng một strategy cho toàn app.

---

## Requirement 3 — Server/Client Boundary

Có ít nhất:

```text
Server Components
+
Client Components
```

và phải justify từng boundary quan trọng.

---

## Requirement 4 — Data Fetching

Có:

```text
server-side fetching
client-side interaction
parallel requests
streaming secondary content
```

---

## Requirement 5 — Cache

Có:

```text
cached public data
dynamic user data
mutation invalidation
```

---

## Requirement 6 — Mutation

Có:

```text
create
update
delete
```

thông qua Server Functions/Actions phù hợp với architecture.

---

## Requirement 7 — Validation

```text
FormData / Request
 ↓
Zod
 ↓
Authorization
 ↓
Mutation
```

---

## Requirement 8 — Optimistic UI

Ví dụ:

```text
task status update
```

UI update trước rồi rollback nếu server fail.

---

## Requirement 9 — Error Handling

Có:

```text
not found
route error
validation error
authorization error
server error
```

---

# 12. EDGE CASE LAB

## Case 1 — Hydration Mismatch

Server:

```text
12:00
```

Client:

```text
12:01
```

Tìm root cause.

---

## Case 2 — `"use client"` Too High

Developer đặt:

```text
"use client"
```

ở root layout.

Phân tích:

* client bundle
* architecture boundary
* unnecessary client code

---

## Case 3 — Server Component Uses Browser API

```js
localStorage.getItem(...)
```

Tại sao fail?

Thiết kế lại boundary.

---

## Case 4 — Client Component Imports Server-only Module

Component vô tình kéo server-only dependency vào client boundary.

Tìm và sửa.

---

## Case 5 — Serialization Failure

Server truyền value không phù hợp qua boundary.

Xác định:

```text
server object
→ serialization
→ client
```

---

## Case 6 — Waterfall

```text
Page
→ User
→ Organization
→ Permissions
→ Data
```

Tối ưu dependency graph.

---

## Case 7 — Stale Cache After Mutation

Mutation thành công nhưng UI vẫn hiển thị old data.

Trace:

```text
mutation
→ data
→ cache
→ invalidation
→ client/router
```

---

## Case 8 — Unauthorized Server Function

User sửa request payload để thao tác resource không thuộc quyền.

Tại sao UI validation không đủ?

Fix server-side authorization.

---

## Case 9 — Overuse of Server Functions

Developer dùng Server Function cho mọi client state update.

Phân tích latency/network/architecture cost.

---

## Case 10 — Overuse of Client Components

Toàn bộ dashboard được đánh dấu client.

Tìm phần nào có thể trở thành Server Components.

---

# 13. RE-IMPLEMENTATION LAB

## 13.1 — Mini Router

Không cần clone Next.js.

Mô phỏng:

```text
path
→ route match
→ params
→ component
```

Mục tiêu hiểu routing abstraction.

---

## 13.2 — Mini Cache

Tự xây:

```text
get
set
invalidatePath
invalidateTag
```

---

## 13.3 — Server Function Simulation

Mô phỏng:

```text
client function reference
→ serialized request
→ server function
→ serialized response
```

---

## 13.4 — Data Fetch Boundary

Tách một feature thành:

```text
server data access
+
client interaction
```

không dùng một client component khổng lồ.

---

# 14. DEBUG LAB

## Bug 1 — Hydration Error

Workflow:

```text
Reproduce
→ inspect server HTML
→ inspect client render
→ find nondeterministic value
→ fix
```

---

## Bug 2 — Unexpected Client Bundle Growth

Điều tra:

```text
"use client"
→ dependency graph
→ large package
→ bundle
```

---

## Bug 3 — Slow Initial Page

Phân tích:

```text
DNS/network
server render
data waterfall
TTFB
streaming
client JS
hydration
```

Không mặc định blame React.

---

## Bug 4 — Cache Inconsistency

User update thành công nhưng page A và B hiển thị dữ liệu khác nhau.

Xác định cache layers.

---

## Bug 5 — Server Function Security

Mutation có thể được gọi với ID của user khác.

Phải trace:

```text
input
→ validation
→ authentication
→ authorization
→ mutation
```

---

# 15. DESIGN LAB

## Scenario 1 — Product Detail

Public product page có:

```text
product
reviews
recommendations
```

Quyết định:

```text
server/client
static/dynamic
cache
streaming
```

---

## Scenario 2 — Private Dashboard

Có:

```text
user
metrics
notifications
interactive filters
```

Thiết kế:

```text
Server Components
+
Client Components
+
server state
+
URL state
```

---

## Scenario 3 — Checkout

Quyết định:

```text
form boundary
Server Function
validation
authorization
optimistic UI
cache invalidation
```

---

## Scenario 4 — BFF

Backend có:

```text
Users API
Orders API
Payments API
Analytics API
```

Frontend cần một dashboard tổng hợp.

Đánh giá:

```text
browser calls 4 APIs
vs
Next.js BFF
```

---

## Scenario 5 — Full-stack vs Dedicated Backend

Company có:

```text
web
mobile
third-party integrations
```

Quyết định:

```text
Next.js backend
vs
dedicated API
vs
BFF
```

---

# 16. SOURCE & DOCUMENTATION

Primary references:

* Next.js official documentation
* Next.js App Router Foundations
* React Server Components documentation
* React Server Functions documentation
* Next.js caching/revalidation documentation

Các điểm version-specific phải được đối chiếu với docs hiện tại khi triển khai curriculum thực tế. Ví dụ, React hiện sử dụng terminology Server Functions/Server Actions khác nhau theo context, còn Next.js 16 đã có mô hình Cache Components và `"use cache"` mới. ([React][2])

---

# 17. TEACH-BACK

### Level 1

> Next.js giải quyết vấn đề gì mà React không giải quyết?

### Level 2

> Server Component và Client Component khác nhau ở đâu?

### Level 3

> `"use client"` thực sự tạo ra boundary gì?

### Level 4

> Khi nào data nên fetch trên server và khi nào nên fetch trên client?

### Level 5

> Khi mutation xảy ra, cache nào phải invalidate?

### Level 6

> Với một application có Web + Mobile + nhiều backend services, bạn chọn Next.js full-stack, BFF hay dedicated backend? Vì sao?

---

# 18. EXIT CRITERIA — STAGE 10

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

# 19. STAGE 10 CHECKPOINT

## Part A — Rendering Decision

Cho 5 screens:

```text
Landing
Product
Dashboard
Admin
Realtime Chat
```

Chọn:

```text
CSR
SSR
Static
Dynamic
Streaming
```

và bảo vệ quyết định.

---

## Part B — Boundary Design

Một page có:

```text
product information
interactive quantity selector
reviews
recommendations
```

Chia:

```text
Server Components
Client Components
```

và giải thích tại sao.

---

## Part C — Cache Debugging

Mutation:

```text
update product
```

nhưng:

```text
/product/1
/dashboard/products
/home
```

hiển thị dữ liệu khác nhau.

Trace cache architecture.

---

## Part D — Security

Một Server Function:

```text
deleteProject(projectId)
```

User gửi:

```text
projectId = anotherUserProject
```

Thiết kế validation + authorization.

---

## Part E — Architecture

Company có:

```text
Web
iOS
Android
Partner API
Admin Dashboard
```

Quyết định:

```text
Next.js full-stack?
BFF?
Dedicated backend?
```

Phải đưa ít nhất 2 alternatives và trade-off.

---

# 20. STAGE 10 CAPSTONE

# Full-stack SaaS Platform

Application:

```text
Public Website
     +
Authentication
     +
Dashboard
     +
CRUD
     +
Search
     +
Pagination
     +
Admin
     +
Realtime
```

Architecture:

```text
                    ┌──────────────┐
                    │   Browser    │
                    └──────┬───────┘
                           │
                    ┌──────▼───────┐
                    │    Next.js   │
                    │              │
                    │ Server       │
                    │ Components   │
                    │      +       │
                    │ Client       │
                    │ Components   │
                    └──────┬───────┘
                           │
                  ┌────────┼────────┐
                  ▼        ▼        ▼
                BFF       Auth     Cache
                  │
          ┌───────┼─────────┐
          ▼       ▼         ▼
        API A   API B     Data
```

Người học phải nộp:

```text
1. Architecture Diagram
2. Rendering Decision Matrix
3. Server/Client Boundary Map
4. Cache Strategy
5. Mutation Strategy
6. Authorization Model
7. ADR
8. Production Readiness Review
```

---

# 21. STAGE 10 → STAGE 11 DEPENDENCY

Sau Stage 10, người học đã có gần như toàn bộ stack để xây một frontend hiện đại:

```text
JavaScript
        ↓
Browser
        ↓
Network
        ↓
TypeScript
        ↓
Tooling
        ↓
React
        ↓
Production
        ↓
Next.js
```

Nhưng vẫn còn một câu hỏi lớn:

> **Ứng dụng này có thực sự nhanh, an toàn và hiệu quả ở quy mô production không?**

Đó là Stage 11:

```text
PERFORMANCE
+
MEMORY
+
SECURITY
```

Stage 11 sẽ đào sâu những thứ đã được giới thiệu từ Stage 0–10:

```text
V8
→ Memory
→ GC
→ JIT
→ Rendering
→ Core Web Vitals
→ Bundle
→ Network
→ Security
→ Profiling
```

Mục tiêu không còn là:

> “Biết tối ưu.”

mà là:

> **Có thể chứng minh một vấn đề performance/security tồn tại, tìm root cause bằng measurement và sửa đúng layer.**

---

# 22. STAGE 10 CORE PRINCIPLE

Junior thường hỏi:

> “Next.js có API nào để làm việc này?”

Frontend Engineer hỏi:

> “Feature này nên chạy ở server hay client?”

Senior hỏi thêm:

```text
Why this boundary?

What is the source of truth?

Where is the data fetched?

Where is it cached?

When does it become stale?

What crosses the network?

What is serialized?

What happens when authorization fails?

What happens when the mutation succeeds
but cache remains stale?

What happens when the deployment changes
while the user has an old client?
```

Đó mới là **Full-stack Frontend thinking**.

Next.js hiện đang tiếp tục phát triển khá nhanh, đặc biệt quanh caching và React integration; vì vậy curriculum phải cố định ở **mental models và architecture principles**, còn API cụ thể phải được cập nhật theo phiên bản khi khóa học được triển khai. ([Next.js][9])

[1]: https://nextjs.org/docs?utm_source=chatgpt.com "Next.js Docs | Next.js"
[2]: https://react.dev/reference/rsc/server-functions?utm_source=chatgpt.com "Server Functions – React"
[3]: https://nextjs.org/learn/dashboard-app?utm_source=chatgpt.com "App Router | Next.js"
[4]: https://nextjs.org/learn/dashboard-app/navigating-between-pages?utm_source=chatgpt.com "App Router: Navigating Between Pages | Next.js"
[5]: https://react.dev/reference/rsc/server-components?utm_source=chatgpt.com "Server Components – React"
[6]: https://react.dev/reference/rsc/directives?utm_source=chatgpt.com "Directives – React"
[7]: https://nextjs.org/learn/dashboard-app/static-and-dynamic-rendering?utm_source=chatgpt.com "App Router: Static and Dynamic Rendering | Next.js"
[8]: https://nextjs.org/learn/dashboard-app/mutating-data?utm_source=chatgpt.com "App Router: Mutating Data | Next.js"
[9]: https://nextjs.org/blog?utm_source=chatgpt.com "Next.js by Vercel - The React Framework | Next.js by Vercel - The React Framework"
[10]: https://react.dev/reference/rsc/use-server?utm_source=chatgpt.com "'use server' directive – React"

