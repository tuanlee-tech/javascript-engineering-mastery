# JAVASCRIPT ENGINEERING MASTERY

## STAGE 14 — SENIOR ENGINEERING

### Detailed Curriculum v1

---

# 0. Stage Overview

Stage 0–13 đã xây gần như toàn bộ **technical foundation**:

```text
JavaScript
→ Runtime
→ Browser
→ Network
→ TypeScript
→ Tooling
→ React
→ Production
→ Next.js
→ Performance
→ Security
→ Architecture
→ Operations
```

Nhưng Senior không được định nghĩa bởi:

> biết thêm 20 thư viện.

Senior được định nghĩa bởi khả năng:

> **nhận một problem chưa hoàn toàn rõ ràng, biến nó thành một quyết định kỹ thuật có thể thực thi, cân bằng trade-off và chịu trách nhiệm về kết quả.**

Vì vậy Stage 14 là một **change of learning mode**.

Các Stage trước:

```text
Learn
→ Implement
→ Debug
→ Optimize
```

Stage 14:

```text
Ambiguity
→ Clarify
→ Model
→ Explore
→ Decide
→ Execute
→ Measure
→ Own
```

---

# 1. Mục tiêu của Stage 14

Sau Stage 14, người học phải có thể:

```text
1. Nhận requirement mơ hồ.
2. Tìm hidden constraints.
3. Xác định problem thật.
4. Đề xuất nhiều solution.
5. Phân tích trade-off.
6. Chọn một decision.
7. Bảo vệ decision trước phản biện.
8. Implement incremental.
9. Đo kết quả.
10. Nhận trách nhiệm khi decision sai.
```

Đây là **Senior Engineering Core**.

Staff sẽ tiếp tục nâng những năng lực này lên cấp:

```text
team
→ cross-team
→ organization
```

ở Stage 15.

---

# 2. Phạm vi kiến thức

Stage 14 gồm **8 Modules / 38 Lessons**:

```text
14.1 Problem Framing & Requirements
14.2 Technical Decision Making
14.3 Code Review & Engineering Standards
14.4 Refactoring & Technical Debt
14.5 Legacy & Migration Engineering
14.6 Risk & Failure Thinking
14.7 Technical Communication
14.8 Senior Simulation
```

---

# 3. MODULE 14.1 — PROBLEM FRAMING & REQUIREMENTS

## Mục tiêu

Senior không bắt đầu bằng:

> “Em sẽ dùng React Query.”

Senior bắt đầu bằng:

> **“Business đang cố đạt kết quả gì?”**

---

## Lesson 14.1.1 — Requirement vs Solution

Ví dụ:

> “Cần realtime dashboard.”

Đây là:

```text
solution request
```

chưa phải requirement hoàn chỉnh.

Phải hỏi:

```text
Ai cần?
Thông tin nào?
Bao nhiêu latency?
Bao nhiêu users?
Tần suất update?
Nếu delay 5 giây có chấp nhận được không?
```

---

## Lesson 14.1.2 — Outcome vs Output

Phân biệt:

```text
Output:
build dashboard

Outcome:
reduce support response time by 30%
```

Senior quan tâm outcome.

---

## Lesson 14.1.3 — Clarifying Questions

Học cách hỏi câu hỏi có leverage cao:

```text
Who?
Why?
What?
How often?
How much?
What happens if it fails?
What constraints exist?
```

Không hỏi lan man.

---

## Lesson 14.1.4 — Hidden Constraints

Ví dụ:

```text
Deadline: 6 weeks
Team: 3 developers
Legacy API
Mobile required
Security constraint
No backend changes
```

Requirement thật sự là:

```text
goal + constraints
```

---

## Lesson 14.1.5 — Acceptance Criteria

Biến requirement mơ hồ thành:

```text
Given
When
Then
```

hoặc measurable criteria.

---

## Lesson 14.1.6 — Non-functional Requirements

Ngoài functionality:

* latency
* availability
* security
* accessibility
* scalability
* maintainability
* observability

---

## Lesson 14.1.7 — Scope Management

Phân biệt:

```text
must have
should have
could have
not now
```

Senior phải biết **nói không** với scope không cần thiết.

---

## Lesson 14.1.8 — Problem Framing Lab

Input:

> “Business muốn app phải nhanh hơn.”

Người học phải biến thành:

```text
target users
current baseline
metric
target
constraint
deadline
```

---

