# JAVASCRIPT ENGINEERING MASTERY

## STAGE 12 — FRONTEND ARCHITECTURE

### Detailed Curriculum v1

---

# 0. Stage Overview

## Mục tiêu

Stage 12 là bước chuyển rất rõ từ:

> **Senior-capable Developer**

sang:

> **Engineer có khả năng thiết kế và làm cho một codebase phát triển được trong nhiều năm.**

Stage 11 đã dạy người học:

```text id="d4x9r1"
Build
→ Measure
→ Debug
→ Optimize
→ Secure
```

Nhưng một hệ thống có thể:

* chạy nhanh,
* ít bug,
* có test,
* có security tốt,

vẫn có thể trở thành **technical mess** khi:

```text id="d2g8ql"
5 developers
→ 10 developers
→ 30 developers
→ 5 teams
→ 10 applications
→ shared dependencies
→ independent deployments
```

Vấn đề lúc này không còn là:

> “Function này viết thế nào?”

mà là:

> **“Code nên nằm ở đâu, dependency đi theo hướng nào, boundary đặt ở đâu, và hệ thống phải thay đổi thế nào mà không phá phần còn lại?”**

---

# 1. Mental Model Toàn Stage

```text id="f4z2p6"
FEATURE
   ↓
MODULE
   ↓
BOUNDARY
   ↓
DEPENDENCY
   ↓
SYSTEM
   ↓
TEAM
   ↓
EVOLUTION
```

Architecture tốt không phải là:

> nhiều folder hơn.

Cũng không phải:

> nhiều design pattern hơn.

Architecture tốt là:

> **thay đổi một phần hệ thống mà không tạo ra chi phí thay đổi không cần thiết cho phần còn lại.**

---

# 2. Phạm vi kiến thức

Stage 12 gồm **8 Modules / 40 Lessons**:

```text id="l6m6vd"
12.1 Architecture Fundamentals
12.2 Frontend Module & Dependency Architecture
12.3 Feature / Domain Architecture
12.4 State & Data Architecture
12.5 Monorepo & Shared Platform
12.6 Design Systems & Internal Libraries
12.7 Micro-frontends & Distributed Frontend
12.8 Architecture Decision & Evolution
```

Đây là stage bắt đầu yêu cầu **architecture judgment**, không chỉ implementation.

---

# 3. MODULE 12.1 — ARCHITECTURE FUNDAMENTALS

## Mục tiêu

Xây vocabulary và mental model để nói chuyện architecture chính xác.

---

## Lesson 12.1.1 — Architecture là gì?

Phân biệt:

```text id="go8mty"
Code organization
Design
Architecture
System design
```

Architecture tập trung vào:

* components
* boundaries
* relationships
* constraints
* quality attributes
* evolution

---

## Lesson 12.1.2 — Coupling

Hiểu:

> Hai module thay đổi cùng nhau đến mức nào?

Các dạng:

```text id="c6qws5"
data coupling
control coupling
temporal coupling
implementation coupling
```

Không cần học taxonomy quá học thuật; mục tiêu là phát hiện coupling trong code thực tế.

---

## Lesson 12.1.3 — Cohesion

Một module nên tập trung vào:

> một nhóm responsibility có liên quan.

Không đồng nhất cohesion với:

> module càng nhỏ càng tốt.

---

## Lesson 12.1.4 — Change Coupling

Một trong những mental model quan trọng nhất.

Ví dụ:

```text id="07lkvv"
Change User API
       ↓
Auth
       ↓
Dashboard
       ↓
Billing
       ↓
UI
```

Architecture tốt phải giảm **unnecessary change propagation**.

---

## Lesson 12.1.5 — Dependency Direction

Thiết kế:

```text id="c0n2t0"
A → B
```

khác hoàn toàn:

```text id="g3x2uv"
B → A
```

Phải hiểu:

* dependency ownership
* abstraction
* implementation detail

---

## Lesson 12.1.6 — Boundary

Boundary có thể là:

```text id="kq0a3f"
module
package
feature
application
service
team
deployment
```

Boundary tốt phải có reason.

---

## Lesson 12.1.7 — Architecture Quality Attributes

Core:

* maintainability
* reliability
* performance
* security
* scalability
* testability
* deployability

Không có architecture “tối ưu mọi thứ”.

