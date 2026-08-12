# JAVASCRIPT ENGINEERING MASTERY
## MASTER CURRICULUM


> **Mục tiêu:** Đào tạo một Junior Frontend có khoảng 6 tháng kinh nghiệm thành một Frontend Engineer có nền tảng đủ sâu để làm việc ở mức Senior, đồng thời xây dựng năng lực tư duy, architecture, production và technical leadership làm nền cho Staff Engineer.
>
> **Nguyên tắc:** Không học công nghệ theo danh sách. Học theo dependency của năng lực.
>
> **Dependency:** `Language → Runtime → Browser → Network → Tooling → Frontend → Production → Architecture → Senior → Staff`
>
> **Workload:** 550–650 giờ học + thực hành, chưa tính tự nghiên cứu.

---

# I. TRIẾT LÝ & PHƯƠNG PHÁP

## 1.1. Không học theo kiểu truyền thống

Khóa học **không** được tổ chức theo kiểu:

```text
Học syntax
→ học API
→ học framework
→ làm vài project
→ phỏng vấn
```

Mà theo dependency thực sự của năng lực:

```text
LANGUAGE
→ RUNTIME
→ BROWSER
→ NETWORK
→ TOOLING
→ FRONTEND
→ PRODUCTION
→ ARCHITECTURE
→ SENIOR
→ STAFF
```

## 1.2. Mỗi module được học qua 5 tầng

```text
1. UNDERSTAND
   Hiểu khái niệm và mental model

2. IMPLEMENT
   Tự viết code

3. BREAK
   Cố tình làm sai / tạo edge case

4. DEBUG & MEASURE
   Tìm root cause bằng công cụ

5. DESIGN & JUDGE
   Đưa ra quyết định và phân tích trade-off
```

Không module nào được đánh giá bằng việc "đã đọc tài liệu".

## 1.3. Toàn bộ cách học

```text
UNDERSTAND
    ↓
IMPLEMENT
    ↓
BREAK IT
    ↓
DEBUG
    ↓
MEASURE
    ↓
APPLY
    ↓
READ SOURCE
    ↓
RE-IMPLEMENT
    ↓
DESIGN
    ↓
MAKE TRADE-OFF
    ↓
TEACH
    ↓
PRODUCTION SIMULATION
```

## 1.4. Nếu rút thành một dòng duy nhất

```text
JavaScript Syntax
→ Language Semantics
→ Execution Context
→ Scope & Closure
→ this
→ Prototype
→ Object Model
→ Async
→ Event Loop
→ Browser
→ DOM
→ Rendering
→ Web APIs
→ Network
→ Modules
→ Tooling
→ Testing
→ Debugging
→ Memory
→ Performance
→ Architecture
→ Security
→ Production
→ React/Next.js
→ System Design
→ Judgment
→ Ownership
→ Staff
```

---

# II. BỨC TRANH TOÀN BỘ

```text
┌────────────────────────────────────────────────────────────────────────────┐
│                    JAVASCRIPT ENGINEERING MASTERY                          │
├────────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  TẦNG I — JAVASCRIPT CORE                                                 │
│  Stage 0  Language Foundation                                             │
│  Stage 1  Execution Model                                                 │
│  Stage 2  Object Model & Advanced JS                                     │
│  Stage 3  Async & Concurrency                                             │
│                                                                            │
│                    ↓                                                       │
│                                                                            │
│  TẦNG II — WEB PLATFORM                                                   │
│  Stage 4  Browser Runtime                                                 │
│  Stage 5  Network & Web Platform                                         │
│  Stage 6  TypeScript Engineering                                          │
│  Stage 7  Toolchain & Ecosystem                                           │
│                                                                            │
│                    ↓                                                       │
│                                                                            │
│  TẦNG III — FRONTEND ENGINEERING                                          │
│  Stage 8  React Engineering                                               │
│  Stage 9  Production Frontend                                             │
│  Stage 10 Next.js & Full-stack Frontend                                  │
│  Stage 11 Performance, Memory & Security                                 │
│                                                                            │
│                    ↓                                                       │
│                                                                            │
│  TẦNG IV — SYSTEM & LEADERSHIP                                            │
│  Stage 12 Frontend Architecture                                           │
│  Stage 13 Production & System Engineering                                │
│  Stage 14 Senior Engineering                                             │
│  Stage 15 Staff Engineering Track                                        │
│                                                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

---

# III. DEPENDENCY GRAPH CỐT LÕI

## JavaScript
```text
Values
 ↓
