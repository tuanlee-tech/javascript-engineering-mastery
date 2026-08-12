# JAVASCRIPT ENGINEERING MASTERY

## STAGE 9 — PRODUCTION FRONTEND

### Detailed Curriculum v1

---

# 0. Stage Overview

## Mục tiêu

Stage 8 đã giúp người học:

```text
JavaScript
→ Browser
→ Network
→ TypeScript
→ Tooling
→ React
```

Nhưng một React application chạy được **chưa đồng nghĩa với một production product**.

Stage 9 chuyển trọng tâm từ:

> **“Feature chạy đúng.”**

sang:

> **“Feature hoạt động tốt với user thật, thiết bị thật, network thật và failure thật.”**

Mental model:

```text
                    PRODUCTION FRONTEND

User
 │
 ├── Desktop
 ├── Mobile
 ├── Slow Network
 ├── Keyboard
 ├── Screen Reader
 ├── Old Device
 └── Unexpected Input
          │
          ▼
       Frontend
          │
 ┌────────┼────────┐
 ▼        ▼        ▼
UX      Quality   Reliability
 │        │        │
A11y    Testing   Error Handling
Mobile  E2E       Recovery
SEO     CI        Offline
Perf    Regression Production
```

Stage này là cầu nối trực tiếp từ:

```text
Frontend Engineer
        ↓
Production-capable Engineer
```

và chuẩn bị cho:

```text
Stage 10 — Next.js / Full-stack Frontend
Stage 11 — Performance / Security
Stage 12 — Architecture
Stage 13 — Production Engineering
```

---

# 1. Phạm vi kiến thức

Stage 9 gồm **8 Modules / 39 Lessons**:

```text
9.1 Accessibility Engineering
9.2 Form Engineering
9.3 Responsive & Mobile Engineering
9.4 SEO & Discoverability
9.5 Testing Strategy
9.6 PWA & Offline
9.7 Production Error Handling
9.8 Product Quality & Release Readiness
```

---

# 2. MODULE 9.1 — ACCESSIBILITY ENGINEERING

## Mục tiêu

Không xem accessibility là checklist cuối project.

Mục tiêu là:

> **Thiết kế UI mà nhiều nhóm user có thể sử dụng bằng nhiều phương thức tương tác khác nhau.**

---

## Lesson 9.1.1 — Accessibility Mental Model

Hiểu các nhóm:

```text
Visual
Auditory
Motor
Cognitive
Temporary limitation
Situational limitation
```

Accessibility không chỉ dành cho screen reader users.

---

## Lesson 9.1.2 — Semantic HTML

Phân biệt:

```html
<button>
<a>
<nav>
<main>
<section>
<form>
<label>
```

với:

```html
<div>
<span>
```

### Principle

> Chọn semantic element trước, ARIA sau.

---

## Lesson 9.1.3 — Heading Structure

* `h1 → h2 → h3`
* heading hierarchy
* landmarks

Không dùng heading chỉ để style.

---

## Lesson 9.1.4 — Forms & Labels

* `<label>`
* `htmlFor`
* accessible name
* description
* error message
* required state

---

## Lesson 9.1.5 — Keyboard Navigation

Phải hỗ trợ:

```text
Tab
Shift+Tab
Enter
Space
Arrow keys
Escape
```

tùy loại component.

---

## Lesson 9.1.6 — Focus Management

* focus order
* focus visible
* focus trap
* focus restoration

Đặc biệt:

```text
modal opens
→ move focus
→ user interacts
→ close
→ restore focus
```

---

## Lesson 9.1.7 — Screen Reader Mental Model

Hiểu:

> Screen reader không đọc DOM như developer nhìn DevTools.

Nó dựa trên accessibility tree / accessible semantics.

---

## Lesson 9.1.8 — ARIA

Học:

* role
* state
* property
* `aria-label`
* `aria-labelledby`
* `aria-describedby`
* `aria-expanded`
* `aria-live`

Nguyên tắc:

> **Không dùng ARIA để sửa một semantic HTML sai nếu native element đã giải quyết được problem.**

---

## Lesson 9.1.9 — Accessible Components

Xây:

* Button
* Input
* Checkbox
* Select
* Dialog
* Tabs
* Tooltip
* Menu

---