# 4. MODULE 14.2 — TECHNICAL DECISION MAKING

## Mục tiêu

Không tìm “solution tốt nhất”.

Tìm:

> **solution phù hợp nhất với constraint hiện tại.**

---

## Lesson 14.2.1 — Alternatives

Mọi decision quan trọng phải có ít nhất:

```text
Option A
Option B
Option C
```

trước khi chọn.

---

## Lesson 14.2.2 — Trade-off

Framework:

```text
Correctness
Performance
Complexity
Cost
Risk
Time
Maintainability
Reversibility
```

---

## Lesson 14.2.3 — Decision Matrix

Ví dụ:

| Criterion   | Option A | Option B | Option C |
| ----------- | -------: | -------: | -------: |
| Time        |        9 |        6 |        3 |
| Complexity  |        4 |        7 |        8 |
| Performance |        6 |        9 |        8 |
| Risk        |        8 |        5 |        4 |

Không biến scoring thành “toán học giả”.

Matrix chỉ giúp làm trade-off explicit.

---

## Lesson 14.2.4 — Reversibility

Phân biệt:

```text
easy to reverse
vs
expensive to reverse
```

Decision càng khó đảo ngược → càng cần investigation.

---

## Lesson 14.2.5 — Local Optimization vs System Optimization

Ví dụ:

> giảm render time của component 30%.

Nhưng:

```text
architecture complexity +50%
```

Không nhất thiết là win.

---

## Lesson 14.2.6 — Build vs Buy

Đánh giá:

```text
Build
vs
Buy
vs
Adopt open source
```

theo:

* initial cost
* maintenance
* control
* vendor lock-in
* security
* time to value

---

## Lesson 14.2.7 — Decision Under Uncertainty

Không phải lúc nào cũng có đủ data.

Phải biết:

```text
Known
Unknown
Assumption
Risk
```

và có thể dùng:

```text
spike
prototype
proof of concept
```

để giảm uncertainty.

---

## Lesson 14.2.8 — ADR

Format chính:

```text
Context
Problem
Options
Decision
Trade-offs
Consequences
```

---

## Lesson 14.2.9 — Decision Review

Sau một thời gian:

```text
Decision
→ Result
→ Assumption correct?
→ Assumption wrong?
→ Keep?
→ Revisit?
```

Senior không coi decision cũ là chân lý.

---

# 5. MODULE 14.3 — CODE REVIEW & ENGINEERING STANDARDS

## Mục tiêu

Code review không phải:

> “style của tôi khác style của bạn.”

Mục tiêu:

> **bảo vệ correctness, maintainability và system health.**

---

## Lesson 14.3.1 — Review Mindset

Review:

```text
code
→ behavior
→ risk
→ architecture
```

---

## Lesson 14.3.2 — Review Order

Ưu tiên:

```text
1. Correctness
2. Security
3. Data integrity
4. Performance
5. Architecture
6. Maintainability
7. Style
```

---

## Lesson 14.3.3 — Review Questions

Ví dụ:

```text
Happy path?
Failure path?
Race condition?
Memory leak?
Security boundary?
Future change?
Test?
Observability?
```

---

## Lesson 14.3.4 — Good Review Comment

So sánh:

> “Code này xấu.”

với:

> “Nếu component unmount giữa request và response, callback này vẫn có thể update state. Ta có thể cancel hoặc ignore stale result không?”

---

## Lesson 14.3.5 — Blocking vs Non-blocking Feedback

Phân biệt:

```text
blocker
suggestion
nit
question
```

---

## Lesson 14.3.6 — Review the Design, Not Just the Code

Một PR có thể:

```text
code đẹp
tests tốt
```

nhưng architecture sai.

Senior phải review:

```text
boundary
data flow
ownership
dependency
```

---

## Lesson 14.3.7 — Review Lab

Người học nhận PR cố tình chứa:

* race condition
* unsafe HTML
* unnecessary global state
* missing cleanup
* poor component boundary
* weak test

Phải review như Senior.

---

# 6. MODULE 14.4 — REFACTORING & TECHNICAL DEBT

## Mục tiêu

Senior phải biết:

> khi nào refactor, khi nào không refactor.

---

## Lesson 14.4.1 — Code Smell

Nhận diện:

* duplication
* long function
* large component
* god module
* implicit coupling
* hidden side effects

---

## Lesson 14.4.2 — Refactor Safely

