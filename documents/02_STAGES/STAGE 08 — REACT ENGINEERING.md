# JAVASCRIPT ENGINEERING MASTERY
## STAGE 8 — REACT ENGINEERING
### Detailed Curriculum v1

---

# 0. Stage Overview

## Mục tiêu

Stage 8 là điểm chuyển từ:

```text id="y6o6k3"
JavaScript Engineer
        ↓
Frontend Engineer
```

Đây là lần đầu tiên Framework trở thành trung tâm, nhưng React **không được học như một danh sách API**.

Không bắt đầu bằng:

```text id="k4uytu"
JSX
→ useState
→ useEffect
→ useMemo
→ React Query
```

Thay vào đó:

```text id="ey7f4f"
JavaScript Execution Model
        ↓
Browser Rendering
        ↓
UI as a Function of State
        ↓
React Element
        ↓
Reconciliation
        ↓
Fiber
        ↓
Render / Commit
        ↓
Hooks
        ↓
State Architecture
        ↓
Server State
        ↓
Application Architecture
```

Mục tiêu cuối Stage:

> **Không chỉ dùng được React, mà hiểu React đang giải quyết problem gì và tại sao abstraction của React được thiết kế như vậy.**

---

# 1. React sẽ được học ở mức nào?

Không cần trở thành React core contributor.

Nhưng phải đạt:

```text id="j2l3xk"
L1 — biết API
L2 — dùng API
L3 — hiểu mental model
L4 — debug rendering/state
L5 — thiết kế application với trade-off
```

Các phần như:

- Fiber
- reconciliation
- render/commit
- hooks
- state ownership

sẽ được học sâu.

Các internals cực sâu như:

- toàn bộ scheduler source
- mọi lane implementation
- reconciler edge internals

chỉ ở mức source-reading / awareness khi hữu ích.

---

# 2. Phạm vi kiến thức

Stage 8 gồm **9 Modules / 43 Lessons**:

```text id="4cnk8q"
8.1 React Mental Model
8.2 Elements, Trees & Reconciliation
8.3 Fiber & Rendering
8.4 Hooks & Effects
8.5 State Architecture
8.6 Component Architecture
8.7 Server State & Data Fetching
8.8 Advanced React Patterns
8.9 React Performance & Debugging
```

---

# 3. MODULE 8.1 — REACT MENTAL MODEL

## Mục tiêu

Hiểu React trước khi học React API.

---

## Lesson 8.1.1 — Why React Exists

Problem:

```text id="5cgd2z"
DOM manipulation trực tiếp
→ state scattered
→ UI synchronization khó
→ dependency giữa event/state/DOM tăng
```

React đưa vào một model:

```text id="3thjmu"
State
  ↓
UI
```

Thay vì developer phải tự synchronize từng DOM mutation.

---

## Lesson 8.1.2 — UI as a Function of State

Mental model:

```text id="0q7ajq"
UI = f(state)
```

Không phải một công thức toán tuyệt đối, mà là cách tư duy.

---

## Lesson 8.1.3 — Declarative vs Imperative UI

So sánh:

```text id="p7f4gu"
Imperative
→ find element
→ mutate element
→ remove element
→ update text
```

với:

```text id="2gb8bk"
Declarative
→ describe desired UI from state
```

Phải hiểu trade-off, không biến declarative thành “luôn tốt hơn”.

---

## Lesson 8.1.4 — React Element

```jsx id="f1w4d5"
<Button />
```

không phải DOM element.

Phải hiểu:

```text id="1h2kg4"
JSX
 ↓
React Element Description
 ↓
React processes tree
 ↓
DOM
```

---

## Lesson 8.1.5 — Component

- function component
- props
- children
- composition

Phân biệt:

```text id="lxn8f4"
component function
vs
component instance
```

---

## Lesson 8.1.6 — Render Concept

Một component function chạy lại không có nghĩa:

