# MASTER TEACHING SPEC v1

## JAVASCRIPT ENGINEERING MASTERY

Đây là **quy chuẩn biên soạn chính thức** cho toàn bộ 16 Stage.

Từ thời điểm này, chúng ta không viết lesson theo cảm hứng nữa. Mọi Module, Lesson, Lab, Project và Assessment đều phải tuân theo Teaching Spec này.

---

# 0. MỤC ĐÍCH CỦA TEACHING SPEC

Curriculum đã trả lời:

> **Học cái gì?**

Global Competency Matrix trả lời:

> **Học sâu đến đâu và dùng để làm gì?**

Teaching Spec này trả lời:

> **Dạy như thế nào để người học thực sự hình thành năng lực?**

Mục tiêu không phải:

```text
Read
→ Understand
→ Remember
```

Mà:

```text
Encounter
→ Understand
→ Predict
→ Implement
→ Break
→ Debug
→ Design
→ Decide
→ Explain
→ Reuse
```

---

# 1. LEARNING PHILOSOPHY

Toàn khóa sử dụng 6 nguyên tắc.

## 1.1. Mental Model First

Không dạy API trước khi người học hiểu problem mà API giải quyết.

Ví dụ không bắt đầu:

```js
useEffect(...)
```

mà:

```text
Component
+
External System
+
Synchronization
```

sau đó mới đến `useEffect`.

---

## 1.2. Predict Before Execute

Khi behavior có thể dự đoán được:

```text
Read Code
      ↓
Predict
      ↓
Commit
      ↓
Run
      ↓
Compare
```

Không cho người học chạy code ngay trong những bài mà mục tiêu là mental model.

---

## 1.3. Failure Is Part of Learning

Mỗi topic quan trọng phải có ít nhất một:

```text
wrong assumption
        ↓
failure
        ↓
diagnosis
        ↓
correct model
```

Ví dụ:

```text
Closure
→ stale closure

Promise
→ incorrect ordering

Cache
→ stale data

React
→ unnecessary render

Prototype
→ shared mutable state

Memory
→ retained reference
```

---

## 1.4. Reuse Before New Knowledge

Một concept đã học phải được sử dụng lại trong context mới trước khi introducing thêm abstraction.

Ví dụ:

```text
Closure
→ Async
→ React Hooks
→ Memory
```

Không:

```text
Closure
[never used again]
```

---

## 1.5. Production Context

Mọi knowledge đáng kể phải eventually trả lời:

> **Nó giúp ích gì trong production?**

Không nhất thiết lesson nào cũng có production incident, nhưng concept quan trọng phải có.

---

## 1.6. Depth Over Coverage

Không cố biến learner thành:

> “người biết tên của 500 công nghệ.”

Mục tiêu:

> **ít core concepts nhưng hiểu đủ sâu để transfer sang technology mới.**

---

# 2. LESSON DEPTH CONTRACT

Mỗi lesson bắt buộc khai báo:

```text id="h4rv3c"
Depth Target:
L1 / L2 / L3 / L4 / L5 / L6 / L7 / L8
```

Và:

```text id="t2owp6"
Out of Scope:
...
```

Ví dụ:

### Event Loop

```text
Target: L6

Must:
- task
- microtask
- scheduling
- execution order
- browser relation

Out of Scope:
- implement browser event loop
- browser source code
- OS scheduler internals
```

---

# 3. LESSON STANDARD TEMPLATE

Mọi lesson từ nay sử dụng cấu trúc:

```text
# Lesson X.X.X — Topic

## 0. Metadata

## 1. Why This Exists

## 2. Prerequisites

## 3. Learning Objectives

## 4. Mental Model

## 5. Core Concepts

## 6. Worked Example

## 7. Prediction Exercise

## 8. Implementation Lab

## 9. Edge Cases

## 10. Debug Lab

## 11. Design Exercise

## 12. Production Scenario

## 13. AI-assisted Exercise

## 14. Teach Back

## 15. Assessment

## 16. Exit Criteria

## 17. Spiral Connection
```

