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

Cái giúp chat mới hiểu **quan hệ giữa chúng** là:

```text
CURRICULUM_BOOTSTRAP.md
          +
GLOBAL_COMPETENCY_DEPTH_MATRIX
          +
MASTER_TEACHING_SPEC
```

Ba file này chính là **context operating system** của khóa học.

Các Stage file là **domain data**.

Lesson files là **generated curriculum content**.

Có thể hình dung:

```text
             CURRICULUM BOOTSTRAP
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
 Competency      Teaching      Master
  Matrix           Spec       Curriculum
       │            │            │
       └────────────┼────────────┘
                    ▼
                STAGE 0–15
                    │
                    ▼
                 LESSONS
```

Đây là kiến trúc tôi khuyên dùng cho toàn bộ project. Nó giúp chat mới **không cần nhớ cuộc hội thoại cũ** mà vẫn có thể tiếp tục đúng curriculum, đúng depth, đúng pedagogy và đúng vị trí trong roadmap.



## Khi mở chat mới

Sau khi upload/bật các file trên vào chat mới, **không prompt dài** nữa.

Chỉ cần:

> **Load `CURRICULUM_BOOTSTRAP.md` as the operating context. Then load the relevant Master, Matrix, Teaching Spec, and Stage files required for this task. We are continuing JAVASCRIPT ENGINEERING MASTERY. Do not redesign the curriculum.**
>
> **Task: Write Lesson `0.1.2 — Source Code → Parse → Execute` following the Master Teaching Spec, competency/depth matrix, and Stage 0.**

Thế là đủ.


## Chỉ upload tối thiểu

Không nên upload **17 file cùng lúc cho mọi lesson**.

Ví dụ viết:

```text
Stage 8 React lesson
```

thì context cần:

```text
CURRICULUM_BOOTSTRAP
+
GLOBAL_COMPETENCY_DEPTH_MATRIX
+
MASTER_TEACHING_SPEC
+
STAGE 8
+
related previous/next lessons
```

Không cần nhét toàn bộ:

```text
Stage 0 → Stage 15
```

vào context mỗi lần.

CURRICULUM_BOOTSTRAP sẽ nói cho model AI biết **file nào có authority gì**, còn task hiện tại quyết định những file nào cần đọc.

---
Dùng mẫu :

````text 
# LESSON REQUEST

## Course
JAVASCRIPT ENGINEERING MASTERY

## Stage
0

## Module
0.1

## Lesson
0.1.2 — Source Code → Parse → Execute

## Task
Write the complete lesson.

## Required Sources
- CURRICULUM_BOOTSTRAP.md
- Bản xương sống năng lực: GLOBAL COMPETENCY & DEPTH MATRIX.md
- Quy chuẩn biên soạn chính thức: MASTER TEACHING SPEC.md
- STAGE 0 — JAVASCRIPT LANGUAGE FOUNDATION.md

## Constraints
- Do not redesign curriculum.
- Do not advance into Stage 1 depth.
- Maintain Depth Target defined by the matrix.
- Use the canonical lesson structure.
- Keep future concepts as awareness only when appropriate.

````

---

## Workflow thực tế ở chat mới

Tôi khuyên workflow chỉ có 4 bước:

```text
① Upload / attach Bootstrap + relevant files
        ↓
② Gửi Task
        ↓
③ AI đọc source theo hierarchy
        ↓
④ Viết lesson
```

Không cần kể lại:

> “trước đây chúng ta đã nói rằng…”

Không cần paste toàn bộ roadmap.

Không cần dựa vào memory của chat cũ.

---