> “DOM toàn bộ được tạo lại.”

Đây là mental model cần sửa ngay từ đầu.

---

# 4. MODULE 8.2 — ELEMENTS, TREES & RECONCILIATION

## Mục tiêu

Hiểu React so sánh UI description như thế nào.

---

## Lesson 8.2.1 — Element Tree

Ví dụ:

```text id="1yfr1n"
App
└── Dashboard
    ├── Header
    ├── Sidebar
    └── Content
```

React làm việc với tree representation.

---

## Lesson 8.2.2 — Identity

React cần biết:

> Đây là element cũ hay một element hoàn toàn khác?

Identity liên quan:

- type
- position
- key

---

## Lesson 8.2.3 — Reconciliation Mental Model

Không dạy React diffing như một thuật toán implementation đầy đủ.

Phải hiểu practical heuristics:

```text id="3qod5f"
type
+
position
+
key
```

ảnh hưởng identity.

---

## Lesson 8.2.4 — Keys

Không dạy:

> “key chỉ để React khỏi warning.”

Phải hiểu:

> key giúp React xác định identity trong collection.

### Case

```text id="d9k9vt"
[A, B, C]
```

insert:

```text id="c9d50d"
[X, A, B, C]
```

Tại sao key index có thể tạo state mismatch?

---

## Lesson 8.2.5 — State Preservation

React có thể giữ state khi identity của component được giữ.

Người học phải hiểu:

```text id="2c8k3m"
same identity
→ state may persist

new identity
→ state resets
```

---

## Lesson 8.2.6 — Conditional Rendering & Identity

Ví dụ:

```jsx id="lf5f26"
{isAdmin ? <Admin /> : <User />}
```

So sánh với các arrangement khác.

---

## Lesson 8.2.7 — List Reconciliation Lab

Tự tạo list với:

- stable ID key
- index key
- random key

Quan sát:

- state preservation
- DOM reuse
- remount

---

# 5. MODULE 8.3 — FIBER & REACT RENDERING

## Mục tiêu

Đây là phần React internals quan trọng nhất.

Không cần học toàn bộ source, nhưng phải hiểu:

> **Fiber tồn tại để làm gì?**

---

## Lesson 8.3.1 — Why Fiber?

Problem:

```text id="c7itgo"
large render work
→ synchronous work
→ long blocking task
→ poor responsiveness
```

Fiber giúp React tổ chức work thành units.

---

## Lesson 8.3.2 — Fiber Node

Mental model:

```text id="yif8og"
Fiber
├── type
├── key
├── child
├── sibling
├── return
├── pending props
└── state-related data
```

Không yêu cầu nhớ toàn bộ fields.

---

## Lesson 8.3.3 — Fiber Tree

Người học phải vẽ:

```text id="v4oq3v"
App
 ↓
Dashboard
 ↓
List
 ↓
Item
```

và map thành fiber relationships.

---

## Lesson 8.3.4 — Unit of Work

Concept:

```text id="3d3l9x"
large tree
 ↓
small units
 ↓
process
 ↓
continue
```

---

## Lesson 8.3.5 — Render Phase

Hiểu:

- component functions execute
- React calculates next tree
- render phase can be interruptible conceptually

---

## Lesson 8.3.6 — Commit Phase

Commit:

- apply DOM mutations
- run relevant commit-time work

Mental model:

```text id="m3ayr6"
Render
→ calculate

Commit
→ apply
```

---

## Lesson 8.3.7 — Render ≠ DOM Update

Đây là một misconception phải loại bỏ.

```text id="3h8j5k"
component re-render
≠
every DOM node gets recreated
```

---

## Lesson 8.3.8 — Strict Mode

Hiểu dev-only behavior có thể làm bạn thấy:

- render nhiều lần
- effect setup/cleanup nhiều lần

Mục tiêu:

> tìm bugs trong side effects, không phải “React bị chạy 2 lần”.

