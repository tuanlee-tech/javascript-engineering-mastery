# JAVASCRIPT ENGINEERING MASTERY
## STAGE 4 — BROWSER RUNTIME & WEB PLATFORM
### Detailed Curriculum v1

---

# 0. Stage Overview

## Mục tiêu

Stage 4 trả lời câu hỏi:

> **JavaScript chạy trong Browser như thế nào, và từ một hành động của user đến pixel trên màn hình đã xảy ra những gì?**

Ba Stage trước tập trung vào:

```text id="t0t9o0"
Stage 0
Language
        ↓
Stage 1
Execution Model
        ↓
Stage 2
Object Model
        ↓
Stage 3
Async & Concurrency
```

Stage 4 đưa toàn bộ kiến thức đó vào **host environment quan trọng nhất của Frontend: Browser**.

Mental model cuối Stage:

```text id="pbz3a2"
User Input
    ↓
Browser Event System
    ↓
JavaScript
    ↓
State / DOM Mutation
    ↓
Style Calculation
    ↓
Layout
    ↓
Paint
    ↓
Composite
    ↓
Pixels
```

Đây là foundation trực tiếp cho:

- React rendering
- React Fiber
- UI performance
- Animation
- Forms
- Infinite scrolling
- Virtualization
- Web Workers
- PWA
- Offline applications
- Browser debugging
- Core Web Vitals

---

# 1. Phạm vi kiến thức

Stage 4 gồm **8 Modules / 36 Lessons**:

```text id="4f5h7d"
4.1 Browser & Document Model
4.2 DOM Manipulation
4.3 Browser Events
4.4 Rendering Pipeline
4.5 Browser Scheduling & Animation
4.6 Browser APIs, Observers & Workers
4.7 Storage & Persistence
4.8 Web Components & Shadow DOM
```

Stage này **không đi sâu vào React**.

React sẽ đến Stage 8 sau khi Browser mental model đã đủ vững.

---

# 2. MODULE 4.1 — BROWSER & DOCUMENT MODEL

## Mục tiêu

Hiểu Browser không chỉ là nơi “chạy JavaScript”.

Nó là một host environment cung cấp:

```text id="my7mgx"
JavaScript
+
Document
+
Rendering
+
Events
+
Network
+
Storage
+
Workers
```

---

## Lesson 4.1.1 — Browser Architecture

Xây mental model tổng quát:

```text id="a6p1cz"
Browser
├── JavaScript Engine
├── DOM / Document
├── Rendering System
├── Event System
├── Network Stack
├── Storage
└── Workers
```

Không yêu cầu đi sâu vào browser process architecture.

Mục tiêu là hiểu các subsystem tương tác với nhau như thế nào.

---

## Lesson 4.1.2 — Window & Document

- `window`
- `document`
- `location`
- `history`
- `navigator`

Phân biệt:

```text id="71g52d"
JavaScript language feature
vs
Browser-provided API
```

---

## Lesson 4.1.3 — Global Environment in Browser

- Global object
- `globalThis`
- Window-backed globals ở mức practical
- Global pollution

### Lab

Phân loại:

```js id="qbjc5q"
Promise
document
window
setTimeout
fetch
Array
```

Cái nào là language, cái nào là host API.

---

## Lesson 4.1.4 — Document Lifecycle

- HTML received
- Parsing
- DOM construction
- Script execution
- Styles discovered
- Page load
- DOMContentLoaded
- load

Mental model:

```text id="t9jlqc"
HTML
 ↓
Parse
 ↓
DOM
 ↓
Scripts / Styles
 ↓
DOMContentLoaded
 ↓
Load
```

Chi tiết rendering sẽ sang Module 4.4.

---

## Lesson 4.1.5 — Browser Navigation

Ở mức conceptual:

```text id="p9xw8o"
Navigation
→ Request
→ Response
→ Document
→ Parse
→ Render
```

Đây là bridge sang Stage 5 Network.

---

# 3. MODULE 4.2 — DOM MANIPULATION

## Mục tiêu

Hiểu DOM là data structure do Browser quản lý, không phải “HTML string”.

---

## Lesson 4.2.1 — DOM Tree

- Document
- Element
- Node
- Text node
- Parent
- Child
- Sibling

### Exercise

Cho HTML:

