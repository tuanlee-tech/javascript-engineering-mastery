# GOLDEN LESSON STANDARD

## JAVASCRIPT ENGINEERING MASTERY

### Purpose

`GOLDEN_LESSON_STANDARD.md` là tài liệu tham chiếu cho AI/mentor khi biên soạn lesson.

Mục tiêu của file:

```text
MASTER TEACHING SPEC
        ↓
Rules
        ↓
GOLDEN LESSON STANDARD
        ↓
Concrete examples of good implementation
        ↓
New Lessons
```

File này **không thay thế**:

* `CURRICULUM_BOOTSTRAP.md`
* `GLOBAL_COMPETENCY_DEPTH_MATRIX.md`
* `MASTER_TEACHING_SPEC.md`

Nếu có conflict, các file trên có authority cao hơn.

---

# 1. GOLDEN LESSON LÀ GÌ?

Một Golden Lesson phải thể hiện được:

```text
Technical Accuracy
+
Pedagogical Clarity
+
Mental Model
+
Deliberate Practice
+
Debugging
+
Transfer
+
Assessment
+
Spiral Learning
+
VitePress Quality
```

Một lesson đẹp về hình thức nhưng learner vẫn không biết:

> “Tại sao điều này xảy ra?”

thì **không phải Golden Lesson**.

Một lesson đầy đủ kiến thức nhưng learner chỉ nhớ definition mà không debug/design được cũng **không phải Golden Lesson**.

---

# 2. GOLDEN LESSON PRINCIPLES

## 2.1. Một lesson phải có một “learning spine”

Lesson phải có flow:

```text
Why
 ↓
Mental Model
 ↓
Example
 ↓
Predict
 ↓
Practice
 ↓
Break
 ↓
Debug
 ↓
Transfer
 ↓
Assess
 ↓
Spiral
```

Không nhất thiết mọi lesson phải có tất cả section với cùng độ dài, nhưng flow tư duy phải tồn tại.

---

# 3. GOLDEN LESSON ANATOMY

Một lesson chuẩn thường có:

```md
# Lesson X.X.X — Title

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

## 11. Design / Decision Exercise

## 12. Production Scenario

## 13. AI-Assisted Exercise

## 14. Teach Back

## 15. Assessment

## 16. Exit Criteria

## 17. Spiral Connection
```

Nhưng đây là **default**, không phải template cứng.

---

# 4. SECTION QUALITY STANDARD

## 4.1. Why This Exists

### Good

Bắt đầu từ:

```text
problem
→ confusion
→ real-world consequence
```

Ví dụ:

> Bạn viết cùng một JavaScript code nhưng nó chạy được trong Browser và lỗi trong Node.js. Tại sao?

### Bad

> JavaScript là một programming language được phát triển bởi...

Nguyên tắc:

> **Problem trước, definition sau.**

---

# 5. LEARNING OBJECTIVES

Objectives phải measurable.

### Good

```text
Sau lesson, learner có thể:

- phân biệt language và host API;
- dự đoán environment-specific behavior;
- giải thích nguyên nhân của `document is not defined`;
- phân loại một API chưa từng gặp.
```

### Bad

```text
- hiểu JavaScript;
- hiểu runtime;
- biết browser.
```

---

# 6. MENTAL MODEL STANDARD

Mental model phải:

```text
Simple enough
+
Causally useful
+
Predictive
+
Expandable
```

### Good

```text
Language
   ↓
Engine
   ↓
Host
   ↓
Runtime behavior
```

### Bad

Diagram quá nhiều implementation details khi learner chưa cần.

---

# 7. IMPORTANT RULE — SIMPLIFICATION MUST BE LABELLED

Nếu dùng simplification:

```md
:::info Mental Model
Trong curriculum này, ta tạm hình dung Runtime là...
:::
```

Phải phân biệt:

```text
Mental Model
vs
Formal Definition
vs
Implementation Detail
```

Không được biến approximation thành technical fact tuyệt đối.

---

# 8. WORKED EXAMPLE STANDARD

Đây là một trong những section quan trọng nhất.

Worked Example phải **model expert reasoning**.

### Structure

```text
Input
 ↓
Observation
 ↓
Classification
 ↓
Reasoning
 ↓
Conclusion
```

Ví dụ:

```js
console.log(typeof document);
```

Không chỉ nói:

> Browser có `document`.

Mà:

```text
1. `typeof` là language-level operator.
2. `document` là identifier.
3. Identifier lookup phụ thuộc runtime environment.
4. Browser cung cấp document.
5. Node baseline không cung cấp document.
6. Vì vậy kết quả khác nhau.
```

Learner phải nhìn thấy **cách phân tích**, không chỉ answer.

---

# 9. PREDICTION STANDARD

Prediction phải:

```text
đủ ngắn
+
có thể suy luận
+
có một misconception dễ mắc
```

### Good

````md
:::details Prediction

Đừng chạy code.

Đoán output và giải thích tại sao.