---

## Lesson 8.3.9 — React Scheduler Awareness

Không cần học source scheduler đầy đủ.

Cần hiểu:

```text id="7rhn4r"
urgent work
vs
non-urgent work
```

và React có thể ưu tiên công việc khác nhau trong model concurrent rendering.

---

## Lesson 8.3.10 — Source Reading

Đọc có chọn lọc:

- React reconciliation docs
- Fiber architecture explanations
- React source snippets liên quan render/commit

Không đọc source React như mục tiêu riêng.

---

# 6. MODULE 8.4 — HOOKS & EFFECTS

## Mục tiêu

Đây là nơi Stage 1 Closure quay lại.

---

## Lesson 8.4.1 — `useState`

Hiểu:

```text id="8l8g1q"
state cell
+
setter
+
render scheduling
```

---

## Lesson 8.4.2 — State Update Semantics

Phân biệt:

```js id="vtv14q"
setCount(count + 1);
setCount(count + 1);
```

với:

```js id="5o4i7f"
setCount(c => c + 1);
setCount(c => c + 1);
```

Đây là nơi closure + update semantics gặp nhau.

---

## Lesson 8.4.3 — State Batching

Hiểu:

> React có thể batch state updates trong những circumstances phù hợp.

Mục tiêu:

> Đừng suy luận UI update theo từng setter như từng DOM mutation.

---

## Lesson 8.4.4 — `useRef`

- mutable container
- persistent across renders
- không tự trigger render

---

## Lesson 8.4.5 — `useEffect`

Đầu tiên phải phá misconception:

> `useEffect` không phải “chạy sau render vì code cần chạy async”.

Hiểu nó là nơi synchronize React component với external systems.

---

## Lesson 8.4.6 — Effect Dependencies

Phân biệt:

```text id="9g3hgt"
dependency
vs
trigger
vs
value captured by closure
```

---

## Lesson 8.4.7 — Effect Cleanup

Pattern:

```text id="l36k94"
setup
 ↓
external subscription/resource
 ↓
cleanup
```

---

## Lesson 8.4.8 — Stale Closure in React

Đây là nơi Stage 1 closure được áp dụng thực tế.

Ví dụ:

```text id="b6w0fn"
render 1
→ effect captures value A

render 2
→ value B
```

Callback cũ vẫn có thể đang giữ A.

---

## Lesson 8.4.9 — Effect Anti-patterns

Các dấu hiệu:

- effect để derive state
- effect chạy code thuần túy không cần external sync
- dependency array bị “đánh lừa”
- effect chain

---

## Lesson 8.4.10 — Event vs Effect

Phân biệt:

```text id="3sp7jf"
User event
vs
render synchronization
```

Đây là conceptual distinction rất quan trọng.

---

## Lesson 8.4.11 — `useMemo`

- memoization
- computation cost
- referential stability

Không mặc định:

> useMemo = performance.

---

## Lesson 8.4.12 — `useCallback`

Hiểu:

```text id="a0ecis"
function identity
+
child props
+
memoization
```

---

## Lesson 8.4.13 — React.memo

- shallow prop comparison
- component memoization
- when useful
- when useless

---

## Lesson 8.4.14 — Custom Hooks

Thiết kế:

```text id="lvv4zz"
useSomething()
```

Không phải abstraction để giấu mọi logic.

---

# 7. MODULE 8.5 — STATE ARCHITECTURE

## Mục tiêu

Đây là một trong những năng lực phân biệt Junior với Senior.

Câu hỏi không phải:

> “Dùng Redux hay Zustand?”

Trước tiên phải hỏi:

> **State này thuộc về ai?**

---

## Lesson 8.5.1 — Local State

State chỉ một component cần.

---

## Lesson 8.5.2 — Lifted State

Khi sibling cần share state.

Phân tích cost của lifting.

---

## Lesson 8.5.3 — Derived State

Phải phân biệt:

```text id="9q7n7x"
source state
vs
derived value
```

Không lưu derived state nếu có thể derive đơn giản.

---

## Lesson 8.5.4 — UI State

Ví dụ:

- modal open
- selected tab
- input value
- hover
- expanded item

---

## Lesson 8.5.5 — Server State

Ví dụ:

- user
- products
- orders
- dashboard data

Phải hiểu:

> server state có lifecycle khác client state.

---

## Lesson 8.5.6 — State Ownership

Decision tree:

```text id="nny4v2"
Who needs it?
 ↓
How long does it live?
 ↓
Who is source of truth?
 ↓
Is it derived?
 ↓
Is it server-owned?
```

---

## Lesson 8.5.7 — Context

- Context
- provider
- consumer
- re-render implications
- appropriate use cases

Không biến Context thành global state solution cho mọi thứ.

---

## Lesson 8.5.8 — Zustand

Học:

- store
- selectors
- subscriptions
- actions
- middleware awareness

Mục tiêu:

> Hiểu primitive mà library cung cấp, không chỉ syntax.

---

## Lesson 8.5.9 — Redux Toolkit

Học:

- store
- slice
- reducer
- action
- middleware
- normalized state concept

Không cần học Redux legacy boilerplate.

---

## Lesson 8.5.10 — State Machines

- state
- event
- transition
- impossible states

Ví dụ:

```text id="3w1jkl"
idle
→ loading
→ success
→ error
```

---

## Lesson 8.5.11 — State Architecture Comparison

So sánh:

```text id="0tn3d4"
Local state
Context
Zustand
Redux Toolkit
State machine
```

theo:

- ownership
- scale
- debugging
- predictability
- team size
- complexity

---

# 8. MODULE 8.6 — COMPONENT ARCHITECTURE

## Mục tiêu

Học cách tạo component API có thể tồn tại lâu dài.

---

## Lesson 8.6.1 — Component Responsibilities

Một component nên chịu trách nhiệm gì?

---

## Lesson 8.6.2 — Composition

- children
- slots through composition
- compound components

---

## Lesson 8.6.3 — Controlled vs Uncontrolled

Ví dụ:

```text id="2l1mli"
<input value=... />
```

vs internal state.

---

## Lesson 8.6.4 — Headless Component Concept

Logic vs presentation.

---

## Lesson 8.6.5 — Compound Components

Ví dụ:

```jsx id="yeay8f"
<Select>
  <Select.Trigger />
  <Select.Content />
</Select>
```

Phân tích context + composition.

---

## Lesson 8.6.6 — Render Props

Awareness.

Hiểu khi nào useful trong legacy/third-party patterns.

---

## Lesson 8.6.7 — Component Boundary

Không tạo abstraction chỉ để:

```text id="x2ek3b"
“code nhìn đẹp”.
```

Phải có reason:

- reuse
- ownership
- encapsulation
- API consistency
- independent evolution

---

## Lesson 8.6.8 — Component API Design

Thiết kế:

- props
- variants
- state
- events
- accessibility
- extensibility

---

# 9. MODULE 8.7 — SERVER STATE & DATA FETCHING

## Mục tiêu

Tách rõ:

```text id="n0kjm2"
UI State
vs
Server State
```

Đây là một trong những kiến thức quan trọng nhất khi application lớn.

---

## Lesson 8.7.1 — Why Server State Is Different

Server state có:

```text id="1v7dfi"
remote owner
latency
staleness
cache
sharing
refetch
failure
```

---

## Lesson 8.7.2 — Query Lifecycle

```text id="5izd0e"
idle
→ fetching
→ success
→ stale
→ refetch
→ error
```

---

## Lesson 8.7.3 — Cache

- cache key
- stale data
- invalidation
- refetch

---

## Lesson 8.7.4 — TanStack Query

Học:

- query
- mutation
- query key
- stale time
- cache time/gc concepts
- invalidation
- optimistic update