```text
Baseline
→ Small change
→ Test
→ Verify
→ Next change
```

---

## Lesson 14.4.3 — Refactor vs Rewrite

Đây là một bài decision quan trọng.

---

## Lesson 14.4.4 — Technical Debt

Technical debt có thể là:

```text
intentional
vs
accidental
```

Không phải mọi debt đều cần trả ngay.

---

## Lesson 14.4.5 — Debt Prioritization

Ưu tiên dựa trên:

```text
frequency
impact
risk
cost
```

---

## Lesson 14.4.6 — Refactoring Under Deadline

Scenario:

> còn 2 ngày release.

Phải chọn:

```text
refactor now
minimal fix
defer
```

và giải thích.

---

## Lesson 14.4.7 — Architecture Fitness Test

Sau refactor cần chứng minh:

```text
dependency
performance
tests
behavior
```

không regress.

---

# 7. MODULE 14.5 — LEGACY & MIGRATION ENGINEERING

## Mục tiêu

Senior không được phép chỉ giỏi greenfield.

Production thường là:

```text
old system
+
new system
+
business pressure
```

---

## Lesson 14.5.1 — Legacy Reality

Legacy không đồng nghĩa:

> code xấu.

Có thể là:

> code ổn nhưng không còn phù hợp với current constraints.

---

## Lesson 14.5.2 — Migration Strategies

So sánh:

```text
Big Bang
Incremental
Strangler
Parallel Run
Adapter
```

---

## Lesson 14.5.3 — Compatibility Layer

```text
Old API
 ↓
Adapter
 ↓
New API
```

---

## Lesson 14.5.4 — Strangler Pattern

```text
Legacy
 ↓
new boundary
 ↓
gradually replace
```

---

## Lesson 14.5.5 — Data Compatibility

Đặc biệt khi API shape thay đổi:

```text
old client
+
new server
```

hoặc ngược lại.

---

## Lesson 14.5.6 — Feature Flag Migration

```text
new implementation
      ↓
flag
      ↓
small segment
      ↓
100%
```

---

## Lesson 14.5.7 — Rollback-aware Migration

Phải trả lời:

> Nếu migration bước 3 fail thì quay lại bước 2 thế nào?

---

## Lesson 14.5.8 — Migration Metrics

Theo dõi:

```text
migration progress
error rate
performance
user impact
remaining legacy surface
```

---

## Lesson 14.5.9 — Legacy Migration Lab

Migration:

```text
Old frontend
      ↓
Adapter
      ↓
New feature
      ↓
Gradual migration
      ↓
Remove old path
```

---

# 8. MODULE 14.6 — RISK & FAILURE THINKING

## Mục tiêu

Senior không chỉ hỏi:

> “Happy path chạy không?”

Mà:

> **“Điều gì có thể sai?”**

---

## Lesson 14.6.1 — Risk Identification

Các loại:

```text
technical
security
performance
delivery
dependency
organizational
```

---

## Lesson 14.6.2 — Risk Matrix

```text
Impact × Probability
```

Phân biệt:

```text
high probability / low impact
low probability / catastrophic impact
```

---

## Lesson 14.6.3 — Blast Radius

Một change ảnh hưởng:

```text
component
feature
app
team
all users
```

Mục tiêu:

> giảm blast radius của change risky.

---

## Lesson 14.6.4 — Failure Mode Analysis

Cho feature:

```text
failure
→ effect
→ detection
→ mitigation
```

---

## Lesson 14.6.5 — Error Budget Thinking

Kết nối Stage 13.

Không phải mọi reliability improvement đều đáng làm ngay.

---

## Lesson 14.6.6 — Rollback Plan

Mọi risky decision phải trả lời:

```text
What?
When?
How?
Who?
```

---

## Lesson 14.6.7 — Pre-mortem

Trước release:

> “Giả sử project thất bại. Tại sao?”

Tạo danh sách failure trước khi chúng xảy ra.

---

## Lesson 14.6.8 — Risk Review

Một architecture proposal phải có:

```text
assumptions
risks
mitigations
unknowns
```

---

# 9. MODULE 14.7 — TECHNICAL COMMUNICATION

## Mục tiêu

Senior tạo impact thông qua **communication**, không chỉ code.

---

## Lesson 14.7.1 — Writing Technical Proposal

Một proposal tốt:

```text
Problem
Context
Constraints
Options
Recommendation
Risks
Rollout
```

---

