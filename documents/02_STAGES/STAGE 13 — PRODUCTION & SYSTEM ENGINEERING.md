# JAVASCRIPT ENGINEERING MASTERY

## STAGE 13 — PRODUCTION & SYSTEM ENGINEERING

### Detailed Curriculum v1

---

# 0. Stage Overview

## Mục tiêu

Stage 12 dạy người học:

> **Thiết kế hệ thống sao cho codebase có thể phát triển.**

Stage 13 đặt câu hỏi khó hơn:

> **Làm thế nào đưa hệ thống đó vào production, quan sát nó, phát hiện vấn đề và phục hồi khi có sự cố?**

Đây là bước chuyển từ:

```text
id="m4o7aw"
Software Development
        ↓
Software Operations
```

và từ:

```text
Code-centric
```

sang:

```text
System-centric
```

---

# 1. Mental Model Toàn Stage

Một feature production không kết thúc ở:

```text id="0p1x4q"
code
 ↓
merge
```

Vòng đời đầy đủ:

```text id="r8d5js"
Idea
 ↓
Code
 ↓
Typecheck
 ↓
Test
 ↓
Build
 ↓
Deploy
 ↓
Observe
 ↓
User Traffic
 ↓
Measure
 ↓
Detect
 ↓
Respond
 ↓
Recover
 ↓
Learn
 ↓
Improve
```

Một Engineer Senior phải hiểu toàn bộ lifecycle này.

---

# 2. Phạm vi kiến thức

Stage 13 gồm **8 Modules / 41 Lessons**:

```text id="uy9wru"
13.1 CI/CD Engineering
13.2 Build & Release Engineering
13.3 Deployment Strategies
13.4 Feature Flags & Progressive Delivery
13.5 Observability
13.6 Reliability & Failure Management
13.7 Incident Response
13.8 Production Operations & Postmortem
```

---

# 3. MODULE 13.1 — CI/CD ENGINEERING

## Mục tiêu

Hiểu CI/CD không phải:

> “GitHub Actions chạy npm test.”

Mà là:

> **Automate quality và giảm rủi ro khi thay đổi software.**

---

## Lesson 13.1.1 — Why CI Exists

Không có CI:

```text id="f2x3c4"
Developer A
→ works locally

Developer B
→ breaks build

Developer C
→ doesn't know
```

CI tạo:

```text id="y9s89r"
shared verification environment
```

---

## Lesson 13.1.2 — CI Pipeline

Mental model:

```text id="s4y5m9"
Push
 ↓
Install
 ↓
Lint
 ↓
Typecheck
 ↓
Test
 ↓
Build
 ↓
Artifact
```

---

## Lesson 13.1.3 — Quality Gates

Không phải check nào cũng có giá trị như nhau.

Phân loại:

```text id="h3a5t4"
blocking
vs
warning
```

Ví dụ:

```text id="p6j72e"
type error
→ blocking

minor lint warning
→ maybe not
```

---

## Lesson 13.1.4 — CI Parallelization

Thay vì:

```text id="9pr7o2"
lint
 ↓
test
 ↓
build
```

có thể:

```text id="3k0mnr"
      ┌→ lint ──┐
push ─┼→ test ──┼→ build
      └→ type ──┘
```

Hiểu dependency của pipeline.

---

## Lesson 13.1.5 — Build Artifacts

Phân biệt:

```text id="h7u6gq"
source
vs
artifact
```

Artifact có thể là:

* bundle
* container image
* static assets
* deployment package

---

## Lesson 13.1.6 — Reproducible CI

Kiểm soát:

* Node version
* package manager
* lockfile
* environment
* build inputs

---

## Lesson 13.1.7 — Caching CI

Cache:

* package manager
* build output
* task results

Nhưng phải hiểu:

> Cache sai có thể làm CI trở nên không đáng tin.

---

## Lesson 13.1.8 — CI Security

Không để:

```text id="q0wyqi"
secrets
tokens
credentials
```

xuất hiện trong logs hoặc artifacts.

