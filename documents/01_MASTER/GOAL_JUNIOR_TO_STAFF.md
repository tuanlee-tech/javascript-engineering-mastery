# JavaScript Engineering → Frontend Engineer → Staff Track

## 0. Mục tiêu của khóa học

Đây không phải là một khóa **“JavaScript Complete Course”** theo nghĩa học toàn bộ syntax, API và framework.

Mục tiêu là xây một **Frontend Engineer có mental model đủ sâu để hiểu hệ thống**, có khả năng debug, thiết kế, tối ưu và đưa ra quyết định kỹ thuật — từ đó có nền tảng để phát triển lên Senior và Staff.

Lộ trình đi từ:

```text
JavaScript Language
        ↓
JavaScript Runtime
        ↓
Browser & Web Platform
        ↓
Network
        ↓
TypeScript & Tooling
        ↓
Frontend Framework
        ↓
Application Engineering
        ↓
Performance / Security / Testing
        ↓
Architecture
        ↓
Production Engineering
        ↓
Senior Engineering
        ↓
Staff Engineering
```

Không phải mọi công nghệ xuất hiện trong roadmap đều phải “học thuộc”. Công nghệ chỉ là phương tiện. Thứ được xây dựng xuyên suốt là:

```text
Mental Model
→ Implementation Skill
→ Debugging Skill
→ System Thinking
→ Engineering Judgment
→ Ownership
```

---

# 1. STAGE 0 — PROGRAMMING & JAVASCRIPT FOUNDATION

### Ý nghĩa

Đây là tầng xây lại nền móng.

Một Junior thường đã biết viết `if`, `for`, function, object nhưng chưa chắc hiểu rõ **value là gì, variable là gì, object hoạt động thế nào và JavaScript thực sự thực thi code ra sao**.

Stage này tạo vocabulary và mental model chung cho toàn bộ phần còn lại.

### Kiến thức

- JavaScript và ECMAScript
- Value, variable, binding, assignment
- Primitive và Object
- Number, String, Boolean, BigInt, Symbol
- `null`, `undefined`, `NaN`
- Type conversion và coercion
- Equality: `==`, `===`, `Object.is`
- Operators
- Control flow
- Functions
- Parameters, return
- Arrays
- Objects
- Destructuring
- Spread / Rest
- Iteration
- Error cơ bản

### Công nghệ / công cụ

- JavaScript
- Browser Console
- Node.js
- VS Code
- Git cơ bản

### Giúp ích cho giai đoạn sau

Nếu không chắc ở đây, mọi thứ phía sau sẽ trở thành học thuộc.

Stage này là prerequisite cho:

- Execution Context
- Closure
- Prototype
- TypeScript
- React
- Debugging

### Kết quả đầu ra

Người học có thể viết JavaScript cơ bản một cách tự nhiên và quan trọng hơn là **không còn nhầm lẫn giữa syntax và semantics**.

---

# 2. STAGE 1 — JAVASCRIPT EXECUTION MODEL

### Ý nghĩa

Đây là **Core của Core**.

Thay vì chỉ biết JavaScript làm được gì, người học bắt đầu hiểu:

> Một đoạn code JavaScript được engine xử lý như thế nào?

### Kiến thức

- Execution Context
- Global Execution Context
- Function Execution Context
- Creation Phase / Execution Phase
- Lexical Environment
- Environment Record
- Scope
- Scope Chain
- Lexical Scope
- Block Scope
- Function Scope
- Module Scope
- Hoisting
- Temporal Dead Zone
- Closure
- Closure lifetime
- Call Stack
- Recursion
- Function execution

### Công nghệ / công cụ

- JavaScript
- Chrome DevTools
- Node.js debugger

### Giúp ích cho giai đoạn sau

Đây là nền móng trực tiếp cho:

- Closure
- `this`
- Async JavaScript
- React hooks
- State management
- Memory leak
- Debugging

Đặc biệt, rất nhiều behavior tưởng là “React magic” sau này thực chất bắt nguồn từ JavaScript execution model.

### Kết quả đầu ra

Người học có thể nhìn một đoạn code và mô phỏng:

```text
Scope
→ Execution Context
→ Call Stack
→ Variable lookup
→ Closure
```

