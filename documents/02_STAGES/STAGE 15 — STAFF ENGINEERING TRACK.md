# JAVASCRIPT ENGINEERING MASTERY

## STAGE 15 — STAFF ENGINEERING TRACK

### Detailed Curriculum v1

---

# 0. Stage Overview

Đây là **Stage cuối của curriculum**.

Nhưng cần xác định rất rõ:

> Stage 15 không nhằm “dạy cách trở thành Staff trong 6 tháng”.

Staff là năng lực được hình thành qua nhiều năm ownership, tổ chức, ảnh hưởng và technical judgment.

Mục tiêu của Stage 15 là:

> **đưa người học từ Senior Engineer có khả năng sở hữu một system → Staff-track Engineer có khả năng tạo ảnh hưởng lên nhiều systems, nhiều teams và hướng kỹ thuật dài hạn.**

Nếu Stage 14 là:

```text
Problem
 ↓
Decision
 ↓
Implementation
 ↓
Ownership
```

thì Stage 15 mở rộng:

```text
             ORGANIZATION

              Strategy
                 ↓
        ┌────────┴────────┐
        ↓                 ↓
   Architecture       Platform
        ↓                 ↓
      Teams             Teams
        ↓                 ↓
   Engineers          Engineers
        ↓                 ↓
        └────── Product ──┘
```

---

# 1. Staff thực sự khác Senior ở đâu?

Không đơn giản là:

```text
Senior = code tốt
Staff = code tốt hơn
```

Khác biệt chính nằm ở **scope of impact**.

### Senior

```text
Owns:
feature
system
project
technical decisions
```

### Staff

```text
Influences:
multiple systems
multiple teams
technical strategy
architecture direction
engineering standards
long-term technical investment
```

Senior tối ưu:

> **một phần hệ thống**

Staff thường tối ưu:

> **cách nhiều phần của tổ chức cùng phát triển hệ thống.**

---

# 2. Phạm vi Stage 15

Stage 15 gồm **8 Modules / 40 Lessons**:

```text
15.1 Staff Mental Model & Scope
15.2 Technical Strategy
15.3 Cross-team Architecture
15.4 Platform Engineering
15.5 Technical Leadership & Influence
15.6 Mentoring & Engineering Multiplication
15.7 Organizational Systems & Long-term Investment
15.8 Staff-level Simulation
```

---

# 3. MODULE 15.1 — STAFF MENTAL MODEL & SCOPE

## Mục tiêu

Thay đổi đơn vị tư duy:

```text
Senior:
feature / system

Staff:
system of systems / organization
```

---

## Lesson 15.1.1 — Scope of Impact

So sánh:

```text
Junior
→ task

Mid
→ feature

Senior
→ system

Staff
→ multiple systems / teams
```

---

## Lesson 15.1.2 — Technical Scope vs Organizational Scope

Một decision có thể ảnh hưởng:

```text
code
→ team
→ multiple teams
→ company
```

Phải biết nhận diện scope trước khi quyết định.

---

## Lesson 15.1.3 — Local vs Systemic Optimization

Ví dụ:

> Team A tối ưu tốc độ development bằng cách tạo framework riêng.

Local:

```text
Team A ↓ developer friction
```

System:

```text
5 teams
→ 5 frameworks
→ hiring complexity
→ maintenance cost
→ inconsistency
```

Staff phải nhìn được second-order effects.

---

## Lesson 15.1.4 — Leverage

Staff không cố làm tất cả.

Câu hỏi:

> Một giờ của tôi có thể tạo ra bao nhiêu giờ tiết kiệm cho người khác?

Ví dụ:

```text
documentation
tooling
platform
architecture
automation
mentoring
standards
```

---

## Lesson 15.1.5 — Multiplication

Nếu Senior giải quyết 10 problems:

```text
10 problems solved
```

Staff cố tạo system để:

```text
100 engineers
→ tránh 1,000 problems
```

Đây là một trong những mental model cốt lõi của Staff engineering.

---

## Lesson 15.1.6 — Staff Doesn't Mean “Manager”

Phân biệt:

```text
Staff Engineer
Engineering Manager
Tech Lead
Architect
```

Có overlap, nhưng khác primary responsibility.

---

## Lesson 15.1.7 — Ownership Without Authority

Staff thường phải:

> thay đổi direction của team mà không có quyền quản lý trực tiếp.

Vì vậy:

```text
authority
≠
influence
```

---

# 4. MODULE 15.2 — TECHNICAL STRATEGY

## Mục tiêu

Senior quyết định:

> feature nào nên xây?

Staff phải có khả năng tham gia quyết định:

> **technical direction của cả hệ thống nên đi đâu?**

---

## Lesson 15.2.1 — Technical Strategy

Strategy phải kết nối:

```text
Business Goals
      ↓
Technical Constraints
      ↓
Technical Direction
      ↓
Investment
      ↓
Expected Outcome
```

---

## Lesson 15.2.2 — Current State vs Target State

Mô hình:

```text
CURRENT
  ↓
Gap
  ↓
TARGET
```

Ví dụ:

```text
Current:
3 frontend apps
duplicate auth
duplicate UI
poor observability

Target:
shared platform
common auth
design system
consistent observability
```

---

## Lesson 15.2.3 — Technical Roadmap

Technical roadmap không phải danh sách:

```text
Q1 React
Q2 Next.js
Q3 Micro-frontends
```

Mà:

```text
Problem
→ Investment
→ Capability
→ Outcome
```

---

## Lesson 15.2.4 — Platform vs Product Investment

Ví dụ:

```text
Product feature
vs
internal platform
```

Platform không tạo revenue trực tiếp nhưng có thể:

```text
reduce delivery cost
reduce incidents
improve consistency
increase developer velocity
```

---

## Lesson 15.2.5 — Technical Investment Model

Đánh giá:

```text
impact
reach
cost
risk
confidence
time horizon
```

---

## Lesson 15.2.6 — Buy vs Build at Organizational Scale

Ở Stage 14 quyết định ở project scale.

Stage 15 mở rộng:

```text
one team
→ 10 teams
```

Một custom solution có thể trở thành organizational burden.

---

## Lesson 15.2.7 — Standardization

Khi nào standardize?

Ví dụ:

```text
logging
error handling
auth
API client
design tokens
CI
observability
```

---

## Lesson 15.2.8 — Standardization Cost

Không standardize mọi thứ.

Quá nhiều standards:

```text
innovation ↓
team autonomy ↓
bureaucracy ↑
```

Staff phải biết:

> standardize where consistency creates leverage.

---

# 5. MODULE 15.3 — CROSS-TEAM ARCHITECTURE

## Mục tiêu

Khi architecture vượt khỏi một team, vấn đề mới xuất hiện:

```text
dependency
ownership
coordination
compatibility
```

---

## Lesson 15.3.1 — Cross-team Boundary

Ví dụ:

```text
Team A
  ↓
API owned by Team B
  ↓
Platform owned by Team C
```

Ai chịu trách nhiệm?

---

## Lesson 15.3.2 — Team Topology Awareness

Không học organizational theory quá sâu.

Mục tiêu:

> architecture và team boundaries ảnh hưởng lẫn nhau.

---

## Lesson 15.3.3 — Conway's Law

Mental model:

> Architecture thường phản ánh communication structure của organization.

Không biến đây thành định luật tuyệt đối.

Mục tiêu:

> nhận ra team structure là một architectural input.

---

## Lesson 15.3.4 — Dependency Ownership

Mỗi critical dependency cần:

```text
owner
contract
SLO/expectation
support model
```

---

## Lesson 15.3.5 — API / Contract Governance

Nhiều teams phụ thuộc API:

```text
compatibility
versioning
deprecation
migration
```

---

## Lesson 15.3.6 — Cross-team Migration

Migration:

```text
Team A
Team B
Team C
```

không thể chỉ có một engineer sửa code.

Phải có:

```text
communication
timeline
ownership
sequence
dependency management
```

---

## Lesson 15.3.7 — Architecture Council / Review

Khi nào cần central review?

Khi nào để team tự quyết?

Phân tích:

```text
central governance
vs
team autonomy
```

---

## Lesson 15.3.8 — Cross-team Conflict

Ví dụ:

```text
Team A wants speed
Team B wants stability
Platform wants standardization
Product wants deadline
```

Staff phải tạo decision framework thay vì đứng về “team của mình”.

---

# 6. MODULE 15.4 — PLATFORM ENGINEERING

## Mục tiêu

Hiểu platform như một **product cho engineers**.

---

## Lesson 15.4.1 — What Is a Platform?

Platform cung cấp:

```text
capability
```

thay vì bắt mỗi team tự build.

Ví dụ:

```text
CI/CD
observability
authentication
design system
API client
testing infrastructure
deployment
```

---

## Lesson 15.4.2 — Platform as Internal Product

Platform có:

```text
users
UX
documentation
support
feedback
roadmap
```

Users ở đây là developers.

---

## Lesson 15.4.3 — Golden Paths

Ví dụ:

```text
create new frontend app
→ standard setup
→ CI
→ deployment
→ observability
```

mất 1 ngày thay vì 2 tuần.

---

## Lesson 15.4.4 — Self-service

Staff hỏi:

> Có thể để team tự phục vụ mà không cần Platform Engineer mỗi lần không?

---

## Lesson 15.4.5 — Guardrails

Platform tốt không:

> khóa mọi thứ.

Nó tạo:

```text
safe defaults
+
escape hatch
```

---

## Lesson 15.4.6 — Platform Adoption

Một platform tốt nhưng không ai dùng vẫn thất bại.

Đo:

```text
adoption
time saved
incident reduction
developer satisfaction
```

---

## Lesson 15.4.7 — Platform Debt

Platform cũng có:

```text
legacy
breaking changes
maintenance
ownership
```

---

## Lesson 15.4.8 — Platform Architecture Challenge

Thiết kế:

> Frontend Platform cho 20 teams.

Có:

```text
shared UI
CI
deployment
auth
observability
API conventions
```

---

# 7. MODULE 15.5 — TECHNICAL LEADERSHIP & INFLUENCE

## Mục tiêu

Staff phải khiến người khác **muốn** đi theo technical direction.

---

## Lesson 15.5.1 — Influence Without Authority

Nguồn influence:

```text
credibility
clarity
evidence
trust
consistency
```

Không phải:

```text
title
```

---

## Lesson 15.5.2 — Technical Facilitation

Một architecture meeting tốt phải:

```text
problem
→ context
→ options
→ disagreement
→ decision
→ owner
```

Không để meeting thành tranh luận không kết thúc.

---

## Lesson 15.5.3 — Resolving Technical Disagreement

Framework:

```text
What are we optimizing for?
What assumptions differ?
What evidence exists?
What risks are acceptable?
What experiment can reduce uncertainty?
```

---

## Lesson 15.5.4 — Saying No

Staff phải có khả năng:

> reject technical proposal.

Nhưng không chỉ:

> “Không.”

Mà:

```text
No
because
risk
alternative
next step
```

---

## Lesson 15.5.5 — Technical Narrative

Một Staff proposal phải có story:

```text
Current pain
→ Why now
→ Proposed direction
→ Expected outcome
→ Investment
→ Risk
```

---

## Lesson 15.5.6 — Stakeholder Management

Stakeholder có thể tối ưu:

```text
revenue
speed
risk
cost
quality
```

Staff phải đưa technical decision về cùng một ngôn ngữ business.

---

## Lesson 15.5.7 — Escalation

Biết khi nào:

```text
decide locally
seek input
escalate
```

---

## Lesson 15.5.8 — Leading Through Uncertainty

Khi chưa có answer:

> Staff không giả vờ chắc chắn.

Phải nói:

```text
What we know
What we don't know
What we believe
How we'll find out
```

---

# 8. MODULE 15.6 — MENTORING & ENGINEERING MULTIPLICATION

## Mục tiêu

Mentoring ở Staff level không phải:

> “giải thích cho junior một bug.”

Mà là:

> **giúp engineers khác tự đưa ra quyết định tốt hơn.**

---

