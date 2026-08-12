# JAVASCRIPT ENGINEERING MASTERY
## STAGE 3 — ASYNCHRONOUS JAVASCRIPT & CONCURRENCY
### Detailed Curriculum v1

---

# 0. Stage Overview

## Mục tiêu

Stage 3 trả lời câu hỏi:

> **JavaScript xử lý những công việc không xảy ra ngay lập tức như thế nào?**

Đây là bước chuyển rất quan trọng:

```text
Stage 0
Biết viết JavaScript
        ↓
Stage 1
Hiểu JavaScript thực thi thế nào
        ↓
Stage 2
Hiểu Object / Function model
        ↓
Stage 3
Hiểu JavaScript xử lý thời gian,
async và concurrency thế nào
```

Frontend hiện đại phụ thuộc rất lớn vào asynchronous programming:

```text
User Input
API Request
Timer
Animation
File
Streaming
WebSocket
React Effects
Server Data
```

Nếu không hiểu Stage 3, người học thường rơi vào các lỗi:

```text
race condition
stale response
duplicate request
request leak
retry storm
infinite loading
wrong loading state
out-of-order update
```

Stage này là foundation trực tiếp cho:

- Browser Runtime
- Fetch
- React
- TanStack Query
- State Management
- Realtime
- Next.js
- Streaming
- Production reliability

---

# 1. Phạm vi kiến thức

Stage 3 gồm **7 Modules / 32 Lessons**:

```text
3.1 Synchronous vs Asynchronous Execution
3.2 Event Loop
3.3 Promise Model
3.4 Async / Await
3.5 Concurrency Patterns
3.6 Cancellation & Reliability
3.7 Race Conditions & Async Architecture
```

Điểm quan trọng:

> Stage 3 không chỉ dạy API `Promise`.

Mục tiêu là xây **concurrency mental model**.

---

# 2. MODULE 3.1 — SYNCHRONOUS VS ASYNCHRONOUS EXECUTION

## Mục tiêu

Hiểu chính xác “synchronous” và “asynchronous” thay vì đồng nhất:

```text
async = chạy background
```

Đó là mental model sai.

---

## Lesson 3.1.1 — Synchronous Execution

Nhắc lại Stage 1:

```js
const a = foo();
const b = bar();
```

Execution:

```text
foo
 ↓
return
 ↓
bar
 ↓
return
```

### Phải hiểu

JavaScript code bình thường chạy theo thứ tự thực thi.

---

## Lesson 3.1.2 — Blocking vs Non-blocking

Phân biệt:

```text
synchronous
asynchronous
blocking
non-blocking
```

Đây là 4 khái niệm khác nhau.

Ví dụ:

```text
synchronous + blocking
asynchronous + non-blocking
```

không phải một cặp đồng nghĩa.

---

## Lesson 3.1.3 — Host Environment

JavaScript engine không tự cung cấp mọi thứ.

Mô hình:

```text
┌─────────────────────┐
│ JavaScript Engine   │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Host Environment    │
│                     │
│ Timer               │
│ Network             │
│ DOM                 │
│ File / OS APIs      │
└─────────────────────┘
```

### Mục tiêu

Hiểu rằng:

> JavaScript language và asynchronous capabilities của môi trường host là hai lớp khác nhau.

---

## Lesson 3.1.4 — Why JavaScript Can Stay Responsive

Phân tích scenario:

```text
User clicks button
        ↓
Start network request
        ↓
JavaScript tiếp tục xử lý
        ↓
Network hoàn thành
        ↓
Callback được schedule
```

Không được giải thích bằng:

> “Browser chạy Promise ở background.”

---

# 3. MODULE 3.2 — EVENT LOOP

## Mục tiêu

Xây mental model chính xác cho:

```text
Call Stack
Task
Microtask
Host callbacks
Rendering
```

Đây là một trong những module **Core L4** của toàn khóa.

---

## Lesson 3.2.1 — Call Stack Review

Dựa trên Stage 1.

