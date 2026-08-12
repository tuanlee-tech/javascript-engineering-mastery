## Kiến trúc folder

```text
JAVASCRIPT-ENGINEERING-MASTERY/
│
├── 00_BOOTSTRAP/
│   ├── CURRICULUM_BOOTSTRAP.md
│   └── CURRICULUM_WORKFLOW.md
│
├── 01_MASTER/
│   ├── JAVASCRIPT_ENGINEERING_MASTERY.md
│   ├── GOAL_JUNIOR_TO_STAFF.md
│   ├── Bản xương sống năng lực: GLOBAL COMPETENCY & DEPTH MATRIX.md
│   └── Quy chuẩn biên soạn chính thức: MASTER TEACHING SPEC.md
│
├── 02_STAGES/
│   ├── STAGE_00.md
│   ├── STAGE_01.md
│   ├── ...
│   └── STAGE_15.md
│
└── 03_LESSONS/
    ├── Stage_00/
    ├── Stage_01/
    ├── ...
    └── Stage_15/
```

| File                             | Chức năng                         | Tần suất sửa |
| -------------------------------- | --------------------------------- | ------------ |
| `CURRICULUM_BOOTSTRAP`           | Luật vận hành toàn curriculum     | Hiếm         |
| `GLOBAL_COMPETENCY_DEPTH_MATRIX` | Học gì, sâu đến đâu               | Rất hiếm     |
| `MASTER_TEACHING_SPEC`           | Luật biên soạn                    | Hiếm         |
| `GOLDEN_LESSON_STANDARD`         | Ví dụ cụ thể thế nào là đạt chuẩn | Hiếm         |
| `LESSON_REQUEST_TEMPLATE`        | Yêu cầu từng lesson               | Dùng lặp lại |


Bây giờ Để tạo **1 lesson mới**, workflow hiện tại nên dùng đúng **5 lớp tài liệu**, theo thứ tự này:

```text
                    1. BOOTSTRAP
                         │
                         ▼
                2. COMPETENCY MATRIX
                         │
                         ▼
                 3. TEACHING SPEC
                         │
                         ▼
               4. GOLDEN LESSON
                         │
                         ▼
                  5. STAGE FILE
                         │
                         ▼
                  LESSON REQUEST
                         │
                         ▼
                    NEW LESSON
```

## 1. `CURRICULUM_BOOTSTRAP_v1.md`

**Luôn đọc.**

Nó trả lời:

> Đây là khóa học gì? Architecture tổng thể là gì? Những rule toàn cục nào phải tuân thủ?

Nó chứa:

```text
16 Stages
source hierarchy
curriculum philosophy
competency model
depth model
spiral learning
project philosophy
AI policy
mentor behavior
global curriculum rules
```

---

## 2. `GLOBAL_COMPETENCY_DEPTH_MATRIX_v1.md`

**Luôn đọc.**

Nó trả lời:

> Lesson này đang xây competency nào và phải sâu đến mức nào?

Ví dụ:

```text
C02 — JavaScript Runtime
Depth: L4
```

Nhờ đó AI không tự quyết định:

> “Lesson này chắc nên dạy sâu V8.”

---

## 3. `MASTER_TEACHING_SPEC_v1.x.md`

**Luôn đọc.**

Nó trả lời:

> Dạy lesson này như thế nào?

Nó quy định:

```text
Why
→ Mental Model
→ Worked Example
→ Predict
→ Implement
→ Break
→ Debug
→ Design
→ Production
→ AI
→ Teach Back
→ Assessment
→ Exit
→ Spiral
```

và các rule:

```text
Objective ↔ Content ↔ Assessment
Scope discipline
Technical precision
Transfer
VitePress
Code standard
Edge case
...
```

---

## 4. `GOLDEN_LESSON_STANDARD_v1.md`

**Nên đọc.**

Nó trả lời:

> Một lesson áp dụng Teaching Spec tốt **trông thực tế như thế nào?**

Đây là reference/example, không phải rule cao hơn Teaching Spec.

Ví dụ AI học được:

```text
Worked Example thực sự phải walkthrough reasoning
Prediction phải nằm trước execution
Transfer phải dùng case chưa xuất hiện
VitePress container dùng có semantic purpose
```

---

## 5. `STAGE_[XX].md`

**Bắt buộc đọc Stage đang viết.**

Ví dụ:

```text
STAGE 0 — JAVASCRIPT LANGUAGE FOUNDATION.md
```

Nó trả lời:

> Lesson này thuộc vị trí nào trong Stage và Stage đang muốn đạt điều gì?

Đây là context **local**.