## Lesson 14.7.2 — Architecture Diagram

Không vẽ diagram để đẹp.

Diagram phải trả lời một câu hỏi.

---

## Lesson 14.7.3 — Communicating Trade-offs

Không nói:

> “Option B tốt hơn.”

Mà:

> “Trong constraint X, B giảm complexity và deadline risk, đổi lại mất Y.”

---

## Lesson 14.7.4 — Disagreement

Khi reviewer phản đối:

```text
Understand
→ Clarify
→ Evidence
→ Trade-off
→ Decision
```

Không biến technical disagreement thành personal disagreement.

---

## Lesson 14.7.5 — Explaining to Non-technical Stakeholders

Ví dụ:

> “Tại sao không làm feature này trong 2 ngày?”

Phải giải thích bằng:

```text
scope
risk
dependencies
cost
```

không dùng jargon.

---

## Lesson 14.7.6 — Executive Summary

Có thể nói architecture decision trong:

```text
30 seconds
2 minutes
10 minutes
```

mà vẫn giữ được bản chất.

---

## Lesson 14.7.7 — Teach-back

Senior phải có khả năng:

> biến knowledge cá nhân thành knowledge của team.

---

# 10. MODULE 14.8 — SENIOR SIMULATION

Đây là module quan trọng nhất.

Không học thêm API.

Người học giải quyết **case mơ hồ**.

---

# Scenario 1 — Performance

Business:

> “Dashboard quá chậm.”

Context:

```text
50K users
React
Next.js
10K rows
multiple API calls
```

Người học phải:

```text
Clarify
→ Measure
→ Profile
→ Identify bottleneck
→ Options
→ Decision
→ Verify
```

---

# Scenario 2 — Rewrite Request

Product:

> “Rewrite toàn bộ frontend.”

Người học không được đồng ý ngay.

Phải hỏi:

```text
Why?
What is actually failing?
What outcome?
What constraints?
What can incremental migration achieve?
```

---

# Scenario 3 — State Management

Team đề xuất:

> “Đưa toàn bộ state vào Redux.”

Người học phải challenge:

```text
What state?
Who owns it?
Server or client?
Derived?
URL?
Persistence?
Why global?
```

---

# Scenario 4 — Micro-frontends

Company muốn:

> “Chúng ta phải dùng micro-frontends vì có nhiều team.”

Người học phải evaluate:

```text
team boundaries
deploy independence
runtime complexity
design system
observability
failure modes
```

---

# Scenario 5 — Third-party Dependency

Team muốn thêm một SDK lớn.

Package:

```text
+700KB
```

Nhưng business feature quan trọng.

Phải quyết định:

```text
accept
replace
lazy-load
server-side
negotiate vendor
```

---

# Scenario 6 — Production Incident

02:00 AM:

```text
checkout errors: 12%
```

Có ba khả năng:

```text
frontend deployment
BFF change
payment provider
```

Người học phải lead incident:

```text
triage
→ contain
→ investigate
→ communicate
→ recover
```

---

# Scenario 7 — Legacy

Một module:

```text
5 years old
20K LOC
poor test coverage
```

Business muốn thay đổi nhanh.

Phải thiết kế:

```text
stabilize
→ characterize
→ boundary
→ migrate
```

---

# Scenario 8 — Conflicting Requirements

Product:

> Ship in 2 weeks.

Security:

> Need additional controls.

Design:

> Need major UX changes.

Engineering:

> Architecture can't safely support all.

Người học phải:

```text
clarify
→ prioritize
→ expose trade-offs
→ negotiate scope
→ decide
```

---

# 11. INTEGRATION PROJECT — STAGE 14

# Project 14 — Senior Engineering Challenge

Không xây một application mới từ zero.

Thay vào đó nhận một codebase có:

```text
messy architecture
+
legacy code
+
performance issues
+
technical debt
+
ambiguous requirements
+
production incident
```

---

# Phase 1 — Discovery

Không được sửa code.

Phải:

```text
map architecture
identify risks
measure baseline
understand domain
```

Deliverable:

```text
System Map
Risk Register
Baseline Metrics
```

---

# Phase 2 — Problem Framing

Business đưa requirement mơ hồ.

Người học phải:

```text
clarify
→ acceptance criteria
→ constraints
→ non-functional requirements
```

---

# Phase 3 — Options

Đưa ít nhất:

```text
Option A
Option B
Option C
```

---

# Phase 4 — Decision