Trace:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  console.log("hello");
}
```

Vẽ:

```text
c()
b()
a()
global
```

---

## Lesson 3.2.2 — Task / Macrotask

Khái niệm:

- Task
- Timer callback
- User interaction
- Network callback ở mức conceptual

Không dùng "macrotask" như một thuật ngữ tuyệt đối cho mọi host.

Mục tiêu là hiểu:

> Browser có các opportunities để xử lý từng task.

---

## Lesson 3.2.3 — Microtask

Các nguồn quan trọng:

- Promise reactions
- `queueMicrotask`
- MutationObserver

Mental model:

```text
Task
 ↓
Run JS
 ↓
Microtask checkpoint
 ↓
Rendering opportunity
 ↓
Next work
```

---

## Lesson 3.2.4 — Event Loop Concept

Mô hình simplified:

```text
         ┌──────────────┐
         │    Task      │
         └──────┬───────┘
                ↓
         ┌──────────────┐
         │  Call Stack  │
         └──────┬───────┘
                ↓
         ┌──────────────┐
         │  Microtasks  │
         └──────┬───────┘
                ↓
        Rendering Opportunity
                ↓
              Next
```

Không được coi diagram này là implementation chi tiết của mọi JavaScript host.

---

## Lesson 3.2.5 — `setTimeout`

Phải phá mental model:

> `setTimeout(fn, 0)` = chạy ngay sau dòng hiện tại.

Không đúng.

Hiểu:

```text
setTimeout
 ↓
timer registration
 ↓
minimum delay
 ↓
callback becomes eligible
 ↓
task scheduling
 ↓
callback executes when stack is available
```

---

## Lesson 3.2.6 — Promise Microtask

So sánh:

```js
setTimeout(() => console.log("timer"), 0);

Promise.resolve().then(() => {
  console.log("promise");
});
```

Phải dự đoán:

```text
promise
timer
```

và giải thích bằng scheduling model.

---

## Lesson 3.2.7 — Microtask Drain

Case:

```js
Promise.resolve().then(() => {
  queueMicrotask(() => {});
});
```

Phải hiểu microtasks có thể enqueue microtasks mới.

### Edge Case

Microtask starvation:

```text
task
 ↓
microtask
 ↓
microtask
 ↓
microtask
 ↓
...
```

---

## Lesson 3.2.8 — Event Loop + Rendering

Đây là bridge sang Stage 4.

Phải hiểu:

> Browser không paint sau mỗi JavaScript statement.

Phân tích:

```text
heavy JS
→ microtasks
→ rendering delayed
→ user sees jank
```

---

## Lesson 3.2.9 — Event Loop Prediction Lab

Ít nhất 20 bài:

- synchronous log
- `setTimeout`
- Promise
- `queueMicrotask`
- nested Promise
- nested timer
- async/await

Không chạy code trước.

---

# 4. MODULE 3.3 — PROMISE MODEL

## Mục tiêu

Không học Promise như:

```text
.then()
.catch()
```

Mà hiểu:

```text
Promise state
+
reaction
+
resolution
+
microtask
```

---

## Lesson 3.3.1 — Promise State

```text
Pending
  ↓
Fulfilled

Pending
  ↓
Rejected
```

Một Promise đã settled không quay lại state khác.

---

## Lesson 3.3.2 — Creating Promise

```js
new Promise((resolve, reject) => {})
```

Phải hiểu executor chạy **ngay khi Promise được tạo**.

Đây là misconception rất phổ biến.

---

## Lesson 3.3.3 — `resolve` vs Fulfillment

Phân biệt:

```text
resolve(value)
```

và:

```text
fulfilled with value
```

Đặc biệt khi value là Promise / thenable.

---

## Lesson 3.3.4 — Thenable

Hiểu:

```js
{
  then(resolve, reject) {}
}
```

và Promise resolution có thể assimilate thenable.

Không yêu cầu học toàn bộ spec algorithm.

---

## Lesson 3.3.5 — `.then()`

Phải hiểu:

```text
then()
 ↓