## Lesson 9.1.10 — Dynamic Content

* async loading
* validation error
* toast
* live region
* loading state

Phải đảm bảo user dùng assistive technology biết trạng thái đã thay đổi.

---

## Lesson 9.1.11 — Accessibility Testing

Công cụ:

* axe
* browser accessibility tree
* keyboard-only testing
* screen reader cơ bản

---

# 3. MODULE 9.2 — FORM ENGINEERING

## Mục tiêu

Form là một trong những nơi tập trung nhiều state, async và validation nhất.

---

## Lesson 9.2.1 — Form State

Phân biệt:

```text
value
dirty
touched
focused
valid
invalid
submitting
submitted
```

---

## Lesson 9.2.2 — Controlled vs Uncontrolled Forms

So sánh:

```text
controlled
vs
uncontrolled
```

theo:

* performance
* complexity
* control
* integration

---

## Lesson 9.2.3 — Validation Layers

```text
UI validation
     ↓
Schema validation
     ↓
Server validation
```

Không coi client validation là security mechanism.

---

## Lesson 9.2.4 — Synchronous Validation

* required
* format
* range
* cross-field validation

---

## Lesson 9.2.5 — Asynchronous Validation

Ví dụ:

```text
username
→ check availability
```

Phải xử lý:

* debounce
* cancellation
* stale response

Kết nối Stage 3.

---

## Lesson 9.2.6 — Field Arrays

Ví dụ:

```text
Order
├── Item 1
├── Item 2
└── Item 3
```

Xử lý add/remove/reorder.

---

## Lesson 9.2.7 — Multi-step Forms

* wizard
* progress
* preserve state
* validation boundary
* back/forward

---

## Lesson 9.2.8 — Autosave

Mental model:

```text
user change
→ debounce
→ persist
→ status
```

Phải xử lý:

* cancellation
* race
* retry
* offline

---

## Lesson 9.2.9 — Optimistic Form Submission

```text
submit
→ update UI
→ API
→ success
    or
→ rollback
```

---

## Lesson 9.2.10 — Form Libraries

### Công nghệ

* React Hook Form
* Zod

Mục tiêu:

> hiểu primitive trước khi phụ thuộc abstraction.

---

# 4. MODULE 9.3 — RESPONSIVE & MOBILE ENGINEERING

## Mục tiêu

Desktop browser không phải environment duy nhất.

---

## Lesson 9.3.1 — Responsive Mental Model

* viewport
* media queries
* fluid layout
* breakpoints

---

## Lesson 9.3.2 — Mobile-first Design

Không phải:

> desktop rồi thu nhỏ.

Mà thiết kế theo constraints của viewport nhỏ trước khi mở rộng.

---

## Lesson 9.3.3 — Responsive Images

* `srcset`
* `sizes`
* `<picture>`
* art direction

---

## Lesson 9.3.4 — Touch & Pointer

* touch
* pointer
* gesture
* hit target
* accidental activation

---

## Lesson 9.3.5 — Mobile Keyboard

Problem:

```text
input focus
→ virtual keyboard
→ viewport changes
→ layout shifts
```

Thiết kế form/mobile UI tránh jump.

---

## Lesson 9.3.6 — Safe Areas

Awareness:

```text
env(safe-area-inset-*)
```

cho notch/home indicator.

---

## Lesson 9.3.7 — Mobile Network

Xử lý:

```text
fast Wi-Fi
slow 4G
offline
intermittent connection
```

Không giả định connectivity ổn định.

---

## Lesson 9.3.8 — Mobile Performance

* large JS
* large images
* main-thread work
* unnecessary hydration
* expensive lists

Chi tiết profiling thuộc Stage 11.

---

# 5. MODULE 9.4 — SEO & DISCOVERABILITY

## Mục tiêu

Hiểu frontend có thể ảnh hưởng trực tiếp đến khả năng discover và rendering của search engines.

---

## Lesson 9.4.1 — Search Engine Mental Model

* crawl
* render
* index
* rank

Không đồng nhất SEO với metadata.

---

## Lesson 9.4.2 — Semantic Structure

Kết nối:

```text
semantic HTML
→ accessibility
→ crawlability
```

---

## Lesson 9.4.3 — Metadata

* title
* description
* canonical
* robots
* viewport