---

# 4. MODULE 13.2 — BUILD & RELEASE ENGINEERING

## Mục tiêu

Phân biệt:

```text id="a3c5no"
build
release
deploy
```

đây là ba khái niệm khác nhau.

---

## Lesson 13.2.1 — Build

```text id="b4kml1"
source
→ artifact
```

---

## Lesson 13.2.2 — Release

Một artifact được đánh dấu:

```text id="efv5gz"
version
release metadata
```

---

## Lesson 13.2.3 — Deploy

Artifact được đưa vào environment:

```text id="hfd3s2"
staging
production
```

---

## Lesson 13.2.4 — Immutable Artifact

Nguyên tắc:

> Build một lần, promote cùng artifact qua các environment.

Không rebuild riêng production nếu có thể tránh.

---

## Lesson 13.2.5 — Environment Strategy

* development
* test
* staging
* production

Phân biệt config và artifact.

---

## Lesson 13.2.6 — Environment Configuration

Không hard-code:

```text id="6ed5b7"
API URL
feature flags
environment-specific settings
```

Nhưng cũng phải hiểu:

> Secret không nên được đưa vào client bundle.

Đã học ở Stage 11, nay đưa vào release engineering.

---

## Lesson 13.2.7 — Versioning

* semantic versioning
* release tags
* changelog
* release notes

Không phải mọi frontend app cần public semver; mục tiêu là hiểu versioning strategy.

---

# 5. MODULE 13.3 — DEPLOYMENT STRATEGIES

## Mục tiêu

Thay vì:

```text id="y3q3ts"
deploy
→ hope
```

phải có:

```text id="ulb5qs"
deploy
→ control exposure
→ observe
→ verify
```

---

## Lesson 13.3.1 — Rolling Deployment

Concept:

```text id="q31sm3"
old
old
old

→

new
old
old

→

new
new
old
```

---

## Lesson 13.3.2 — Blue-Green

```text id="d2nlh2"
Blue = current
Green = new

traffic
  ↓
Blue

switch

traffic
  ↓
Green
```

Ưu điểm:

* rollback nhanh

Nhược điểm:

* duplicate environment/resource

---

## Lesson 13.3.3 — Canary

Traffic gradually moves:

```text id="0evh77"
1%
→
5%
→
25%
→
50%
→
100%
```

---

## Lesson 13.3.4 — Progressive Delivery

Không chỉ deploy percentage.

Có thể progressive theo:

```text id="7qf5ec"
user segment
region
device
account
feature
```

---

## Lesson 13.3.5 — Rollback

Rollback không phải:

> “git revert rồi deploy.”

Phải xác định:

```text id="jy9w4r"
what changed?
where?
which artifact?
which config?
which flag?
```

---

## Lesson 13.3.6 — Roll-forward vs Rollback

So sánh:

```text id="ccwy7k"
rollback
vs
hotfix / roll-forward
```

Decision factors:

* severity
* reversibility
* migration state
* user impact

---

# 6. MODULE 13.4 — FEATURE FLAGS & PROGRESSIVE DELIVERY

## Mục tiêu

Tách:

```text id="n1q2m6"
deploy code
```

khỏi:

```text id="e3b4tx"
release capability
```

---

## Lesson 13.4.1 — Feature Flag Mental Model

```text id="5h2h1m"
Code deployed
        ↓
Flag
        ↓
Feature exposed?
```

---

## Lesson 13.4.2 — Flag Types

* release flag
* experiment flag
* ops flag
* permission flag

Không dùng mọi flag cho mọi purpose.

---

## Lesson 13.4.3 — Kill Switch

Ví dụ:

```text id="xysj9a"
realtime feature
→ outage
→ disable flag
```

---

## Lesson 13.4.4 — Targeting

Có thể target:

```text id="jro3el"
percentage
user
organization
region
device
```

---

## Lesson 13.4.5 — Flag Lifecycle

Feature flag có lifecycle:

```text id="mlv8t2"
create
→ rollout
→ stabilize
→ remove
```