---

## Lesson 12.1.8 — Architecture Trade-offs

Mọi architecture decision đều phải trả giá.

Ví dụ:

```text id="4zzgys"
simplicity
vs
flexibility

reuse
vs
coupling

performance
vs
maintainability

independent deployment
vs
operational complexity
```

---

# 4. MODULE 12.2 — FRONTEND MODULE & DEPENDENCY ARCHITECTURE

## Mục tiêu

Thiết kế module sao cho codebase không trở thành một dependency graph hỗn loạn.

---

## Lesson 12.2.1 — Module Boundary

Một module nên expose:

```text id="7o36fd"
public API
```

và giữ:

```text id="4n9jdi"
implementation detail
```

ẩn bên trong khi phù hợp.

---

## Lesson 12.2.2 — Dependency Graph

Ví dụ:

```text id="z7w1fr"
UI
 ↓
Feature
 ↓
Domain
 ↓
Infrastructure
```

Phải phát hiện dependency ngược chiều.

---

## Lesson 12.2.3 — Dependency Cycle

```text id="vy2r7n"
A → B
B → C
C → A
```

Phân tích:

* compile complexity
* initialization problems
* ownership ambiguity

---

## Lesson 12.2.4 — Dependency Rule

Thiết kế rule:

```text id="r8f3y3"
UI can depend on Feature
Feature can depend on Domain
Domain cannot depend on UI
```

Nhưng phải justify, không biến rule thành dogma.

---

## Lesson 12.2.5 — Public API

Một package/feature nên export gì?

So sánh:

```text id="v3r3lc"
barrel export
vs
deep import
```

và ảnh hưởng tới encapsulation/bundle/API stability.

---

## Lesson 12.2.6 — Internal vs Public Module

Phân biệt:

```text id="s4trq3"
internal helper
vs
public abstraction
```

Một abstraction trở thành public contract thì cost thay đổi tăng lên.

---

## Lesson 12.2.7 — Architecture Boundary Testing

Viết test để ngăn:

```text id="10h3e9"
feature A
→ imports feature B internal file
```

Ví dụ tooling:

* ESLint boundaries
* dependency-cruiser
* Nx/Turborepo conventions
* custom lint rules

---

## Lesson 12.2.8 — Circular Dependency Lab

Tạo codebase có 3–4 dependency cycles.

Sau đó:

```text id="5v7i7d"
detect
→ explain
→ redesign
→ verify
```

---

# 5. MODULE 12.3 — FEATURE / DOMAIN ARCHITECTURE

## Mục tiêu

Tổ chức application theo **business capability**, không chỉ theo loại file.

---

## Lesson 12.3.1 — Technical Layering

Ví dụ:

```text id="k4hz1z"
components/
hooks/
utils/
services/
```

Phân tích ưu/nhược điểm.

---

## Lesson 12.3.2 — Feature-oriented Structure

Ví dụ:

```text id="0zqghe"
features/
  auth/
  billing/
  projects/
  notifications/
```

Mục tiêu:

> cùng responsibility gần nhau.

---

## Lesson 12.3.3 — Vertical Slice

Một feature có thể đi từ:

```text id="w2zjti"
UI
↓
state
↓
domain
↓
API
```

trong cùng một feature boundary.

---

## Lesson 12.3.4 — Layered vs Vertical Slice

So sánh:

```text id="n6a7sj"
Layered
vs
Feature-oriented
vs
Vertical Slice
```

theo:

* discoverability
* coupling
* team ownership
* feature change cost

---

## Lesson 12.3.5 — Domain Boundaries

Ví dụ:

```text id="q7k6d7"
Billing
Users
Projects
Analytics
```

Không giả định:

> database entity = frontend domain boundary.

---

## Lesson 12.3.6 — Bounded Context Awareness

Ở mức frontend:

* terminology
* ownership
* model differences
* API contract differences

Không biến frontend thành DDD academic course.

---

## Lesson 12.3.7 — Shared Code Problem

Một utility được dùng ở:

```text id="y4qgr4"
3 features
→ shared
```

nhưng sau 2 năm:

```text id="d11jjc"
shared/
→ 80 unrelated functions
```

Phân tích tại sao “shared” có thể trở thành dependency dump.

---