---

## Lesson 9.4.4 — Open Graph

* OG title
* OG description
* OG image
* social sharing

---

## Lesson 9.4.5 — Structured Data

* JSON-LD
* schema.org concept
* relevant entities

---

## Lesson 9.4.6 — Sitemap & Robots

* sitemap.xml
* robots.txt
* crawl controls

---

## Lesson 9.4.7 — URL Architecture

* stable URLs
* canonicalization
* pagination
* query parameters

---

## Lesson 9.4.8 — Dynamic SEO

Scenario:

```text
100,000 product pages
```

Phải thiết kế metadata từ data model thay vì hard-code.

---

# 6. MODULE 9.5 — TESTING STRATEGY

## Mục tiêu

Testing không phải:

> “Viết càng nhiều test càng tốt.”

Mục tiêu là:

> **Đặt đúng loại test ở đúng boundary.**

---

## Lesson 9.5.1 — Why Testing?

Phân biệt:

```text
confidence
vs
coverage
```

---

## Lesson 9.5.2 — Unit Test

Test:

* pure function
* utility
* state transition

---

## Lesson 9.5.3 — Component Test

Test behavior thay vì implementation details.

---

## Lesson 9.5.4 — Integration Test

Ví dụ:

```text
form
→ validation
→ API
→ UI
```

---

## Lesson 9.5.5 — E2E Test

Test critical user journeys.

Ví dụ:

```text
login
→ add product
→ checkout
→ success
```

---

## Lesson 9.5.6 — Test Pyramid / Test Distribution

Không phải tuyệt đối pyramid trong mọi project.

Mục tiêu:

> nhiều fast tests + ít expensive tests nhưng cover critical behavior.

---

## Lesson 9.5.7 — Mocking

Hiểu:

```text
mock
stub
spy
fake
```

và tác hại của mocking quá mức.

---

## Lesson 9.5.8 — MSW

Dùng network-level mocking thay vì mock mọi internal function.

---

## Lesson 9.5.9 — Playwright

* browser automation
* selectors
* assertions
* fixtures
* traces

---

## Lesson 9.5.10 — Flaky Tests

Tìm nguyên nhân:

```text
timing
network
shared state
randomness
environment
```

Không giải quyết bằng:

> tăng timeout cho tất cả.

---

## Lesson 9.5.11 — Visual Regression

Awareness:

* screenshot
* expected baseline
* unintended visual changes

---

## Lesson 9.5.12 — Accessibility Testing

Kết hợp:

* automated checks
* keyboard testing
* manual testing

---

# 7. MODULE 9.6 — PWA & OFFLINE

## Mục tiêu

Hiểu frontend application có thể tiếp tục hoạt động khi network không ổn định.

---

## Lesson 9.6.1 — Offline-first Mental Model

Không phải:

> “Có internet / không có internet.”

Mà:

```text
online
offline
degraded
stale
recovering
```

---

## Lesson 9.6.2 — Service Worker Lifecycle

* install
* activate
* fetch
* update

---

## Lesson 9.6.3 — Cache Strategies

Foundation:

```text
Cache First
Network First
Stale While Revalidate
Network Only
Cache Only
```

Không áp dụng máy móc.

---

## Lesson 9.6.4 — Offline Data

Phối hợp:

```text
IndexedDB
+
Cache Storage
+
application state
```

---

## Lesson 9.6.5 — Offline Cart

Thiết kế:

```text
add cart item
→ persist locally
→ reconnect
→ sync server
```

---

## Lesson 9.6.6 — Conflict

Server đã thay đổi trong khi client offline.

Phải nhận biết:

```text
last write wins
merge
conflict
manual resolution
```

Không cần học CRDT sâu ở đây.

---

## Lesson 9.6.7 — PWA Installability

Awareness:

* manifest
* icons
* service worker
* install criteria

---

# 8. MODULE 9.7 — PRODUCTION ERROR HANDLING

## Mục tiêu

Application phải biết **thất bại có kiểm soát**.

---

## Lesson 9.7.1 — Error Taxonomy

Phân biệt:

```text
programming error
network error
API error
validation error
auth error
permission error
business error
unknown error
```

---

## Lesson 9.7.2 — Error Boundary

Kết nối Stage 8.