---

## Lesson 8.7.5 — Mutation

- create
- update
- delete
- mutation status
- retry considerations

---

## Lesson 8.7.6 — Optimistic Update

Pattern:

```text id="c6y6y5"
snapshot
 ↓
optimistic change
 ↓
request
 ├── success → keep
 └── failure → rollback
```

---

## Lesson 8.7.7 — Pagination

- offset
- cursor
- infinite queries

Kết nối Stage 5.

---

## Lesson 8.7.8 — Dependent Queries

Ví dụ:

```text id="f4etw5"
user
 ↓
organization
 ↓
permissions
```

Không tạo request race hoặc waterfall bất hợp lý.

---

## Lesson 8.7.9 — Request Deduplication

Kết nối Stage 3 + Stage 5.

---

## Lesson 8.7.10 — Error Architecture

Phân biệt:

```text id="yfj8jh"
network error
HTTP error
validation error
business error
```

UI phải phản ứng khác nhau.

---

# 10. MODULE 8.8 — ADVANCED REACT PATTERNS

## Mục tiêu

Sau khi đã hiểu primitives, mới học patterns.

---

## Lesson 8.8.1 — `useReducer`

Dùng khi state transition phức tạp.

---

## Lesson 8.8.2 — Reducer Design

- action
- transition
- immutable update
- exhaustive states

---

## Lesson 8.8.3 — Context + Reducer

Khi phù hợp.

Không mặc định là Redux replacement.

---

## Lesson 8.8.4 — External Store

Mental model:

```text id="30d8r9"
React
 ↕
external state store
```

Kết nối Zustand.

---

## Lesson 8.8.5 — `useSyncExternalStore`

Awareness + practical reason.

Hiểu:

> React cần một chuẩn để subscribe external stores safely.

---

## Lesson 8.8.6 — Suspense Mental Model

- loading boundary
- suspended render
- fallback

Không đào sâu toàn bộ internals.

---

## Lesson 8.8.7 — Error Boundaries

- render-time errors
- boundary
- recovery
- reset

Phân biệt với:

```text id="hnr7n1"
try/catch
```

---

## Lesson 8.8.8 — Portals

Dùng cho:

- modal
- tooltip
- overlay

Liên hệ DOM event behavior.

---

## Lesson 8.8.9 — Ref Forwarding / Imperative Handles

Awareness + appropriate use.

Nguyên tắc:

> Imperative escape hatch chỉ dùng khi declarative model không đủ.

---

## Lesson 8.8.10 — React Actions / Modern React Awareness

Tùy version React đang dùng, học các API hiện đại liên quan:

- actions
- `use`
- optimistic UI primitives
- form-related improvements

Không gắn curriculum vĩnh viễn vào một minor version.

---

# 11. MODULE 8.9 — REACT PERFORMANCE & DEBUGGING

## Mục tiêu

Không tối ưu bằng cảm giác.

---

## Lesson 8.9.1 — Why Components Re-render

Các nguồn:

```text id="n2h1c4"
state
parent
context
external store
props
```

---

## Lesson 8.9.2 — Render vs Commit

Kết nối Fiber.

---

## Lesson 8.9.3 — Referential Equality

Phân tích:

```js id="42n9h0"
{}
[] 
() => {}
```

mỗi render là identity mới.

---

## Lesson 8.9.4 — Memoization

- React.memo
- useMemo
- useCallback

Mục tiêu:

> Chỉ memoize khi có measurable reason.

---

## Lesson 8.9.5 — Profiler

- render flamegraph
- ranked view
- why component rendered

---

## Lesson 8.9.6 — Re-render Investigation

Case:

```text id="x6u0s9"
User types
→ parent renders
→ 1000 children render
```

Tìm:

- state placement
- prop identity
- memoization
- component boundary

---

## Lesson 8.9.7 — Context Performance