```js
...
````

**Reveal**

```js
...
```

**Why**

...
:::

````

### Bad

Một prediction có 20 dòng code và 8 concepts chưa học.

---

# 10. IMPLEMENTATION STANDARD

Implementation phải đi:

```text
Guided
→ Scaffolded
→ Independent
→ Constrained
````

Không bắt learner xây production system ngay sau khi vừa học concept.

### Good

```text
Learn Promise
→ implement tiny thenable
→ chain
→ error propagation
→ mini async utility
```

### Bad

> “Bây giờ tự xây TanStack Query.”

---

# 11. EDGE CASE STANDARD

Mỗi edge case phải trả lời:

```text
What fails?
Why?
How do we observe it?
How do we fix/decide?
```

### Good

```text
Symptom:
document is not defined

Root cause:
server environment

Signal:
stack trace + environment

Fix:
move browser-only access to browser boundary
```

### Bad

> Một fun fact về JavaScript.

---

# 12. DEBUG LAB STANDARD

Đây là format canonical:

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
Prevention
```

Không cho learner nhảy thẳng từ:

```text
error
→ fix
```

vì như vậy không dạy debugging.

---

# 13. TRANSFER CHECK

Golden Lesson **nên có ít nhất một transfer exercise** cho các concept quan trọng.

Mục tiêu:

> learner không chỉ nhớ ví dụ đã thấy.

Ví dụ lesson dạy:

```js
document
```

Transfer:

```js
navigator.clipboard.writeText("hello")
```

Hỏi:

> Không cần nhớ API này, hãy suy luận nó thuộc layer nào.

Đây là cách kiểm tra **mental model transfer**.

---

# 14. PRODUCTION SCENARIO STANDARD

Production scenario không được chỉ là:

> “Ở công ty người ta dùng...”

Nó phải có:

```text
Context
+
Constraint
+
Symptom
+
Decision
```

Ví dụ:

```text
SSR application
+
browser API
+
production crash
```

Sau đó learner phải giải thích:

```text
why
→ where
→ fix
→ prevention
```

---

# 15. DESIGN / DECISION EXERCISE STANDARD

Chỉ đưa design exercise khi competency đủ cao.

### L1–L2

```text
Classification
```

### L3–L4

```text
Implementation choice
```

### L5–L6

```text
Design
```

### L7

```text
Trade-off / architecture decision
```

### L8

```text
organizational leverage
```

Không ép lesson beginner làm architecture.

---

# 16. AI-ASSISTED EXERCISE STANDARD

AI exercise phải có learning purpose.

### Không tốt

> Hãy hỏi ChatGPT giải thích bài này.

### Tốt

```text
1. Tự trả lời.
2. Hỏi AI.
3. So sánh.
4. Tìm discrepancy.
5. Verify bằng documentation.
```

Ở level cao:

```text
AI generates 3 alternatives
→ learner audits assumptions
→ learner decides
```

---

# 17. TEACH-BACK STANDARD

Teach-back phải kiểm tra:

```text
accuracy
+
causality
+
clarity
```

Không cần diễn thuyết dài.

Có thể là:

> Giải thích trong 2 phút.

hoặc:

> Vẽ diagram.

hoặc:

> Review code của người khác.

---

# 18. ASSESSMENT ALIGNMENT

Golden Lesson phải có:

```text
Objective
↓
Practice
↓
Assessment
↓
Exit Criteria
```

Ví dụ:

| Objective          | Practice       | Assessment       | Exit |
| ------------------ | -------------- | ---------------- | ---- |
| Phân biệt host API | Classification | New API          | ✅    |
| Hiểu runtime       | Prediction     | Explain scenario | ✅    |
| Debug environment  | Debug lab      | New error        | ✅    |

Không được có knowledge nằm trong Exit Criteria nhưng chưa từng được dạy/assess.

---

# 19. EXIT CRITERIA STANDARD

Exit Criteria phải observable.

### Good

```md
- [ ] Có thể dự đoán behavior của 8/10 scenarios.
- [ ] Có thể giải thích nguyên nhân bằng mental model.
- [ ] Có thể debug một environment mismatch mới.
```

### Bad

```md
- [ ] Hiểu runtime.
- [ ] Biết JavaScript.
```

---

# 20. SPIRAL STANDARD

Mỗi major concept phải có:

```text
Previous
Current
Next
```

Ví dụ:

```text
Scope
 ↓
Closure
 ↓
Async callbacks
 ↓
React stale closure
 ↓
Memory retention
```

Golden lesson phải làm learner cảm thấy:

> “Ồ, cái này tôi sẽ dùng lại sau.”

---

# 21. OUT-OF-SCOPE STANDARD

Lesson phải bảo vệ learner khỏi rabbit holes.

Ví dụ:

```md
:::info Out of Scope

Bài này chưa đi sâu vào:

- JIT compilation
- hidden classes
- GC internals