## Lesson 12.3.8 — Feature Ownership

Thiết kế:

```text id="qj2n4h"
Feature
├── UI
├── state
├── data
├── domain
└── tests
```

và team ownership.

---

# 6. MODULE 12.4 — STATE & DATA ARCHITECTURE

## Mục tiêu

Stage 8 dạy state trong React.

Stage 12 thiết kế **state architecture ở cấp application**.

---

## Lesson 12.4.1 — State Taxonomy

Phân biệt:

```text id="0c5f5g"
UI state
Client state
Server state
URL state
Form state
Persistent state
Derived state
Ephemeral state
```

---

## Lesson 12.4.2 — Source of Truth

Mỗi piece of data phải có:

> owner / source of truth.

Ví dụ:

```text id="emc5ud"
URL
server
local store
component
browser storage
```

---

## Lesson 12.4.3 — Duplicate State

Ví dụ:

```text id="du5y4t"
server data
+
Redux copy
+
component copy
+
localStorage copy
```

Phân tích:

> Vì sao synchronization complexity tăng theo số nguồn copy?

---

## Lesson 12.4.4 — Cache vs State

Đây là distinction rất quan trọng:

```text id="p3e1h1"
cache
≠
source of truth
```

Một cache có lifecycle riêng.

---

## Lesson 12.4.5 — Event-driven State

Model:

```text id="kr8jgz"
Event
 ↓
State Transition
 ↓
Derived UI
```

---

## Lesson 12.4.6 — State Machine Architecture

Khi workflow có nhiều state:

```text id="31g8wm"
draft
→ submitting
→ payment_pending
→ paid
→ failed
```

Không dùng 12 booleans.

---

## Lesson 12.4.7 — Data Normalization

Khi data graph phức tạp:

```text id="1k7xlv"
users
posts
comments
```

phải tránh duplicated nested state nếu update consistency khó.

---

## Lesson 12.4.8 — Server State Architecture

Tách:

```text id="cnj67f"
fetch
cache
mutation
invalidation
subscription
```

thành một coherent system.

---

## Lesson 12.4.9 — Offline / Sync Architecture

Foundation:

```text id="o2g6vk"
local write
→ queue
→ server sync
→ conflict
```

---

# 7. MODULE 12.5 — MONOREPO & SHARED PLATFORM

## Mục tiêu

Khi có nhiều app/package, quản lý dependency và ownership như thế nào?

---

## Lesson 12.5.1 — Why Monorepo?

Giải quyết:

* shared code
* synchronized changes
* tooling
* atomic commits

Nhưng cũng tạo:

* coupling
* build complexity
* ownership challenges

---

## Lesson 12.5.2 — Workspace Architecture

Ví dụ:

```text id="hx4rwg"
apps/
  web/
  admin/

packages/
  ui/
  api/
  config/
```

---

## Lesson 12.5.3 — Package Boundaries

Mỗi package phải có:

```text id="u4bqmn"
clear responsibility
public API
owners
dependency rules
```

---

## Lesson 12.5.4 — Dependency Direction in Monorepo

Ví dụ:

```text id="fnn0yl"
app
 ↓
feature package
 ↓
domain package
 ↓
shared primitive
```

Không để:

```text id="2p7w40"
shared
→ app
```

---

## Lesson 12.5.5 — Build Graph

Hiểu:

```text id="j8x6l6"
package change
→ affected packages
→ rebuild/test
```

---

## Lesson 12.5.6 — Task Pipelines

Concept:

```text id="3n7u2t"
lint
test
build
```

có dependency graph.

---

## Lesson 12.5.7 — Remote Cache

Awareness:

```text id="hi3pgo"
same inputs
→ reuse previous outputs
```

Công nghệ:

* Turborepo
* Nx

Không cần thành thạo cả hai.

---

## Lesson 12.5.8 — Monorepo Governance

* package ownership
* versioning
* changelog
* dependency policy
* breaking changes

---

# 8. MODULE 12.6 — DESIGN SYSTEMS & INTERNAL LIBRARIES

## Mục tiêu

Xây abstraction mà **người khác sử dụng được**, không chỉ code dùng cho chính mình.

---

## Lesson 12.6.1 — Why Design Systems?

Giải quyết:

```text id="0u4n35"
inconsistency
duplication
design/dev drift
accessibility
```