Flag không được sống vĩnh viễn.

---

## Lesson 13.4.6 — Flag Debt

Một codebase có:

```text id="mvf9oz"
200 old flags
```

sẽ trở nên khó hiểu.

Phải có ownership + expiration.

---

## Lesson 13.4.7 — Feature Flag Failure

Nếu flag service chết:

```text id="6vw4sv"
default state?
fail open?
fail closed?
```

Đây là architecture decision.

---

# 7. MODULE 13.5 — OBSERVABILITY

## Mục tiêu

Đây là một trong những năng lực **Senior+ quan trọng nhất**.

Không thể vận hành hệ thống mà không biết:

> **Nó đang làm gì.**

---

## Lesson 13.5.1 — Observability vs Monitoring

Phân biệt:

```text id="2ip3ig"
Monitoring
→ known questions

Observability
→ ability to investigate unknown states
```

---

## Lesson 13.5.2 — Three Pillars

```text id="0k7wqu"
Logs
Metrics
Traces
```

Không coi đây là toàn bộ observability; nhưng là foundational model.

---

## Lesson 13.5.3 — Logs

Một good log nên có:

```text id="zx2j7e"
timestamp
level
event
context
request ID
user/session context where appropriate
```

Không log sensitive data tùy tiện.

---

## Lesson 13.5.4 — Metrics

Types:

* counter
* gauge
* histogram

Ví dụ:

```text id="y5x4k2"
error rate
latency
request count
Web Vitals
```

---

## Lesson 13.5.5 — Percentiles

Không chỉ xem:

```text id="4g5z9u"
average latency
```

Mà:

```text id="5m0lq4"
p50
p90
p95
p99
```

Hiểu tại sao tail latency quan trọng.

---

## Lesson 13.5.6 — Tracing

Mental model:

```text id="q4j1v5"
User action
 ↓
Frontend
 ↓
BFF
 ↓
Service A
 ↓
Service B
```

Trace giúp nối request qua các boundary.

---

## Lesson 13.5.7 — Correlation ID / Trace ID

Một request phải có khả năng được liên kết giữa:

```text id="q7i1v8"
browser
→ server
→ services
```

---

## Lesson 13.5.8 — Frontend RUM

Đo real-user:

* LCP
* INP
* CLS
* JS errors
* route transitions
* API latency

Kết nối Stage 11.

---

## Lesson 13.5.9 — Error Tracking

Ví dụ:

* Sentry
* source maps
* breadcrumbs
* release association

---

## Lesson 13.5.10 — Alerting

Alert tốt phải:

```text id="hj3x2s"
actionable
specific
low-noise
```

Không alert mọi thứ.

---

## Lesson 13.5.11 — SLO Awareness

Ví dụ:

```text id="5uvm6d"
99.9% requests succeed
```

Không biến thành SRE course.

Mục tiêu:

> hiểu reliability được biểu diễn bằng measurable objectives.

---

# 8. MODULE 13.6 — RELIABILITY & FAILURE MANAGEMENT

## Mục tiêu

Thiết kế system không dựa trên assumption:

> “Everything works.”

---

## Lesson 13.6.1 — Failure Domains

Failure có thể ở:

```text id="u4rl44"
browser
network
CDN
BFF
API
third party
dependency
deployment
```

---

## Lesson 13.6.2 — Partial Failure

Một phần hệ thống fail nhưng phần còn lại vẫn hoạt động.

Ví dụ:

```text id="pw1yy3"
Recommendations fail
        ↓
Product page vẫn hoạt động
```

---

## Lesson 13.6.3 — Graceful Degradation

Kết nối Stage 9:

```text id="6g7y0f"
core capability
+
optional capability
```

Phải quyết định:

> thứ gì được phép fail?

---

## Lesson 13.6.4 — Retry as Reliability Risk

Retry có thể:

```text id="x8u7k5"
recover
```

nhưng cũng có thể:

```text id="b4p11t"
amplify outage
```

Kết nối Stage 3.

---