Phải hiểu Error Boundary không bắt mọi loại error ở mọi context.

---

## Lesson 9.7.3 — Graceful Degradation

Ví dụ:

```text
recommendations fail
→ core product vẫn hoạt động
```

---

## Lesson 9.7.4 — Loading / Empty / Error

Mỗi async feature phải xem xét ít nhất:

```text
loading
success
empty
error
```

Và khi thích hợp:

```text
refreshing
stale
partial
offline
```

---

## Lesson 9.7.5 — Retry UX

Retry phải:

* understandable
* bounded
* cancellable

Không auto retry vô hạn.

---

## Lesson 9.7.6 — Recovery

Ví dụ:

```text
chunk load failure
→ retry
→ reload
→ fallback
```

---

## Lesson 9.7.7 — Error Reporting

Awareness:

* Sentry
* breadcrumbs
* context
* user/session context

Không gửi secrets/PII tùy tiện.

---

## Lesson 9.7.8 — User-safe Error Messages

Phân biệt:

```text
developer diagnostic
vs
user-facing message
```

---

# 9. MODULE 9.8 — PRODUCT QUALITY & RELEASE READINESS

## Mục tiêu

Trước khi release phải chứng minh product đạt baseline quality.

---

## Lesson 9.8.1 — Quality Gates

Checklist:

```text
typecheck
lint
unit
integration
E2E
a11y
build
performance
```

---

## Lesson 9.8.2 — Definition of Done

Feature chỉ được xem là done khi:

```text
functional
+
accessible
+
tested
+
observable
+
recoverable
```

tùy scope.

---

## Lesson 9.8.3 — Regression

* functional regression
* visual regression
* performance regression
* accessibility regression

---

## Lesson 9.8.4 — Release Checklist

* environment
* feature flags
* migration awareness
* rollback
* monitoring

Production deployment sâu thuộc Stage 13.

---

## Lesson 9.8.5 — Quality vs Speed

Một team có deadline.

Câu hỏi:

> Có thể bỏ test nào? Không thể bỏ test nào?

Đây là bước đầu của engineering judgment.

---

# 10. INTEGRATION LAB — STAGE 9

# Project 9 — Production E-commerce

Xây một e-commerce application hoàn chỉnh.

## Core Flow

```text
Landing
 ↓
Catalog
 ↓
Product
 ↓
Cart
 ↓
Checkout
 ↓
Order
```

---

## Requirement 1 — Accessibility

Phải đạt baseline WCAG AA.

Kiểm tra:

* keyboard
* focus
* semantics
* form labels
* error messages

---

## Requirement 2 — Form

Checkout:

```text
contact
address
shipping
payment
review
```

Có:

* schema validation
* async validation
* autosave
* optimistic interaction where appropriate

---

## Requirement 3 — Mobile

Phải hoạt động tốt trên:

```text
mobile
tablet
desktop
```

---

## Requirement 4 — SEO

Product pages có:

```text
dynamic title
description
canonical
structured data
OG image
```

---

## Requirement 5 — Testing

Critical flow:

```text
browse
→ add cart
→ checkout
→ order
```

phải có E2E.

---

## Requirement 6 — Offline

Cart phải survive:

```text
refresh
browser restart
temporary offline
```

---

## Requirement 7 — Error Handling

Phải có:

```text
network failure
payment failure
validation failure
expired auth
chunk load failure
```

---

# 11. EDGE CASE LAB

## Case 1 — Keyboard-only User

User không dùng mouse.

Find every inaccessible interaction.

---

## Case 2 — Modal Focus Trap

Modal mở nhưng focus vẫn nằm ngoài modal.

Fix.

---

## Case 3 — Async Validation Race

Username:

```text
a
ab
abc
```

Response `a` về sau `abc`.

Không được overwrite state.

---

## Case 4 — Double Submit

User click "Pay" hai lần.

Thiết kế UI + request protection.

---

## Case 5 — Offline Checkout

User mất network ngay khi submit.

Xác định:

```text
unknown result
vs
definitely failed
```

Không được gửi payment lại một cách mù quáng.

---

## Case 6 — Chunk Load Failure

New deployment làm browser giữ old app và chunk request fail.

Thiết kế recovery.

---

## Case 7 — Flaky E2E

