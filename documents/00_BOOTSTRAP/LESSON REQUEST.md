

# LESSON REQUEST

## 1. THÔNG TIN LESSON

### Course

JAVASCRIPT ENGINEERING MASTERY

### Stage

[STAGE_NUMBER]

### Module

[MODULE_NUMBER]

### Lesson

[LESSON_NUMBER] — [LESSON_TITLE]

### Task



Hãy tải tệp CURRICULUM_BOOTSTRAP.md làm ngữ cảnh vận hành. Sau đó, tải các tệp Master, Matrix, Teaching Spec và Stage có liên quan cần thiết cho nhiệm vụ này. Chúng ta sẽ tiếp tục chương trình JAVASCRIPT ENGINEERING MASTERY. Không thiết kế lại chương trình giảng dạy.

Nhiệm vụ: Viết hoàn chỉnh lesson được chỉ định ở trên. Tuân theo tài liệu Master Teaching Spec, ma trận năng lực/độ sâu kiến ​​thức và yêu cầu của Stage 

---

# 2. NGUỒN BẮT BUỘC

Phải đọc và tuân thủ các tài liệu sau trước khi viết:

- CURRICULUM_BOOTSTRAP_v1.md
- GLOBAL_COMPETENCY_DEPTH_MATRIX_v1.md
- MASTER_TEACHING_SPEC_v1.md
- STAGE_[XX] — [STAGE_NAME].md

### Ngữ cảnh bổ sung

Chỉ đọc khi có liên quan trực tiếp:

- Lesson ngay trước đó
- Lesson ngay sau đó
- Module hiện tại
- Project liên quan
- Assessment liên quan
- Tài liệu reference liên quan

Không cần đọc toàn bộ curriculum nếu task không yêu cầu.

---

# 3. MỤC TIÊU BIÊN SOẠN

Lesson phải:

- đúng vị trí trong curriculum;
- đúng competency được quy định trong Global Competency & Depth Matrix;
- đúng Depth Target;
- đúng prerequisite;
- kế thừa mental model từ các lesson trước;
- chuẩn bị cho các concept ở lesson/stage sau;
- không làm thay đổi roadmap;
- không tự ý bổ sung technology hoặc concept ngoài phạm vi cần thiết.

---

# 4. RÀNG BUỘC CURRICULUM

- Không thiết kế lại curriculum.
- Không thay đổi thứ tự Stage nếu không được yêu cầu.
- Không tự ý thêm Stage mới.
- Không nâng lesson lên depth cao hơn quy định.
- Không kéo kiến thức của Stage sau vào lesson hiện tại chỉ vì có liên quan.
- Không lặp lại kiến thức cũ nếu không tạo ra learning value mới.
- Khi một concept được nhắc lại, phải thể hiện rõ mức độ sâu mới hoặc context mới.
- Giữ nhất quán terminology với các tài liệu canonical.
- Nếu phát hiện mâu thuẫn giữa các tài liệu, không tự ý sửa architecture của curriculum; phải chỉ ra mâu thuẫn.

---

# 5. VITEPRESS NATIVE WRITING STANDARD

Mỗi lesson phải được thiết kế cho **VitePress trước**, sau đó mới render thành Markdown.

## 5.1. Ưu tiên

Sử dụng native VitePress / Markdown:

- Markdown headings
- paragraphs
- lists
- `:::info`
- `:::tip`
- `:::warning`
- `:::danger`
- `:::details`
- `:::code-group`
- `:::tabs`
- Markdown table
- Mermaid
- fenced code blocks
- blockquote
- checkbox lists

---

## 5.2. Quy tắc Semantic Container

### Context / Learning Goal

```md
:::info
Nội dung context, mục tiêu hoặc mental model quan trọng.
:::
````

### Practical Tip / Decision

```md
:::tip
Practical tip, Code Review Lens hoặc Engineering Decision.
:::
```

### Common Mistake / Misconception

```md
:::warning
Sai lầm phổ biến, misconception hoặc caveat.
:::
```

### Production Risk

```md
:::danger
Production risk hoặc severe anti-pattern.
:::
```

### Prediction / Reveal / Optional Deep Dive

```md
:::details Prediction

Câu hỏi prediction hoặc nội dung reveal.

:::
```

### Comparison

Ưu tiên:

````md
:::code-group

```js [Bad]
...
````

```js [Good]
...
```

:::

````

hoặc Markdown table khi phù hợp.

### Multiple Runtime / Environment Variants

Dùng `:::tabs` khi cùng một concept cần thể hiện trên **nhiều môi trường hoặc biến thể ngang bằng nhau** (không có good/bad):

````md
:::tabs
== Browser
```js
// browser-specific
```
== Node.js
```js
// node-specific
```
:::
````

