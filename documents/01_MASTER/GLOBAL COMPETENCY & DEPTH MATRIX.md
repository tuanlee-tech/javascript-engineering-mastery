# JAVASCRIPT ENGINEERING MASTERY

## GLOBAL COMPETENCY & DEPTH MATRIX v1

Đây là **bản xương sống năng lực** của toàn bộ khóa học.

Từ đây trở đi, một kiến thức chỉ được đưa vào curriculum khi trả lời được:

```text
Học để làm gì?
Học sâu đến đâu?
Học lần đầu ở đâu?
Được spiral lại ở đâu?
Được kiểm chứng bằng project nào?
Được đánh giá bằng năng lực nào?
```

---

# 0. DEPTH MODEL

Trước tiên khóa độ sâu thành 8 level:

| Level | Tên       | Người học có thể                                       |
| ----- | --------- | ------------------------------------------------------ |
| L1    | Recognize | Biết khái niệm tồn tại                                 |
| L2    | Explain   | Giải thích mental model                                |
| L3    | Use       | Sử dụng đúng trong code                                |
| L4    | Debug     | Trace, profile, tìm root cause                         |
| L5    | Implement | Tự xây simplified implementation                       |
| L6    | Design    | Thiết kế solution mới                                  |
| L7    | Judge     | Chọn giữa alternatives và bảo vệ trade-off             |
| L8    | Leverage  | Dùng kiến thức để nâng năng lực người khác/team/system |

### Target theo career level

```text
Junior
→ L1–L3

Strong Junior
→ L2–L4

Mid
→ L3–L5

Senior
→ L4–L7

Staff-track
→ L6–L8
```

Không phải mọi competency đều cần L8.

---

# 1. COMPETENCY MAP TOÀN KHÓA

Curriculum chính thức gồm **14 competency domains**:

```text
C01 — JavaScript Language
C02 — JavaScript Runtime
C03 — Async & Concurrency
C04 — Browser / Web Platform
C05 — Network & Web Protocol
C06 — Type & Data Modeling
C07 — Toolchain & Developer Infrastructure
C08 — Frontend Application Engineering
C09 — Production Frontend
C10 — Performance / Memory / Security
C11 — Architecture
C12 — Production & Reliability
C13 — Engineering Judgment
C14 — Technical Leadership & Leverage
```

---

# 2. C01 — JAVASCRIPT LANGUAGE

## Mục tiêu cuối

Người học không chỉ viết syntax đúng mà hiểu semantics đủ sâu để dự đoán behavior.

### Competency breakdown

```text
C01.1 Values & Types
C01.2 Variables & Bindings
C01.3 Coercion & Equality
C01.4 Control Flow
C01.5 Functions
C01.6 Arrays / Objects
C01.7 Iteration
C01.8 Error Handling
C01.9 Modules
```

### Depth progression

| Topic                | First | Deep  | Spiral |
| -------------------- | ----- | ----- | ------ |
| Values / Types       | S0    | S0    | S6     |
| Binding / assignment | S0    | S1    | S6     |
| Coercion             | S0    | S0    | S14    |
| Functions            | S0    | S1    | S8     |
| Array/Object         | S0    | S0/S2 | S6/S8  |
| Iteration            | S0    | S2    | S7     |
| Errors               | S0    | S3    | S9/S13 |
| Modules              | S7    | S7    | S12    |

### Target

```text
Language Core → L5
```

### Assessment

```text
Predict
→ Implement
→ Debug
→ Explain
```

### Core Projects

```text
P0 CLI Data Processor
P2 Mini Object Runtime
P7 Build System
```

---

# 3. C02 — JAVASCRIPT RUNTIME

Đây là một trong những **Core L5 competencies**.

## Components

```text
C02.1 Execution Context
C02.2 Scope
C02.3 Lexical Environment
C02.4 Hoisting / TDZ
C02.5 Closure
C02.6 Call Stack
C02.7 Object Model
C02.8 this
C02.9 Prototype
C02.10 GC Mental Model
C02.11 JIT Awareness
```

### Progression

```text
S0
basic language

        ↓

S1
execution + scope + closure

        ↓

S2
object + prototype + this

        ↓

S8
hooks / rendering

        ↓

S11
memory / engine / GC

        ↓

S14
debugging / judgment
```

### Target

```text
Closure          → L7
Execution Model  → L6
Prototype        → L5
this             → L5
V8 internals     → L3/L4
Memory           → L6
```