## Lesson 15.6.1 — Teaching vs Mentoring

```text
Teaching
→ transfer knowledge

Mentoring
→ develop capability
```

---

## Lesson 15.6.2 — Don't Solve Every Problem

Senior mới thường:

> “Để anh sửa.”

Staff phải hỏi:

> “Em nghĩ nguyên nhân là gì?”

> “Có những options nào?”

> “Trade-off?”

---

## Lesson 15.6.3 — Code Review as Mentoring

Review phải tăng:

```text
technical judgment
```

không chỉ sửa code.

---

## Lesson 15.6.4 — Designing Learning Opportunities

Giao engineer khác:

```text
problem
```

nhưng giữ:

```text
support
guardrails
feedback
```

---

## Lesson 15.6.5 — Delegation

Staff không thể:

```text
do everything
```

Phải chuyển:

```text
ownership
not just tasks
```

---

## Lesson 15.6.6 — Growing Senior Engineers

Mentoring một Senior khác:

```text
implementation
→ ownership
→ architecture
→ influence
```

---

## Lesson 15.6.7 — Knowledge Distribution

Đừng để critical knowledge:

```text
“chỉ một người biết”
```

Tạo:

```text
docs
runbooks
design docs
pairing
training
```

---

## Lesson 15.6.8 — Measuring Multiplication

Một mentor tốt tạo ra:

```text
more independent engineers
```

không phải:

```text
more engineers asking mentor for answers
```

---

# 9. MODULE 15.7 — ORGANIZATIONAL SYSTEMS & LONG-TERM INVESTMENT

## Mục tiêu

Đây là nơi Staff bắt đầu nhìn engineering như một **system**.

---

## Lesson 15.7.1 — Technical Debt as Organizational Debt

Technical debt không chỉ tồn tại trong code.

Nó có thể là:

```text
process
architecture
platform
knowledge
ownership
documentation
```

---

## Lesson 15.7.2 — Developer Experience

DX bao gồm:

```text
setup
build
test
debug
deploy
observe
```

Đây là engineering productivity system.

---

## Lesson 15.7.3 — Developer Productivity Metrics

Không chỉ:

```text
commits
lines of code
```

Có thể quan tâm:

```text
lead time
build time
CI reliability
deployment frequency
change failure rate
time to restore
developer friction
```

---

## Lesson 15.7.4 — Technical Roadmap vs Product Roadmap

Technical roadmap phải:

```text
support product strategy
```

không trở thành danh sách “technology wishlist”.

---

## Lesson 15.7.5 — Investment Horizon

Phân biệt:

```text
1 sprint
1 quarter
1 year
3 years
```

Một số investment không thể justify bằng sprint-level ROI.

---

## Lesson 15.7.6 — Organizational Resilience

Nếu một Staff rời công ty:

```text
system collapses?
```

Nếu có:

> knowledge architecture quá centralized.

---

## Lesson 15.7.7 — Bus Factor

Critical knowledge phải được phân tán.

---

## Lesson 15.7.8 — Engineering Culture

Staff ảnh hưởng:

```text
how decisions are made
how incidents are handled
how quality is defined
how engineers learn
```

---

# 10. MODULE 15.8 — STAFF-LEVEL SIMULATION

Đây là capstone của toàn bộ khóa học.

Không học technology mới.

Người học phải **operate ở scope Staff**.

---

# Scenario 1 — Organization-wide Frontend Standard

Company có:

```text
20 frontend teams
15 applications
3 UI systems
4 API clients
inconsistent observability
```

Leadership yêu cầu:

> “Chuẩn hóa frontend.”

Không được bắt đầu bằng:

> “Dùng framework X.”

Phải:

```text
discover
→ identify pain
→ map duplication
→ estimate impact
→ options
→ strategy
→ rollout
```

---

# Scenario 2 — Platform Proposal

Thiết kế:

> Internal Frontend Platform.

Capabilities:

```text
app bootstrap
CI
deployment
observability
auth
design system
API client
performance baseline
```

Phải quyết định:

```text
central platform
vs
shared packages
vs
self-service tooling
```

---

# Scenario 3 — Micro-frontend Organization