---

## Lesson 12.6.2 — Design Tokens

* primitive tokens
* semantic tokens
* component tokens

---

## Lesson 12.6.3 — Component API

Một component library cần:

```text id="a1e8fn"
behavior
visual API
accessibility
states
variants
composition
```

---

## Lesson 12.6.4 — Compound Components

Kết nối Stage 8.

---

## Lesson 12.6.5 — Headless vs Styled

So sánh:

```text id="e7h6vh"
headless
styled
hybrid
```

---

## Lesson 12.6.6 — Versioning

* semantic versioning
* breaking change
* migration
* deprecation

---

## Lesson 12.6.7 — Documentation

* Storybook
* examples
* usage guidelines
* accessibility notes
* do/don't

---

## Lesson 12.6.8 — Visual Regression

* screenshot baseline
* unintended change
* CI gating

---

## Lesson 12.6.9 — Library Ownership

Một package shared trong 10 teams cần:

```text id="2bc1u3"
owners
release policy
support policy
breaking-change policy
```

---

# 9. MODULE 12.7 — MICRO-FRONTENDS & DISTRIBUTED FRONTEND

## Mục tiêu

Không học micro-frontends vì nó “advanced”.

Mục tiêu là hiểu:

> **Khi nào application boundaries cần độc lập đến mức deployment/team ownership cũng tách ra?**

---

## Lesson 12.7.1 — Micro-frontend Problem

Một organization có:

```text id="s0u48t"
Team A
Team B
Team C
```

mỗi team cần:

* independent ownership
* independent deployment
* different release cadence

---

## Lesson 12.7.2 — When Micro-frontends Make Sense

Có thể phù hợp khi:

```text id="z4cya5"
organizational boundaries
+
deployment independence
+
large product surface
```

Không phù hợp chỉ vì:

> application lớn.

---

## Lesson 12.7.3 — Integration Strategies

Awareness:

```text id="7gh1ld"
build-time package
runtime integration
iframe
Web Components
Module Federation
```

---

## Lesson 12.7.4 — Module Federation

Concept:

```text id="6b1jbr"
Host
 ↓
Remote
 ↓
runtime module
```

---

## Lesson 12.7.5 — Shared Dependencies

Problem:

```text id="unf4sc"
two React versions
two design systems
two state runtimes
```

Phân tích:

* duplication
* incompatibility
* singleton assumptions

---

## Lesson 12.7.6 — Cross-microfrontend Communication

Không tạo global event spaghetti.

So sánh:

```text id="x8ab3k"
URL
shared package
events
shared state
API
```

---

## Lesson 12.7.7 — Distributed Failure

Một remote app fail.

Shell phải làm gì?

```text id="qj1z2s"
hide?
fallback?
retry?
degrade?
```

---

## Lesson 12.7.8 — Micro-frontend Cost Model

Phải tính:

```text id="6hzp9k"
runtime complexity
testing
deployment
observability
UX consistency
dependency management
```

---

# 10. MODULE 12.8 — ARCHITECTURE DECISION & EVOLUTION

## Mục tiêu

Đây là module quan trọng nhất Stage 12.

Architecture không chỉ là thiết kế ban đầu.

Nó là:

> **cách hệ thống thay đổi theo thời gian.**

---

## Lesson 12.8.1 — ADR

Format:

```text id="j8n1qu"
Context
Problem
Options
Decision
Trade-offs
Consequences
```

---

## Lesson 12.8.2 — RFC

Khi một architecture decision ảnh hưởng nhiều team:

```text id="d8g4h4"
Problem
Proposal
Alternatives
Migration
Risks
Open questions
```

---

## Lesson 12.8.3 — Decision Reversibility

Phân biệt:

```text id="h8y08n"
reversible decision
vs
expensive irreversible decision
```

Ví dụ:

```text naming
vs
database architecture
vs
microfrontend migration
```

---

## Lesson 12.8.4 — Build vs Buy

Framework:

```text id="k6c3r7"
Cost
Time
Risk
Control
Maintenance
Lock-in
```

---

## Lesson 12.8.5 — Technical Debt

Technical debt không phải:

> code xấu.

Nó là:

> một lựa chọn hôm nay tạo ra chi phí bổ sung trong tương lai.

---

