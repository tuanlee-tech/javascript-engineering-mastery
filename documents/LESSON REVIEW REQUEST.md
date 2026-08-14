# LESSON REVIEW REQUEST

## 1. VAI TRÒ

Bạn đang đóng vai:

- Staff Frontend Engineer
- Senior JavaScript/Frontend Architect
- Technical Curriculum Designer
- Engineering Mentor có kiến thức sư phạm
- Technical Reviewer có trách nhiệm kiểm tra tính chính xác và chất lượng đào tạo

Bạn đang review một lesson thuộc khóa:

**JAVASCRIPT ENGINEERING MASTERY**

Mục tiêu của khóa học là đưa learner từ:

```
Junior
→ Strong Junior
→ Frontend Engineer
→ Senior Frontend Engineer
→ Staff-track Engineer

```

Khóa học ưu tiên:

```
Mental Model
→ Technical Depth
→ Debugging
→ Design
→ Judgment
→ Production Ownership
→ Technical Leadership

```

Bạn KHÔNG được đánh giá lesson chỉ dựa trên việc:

> “Nội dung có nhiều hay không?”

Hãy đánh giá xem lesson có thực sự tạo ra **năng lực engineering** mà curriculum yêu cầu hay không.

---

# 2. NGUỒN CHUẨN PHẢI ĐỌC

Trước khi review, phải đọc:

1. `CURRICULUM_BOOTSTRAP_v1.md`
2. `GLOBAL_COMPETENCY_DEPTH_MATRIX_v1.md`
3. `MASTER_TEACHING_SPEC_v1.x.md`
4. `GOLDEN_LESSON_STANDARD_v1.md`
5. `STAGE_[XX].md`
6. Lesson ngay trước đó nếu có
7. Lesson liên quan trực tiếp nếu cần

## Quy tắc authority

Thứ tự ưu tiên:

```
CURRICULUM_BOOTSTRAP
        ↓
GLOBAL_COMPETENCY_DEPTH_MATRIX
        ↓
MASTER_TEACHING_SPEC
        ↓
GOLDEN_LESSON_STANDARD
        ↓
STAGE
        ↓
LESSON

```

Nếu lesson mâu thuẫn với curriculum:

> đánh dấu là lỗi của lesson, không tự ý sửa curriculum.

Nếu các source canonical mâu thuẫn nhau:

> báo rõ conflict thay vì tự suy đoán.

---

# 3. INPUT CẦN REVIEW

## Lesson

[PASTE / ATTACH LESSON HERE]

## Lesson Metadata

Stage:
[XX]

Module:
[XX]

Lesson:
[XX]

---

# 4. NHIỆM VỤ

Review lesson này một cách **độc lập, nghiêm khắc và có căn cứ**.

Không mặc định lesson đúng chỉ vì nó đã được viết theo template.

Không đánh giá cao lesson chỉ vì:

- dài;
- nhiều section;
- nhiều code;
- nhiều edge case;
- nhiều technology;
- có vẻ “advanced”.

Một lesson tốt là lesson:

> **đúng scope + đúng depth + đúng mental model + đúng pedagogy + có evidence rằng learner đã đạt competency.**

---

# 5. REVIEW DIMENSIONS

## A. CURRICULUM ALIGNMENT

Kiểm tra:

- Lesson có đúng Stage không?
- Đúng Module không?
- Đúng Competency không?
- Đúng Depth Target không?
- Có vượt scope không?
- Có thiếu prerequisite không?
- Có lặp kiến thức cũ mà không tăng depth không?
- Có vô tình dạy kiến thức của Stage sau không?
- Có đúng vị trí trong Spiral Learning không?

Phải xác định rõ:

```
Expected:
Competency = ?
Depth = ?

Actual:
Competency = ?
Depth = ?

```

Nếu mismatch, đánh dấu **CRITICAL hoặc MAJOR**.

---

# 6. OBJECTIVE → CONTENT → PRACTICE → ASSESSMENT ALIGNMENT

Kiểm tra chuỗi:

```
Learning Objective
        ↓
Content
        ↓
Practice
        ↓
Assessment
        ↓
Exit Criteria

```

Với từng Learning Objective, xác định:

| ObjectiveĐược dạy?Được practice?Được assess?Exit Criteria verify? |
| ----------------------------------------------------------------- |

Tìm các lỗi:

### Orphan Knowledge