## Lesson 13.6.5 — Circuit Breaker Awareness

Mental model:

```text id="5k3jze"
healthy
 ↓
failures
 ↓
open
 ↓
stop calling
 ↓
half-open
 ↓
recover
```

Không cần tự implement production distributed circuit breaker.

---

## Lesson 13.6.6 — Timeouts

Mọi network dependency dài hạn nên có timeout strategy.

---

## Lesson 13.6.7 — Dependency Failure

Third-party:

```text id="lf8v7k"
analytics
payment
maps
auth provider
```

Nếu fail:

> Application còn dùng được đến đâu?

---

## Lesson 13.6.8 — Data Consistency Failure

Ví dụ:

```text id="0fbv8l"
UI says "paid"
server says "pending"
```

Phải thiết kế reconciliation/recovery.

---

# 9. MODULE 13.7 — INCIDENT RESPONSE

## Mục tiêu

Đây là bước từ:

> Developer

sang:

> Production owner.

---

## Lesson 13.7.1 — Incident Definition

Incident là:

> sự kiện ảnh hưởng availability, correctness, performance, security hoặc user experience theo mức cần phản ứng.

---

## Lesson 13.7.2 — Detection

Nguồn:

```text id="v3q1or"
alert
RUM
customer report
support
logs
metrics
```

---

## Lesson 13.7.3 — Triage

Trong 5–10 phút đầu phải xác định:

```text id="jwo4q1"
What is broken?
Who is affected?
How severe?
When started?
What changed?
```

---

## Lesson 13.7.4 — Severity

Thiết kế severity model:

```text id="x5p52r"
P0
P1
P2
P3
```

Nhưng không phụ thuộc tên cụ thể.

Mục tiêu:

> cùng một ngôn ngữ về impact.

---

## Lesson 13.7.5 — Incident Commander

IC phải:

* coordinate
* prioritize
* assign
* communicate

Không nhất thiết là người viết code fix.

---

## Lesson 13.7.6 — Communication

Trong incident:

```text id="uk9q7h"
facts
hypothesis
actions
next update
```

Không trình bày suy đoán như sự thật.

---

## Lesson 13.7.7 — Containment

Mục tiêu đầu tiên:

> giảm blast radius.

Các công cụ:

```text id="5jtr2q"
feature flag
rollback
disable integration
traffic reduction
degradation
```

---

## Lesson 13.7.8 — Root Cause

Phân biệt:

```text id="i9ltmn"
symptom
proximate cause
root cause
systemic cause
```

---

## Lesson 13.7.9 — Recovery Verification

Rollback xong chưa có nghĩa incident kết thúc.

Phải:

```text id="3f7qwb"
verify metrics
verify user flow
verify errors
```

---

# 10. MODULE 13.8 — PRODUCTION OPERATIONS & POSTMORTEM

## Mục tiêu

Biến incident thành organizational learning.

---

## Lesson 13.8.1 — Postmortem

Format:

```text id="a1n0s3"
Summary
Impact
Timeline
Root Cause
Contributing Factors
Detection
Response
Resolution
Actions
```

---

## Lesson 13.8.2 — Blamelessness

Không:

> “John deploy sai.”

Mà:

> “Process cho phép deployment thiếu validation X.”

Mục tiêu:

> sửa system, không chỉ đổ lỗi cá nhân.

---

## Lesson 13.8.3 — Corrective Actions

Phân loại:

```text id="1i5h1e"
code fix
test
monitoring
process
architecture
documentation
```

---

## Lesson 13.8.4 — Prevent Recurrence

Mỗi incident phải dẫn tới ít nhất một lớp prevention phù hợp.

---

## Lesson 13.8.5 — Runbooks

Viết:

```text id="9v7q69"
If X happens:
1. Check A
2. Check B
3. Disable C
4. Rollback D
5. Verify E
```

---

## Lesson 13.8.6 — Operational Readiness

Feature trước release phải có:

```text id="v9slqk"
owner
metrics
logs
alerts
rollback
failure behavior
```

---