```html id="8kv2pq"
<main>
  <section>
    <h1>Hello</h1>
    <p>World</p>
  </section>
</main>
```

Vẽ DOM tree.

---

## Lesson 4.2.2 — Selecting Elements

- `getElementById`
- `querySelector`
- `querySelectorAll`
- `closest`
- `matches`

---

## Lesson 4.2.3 — Traversal

- `parentElement`
- `children`
- `firstElementChild`
- `nextElementSibling`

Phải phân biệt:

```text id="6f9szi"
Node
vs
Element
```

---

## Lesson 4.2.4 — Creating & Removing Nodes

- `createElement`
- `createTextNode`
- `append`
- `prepend`
- `before`
- `after`
- `remove`

---

## Lesson 4.2.5 — Content Mutation

- `textContent`
- `innerText`
- `innerHTML`

### Security awareness

Tìm hiểu tại sao:

```js id="1m5v1o"
element.innerHTML = userInput;
```

có thể nguy hiểm.

Chi tiết XSS thuộc Stage 11.

---

## Lesson 4.2.6 — Attributes & Properties

Phân biệt:

```text id="7wq3a6"
HTML attribute
vs
DOM property
```

Ví dụ:

```js id="az7mpq"
input.getAttribute("value");
input.value;
```

---

## Lesson 4.2.7 — Classes & Styles

- `classList`
- `className`
- `style`
- CSS custom properties

---

## Lesson 4.2.8 — DOM Mutation Cost

Giới thiệu:

```text id="5axlqf"
DOM mutation
→ style recalculation
→ layout
→ paint
```

Chưa đi sâu optimization.

Mục tiêu chuẩn bị cho Rendering Pipeline.

---

## Lesson 4.2.9 — DOM Project

Xây:

**Vanilla JS Dashboard**

Có:

- Add item
- Remove item
- Filter
- Sort
- Search
- Dynamic rendering

Không dùng framework.

---

# 4. MODULE 4.3 — BROWSER EVENTS

## Mục tiêu

Hiểu event system đầy đủ trước React's synthetic/event abstractions.

---

## Lesson 4.3.1 — EventTarget

- Event target
- Listener
- Dispatch

---

## Lesson 4.3.2 — `addEventListener`

- callback
- listener identity
- options
- `{ once }`
- `{ passive }`
- `{ capture }`

---

## Lesson 4.3.3 — Event Propagation

Ba phases:

```text id="y0h3hd"
Capture
   ↓
Target
   ↓
Bubble
```

---

## Lesson 4.3.4 — Bubbling

Phân tích:

```html id="0v5u2h"
<div id="parent">
  <button id="child">Click</button>
</div>
```

Click button.

Trace:

```text id="25zj41"
button
 ↓
parent
 ↓
ancestor
```

---

## Lesson 4.3.5 — Capturing

Trace ngược:

```text id="3s7pbm"
ancestor
 ↓
parent
 ↓
target
```

---

## Lesson 4.3.6 — `preventDefault`

Phân biệt:

```text id="6x7u2o"
browser default behavior
vs
event propagation
```

`preventDefault()` không phải `stopPropagation()`.

---

## Lesson 4.3.7 — `stopPropagation` vs `stopImmediatePropagation`

Phải biết sự khác nhau.

Không khuyến khích dùng bừa.

---

## Lesson 4.3.8 — Event Delegation

Scenario:

```text id="p6c6cd"
1000 buttons
```

Thay vì 1000 listeners:

```text id="9pxf4f"
1 listener trên parent
→ inspect target
```

---

## Lesson 4.3.9 — Pointer & Keyboard Events

- pointerdown
- pointerup
- click
- keydown
- keyup
- focus
- blur

---

## Lesson 4.3.10 — Form Events

- input
- change
- submit
- focus
- blur
- reset

---

## Lesson 4.3.11 — Event Listener Lifecycle

Đây là bridge sang memory.

Phải hiểu:

```text id="ex9jwy"
addEventListener
        ↓
listener reference
        ↓
removeEventListener
```

Sai reference:

```js id="xn7kpa"
element.removeEventListener("click", () => {});
```

không remove listener ban đầu.

---

# 5. MODULE 4.4 — RENDERING PIPELINE

## Mục tiêu