Variables
 ↓
Functions
 ↓
Scope
 ↓
Execution Context
 ↓
Closure
 ↓
Object Model
 ↓
Prototype
 ↓
this
 ↓
Async
 ↓
Promise
 ↓
Event Loop
```

## Browser
```text
Event Loop
 ↓
Browser APIs
 ↓
DOM
 ↓
Events
 ↓
Rendering
 ↓
Scheduling
 ↓
Performance
```

## Network
```text
HTTP
 ↓
Caching
 ↓
API
 ↓
Fetch
 ↓
Async
 ↓
Realtime
 ↓
BFF
```

## React
```text
Execution Model
 ↓
Browser Rendering
 ↓
State
 ↓
React Render
 ↓
Reconciliation
 ↓
Fiber
 ↓
Hooks
 ↓
Data Fetching
 ↓
Application Architecture
```

## Senior
```text
Architecture
 +
Performance
 +
Security
 +
Production
 +
Debugging
        ↓
Technical Judgment
        ↓
Senior
```

## Staff
```text
Senior Judgment
 +
System Thinking
 +
Ownership
 +
Communication
 +
Leadership
        ↓
Staff Track
```

---

# IV. CHI TIẾT 15 STAGE

---

## STAGE 0 — JAVASCRIPT LANGUAGE FOUNDATION

### Vai trò
Xây lại nền tảng ngôn ngữ từ đầu nhưng không theo hướng beginner tutorial. Mục tiêu là loại bỏ những mental model sai trước khi bước vào runtime.

### Module 0.1 — JavaScript & Runtime Fundamentals
#### Lesson 0.1.1 — JavaScript là gì?
- ECMAScript
- JavaScript
- Engine
- Runtime
- Host environment
- Browser vs Node.js

#### Lesson 0.1.2 — Values & Variables
- Value
- Variable
- Binding
- Assignment
- Mutation
- Primitive / Object

#### Lesson 0.1.3 — Types
- String
- Number
- Boolean
- BigInt
- Symbol
- Null
- Undefined
- NaN
- Infinity

#### Lesson 0.1.4 — Equality & Coercion
- `==`
- `===`
- `Object.is`
- Implicit coercion
- Explicit coercion
- Truthy / Falsy

### Module 0.2 — Basic Programming
#### Lesson 0.2.1 — Operators

#### Lesson 0.2.2 — Control Flow
- `if`
- `switch`
- Ternary
- Guard clause
- Early return

#### Lesson 0.2.3 — Loops
- `for`
- `while`
- `for...of`
- `for...in`

#### Lesson 0.2.4 — Flow Control
- `break` / `continue`
- Nested control flow

### Module 0.3 — Functions & Data
#### Lesson 0.3.1 — Functions
- Function declaration
- Function expression
- Arrow function
- Callback
- Higher-order function

#### Lesson 0.3.2 — Parameters & Return
- Parameters
- Default parameters
- Rest parameters
- Return values

#### Lesson 0.3.3 — Core Data Structures
- Arrays
- Objects
- Strings
- Basic iteration

#### Lesson 0.3.4 — Modern Syntax
- Destructuring
- Spread
- Rest

### Module 0.4 — Errors
- `Error`
- Built-in error types
- `throw`
- `try/catch/finally`
- Error propagation cơ bản

### Project 0 — CLI Data Processor

Xây một chương trình Node.js xử lý:

```text
JSON Input
→ Validate
→ Transform
→ Filter
→ Aggregate
→ Output Report
```

Mục tiêu là buộc người học sử dụng toàn bộ JavaScript foundation.

### Exit Level — Strong Junior Foundation
Người học không còn cần tutorial cho JavaScript cơ bản và phân biệt được syntax với semantics.

---

## STAGE 1 — JAVASCRIPT EXECUTION MODEL

### Vai trò
Đây là **Core Runtime Foundation**. Mục tiêu là hiểu code được thực thi như thế nào.

### Module 1.1 — Execution Context
#### Lesson 1.1.1 — Global Execution Context
#### Lesson 1.1.2 — Function Execution Context
#### Lesson 1.1.3 — Phases
- Creation phase
- Execution phase
#### Lesson 1.1.4 — Execution Context stack

### Module 1.2 — Scope & Lexical Environment
#### Lesson 1.2.1 — Lexical scope
#### Lesson 1.2.2 — Scope Types
- Global scope
- Function scope
- Block scope
- Module scope
#### Lesson 1.2.3 — Scope chain
#### Lesson 1.2.4 — Variable lookup / resolution
#### Lesson 1.2.5 — Lexical Environment & Environment Record

### Module 1.3 — Hoisting & TDZ
#### Lesson 1.3.1 — Declarations
- `var`
- `let`
- `const`
#### Lesson 1.3.2 — Hoisting
#### Lesson 1.3.3 — TDZ (Temporal Dead Zone)
#### Lesson 1.3.4 — Initialization vs declaration

### Module 1.4 — Closures
#### Lesson 1.4.1 — Closure formation
#### Lesson 1.4.2 — Closure lifetime
#### Lesson 1.4.3 — Factory functions
#### Lesson 1.4.4 — Private state
#### Lesson 1.4.5 — Closure + asynchronous code
#### Lesson 1.4.6 — Stale closure

### Module 1.5 — Call Stack
- Stack frame
- Function invocation
- Recursion
- Stack overflow
- Synchronous execution

### Project 1 — Mini Module System bằng Closure

Tự xây một module abstraction bằng closure:

```text
private state
public API
factory
dependency injection
```

### Exit Level — Runtime-aware JavaScript Engineer
Người học có thể mô phỏng scope, execution và closure mà không cần chạy code để đoán.

---

## STAGE 2 — OBJECT MODEL & ADVANCED JAVASCRIPT

### Vai trò
Hiểu object system thực sự của JavaScript trước khi bước sang framework internals và library design.

### Module 2.1 — Object Internals
- Property
- Computed property
- Property descriptor
- `enumerable`
- `writable`
- `configurable`
- Getter / Setter

### Module 2.2 — `this`
#### Lesson 2.2.1 — Default binding
#### Lesson 2.2.2 — Implicit binding
#### Lesson 2.2.3 — Explicit binding
#### Lesson 2.2.4 — `new` binding
#### Lesson 2.2.5 — Arrow / lexical `this`
#### Lesson 2.2.6 — `call` / `apply` / `bind`

### Module 2.3 — Prototype System
- `[[Prototype]]`
- `prototype`
- `__proto__`
- Prototype chain
- Property lookup
- Constructor
- `Object.create`

### Module 2.4 — Classes
- Class
- Constructor
- Methods
- Static members
- Private fields
- `extends`
- `super`

### Module 2.5 — Meta Programming
- `Proxy`
- `Reflect`
- Symbols

### Module 2.6 — Iterators & Generators
- Iterable
- Iterator
- `Symbol.iterator`
- Generator
- `yield`

### Module 2.7 — Built-in Object Structures
- `Map`
- `Set`
- `WeakMap`
- `WeakSet`

### Project 2 — Mini Object Framework

Tự xây:

```text
Class Factory
+
Prototype Inheritance
+
Property Validation
+
Observable Object bằng Proxy
```

### Exit Level — Advanced JavaScript
Người học hiểu JavaScript object model đủ sâu để đọc legacy code, library code và framework abstraction.

---

## STAGE 3 — ASYNC JAVASCRIPT & CONCURRENCY

### Vai trò
Biến asynchronous programming từ syntax/API knowledge thành engineering skill.

### Module 3.1 — Call Stack & Event Loop
- Call stack
- Host APIs / Web APIs
- Event Loop
- Task
- Microtask
- Rendering opportunity

### Module 3.2 — Promise Model
#### Lesson 3.2.1 — Promise states (Pending / Fulfilled / Rejected)
#### Lesson 3.2.2 — Resolution / rejection
#### Lesson 3.2.3 — Thenable
#### Lesson 3.2.4 — Promise chaining
#### Lesson 3.2.5 — Error propagation
#### Lesson 3.2.6 — `finally`
#### Lesson 3.2.7 — Microtask queue

### Module 3.3 — Async/Await
- `async`
- `await`
- Error propagation
- Sequential async
- Parallel async

### Module 3.4 — Concurrency
- Sequential
- Concurrent
- Parallel
- `Promise.all`
- `Promise.allSettled`
- `Promise.race`
- `Promise.any`

### Module 3.5 — Cancellation
- `AbortController`
- `AbortSignal`
- Cancellation propagation

### Module 3.6 — Reliability Patterns
- Timeout
- Retry
- Exponential backoff
- Jitter
- Deduplication
- Stale response prevention
- Race condition handling

### Project 3 — Production Search Engine

```text
Input
→ Debounce
→ Request
→ Cancellation
→ Race Protection
→ Cache
→ Retry
→ Timeout
→ Error State
```

### Đây là milestone đầu tiên
Người học phải có khả năng giải thích:

> Vì sao request A trả về sau request B nhưng không được phép ghi đè kết quả B?

### Exit Level — Concurrent Programming Foundation
Người học có thể tự thiết kế các asynchronous flow thay vì chỉ gọi API.

---

## STAGE 4 — BROWSER RUNTIME

### Vai trò
Hiểu browser là runtime thực sự của Frontend.

### Module 4.1 — DOM
- DOM tree
- Node
- Element
- Traversal
- Mutation
- Create / Remove

### Module 4.2 — Events
- EventTarget
- Bubbling
- Capturing
- Delegation
- Prevent default
- Pointer Events
- Keyboard Events
- Form Events
- Composed events

### Module 4.3 — Rendering Pipeline
- HTML parsing
- DOM
- CSSOM
- Render Tree
- Layout
- Paint
- Composite

### Module 4.4 — Browser Scheduling
- `requestAnimationFrame`
- `requestIdleCallback`
- Tasks
- Microtasks
- Rendering scheduling

### Module 4.5 — Browser APIs
- IntersectionObserver
- ResizeObserver
- MutationObserver
- BroadcastChannel
- Page Visibility

### Module 4.6 — Workers
- Web Workers
- Message passing
- Structured Clone
- Transferables
- Lifecycle
- Cleanup

### Module 4.7 — Storage
- localStorage
- sessionStorage
- Cookie
- IndexedDB
- Cache Storage
- Quota
- Eviction
- Persistence

### Module 4.8 — Web Components
- Custom Elements
- Shadow DOM
- Slots
- Event retargeting
- Encapsulation

### Project 4 — High-performance Browser App

Có:
- Infinite list
- Image lazy loading
- ResizeObserver
- Web Worker
- IndexedDB
- Offline cache
- Keyboard accessibility

### Exit Level — Browser Engineer Foundation

---

## STAGE 5 — NETWORK & WEB PLATFORM

### Vai trò
Hiểu Frontend như một distributed client.

### Module 5.1 — Networking Fundamentals
- URL
- DNS
- TCP
- TLS
- Connection lifecycle

### Module 5.2 — HTTP
- HTTP semantics
- Request
- Response
- Headers
- Status codes

### Module 5.3 — HTTP Evolution
- HTTP/1.1
- HTTP/2
- HTTP/3
- Multiplexing
- QUIC

### Module 5.4 — Browser Security
- Same Origin Policy
- CORS
- CSP
- HSTS
- Cookie security

### Module 5.5 — HTTP Caching
- Cache-Control
- ETag
- Last-Modified
- CDN
- Cache invalidation
- Resource hints
- Compression

### Module 5.6 — API Engineering
- REST
- Resource modeling
- Pagination
- Cursor pagination
- Idempotency
- Rate limiting
- Retry

### Module 5.7 — Realtime
- Long Polling
- SSE
- WebSocket
- Connection management
- Reconnect
- Backoff

### Project 5 — Network-aware Application

Có:
- API
- Pagination
- Cache
- Retry
- Offline fallback
- Realtime update

### Exit Level — Web Platform Engineer

---

## STAGE 6 — TYPESCRIPT ENGINEERING

### Vai trò
Sau khi hiểu JavaScript runtime mới xây static reasoning system trên nó.

### Module 6.1 — Type System
- Type inference
- Structural typing
- Literal types
- Union
- Intersection

### Module 6.2 — Generics
- Generic parameters
- Constraints
- Defaults
- `keyof`
- Indexed access

### Module 6.3 — Advanced Types
- Mapped types
- Conditional types
- `infer`
- Recursive types
- Utility types (Partial, Required, Pick, Omit, Record, ReturnType, Awaited)
- Custom utility types

### Module 6.4 — Type Safety
- `unknown`
- `any`
- `never`
- Type guards
- Discriminated unions
- `satisfies`

### Module 6.5 — Runtime Validation
- Static vs runtime validation
- Schema
- Zod
- API validation

### Module 6.6 — Library Typing
- `.d.ts`
- Declaration merging
- Public types
- Generic library APIs

### Project 6 — Typed Domain Library

Có:
- Domain types
- Generic API
- Runtime schema
- Public API
- Unit tests

### Exit Level — Type-safe Application Engineer

---

## STAGE 7 — TOOLCHAIN & ECOSYSTEM

### Vai trò
Hiểu source code đi từ developer machine đến browser.

### Module 7.1 — Modules
- ESM
- CommonJS
- Dynamic import
- Live bindings
- Circular dependencies
- Module resolution

### Module 7.2 — Package Management
- npm
- pnpm
- package.json
- semver
- dependencies
- peerDependencies
- lockfile
- workspace

### Module 7.3 — Build Pipeline
- Parser
- AST
- Transform
- Transpile
- Bundle
- Minify

### Module 7.4 — Bundlers
- Vite
- Webpack
- Rspack

### Module 7.5 — Optimization
- Tree shaking
- Code splitting
- Dynamic import
- Chunking
- Bundle analysis

### Module 7.6 — Developer Tooling
- ESLint
- Prettier
- Source Maps
- CI

### Project 7 — Build System from Zero

```text
ESM
→ TypeScript
→ Bundler
→ Code Splitting
→ Source Map
→ Lint
→ Test
→ CI
```

### Exit Level — Build-aware Frontend Engineer

---

## STAGE 8 — REACT ENGINEERING

### Vai trò
Học React sau khi đã hiểu JS runtime và Browser runtime.

### Module 8.1 — React Mental Model
- Component
- Props
- State
- Render
- Commit

### Module 8.2 — Reconciliation
- Element identity
- Tree
- Key
- Diffing

### Module 8.3 — Fiber
- Fiber node
- Work loop
- Scheduling
- Render phase
- Commit phase

### Module 8.4 — Hooks
- `useState`
- `useEffect`
- `useRef`
- `useMemo`
- `useCallback`
- Custom Hooks

### Module 8.5 — State Architecture
- Local state
- Derived state
- Client state
- Server state

### Module 8.6 — Data Fetching
- Query
- Mutation
- Cache
- Invalidation
- Optimistic update
- Pagination

### Module 8.7 — State Libraries
- Zustand
- Redux Toolkit
- TanStack Query
- XState

### Project 8 — Production SaaS

Có:
- Auth
- Dashboard
- Forms
- Client state
- Server state
- Optimistic update
- Pagination
- Error handling
- Testing

### Exit Level — Frontend Engineer

---

## STAGE 9 — PRODUCTION FRONTEND

### Vai trò
Feature phải sống được trong môi trường user thật.

### Module 9.1 — Accessibility
- Semantic HTML
- WCAG
- Keyboard
- Focus
- Screen Reader
- ARIA

### Module 9.2 — Forms
- Validation
- Schema
- Async validation
- Autosave
- Optimistic submit
- Field arrays

### Module 9.3 — Mobile Web
- Responsive
- Viewport
- Touch
- Pointer Events
- Virtual keyboard
- Mobile performance

### Module 9.4 — SEO
- Metadata
- Sitemap
- Robots
- Canonical
- Structured data
- Dynamic metadata

### Module 9.5 — Testing Strategy
- Unit
- Integration
- E2E
- Mocking
- Test boundaries

#### Công nghệ
- Testing Library
- Vitest
- Playwright
- MSW
- Lighthouse
- Storybook

### Project 9 — Production E-commerce

Có:
- Catalog
- Cart
- Checkout
- Auth
- Payment test mode
- Offline cart
- A11y
- SEO
- E2E
- Performance

### Exit Level — Production-capable Frontend Engineer

---

## STAGE 10 — NEXT.JS & FULL-STACK FRONTEND

### Vai trò
Học framework architecture thay vì framework API.

### Module 10.1 — Rendering Models
- CSR
- SSR
- SSG
- ISR
- Streaming

### Module 10.2 — App Router
- Routing
- Layout
- Loading
- Error
- Nested routes

### Module 10.3 — Server Components
- Server Component
- Client Component
- Serialization
- Boundaries

### Module 10.4 — Server Actions
- Mutation
- Progressive enhancement
- Validation
- Error handling

### Module 10.5 — Next.js Cache
- Data Cache
- Full Route Cache
- Router Cache
- Revalidation
- Invalidation

### Module 10.6 — BFF
- Aggregation
- Transformation
- Authentication boundary
- API contracts

### Project 10 — Full-stack SaaS

Người học phải tự quyết định:

```text
Server hay Client?
Cache hay no-cache?
RSC hay Client Component?
BFF hay direct API?
```

### Exit Level — Full-stack Frontend Engineer

---

## STAGE 11 — PERFORMANCE, MEMORY & SECURITY

### Vai trò
Đây là tầng quan trọng cho Senior.

### Module 11.1 — JavaScript Engine
- Parsing
- Bytecode
- Interpreter
- JIT
- Optimization
- Deoptimization
- Hidden Classes
- Inline Caching

### Module 11.2 — Garbage Collection
- Reachability
- GC roots
- Mark
- Sweep
- Generational GC
- Promotion

### Module 11.3 — Memory Leaks
- Closures
- Event listeners
- Timers
- Subscriptions
- Caches
- Detached DOM
- Workers

### Module 11.4 — Performance
- CPU
- Allocation pressure
- Rendering cost
- Layout thrashing
- Long tasks
- Scheduling

### Module 11.5 — Profiling
- Performance Panel
- Memory Panel
- Heap Snapshot
- Flame Chart
- Allocation Timeline

### Module 11.6 — Security
- XSS
- CSRF
- CORS
- CSP
- Cookies
- OAuth
- JWT
- Supply chain

### Project 11 — Performance & Incident Lab

Cố tình tạo:
- Memory leak
- CPU spike
- INP regression
- Bundle explosion
- Layout thrashing
- Race condition

Sau đó:

```text
Reproduce
→ Isolate
→ Measure
→ Hypothesis
→ Verify
→ Fix
→ Postmortem
```

### Exit Level — Senior Performance / Security Foundation

---

## STAGE 12 — FRONTEND ARCHITECTURE

### Vai trò
Chuyển từ "viết code tốt" sang "thiết kế codebase để nhiều người cùng phát triển."

### Module 12.1 — Architecture Fundamentals
- Coupling
- Cohesion
- Dependency
- Boundary
- Modularity

### Module 12.2 — Application Architecture
- Feature architecture
- Vertical Slice
- Layered architecture
- Modular Monolith

### Module 12.3 — State Architecture
- State ownership
- Derived state
- Client/server separation
- Event-driven state

### Module 12.4 — Large-scale Frontend
- Monorepo
- Shared packages
- Design System

### Module 12.5 — Micro-frontends
- Module Federation
- Runtime boundaries
- Deployment independence
- Organizational trade-offs

### Module 12.6 — Architecture Decision
- ADR
- RFC
- Alternatives
- Trade-offs
- Risk
- Migration

### Project 12 — Enterprise Dashboard

Có:
- 10K+ records
- RBAC
- Realtime
- Virtualization
- Workers
- Monorepo
- Shared packages
- Observability

### Exit Level — Senior Architecture Foundation

---

## STAGE 13 — PRODUCTION & SYSTEM ENGINEERING

### Vai trò
Code không kết thúc ở merge.

### Module 13.1 — CI/CD
- Pipeline
- Quality gates
- Artifact
- Environment

### Module 13.2 — Deployment
- Rolling
- Canary
- Blue-Green
- Feature Flag
- Rollback

### Module 13.3 — Observability
- Logs
- Metrics
- Traces
- RUM
- Correlation IDs

### Module 13.4 — Distributed Frontend
- BFF
- Trace propagation
- Failure isolation

### Module 13.5 — Incident Management
- Detection
- Containment
- Mitigation
- Rollback
- Root Cause
- Postmortem

#### Công nghệ
- GitHub Actions
- Docker cơ bản
- Sentry
- OpenTelemetry
- Monitoring
- Feature Flag systems

### Project 13 — Production Incident Simulation

Scenario:

```text
02:00 AM
Checkout errors tăng 5x
        ↓