5 teams muốn independent deployment.

Hiện tại:

```text
one giant frontend
```

Phải đánh giá:

```text
microfrontend
vs
modular monolith
vs
monorepo
```

theo:

```text
organizational
technical
operational
```

---

# Scenario 4 — Design System Governance

Có:

```text
20 teams
300 duplicated components
```

Đề xuất:

```text
design system
```

Nhưng một số teams không muốn sử dụng.

Staff phải giải quyết:

```text
adoption
governance
contribution
migration
exceptions
```

---

# Scenario 5 — Major Migration

Company muốn:

```text
Legacy Frontend
→ New Platform
```

Có:

```text
10 apps
20 teams
2-year horizon
```

Thiết kế:

```text
strategy
milestones
team ownership
compatibility
metrics
rollout
```

---

# Scenario 6 — Architecture Conflict

Hai nhóm tranh luận:

```text
Team A:
Micro-frontends

Team B:
Modular Monolith
```

Staff không được:

> chọn dựa trên preference.

Phải:

```text
reframe problem
→ define decision criteria
→ collect evidence
→ run spike if needed
→ decide
```

---

# Scenario 7 — Major Incident

Incident:

```text
40% users
cannot checkout
```

Không chỉ lead technical recovery.

Staff phải:

```text
technical response
+
cross-team coordination
+
stakeholder communication
+
follow-up strategy
```

---

# Scenario 8 — Technical Strategy Review

Leadership cho:

```text
Budget: X
Teams: 20
Time: 12 months
```

Các proposal:

```text
A — rewrite
B — platform
C — migration
D — reliability investment
```

Người học phải:

```text
prioritize investment
→ explain trade-offs
→ create roadmap
→ define success metrics
```

---

# 11. STAFF DECISION FRAMEWORK

Từ Stage 15 trở đi, mọi major decision dùng:

```text id="p2qzuw"
          PROBLEM
             ↓
        WHY NOW?
             ↓
        CONSTRAINTS
             ↓
          OPTIONS
       ┌─────┼─────┐
       ↓     ↓     ↓
      A      B      C
       └─────┼─────┘
             ↓
          TRADE-OFF
             ↓
           RISKS
             ↓
         DECISION
             ↓
        ROLLOUT PLAN
             ↓
        SUCCESS METRICS
             ↓
           REVIEW
```

Điểm mới so với Stage 14:

> **Decision không kết thúc ở “implement”.**

Nó kết thúc ở:

```text
outcome
→ organizational learning
```

---

# 12. STAFF ARTIFACTS

Một Staff Engineer phải có khả năng tạo các loại artifact:

### ADR

Quyết định kỹ thuật.

### RFC

Thay đổi architecture có scope lớn.

### Technical Strategy

Hướng đi dài hạn.

### Platform Proposal

Internal platform/business case.

### Migration Plan

Thay đổi hệ thống theo giai đoạn.

### Architecture Diagram

Communication tool.

### Runbook

Operational knowledge.

### Postmortem

Organizational learning.

### Technical Roadmap

Investment direction.

---

# 13. STAFF METRICS

Staff không nên đo impact bằng:

```text
LOC
PR count
hours coding
```

Có thể quan tâm:

```text id="sk5v7g"
developer lead time
change failure rate
build time
CI reliability
incident frequency
MTTR
performance
adoption
platform usage
migration progress
technical debt reduction
team autonomy
```

Điểm quan trọng:

> Metric phải phục vụ decision, không biến thành KPI vanity.

---

# 14. STAFF EDGE CASE LAB

## Case 1 — Platform Nobody Uses

Bạn xây platform rất tốt.

Nhưng adoption = 20%.

Phân tích:

```text
technical problem?
UX problem?
migration cost?
trust problem?
ownership?
```

---

## Case 2 — Standardization Resistance

Team nói:

> “Standard của platform làm team chậm.”

Staff phải tìm:

```text
real constraint
vs
preference
```

---

## Case 3 — Platform Becomes Bottleneck

Mọi team phải chờ Platform Team.

Staff phải chuyển:

```text
centralized service
→ self-service
```