Đây là **Core L4** của Browser Engineering.

Người học phải hiểu:

> Browser biến document + style + JavaScript mutations thành pixels như thế nào?

---

## Lesson 4.4.1 — HTML Parsing

Mental model:

```text id="n7er2x"
HTML bytes
 ↓
tokens
 ↓
DOM nodes
 ↓
DOM tree
```

---

## Lesson 4.4.2 — CSSOM

```text id="fr7g7i"
CSS
 ↓
parse
 ↓
CSSOM
```

---

## Lesson 4.4.3 — Render Tree

Concept:

```text id="kvf8s1"
DOM + CSSOM
     ↓
Render Tree
```

Không phải mọi DOM node đều trở thành renderable object giống nhau.

---

## Lesson 4.4.4 — Style Calculation

- CSS matching
- Computed style

Ở mức conceptual, chưa cần CSS engine internals.

---

## Lesson 4.4.5 — Layout

- Geometry
- Width
- Height
- Position
- Flow

---

## Lesson 4.4.6 — Paint

- Text
- Background
- Borders
- Shadows
- Images

---

## Lesson 4.4.7 — Composite

- Layers
- Compositing
- GPU involvement ở mức practical

Không dạy:

> “mọi `transform` đều chạy GPU”.

Mental model phải chính xác hơn: browser có thể promote elements/layers khi phù hợp.

---

## Lesson 4.4.8 — Reflow / Layout

Giải thích:

```text id="7yn1go"
DOM/style change
→ layout may be required
```

Thuật ngữ “reflow” vẫn có thể dùng như vocabulary, nhưng ưu tiên mental model “layout”.

---

## Lesson 4.4.9 — Paint vs Composite

So sánh:

```text id="8pfp1c"
layout
paint
composite
```

Hiểu tại sao:

```text id="s2d3y5"
transform / opacity
```

thường có thể animate hiệu quả hơn việc liên tục thay đổi layout geometry.

---

## Lesson 4.4.10 — Forced Synchronous Layout

Case:

```js id="xgx3te"
element.style.width = "100px";
console.log(element.offsetWidth);
```

Phân tích:

```text id="mne5i0"
write
 ↓
read layout
 ↓
browser may need sync layout
```

---

## Lesson 4.4.11 — Layout Thrashing

Case:

```js id="er15oa"
for (...) {
  element.style.width = ...
  console.log(element.offsetWidth);
}
```

So sánh:

```text id="68ee7n"
interleaved read/write
vs
batch read
→
batch write
```

---

# 6. MODULE 4.5 — BROWSER SCHEDULING & ANIMATION

## Mục tiêu

Kết nối Event Loop với Rendering Pipeline.

---

## Lesson 4.5.1 — Rendering Opportunity

Hiểu:

```text id="n6v1he"
JavaScript work
→ browser may render when appropriate
```

Không học một timeline tuyệt đối áp dụng cho mọi thiết bị/browser.

---

## Lesson 4.5.2 — `requestAnimationFrame`

- Visual work
- frame callback
- timestamp
- animation loop

---

## Lesson 4.5.3 — Why `rAF`?

So sánh:

```text id="av3l7t"
setTimeout
vs
requestAnimationFrame
```

Mục tiêu:

> Visual update nên đồng bộ với browser rendering cycle.

---

## Lesson 4.5.4 — `requestIdleCallback`

- Idle work
- Deadline
- timeout option

Nhấn mạnh:

> Không phải browser nào cũng bảo đảm idle opportunity ổn định.

---

## Lesson 4.5.5 — Animation Loop

Tự viết:

```js id="n4j0gx"
animate(timestamp) {
  requestAnimationFrame(animate);
}
```

---

## Lesson 4.5.6 — Frame Budget

60Hz display:

```text id="cx5j7z"
~16.67ms / frame
```

120Hz:

```text id="70w4q8"
~8.33ms / frame
```

Từ đây hiểu:

> “60fps” không phải con số thần kỳ; đó là hệ quả của frame cadence và workload.

---

## Lesson 4.5.7 — Long Tasks

- Main thread blockage
- User input delay
- Frame misses

Bridge sang:

- INP
- Performance profiling

ở Stage 11.

---

## Lesson 4.5.8 — Animation Lab

Tạo hai animation:

```text id="eaiqfs"
A — top/left
B — transform
```

Profile cả hai.

Không mặc định rằng B luôn nhanh hơn trong mọi trường hợp; phải đo.

---

# 7. MODULE 4.6 — BROWSER APIs, OBSERVERS & WORKERS

## Mục tiêu

Hiểu những browser primitives dùng để xây application mà không cần polling hoặc blocking main thread.

---

## Lesson 4.6.1 — IntersectionObserver

- Observer model
- Threshold
- Root
- `rootMargin`

### Project

Lazy-load images khi gần viewport.

---

## Lesson 4.6.2 — ResizeObserver

- Observe element size
- Callback behavior
- Resize loop awareness

### Project

Responsive component phụ thuộc container size.

---

## Lesson 4.6.3 — MutationObserver

- Observe DOM mutations
- Use cases
- Avoiding unnecessary observation

---

## Lesson 4.6.4 — Observer Design

So sánh:

```text id="f1z5xw"
scroll listener
vs
IntersectionObserver
```

```text id="69a6u2"
window resize
vs
ResizeObserver
```

Mục tiêu:

> Chọn abstraction phù hợp với browser lifecycle.

---

## Lesson 4.6.5 — Web Worker

- Worker lifecycle
- `postMessage`
- `onmessage`
- `terminate`

Mental model:

```text id="d7vzhg"
Main Thread
     ↕
Message
     ↕
Worker
```

---

## Lesson 4.6.6 — Structured Clone

Hiểu dữ liệu được truyền sang worker như thế nào.

---

## Lesson 4.6.7 — Transferable Objects

- ArrayBuffer
- Transfer semantics
- Copy vs transfer

---

## Lesson 4.6.8 — Worker Use Cases

Dùng Worker cho:

- CPU-heavy parsing
- data processing
- computation

Không dùng worker chỉ vì:

> “Worker nhanh hơn.”

---

## Lesson 4.6.9 — Worker Cancellation & Cleanup

Phải có:

```text id="s5f9v9"
start
→ work
→ terminate
```

Tránh worker tồn tại vô thời hạn.

---

## Lesson 4.6.10 — Service Worker Awareness

Chỉ foundation:

- install
- activate
- fetch interception
- cache interaction
- lifecycle

Chi tiết PWA/offline architecture sẽ quay lại Stage 9/10.

---

# 8. MODULE 4.7 — STORAGE & PERSISTENCE

## Mục tiêu

Biết chọn nơi lưu data đúng với lifecycle và consistency requirement.

---

## Lesson 4.7.1 — localStorage

- synchronous
- string-based
- origin scoped
- simple persistence

### Anti-pattern

Dùng localStorage cho dữ liệu lớn hoặc mọi application state.

---

## Lesson 4.7.2 — sessionStorage

- tab/session lifecycle
- use cases

---

## Lesson 4.7.3 — Cookies

- browser-managed
- sent to server
- attributes
- size limitations

Phần security sâu sang Stage 11.

---

## Lesson 4.7.4 — IndexedDB

- database concept
- object stores
- transactions
- asynchronous API
- indexes

---

## Lesson 4.7.5 — Cache Storage

- Request/Response pairs
- Service Worker relationship
- cache lifecycle

---

## Lesson 4.7.6 — Storage Decision Matrix

So sánh:

```text id="f3pz7j"
localStorage
sessionStorage
Cookie
IndexedDB
Cache Storage
```

Theo:

- capacity
- sync/async
- server visibility
- lifecycle
- data type
- use case
- security implications

---

## Lesson 4.7.7 — Quota & Eviction

- Storage quota concept
- Quota exceeded
- Eviction
- Persistence awareness

---

## Lesson 4.7.8 — Cross-tab Communication

- `storage` event
- BroadcastChannel

So sánh:

```text id="rvm7ri"
one-way notification
vs
message channel
```

---

# 9. MODULE 4.8 — WEB COMPONENTS & SHADOW DOM

## Mục tiêu

Không biến Web Components thành core framework bắt buộc.

Mục tiêu là hiểu browser's native component model vì nó giúp người học:

- hiểu encapsulation
- hiểu event retargeting
- hiểu component boundaries
- đọc code design system / legacy integration
- làm interoperability

---

## Lesson 4.8.1 — Custom Elements