Alert
        ↓
Investigate
        ↓
Contain
        ↓
Rollback / Flag / Hotfix
        ↓
Verify
        ↓
Postmortem
```

### Exit Level — Production / Operations Engineer

---

## STAGE 14 — SENIOR ENGINEERING

### Vai trò
Từ đây trọng tâm chuyển từ **knowledge** sang **judgment**.

### Module 14.1 — Requirement Analysis
- Ambiguity
- Constraints
- Assumptions
- Acceptance criteria

### Module 14.2 — Technical Decision
- Alternatives
- Trade-offs
- Risk
- Reversibility
- Cost of change

### Module 14.3 — Code Review
Review theo:
- Correctness
- Performance
- Security
- Maintainability
- Architecture
- Concurrency

### Module 14.4 — Refactoring
- Code smell
- Safe refactoring
- Incremental migration
- Regression prevention

### Module 14.5 — Legacy
- Migration
- Strangler Pattern
- Compatibility
- Rollout
- Rollback

### Module 14.6 — Technical Debt
- Identify
- Classify
- Prioritize
- Quantify
- Pay down

### Project 14 — Legacy Migration

```text
Old System
    ↓
Compatibility Layer
    ↓
New System
    ↓
Gradual Migration
    ↓
Rollback
```

### Exit Level — Senior Engineer

---

## STAGE 15 — STAFF ENGINEERING TRACK

### Vai trò
Không cố "dạy 5 năm kinh nghiệm". Mục tiêu là xây **Staff-level thinking**.

### Module 15.1 — System Thinking
- Product
- Platform
- Architecture
- Team boundaries
- Organizational constraints

### Module 15.2 — Technical Strategy
- Architecture roadmap
- Standardization
- Platform investment
- Build vs Buy

### Module 15.3 — Technical Leadership
- Mentoring
- Teaching
- Review
- Facilitation
- Conflict resolution

### Module 15.4 — Architecture Leadership
- RFC
- ADR
- Design Review
- Cross-team architecture

### Module 15.5 — Incident Leadership
- Incident command
- Communication
- Prioritization
- Decision under uncertainty

### Module 15.6 — Staff Judgment
Các bài toán:

```text
Có nên rewrite không?
Có nên dùng micro-frontend không?
Có nên chuyển state lên global không?
Có nên đầu tư design system không?
Có nên xây hay mua một platform?
Có nên tối ưu performance hiện tại hay chờ migration architecture?
Có nên chấp nhận technical debt để kịp business deadline?
```

### Final Project — STAFF ARCHITECTURE CHALLENGE

Input:

```text
10M users
50 engineers
Legacy frontend
Web + Mobile
Multiple teams
High traffic
Strict security
3-month deadline
Existing technical debt
```

Output:

```text
Requirements
→ Architecture
→ Alternatives
→ ADR
→ Risk Register
→ Implementation Plan
→ Migration Plan
→ Rollout Strategy
→ Observability
→ Incident Plan
→ Technical Presentation
```

### Exit Level — Staff-track Engineering Capability

---

# V. PROJECT SPINE

Các project không độc lập. Chúng tạo thành một progression.

```text
P0 — CLI Data Processor
        ↓