Không phải lesson nào cũng cần tất cả phần với độ dài bằng nhau.

Nhưng **logic này là canonical structure**.

---

# 4. PHẦN 0 — METADATA

Mỗi lesson ghi:

```text
Stage:
Module:
Lesson:

Competency:
Depth:

Prerequisites:
Estimated Cognitive Load:
```

Ví dụ:

```text
Stage: 1
Module: Execution Model
Lesson: 1.4 — Closure

Competency:
C02 — JavaScript Runtime

Depth:
L6

Prerequisites:
Scope
Lexical Environment
Function

Cognitive Load:
High
```

---

# 5. PHẦN 1 — WHY THIS EXISTS

Không bắt đầu bằng definition.

Bắt đầu bằng problem.

Ví dụ Closure:

### Không tốt

> Closure là function có quyền truy cập lexical environment của outer scope.

### Tốt

```text
Bạn tạo một function bên trong function khác.

Outer function return.

Nhưng function bên trong vẫn đọc được
dữ liệu của outer function.

Tại sao?

Problem này xuất hiện trong:
- callbacks
- async
- React
- state libraries
- memory retention
```

Sau đó mới giới thiệu Closure.

---

# 6. PHẦN 2 — PREREQUISITES

Phải chỉ rõ knowledge nào learner phải có.

Ví dụ:

```text
Closure
requires:

S0:
Function

S1:
Scope
Lexical Environment
Variable Resolution
```

Nếu prerequisite chưa đủ:

> không tiếp tục lesson như bình thường.

Curriculum phải có **remediation path**.

---

# 7. PHẦN 3 — LEARNING OBJECTIVES

Objectives phải observable.

Không:

> Understand closure.

Mà:

```text id="k0r8y4"
By the end, learner can:

1. Trace a closure environment.
2. Explain why outer variables remain reachable.
3. Implement private state.
4. Diagnose stale closure.
5. Identify memory retention risks.
```

---

# 8. PHẦN 4 — MENTAL MODEL

Đây là phần trung tâm.

Một mental model tốt phải:

```text id="8q3hck"
simple enough to hold in working memory
+
accurate enough to predict behavior
+
extensible to later topics
```

Ví dụ Closure:

```text id="e6otgo"
Function Created
      ↓
Lexical Environment Reference
      ↓
Function Escapes
      ↓
Outer Environment Remains Reachable
      ↓
Callback Can Access Captured Variables
```

Không nên dùng simplification gây hiểu sai về engine.

---

# 9. PHẦN 5 — CORE CONCEPTS

Chia thành:

```text
Essential
Supporting
Awareness
```

Ví dụ Event Loop:

### Essential

```text
Call Stack
Task
Microtask
Microtask checkpoint
```

### Supporting

```text
Timer
Promise reaction
Rendering opportunity
```

### Awareness

```text
Browser scheduling implementation
```

Điều này giúp kiểm soát cognitive load.

---

# 10. PHẦN 6 — WORKED EXAMPLE

Mỗi concept quan trọng phải có ít nhất một example được giải thích **từng bước**.

Không chỉ:

```js
const x = ...
```

Mà:

```text
Step 1:
context created

Step 2:
binding created

Step 3:
function returned

Step 4:
callback retains environment

Step 5:
callback executes later
```

Worked example là nơi mentor **model cách suy nghĩ**.

---

# 11. PHẦN 7 — PREDICTION EXERCISE

Dùng khi topic có deterministic behavior.

Format:

```text
DO NOT RUN.

Predict:
1. Output
2. Error or no error
3. Why
```

Sau đó:

```text
Run
→ Compare
→ Explain discrepancy
```

### Levels

```text
P1 — simple
P2 — mixed concepts
P3 — misleading code
P4 — production-like scenario
```

---

# 12. PHẦN 8 — IMPLEMENTATION LAB

Implementation phải tăng dần:

```text
L1 — Guided
L2 — Partial scaffold
L3 — Independent
L4 — Constraint-based
```

Ví dụ Promise:

```text
Guided:
implement state

Scaffold:
implement then

Independent:
chain

Constraint:
support error propagation
```

---

# 13. PHẦN 9 — EDGE CASES

Một lesson chỉ thực sự hoàn chỉnh khi learner biết:

> **Khi nào mental model này không behave theo case đơn giản?**

Ví dụ `this`:

```text
method call
detached function
call
apply
bind
new
arrow
timer
destructuring
```

Edge case không được dùng để khoe knowledge.

Mỗi edge case phải có mục đích:

```text
common production bug
or
mental model boundary
```

---

# 14. PHẦN 10 — DEBUG LAB

Đây là phần bắt buộc từ L3 trở lên.

Format:

```text
Symptom
↓
Reproduction
↓
Evidence
↓
Hypothesis
↓
Verification
↓
Root Cause
↓
Fix
↓
Regression Prevention
```

Không cho learner sửa code bằng trial-and-error.

---

# 15. PHẦN 11 — DESIGN EXERCISE

Chỉ áp dụng từ topic có architectural implications.

Ví dụ:

### Closure

> Thiết kế private state.

### Promise

> Thiết kế retry helper.

### State

> Chọn state owner.

### Cache

> Chọn cache strategy.

### Architecture

> Thiết kế module boundaries.

Design exercise luôn phải có:

```text
Context
Constraints
Options
Decision
Trade-offs
```

---

# 16. PHẦN 12 — PRODUCTION SCENARIO

Mỗi competency quan trọng phải chuyển từ:

```text
toy problem
```

sang:

```text
real-world problem
```

Ví dụ:

### Promise

```text
Search request race
```

### Closure

```text
React stale callback
```

### Cache

```text
User sees stale product price
```

### Memory

```text
SPA memory grows after navigation
```

### Architecture

```text
Five teams need shared UI platform
```

---

# 17. PHẦN 13 — AI-ASSISTED EXERCISE

AI sẽ **không được phép giải bài thay learner** ở mọi lesson.

AI interaction cũng phải tăng level.

---

## Level A — Ask

Learner hỏi AI:

> Explain this concept.

Chỉ dùng ở early stages.

---

## Level B — Challenge

Learner đưa solution cho AI review.

```text
Human solution
→ AI critique
→ Human verification
```

---

## Level C — Delegate

AI implement một phần task.

Learner phải:

```text
specify
→ inspect
→ test
→ verify
→ own
```

---

## Level D — Adversarial Review

AI tạo solution cố tình có:

```text
race
security bug
performance issue
architecture smell
```

Learner phải phát hiện.

---

## Level E — Staff

AI được giao:

> phân tích 3 architecture alternatives.

Learner phải:

```text
evaluate assumptions
verify evidence
challenge AI
make final decision
```

---

# 18. PHẦN 14 — TEACH BACK

Mỗi major concept phải có teach-back.

Không yêu cầu lecture dài.

Có thể:

```text
2-minute explanation
```

hoặc:

```text
draw diagram
```

hoặc:

```text
review another person's code
```

### Tiêu chí

Learner phải:

```text
accurate
clear
causal
```

Không chỉ đọc definition.

---

# 19. PHẦN 15 — ASSESSMENT

Assessment không chỉ có quiz.

Mỗi lesson chọn một hoặc nhiều:

```text
Prediction
Implementation
Debugging
Design
Review
Teach-back
```

### Mapping

```text
L1–L2
→ Recall / Explain

L3
→ Use

L4
→ Debug

L5
→ Implement

L6
→ Design

L7
→ Judge

L8
→ Teach / Leverage
```

---

# 20. PHẦN 16 — EXIT CRITERIA

Exit criteria phải observable.

Ví dụ:

### Event Loop

Không:

> Understand Event Loop.

Mà:

```text
Can correctly predict 8/10 mixed
task/microtask/async execution scenarios.

Can explain the result using:
call stack + scheduling + microtask checkpoint.
```

### React Performance

```text
Can profile a real interaction,
identify primary bottleneck,
apply one targeted fix,
and demonstrate measurable improvement.
```

---

# 21. PHẦN 17 — SPIRAL CONNECTION

Mỗi major lesson phải khai báo:

```text
Previous:
What did learner know before?

Current:
What new mental model is introduced?

Next:
Where will this concept return?
```

Ví dụ Closure:

```text
Previous:
Function + Scope

Current:
Closure

Next:
Async callback
React stale closure
Memory retention
```

Đây chính là cách learner biết:

> “Tại sao tôi đang học thứ này?”

---

# 22. MODULE TEACHING SPEC

Lesson nằm trong Module.

Module có một cấu trúc riêng:

```text
# Module

## 0. Module Purpose

## 1. Why It Matters

## 2. Competencies

## 3. Prerequisite Graph

## 4. Concept Map

## 5. Lesson Sequence

## 6. Integration Lab

## 7. Failure Lab

## 8. Design Lab

## 9. Teach-back

## 10. Module Assessment

## 11. Exit Criteria

## 12. Spiral Connections
```

---

# 23. MODULE SEQUENCE RULE

Các lesson trong một module không được xếp theo:

> “thứ gì hay thì dạy trước.”

Mà theo:

```text
Foundation
 ↓
Mechanism
 ↓
Behavior
 ↓
Failure
 ↓
Application
 ↓
Design
```

Ví dụ:

### Promise

```text
State
 ↓
Creation
 ↓
Resolution
 ↓
then
 ↓
Chaining
 ↓
Errors
 ↓
Combinators
 ↓
Concurrency
 ↓
Production
```

---

# 24. STAGE TEACHING SPEC

Một Stage có:

```text
# Stage

## 0. Purpose

## 1. Competency Targets

## 2. Prerequisites

## 3. Concept Dependency Graph

## 4. Modules

## 5. Spiral Concepts

## 6. Project Spine

## 7. Assessment

## 8. Failure Scenarios

## 9. Exit Criteria

## 10. Next-stage Bridge
```

---

# 25. STAGE EXIT RULE

Một Stage chỉ PASS khi:

```text
Knowledge
+
Implementation
+
Debugging
+
Integration
```

đạt yêu cầu.

Ví dụ Stage 3 không pass chỉ vì:

> biết Promise.

Phải:

```text
Promise
+
Event Loop
+
Concurrency
+
Cancellation
+
Race Condition
+
Production Async Project
```

---

# 26. PROJECT TEACHING SPEC

Project là **capstone integration**, không phải lesson dài.

Mỗi project có:

```text
# Project

## Context

## Product Goal

## Technical Constraints

## New Competencies

## Reused Competencies

## Requirements

## Architecture Constraints

## Failure Injection

## Performance/Security Expectations

## Test Requirements

## Deliverables

## Review Rubric

## Exit Criteria
```

---

# 27. FAILURE INJECTION STANDARD

Các project từ Stage 3 trở đi nên có **intentional failures**.

Ví dụ:

```text
P3
race condition

P5
timeout
retry storm

P8
stale closure
unnecessary renders

P9
a11y bug
offline bug

P10
hydration mismatch
cache bug
authorization bug

P11
memory leak
XSS
INP regression

P12
dependency cycle

P13
bad deployment

P14
wrong architecture decision

P15
cross-team strategy failure
```

Đây là cách biến course thành:

> **engineering simulation.**

---

# 28. LESSON QUALITY RUBRIC

Một lesson trước khi được đưa vào khóa chính thức phải được chấm:

| Tiêu chí     | 0       | 1          | 2              |
| ------------ | ------- | ---------- | -------------- |
| Why          | unclear | acceptable | compelling     |
| Prerequisite | missing | partial    | explicit       |
| Mental Model | absent  | simplified | predictive     |
| Example      | weak    | useful     | representative |
| Practice     | passive | basic      | deliberate     |
| Failure      | none    | edge case  | production bug |
| Debugging    | none    | guided     | independent    |
| Design       | none    | simple     | trade-off      |
| Assessment   | vague   | measurable | mastery-based  |
| Spiral       | none    | noted      | intentional    |

Minimum:

```text
≥ 16/20
```

Lesson <16:

> **không được đưa vào Core.**

---

# 29. COURSE QUALITY RUBRIC

Toàn bộ Stage phải đạt:

```text
Dependency correctness
+
Cognitive load control
+
Depth consistency
+
Practice density
+
Project integration
+
Assessment validity
+
Spiral coherence
```

Không để:

```text
Stage 0 → beginner textbook
Stage 8 → framework tutorial
Stage 14 → random leadership advice
```

Mà phải cảm thấy như **một khóa học duy nhất**.

---

# 30. MENTORING PROTOCOL

Vì đây là khóa học có AI mentor, mentor cũng phải có protocol.

Không phải lúc nào AI cũng giải thích ngay.

### Khi learner chưa hiểu concept:

```text
Clarify misconception
→ smaller example
→ prediction
→ retry
```

### Khi learner implementation sai:

```text
Don't give solution immediately.

Ask:
What did you expect?
What happened?
Where does behavior diverge?
```

### Khi learner stuck quá lâu:

```text
Hint
→ partial explanation
→ targeted example
→ solution only as final escalation
```

---

# 31. KHÔNG ĐƯỢC DẠY BẰNG “THUỘC LÒNG”

Các câu trả lời như:

```text
“Closure là...”
“Event Loop là...”
“Fiber là...”
```

chưa đủ.

Learner phải chứng minh:

```text
predict
+
trace
+
apply
+
debug
```

---

# 32. MENTAL MODEL QUALITY RUBRIC

Một mental model được coi là tốt khi nó có 4 tính chất:

### Predictive

Dự đoán behavior.

### Causal

Giải thích tại sao.

### Transferable

Áp dụng sang context mới.

### Bounded

Biết giới hạn của model.

Ví dụ:

> `await` “pause function”

là model useful sơ cấp.

Nhưng ở level cao hơn phải hiểu:

```text
async function continuation
+
Promise reaction
+
scheduling
```

và biết đây là **mental model**, không phải implementation specification hoàn chỉnh.

---

# 33. AI USAGE QUALITY RUBRIC

AI usage cũng được đánh giá.

## Bad

```text
Prompt
→ copy
→ run
→ submit
```

## Acceptable

```text
Ask
→ understand
→ implement
→ verify
```

## Strong

```text
Specify
→ delegate
→ inspect
→ test
→ challenge
→ verify
→ own
```

## Staff-level

```text
AI generates alternatives
→ human validates assumptions
→ human decides
→ organization learns
```

---

# 34. GLOBAL COURSE RULE — “PROVE IT”

Bất kỳ competency quan trọng nào cũng phải có bằng chứng.

Không:

> “Tôi hiểu.”

Mà:

```text
Prediction → evidence
Implementation → code
Debugging → root cause
Design → ADR
Performance → measurement
Architecture → trade-off
Leadership → outcome
```

---

# 35. GLOBAL COURSE RULE — “NO MAGIC”

Khi gặp abstraction:

```text
React
TanStack Query
Zustand
Next.js
Zod
Vite
```

phải có ít nhất một lesson:

> **What problem exists underneath this abstraction?**

Ví dụ:

```text
TanStack Query
↓
cache + async lifecycle + deduplication

React
↓
UI state synchronization + rendering model

Next.js
↓
routing + rendering + server/client boundaries

Zod
↓
runtime trust boundary
```

---

# 36. GLOBAL COURSE RULE — “TRANSFER”

Sau khi học một concept, luôn có một bài:

> **“Giải quyết một problem mới không giống ví dụ trong lesson.”**