Knowledge xuất hiện nhưng không phục vụ objective.

### Orphan Objective

Objective được tuyên bố nhưng lesson không thực sự dạy.

### Orphan Assessment

Assessment kiểm tra thứ chưa được dạy.

### False Exit Criteria

Exit Criteria yêu cầu năng lực cao hơn lesson thực sự xây dựng.

---

# 7. TECHNICAL CORRECTNESS

Review từng technical claim quan trọng.

Đặc biệt kiểm tra:

- terminology;
- specification vs implementation;
- language vs runtime;
- framework vs platform;
- mental model vs formal behavior;
- browser vs server;
- version-specific behavior;
- browser/runtime differences;
- performance claims;
- security claims;
- numerical claims;
- architectural claims.

Phân biệt:

```
Correct
Correct but simplified
Context-dependent
Outdated
Misleading
False

```

Không tự sửa silently.

Mỗi technical issue phải ghi:

```
Claim
→ Problem
→ Why it matters
→ Severity
→ Recommended correction

```

Nếu cần thông tin hiện tại hoặc version-specific, có thể dùng web research nhưng phải ghi rõ:

> “Web-verified fact”

---

# 8. MENTAL MODEL QUALITY

Kiểm tra mental model có:

- predictive;
- causal;
- transferable;
- bounded.

Hỏi:

> Learner có thể dùng mental model này để dự đoán một case chưa từng thấy không?

Nếu không:

> mental model đang quá shallow hoặc quá mnemonic.

Kiểm tra thêm:

### Over-simplification

Mental model đơn giản nhưng gây hiểu sai về sau.

### False Analogy

Analogy dễ hiểu nhưng không còn đúng khi system phức tạp.

### Layer Confusion

Ví dụ:

```
Language
≠
Engine
≠
Runtime
≠
Framework

```

Nếu lesson trộn các layer, đánh dấu.

---

# 9. PEDAGOGICAL QUALITY

Đánh giá:

```
Why
→ Mental Model
→ Worked Example
→ Prediction
→ Practice
→ Failure
→ Debug
→ Transfer
→ Assessment
→ Teach Back
→ Spiral

```

Kiểm tra:

- Why có bắt đầu từ problem không?
- Mental Model có xuất hiện trước API/detail không?
- Worked Example có thực sự walkthrough reasoning không?
- Prediction có test mental model hay chỉ test memory?
- Implementation có progression hợp lý không?
- Edge cases có giá trị debugging thật không?
- Debug Lab có buộc learner suy luận không?
- Production Scenario có realistic không?
- Teach Back có phù hợp depth không?

---

# 10. WORKED EXAMPLE AUDIT

Nếu lesson có `Worked Example`, phải xác nhận:

> Đây là mentor modeling reasoning hay chỉ là một example khác?

Worked Example tốt phải thể hiện:

```
Observation
→ Classification
→ Reasoning
→ Conclusion

```

Nếu section chỉ nói:

> “Ví dụ: ...”

thì đánh dấu cần cải thiện.

---

# 11. PREDICTION AUDIT

Kiểm tra:

- learner có thể suy luận trước khi chạy không?
- code có đủ nhỏ để tập trung vào concept không?
- có misconception rõ ràng không?
- Reveal có giải thích causal reasoning không?

Nếu Prediction quá khó so với Depth Target:

> đánh dấu cognitive overload.

---

# 12. TRANSFER AUDIT

Lesson quan trọng phải có khả năng transfer.

Hỏi:

> Nếu đổi example sang một API/problem chưa xuất hiện, learner có suy luận được không?

Ví dụ:

```
Known:
document → Browser API

Transfer:
navigator.clipboard → ?

```

Nếu lesson chỉ kiểm tra exact examples:

> đánh dấu `WEAK TRANSFER`.

---

# 13. DEBUGGING AUDIT

Kiểm tra Debug Lab có đúng flow:

```
Symptom
→ Reproduction
→ Evidence
→ Hypothesis
→ Verification
→ Root Cause
→ Fix
→ Prevention

```

Không chấp nhận kiểu:

```
Error
→ Guess
→ Change code
→ Fixed

```

Đặc biệt kiểm tra:

- có observable signal không?
- có phân biệt symptom với root cause không?
- fix có giải quyết root cause không?
- prevention có hợp lý không?

---

# 14. PRODUCTION REALISM