mà không cần chạy code để đoán.

---

# 3. STAGE 2 — OBJECT MODEL & ADVANCED JAVASCRIPT

### Ý nghĩa

JavaScript không phải một ngôn ngữ class-based thuần túy.

Muốn hiểu các thư viện và framework lớn, phải hiểu **object model thực sự bên dưới syntax ES6**.

### Kiến thức

- Object internals
- Property
- Property Descriptor
- Getter / Setter
- `this`
- `call`
- `apply`
- `bind`
- `new`
- Prototype
- Prototype Chain
- Constructor
- `Object.create`
- `Object.getPrototypeOf`
- Class
- `extends`
- `super`
- Static
- Private fields
- Symbols
- Iterators
- Generators
- Proxy
- Reflect

### Công nghệ / API

- JavaScript language primitives
- `Proxy`
- `Reflect`
- `Map`
- `Set`
- `WeakMap`
- `WeakSet`

### Giúp ích cho giai đoạn sau

Trực tiếp phục vụ:

- Framework internals
- State libraries
- Object mutation / immutability
- Metaprogramming
- Debugging legacy code
- Performance
- Library design

### Kết quả đầu ra

Người học không còn xem:

```js
class User {}
```

là “cách duy nhất để tạo object”.

Họ hiểu **class chỉ là một abstraction trên object/prototype model**.

---

# 4. STAGE 3 — ASYNCHRONOUS JAVASCRIPT & CONCURRENCY

### Ý nghĩa

Đây là giai đoạn biến một người **biết viết JS** thành người **biết xây ứng dụng thực tế**.

Frontend gần như luôn phải xử lý:

- network
- user input
- timers
- rendering
- concurrent requests
- cancellation
- race conditions

### Kiến thức

- Call Stack
- Event Loop
- Host Environment
- Task
- Microtask
- Promise
- Promise Resolution
- Thenable
- `async / await`
- Timers
- Fetch
- Abort
- Cancellation
- Timeout
- Retry
- Exponential Backoff
- Concurrency
- Parallelism
- Race Condition
- Stale Response
- Request Deduplication

### Công nghệ / API

- `Promise`
- `fetch`
- `AbortController`
- `setTimeout`
- `requestAnimationFrame`
- Web Streams cơ bản

### Giúp ích cho giai đoạn sau

Trực tiếp phục vụ:

- Search / Autocomplete
- Form
- React effects
- Data fetching
- TanStack Query
- Realtime
- WebSocket
- Server-Sent Events
- Optimistic UI

### Kết quả đầu ra

Có thể tự thiết kế một flow như:

```text
User types
→ debounce
→ request
→ cancel request cũ
→ ignore stale response
→ render latest data
```

và giải thích chính xác vì sao nó hoạt động.

---

# 5. STAGE 4 — BROWSER RUNTIME & WEB PLATFORM

### Ý nghĩa

JavaScript không chạy trong chân không.

Browser cung cấp một hệ thống khổng lồ xung quanh JavaScript.

Stage này trả lời:

> Từ JavaScript đến DOM và pixel trên màn hình xảy ra chuyện gì?

### Kiến thức

#### DOM

- DOM Tree
- Node
- Element
- Traversal
- Mutation
- Creation / Removal

#### Events

- EventTarget
- Event bubbling
- Capturing
- Delegation
- Default behavior
- Pointer Events
- Keyboard Events
- Form Events

#### Rendering

```text
HTML
 ↓
DOM
CSS
 ↓
CSSOM
 ↓
Render Tree
 ↓
Layout
 ↓
Paint
 ↓
Composite
```

#### Browser Scheduling

- `requestAnimationFrame`
- `requestIdleCallback`
- Tasks
- Microtasks
- Rendering opportunities

#### Web APIs

- IntersectionObserver
- ResizeObserver
- MutationObserver
- BroadcastChannel
- Web Worker
- Service Worker
- Web Components
- Shadow DOM
- Page Visibility
- Clipboard
- Storage APIs

### Công nghệ

- Browser DevTools
- Chrome Performance
- Chrome Memory
- Web APIs

### Giúp ích cho giai đoạn sau

Đây là nền tảng cho:

- React rendering
- React Fiber
- UI performance
- Animation
- Infinite scrolling
- Virtualization
- PWA
- Offline
- Web Components
- Browser debugging

### Kết quả đầu ra

Người học có thể giải thích:

> Một click của user từ event → JS → state change → DOM update → rendering → pixel diễn ra thế nào.

---

# 6. STAGE 5 — NETWORK & WEB PLATFORM

### Ý nghĩa

Frontend Engineer thực tế không chỉ viết UI.

Frontend là một **distributed client** nói chuyện với server qua mạng không ổn định.

### Kiến thức

- URL
- DNS
- TCP
- TLS
- HTTP
- HTTP/1.1
- HTTP/2
- HTTP/3
- Request / Response
- Headers
- Cookies
- Cache
- CDN
- Compression
- CORS
- CSP
- HSTS
- Resource Hints
- REST
- Pagination
- Idempotency
- Rate Limiting
- Retry
- API Contract

### Công nghệ

- `fetch`
- HTTP clients
- Browser Network panel
- CDN
- JSON
- REST API
- WebSocket
- SSE

### Giúp ích cho giai đoạn sau

Phục vụ trực tiếp cho:

- Data fetching
- Authentication
- Caching
- Next.js
- BFF
- Realtime
- Performance
- Security
- API architecture

### Kết quả đầu ra

Có thể nhìn Network waterfall và trả lời:

> Request nào chậm? Vì sao chậm? Browser chậm, network chậm, server chậm hay rendering chậm?

---

# 7. STAGE 6 — TYPESCRIPT & STATIC ENGINEERING

### Ý nghĩa

Sau khi hiểu JavaScript runtime, TypeScript mới thực sự có ý nghĩa.

Không học TypeScript như “JavaScript có type”.

Học nó như một **static reasoning system** giúp kiểm soát complexity.

### Kiến thức

- Type system
- Type inference
- Structural typing
- Union
- Intersection
- Literal types
- Generics
- Constraints
- `keyof`
- `typeof`
- Indexed access
- Mapped types
- Conditional types
- `infer`
- Utility types
- Discriminated unions
- Type guards
- `unknown`
- `never`
- `satisfies`
- Declaration files
- Module typing
- Runtime validation

### Công nghệ

- TypeScript
- `tsc`
- Zod
- TypeScript ESLint

### Giúp ích cho giai đoạn sau

- React
- API contract
- State management
- Form
- Large codebase
- Library development
- Monorepo

### Kết quả đầu ra

Người học có thể dùng TypeScript để **mô hình hóa domain và ngăn lỗi**, chứ không chỉ thêm type annotation.

---

# 8. STAGE 7 — JAVASCRIPT ECOSYSTEM & TOOLCHAIN

### Ý nghĩa

Khi project lớn lên, source code không còn chạy trực tiếp trong browser.

Cần hiểu toàn bộ pipeline:

```text
Source
→ Parser
→ Transform
→ Bundle
→ Optimize
→ Deploy
→ Browser
```

### Kiến thức

- ES Modules
- CommonJS
- Module Resolution
- Package Resolution
- npm
- pnpm
- package.json
- Semantic Versioning
- Lockfile
- Peer Dependencies
- Monorepo
- AST
- Transpilation
- Source Maps
- Tree Shaking
- Code Splitting
- Dynamic Import
- Bundle Optimization

### Công nghệ

- Node.js
- npm / pnpm
- Vite
- Webpack
- Rspack
- Babel
- SWC
- ESLint
- Prettier
- GitHub Actions

### Giúp ích cho giai đoạn sau

Phục vụ:

- React build
- Next.js
- Monorepo
- Design System
- CI/CD
- Library publishing
- Production debugging

### Kết quả đầu ra

Không còn câu:

> “Vite/Next tự làm.”

Mà hiểu được **build system đang thực sự làm gì**.

---

# 9. STAGE 8 — FRONTEND ENGINEERING

### Ý nghĩa

Đây là điểm JavaScript chuyển thành **Frontend Engineering**.

Framework bắt đầu xuất hiện mạnh ở đây.

### Kiến thức

#### React

- Component model
- Props
- State
- Rendering
- Reconciliation
- Fiber concepts
- Effects
- Context
- Hooks
- Suspense
- Concurrent rendering
- Error boundaries