Test checkout đôi khi fail.

Không được tăng timeout vô hạn.

Tìm root cause.

---

## Case 8 — Screen Reader Error

Form hiển thị error bằng màu đỏ nhưng screen reader không đọc được.

Fix semantics.

---

## Case 9 — SEO Regression

Một deployment vô tình thêm:

```html
<meta name="robots" content="noindex">
```

Xác định detection strategy.

---

# 12. RE-IMPLEMENTATION LAB

## 12.1 — Accessible Modal

Tự xây:

```text
open
close
focus trap
restore focus
Escape
```

---

## 12.2 — Form State Machine

Không dùng library.

Implement:

```text
idle
dirty
validating
invalid
submitting
success
error
```

---

## 12.3 — Offline Queue

Tự xây abstraction:

```text
enqueue
process
retry
remove
```

---

## 12.4 — Network Mock Layer

Tạo fake API có:

```text
200
400
401
403
409
429
500
timeout
offline
```

để test application behavior.

---

# 13. DEBUG LAB

## Bug 1 — Accessibility Regression

Một custom button không hoạt động bằng keyboard.

Tìm semantic/interaction issue.

---

## Bug 2 — Form State Corruption

Autosave response cũ overwrite dữ liệu mới.

Áp dụng Stage 3 race-condition knowledge.

---

## Bug 3 — Payment Duplicate

Hai request gửi cùng action.

Phân tích:

```text
UI
→ mutation
→ network
→ idempotency boundary
```

---

## Bug 4 — Offline State Bug

App hiển thị dữ liệu như authoritative dù đang offline.

Thiết kế state model rõ:

```text
fresh
stale
offline
syncing
```

---

## Bug 5 — Flaky Test

E2E fail ngẫu nhiên.

Tìm:

```text
race
selector
network
shared state
timing
```

---

# 14. DESIGN LAB

## Scenario 1 — Checkout

Thiết kế form state + validation architecture.

---

## Scenario 2 — Accessibility

Một modal component được dùng bởi 20 features.

Thiết kế API để tránh mỗi team tự implement focus management.

---

## Scenario 3 — Offline Cart

Chọn:

```text
localStorage
vs
IndexedDB
```

và giải thích.

---

## Scenario 4 — Testing Strategy

Feature có:

```text
complex calculation
form
API
critical payment flow
```

Quyết định test distribution.

---

## Scenario 5 — Quality Gate

Deadline còn 2 ngày.

Một critical flow chưa có E2E.

Một visual issue không ảnh hưởng functionality.

Quyết định:

```text
fix now
defer
release blocker
```

và bảo vệ decision.

---

# 15. SOURCE & DOCUMENTATION

Primary references:

* WCAG
* WAI-ARIA Authoring Practices
* MDN Accessibility
* React Testing Library
* Playwright
* MSW
* Service Worker documentation
* Web App Manifest
* Core Web Vitals / web.dev
* Search engine documentation cho structured data

Không học accessibility bằng checklist copy-paste.

Mục tiêu:

> hiểu semantics và interaction model.

---

# 16. TEACH-BACK

### Level 1

> Accessibility là gì?

### Level 2

> Vì sao semantic HTML quan trọng?

### Level 3

> Controlled và uncontrolled form khác nhau thế nào?

### Level 4

> Thiết kế offline feature như thế nào khi client không chắc server đã nhận operation?

### Level 5

> Với deadline gấp, bạn quyết định quality gate nào bắt buộc phải giữ?

---

# 17. EXIT CRITERIA — STAGE 9

## Accessibility

* [ ] Xây accessible form.
* [ ] Keyboard navigation hoạt động.
* [ ] Focus management đúng.
* [ ] Modal có focus trap + restoration.
* [ ] Screen reader semantics đúng ở mức practical.
* [ ] Dùng ARIA hợp lý.
* [ ] Pass automated a11y baseline.

## Forms

* [ ] Model form state.
* [ ] Controlled/uncontrolled trade-off.
* [ ] Schema validation.
* [ ] Async validation.
* [ ] Autosave.
* [ ] Multi-step form.
* [ ] Optimistic submission.

## Mobile

* [ ] Responsive layout.
* [ ] Touch/pointer handling.
* [ ] Mobile keyboard handling.
* [ ] Safe-area awareness.
* [ ] Network degradation handling.