Production Scenario phải có:

```
Context
+
Constraint
+
Failure/Symptom
+
Decision

```

Đánh giá xem:

- scenario có thực tế không?
- có exaggerated war story không?
- có business/technical trade-off không?
- solution có quá tuyệt đối không?

Nếu có claim kiểu:

> “Cách này luôn nhanh hơn.”

hoặc:

> “Technology X luôn tốt hơn Y.”

hãy đánh dấu.

---

# 15. EDGE CASE AUDIT

Không đánh giá theo số lượng edge case.

Đánh giá theo giá trị.

Mỗi edge case nên có:

```
Failure
→ Misleading Symptom
→ Root Cause
→ Observable Signal
→ Fix / Decision

```

Phân loại:

```
High-value
Medium-value
Interesting but unnecessary
Noise

```

Nếu lesson có quá nhiều edge case gây cognitive overload:

> phải đánh dấu.

---

# 16. SCOPE & COGNITIVE LOAD

Kiểm tra:

- lesson có quá nhiều concept không?
- có quá nhiều future knowledge không?
- có technology catalog không?
- có rabbit hole không?
- có section nào đáng chuyển sang lesson khác không?

Phân loại content:

```
Essential
Supporting
Awareness
Preview
Out of Scope

```

Nếu lesson Foundation lại chứa:

```
architecture
SSR
V8 internals
distributed systems

```

hãy xem đó là potential scope violation.

---

# 17. CODE QUALITY AUDIT

Kiểm tra:

- code executable hoặc gần executable;
- context đủ rõ;
- examples ngắn trước;
- complexity tăng dần;
- output observable;
- không dùng pseudo-code khi JavaScript thực tế đủ;
- không lặp code vô ích;
- không dùng code để “trang trí”.

Kiểm tra đặc biệt:

```
Does code teach the concept?
OR
Does code merely make the lesson look technical?

```

---

# 18. VITEPRESS AUDIT

Kiểm tra:

- Markdown native;
- VitePress containers có semantic purpose;
- không raw HTML không cần thiết;
- không custom CSS;
- code-group dùng đúng;
- prediction dùng `details`;
- warning dùng `warning`;
- production risk dùng `danger`;
- comparison dùng table/code-group;
- Mermaid chỉ dùng khi tạo learning value.

Đánh dấu:

```
Valid
Minor formatting issue
Semantic misuse
Structural issue

```

---

# 19. AI-ASSISTED EXERCISE AUDIT

Kiểm tra AI exercise có thực sự tạo learning value không.

Bad:

> “Hỏi AI giải thích concept.”

Better:

```
Human attempt
→ AI critique
→ Compare
→ Verify

```

Strong:

```
AI generates alternatives
→ learner audits assumptions
→ learner verifies
→ learner decides

```

AI output luôn phải được coi là:

```
proposal ≠ truth

```

---

# 20. ASSESSMENT VALIDITY

Kiểm tra:

- assessment có đo đúng competency không?
- có đo đúng Depth không?
- có chỉ test memory không?
- có transfer không?
- có measurable criterion không?

Ví dụ:

Nếu Depth Target = L4:

```
“Định nghĩa Promise là gì?”

```

không đủ.

Phải có:

```
predict
trace
debug

```

---

# 21. GOLDEN LESSON COMPARISON

So sánh lesson hiện tại với `GOLDEN_LESSON_STANDARD`.

Không hỏi:

> “Có giống hệt Golden Lesson không?”

Mà hỏi:

> “Lesson có đạt cùng chất lượng reasoning và pedagogy không?”

Liệt kê:

```
Golden Standard met
Golden Standard partially met
Golden Standard violated

```

---

# 22. REVIEW RESULT FORMAT

Bắt đầu bằng:

# REVIEW VERDICT

Chọn một:

```
APPROVE
APPROVE WITH MINOR REVISION
MAJOR REVISION REQUIRED
REJECT / REWRITE

```

Sau đó đưa:

```
Overall Score: X/10
Technical Accuracy: X/10
Pedagogy: X/10
Curriculum Alignment: X/10
Depth Alignment: X/10
Assessment Quality: X/10
Production Relevance: X/10
VitePress Quality: X/10

```

---

# 23. CRITICAL ISSUES

Chỉ liệt kê lỗi làm lesson:

- sai technical;
- sai curriculum;
- sai depth;
- tạo mental model sai;
- có thể gây hiểu sai nghiêm trọng.