#### State

- Local state
- Server state
- Derived state
- Global client state
- State machine

#### Data

- Fetching
- Caching
- Invalidation
- Optimistic update
- Mutation
- Pagination
- Infinite query

### Công nghệ

- React
- React Router
- TanStack Query
- Zustand
- Redux Toolkit
- XState

### Giúp ích cho giai đoạn sau

Đây là nền tảng để xây application lớn mà không biến codebase thành một khối state hỗn loạn.

---

# 10. STAGE 9 — PRODUCTION FRONTEND

### Ý nghĩa

Một app chạy trên localhost không phải một sản phẩm.

Stage này đưa người học vào môi trường:

> user thật + thiết bị thật + network thật + lỗi thật.

### Kiến thức

- Accessibility
- Responsive Web
- Mobile Web
- Forms
- Validation
- Authentication
- Authorization
- Error Handling
- Graceful Degradation
- Offline
- Caching
- SEO
- Internationalization
- Analytics
- Feature Flags

### Performance

- Core Web Vitals
- LCP
- INP
- CLS
- Critical Rendering Path
- Bundle Optimization
- Image Optimization
- Font Optimization
- Lazy Loading
- Virtualization

### Testing

- Unit testing
- Integration testing
- E2E
- Mocking
- Contract testing

### Công nghệ

- Testing Library
- Vitest / Jest
- Playwright
- MSW
- Lighthouse
- Storybook
- Sentry

### Giúp ích cho giai đoạn sau

Đây là nền để chuyển từ:

> “Tôi xây được feature.”

sang:

> “Tôi chịu trách nhiệm cho feature đó trong production.”

---

# 11. STAGE 10 — NEXT.JS & FULL-STACK FRONTEND

### Ý nghĩa

Sau khi hiểu Browser + React + Network + Caching, Next.js mới được học.

Không học framework trước mental model.

### Kiến thức

- Routing
- Server Rendering
- Client Rendering
- Static Rendering
- Dynamic Rendering
- Streaming
- Server Components
- Client Components
- Server Actions
- Caching
- Revalidation
- Middleware
- Metadata
- Image / Font Optimization
- BFF

### Công nghệ

- Next.js
- React Server Components
- Server Actions
- Next.js caching
- Edge / Node runtimes

### Giúp ích cho giai đoạn sau

Đây là tầng giúp người học xây:

- SaaS
- E-commerce
- Dashboard
- Content platform
- AI application
- Full-stack frontend systems

---

# 12. STAGE 11 — PERFORMANCE, MEMORY & SECURITY

### Ý nghĩa

Đây là một trong những điểm phân biệt Senior với người chỉ biết framework.

### Performance

- CPU profiling
- Memory profiling
- Heap Snapshot
- Allocation Timeline
- Long Tasks
- INP
- Rendering performance
- Layout thrashing
- JIT awareness
- Bundle performance

### JavaScript Engine

- Parsing
- Bytecode
- Interpreter
- JIT
- Hidden Classes
- Inline Caching
- Deoptimization
- Garbage Collection
- Generational GC

Không học V8 để trở thành engine developer.

Học vừa đủ để:

> hiểu tại sao code của mình có behavior/performance như vậy.

### Security

- XSS
- CSRF
- CORS
- CSP
- Clickjacking
- Token security
- Cookie security
- OAuth
- JWT
- Supply-chain security
- Dependency vulnerabilities

### Công nghệ

- Chrome DevTools
- Lighthouse
- Sentry
- CSP
- Security scanners

---

# 13. STAGE 12 — FRONTEND ARCHITECTURE

### Ý nghĩa

Đây là giai đoạn chuyển từ:

> Tôi viết code tốt.

sang:

> Tôi thiết kế được codebase để nhiều người cùng phát triển.

### Kiến thức

- Modularity
- Coupling
- Cohesion
- Dependency boundaries
- Dependency inversion
- Feature architecture
- Vertical Slice
- FSD
- Modular Monolith
- Domain boundaries
- State architecture
- Data architecture
- API architecture
- BFF
- Micro-frontends
- Design System

### Công nghệ

- Turborepo
- pnpm Workspaces
- Storybook
- Design Tokens
- Module Federation
- Web Components