register reaction
 ↓
Promise settles
 ↓
reaction scheduled as microtask
```

---

## Lesson 3.3.6 — Promise Chaining

```js
fetchUser()
  .then(user => ...)
  .then(posts => ...)
  .then(...)
```

Hiểu mỗi `.then()` tạo ra một Promise mới.

---

## Lesson 3.3.7 — Return trong `.then()`

Phân biệt:

```js
.then(() => value)
```

```js
.then(() => Promise.resolve(value))
```

```js
.then(() => {
  throw error;
})
```

Đây là nền tảng của Promise chaining.

---

## Lesson 3.3.8 — Error Propagation

```text
throw
 ↓
current promise rejected
 ↓
next rejection handler
```

Phân biệt:

```text
throw
return rejected Promise
return normal value
```

---

## Lesson 3.3.9 — `.catch()`

Hiểu:

```js
promise.catch(handler)
```

về mặt chain tương đương một rejection handler.

---

## Lesson 3.3.10 — `.finally()`

- Cleanup
- Value propagation
- Error propagation

Không dùng `finally` như nơi xử lý business result.

---

## Lesson 3.3.11 — Promise Combinators

### `Promise.all`

Fail-fast.

Dùng khi:

```text
all operations required
```

### `Promise.allSettled`

Dùng khi:

```text
need result of every operation
```

### `Promise.race`

Dùng khi:

```text
first settled result matters
```

### `Promise.any`

Dùng khi:

```text
first fulfilled result matters
```

---

## Lesson 3.3.12 — Mini Promise Implementation

Không implement toàn bộ spec.

Tự xây simplified:

```text
MiniPromise
├── pending
├── fulfilled
├── rejected
├── then
├── catch
└── finally
```

Mục tiêu:

> Hiểu Promise bằng cách xây nó.

---

# 5. MODULE 3.4 — ASYNC / AWAIT

## Mục tiêu

Hiểu `async/await` là abstraction trên Promise chứ không phải một loại asynchronous mechanism hoàn toàn khác.

---

## Lesson 3.4.1 — `async` Function

Hiểu:

```js
async function foo() {
  return 42;
}
```

tương ứng về mặt behavior với:

```text
function
→ Promise result
```

---

## Lesson 3.4.2 — `await`

Hiểu:

```text
await promise
 ↓
suspend function continuation
 ↓
function returns Promise
 ↓
later continuation resumes
```

Không giải thích:

> “await block JavaScript.”

---

## Lesson 3.4.3 — Error với async/await

- `try/catch`
- rejected Promise
- thrown error

---

## Lesson 3.4.4 — Sequential vs Parallel

### Sai pattern

```js
const user = await getUser();
const posts = await getPosts();
```

nếu hai request độc lập.

### Parallel

```js
const [user, posts] = await Promise.all([
  getUser(),
  getPosts()
]);
```

---

## Lesson 3.4.5 — Async Loops

So sánh:

```text
for
for...of
map
forEach
```

với async function.

Phải hiểu tại sao:

```js
array.forEach(async item => {})
```

không hoạt động như nhiều Junior nghĩ.

---

## Lesson 3.4.6 — Async Error Boundaries

Xác định:

```text
function boundary
request boundary
UI boundary
application boundary
```

Mục tiêu là chuẩn bị cho React/production error handling.

---

# 6. MODULE 3.5 — CONCURRENCY PATTERNS

## Mục tiêu

Đây là bước chuyển từ:

> biết asynchronous code

sang:

> biết orchestrate nhiều asynchronous operations.

---

## Lesson 3.5.1 — Sequential Concurrency

```text
A
 ↓
B
 ↓
C
```

Dùng khi dependency giữa operations tồn tại.

---

## Lesson 3.5.2 — Parallel Work

```text
A ─┐
B ─┼→ results
C ─┘
```

Dùng khi operations độc lập.

---

## Lesson 3.5.3 — Bounded Concurrency

Đây là Senior-level concept.

Không phải lúc nào cũng:

```text
Promise.all(10000 requests)
```

Mà có:

```text
Concurrency = 5
```

Ví dụ:

```text
1 2 3 4 5
→ finish
6 7 8 9 10
→ ...
```

---

## Lesson 3.5.4 — Worker Pool Concept

Thiết kế:

```text
queue
 ↓