Ví dụ học debounce:

Không chỉ:

```text
search box
```

mà:

```text
autosave
resize
analytics batching
```

Điều này kiểm tra transfer, không phải memorization.

---

# 37. GLOBAL COURSE RULE — “CONSTRAINT”

Từ Stage 8 trở đi, bài tập phải có constraints.

Ví dụ:

```text
You cannot:
- add another library
- modify backend
- increase server resources
- rewrite component tree

You must:
- reduce INP
- preserve accessibility
- keep API contract
```

Đây mới tạo ra engineering judgment.

---

# 38. GLOBAL COURSE RULE — “AMBIGUITY”

Từ Stage 12 trở đi, bài tập không cung cấp đủ information.

Learner phải:

```text
Ask questions
→ discover constraints
→ make assumptions explicit
```

Đây là cầu nối sang Senior/Staff.

---

# 39. GLOBAL COURSE RULE — “REALISTIC IMPERFECTION”

Không phải project nào cũng được viết clean ngay từ đầu.

Một số project phải cố tình có:

```text
technical debt
duplicate state
legacy API
bad abstraction
performance regression
```

Learner phải làm:

```text
characterize
→ stabilize
→ improve
```

---

# 40. FINAL TEACHING PIPELINE

Đây là canonical learning loop của toàn khóa:

```text
                 ┌───────────────┐
                 │      WHY      │
                 └───────┬───────┘
                         ↓
                 ┌───────────────┐
                 │ MENTAL MODEL  │
                 └───────┬───────┘
                         ↓
                 ┌───────────────┐
                 │   PREDICT     │
                 └───────┬───────┘
                         ↓
                 ┌───────────────┐
                 │  IMPLEMENT    │
                 └───────┬───────┘
                         ↓
                 ┌───────────────┐
                 │     BREAK     │
                 └───────┬───────┘
                         ↓
                 ┌───────────────┐
                 │    DEBUG      │
                 └───────┬───────┘
                         ↓
                 ┌───────────────┐
                 │    DESIGN     │
                 └───────┬───────┘
                         ↓
                 ┌───────────────┐
                 │     JUDGE     │
                 └───────┬───────┘
                         ↓
                 ┌───────────────┐
                 │   TEACH BACK  │
                 └───────┬───────┘
                         ↓
                 ┌───────────────┐
                 │    SPIRAL     │
                 └───────────────┘
```

Đây là **learning engine của toàn bộ course**.

---

# 41. MASTER TEACHING SPEC — FINAL CONTRACT

Từ giờ mọi content trong `JAVASCRIPT ENGINEERING MASTERY` phải obey 10 nguyên tắc:

```text id="xag8xy"
1. Competency-driven
2. Depth-defined
3. Mental-model-first
4. Prediction-before-execution
5. Failure-driven
6. Implementation-heavy
7. Debugging-heavy
8. Production-oriented
9. Spiral-integrated
10. Evidence-based assessment
```

Và đặc biệt:

> **Không thêm kiến thức chỉ vì nó thú vị.**

Một topic chỉ được đưa vào Core nếu nó:

```text id="f2dkte"
improves a target competency
+
has a real engineering use
+
has a clear dependency
+
has an appropriate depth
```

---

# 42. TRẠNG THÁI CURRICULUM HIỆN TẠI

Đến đây chúng ta đã khóa được:

```text
✅ Master Roadmap
✅ 16 Stages
✅ Global Competency Model
✅ Depth Model
✅ Dependency Model
✅ Spiral Model
✅ Project Spine
✅ Assessment Model
✅ Lesson Template
✅ Module Template
✅ Stage Template
✅ Project Template
✅ AI Learning Protocol
✅ Mentor Protocol
✅ Quality Rubric
✅ Senior/Staff progression
```

Vì vậy **không cần tiếp tục thiết kế meta-layer nữa**.

Bước tiếp theo là bắt đầu xây **course content thật**.

---