### Assessment

```text
Prediction
Trace
Reimplementation
Debugging
Architecture review
```

### Critical rule

Closure phải được spiral:

```text
S1 → S3 → S8 → S11 → S14
```

Đây là một **canonical spiral concept**.

---

# 4. C03 — ASYNC & CONCURRENCY

## Components

```text
C03.1 Call Stack / Event Loop
C03.2 Task / Microtask
C03.3 Promise
C03.4 async/await
C03.5 Concurrency
C03.6 Cancellation
C03.7 Timeout
C03.8 Retry
C03.9 Backoff / Jitter
C03.10 Race Condition
C03.11 Deduplication
C03.12 Backpressure
C03.13 Async State Machine
```

### Progression

```text
S1
Call stack

 ↓

S3
Async Core

 ↓

S4
Browser scheduling

 ↓

S5
Network concurrency

 ↓

S8
React async state

 ↓

S10
Server/client data

 ↓

S11
Performance

 ↓

S13
Reliability

 ↓

S14
System decision
```

### Target

```text
Promise             → L6
Event Loop          → L6
Concurrency         → L7
Race Conditions     → L7
Cancellation        → L6
Reliability         → L7
```

### Project

```text
P3 Production Async Engine
P5 Network Client
P8 React SaaS
P10 Full-stack SaaS
P13 Production Simulation
```

---

# 5. C04 — BROWSER / WEB PLATFORM

## Components

```text
C04.1 DOM
C04.2 Events
C04.3 Rendering Pipeline
C04.4 Scheduling
C04.5 Web APIs
C04.6 Observers
C04.7 Workers
C04.8 Storage
C04.9 Service Worker
C04.10 Web Components
C04.11 Streams
C04.12 File / Blob / FormData
C04.13 URL / URLSearchParams
C04.14 Performance APIs
C04.15 Intl / i18n
```

### Progression

```text
S4
Foundation

 ↓

S5
Network interaction

 ↓

S9
Production/mobile/PWA

 ↓

S10
Next.js

 ↓

S11
Rendering performance

 ↓

S12
Architecture
```

### Target

```text
DOM/Event              → L5
Rendering               → L6
Web APIs                → L3/L4
Workers                 → L4
Storage                 → L4
Streams                 → L3
Service Worker          → L3/L4
Web Components          → L2/L3
Intl                    → L3
```

### Canonical question

> “Browser primitive nào thực sự giải quyết problem này?”

---

# 6. C05 — NETWORK & WEB PROTOCOL

## Components

```text
C05.1 URL
C05.2 DNS
C05.3 IP / Ports
C05.4 TCP awareness
C05.5 TLS
C05.6 HTTP
C05.7 HTTP/2
C05.8 HTTP/3
C05.9 Cookies
C05.10 CORS
C05.11 SOP
C05.12 Caching
C05.13 CDN
C05.14 REST / API contracts
C05.15 Pagination
C05.16 Idempotency
C05.17 Rate limiting
C05.18 SSE
C05.19 WebSocket
```

### Progression

```text
S5
Network foundation

 ↓

S8
Data fetching

 ↓

S9
Production networking

 ↓

S10
Next/BFF

 ↓

S11
Network performance/security

 ↓

S12
Network architecture

 ↓

S13
Reliability
```

### Target

```text
HTTP                → L6
Caching             → L7
API Design          → L6
Realtime             → L6
Network resilience  → L7
DNS/TCP/TLS         → L3/L4
```

### Project

```text
P5 Network Client
P8 SaaS
P10 Full-stack SaaS
P13 Incident Simulation
```

---

# 7. C06 — TYPE & DATA MODELING

## Components

```text
C06.1 TypeScript Mental Model
C06.2 Inference
C06.3 Structural Typing
C06.4 Union / Intersection
C06.5 Narrowing
C06.6 Generics
C06.7 Mapped Types
C06.8 Conditional Types
C06.9 infer
C06.10 Utility Types
C06.11 Runtime Validation
C06.12 Domain Modeling
C06.13 DTO / Domain / View Model
C06.14 Result / Error Models
```

### Progression

```text
S6
static typing

 ↓

S8
React props/state

 ↓

S10
API contracts

 ↓

S12
domain architecture

 ↓

S14
type architecture judgment
```

### Target

```text
Application Type Design → L6
Generic API Design      → L6
Type-level programming  → L4
Runtime Validation      → L6
Domain Modeling         → L7
```