Viết:

```text
ADR
```

và bảo vệ trước một reviewer giả lập.

---

# Phase 5 — Implementation

Implement incremental.

Không rewrite toàn hệ thống.

---

# Phase 6 — Review

Tự review:

```text
correctness
security
performance
architecture
testing
observability
```

---

# Phase 7 — Incident

Inject production failure.

Người học phải xử lý.

---

# Phase 8 — Postmortem

Viết:

```text
What happened?
Why?
What went well?
What failed?
What changes?
```

---

# 12. SENIOR EDGE CASE LAB

## Case 1 — Correct Code, Wrong Architecture

Code pass tests nhưng tạo coupling ngược.

---

## Case 2 — Faster but Worse

Optimization giảm:

```text
LCP -500ms
```

nhưng tăng:

```text
maintenance cost
```

Quyết định giữ hay rollback.

---

## Case 3 — Deadline vs Quality

Deadline thật sự không thể dịch.

Xác định:

```text
must retain
safe to defer
unsafe to ship
```

---

## Case 4 — Team Disagreement

Hai Staff-level developers đưa hai architecture khác nhau.

Không được vote theo seniority.

Thiết kế decision process.

---

## Case 5 — False Consensus

Team đồng ý nhanh vì:

> “mọi người đều nghĩ vậy.”

Tìm assumption chưa được kiểm chứng.

---

# 13. RE-IMPLEMENTATION / PRACTICE LAB

Stage 14 không tập trung vào viết library.

Thay vào đó:

### 13.1 — ADR Practice

Viết 10 ADR ngắn.

### 13.2 — Code Review Practice

Review 10 PR.

### 13.3 — Architecture Review

Review 5 architecture diagrams.

### 13.4 — Incident Leadership

Lead 5 incident simulations.

### 13.5 — Requirement Clarification

Xử lý 10 requirements mơ hồ.

### 13.6 — Refactoring

Thực hiện 3 incremental migration.

---

# 14. DECISION LOG

Mỗi quyết định quan trọng phải lưu:

```text
Decision
Date
Context
Alternatives
Why
Assumptions
Expected outcome
Actual outcome
```

Sau đó review lại.

Mục tiêu:

> biến judgment thành một kỹ năng có feedback loop.

---

# 15. EXIT CRITERIA — STAGE 14

## Problem Framing

* [ ] Phân biệt requirement và solution.
* [ ] Xác định outcome.
* [ ] Tìm hidden constraints.
* [ ] Viết acceptance criteria.
* [ ] Xác định non-functional requirements.

## Decision Making

* [ ] Đưa ra alternatives.
* [ ] Phân tích trade-off.
* [ ] Đánh giá reversibility.
* [ ] Phân biệt assumption và fact.
* [ ] Dùng prototype/spike để giảm uncertainty.
* [ ] Viết ADR.

## Code Review

* [ ] Review correctness.
* [ ] Review security.
* [ ] Review performance.
* [ ] Review architecture.
* [ ] Review failure mode.
* [ ] Phân biệt blocker/suggestion/nit.

## Refactoring

* [ ] Nhận diện technical debt.
* [ ] Ưu tiên debt.
* [ ] Refactor incremental.
* [ ] So sánh rewrite/refactor.
* [ ] Verify không regression.

## Migration

* [ ] Chọn migration strategy.
* [ ] Thiết kế compatibility layer.
* [ ] Thiết kế rollback.
* [ ] Dùng feature flag.
* [ ] Đo migration progress.

## Risk

* [ ] Threat/risk identification.
* [ ] Blast radius.
* [ ] Failure analysis.
* [ ] Pre-mortem.
* [ ] Mitigation.

## Communication

* [ ] Viết technical proposal.
* [ ] Viết ADR/RFC.
* [ ] Explain trade-offs.
* [ ] Disagree professionally.
* [ ] Explain technical issue cho non-engineer.
* [ ] Teach/mentor.

## Senior Judgment

* [ ] Giải quyết problem mơ hồ.
* [ ] Không nhảy vào solution quá sớm.
* [ ] Có thể challenge requirement.
* [ ] Có thể nói “không” có lý do.
* [ ] Có thể bảo vệ quyết định.
* [ ] Có thể nhận ra decision sai và thay đổi.

---

# 16. STAGE 14 CHECKPOINT

## Part A — Ambiguous Requirement

Input:

> “Cần hệ thống notification realtime, scale lớn và phải nhanh.”