Các chủ đề này sẽ được xử lý ở Stage 11.
:::
```

Điều này **không phải thiếu kiến thức**.

Đây là deliberate scope control.

---

# 22. VITEPRESS GOLDEN STANDARD

Markdown phải có semantic intent.

### Good

```md
:::warning
Common misconception
:::
```

### Good

```md
:::details Prediction
...
:::
```

### Good

```md
:::danger
Production risk
:::
```

### Bad

Dùng container chỉ vì:

> “nhìn đẹp”.

Golden Lesson phải ưu tiên:

```text
semantic meaning
>
visual decoration
```

---

# 23. CODE GOLDEN STANDARD

Code phải:

```text
Short
→ Observable
→ Runnable
→ Incremental
```

Tránh:

```text
200-line example
```

khi 10 dòng đủ chứng minh concept.

---

# 24. VERSION / ENVIRONMENT GOLDEN STANDARD

Khi behavior phụ thuộc:

```text
Browser
Node
Framework version
Runtime
Polyfill
Bundler
```

phải ghi baseline.

Không dạy historical behavior như universal rule.

Ví dụ:

Không:

> Node không có `fetch`.

Tốt hơn:

> Trong các Node.js runtime hiện đại, `fetch` được cung cấp như một global Web API; behavior cụ thể có thể phụ thuộc version/runtime.

---

# 25. BEGINNER vs SENIOR DEPTH

Golden Lesson không đồng nghĩa lesson nào cũng phải “senior-level”.

Đúng hơn:

```text
Beginner topic
→ simple presentation

Senior topic
→ deeper judgment

Same teaching quality
≠
same technical depth
```

---

# 26. GOLDEN LESSON SELF-CHECK

Trước khi accept lesson:

```md
## Golden Lesson QA

### Curriculum
- [ ] Đúng Stage
- [ ] Đúng Module
- [ ] Đúng Competency
- [ ] Đúng Depth

### Pedagogy
- [ ] Why rõ
- [ ] Mental model predictive
- [ ] Worked example thực sự worked
- [ ] Có deliberate practice
- [ ] Có failure/debugging khi phù hợp
- [ ] Có transfer
- [ ] Teach-back phù hợp

### Alignment
- [ ] Objective ↔ Content
- [ ] Objective ↔ Practice
- [ ] Objective ↔ Assessment
- [ ] Objective ↔ Exit Criteria

### Technical Quality
- [ ] Không có technical overclaim
- [ ] Không nhầm mental model với implementation
- [ ] Không dùng version-specific claim vô căn cứ
- [ ] Không vượt scope

### VitePress
- [ ] Native Markdown
- [ ] Semantic containers
- [ ] Code blocks chuẩn
- [ ] Mermaid khi cần
- [ ] Không custom HTML/CSS không cần thiết

### Curriculum Continuity
- [ ] Có Previous
- [ ] Có Current
- [ ] Có Next
- [ ] Không duplicate vô ích
```

---

# 27. GOLDEN LESSON SCORE

Có thể dùng thang 20:

| Dimension             |    Max |
| --------------------- | -----: |
| Technical correctness |      4 |
| Mental model          |      3 |
| Pedagogy              |      3 |
| Practice              |      2 |
| Debugging             |      2 |
| Transfer              |      2 |
| Assessment alignment  |      2 |
| Production relevance  |      1 |
| VitePress quality     |      1 |
| **Total**             | **20** |

### Quality gate

```text
18–20 → Gold
16–17 → Acceptable, revise if important
<16   → Reject / rewrite
```

Đặc biệt:

> Technical correctness dưới 4/4 thì không được gọi là Gold, dù lesson đẹp đến đâu.

---

# 28. GOLDEN LESSON KHÔNG PHẢI “LONG LESSON”

Đây là nguyên tắc cần khóa.

Một lesson 1,500 từ có thể tốt hơn lesson 5,000 từ.

Golden Lesson tối ưu:

```text
Learning Value
──────────────
Content Volume
```

Mục tiêu là **density of useful reasoning**, không phải độ dài.

---

# 29. GOLDEN LESSON — CANONICAL EXAMPLE

File này nên có **một lesson thực tế đạt chuẩn**, ví dụ:

```text
Example:
Lesson 0.1.1 — JavaScript là gì?
```

Nhưng phải dùng **bản đã được chỉnh sửa và approved**, không dùng bản hiện tại nguyên trạng.

Mục đích không phải để AI copy nội dung.

Mục đích là để AI nhìn thấy:

```text
How Why is written
How a mental model is presented
How a prediction is structured
How code is scoped
How a debug lab works
How assessment aligns with objective
How VitePress containers are used
```

---

# 30. VAI TRÒ CỦA GOLDEN LESSON STANDARD

Cuối cùng, ba file sẽ có vai trò rất rõ:

```text
CURRICULUM_BOOTSTRAP
→ What system are we building?

GLOBAL_COMPETENCY_DEPTH_MATRIX
→ What must learner become capable of?

MASTER_TEACHING_SPEC
→ What rules must every lesson follow?

GOLDEN_LESSON_STANDARD
→ What does a high-quality lesson actually look like?

LESSON_REQUEST
→ What lesson should be generated now?
```

Đây là 5 lớp context hoàn chỉnh.