## Lesson 13.8.7 — Error Budget Awareness

Nếu reliability thấp:

```text id="u7v0e3"
feature velocity
```

phải cân nhắc lại so với:

```text id="j3k5x2"
stability work
```

Không đi sâu thành SRE methodology course.

---

## Lesson 13.8.8 — Change Management

Đặc biệt với risky change:

```text id="kw9pmk"
small rollout
observe
expand
```

---

# 11. INTEGRATION LAB — STAGE 13

# Project 13 — Production Operations Platform

Không cần xây một application mới hoàn toàn.

Lấy Project 12 và tạo một environment production-like.

---

## Pipeline

```text id="b2e4g4"
Git Push
 ↓
CI
 ↓
Build
 ↓
Artifact
 ↓
Staging
 ↓
Tests
 ↓
Canary
 ↓
Production
```

---

## Observability

Có:

```text id="x2zq4e"
frontend errors
API errors
latency
Core Web Vitals
release version
trace/correlation ID
```

---

## Deployment

Có:

```text id="j04iw5"
feature flag
canary
rollback
```

---

## Incident Injection

Cố tình tạo:

```text id="w7zqz0"
500 spike
API latency
memory leak
bad release
bundle regression
third-party outage
authorization regression
```

---

# 12. EDGE CASE LAB

## Case 1 — Bad Deployment

New release:

```text id="uy3h4y"
error rate
0.2%
→
8%
```

Triage và rollback.

---

## Case 2 — Only 5% Users Broken

Tìm:

```text id="1l4l5v"
device
browser
region
feature flag
user segment
```

Không rollback mù quáng nếu blast radius xác định rõ.

---

## Case 3 — Third-party Outage

Payment provider down.

Thiết kế:

```text id="61k2e7"
degradation
user messaging
retry policy
reconciliation
```

---

## Case 4 — Retry Storm

Backend latency tăng.

Frontend retries.

Traffic tăng.

Phân tích feedback loop.

---

## Case 5 — Canary Looks Fine

Canary 5% không có error.

100% rollout xong latency tăng.

Tại sao canary không detect?

Phân tích:

```text id="xk3d21"
sample size
user distribution
traffic pattern
feature interactions
```

---

## Case 6 — Alert Fatigue

Team có 70 alerts/day.

Chỉ 2 alerts actionable.

Redesign alert strategy.

---

## Case 7 — Rollback Doesn't Fix

Rollback frontend nhưng error vẫn tồn tại.

Có thể:

```text id="2zlh20"
backend
cache
migration
third-party
stored client
```

Phải điều tra cross-system.

---

# 13. RE-IMPLEMENTATION LAB

## 13.1 — CI Pipeline

Tự viết CI:

```text id="j4j5ym"
lint
typecheck
test
build
```

---

## 13.2 — Release Manifest

Artifact metadata:

```text id="4u2ax0"
version
commit
build time
environment
```

---

## 13.3 — Feature Flag System

Tối giản:

```js id="b51md5"
isEnabled(flag, context)
```

hỗ trợ:

* percentage
* user
* environment

---

## 13.4 — Structured Logger

Tạo logger:

```text id="h3w1kj"
info
warn
error
```

với structured fields.

---

## 13.5 — Metrics Collector

Implement abstraction:

```text id="0l0sxx"
increment
observe
record
```

Không cần backend metrics system hoàn chỉnh.

---

## 13.6 — Incident Simulator

Tạo CLI/web panel:

```text id="6q0x44"
inject outage
disable dependency
increase latency
increase errors
```

để luyện incident response.

---

# 14. DEBUG LAB

## Bug 1 — Production-only Error

Local pass.

Production fail.

Điều tra:

```text id="f8el6v"
environment
build
config
artifact
feature flag
```

---

## Bug 2 — Monitoring Blind Spot

User report app chậm nhưng dashboards vẫn xanh.

Tìm metric gap.

---

## Bug 3 — False-positive Alert

Alert triggered nhưng user impact bằng 0.

Điều chỉnh threshold/metric.