### Core principle

```text
Type safety
≠
Runtime safety
```

---

# 8. C07 — TOOLCHAIN & DEVELOPER INFRASTRUCTURE

## Components

```text
C07.1 ESM
C07.2 CJS
C07.3 Module Resolution
C07.4 Package Manager
C07.5 Lockfile
C07.6 Package Graph
C07.7 AST
C07.8 Transform
C07.9 Bundler
C07.10 Tree Shaking
C07.11 Code Splitting
C07.12 Source Maps
C07.13 Build
C07.14 CI
C07.15 Workspace
C07.16 Monorepo
```

### Progression

```text
S7
Core

 ↓

S8
React build

 ↓

S11
Performance

 ↓

S12
Monorepo

 ↓

S13
CI/CD

 ↓

S15
Platform engineering
```

### Target

```text
Build concepts       → L5
Bundler usage        → L4
Resolution debugging → L5
Monorepo             → L6
CI/CD                → L5
Platform             → L7
```

---

# 9. C08 — FRONTEND APPLICATION ENGINEERING

Đây là competency lớn nhất ở giữa curriculum.

## Components

```text
C08.1 React Mental Model
C08.2 Elements
C08.3 Reconciliation
C08.4 Fiber
C08.5 Render / Commit
C08.6 Hooks
C08.7 Effects
C08.8 Component Architecture
C08.9 State Ownership
C08.10 Server State
C08.11 Forms
C08.12 Data Fetching
C08.13 Error Boundaries
C08.14 Suspense
C08.15 Next.js
C08.16 RSC
C08.17 Server Functions
C08.18 BFF
```

### Progression

```text
S8
React Core

 ↓

S9
Production React

 ↓

S10
Full-stack React

 ↓

S11
React performance/security

 ↓

S12
Application architecture

 ↓

S14
Technical judgment
```

### Target

```text
React fundamentals → L6
Fiber               → L4
Hooks               → L6
State architecture  → L7
RSC                 → L5/L6
Next.js             → L6
```

---

# 10. C09 — PRODUCTION FRONTEND

## Components

```text
C09.1 Accessibility
C09.2 Forms
C09.3 Mobile
C09.4 SEO
C09.5 Testing
C09.6 PWA
C09.7 Offline
C09.8 Error Recovery
C09.9 Release Readiness
```

### Progression

```text
S9
deep

 ↓

S11
performance/security

 ↓

S13
operations

 ↓

S14
engineering judgment
```

### Target

```text
Accessibility    → L6
Testing strategy → L6
Form engineering → L5
Offline           → L5
SEO               → L4
```

---

# 11. C10 — PERFORMANCE / MEMORY / SECURITY

Đây là competency Senior core.

## Components

```text
C10.1 Measurement
C10.2 CPU
C10.3 JS Engine
C10.4 Memory
C10.5 GC
C10.6 Rendering
C10.7 LCP
C10.8 INP
C10.9 CLS
C10.10 RUM
C10.11 XSS
C10.12 CSRF
C10.13 CSP
C10.14 Authentication
C10.15 Authorization
C10.16 Dependency Security
C10.17 Threat Modeling
```

### Progression

```text
S4
awareness

 ↓

S5
network security

 ↓

S8/9
application security

 ↓

S11
deep

 ↓

S13
production incidents

 ↓

S14/15
risk / strategy
```

### Target

```text
Performance diagnosis → L7
Memory debugging      → L6
Security diagnosis    → L6
Threat modeling       → L6
Security architecture → L7
```

---

# 12. C11 — ARCHITECTURE

## Components

```text
C11.1 Coupling
C11.2 Cohesion
C11.3 Boundaries
C11.4 Dependency Direction
C11.5 Feature Architecture
C11.6 Domain Boundaries
C11.7 State Architecture
C11.8 Monorepo
C11.9 Design Systems
C11.10 Micro-frontends
C11.11 Migration
C11.12 ADR
C11.13 RFC
C11.14 Architecture Fitness
```

### Progression

```text
S8
Component

 ↓

S10
Application

 ↓

S12
deep

 ↓

S13
operational architecture

 ↓

S14
architecture judgment

 ↓

S15
cross-team architecture
```

### Target

```text
Architecture Design → L7
Architecture Judgment → L7
Cross-team Architecture → L8
```

---

# 13. C12 — PRODUCTION & RELIABILITY