- `customElements.define`
- lifecycle callbacks
- connected/disconnected

---

## Lesson 4.8.2 — Autonomous Custom Element

Tạo:

```html id="mnld1v"
<user-card></user-card>
```

---

## Lesson 4.8.3 — Shadow DOM

- `attachShadow`
- open
- closed
- encapsulation

---

## Lesson 4.8.4 — Styling Boundaries

- style isolation
- `::part`
- `::slotted`

---

## Lesson 4.8.5 — Slots

- default slot
- named slot
- slotchange

---

## Lesson 4.8.6 — Event Retargeting

Đây là phần quan trọng.

Hiểu:

```text id="l3o9iu"
event originates inside shadow tree
        ↓
crosses boundary
        ↓
event.target may be retargeted
```

---

## Lesson 4.8.7 — Custom Element & Forms

Awareness:

- form-associated custom elements
- ElementInternals

Không cần đi quá sâu.

---

## Lesson 4.8.8 — Interoperability

Nhúng Web Component vào:

```text id="x0zv0o"
vanilla
React
other framework
```

Mục tiêu:

> hiểu boundary giữa native component và framework component.

---

# 10. INTEGRATION LAB — STAGE 4

# Project 4 — Browser Runtime Playground

Xây một ứng dụng duy nhất gồm nhiều khu vực để trực tiếp quan sát browser behavior.

---

## Feature 1 — DOM Explorer

- Create node
- Remove node
- Update node
- Inspect tree

---

## Feature 2 — Event Explorer

Hiển thị:

```text id="x0tqd5"
capture
target
bubble
```

cho mỗi click.

---

## Feature 3 — Layout Lab

Có nút:

```text id="m7d3mo"
Read layout
Write style
Read layout
Write style
```

Để quan sát forced layout.

---

## Feature 4 — Animation Lab

So sánh:

```text id="p7kdrb"
setTimeout
requestAnimationFrame
```

và:

```text id="7606x9"
top/left
transform
```

---

## Feature 5 — Observer Lab

Demo:

```text id="yvh5vv"
IntersectionObserver
ResizeObserver
MutationObserver
```

---

## Feature 6 — Worker Lab

Parse một file JSON/CSV lớn.

So sánh:

```text id="7yz2g3"
Main Thread
vs
Worker
```

---

## Feature 7 — Storage Lab

Thực hiện cùng một data persistence bằng:

```text id="y3k0ao"
localStorage
IndexedDB
Cache Storage
```

---

## Feature 8 — Shadow DOM Lab

Tạo:

```html id="mq8d3w"
<runtime-card></runtime-card>
```

Có:

- Shadow DOM
- slot
- styles
- events

---

# 11. EDGE CASE LAB

## Case 1 — DOM Read/Write

Interleave:

```text id="crwd3h"
write
read
write
read
```

Phân tích layout cost.

---

## Case 2 — Event Listener Leak

```text id="qf6i3l"
addEventListener(...)
```

nhưng không cleanup.

Tìm listener lifecycle.

---

## Case 3 — Event Delegation

Dynamic button được thêm sau khi listener được setup.

Thiết kế solution.

---

## Case 4 — Passive Listener

Scroll/touch listener cần main-thread blocking.

Phân tích `{ passive: true }`.

---

## Case 5 — ResizeObserver Loop

Element resize trong callback của chính observer.

Xác định vấn đề và thiết kế guard.

---

## Case 6 — Worker Leak

Page thay đổi nhưng Worker vẫn sống.

Phải xác định lifecycle owner.

---

## Case 7 — Storage Failure

IndexedDB/local storage operation thất bại.

Thiết kế graceful fallback.

---

## Case 8 — Shadow DOM Event

`event.target` không phải node nội bộ mà developer mong đợi.

Giải thích retargeting.

---

# 12. RE-IMPLEMENTATION LAB

## 12.1 — EventEmitter

Tự xây:

```js id="kkofqo"
on()
off()
emit()
once()
```

Đây là bridge giữa event system và observer pattern.

---

## 12.2 — Simple Observable

```js id="0f74zz"
subscribe()
unsubscribe()
next()
```

---

## 12.3 — Intersection Observer Mock

Không cần mô phỏng browser thật.

Chỉ thiết kế abstraction có:

```text id="0f8t6p"
observe()
unobserve()
disconnect()
notify()
```

Mục tiêu hiểu observer lifecycle.

---

## 12.4 — Virtualized List Primitive

Ở mức đơn giản:

```text id="so3o3j"
100,000 logical items
→ chỉ render visible window
```

Chưa tối ưu production; mục tiêu hiểu nguyên lý virtualization.

---

# 13. DEBUG LAB

## Bug 1 — Button Doesn't Work

Kiểm tra:

```text id="7e9jzv"
listener?
target?
propagation?
default behavior?
```

---

## Bug 2 — Page Feels Janky

Người học phải điều tra:

```text id="66g6r6"
long JS?
forced layout?
paint?
too many DOM nodes?
```

Không đoán.

---

## Bug 3 — Memory Grows After Navigation

Các khả năng:

```text id="fwg2gf"
event listener
timer
observer
worker
DOM reference
```

Phải isolate.

---

## Bug 4 — Infinite Resize Callback

Phân tích ResizeObserver feedback loop.

---

## Bug 5 — Slow CSV Parsing

So sánh:

```text id="gq7h2u"
main thread
vs
worker
```

và quyết định có đáng chuyển sang Worker không.

---

# 14. DESIGN LAB

## Scenario 1 — Infinite Scroll

Ba lựa chọn:

```text id="2qcxz5"
scroll event
IntersectionObserver
virtualized list
```

Chọn theo requirement.

---

## Scenario 2 — Responsive Component

Có thể dùng:

```text id="7h82gj"
window.resize
ResizeObserver
CSS Container Queries
```

Phải biết khi nào JavaScript không cần thiết.

---

## Scenario 3 — Large Data Processing

10 MB CSV.

Chọn:

```text id="s3n8us"
main thread
worker
server processing
```

Phân tích trade-off.

---

## Scenario 4 — Cross-tab State

Hai tab cần biết user logout.

So sánh:

```text id="pxrw5a"
storage event
BroadcastChannel
server push
```

---

# 15. SOURCE & DOCUMENTATION

Primary references:

- MDN DOM
- MDN EventTarget
- MDN Web APIs
- WHATWG DOM
- WHATWG HTML
- MDN IntersectionObserver
- MDN ResizeObserver
- MDN Web Workers
- MDN IndexedDB
- MDN Web Components

Nguồn browser architecture/performance:

- Chrome Developers
- web.dev

Không yêu cầu đọc browser source code.

Mục tiêu là biết tra đúng primitive và semantics.

---

# 16. TEACH-BACK

Người học phải giải thích:

### Level 1

> DOM là gì?

### Level 2

> Event bubbling hoạt động thế nào?

### Level 3

> Browser từ DOM/CSSOM đến pixel như thế nào?

### Level 4

> Tại sao DOM read/write xen kẽ có thể gây performance problem?

### Level 5

> Với một feature cụ thể, tại sao chọn Observer/Worker/Event Delegation thay vì cách khác?

---

# 17. EXIT CRITERIA — STAGE 4

## Browser Model

- [ ] Phân biệt JavaScript language và browser host APIs.
- [ ] Giải thích được browser document lifecycle ở mức conceptual.
- [ ] Phân biệt `window`, `document`, `navigator`, `location`.

## DOM

- [ ] Vẽ được DOM tree.
- [ ] Traverse và mutate DOM đúng.
- [ ] Phân biệt Node và Element.
- [ ] Phân biệt attribute và property.

## Events

- [ ] Vẽ được Capture → Target → Bubble.
- [ ] Giải thích bubbling/capturing.
- [ ] Dùng event delegation.
- [ ] Quản lý listener lifecycle đúng.

## Rendering

- [ ] Vẽ được HTML → DOM → CSSOM → Render Tree → Layout → Paint → Composite.
- [ ] Phân biệt layout, paint, composite.
- [ ] Nhận diện forced synchronous layout.
- [ ] Nhận diện layout thrashing.
- [ ] Profile được một rendering problem cơ bản.

## Scheduling

- [ ] Giải thích vai trò của `requestAnimationFrame`.
- [ ] Phân biệt rAF với timer.
- [ ] Hiểu frame budget.
- [ ] Nhận diện long task ảnh hưởng UI.

## Browser APIs