workers
 ↓
results
```

### Lab

Implement concurrency limiter:

```js
limitConcurrency(tasks, 3)
```

---

## Lesson 3.5.5 — Deduplication

Scenario:

```text
Component A → fetch /user/1
Component B → fetch /user/1
Component C → fetch /user/1
```

Thay vì 3 requests:

```text
request registry
 ↓
reuse in-flight Promise
```

---

## Lesson 3.5.6 — Request Coalescing

Phân biệt:

```text
deduplication
cache
coalescing
```

---

## Lesson 3.5.7 — Backpressure

Khái niệm:

> Producer tạo work nhanh hơn consumer xử lý.

Ví dụ:

```text
scroll events
upload chunks
streaming data
user typing
```

Đây là foundation cho Web Streams và realtime sau này.

---

# 7. MODULE 3.6 — CANCELLATION & RELIABILITY

## Mục tiêu

Async system tốt không chỉ biết start work.

Nó phải biết:

> **Khi nào dừng work và khi nào không nên retry.**

---

## Lesson 3.6.1 — AbortController

- `AbortController`
- `AbortSignal`
- signal propagation

---

## Lesson 3.6.2 — Fetch Cancellation

Scenario:

```text
Search "j"
→ request A

Search "js"
→ cancel A
→ request B
```

---

## Lesson 3.6.3 — Timeout

Implement:

```js
withTimeout(promise, 5000)
```

Phải có cancellation nếu API hỗ trợ.

---

## Lesson 3.6.4 — Retry

Phân biệt:

```text
retryable
non-retryable
```

Không retry mù quáng.

---

## Lesson 3.6.5 — Exponential Backoff

Ví dụ:

```text
100ms
200ms
400ms
800ms
1600ms
```

---

## Lesson 3.6.6 — Jitter

Tại sao nhiều client retry cùng lúc có thể tạo:

```text
retry storm
```

và jitter giải quyết vấn đề gì.

---

## Lesson 3.6.7 — Retry Budget

Không được:

```text
request fail
→ retry
→ retry
→ retry
→ forever
```

Thiết kế:

- max attempts
- total timeout
- backoff
- cancellation

---

## Lesson 3.6.8 — Graceful Failure

Khi async operation fail:

```text
loading
success
error
empty
partial
cancelled
stale
```

Phải coi đây là **state model**, không phải chỉ `try/catch`.

---

# 8. MODULE 3.7 — RACE CONDITIONS & ASYNC ARCHITECTURE

## Mục tiêu

Đây là module quan trọng nhất của Stage 3.

Senior Frontend rất thường gặp async bugs không phải vì Promise sai, mà vì **thứ tự completion không giống thứ tự intention**.

---

## Lesson 3.7.1 — Race Condition

Scenario:

```text
Request A starts
Request B starts

B finishes first
A finishes later
```

Nếu A overwrite B:

```text
UI = wrong
```

---

## Lesson 3.7.2 — Stale Response

Ví dụ search:

```text
"r"
"re"
"rea"
"reac"
"react"
```

Request cũ có thể về sau request mới.

---

## Lesson 3.7.3 — Request Identity

Giải pháp:

```text
requestId
generation
sequence number
```

Chỉ accept result của request hiện tại.

---

## Lesson 3.7.4 — Cancellation vs Ignore

Hai chiến lược:

```text
cancel stale work
```

hoặc:

```text
allow work
but ignore stale result
```

Phải biết khi nào mỗi cách tốt hơn.

---

## Lesson 3.7.5 — Optimistic Update

Pattern:

```text
UI update
 ↓
request
 ↓