## Components

```text
C12.1 CI/CD
C12.2 Artifact
C12.3 Deployment
C12.4 Canary
C12.5 Feature Flag
C12.6 Observability
C12.7 Logs
C12.8 Metrics
C12.9 Tracing
C12.10 RUM
C12.11 Failure Domain
C12.12 Graceful Degradation
C12.13 Incident Response
C12.14 Postmortem
C12.15 Runbook
```

### Progression

```text
S9
quality

 ↓

S10
application reliability

 ↓

S11
diagnosis

 ↓

S13
deep

 ↓

S14
ownership

 ↓

S15
organizational reliability
```

### Target

```text
Production operation → L6
Incident response    → L7
Reliability design   → L7
```

---

# 14. C13 — ENGINEERING JUDGMENT

Đây là competency bắt đầu thật sự rõ từ Stage 14.

## Components

```text
C13.1 Problem Framing
C13.2 Requirement Analysis
C13.3 Constraint Discovery
C13.4 Alternatives
C13.5 Trade-offs
C13.6 Risk
C13.7 Reversibility
C13.8 Technical Debt
C13.9 Refactoring
C13.10 Migration
C13.11 Decision Review
C13.12 Communication
```

### Progression

```text
S8
basic trade-offs

 ↓

S11
measure before decide

 ↓

S12
architecture decisions

 ↓

S13
production decisions

 ↓

S14
deep

 ↓

S15
strategy
```

### Target

```text
Senior → L7
Staff → L8
```

---

# 15. C14 — TECHNICAL LEADERSHIP & LEVERAGE

Đây là competency cuối.

## Components

```text
C14.1 Influence
C14.2 Mentoring
C14.3 Delegation
C14.4 Cross-team Communication
C14.5 Strategy
C14.6 Platform Thinking
C14.7 Developer Experience
C14.8 Standardization
C14.9 Organizational Learning
C14.10 Technical Leverage
```

### Progression

```text
S9
team quality awareness

 ↓

S12
team architecture

 ↓

S13
incident coordination

 ↓

S14
mentoring / ownership

 ↓

S15
deep
```

### Target

```text
Senior → L4/L6
Staff → L8
```

---

# 16. GLOBAL DEPTH MATRIX

Đây là bản tổng hợp quan trọng nhất.

| Competency    | First Introduced | Peak Learning | Senior Target | Staff Target |
| ------------- | ---------------: | ------------: | ------------: | -----------: |
| JS Language   |               S0 |            S2 |            L5 |           L6 |
| Runtime       |               S1 |           S11 |            L6 |           L7 |
| Async         |               S3 |           S13 |            L7 |           L7 |
| Browser       |               S4 |           S11 |            L6 |           L6 |
| Network       |               S5 |           S13 |            L6 |           L7 |
| TypeScript    |               S6 |           S12 |            L6 |           L6 |
| Toolchain     |               S7 |           S13 |            L5 |           L7 |
| React         |               S8 |           S12 |            L6 |           L7 |
| Production FE |               S9 |           S13 |            L6 |           L7 |
| Full-stack    |              S10 |           S12 |            L6 |           L7 |
| Performance   |               S4 |           S11 |            L7 |           L7 |
| Security      |               S5 |           S11 |            L6 |           L7 |
| Architecture  |               S8 |           S14 |            L7 |           L8 |
| Reliability   |               S9 |           S13 |            L7 |           L8 |
| Judgment      |               S8 |           S14 |            L7 |           L8 |
| Leadership    |               S9 |           S15 |         L5/L6 |           L8 |
| Leverage      |              S12 |           S15 |         L4/L5 |           L8 |

---

# 17. GLOBAL SPIRAL MATRIX

Đây là cách các **concept lớn** quay lại xuyên curriculum.

## Closure

```text
S0  Function value
 ↓
S1  Closure mechanism
 ↓
S3  Async callback
 ↓
S8  React stale closure
 ↓
S11 Memory retention
 ↓
S14 Code review / bug diagnosis
```

## State

```text
S0  Data
 ↓
S3  Async state
 ↓
S8  React state
 ↓
S9  Form state
 ↓
S10 Server/client state
 ↓
S12 State architecture
 ↓
S14 State decision
```

## Caching

```text
S5  HTTP cache
 ↓
S8  Query cache
 ↓
S10 Next.js cache
 ↓
S11 Performance cache
 ↓
S12 Cache architecture
 ↓
S14 Cache strategy decision
```