---

## Bug 4 — Missing Correlation

Frontend error không trace được sang backend request.

Thiết kế correlation.

---

## Bug 5 — Rollback Inconsistency

Frontend rollback nhưng backend API contract đã thay đổi.

Phân tích compatibility requirement.

---

# 15. DESIGN LAB

## Scenario 1 — Deployment

Feature ảnh hưởng checkout.

Chọn:

```text id="3s0c4n"
big bang
canary
feature flag
blue-green
```

---

## Scenario 2 — Observability

Một critical API.

Chọn:

```text id="5i0t0c"
logs
metrics
traces
RUM
alerts
```

và giải thích cái nào phục vụ câu hỏi nào.

---

## Scenario 3 — Incident

Checkout error 10%.

Bạn có:

```text id="r6qg1o"
rollback
feature flag
hotfix
```

Chọn action theo:

```text severity
blast radius
confidence
reversibility
```

---

## Scenario 4 — Third-party Dependency

Analytics provider gây JS exception.

Chọn:

```text id="3n4j7m"
remove
lazy load
sandbox
feature flag
fallback
```

---

# 16. SOURCE & DOCUMENTATION

Primary references:

* GitHub Actions documentation
* deployment platform documentation
* OpenTelemetry documentation
* Sentry documentation
* web performance/RUM documentation
* incident management / SRE references
* OWASP security references khi incident liên quan security

Mục tiêu:

> Biết cách đọc hệ thống production bằng evidence thay vì đoán.

---

# 17. TEACH-BACK

### Level 1

> CI và CD khác nhau thế nào?

### Level 2

> Canary deployment giải quyết problem gì?

### Level 3

> Logs, metrics và traces trả lời các câu hỏi khác nhau thế nào?

### Level 4

> Khi production error tăng, vì sao không nên lập tức sửa code?

### Level 5

> Làm sao giảm blast radius trước khi biết root cause?

### Level 6

> Sau incident, làm thế nào để đảm bảo system học được chứ không chỉ “fix xong”?

---

# 18. EXIT CRITERIA — STAGE 13

## CI/CD

* [ ] Thiết kế CI pipeline.
* [ ] Hiểu quality gates.
* [ ] Parallelize pipeline hợp lý.
* [ ] Reproducible build.
* [ ] Artifact management.
* [ ] CI security.

## Release

* [ ] Phân biệt build/release/deploy.
* [ ] Immutable artifact.
* [ ] Environment strategy.
* [ ] Release/versioning.

## Deployment

* [ ] Rolling.
* [ ] Blue-green.
* [ ] Canary.
* [ ] Progressive delivery.
* [ ] Rollback vs roll-forward.

## Feature Flags

* [ ] Feature flag fundamentals.
* [ ] Targeting.
* [ ] Kill switch.
* [ ] Flag lifecycle.
* [ ] Flag debt.
* [ ] Fail-open/fail-closed decision.

## Observability

* [ ] Logs.
* [ ] Metrics.
* [ ] Traces.
* [ ] Percentiles.
* [ ] Correlation IDs.
* [ ] RUM.
* [ ] Error tracking.
* [ ] Actionable alerts.
* [ ] SLO awareness.

## Reliability

* [ ] Failure domain.
* [ ] Partial failure.
* [ ] Graceful degradation.
* [ ] Retry risks.
* [ ] Timeout.
* [ ] Circuit breaker awareness.
* [ ] Third-party failure.
* [ ] Data consistency failure.

## Incident

* [ ] Detect.
* [ ] Triage.
* [ ] Severity.
* [ ] Containment.
* [ ] Rollback/mitigation.
* [ ] Verification.
* [ ] Communication.
* [ ] Postmortem.
* [ ] Corrective actions.

## Engineering

* [ ] Hoàn thành production simulation.
* [ ] Xử lý ít nhất 5 incident.
* [ ] Thực hiện rollback thật trong simulation.
* [ ] Viết postmortem.
* [ ] Viết runbook.
* [ ] Thiết kế observability cho một feature critical.