## SEO

* [ ] Dynamic metadata.
* [ ] Canonical.
* [ ] Sitemap / robots.
* [ ] JSON-LD.
* [ ] Open Graph.
* [ ] SEO-safe routing.

## Testing

* [ ] Unit tests.
* [ ] Integration tests.
* [ ] E2E tests.
* [ ] Network mocking.
* [ ] Debug flaky test.
* [ ] Critical path coverage.

## PWA

* [ ] Service Worker lifecycle.
* [ ] Cache strategy.
* [ ] Offline data.
* [ ] Offline cart.
* [ ] Reconnect/sync awareness.

## Reliability

* [ ] Error taxonomy.
* [ ] Graceful degradation.
* [ ] Recovery strategy.
* [ ] User-safe errors.
* [ ] Error reporting.

## Release Quality

* [ ] Quality gates.
* [ ] Regression detection.
* [ ] Release checklist.
* [ ] Feature risk assessment.

---

# 18. STAGE 9 CHECKPOINT

## Part A — Accessibility Audit

Một page có:

```text
custom button
custom select
modal
form
toast
```

Người học phải audit bằng:

```text
keyboard
DevTools
axe
```

---

## Part B — Form Architecture

Thiết kế checkout state:

```text
contact
shipping
payment
submission
error
```

Không tạo impossible states.

---

## Part C — Testing Strategy

Cho một feature:

```text
pricing calculation
checkout form
payment API
```

Phân bổ:

```text
unit
integration
E2E
```

và giải thích.

---

## Part D — Offline

User đang checkout thì mất mạng.

Phân loại:

```text
known failure
unknown outcome
retryable
non-retryable
```

---

## Part E — Release Decision

Deployment có:

```text
0 functional blocker
2 a11y failures
1 visual regression
1 performance regression
```

Người học phải quyết định:

```text
release
block
partial rollout
feature flag
```

và giải thích trade-off.

---

# 19. STAGE 9 CAPSTONE

# Production E-commerce

Application phải đạt:

```text
React
+
TypeScript
+
API
+
Auth
+
Forms
+
Accessibility
+
Mobile
+
SEO
+
Testing
+
Offline
+
Error Recovery
```

Quality pipeline:

```text
Code
 ↓
Typecheck
 ↓
Lint
 ↓
Unit
 ↓
Integration
 ↓
E2E
 ↓
A11y
 ↓
Build
 ↓
Performance
 ↓
Release Decision
```

Người học phải viết một **Production Readiness Review**:

```text
Functional
Accessibility
Performance
Security
Testing
Reliability
SEO
Operational risks
Known debt
Release recommendation
```

---

# 20. STAGE 9 → STAGE 10 DEPENDENCY

Sau Stage 9, người học đã có:

```text
JavaScript
+
Browser
+
Network
+
TypeScript
+
Tooling
+
React
+
Production Engineering Foundation
```

Bây giờ mới đi vào:

# STAGE 10 — NEXT.JS & FULL-STACK FRONTEND

Vì lúc này người học đã đủ kiến thức để hiểu các câu hỏi thực sự của Next.js:

```text
Server hay Client?

CSR hay SSR?

Data fetch ở đâu?

Cache ở đâu?

Server Component có ý nghĩa gì?

Client boundary nằm ở đâu?

Khi nào streaming giúp ích?

BFF có giải quyết problem thật không?

Authentication boundary ở đâu?
```

Thay vì chỉ học:

```text
app/
page.tsx
layout.tsx
"use client"
```

---

# 21. STAGE 9 CORE PRINCIPLE

Junior thường nghĩ:

> “Feature chạy là xong.”

Frontend Engineer nghĩ:

```text
Feature
+
Accessibility
+
Mobile
+
Network failure
+
Testing
+
Recovery
```

Senior bắt đầu nghĩ thêm:

```text
How does this fail?

How will the user recover?

How will we detect the failure?

Can we safely release this?

What happens on a slow device?

What happens without a mouse?

What happens when the server gives unexpected data?

What happens when deployment introduces a regression?
```

Đó chính là **Production Mindset** — bước chuyển từ việc **viết frontend** sang **chịu trách nhiệm cho frontend**.