Một Context update có thể làm nhiều consumers render.

Thiết kế:

- split contexts
- selectors/external store
- move state ownership

---

## Lesson 8.9.8 — Large Lists

Foundation:

- windowing
- virtualization
- key strategy

Chi tiết performance architecture sẽ tiếp tục ở Stage 11.

---

## Lesson 8.9.9 — React Debugging Workflow

```text id="b9r8im"
Reproduce
→ Profile
→ Identify render
→ Identify trigger
→ Measure
→ Change
→ Measure again
```

Không:

> thêm `memo` khắp nơi.

---

# 12. INTEGRATION LAB — STAGE 8

# Project 8 — Production SaaS Application

Xây một SaaS dashboard hoàn chỉnh.

---

## Domain

Ví dụ:

```text id="g0z1d4"
Organizations
Users
Projects
Tasks
Activity
Notifications
```

---

## Requirement 1 — Component Architecture

- reusable UI
- composition
- controlled/uncontrolled

---

## Requirement 2 — State Architecture

Phải phân loại:

```text id="pxs45n"
local
UI
server
derived
global
```

Không được đưa tất cả vào global store.

---

## Requirement 3 — Data Layer

Có:

```text id="2zdu5q"
queries
mutations
cache
invalidation
pagination
optimistic updates
```

---

## Requirement 4 — Async Reliability

Có:

```text id="5mq2of"
cancel
retry
timeout
stale protection
```

---

## Requirement 5 — Error Handling

- local error state
- error boundary
- API error
- fallback UI

---

## Requirement 6 — Performance

Có một màn hình cố tình render:

```text id="y0k6ut"
1000 items
```

Người học phải:

```text id="0q2g5a"
profile
→ identify
→ optimize
→ measure
```

---

# 13. EDGE CASE LAB

## Case 1 — State Update Race

```js id="q3u9k9"
setCount(count + 1);
setCount(count + 1);
```

vs functional updates.

---

## Case 2 — Stale Effect

Effect closure sử dụng state cũ.

---

## Case 3 — Missing Dependency

Effect phụ thuộc value nhưng dependency list không phản ánh điều đó.

Tìm đúng root cause.

---

## Case 4 — Infinite Effect Loop

```text id="v8fc95"
effect
→ set state
→ render
→ effect
→ set state
→ ...
```

---

## Case 5 — Key Bug

List index key làm state gắn nhầm item.

---

## Case 6 — Context Re-render

Một user setting làm 500 components render lại.

Profile và redesign.

---

## Case 7 — Optimistic Rollback

Mutation fail nhưng UI không rollback chính xác.

---

## Case 8 — Cache Invalidation

User update record nhưng màn hình khác vẫn hiển thị stale data.

---

## Case 9 — Double Effect Setup

Strict Mode làm effect setup/cleanup chạy lại.

Đảm bảo effect idempotent.

---

# 14. RE-IMPLEMENTATION LAB

## 14.1 — Mini `useState` Mental Model

Không tạo React clone hoàn chỉnh.

Chỉ mô phỏng:

```text id="2u11m5"
state cell
setter
render cycle
```

---

## 14.2 — Mini External Store

```js id="5e3nvm"
getState()
subscribe()
setState()
```

Sau đó consume bằng React.

---

## 14.3 — Mini Query Cache

Implement:

```text id="a7r1e8"
queryKey
cache
stale
subscribe
invalidate
```

---

## 14.4 — Mini Error Boundary Mental Model

Không cần replicate React internals.

Mô phỏng component tree + failure boundary.

---

# 15. DEBUG LAB

## Bug 1 — Unnecessary Re-render

Tìm:

```text id="u8h1wp"
trigger
→ propagation
→ expensive subtree
```

---

## Bug 2 — Stale Closure

Xác định render nào tạo callback.

---

## Bug 3 — State Reset Unexpectedly

Trace component identity + key.

---