success → keep
failure → rollback
```

---

## Lesson 3.7.6 — Out-of-order Mutation

Scenario:

```text
like
unlike
like
```

Network completion:

```text
unlike
like
like
```

Thiết kế hệ thống phải bảo toàn intent.

---

## Lesson 3.7.7 — Async State Machine

Model:

```text
idle
 ↓
loading
 ├── success
 ├── error
 └── cancelled
```

Mở rộng:

```text
stale
refreshing
retrying
partial
```

Đây là bridge trực tiếp sang XState và application architecture.

---

## Lesson 3.7.8 — Async Architecture Patterns

Thiết kế:

```text
Request Manager
Cache
In-flight Registry
Cancellation
Retry
Timeout
State
```

Người học phải nhìn asynchronous system như một subsystem, không phải vài Promise rời rạc.

---

# 9. INTEGRATION LAB — STAGE 3

# Project 3 — Production Async Search Engine

Xây search engine frontend.

## Requirements

### Input

User gõ query liên tục.

```text
r
re
rea
reac
react
```

---

## Requirement 1 — Debounce

Không gửi request cho mỗi keystroke.

---

## Requirement 2 — Cancellation

Cancel request cũ nếu API hỗ trợ.

---

## Requirement 3 — Stale Response Protection

Request cũ không được ghi đè request mới.

---

## Requirement 4 — In-flight Deduplication

Hai nơi cùng request:

```text
/search?q=react
```

chỉ tạo một in-flight request.

---

## Requirement 5 — Cache

Cache kết quả query trước đó.

---

## Requirement 6 — Timeout

Request quá lâu phải fail rõ ràng.

---

## Requirement 7 — Retry

Chỉ retry lỗi phù hợp.

---

## Requirement 8 — Error State

Phải phân biệt:

```text
idle
loading
success
empty
error
cancelled
refreshing
```

---

## Requirement 9 — Concurrency Limit

Nếu user gửi nhiều request khác nhau:

```text
max 3 in-flight
```

---

# 10. EDGE CASE LAB

## Case 1 — Promise Microtask

Predict:

```js
console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

console.log("C");
```

---

## Case 2 — Timer + Promise

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
```

Expected:

```text
A
D
C
B
```

Phải giải thích.

---

## Case 3 — Nested Microtasks

```js
Promise.resolve().then(() => {
  console.log("A");

  Promise.resolve().then(() => {
    console.log("B");
  });
});

console.log("C");
```

---

## Case 4 — Async/Await

Predict execution order với:

```js
async function foo() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

foo();

console.log("C");
```

---

## Case 5 — `forEach` + async

```js
items.forEach(async item => {
  await save(item);
});
```

Câu hỏi:

> Khi nào function outer biết tất cả item đã save?

---

## Case 6 — Parallel vs Sequential

100 API requests.

Chọn:

```text
sequential
parallel
bounded concurrency
```

và giải thích.

---

## Case 7 — Retry Storm

1,000 client cùng request thất bại.

Tất cả retry sau 1 second.

Phân tích hậu quả.

---

## Case 8 — Stale Response

```text
A starts at t=0
B starts at t=50
B finishes at t=100
A finishes at t=500
```

UI phải làm gì?

---

# 11. RE-IMPLEMENTATION LAB

Tự viết:

### 11.1 — `delay`

```js
delay(ms)
```

---

### 11.2 — `timeout`

```js
withTimeout(promise, ms)
```

---

### 11.3 — `retry`

```js
retry(task, {
  retries,
  backoff,
  jitter
})
```

---

### 11.4 — `concurrencyLimit`

```js
limit(tasks, 3)
```

---

### 11.5 — `dedupe`

```js
dedupeRequest(key, task)
```

---

### 11.6 — `debounce`

Phiên bản Promise-aware ở mức đơn giản.

---

### 11.7 — `raceSafe`

Một helper giúp chỉ nhận kết quả của request mới nhất.

---

# 12. DEBUG LAB

## Bug 1 — Wrong Search Result

Search query:

```text
react
react hooks
react server
```

Nhưng UI hiển thị kết quả của request cũ.