### Giúp ích cho giai đoạn sau

Chuẩn bị cho:

- team lớn
- nhiều application
- shared packages
- design system
- migration
- large-scale frontend

---

# 14. STAGE 13 — PRODUCTION & SYSTEM ENGINEERING

### Ý nghĩa

Đây là nơi bắt đầu bước vào phạm vi **Senior+**.

### Kiến thức

- CI/CD
- Deployment strategy
- Canary
- Blue-Green
- Feature Flag
- Rollback
- Observability
- Logs
- Metrics
- Traces
- RUM
- Distributed tracing
- Incident response
- Postmortem
- Disaster recovery
- Reliability

### Công nghệ

- GitHub Actions
- Docker cơ bản
- Sentry
- OpenTelemetry
- Grafana / monitoring stack
- Feature flag platform
- CDN / cloud platform

### Giúp ích cho giai đoạn sau

Người học bắt đầu hiểu:

> Frontend không kết thúc ở `git push`.

Một feature phải:

```text
Build
→ Test
→ Deploy
→ Observe
→ Operate
→ Rollback
```

---

# 15. STAGE 14 — SENIOR ENGINEERING

### Ý nghĩa

Từ đây không còn chủ yếu học technology.

Trọng tâm là **problem solving và engineering judgment**.

### Kiến thức

- Requirements analysis
- Ambiguous requirements
- Technical trade-offs
- Code review
- Refactoring
- Technical debt
- Migration
- Architecture Decision Record
- RFC
- Failure analysis
- Risk management
- Performance budgeting
- Security review

### Thực hành

Mỗi vấn đề phải trả lời:

```text
Problem là gì?
Constraint là gì?
Có những solution nào?
Trade-off?
Risk?
Decision?
Rollback?
How to measure success?
```

### Kết quả

Senior không phải người biết nhiều thư viện nhất.

Senior là người:

> **được giao một problem mơ hồ và có thể biến nó thành một solution có thể vận hành.**

---

# 16. STAGE 15 — STAFF ENGINEERING TRACK

### Ý nghĩa

Đây là lớp cuối cùng.

Không cố “dạy 5 năm kinh nghiệm”.

Thay vào đó xây khả năng để người học bắt đầu **hành xử như một Staff Engineer**.

### Kiến thức

#### Technical Leadership

- Technical strategy
- Architecture direction
- Cross-team dependency
- Platform thinking
- Standardization
- Technical roadmap

#### Decision Making

- Trade-off
- Risk
- Uncertainty
- Reversibility
- Cost of change
- Build vs Buy
- Short-term vs Long-term

#### Leadership

- Mentoring
- Technical communication
- Conflict resolution
- Design review
- Architecture review
- Consensus building
- Stakeholder communication

#### System Thinking

- Reliability
- Scalability
- Developer Experience
- Organizational boundaries
- Platform / Product trade-off

#### High-pressure Engineering

- Production incident
- Rollback
- Hotfix
- Degradation
- Root cause analysis
- Postmortem
- Prevention

### Công nghệ

Không còn technology nào là “core” tuyệt đối.

Thay vào đó người học phải biết **đánh giá công nghệ**.

Ví dụ:

```text
Redux hay Zustand?
REST hay GraphQL?
SSR hay CSR?
Monolith hay Micro-frontend?
Build hay Buy?
Cache hay Recompute?
Sync hay Async?
```

Câu trả lời đúng không phải là:

> “Công nghệ X tốt hơn.”

Mà là:

> “Trong constraint này, X có trade-off phù hợp hơn Y.”

---

# 17. Mối quan hệ giữa các Stage

Toàn bộ roadmap có thể nhìn như sau:

```text
STAGE 0
JavaScript Language
        │
        ▼
STAGE 1
Execution Model
        │
        ▼
STAGE 2
Object Model
        │
        ▼
STAGE 3
Async & Concurrency
        │
        ▼
STAGE 4
Browser Runtime
        │
        ▼
STAGE 5
Network
        │
        ▼
STAGE 6
TypeScript
        │
        ▼
STAGE 7
Tooling & Ecosystem
        │
        ▼
STAGE 8
React & Frontend Engineering
        │
        ▼
STAGE 9
Production Frontend
        │
        ▼
STAGE 10
Next.js / Full-stack Frontend
        │
        ▼
STAGE 11
Performance & Security
        │
        ▼
STAGE 12
Architecture
        │
        ▼
STAGE 13
Production / System Engineering
        │
        ▼
STAGE 14
Senior Engineering
        │
        ▼
STAGE 15
Staff Engineering
```