---

## Case 4 — Too Much Governance

Architecture review có 8 approvals.

Delivery chậm.

Thiết kế governance nhẹ hơn.

---

## Case 5 — Staff Becomes Bottleneck

Mọi quyết định phải qua Staff.

Đó là failure.

Mục tiêu của Staff là:

```text
increase team decision quality
```

không phải:

```text
centralize decisions
```

---

## Case 6 — Wrong Strategy

Sau 6 tháng strategy rõ ràng là không đạt expected outcome.

Staff phải:

```text
acknowledge
→ analyze
→ revise
→ communicate
```

Không bảo vệ decision cũ vì ego.

---

# 15. RE-IMPLEMENTATION / PRACTICE LAB

Stage 15 không có “build thư viện”.

Thay vào đó:

### 15.1 — Write 10 ADRs

Scope khác nhau.

### 15.2 — Write 3 RFCs

Cross-team changes.

### 15.3 — Design 2 Platforms

Một nhỏ, một organizational scale.

### 15.4 — Lead 5 Architecture Reviews

Mỗi lần có conflict thật.

### 15.5 — Mentor Simulation

Giúp một Senior engineer giải quyết problem mà không đưa đáp án trực tiếp.

### 15.6 — Incident Leadership

Lead 3 organization-wide incidents.

### 15.7 — Strategy Planning

Viết 1-year technical roadmap.

---

# 16. FINAL PROJECT — STAFF ARCHITECTURE & STRATEGY CHALLENGE

Đây là **final assessment của toàn bộ curriculum**.

---

# Scenario

Một công ty có:

```text id="k8j4z5"
50 engineers
20 frontend teams
10 applications
Web + Mobile
10M users
legacy frontend
multiple backend services
multiple UI systems
inconsistent CI/CD
weak observability
```

Các vấn đề:

```text id="j4m5xq"
1. Delivery chậm
2. Frontend duplication
3. Design system fragmentation
4. Performance không nhất quán
5. Production incidents
6. Legacy platform
7. Teams conflict về architecture
8. Technical debt
```

Leadership đưa mục tiêu:

> “Tăng engineering velocity nhưng không làm reliability giảm.”

---

# Phase 1 — Discovery

Người học phải tìm:

```text id="13e2j0"
Current state
Pain points
Dependencies
Ownership
Constraints
Unknowns
```

Output:

```text
System Map
Problem Map
Risk Register
```

---

# Phase 2 — Problem Framing

Không được viết:

> “Chúng ta cần micro-frontends.”

Phải xác định:

```text id="7v0v1s"
Business outcome
Engineering outcome
Constraints
Success metrics
```

---

# Phase 3 — Strategic Options

Đưa ít nhất 3 strategy:

```text id="r3fpfh"
A — Incremental platformization
B — Modular monolith + shared platform
C — Distributed frontend / microfrontends
```

Không mặc định C là advanced nên tốt hơn.

---

# Phase 4 — Technical Strategy

Viết:

```text id="yk8d93"
12-month technical strategy
```

gồm:

```text
Q1
Foundation

Q2
Migration

Q3
Scale

Q4
Consolidation
```

Nhưng milestone phải dựa trên **capability/outcome**, không chỉ technology.

---

# Phase 5 — Platform Proposal

Thiết kế platform:

```text
Bootstrap
CI/CD
Observability
Auth
Design System
API Client
Performance
Security
```

Định nghĩa:

```text
users
ownership
adoption
support
roadmap
```

---

# Phase 6 — Architecture Governance

Thiết kế:

```text
What teams decide themselves?
What requires RFC?
What requires architecture review?
What becomes standard?
What remains optional?
```

---

# Phase 7 — Migration

Thiết kế:

```text
pilot
→ early adopters
→ migration waves
→ broad adoption
→ deprecation
→ removal
```

---

# Phase 8 — Incident

Trong migration xảy ra:

```text id="tkz7y2"
Checkout failures
35% users
```

Người học phải lead:

```text
technical
+
cross-team
+
stakeholder
```

---

# Phase 9 — Strategy Reassessment

Sau 6 tháng:

```text
velocity +12%
target +30%

incident -20%
target -40%

adoption 45%
target 70%
```

Người học phải quyết định:

```text
continue
modify
stop
```

và giải thích.

---

# 17. FINAL STAFF PRESENTATION

Thời lượng:

**20–30 phút**

Structure:

```text
1. Problem
2. Current State
3. Why Now
4. Goals
5. Constraints
6. Alternatives
7. Recommendation
8. Architecture
9. Migration
10. Platform
11. Risks
12. Metrics
13. Rollout
14. What could make us wrong?
```

Phần cuối đặc biệt quan trọng:

> **What could make us wrong?**

Staff-level thinking phải có khả năng **falsify chính strategy của mình**.

---

# 18. STAFF EXIT CRITERIA

## Scope

* [ ] Nhìn được system vượt ngoài feature.
* [ ] Nhận diện cross-team impact.
* [ ] Hiểu organizational constraints.

## Strategy

* [ ] Xây current → target state.
* [ ] Xây technical roadmap.
* [ ] Ưu tiên technical investments.
* [ ] Build vs buy ở organizational scale.
* [ ] Thiết kế standardization strategy.

## Architecture

* [ ] Thiết kế cross-team architecture.
* [ ] Xác định ownership.
* [ ] Thiết kế compatibility.
* [ ] Thiết kế migration nhiều giai đoạn.
* [ ] Xử lý distributed failure.

## Platform

* [ ] Hiểu platform-as-product.
* [ ] Thiết kế golden paths.
* [ ] Thiết kế self-service.
* [ ] Thiết kế guardrails.
* [ ] Đo platform adoption.

## Leadership

* [ ] Influence without authority.
* [ ] Facilitate technical disagreement.
* [ ] Giao ownership thay vì task.
* [ ] Mentoring Senior engineers.
* [ ] Xây consensus.
* [ ] Biết khi nào escalate.

## Organizational Systems

* [ ] Hiểu DX.
* [ ] Hiểu knowledge distribution.
* [ ] Giảm organizational bottleneck.
* [ ] Tạo engineering leverage.
* [ ] Nhìn technical debt ở system level.

## Judgment

* [ ] Không giả vờ certainty.
* [ ] Phân biệt fact/assumption.
* [ ] Biết thay đổi strategy khi evidence thay đổi.
* [ ] Đưa decision về business outcome.
* [ ] Có thể giải thích decision cho engineer và executive.

---

# 19. MASTER CURRICULUM — KẾT THÚC

Toàn bộ curriculum giờ đã hoàn thành:

```text
STAGE 0
JavaScript Language Foundation
        ↓
STAGE 1
Execution Model
        ↓
STAGE 2
Object Model
        ↓
STAGE 3
Async & Concurrency
        ↓
STAGE 4
Browser Runtime
        ↓
STAGE 5
Network & Web Platform
        ↓
STAGE 6
TypeScript Engineering
        ↓
STAGE 7
Toolchain & Ecosystem
        ↓
STAGE 8
React Engineering
        ↓
STAGE 9
Production Frontend
        ↓
STAGE 10
Next.js / Full-stack Frontend
        ↓
STAGE 11
Performance / Memory / Security
        ↓
STAGE 12
Frontend Architecture
        ↓
STAGE 13
Production / System Engineering
        ↓
STAGE 14
Senior Engineering
        ↓
STAGE 15
Staff Engineering
```

Và sự phát triển về **loại năng lực** cũng thay đổi:

```text
STAGE 0–3
Understand the Language
        ↓
STAGE 4–7
Understand the Platform
        ↓
STAGE 8–10
Build Applications
        ↓
STAGE 11
Measure / Optimize / Secure
        ↓
STAGE 12
Design Systems
        ↓
STAGE 13
Operate Systems
        ↓
STAGE 14
Make Engineering Decisions
        ↓
STAGE 15
Influence Systems + Teams + Strategy
```

---

# 20. TOÀN BỘ HÀNH TRÌNH TRONG MỘT BẢNG