Ví dụ dùng hợp lý: Browser vs Node.js, ESM vs CJS, TypeScript vs JavaScript.

Không dùng `:::tabs` để thay thế `:::code-group` khi so sánh bad/good.

---

## 5.3. Quy tắc sử dụng

- So sánh bad/good → `code-group`.
- So sánh nhiều môi trường ngang bằng → `tabs`.
- So sánh thuộc tính/trade-off → Markdown table.
- Prediction → `details`.
- Warning → `warning`.
- Production risk → `danger`.
- Decision → bảng + `tip`.
- Exit Check → checkbox list.
- Flow / architecture / lifecycle nhiều bên → Mermaid khi diagram tạo learning value.
- Flow đơn giản 1 chiều (A → B → C) → blockquote hoặc numbered list, **không dùng Mermaid**.

---

## 5.4. Cấm

Không sử dụng:

- raw HTML khi Markdown/VitePress native đã đủ;
- custom CSS;
- CSS-dependent pseudo-components;
- decorative formatting không có learning value;
- HTML `<table>` thay cho Markdown table;
- metadata tags trong learner-facing content;
- container chỉ để làm lesson “đẹp” nhưng không có semantic purpose.

---

# 6. CODE WRITING STANDARD

Code trong lesson phải:

- executable hoặc gần executable;
- có đủ context để learner hiểu;
- ưu tiên code ngắn trước;
- tăng complexity sau khi mental model đã hình thành;
- thể hiện observable behavior rõ ràng;
- tránh pseudo-code nếu có thể dùng JavaScript thực tế;
- không đưa quá nhiều abstraction trước khi learner hiểu primitive;
- không lặp cùng một code pattern nếu không tạo thêm learning value.

## Giới hạn độ dài code block

```text
- Trước khi learner có mental model   → tối đa 20 dòng
- Sau khi mental model đã hình thành  → tối đa 40 dòng
- Code dài hơn → dùng Partial Scaffold (comment // implement here hoặc ...)
```

Không paste toàn bộ implementation khi learner chưa có đủ nền để đọc hiểu.

## Khi so sánh hai cách

Dùng:

````md
:::code-group

```js [Bad]
...
`````

```js [Good]
...
```

:::

````

---

# 7. EDGE CASE STANDARD

Edge case phải ưu tiên giá trị debugging thực tế.

Ưu tiên:

```text
failure case
↓
misleading symptom
↓
observable signal
↓
root cause
↓
fix / decision
```

Không thêm edge case chỉ để tăng độ rộng kiến thức.

---

# 8. LEARNING SIGNAL

Mỗi section quan trọng phải có ít nhất một learning purpose rõ ràng:

```text
UNDERSTAND
PREDICT
COMPARE
IMPLEMENT
DEBUG
DESIGN
DECIDE
TEACH
```

Không viết section chỉ để tăng độ dài lesson.

---

# 9. CODE / EXERCISE PROGRESSION

Khi có implementation hoặc exercise, ưu tiên:

```text
1. Guided
2. Partial Scaffold
3. Independent
4. Constraint-based
```

Không đưa ngay một bài quá lớn khi mental model chưa hình thành.

---

# 10. FAILURE-FIRST LEARNING

Đối với concept phù hợp, phải đưa learner qua:

```text
Correct Mental Model
        ↓
Wrong Assumption
        ↓
Failure
        ↓
Debug
        ↓
Root Cause
        ↓
Correct Model
```

Không chỉ đưa một ví dụ “happy path”.

---

# 11. PRODUCTION CONNECTION

Đối với concept quan trọng, phải chỉ ra:

- nó giải quyết vấn đề gì trong production;
- bug nào thường xuất hiện;
- nó ảnh hưởng đến architecture/performance/security/reliability như thế nào;
- hoặc concept này sẽ quay lại ở Stage nào.

Không ép mọi lesson phải có một production incident nếu bản chất lesson chưa phù hợp.

---

# 12. AI-ASSISTED EXERCISE

AI là một phương thức học, không phải nội dung technology riêng.

Có thể sử dụng theo progression:

```text
Ask
→ Challenge
→ Delegate
→ Inspect
→ Verify
→ Adversarial Review
→ Strategic Leverage
```

Learner luôn chịu trách nhiệm về correctness.

Không coi:

```text
AI output = truth
```

---

# 13. TEACH-BACK

Lesson phải có teach-back khi competency phù hợp.

Có thể yêu cầu:

- giải thích trong 2 phút;
- vẽ mental model;
- trace một đoạn code;
- review một implementation;
- giải thích trade-off.

Mục tiêu:

> chứng minh learner hiểu và có thể truyền đạt concept, không chỉ nhận ra definition.