---

# 6. `LESSON REQUEST_TEMPLATE.md`

Đây không hẳn là “curriculum source”, mà là **instruction của task hiện tại**.

Ví dụ:

```md
# LESSON REQUEST

## Stage
0

## Module
0.1

## Lesson
0.1.2 — Source Code → Parse → Execute

## Task
Write the complete lesson.
```

Nó chỉ rõ:

> **Hôm nay phải tạo cái gì.**

---

# 7. Có cần đọc lesson trước đó không?

**Có, khi lesson có dependency trực tiếp.**

Ví dụ viết:

```text
0.1.2
```

nên đọc thêm:

```text
0.1.1
```

vì cần đảm bảo continuity:

```text
0.1.1
JavaScript / Engine / Runtime

       ↓

0.1.2
Source Code → Parse → Execute
```

Nhưng **không cần đọc toàn bộ các lesson trước**.

Rule:

> Đọc các lesson trực tiếp liên quan đến prerequisite hoặc spiral connection.

---

# 8. Có cần đọc Stage kế tiếp không?

Thông thường **không**.

Chỉ đọc nếu lesson hiện tại có dependency/preview trực tiếp với Stage sau.

Ví dụ:

```text
Stage 0
→ execution preview
```

có thể không cần mở Stage 1.

Nhưng nếu curriculum nói rõ:

> Lesson này phải chuẩn bị cho `Stage 1.1`

thì có thể đọc phần liên quan của Stage 1.

---

# 9. Có cần đọc toàn bộ 16 Stage không?

**Không.**

Đây là điểm rất quan trọng.

Một lesson bình thường chỉ cần:

```text
① Bootstrap
② Competency Matrix
③ Teaching Spec
④ Golden Lesson
⑤ Current Stage
⑥ Relevant previous/related lesson
⑦ Lesson Request
```

Không cần:

```text
Stage 0
Stage 1
Stage 2
...
Stage 15
```

trừ khi bạn đang **audit curriculum**.

---

# 10. Workflow hoàn chỉnh

Ví dụ bạn muốn tạo:

> `Lesson 0.1.2 — Source Code → Parse → Execute`

Chat mới nên nhận:

```text
CURRICULUM_BOOTSTRAP_v1.md
GLOBAL_COMPETENCY_DEPTH_MATRIX_v1.md
MASTER_TEACHING_SPEC_v1.1.md
GOLDEN_LESSON_STANDARD_v1.md
STAGE_0 — JAVASCRIPT LANGUAGE FOUNDATION.md
LESSON_0.1.1.md
LESSON_REQUEST.md
```

Sau đó model thực hiện:

```text
                LESSON REQUEST
                     │
                     ▼
          xác định Lesson cần viết
                     │
                     ▼
          đọc competency + depth
                     │
                     ▼
           đọc Stage context
                     │
                     ▼
         đọc prerequisite/previous
                     │
                     ▼
       áp dụng Teaching Spec rules
                     │
                     ▼
      đối chiếu Golden Lesson Standard
                     │
                     ▼
              viết lesson
                     │
                     ▼
              self-audit
                     │
                     ▼
            xuất Markdown
```

---

# 11. Tôi sẽ chia thành 3 nhóm để dễ nhớ

### A. CONTEXT — “Khóa học đang là gì?”

```text
CURRICULUM_BOOTSTRAP
GLOBAL_COMPETENCY_DEPTH_MATRIX
```

### B. RULES — “Phải viết như thế nào?”

```text
MASTER_TEACHING_SPEC
GOLDEN_LESSON_STANDARD
```

### C. TASK — “Hôm nay viết cái gì?”

```text
STAGE_FILE
LESSON_REQUEST
Relevant Previous Lesson(s)
```

Đây là cách đơn giản nhất để bạn quản lý hàng trăm lesson mà **chat mới vẫn hiểu đúng hệ thống**.

---

# 12. Bộ tối thiểu cho một lesson

Nếu phải rút xuống mức tối thiểu:

```text
MANDATORY
─────────
CURRICULUM_BOOTSTRAP
GLOBAL_COMPETENCY_DEPTH_MATRIX
MASTER_TEACHING_SPEC
STAGE_FILE
LESSON_REQUEST

STRONGLY RECOMMENDED
────────────────────
GOLDEN_LESSON_STANDARD

CONTEXT-DEPENDENT
─────────────────
Previous / Related Lessons
Project / Assessment docs
```

**Tóm lại:** 5 file nền + 1 request là bộ chuẩn; Golden Lesson là reference thêm; lesson trước chỉ đọc khi cần continuity.