## Error Handling

```text
S0  try/catch
 ↓
S3  Promise rejection
 ↓
S5  HTTP/network failure
 ↓
S8  React error boundary
 ↓
S9  UX recovery
 ↓
S10 Server mutation error
 ↓
S11 Security/performance failure
 ↓
S13 Incident
 ↓
S14 Risk/decision
```

## Performance

```text
S4  Rendering pipeline
 ↓
S7  Bundle
 ↓
S8  React rendering
 ↓
S9  production quality
 ↓
S11 deep profiling
 ↓
S12 architecture
 ↓
S14 optimization decision
 ↓
S15 organizational performance strategy
```

---

# 18. PROJECT → COMPETENCY MATRIX

Project không chỉ kiểm tra “đã làm app”.

| Project                 | Primary Competency |
| ----------------------- | ------------------ |
| P0 CLI                  | C01                |
| P1 Closure State        | C02                |
| P2 Object Runtime       | C02                |
| P3 Async Engine         | C03                |
| P4 Browser Playground   | C04                |
| P5 Network Client       | C05                |
| P6 Typed SDK            | C06                |
| P7 Build System         | C07                |
| P8 React SaaS           | C08                |
| P9 E-commerce           | C09                |
| P10 Full-stack SaaS     | C08/C09/C10        |
| P11 Perf/Security Lab   | C10                |
| P12 Enterprise Platform | C11                |
| P13 Production War Room | C12                |
| P14 Senior Challenge    | C13                |
| P15 Staff Strategy      | C14                |

Nhưng project sau **phải reuse competency cũ**.

Ví dụ:

```text
P10
không chỉ C08.

P10 =
C01 + C03 + C04 + C05 + C06 + C07 + C08 + C09
```

Đây là cách curriculum tạo **spiral integration**.

---

# 19. ASSESSMENT MATRIX

Mỗi competency phải được đánh giá bằng loại task phù hợp.

| Competency   | Predict | Explain | Implement | Debug | Design | Judge | Teach | Leverage |
| ------------ | ------: | ------: | --------: | ----: | -----: | ----: | ----: | -------: |
| JS Language  |       ✅ |       ✅ |         ✅ |     ✅ |      ✅ |       |     ✅ |          |
| Runtime      |       ✅ |       ✅ |         ✅ |     ✅ |      ✅ |     ✅ |     ✅ |          |
| Async        |       ✅ |       ✅ |         ✅ |     ✅ |      ✅ |     ✅ |     ✅ |          |
| Browser      |       ✅ |       ✅ |         ✅ |     ✅ |      ✅ |     ✅ |     ✅ |          |
| Network      |         |       ✅ |         ✅ |     ✅ |      ✅ |     ✅ |     ✅ |          |
| TypeScript   |         |       ✅ |         ✅ |     ✅ |      ✅ |     ✅ |     ✅ |          |
| Toolchain    |         |       ✅ |         ✅ |     ✅ |      ✅ |     ✅ |     ✅ |          |
| React        |         |       ✅ |         ✅ |     ✅ |      ✅ |     ✅ |     ✅ |          |
| Performance  |         |       ✅ |           |     ✅ |      ✅ |     ✅ |     ✅ |          |
| Security     |         |       ✅ |           |     ✅ |      ✅ |     ✅ |     ✅ |          |
| Architecture |         |       ✅ |           |     ✅ |      ✅ |     ✅ |     ✅ |        ✅ |
| Reliability  |         |       ✅ |           |     ✅ |      ✅ |     ✅ |     ✅ |        ✅ |
| Judgment     |         |       ✅ |           |     ✅ |      ✅ |     ✅ |     ✅ |        ✅ |
| Leadership   |         |       ✅ |           |       |      ✅ |     ✅ |     ✅ |        ✅ |

---

# 20. CAREER EXIT MATRIX

Đây là matrix để không nhầm:

> “biết rất nhiều” với “đạt level”.

## Strong Junior

Phải:

```text
C01–C06
L3
```

Có thể:

```text
implement
debug common bugs
```

---

## Mid

Phải:

```text
C01–C09
L4/L5
```

Có thể:

```text
own feature
debug production issues
make local architecture decisions
```

---

## Senior

Phải:

```text
C01–C13
L5–L7
```

Có thể:

```text
own system
design architecture
handle ambiguity
operate production
mentor
```

---

## Staff-track