## Lesson 12.8.6 — Debt Prioritization

Đánh giá:

```text id="1t2c9p"
impact
frequency
risk
cost
```

---

## Lesson 12.8.7 — Migration Strategy

Các chiến lược:

```text id="f4zgoz"
big bang
incremental
strangler
parallel run
adapter
```

---

## Lesson 12.8.8 — Architecture Fitness Functions

Tạo automated checks:

```text id="fmz6sm"
No dependency cycle
No forbidden imports
Bundle < budget
A11y baseline
Package boundary
```

Architecture được kiểm soát bằng automated constraints.

---

## Lesson 12.8.9 — Architecture Review

Review system theo:

```text id="w1xw0d"
correctness
maintainability
performance
security
operability
team ownership
```

---

## Lesson 12.8.10 — Architecture Evolution

Một architecture phải:

```text id="w0jve5"
observe
→ identify pressure
→ evolve
→ migrate
→ measure
```

Không rewrite chỉ vì:

> “architecture cũ không hiện đại.”

---

# 11. INTEGRATION LAB — STAGE 12

# Project 12 — Enterprise Frontend Platform

Xây một hệ thống:

```text id="fs9dw7"
apps/
├── customer-web
├── admin
└── internal-tools

packages/
├── ui
├── domain
├── api-client
├── config
└── observability
```

---

# 12. Application Requirements

## Requirement 1 — Domain Boundaries

Có ít nhất:

```text id="d4v7qx"
Identity
Billing
Projects
Analytics
Notifications
```

Mỗi domain có ownership rõ.

---

## Requirement 2 — Dependency Rules

Ví dụ:

```text id="2j6c9s"
UI
 ↓
Feature
 ↓
Domain
 ↓
Infrastructure
```

Không cho dependency ngược.

---

## Requirement 3 — Monorepo

Dùng:

```text id="wmsm3k"
pnpm workspaces
+
Turborepo hoặc Nx
```

Chỉ chọn một build orchestrator.

---

## Requirement 4 — Design System

Package:

```text id="3ol0la"
@platform/ui
```

Có:

* Button
* Input
* Dialog
* Table
* Form primitives
* accessibility baseline

---

## Requirement 5 — Shared API Client

Không để mỗi app tự định nghĩa:

```text id="gu2h1h"
fetch
error handling
auth
retry
```

theo kiểu khác nhau.

---

## Requirement 6 — Architecture Constraints

CI phải block:

```text id="c0qf4a"
forbidden import
dependency cycle
public API violation
```

---

## Requirement 7 — Independent Ownership

Mỗi package/feature có:

```text id="z7cyiw"
owner
README
public API
change policy
```

---

# 13. EDGE CASE LAB

## Case 1 — Shared Package Explosion

`shared/` chứa 300 functions.

Phân loại lại.

---

## Case 2 — Domain Leakage

Billing import trực tiếp từ Analytics internal module.

Tìm boundary violation.

---

## Case 3 — Circular Dependencies

```text id="l1q1hj"
Users
→ Projects
→ Billing
→ Users
```

Redesign.

---

## Case 4 — Monorepo Coupling

Mọi app đều phụ thuộc `@platform/config`.

Một change nhỏ buộc rebuild toàn repo.

Phân tích.

---

## Case 5 — Design System Breaking Change

Button API thay đổi.

20 apps bị ảnh hưởng.

Thiết kế migration strategy.

---

## Case 6 — Micro-frontend Failure

Remote Billing không load.

Admin app phải vẫn chạy phần còn lại.

Thiết kế degradation.

---

## Case 7 — Ownership Conflict

Team A cần thay đổi shared package.

Team B đang dùng API cũ.

Thiết kế compatibility/migration.

---

## Case 8 — Architecture Overengineering

Team đề xuất:

```text id="h9q1p5"
DDD
+
micro-frontends
+
event bus
+
5 shared platforms
```

cho một product có 4 developers.

Phân tích và reject/trim nếu cần.

Đây là bài **judgment quan trọng**.

---

# 14. RE-IMPLEMENTATION LAB

## 14.1 — Dependency Graph Analyzer

Tự xây script:

```text id="8r1xq9"
scan imports
→ build graph
→ detect cycles
→ report
```

---

## 14.2 — Architecture Boundary Linter