P1 — Mini Module System (Closure)
        ↓
P2 — Mini Object Framework
        ↓
P3 — Production Search Engine
        ↓
P4 — High-performance Browser App
        ↓
P5 — Network-aware Application
        ↓
P6 — Typed Domain Library
        ↓
P7 — Build System from Zero
        ↓
P8 — Production SaaS
        ↓
P9 — Production E-commerce
        ↓
P10 — Full-stack SaaS
        ↓
P11 — Performance & Incident Lab
        ↓
P12 — Enterprise Dashboard
        ↓
P13 — Production Incident Simulation
        ↓
P14 — Legacy Migration
        ↓
P15 — Staff Architecture Challenge
```

Mỗi project phải **reuse ít nhất một phần hệ thống cũ**, để người học trải nghiệm:

```text
feature growth
→ complexity growth
→ technical debt
→ refactoring
→ architecture
```

---

# VI. 5 HOẠT ĐỘNG XUYÊN SUỐT

Ngoài lesson chính, có 5 hoạt động chạy xuyên toàn khóa.

## A. Debug Lab
Mỗi tuần ít nhất một bug.

Ví dụ:
```text
stale closure
race condition
memory leak
infinite render
hydration mismatch
cache bug
layout thrashing
```

## B. Source Reading
Đọc source theo tầng phát triển:
```text
JavaScript / Web APIs
→ React
→ TanStack Query
→ Zustand
→ libraries
→ framework internals
```

## C. Re-implementation
Không phải copy thư viện nguyên bản. Tự xây phiên bản nhỏ:
```text
debounce
throttle
Promise
EventEmitter
state store
router
cache
virtual list
```

## D. War Story
Mỗi project phải có:
```text
Context
→ Constraint
→ Options
→ Decision
→ Trade-off
→ Failure
→ Lesson
```

## E. Teach Back
Người học phải giải thích lại:
```text
cho junior
→ cho đồng nghiệp
→ cho technical interviewer
→ cho stakeholder
```

---

# VII. ĐỘ SÂU KIẾN THỨC

Không phải mọi topic đều được học sâu như nhau.

| Depth | Ý nghĩa | Ví dụ |
|---|---|---|
| L1 | Awareness | Web Components |
| L2 | Working Knowledge | Proxy |
| L3 | Deep Understanding | HTTP |
| L4 | Re-implementation | Closure, Promise, Event Loop |
| L5 | Engineering Judgment | Architecture, caching, state architecture |

### Core L4
- Scope
- Closure
- Execution Context
- `this`
- Prototype
- Promise
- Event Loop
- Browser Rendering
- Async concurrency
- Memory model
- Debugging

### Core L3
- HTTP
- TypeScript
- Modules
- Bundlers
- React
- Next.js
- Security
- Performance

### L2 / L3 theo nhu cầu
- Web Components
- GraphQL
- tRPC
- Module Federation
- Service Worker
- Advanced browser APIs

### L5
- Architecture
- Trade-off
- Migration
- Incident response
- Technical strategy
- Staff judgment

---

# VIII. NĂNG LỰC SAU TỪNG TẦNG

```text
STAGE 0–3
Strong JavaScript Engineer
        ↓