---

# 14. ASSESSMENT

Assessment phải phù hợp với Depth Target.

### L1–L2

```text
Recall
Explain
```

### L3

```text
Use
```

### L4

```text
Debug
```

### L5

```text
Implement
```

### L6

```text
Design
```

### L7

```text
Judge
```

### L8

```text
Teach
Leverage
```

Không đánh giá Senior-level competency chỉ bằng multiple-choice hoặc recall.

---

# 15. EXIT CRITERIA

Exit Criteria phải observable.

Không viết:

> “Hiểu concept.”

Phải viết theo dạng:

```text
[ ] Có thể giải thích...
[ ] Có thể dự đoán...
[ ] Có thể implement...
[ ] Có thể debug...
[ ] Có thể thiết kế...
[ ] Có thể lựa chọn...
```

Nếu lesson có prediction exercise, có thể quy định:

```text
≥ X/Y scenarios
```

nếu phù hợp.

---

# 16. SPIRAL CONNECTION

Cuối lesson phải xác định rõ:

### Previous

Learner đã biết gì trước lesson?

### Current

Lesson này thêm mental model nào?

### Next

Concept này sẽ quay lại ở đâu?

Format:

```text
Previous
→ Current
→ Next
```

Ví dụ:

```text
Scope
→ Closure
→ Async Callback / React Stale Closure / Memory Retention
```

---

# 17. PHẠM VI KIẾN THỨC

Mỗi lesson phải phân biệt:

### Essential

Kiến thức bắt buộc ở depth hiện tại.

### Supporting

Kiến thức hỗ trợ để hiểu concept.

### Awareness

Biết concept tồn tại nhưng chưa cần master.

### Out of Scope

Chủ động không học trong lesson này và sẽ học ở nơi khác nếu cần.

Điều này dùng để kiểm soát cognitive load.

---

# 18. OUTPUT FORMAT

Khi thực hiện Lesson Request:

- Chỉ xuất **learner-facing Markdown**.
- Không giải thích quá trình nội bộ đã dùng để viết.
- Không đưa metadata nội bộ vào lesson nếu không phục vụ learner.
- Không nhắc tới prompt, context hoặc instruction nội bộ.
- Không redesign curriculum.
- Không tự ý sửa các tài liệu canonical.
- Giữ format phù hợp để có thể lưu trực tiếp thành file `.md` và render bằng VitePress.

## Quy tắc Heading Level

```text
- File không có frontmatter title → bắt đầu lesson bằng # (H1)
- File có frontmatter title đã đặt H1 → bắt đầu nội dung bằng ## (H2)
- Không dùng # (H1) nhiều hơn 1 lần trong một file lesson
- Không dùng breakline (---) trước các ## (H2)
```

Vi phạm quy tắc này sẽ phá vỡ heading hierarchy của VitePress và làm On-this-page TOC hiển thị sai.

---

# 19. QUALITY CHECK TRƯỚC KHI HOÀN THÀNH

Trước khi xuất lesson, tự kiểm tra:

```text
[ ] Đúng Stage / Module / Lesson
[ ] Đúng Competency
[ ] Đúng Depth Target
[ ] Đúng prerequisite
[ ] Không vượt Stage boundary
[ ] Mental model rõ và có tính dự đoán
[ ] Có learning progression
[ ] Code thực tế / executable
[ ] Code block không vượt giới hạn độ dài phù hợp với stage của mental model
[ ] Có edge cases phù hợp
[ ] Có debugging value khi cần
[ ] Có production connection khi phù hợp
[ ] Assessment observable
[ ] Exit criteria measurable
[ ] Có Spiral Connection
[ ] VitePress-native
[ ] Container dùng đúng semantic (info/tip/warning/danger/details/code-group/tabs)
[ ] Mermaid chỉ dùng khi diagram tạo learning value thực sự
[ ] Heading level đúng cấu trúc (không dùng H1 nhiều lần)
[ ] Không dùng decorative formatting
[ ] Không lặp nội dung vô ích
```

---

# 20. QUY TẮC CUỐI CÙNG

Mỗi lesson phải trả lời được 7 câu hỏi:

```text
1. Learner đang giải quyết problem gì?

2. Mental model nào cần hình thành?

3. Learner phải có khả năng dự đoán điều gì?

4. Learner phải tự làm được điều gì?

5. Khi nào concept này thất bại hoặc gây bug?

6. Làm sao chứng minh learner thực sự đã làm chủ nó?

7. Concept này sẽ được sử dụng lại ở đâu trong curriculum?
```

Nếu không trả lời được 7 câu hỏi trên:

> **Lesson chưa sẵn sàng để đưa vào curriculum.**