Implement rule:

```text id="4irfx0"
domain A
cannot import
domain B/internal/*
```

---

## 14.3 — Mini Design System

Tự publish:

```text id="q0bf8a"
@your-org/ui
```

Có:

* API
* docs
* tests
* accessibility

---

## 14.4 — Migration Adapter

Viết adapter:

```text id="59g5un"
Legacy API
   ↓
Adapter
   ↓
New API
```

Đây là foundation cho Stage 14.

---

# 15. DEBUG LAB

## Bug 1 — Architecture Regression

Một PR tạo dependency:

```text id="4vfl32"
domain
→ ui
```

CI phải phát hiện.

---

## Bug 2 — Package API Leak

Internal type bị export public.

Phân tích consequence.

---

## Bug 3 — Monorepo Build Explosion

Một package change trigger toàn bộ repo.

Điều tra dependency graph/task graph.

---

## Bug 4 — Design System Drift

Một team fork Button thành:

```text id="z2a2u3"
CustomButton
MyButton
SuperButton
```

Tìm nguyên nhân architecture/governance.

---

## Bug 5 — Remote Dependency Failure

Micro-frontend remote fail production.

Thiết kế fallback.

---

# 16. DESIGN LAB

## Scenario 1 — 5 Developers

Product:

```text id="k0z5mz"
one web app
```

Có cần monorepo không?

---

## Scenario 2 — 30 Developers

Ba product team.

Nên chia boundaries thế nào?

---

## Scenario 3 — 100 Developers

Nhiều apps + shared UI.

Có nên dùng micro-frontends?

Không được trả lời theo company-size alone.

---

## Scenario 4 — Design System

Có:

```text id="1kz6me"
2 teams
20 components
```

Xây design system hay chỉ component package?

---

## Scenario 5 — Legacy Migration

Một 5-year-old frontend.

Đề xuất:

```text id="qzokh8"
rewrite
vs
incremental migration
```

---

## Scenario 6 — Shared State

Hai applications cần share user identity.

Chọn:

```text id="0dtx2q"
shared package
browser storage
URL
backend
global runtime
```

và phân tích coupling.

---

# 17. SOURCE & DOCUMENTATION

Primary references:

* React architecture documentation
* TypeScript project references
* pnpm workspace documentation
* Turborepo / Nx documentation
* Module Federation documentation
* Storybook documentation
* WCAG/WAI-ARIA khi design system có accessibility contract

Đọc architecture case studies có chọn lọc.

Mục tiêu:

> học reasoning từ architecture thực tế, không copy folder structure của công ty khác.

---

# 18. TEACH-BACK

### Level 1

> Coupling và cohesion là gì?

### Level 2

> Tại sao dependency direction quan trọng?

### Level 3

> Tại sao feature-oriented architecture có thể tốt hơn technical-layer architecture?

### Level 4

> Khi nào monorepo có lợi và khi nào nó tạo coupling?

### Level 5

> Khi nào micro-frontend là giải pháp hợp lý?

### Level 6

> Một architecture decision sai nhưng khó đảo ngược nên được xử lý thế nào?

---

# 19. EXIT CRITERIA — STAGE 12

## Architecture Fundamentals

* [ ] Phân biệt coupling/cohesion.
* [ ] Nhận diện change coupling.
* [ ] Thiết kế dependency direction.
* [ ] Xác định boundary.
* [ ] Phân tích architecture trade-off.

## Module Architecture

* [ ] Xây public/internal API.
* [ ] Nhận diện dependency cycle.
* [ ] Viết dependency constraints.
* [ ] Kiểm soát forbidden imports.

## Feature Architecture

* [ ] So sánh technical layers và feature boundaries.
* [ ] Thiết kế vertical slice.
* [ ] Xác định domain boundaries.
* [ ] Tránh shared-code dumping ground.

## State Architecture

* [ ] Phân loại state.
* [ ] Xác định source of truth.
* [ ] Tránh duplicate state.
* [ ] Thiết kế state machine khi phù hợp.
* [ ] Thiết kế offline/sync boundary cơ bản.

## Monorepo

* [ ] Thiết kế workspace.
* [ ] Dependency graph.
* [ ] Package boundaries.
* [ ] Task graph.
* [ ] Remote caching awareness.
* [ ] Ownership/governance.