Người học phải xác định:

```text
race condition
+
stale response
```

---

## Bug 2 — Requests Never Stop

User chuyển trang.

Request vẫn tiếp tục.

Phải:

```text
identify owner
→ abort
→ cleanup
```

---

## Bug 3 — Retry Storm

Một service fail.

App retry quá nhiều.

Phải tìm:

```text
retry policy
backoff
jitter
budget
```

---

## Bug 4 — Promise.all Failure

10 operations.

1 fail.

Tất cả result bị mất.

Người học phải quyết định:

```text
all
or
allSettled
```

---

## Bug 5 — Sequential Bottleneck

5 API độc lập nhưng mất 5 giây.

Thiết kế lại để giảm latency.

---

## Bug 6 — Unbounded Concurrency

10,000 requests được tạo cùng lúc.

Phải thiết kế bounded concurrency.

---

# 13. DESIGN LAB

Đây là nơi bắt đầu hình thành Senior judgment.

---

## Scenario 1 — Search

Có ba solution:

```text
A. debounce only
B. cancel previous request
C. cancel + request identity
```

Đánh giá:

- correctness
- network usage
- browser support
- complexity

---

## Scenario 2 — File Upload

Thiết kế:

```text
upload
pause
cancel
retry
resume
progress
```

Quyết định abstraction.

---

## Scenario 3 — Dashboard

20 widgets cùng tải dữ liệu.

Chọn:

```text
all parallel
sequential
bounded concurrency
```

---

## Scenario 4 — Realtime

Server gửi event nhanh hơn UI xử lý.

Chọn:

```text
drop
batch
buffer
backpressure
worker
```

---

# 14. SOURCE & DOCUMENTATION

Đọc các nguồn chuẩn:

- MDN Promise
- MDN `async function`
- MDN `await`
- MDN AbortController
- WHATWG HTML Event Loop concepts
- WHATWG Fetch
- ECMAScript Promise semantics ở mức cần thiết

Nguồn mở rộng:

- Jake Archibald — event loop / rendering explanations
- V8 Promise / async material khi cần đào sâu

Mục tiêu:

> Xây mental model dựa trên behavior thật, không dựa vào những diagram Event Loop đơn giản hóa quá mức.

---

# 15. TEACH-BACK

Người học phải giải thích:

### Level 1

> Synchronous và asynchronous khác nhau thế nào?

### Level 2

> Tại sao Promise callback thường chạy trước `setTimeout(..., 0)`?

### Level 3

> `await` thực sự làm gì với async function?

### Level 4

> Tại sao `Promise.all` không phải lúc nào cũng tốt?

### Level 5

> Làm thế nào thiết kế một async system chịu được race condition, retry storm và cancellation?

---

# 16. EXIT CRITERIA — STAGE 3

## Event Loop

- [ ] Vẽ được Call Stack + Task + Microtask ở mức conceptual.
- [ ] Dự đoán đúng execution order của 20 bài async.
- [ ] Giải thích được microtask checkpoint.
- [ ] Giải thích được vì sao `setTimeout(0)` không chạy ngay.
- [ ] Nhận biết microtask starvation.

## Promise

- [ ] Hiểu Promise state.
- [ ] Hiểu Promise resolution.
- [ ] Hiểu `.then()` tạo Promise mới.
- [ ] Trace được chaining.
- [ ] Trace được error propagation.
- [ ] Chọn đúng `all`, `allSettled`, `race`, `any`.
- [ ] Implement được simplified Promise.

## Async/Await

- [ ] Giải thích `async` trả Promise.
- [ ] Giải thích behavior của `await`.
- [ ] Phân biệt sequential và parallel async.
- [ ] Không dùng sai `forEach(async ...)`.

## Concurrency

- [ ] Phân biệt sequential / concurrent / parallel.
- [ ] Implement bounded concurrency.
- [ ] Implement in-flight deduplication.
- [ ] Hiểu backpressure.

## Reliability