Mỗi tầng giải quyết một loại vấn đề:

```text
Language
→ Code đúng

Runtime
→ Hiểu code chạy thế nào

Browser / Network
→ Hiểu môi trường thực thi

TypeScript / Tooling
→ Kiểm soát complexity

React / Next
→ Xây application

Production
→ Làm application sống được ngoài thực tế

Performance / Security
→ Làm nó nhanh và an toàn

Architecture
→ Làm codebase scale được

Senior
→ Giải quyết problem

Staff
→ Giải quyết problem ở cấp hệ thống và giúp nhiều người khác giải quyết được
```

---

# 18. Các Project lớn xuyên suốt khóa

Project không phải bài tập riêng biệt. Mỗi project được thiết kế để **tái sử dụng kiến thức của các Stage trước**.

### Project 1 — Async Search

Học:

```text
Closure
Promise
Event Loop
Cancellation
Race Condition
Caching
```

### Project 2 — Mini State Manager

Học:

```text
Object Model
Closure
Subscription
State
Immutability
Architecture
```

### Project 3 — Mini Promise / Async Library

Học:

```text
Promise
Microtask
Resolution
Error Propagation
Concurrency
```

### Project 4 — Production SaaS

Học:

```text
React
Next.js
TypeScript
Forms
Auth
Caching
Testing
SEO
Accessibility
Performance
```

### Project 5 — Enterprise Dashboard

Học:

```text
Architecture
RBAC
Realtime
Virtualization
Workers
Observability
Monorepo
CI/CD
```

### Project 6 — Real-time Application

Học:

```text
WebSocket
SSE
Optimistic UI
Race Condition
Streaming
Offline
Mobile Performance
```

### Project 7 — Design System

Học:

```text
Design Tokens
Component API
Accessibility
Storybook
Visual Regression
Versioning
Publishing
```

### Project 8 — Legacy Migration

Học:

```text
Migration
Architecture
Backward Compatibility
Risk
Rollback
Canary
Incident Management
```

### Project 9 — Staff Simulation

Không còn là một app cụ thể.

Người học nhận một problem mơ hồ:

```text
“Business muốn xây X.
Current system có Y.
Traffic tăng 10x.
Team có 8 developers.
Deadline 3 tháng.
Có hệ thống legacy.
Có constraint về security / budget.”
```

Người học phải:

```text
Clarify requirements
→ Design architecture
→ Evaluate alternatives
→ Write ADR
→ Implement prototype
→ Identify risks
→ Define metrics
→ Define rollout
→ Simulate incident
→ Present decision
```

---

# 19. Triết lý cuối cùng của khóa học

Không học để đạt:

> “Tôi biết JavaScript.”

Không học để đạt:

> “Tôi biết React.”

Không học để đạt:

> “Tôi biết Next.js.”

Mục tiêu cuối cùng là:

> **Tôi có thể nhận một vấn đề Frontend chưa từng gặp, hiểu hệ thống đủ sâu để tìm nguyên nhân, thiết kế các phương án, đánh đổi có chủ đích, triển khai giải pháp, đo kết quả và chịu trách nhiệm cho quyết định của mình.**

Đó là con đường:

```text
Junior Developer
        ↓
Strong Frontend Developer
        ↓
Frontend Engineer
        ↓
Senior Frontend Engineer
        ↓
Senior+
        ↓
Staff-track Engineer
```

Và curriculum này được thiết kế theo dependency **Language → Runtime → Platform → Engineering → Architecture → Leadership**, chứ không theo danh sách công nghệ đang “hot”.

Tài liệu tham khảo ban đầu của bạn có nhiều thành phần rất hữu ích, đặc biệt là tư duy Foundation → Application → Mastery, deliberate practice, project-based learning và incident/ADR; nhưng trong curriculum này, những thành phần đó chỉ là **phương pháp**, còn backbone thực sự là dependency của năng lực Engineering.