- [ ] Dùng IntersectionObserver.
- [ ] Dùng ResizeObserver.
- [ ] Dùng MutationObserver.
- [ ] Dùng Web Worker cho CPU-heavy work.
- [ ] Cleanup Worker đúng lifecycle.

## Storage

- [ ] So sánh localStorage, sessionStorage, Cookie, IndexedDB, Cache Storage.
- [ ] Chọn storage phù hợp với requirement.
- [ ] Nhận diện quota/failure scenario.
- [ ] Thiết kế cross-tab synchronization.

## Web Components

- [ ] Tạo Custom Element.
- [ ] Tạo Shadow DOM.
- [ ] Sử dụng slot.
- [ ] Hiểu event retargeting.
- [ ] Nhận biết use case cho interoperability.

---

# 18. STAGE 4 CHECKPOINT

## Part A — Browser Diagram

Không nhìn tài liệu, vẽ:

```text id="w0dz4o"
User action
→ Event
→ JS
→ DOM mutation
→ Style
→ Layout
→ Paint
→ Composite
```

---

## Part B — Event Trace

Cho một nested DOM.

Xác định thứ tự:

```text id="itp0z4"
capture
target
bubble
```

---

## Part C — Performance Diagnosis

Một trang:

```text id="a3z1xw"
60,000 DOM nodes
+
scroll listener
+
layout read/write loop
```

Tìm bottleneck và đề xuất remediation.

---

## Part D — API Selection

Scenario:

> Lazy-load 5,000 images.

Chọn primitive phù hợp và giải thích tại sao.

---

## Part E — Worker Decision

10 MB CSV.

Phải quyết định:

```text id="8yrtb4"
Worker?
Main thread?
Server?
```

với trade-off.

---

## Part F — Storage Architecture

Thiết kế persistence cho:

```text id="2dt2ct"
user preferences
auth session
offline cart
large cached dataset
cross-tab logout
```

Chọn storage cho từng loại.

---

# 19. STAGE 4 CAPSTONE

# Browser Runtime Playground

Final application phải có:

```text id="xoq5e9"
DOM Explorer
Event Explorer
Rendering Lab
Animation Lab
Observer Lab
Worker Lab
Storage Lab
Shadow DOM Lab
```

Mỗi lab phải có:

```text id="tc1qdi"
Demo
+
Explain
+
Measure
+
Break
+
Fix
```

Không được chỉ "làm demo".

---

# 20. STAGE 4 → STAGE 5 DEPENDENCY

Sau Stage 4, người học đã có:

```text id="k4c5vp"
JavaScript
+
Async
+
Browser APIs
+
DOM
+
Events
+
Rendering
+
Scheduling
+
Storage
+
Workers
```

Bây giờ mới bước sang:

# STAGE 5 — NETWORK & WEB PLATFORM

vì Frontend application thực tế là:

```text id="51z8v4"
Browser
   ↕
Network
   ↕
Server
   ↕
Database / Services
```

Stage 5 sẽ nối:

```text id="fkv2ox"
Stage 3 Async
      +
Stage 4 Browser
      ↓
Fetch / HTTP
      ↓
Caching
      ↓
API
      ↓
Authentication
      ↓
Realtime
      ↓
BFF
```

Sau đó những kiến thức này sẽ trở thành foundation cho:

```text id="0gf6wc"
React Data Fetching
TanStack Query
Next.js
Server Components
Caching
Authentication
Realtime
Performance
Security
```

---

# 21. STAGE 4 CORE PRINCIPLE

Một Developer mới thường nhìn Browser như:

```text id="2v4h6u"
HTML
CSS
JS
```

Một Frontend Engineer phải nhìn:

```text id="4j0o6m"
Browser
├── Event System
├── JS Runtime
├── DOM
├── Style System
├── Layout
├── Paint
├── Composite
├── Network
├── Storage
└── Workers
```

Và khi một UI bị lag, câu hỏi không còn là:

> “React render chậm à?”

mà phải trở thành:

```text id="ce6q6l"
JS execution?
Event handling?
Long task?
Forced layout?
Paint?
Too many DOM nodes?
Image decoding?
Network?
Main thread contention?
```

Đó chính là mental model Browser mà các Stage React, Performance và Architecture phía sau sẽ dựa vào.