---

# 19. STAGE 13 CHECKPOINT

## Part A — Pipeline

Thiết kế:

```text id="32k2m3"
Git
→ CI
→ Artifact
→ Staging
→ Canary
→ Production
```

---

## Part B — Observability

Cho checkout flow:

```text id="fqy7xy"
Frontend
→ BFF
→ Payment API
```

Thiết kế:

```text id="f2q3xm"
logs
metrics
traces
RUM
alerts
```

---

## Part C — Incident Triage

Incident:

```text id="8e4b2e"
checkout errors
0.5%
→
7%
```

Phải trong 10 phút trả lời:

```text id="qvtx70"
impact
blast radius
timeline
recent changes
containment action
next measurement
```

---

## Part D — Deployment Strategy

Chọn deployment strategy cho:

```text id="9a2fgs"
marketing page
checkout
admin feature
experimental AI feature
```

---

## Part E — Postmortem

Viết postmortem cho incident được mô phỏng.

Không blame individual.

---

# 20. STAGE 13 CAPSTONE

# Production Incident War Room

Hệ thống có:

```text id="s9egot"
Customer Web
Admin
BFF
API
Third-party service
```

Pipeline:

```text id="v4djgq"
CI
→ Build
→ Artifact
→ Staging
→ Canary
→ Production
```

Người học nhận một series incident bất ngờ:

### Incident A

Bad release.

### Incident B

Third-party outage.

### Incident C

Retry storm.

### Incident D

Memory/performance regression.

### Incident E

Security regression.

Mỗi incident:

```text id="wzttcu"
Detect
→ Triage
→ Contain
→ Decide
→ Execute
→ Verify
→ Communicate
→ Postmortem
```

Final deliverables:

```text id="gq2i51"
1. CI/CD Architecture
2. Deployment Strategy
3. Observability Architecture
4. Incident Runbooks
5. Incident Timeline
6. Postmortems
7. Reliability Improvements
8. Architecture Follow-up
```

---

# 21. STAGE 13 → STAGE 14 DEPENDENCY

Sau Stage 13, người học đã có khả năng:

```text id="x4xwlv"
BUILD
→ DEPLOY
→ OBSERVE
→ OPERATE
→ RESPOND
→ RECOVER
```

Nhưng vẫn thiếu một năng lực quan trọng:

> **Đưa ra quyết định tốt khi requirements không rõ và không có một đáp án kỹ thuật duy nhất.**

Đó là Stage 14:

# SENIOR ENGINEERING

Tại đây curriculum không còn chủ yếu dạy technology.

Nó chuyển sang:

```text id="o0a5gt"
Ambiguous Problem
        ↓
Clarify
        ↓
Constraints
        ↓
Alternatives
        ↓
Trade-offs
        ↓
Decision
        ↓
Implementation
        ↓
Measurement
        ↓
Ownership
```

Các chủ đề:

```text
Requirements Analysis
Technical Decision
Code Review
Refactoring
Technical Debt
Migration
Risk Management
ADR
RFC
Mentoring Foundation
```

Đây là bước từ:

> **“Tôi có thể xây một hệ thống tốt.”**

sang:

> **“Tôi có thể quyết định hệ thống nào nên được xây.”**

---

# 22. STAGE 13 CORE PRINCIPLE

Một Junior nhìn production như:

```text id="jgei4d"
deploy = finish
```

Senior nhìn:

```text id="nkpmpa"
deploy
→ observe
→ verify
→ recover
```

Senior+ nhìn thêm:

```text id="22xiqk"
What could fail?

How will we know?

How quickly can we contain it?

How reversible is the decision?

What is the blast radius?

What should we automate?

What should the team learn from this?
```

Và đó là lý do Stage 13 là **production systems thinking**, không phải chỉ là “học CI/CD và Sentry”.

> Một Senior Engineer không chỉ viết code có thể chạy. Họ xây và vận hành hệ thống mà **khi nó không chạy**, team vẫn biết phải làm gì.

