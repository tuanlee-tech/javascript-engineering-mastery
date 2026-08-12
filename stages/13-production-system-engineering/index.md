---
title: "Stage 13: Production & System Engineering"
description: "Trang tổng quan Stage 13: Production & System Engineering."
head:
  - - meta
    - property: og:image
      content: /og/stage-13.png
---

# Stage 13: Production & System Engineering

<div style="text-align: center; margin: 1.5rem 0;">
  <img src="/icons/stage-13.svg" alt="Stage Icon" style="width: 80px; height: 80px; margin: 0 auto;" />
</div>

<div class="vp-doc">

## 1. Tổng quan Stage (Stage Overview)

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

---

## 2. Phạm vi Kiến thức & Mô-đun (Scope & Modules)

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

---

## 3. Dự án Thực hành (Stage Project)



---

## 4. Tiêu chí Hoàn thành & Đầu ra (Exit & Prerequisites)

* **Điều kiện tiên quyết (Prerequisites)**: Hoàn thành Stage 12
* **Cấp bậc đầu ra (Exit Level)**: `Production Telemetry & Observability Mastered (L7-L8)`

### Tiêu chí kiểm thử năng lực thực tế:

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

</div>