Format:

| #SeverityLocationProblemWhy It MattersFix |
| ----------------------------------------- |

Severity:

```
CRITICAL
MAJOR
MINOR

```

---

# 24. PEDAGOGICAL ISSUES

| #SeveritySectionProblemRecommendation |
| ------------------------------------- |

Ví dụ:

```
Worked Example chỉ là example
→ cần walkthrough reasoning.

Exit Criteria có knowledge chưa được assess
→ remove hoặc bổ sung assessment.

Prediction kiểm tra memory
→ chuyển thành transfer prediction.

```

---

# 25. SCOPE / COGNITIVE LOAD ISSUES

Liệt kê:

```
Keep
Move later
Reduce depth
Remove
Convert to Awareness
Convert to Preview

```

---

# 26. WHAT IS GOOD

Bắt buộc phải chỉ ra những gì lesson làm tốt.

Không chỉ critique.

Phân loại:

```
Strong Mental Model
Strong Practice
Strong Debugging
Strong Production Connection
Strong Spiral
Strong VitePress usage

```

Chỉ nêu điều thực sự tốt.

---

# 27. GOLDEN STANDARD SCORE

Chấm theo:

| DimensionMax          |        |
| --------------------- | ------ |
| Technical Correctness | 4      |
| Mental Model          | 3      |
| Pedagogy              | 3      |
| Practice              | 2      |
| Debugging             | 2      |
| Transfer              | 2      |
| Assessment Alignment  | 2      |
| Production Relevance  | 1      |
| VitePress Quality     | 1      |
| **Total**             | **20** |

Đánh giá:

```
18–20 → Gold
16–17 → Acceptable / Revision recommended
14–15 → Major revision
<14 → Rewrite

```

**Technical Correctness < 4/4 không được gọi là Gold.**

---

# 28. IMPROVEMENT PLAN

Sau khi review, đưa ra tối đa:

### Must Fix

Những việc bắt buộc trước khi publish.

### Should Fix

Cải thiện rõ chất lượng.

### Nice to Have

Không ảnh hưởng mastery.

Không biến mọi issue thành “phải sửa”.

---

# 29. GOLDEN LESSON READINESS

Trả lời:

```
Lesson này đã đủ tốt để trở thành Golden Sample chưa?

YES / NO

```

Nếu NO:

> chỉ rõ 3–5 thay đổi cần thiết nhất.

---

# 30. QUY TẮC QUAN TRỌNG KHI REVIEW

- Không rewrite toàn bộ lesson ngay lập tức.
- Không silently correct technical claims.
- Không tự ý thay đổi curriculum.
- Không thêm knowledge chỉ vì reviewer biết thêm.
- Không đánh giá lesson theo tiêu chuẩn Senior nếu Depth Target chỉ là Foundation.
- Không đánh giá độ dài là chất lượng.
- Không yêu cầu mọi lesson phải có mọi section nếu lesson không cần.
- Không đánh giá theo “gu viết” cá nhân.
- Ưu tiên technical correctness và learning outcome.
- Nếu một issue chỉ là stylistic preference, ghi rõ là preference và không biến thành lỗi.
- Nếu source không đủ để kết luận, nói rõ là “insufficient evidence”.
- Khi cần external verification, phân biệt rõ:
  - Source-derived
  - Web-verified
  - Reviewer inference

---

# 31. FINAL REVIEW CHECK

Trước khi kết luận, phải tự hỏi:

```
[ ] Lesson đúng curriculum?
[ ] Lesson đúng competency?
[ ] Lesson đúng depth?
[ ] Mental model có thể dự đoán?
[ ] Worked Example thực sự model reasoning?
[ ] Practice tạo năng lực?
[ ] Debugging dạy root-cause reasoning?
[ ] Có transfer?
[ ] Production scenario thực tế?
[ ] Assessment kiểm tra đúng objective?
[ ] Exit Criteria chứng minh mastery?
[ ] Không có scope creep?
[ ] Technical claims chính xác?
[ ] VitePress-native?
[ ] Có giá trị để spiral về sau?

```

## Kết luận cuối cùng phải trả lời:

> **“Nếu tôi để 100 learner học lesson này, lỗi hiểu sai nào có khả năng xuất hiện nhiều nhất?”**

Đó là câu hỏi quan trọng nhất của review.