## Design System

* [ ] Token architecture.
* [ ] Component API.
* [ ] Accessibility contract.
* [ ] Versioning.
* [ ] Documentation.
* [ ] Breaking change migration.

## Micro-frontends

* [ ] Hiểu problem mà micro-frontend giải quyết.
* [ ] So sánh integration strategies.
* [ ] Hiểu Module Federation.
* [ ] Handle distributed failure.
* [ ] Đánh giá cost.

## Architecture Evolution

* [ ] Viết ADR.
* [ ] Viết RFC.
* [ ] So sánh alternatives.
* [ ] Lập migration plan.
* [ ] Thiết kế architecture fitness functions.
* [ ] Ưu tiên technical debt.

---

# 20. STAGE 12 CHECKPOINT

## Part A — Architecture Review

Được cung cấp codebase có:

```text id="tjxxqv"
5 domains
4 dependency cycles
1 shared dumping ground
2 state sources
```

Người học phải:

```text id="3cy3gi"
map
→ identify
→ prioritize
→ redesign
```

---

## Part B — Dependency Design

Thiết kế dependency graph cho:

```text id="f2gk9y"
Auth
Projects
Billing
Notifications
Analytics
UI
```

Không tạo cycle.

---

## Part C — Monorepo Design

Thiết kế:

```text id="gq5u7i"
3 apps
8 packages
3 teams
```

và ownership.

---

## Part D — Architecture Decision

Question:

> Có cần micro-frontend không?

Phải đưa:

```text id="srddrd"
context
options
trade-offs
risks
decision
```

---

## Part E — Migration

Một shared package breaking API.

Thiết kế:

```text id="3pyiw9"
compatibility
→ migration
→ deprecation
→ removal
```

---

# 21. STAGE 12 CAPSTONE

# Enterprise Frontend Platform

Final output:

```text id="5q0ldk"
                    PLATFORM

              ┌────── Application ──────┐
              │                         │
        Customer Web                Admin
              │                         │
              └──────────┬──────────────┘
                         │
                    Shared Platform
                         │
           ┌─────────────┼─────────────┐
           │             │             │
          UI           Domain        API
           │             │             │
           └─────────────┼─────────────┘
                         │
                    Infrastructure
```

Người học phải deliver:

```text id="sdq4oz"
1. Architecture diagram
2. Dependency graph
3. Domain boundaries
4. Package boundaries
5. State architecture
6. Design system architecture
7. ADR
8. RFC
9. Architecture constraints
10. Migration plan
```

---

# 22. STAGE 12 → STAGE 13 DEPENDENCY

Đến đây người học đã hiểu:

```text id="rkz5n4"
how to build
+
how to optimize
+
how to secure
+
how to structure
```

Nhưng vẫn còn một vấn đề:

> **Một architecture tốt nhưng deploy/operate tệ vẫn là một production system tệ.**

Stage 13 sẽ đưa architecture vào **operational reality**:

```text id="wxzk8s"
Code
 ↓
Build
 ↓
Test
 ↓
Deploy
 ↓
Observe
 ↓
Detect
 ↓
Rollback
 ↓
Incident
 ↓
Postmortem
```

Các chủ đề:

```text id="63rvb3"
CI/CD
Deployment Strategies
Feature Flags
Canary
Rollback
Observability
Logs
Metrics
Tracing
RUM
Incident Response
Reliability
```

Đây là giai đoạn người học bắt đầu hiểu:

> **Software architecture không chỉ là source code. Nó bao gồm cả cách hệ thống được release, quan sát và phục hồi.**

---

# 23. STAGE 12 CORE PRINCIPLE

Junior hỏi:

> “Folder structure nào tốt nhất?”

Senior hỏi:

> “Boundary nào làm giảm change coupling?”

Staff bắt đầu hỏi:

```text
Who owns this boundary?

Who can change it?

How will teams coordinate?

What happens when the architecture changes?

Can we enforce the rule automatically?

How expensive is this decision to reverse?

What organizational problem are we actually solving?
```

Và đây là nguyên tắc quan trọng nhất của Stage 12:

> **Architecture không phải dự đoán tương lai chính xác. Architecture là xây những boundary đủ tốt để hệ thống có thể thay đổi khi tương lai không giống dự đoán.**