Người học có 30 phút để:

```text
clarify
→ define constraints
→ define metrics
→ define unknowns
```

---

## Part B — Architecture Decision

Đưa ra 3 alternatives:

```text
Polling
SSE
WebSocket
```

Không được chỉ nói ưu/nhược điểm.

Phải chọn cho **context cụ thể**.

---

## Part C — Code Review

Review một PR khoảng 300–500 LOC.

Tìm:

```text
5 correctness issues
2 architecture issues
2 reliability issues
1 security issue
```

---

## Part D — Refactoring

Legacy module:

```text
3,000 LOC
```

Phải lập migration plan trước khi sửa.

---

## Part E — Incident Leadership

10 phút đầu của incident.

Người học phải:

```text
state impact
assign investigation
choose containment
communicate status
```

---

# 17. STAGE 14 CAPSTONE

# SENIOR ENGINEERING ASSESSMENT

Người học nhận:

```text
Large Frontend Codebase
+
Business Requirement
+
Technical Constraints
+
Production Incident
```

---

## Round 1 — Discovery

60 phút.

---

## Round 2 — Architecture Decision

90 phút.

Output:

```text
architecture diagram
ADR
risk register
migration strategy
```

---

## Round 3 — Implementation

Implement một vertical slice.

---

## Round 4 — Code Review

Review PR của chính mình + PR của người khác.

---

## Round 5 — Incident

Production system bị lỗi.

Người học lead response.

---

## Round 6 — Executive Presentation

10 phút:

```text
Problem
Decision
Why
Risk
Outcome
Next steps
```

Không trình bày implementation details không cần thiết.

---

# 18. STAGE 14 → STAGE 15 DEPENDENCY

Đây là điểm rất quan trọng.

Sau Stage 14:

```text
Individual Engineer
        ↓
Senior Engineer
```

Người học có thể:

```text
own feature
own system
make decisions
handle ambiguity
handle incidents
mentor individuals
```

Nhưng Staff không chỉ làm điều đó **tốt hơn**.

Staff mở rộng phạm vi:

```text
Feature
 ↓
System
 ↓
Team
 ↓
Multiple Teams
 ↓
Organization
```

Vì vậy Stage 15 sẽ không tiếp tục nhồi:

```text
thêm framework
thêm pattern
thêm API
```

Nó tập trung vào:

```text
Technical Strategy
Cross-team Architecture
Platform Thinking
Organizational Design
Technical Leadership
Mentoring
Influence
Long-term Investment
```

---

# 19. STAGE 14 CORE PRINCIPLE

Junior hỏi:

> “Em phải code thế nào?”

Mid hỏi:

> “Em nên dùng library nào?”

Senior hỏi:

> **“Problem thật là gì, constraint nào quan trọng, và solution nào đáng trả giá nhất?”**

Đó là lý do Stage 14 không có một công nghệ trung tâm.

Công nghệ đã được học ở Stage 0–13.

Stage 14 dạy thứ khó hơn:

```text
Knowledge
     ↓
Experience
     ↓
Judgment
```

Và curriculum chỉ có thể **mô phỏng** phần lớn environment mà production experience tạo ra.

Đây là boundary quan trọng:

> **Kết thúc Stage 14, curriculum có thể đưa người học đến Senior-capable/Senior-track về knowledge, engineering process và judgment simulation; nhưng không nên tuyên bố rằng vài tháng học có thể thay thế hoàn toàn nhiều năm ownership thực tế.**

---

# 20. CÂU HỎI CUỐI STAGE 14

Trước khi bước sang Staff Track, người học phải tự trả lời được:

```text
Tôi có biết giải quyết một problem chưa rõ ràng không?

Tôi có biết nói “không” khi solution được đề xuất là sai không?

Tôi có biết bảo vệ một quyết định mà không trở nên dogmatic không?

Tôi có biết khi nào mình sai không?

Tôi có biết rollback một quyết định không?

Tôi có biết biến một incident thành learning không?

Tôi có thể giúp một engineer khác đưa ra quyết định tốt hơn không?
```

Nếu câu trả lời cuối cùng vẫn là:

> **“Tôi làm tốt code của mình, nhưng team vẫn phải tự giải quyết mọi thứ khác.”**

thì chưa phải Staff.

Đó là lý do **Stage 15 sẽ là bước cuối cùng: STAFF ENGINEERING TRACK**.