- [ ] Cancel được Fetch.
- [ ] Implement timeout.
- [ ] Implement retry + backoff + jitter.
- [ ] Có retry budget.
- [ ] Phân biệt retryable / non-retryable errors.

## Race Conditions

- [ ] Nhận diện stale response.
- [ ] Bảo vệ request ordering.
- [ ] Thiết kế optimistic update + rollback.
- [ ] Mô hình hóa async state.

## Engineering

- [ ] Hoàn thành Production Async Search Engine.
- [ ] Debug được race condition mà không trial-and-error.
- [ ] Đưa ra được trade-off cho ít nhất 3 async architecture decisions.
- [ ] Teach Back toàn bộ Event Loop + Promise + Concurrency.

---

# 17. STAGE 3 CHECKPOINT

## Part A — Execution Prediction

15–20 đoạn code trộn:

```text
sync
timer
Promise
microtask
async/await
nested callback
```

Không chạy code.

---

## Part B — Promise Trace

Trace một chain:

```text
A
 ↓
then
 ↓
B
 ↓
throw
 ↓
catch
 ↓
finally
```

Phải xác định Promise nào fulfilled / rejected.

---

## Part C — Concurrency Design

Scenario:

> 500 ảnh cần upload, server chỉ cho phép tối đa 5 request đồng thời.

Phải thiết kế:

```text
queue
+
workers
+
retry
+
cancel
+
progress
```

---

## Part D — Race Condition

Search system có:

```text
A start
B start
B finish
A finish
```

Viết solution bảo vệ ordering.

---

## Part E — Production Incident

Incident:

```text
API latency tăng
→ frontend retry
→ traffic tăng
→ API càng chậm
→ retry càng nhiều
```

Người học phải xác định feedback loop và đưa ra remediation.

---

# 18. STAGE 3 CAPSTONE

## Production Async Engine

Không dùng TanStack Query, Axios hoặc thư viện orchestration.

Tự xây một abstraction nhỏ:

```js
const client = createAsyncClient({
  concurrency: 3,
  timeout: 5000,
  retry: {
    attempts: 3,
    backoff: true,
    jitter: true
  }
});
```

Có:

```text
request()
cancel()
retry()
timeout()
dedupe()
cache()
latest()
subscribe()
```

Sau đó cố tình inject:

```text
race condition
request leak
retry storm
stale response
unbounded concurrency
```

và debug.

---

# 19. STAGE 3 → STAGE 4 DEPENDENCY

Sau Stage 3, người học đã có:

```text
Execution Model
        ↓
Event Loop
        ↓
Promise
        ↓
Async/Await
        ↓
Concurrency
        ↓
Cancellation
        ↓
Race Condition
        ↓
Async Architecture
```

Bây giờ có thể bước vào:

# STAGE 4 — BROWSER RUNTIME

vì Browser Runtime sẽ ghép:

```text
Stage 1
Closure
+
Stage 3
Event Loop
+
Host APIs
+
DOM
+
Events
+
Rendering
```

để trả lời câu hỏi lớn hơn:

> **Một ứng dụng Frontend thực sự chạy như thế nào từ lúc user tương tác đến lúc browser vẽ pixel?**

Đây cũng là prerequisite để sau này hiểu:

```text
React rendering
React effects
Fiber scheduling
UI performance
Web Workers
Realtime UI
Next.js streaming
```

---

# 20. STAGE 3 CORE PRINCIPLE

Có một nguyên tắc xuyên suốt Stage này:

> **Asynchronous programming không phải là “chạy code sau”. Nó là quản lý work theo thời gian và xử lý concurrency một cách có kiểm soát.**

Một Engineer yếu nhìn:

```text
Promise
async
await
fetch
```

Một Engineer mạnh nhìn:

```text
Work
→ Dependency
→ Scheduling
→ Completion
→ Cancellation
→ Failure
→ Retry
→ Ordering
→ Resource limits
```

Đó chính là bước chuyển từ **“biết async JavaScript”** sang **“biết thiết kế asynchronous systems”**.