## Bug 4 — UI Shows Old Server Data

Trace:

```text id="9u6b7x"
mutation
→ cache
→ invalidation
→ query
→ render
```

---

## Bug 5 — Optimistic Update Corruption

Hai mutation xảy ra đồng thời.

Phải xác định:

```text id="rbm7i4"
ordering
rollback
cache reconciliation
```

---

# 16. DESIGN LAB

## Scenario 1 — Global User State

Quyết định:

```text id="13g9m6"
Context
Zustand
Redux
server query
```

Không được chọn chỉ dựa trên popularity.

---

## Scenario 2 — Dashboard Filters

Có:

```text id="r7k8gd"
filters
pagination
URL
server query
local UI
```

Thiết kế ownership.

---

## Scenario 3 — Modal State

Chọn:

```text id="r8vv6f"
local state
context
global store
URL
```

theo use case.

---

## Scenario 4 — 10K Row Table

Quyết định:

```text id="o14zji"
state placement
virtualization
memoization
server pagination
```

---

## Scenario 5 — Realtime Notifications

Thiết kế:

```text id="i4d9lq"
server stream
cache
unread count
optimistic read
reconnect
```

---

# 17. SOURCE & DOCUMENTATION

Primary references:

- React official documentation
- React APIs/reference
- React architecture explanations
- TanStack Query documentation
- Redux Toolkit documentation
- Zustand documentation
- XState documentation khi dùng state-machine module

Source reading:

- React Hooks implementation ở mức chọn lọc
- Fiber work loop excerpts
- External store examples

Nguyên tắc:

> Source code là công cụ kiểm chứng mental model, không phải mục tiêu thuộc lòng.

---

# 18. TEACH-BACK

### Level 1

> Component là gì?

### Level 2

> Re-render là gì?

### Level 3

> React reconciliation hoạt động theo mental model nào?

### Level 4

> Fiber tồn tại để giải quyết problem gì?

### Level 5

> Khi một component tree render quá nhiều, bạn sẽ tìm root cause thế nào?

### Level 6

> Khi nào local state, Context, Zustand, Redux hoặc server-state library là lựa chọn hợp lý?

---

# 19. EXIT CRITERIA — STAGE 8

## React Mental Model

- [ ] Giải thích được declarative UI.
- [ ] Phân biệt React Element và DOM element.
- [ ] Giải thích component render.

## Reconciliation

- [ ] Hiểu identity.
- [ ] Hiểu role của key.
- [ ] Debug được state reset/misassociation.
- [ ] Giải thích tree reconciliation ở mức conceptual.

## Fiber

- [ ] Giải thích Fiber giải quyết vấn đề gì.
- [ ] Vẽ được Fiber tree đơn giản.
- [ ] Phân biệt render và commit.
- [ ] Hiểu scheduling awareness.

## Hooks

- [ ] Hiểu `useState`.
- [ ] Hiểu state update semantics.
- [ ] Hiểu `useRef`.
- [ ] Hiểu `useEffect`.
- [ ] Hiểu cleanup.
- [ ] Debug stale closure.
- [ ] Phân biệt event và effect.
- [ ] Dùng `useMemo`/`useCallback` có lý do.

## State Architecture

- [ ] Phân biệt UI/client/server/derived state.
- [ ] Chọn state owner.
- [ ] Dùng Context phù hợp.
- [ ] Hiểu Zustand và Redux Toolkit ở mức implementation model.
- [ ] Model state machine cơ bản.

## Server State

- [ ] Hiểu query lifecycle.
- [ ] Dùng cache/invalidation.
- [ ] Implement optimistic update.
- [ ] Xử lý pagination.
- [ ] Deduplicate requests.
- [ ] Xử lý mutation race.

## Component Architecture

- [ ] Thiết kế component API.
- [ ] Dùng composition.
- [ ] Controlled/uncontrolled.
- [ ] Compound components.
- [ ] Headless pattern awareness.