| Stage | Trọng tâm             | Câu hỏi chính                                |
| ----- | --------------------- | -------------------------------------------- |
| 0     | JavaScript Foundation | Code có nghĩa gì?                            |
| 1     | Execution Model       | Code chạy thế nào?                           |
| 2     | Object Model          | Object/function hoạt động thế nào?           |
| 3     | Async                 | Work theo thời gian thế nào?                 |
| 4     | Browser               | Browser biến code thành UI thế nào?          |
| 5     | Network               | Browser giao tiếp với thế giới thế nào?      |
| 6     | TypeScript            | Làm sao kiểm soát complexity?                |
| 7     | Toolchain             | Code đến production bằng cách nào?           |
| 8     | React                 | Làm sao xây UI system lớn?                   |
| 9     | Production Frontend   | Làm sao sản phẩm sống tốt với user thật?     |
| 10    | Next.js               | Server/client nên phân chia thế nào?         |
| 11    | Perf/Security         | Làm sao đo, tối ưu và bảo vệ system?         |
| 12    | Architecture          | Làm sao codebase scale?                      |
| 13    | Production Ops        | Làm sao vận hành và phục hồi?                |
| 14    | Senior                | Làm sao đưa ra quyết định tốt?               |
| 15    | Staff                 | Làm sao tạo leverage cho nhiều teams/system? |

---

# 21. TRIẾT LÝ CUỐI CÙNG CỦA TOÀN KHÓA

Toàn bộ curriculum thực chất không phải là 16 khóa nhỏ.

Nó là một quá trình chuyển đổi:

```text
                 KNOWLEDGE
                    ↓
                  SKILL
                    ↓
               DEBUGGING
                    ↓
                SYSTEMS
                    ↓
                JUDGMENT
                    ↓
                OWNERSHIP
                    ↓
                LEADERSHIP
                    ↓
                 LEVERAGE
```

Ở đầu curriculum:

> **“Tại sao code này chạy?”**

Ở giữa:

> **“Tại sao system này hoạt động?”**

Ở cuối:

> **“Tại sao organization đang xây system này theo cách này, và liệu có cách tốt hơn không?”**

Đó là đường đi từ:

```text
Junior Developer
        ↓
Strong Junior
        ↓
Frontend Engineer
        ↓
Senior Frontend Engineer
        ↓
Senior+
        ↓
Staff-track Engineer
```

Và đây cũng là ranh giới quan trọng cuối cùng:

> **Kiến thức có thể được curriculum hóa. Kỹ năng có thể được luyện tập. Judgment có thể được mô phỏng và rèn luyện. Nhưng Staff impact thật sự chỉ được xác nhận qua thời gian, ownership và ảnh hưởng thực tế trong một tổ chức.**

Vì vậy curriculum này không nên hứa:

> **“Học xong = Staff.”**

Mục tiêu đúng hơn là:

> **“Học xong, bạn có mental model, technical depth, engineering process và decision-making framework đủ mạnh để bước vào con đường Senior → Staff với tốc độ trưởng thành cao hơn rất nhiều.”**

---

# 22. NEXT STEP CỦA CURRICULUM

Đến đây **không nên tiếp tục thêm Stage 16**.

Master Curriculum đã đủ.

Bước tiếp theo là chuyển từ:

```text
MASTER CURRICULUM
```

sang:

```text
MASTER TEACHING SPEC
```

Tức là với **từng module trong 16 Stage**, chúng ta phải xác định:

```text
Module
├── Why
├── Prerequisites
├── Learning Objectives
├── Concepts
├── Mental Models
├── Depth Level
├── Lessons
├── Labs
├── Edge Cases
├── Re-implementation
├── Debugging
├── Design Exercise
├── Project Integration
├── Teach Back
└── Exit Criteria
```

Đồng thời tạo một **Global Progression Matrix** để bảo đảm một concept như:

```text
Closure
Event Loop
Caching
State
Error Handling
Performance
Architecture
```

không bị dạy lại rời rạc, mà được **spiral từ Foundation → Application → Senior → Staff** đúng mức độ sâu qua từng Stage.

Đó mới là bước cần làm trước khi bắt đầu viết hàng trăm lesson cụ thể.