STAGE 4–7
Web / Platform-aware Engineer
        ↓
STAGE 8–10
Frontend Engineer
        ↓
STAGE 11–13
Senior-capable Production Engineer
        ↓
STAGE 14
Senior Engineer
        ↓
STAGE 15
Staff-track Engineer
```

---

# IX. MASTER EXIT CRITERIA

Không được đánh giá bằng: "Đã học hết module."

Mà bằng:

### LEVEL 1 — KNOW
Có thể giải thích cơ chế.

### LEVEL 2 — DO
Có thể tự implement.

### LEVEL 3 — DEBUG
Có thể tìm root cause.

### LEVEL 4 — DESIGN
Có thể thiết kế solution mới.

### LEVEL 5 — DECIDE
Có thể chọn giữa nhiều solution và bảo vệ trade-off.

### LEVEL 6 — LEAD
Có thể giúp người khác và cả team đưa ra quyết định tốt hơn.

---

# X. CÁC MILESTONE LỚN

## Milestone 1 — Strong JavaScript
Có thể:
- viết JS không cần tutorial
- mô phỏng scope
- hiểu closure
- hiểu prototype
- hiểu async

## Milestone 2 — Browser Engineer
Có thể:
- debug DOM
- giải thích rendering
- debug event
- debug performance
- dùng browser APIs đúng cách

## Milestone 3 — Frontend Engineer
Có thể:
- thiết kế React application
- quản lý state
- xử lý API
- testing
- accessibility
- performance
- security

## Milestone 4 — Senior Engineer
Có thể:
- debug production
- thiết kế architecture
- xử lý incident
- review code
- migration
- trade-off

## Milestone 5 — Staff Track
Có thể:
- thiết kế system
- viết ADR/RFC
- đánh giá technical strategy
- dẫn dắt architecture decision
- xử lý ambiguity
- mentoring
- đưa ra quyết định ảnh hưởng nhiều team

---

# XI. QUY TẮC CHUYỂN STAGE

Không chuyển Stage chỉ vì: "Đã học xong video."

Mỗi Stage phải đạt 4 điều:

```text
KNOW  → hiểu
DO    → tự làm
DEBUG → tự sửa
DECIDE → tự quyết định
```

Từ Stage 8 trở đi thêm:

```text
EXPLAIN → dạy lại
DESIGN  → thiết kế
OWN     → chịu trách nhiệm
```

---

# XII. ĐỊNH VỊ CUỐI CÙNG

```text
Junior
└── Biết dùng JavaScript

        ↓

Strong Junior
└── Hiểu JavaScript

        ↓

Mid
└── Hiểu Runtime + Browser + Framework

        ↓

Senior-capable
└── Xây + Debug + Optimize + Secure + Operate

        ↓

Senior
└── Design + Trade-off + Ownership

        ↓

Staff-track
└── System + Strategy + Leadership
```

---

# XIII. CẤU TRÚC TRIỂN KHAI

```text
15 Stage
→ Module
→ Lesson
→ Lab
→ Project
→ Exit Criteria
```

Thay vì chỉ là một Table of Contents.

**Master Curriculum kết thúc ở đây.**

Bước tiếp theo không phải thêm Stage nữa. Bước tiếp theo là **đào ngược từ Stage 0**, xác định chính xác từng Module cần bao nhiêu Lesson, prerequisite nào, kiến thức nào là Core/Optional, Lab nào, Project nào và Exit Criteria nào. Khi hoàn thành phần đó, curriculum mới đủ ổn định để bắt đầu viết từng module một.