## Performance

- [ ] Dùng Profiler.
- [ ] Xác định render trigger.
- [ ] Tìm unnecessary render.
- [ ] Fix context-driven rerenders.
- [ ] Hiểu virtualization cơ bản.

## Engineering

- [ ] Hoàn thành Production SaaS.
- [ ] Debug được stale closure.
- [ ] Debug được key/state identity bug.
- [ ] Debug được unnecessary renders.
- [ ] Debug được cache invalidation.
- [ ] Thiết kế được state architecture cho feature mới.

---

# 20. STAGE 8 CHECKPOINT

## Part A — React Mental Model

Không nhìn tài liệu, giải thích:

```text id="mw5fnb"
State update
→ render
→ reconciliation
→ commit
→ browser rendering
```

Phân biệt rõ React và Browser rendering.

---

## Part B — Reconciliation

Cho list:

```text id="6yk5x5"
A
B
C
```

sau đó insert:

```text id="h3n78q"
X
A
B
C
```

So sánh:

```text id="8q4a9z"
stable key
vs
index key
vs
random key
```

---

## Part C — Effect Debugging

Cho một effect bị:

```text id="q2ypb6"
stale
loop
missing cleanup
```

Người học phải xác định nguyên nhân.

---

## Part D — State Architecture

Feature:

> Dashboard có filters, server data, modal, notifications, selected rows, user preferences.

Phải phân loại ownership.

---

## Part E — Performance

Một page:

```text id="8iqz5m"
1000 rows
+
context
+
inline objects
+
expensive computation
```

Profile → identify → fix → measure.

---

# 21. STAGE 8 CAPSTONE

# Production SaaS

Application phải có:

```text id="7d4j7v"
React
TypeScript
State Architecture
Server State
Forms
Authentication
Pagination
Optimistic Update
Error Handling
Testing
Performance
```

Architecture tối thiểu:

```text id="oeu9e1"
UI
 ↓
Component Boundary
 ↓
State
 ↓
Server State
 ↓
API Client
 ↓
Network
```

Người học phải viết một Architecture Decision Record giải thích:

```text id="ywqwtk"
state ownership
data fetching strategy
component boundaries
cache strategy
performance strategy
```

---

# 22. STAGE 8 → STAGE 9 DEPENDENCY

Sau Stage 8, người học đã có:

```text id="gq7wy5"
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
```

Nhưng vẫn chưa đủ để gọi là **Production Frontend Engineer**.

Application hiện tại có thể chạy tốt trên developer machine, nhưng chưa giải quyết đầy đủ:

```text id="g9j3x1"
Accessibility
Mobile
Forms at scale
Testing strategy
SEO
Production errors
Real users
```

Do đó Stage tiếp theo:

# STAGE 9 — PRODUCTION FRONTEND

sẽ đưa SaaS từ:

```text id="5c79ck"
“React application”
```

thành:

```text id="m1y8xw"
“product that real users can rely on”
```

với:

```text id="x8on1g"
Accessibility
+
Forms
+
Mobile
+
SEO
+
Testing
+
PWA
+
Real-user performance
+
Production resilience
```

---

# 23. STAGE 8 CORE PRINCIPLE

Một Junior thường hỏi:

> “React có API nào để giải quyết việc này?”

Một Frontend Engineer hỏi:

> “Problem này thực chất thuộc về UI state, server state, rendering, identity hay side effect?”

Một Senior hỏi thêm:

```text id="p6j54x"
Who owns this state?

What is the source of truth?

What is the lifecycle?

What happens when network fails?

What happens when two updates race?

What happens at 10x scale?

What is the simplest architecture that survives those constraints?
```

Đó là lý do React chỉ xuất hiện ở **Stage 8**.

Không phải vì React không quan trọng.

Mà vì đến lúc này người học đã có đủ mental model để **học React như một engineering system thay vì một UI library**.