Phải:

```text
C01–C14
selected domains L7/L8
```

Có thể:

```text
cross-team architecture
technical strategy
platform leverage
organizational influence
```

---

# 21. CORE vs SUPPORTING vs ELECTIVE

Đây là bước rất cần thiết để kiểm soát curriculum size.

## CORE

Phải học:

```text
JavaScript
Runtime
Async
Browser
HTTP
TypeScript
Toolchain
React
Production
Performance
Security
Architecture
Operations
Judgment
Leadership foundations
```

---

## SUPPORTING

Học ở mức cần dùng:

```text
GraphQL
Web Components
PWA
SSE
WebSocket
XState
Redux
Webpack
Rspack
Module Federation
```

---

## ELECTIVE

Không ảnh hưởng exit criteria:

```text
WebGL
WASM
React Native
Electron
Advanced GraphQL
Deep Module Federation
Framework comparison
```

---

# 22. GLOBAL “DO NOT OVERLEARN” RULE

Mỗi lesson khi viết phải ghi rõ:

```text
Depth:
L1/L2/L3/L4/L5/L6/L7/L8

Not required:
...
```

Ví dụ:

### Hidden Classes

```text
Target: L3/L4

Must:
understand shape consistency

Not required:
V8 source internals
exact IC implementation
TurboFan source
```

### Web Components

```text
Target: L2/L3

Must:
custom element
shadow DOM
slot
event boundary

Not required:
complete component ecosystem
```

### Redux

```text
Target: L3/L4

Must:
store
reducer
action
middleware
architecture trade-off

Not required:
master every Redux ecosystem package
```

---

# 23. GLOBAL COMPETENCY EXIT

Một learner không được nói:

> “Tôi đã học Stage 8.”

Curriculum phải nói:

> “Bạn đạt competency X ở level Y.”

Ví dụ:

```text
JavaScript Runtime
→ L6

Async
→ L6

React
→ L5

Architecture
→ L3
```

Điều này phản ánh thực tế hơn nhiều.

---

# 24. MASTER CURRICULUM CONTRACT

Từ bây giờ mọi Module/Lesson mới phải tuân theo 7 câu hỏi:

```text
1. Which competency?
2. What depth?
3. What prerequisite?
4. What mental model?
5. What failure mode?
6. What evidence proves mastery?
7. Where does this concept spiral next?
```

Nếu không trả lời được 7 câu này:

> **không thêm lesson.**

---

# 25. KẾT QUẢ CỦA GLOBAL MATRIX

Chúng ta hiện đã có:

```text
✅ 16 Stage
✅ Competency model
✅ Depth model
✅ Dependency
✅ Spiral model
✅ Project mapping
✅ Assessment mapping
✅ Career mapping
✅ Core/Supporting/Elective classification
✅ Anti-overlearning rules
```

Đây là điểm mà curriculum đã đủ ổn định để bước sang giai đoạn tiếp theo.

---

# 26. BƯỚC TIẾP THEO

Không viết lesson ngay.

Bây giờ cần khóa:

# MASTER TEACHING SPEC v1

Tài liệu đó sẽ quy định **chính xác cách mọi lesson trong 16 Stage được viết và dạy**:

```text
Lesson (Bài học)
├── Context (Bối cảnh)
├── Why (Tại sao cần học)
├── Prerequisites (Điều kiện tiên quyết)
├── Mental Model (Mô hình tư duy)
├── Core Concepts (Khái niệm cốt lõi)
├── Worked Example (Ví dụ phân tích từng bước)
├── Prediction (Dự đoán)
├── Implementation (Thực hành)
├── Edge Cases (Trường hợp ngoại lệ)
├── Debug Lab (Bài lab gỡ lỗi)
├── Design Exercise (Bài tập thiết kế giải pháp)
├── Production Scenario (Tình huống thực tế)
├── AI-assisted Exercise (Bài tập với AI)
├── Teach Back (Dạy lại)
├── Assessment (Đánh giá)
└── Exit Criteria (Tiêu chí qua bài)
```

Và quan trọng hơn, chúng ta sẽ thiết lập **Lesson Quality Rubric** để mọi Module sau này đạt cùng một tiêu chuẩn, thay vì Stage 0 viết một kiểu và Stage 10 viết một kiểu.

Sau đó mới quay lại **Stage 0.1.1** và bắt đầu biên soạn khóa học theo teaching spec đã khóa.

