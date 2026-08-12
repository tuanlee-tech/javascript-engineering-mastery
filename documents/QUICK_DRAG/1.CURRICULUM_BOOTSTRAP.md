# CURRICULUM BOOTSTRAP

## JAVASCRIPT ENGINEERING MASTERY

### Purpose

You are continuing an existing long-form curriculum project named:

**JAVASCRIPT ENGINEERING MASTERY**

The curriculum is designed to take a Junior Frontend Developer with approximately 6 months of experience from a rebuilt JavaScript foundation toward:

```text
Junior
→ Strong Junior
→ Frontend Engineer
→ Senior Frontend Engineer
→ Staff-track Engineer
```

The target is **not** to memorize frameworks.

The target is to build:

```text
Mental Models
+
Technical Depth
+
Debugging Ability
+
Engineering Judgment
+
Architecture Ability
+
Production Ownership
+
Technical Leadership
```


---

# CURRICULUM INTEGRITY RULES

When generating lessons:

1. Objective must align with content.
2. Content must align with assessment.
3. Exit Criteria must verify stated objectives.
4. Future-stage knowledge may be previewed but must not be taught beyond current depth.
5. Distinguish formal specification from pedagogical mental model.
6. Avoid version-specific claims unless required.
7. Use transfer exercises to verify conceptual understanding.
8. Worked Example must model reasoning, not merely introduce an exercise.


---

# LESSON GENERATION PRIORITY

When writing a lesson, prioritize in this order:

1. Curriculum scope
2. Competency + Depth
3. Technical correctness
4. Mental model
5. Learning progression
6. Practice
7. Assessment
8. Production relevance
9. Formatting / presentation

---

# 1. AUTHORITATIVE SOURCE HIERARCHY

When multiple files provide overlapping information, use this priority order:

```text
1. GLOBAL_COMPETENCY_DEPTH_MATRIX_v1.md
   ↓
2. MASTER_TEACHING_SPEC_v1.md
   ↓
3. JAVASCRIPT_ENGINEERING_MASTERY.md
   ↓
4. GOAL_JUNIOR_TO_STAFF.md
   ↓
5. Relevant STAGE file
   ↓
6. Relevant previous LESSON file
```

However:

> A more specific lower-level document may refine implementation details, but it must not contradict the higher-level curriculum architecture.

---

# 2. MASTER CURRICULUM

There are 16 stages.

```text
STAGE 0
JavaScript Language Foundation

STAGE 1
JavaScript Execution Model

STAGE 2
Object Model & Advanced JavaScript

STAGE 3
Asynchronous JavaScript & Concurrency

STAGE 4
Browser Runtime & Web Platform

STAGE 5
Network & Web Platform

STAGE 6
TypeScript Engineering

STAGE 7
Toolchain & JavaScript Ecosystem

STAGE 8
React Engineering

STAGE 9
Production Frontend

STAGE 10
Next.js & Full-stack Frontend

STAGE 11
Performance, Memory & Security

STAGE 12
Frontend Architecture

STAGE 13
Production & System Engineering

STAGE 14
Senior Engineering

STAGE 15
Staff Engineering Track
```

Do not add another Stage unless the curriculum architecture is explicitly revised.

---

# 3. CORE PHILOSOPHY

The curriculum follows:

```text
Mental Model First
+
Prediction Before Execution
+
Failure-driven Learning
+
Deliberate Practice
+
Spiral Learning
+
Production Context
+
Evidence-based Assessment
+
Depth Over Breadth
```

The learner must not merely recognize API syntax.

The learner must progressively move through:

```text
Recognize
→ Explain
→ Use
→ Debug
→ Implement
→ Design
→ Judge
→ Teach
→ Leverage
```

---

# 4. DEPTH MODEL

```text
L1 — Recognize
L2 — Explain
L3 — Use
L4 — Debug
L5 — Implement
L6 — Design
L7 — Judge
L8 — Leverage
```

Expected career progression:

```text
Junior
→ L1–L3

Mid
→ L3–L5

Senior
→ L4–L7

Staff-track
→ L6–L8
```

Not every topic requires L8.

Do not overteach topics beyond their required depth.

---

# 5. CORE COMPETENCIES

The curriculum has 14 competency domains:

```text
C01 — JavaScript Language
C02 — JavaScript Runtime
C03 — Async & Concurrency
C04 — Browser / Web Platform
C05 — Network & Web Protocol
C06 — Type & Data Modeling
C07 — Toolchain & Developer Infrastructure
C08 — Frontend Application Engineering
C09 — Production Frontend
C10 — Performance / Memory / Security
C11 — Architecture
C12 — Production & Reliability
C13 — Engineering Judgment
C14 — Technical Leadership & Leverage
```

The competency matrix is authoritative for depth and progression.

---

# 6. SPIRAL LEARNING

Important concepts must reappear at increasing depth.

Examples:

```text
Closure
S1 → S3 → S8 → S11 → S14

State
S3 → S8 → S9 → S10 → S12 → S14

Caching
S5 → S8 → S10 → S11 → S12 → S14

Error Handling
S0 → S3 → S5 → S8 → S9 → S10 → S11 → S13 → S14

Performance
S4 → S7 → S8 → S9 → S11 → S12 → S14
```

A concept returning later is not repetition.

It is **depth progression**.

---

# 7. TECHNOLOGY POLICY

Technology is a vehicle for teaching engineering concepts.

Do not make the course a technology checklist.

Examples:

```text
React
→ rendering/state/component architecture

Next.js
→ server/client architecture

TanStack Query
→ server-state lifecycle

Zod
→ runtime trust boundaries

Vite/Webpack
→ build system architecture
```

Do not add technologies simply because they are popular.

---

# 8. CORE / SUPPORTING / ELECTIVE

### Core

Must be mastered for the main track.

### Supporting

Required to understand or work effectively with real systems, but not necessarily deep mastery.

### Elective

Useful specialization, outside the core exit criteria.

Potential electives include:

```text
GraphQL
WebAssembly
WebGL
React Native
Electron
Advanced Module Federation
Advanced PWA
Advanced State Machines
Framework comparison
```

---

# 9. PROJECT PHILOSOPHY

Projects are not isolated toy applications.

Later projects should build on earlier knowledge and simulate software lifecycle:

```text
Idea
→ Requirements
→ Design
→ Implement
→ Test
→ Release
→ Operate
→ Break
→ Debug
→ Optimize
→ Migrate
→ Evolve
```

Projects should deliberately contain failures at later stages.

---

# 10. FAILURE-FIRST LEARNING

Important concepts must have failure scenarios.

Examples:

```text
Closure
→ stale closure

Promise
→ ordering bug

Async
→ race condition

Cache
→ stale data

React
→ unnecessary render

Memory
→ retained object

Network
→ retry storm

Architecture
→ dependency cycle

Production
→ bad deployment
```

The learner should investigate:

```text
Symptom
→ Reproduction
→ Evidence
→ Hypothesis
→ Verification
→ Root Cause
→ Fix
→ Prevention
```

---

# 11. AI LEARNING POLICY

AI is a learning mode, not a standalone technology module.

Use the progression:

```text
Ask
→ Challenge
→ Delegate
→ Verify
→ Adversarial Review
→ Strategic Leverage
```

The learner owns correctness.

AI output must be treated as:

```text
proposal
≠
truth
```

---

# 12. LESSON WRITING CONTRACT

Every major lesson must follow:

```text
0. Metadata
1. Why This Exists
2. Prerequisites
3. Learning Objectives
4. Mental Model
5. Core Concepts
6. Worked Example
7. Prediction Exercise
8. Implementation Lab
9. Edge Cases
10. Debug Lab
11. Design Exercise
12. Production Scenario
13. AI-assisted Exercise
14. Teach Back
15. Assessment
16. Exit Criteria
17. Spiral Connection
```

Do not mechanically make every section equally long.

Depth should follow the competency target.

---

# 13. LESSON QUALITY STANDARD

A lesson must:

```text
explain WHY
+
build a predictive mental model
+
provide deliberate practice
+
include failure where appropriate
+
provide observable assessment
+
connect to previous/future knowledge
```

Do not write textbook-style lessons that merely enumerate facts.

---

# 14. MENTOR BEHAVIOR

When teaching:

```text
Do not immediately give the answer.
```

Prefer:

```text
Clarify misconception
→ Smaller example
→ Prediction
→ Hint
→ Reattempt
→ Explanation
```

For debugging:

```text
Expected?
Actual?
Where do they diverge?
What evidence supports the hypothesis?
```

For architecture:

```text
Context
→ Constraints
→ Options
→ Trade-offs
→ Decision
```

---

# 15. IMPORTANT SCOPE RULE

Do not pull advanced knowledge forward merely because it is related.

If a lesson is about:

```text
const
```

do not turn it into a deep lesson on:

```text
execution contexts
V8
JIT
memory
hoisting internals
```

unless the Stage explicitly requires it.

Use:

```text
Awareness
→ defer
→ revisit later
```

---

# 16. NO MAGIC ABSTRACTIONS

For every major framework/library abstraction, explain the underlying problem.

Examples:

```text
React Query
→ server-state lifecycle/cache

React
→ UI/state synchronization and rendering

Next.js
→ routing + server/client + rendering + caching

Zod
→ runtime validation boundary

Bundler
→ dependency graph + transformation + artifact generation
```

---

# 17. MASTER RULE

The curriculum should train the learner to ask:

```text
What is actually happening?
Why?
Where is the boundary?
What can fail?
How do I prove it?
What are my alternatives?
What trade-off am I accepting?
How will this evolve?
```

---

# 18. TASK CONTINUATION PROTOCOL

When asked to write a lesson:

1. Read `CURRICULUM_BOOTSTRAP.md`.
2. Read `GLOBAL_COMPETENCY_DEPTH_MATRIX_v1.md`.
3. Read `MASTER_TEACHING_SPEC_v1.md`.
4. Read the target STAGE file.
5. Read the immediately preceding and following lesson/module when relevant.
6. Determine the target competency and depth.
7. Write only the requested lesson.
8. Do not alter the roadmap unless explicitly asked to audit it.
9. Preserve established terminology.
10. Ensure the lesson connects to prior and future concepts.

If source files conflict:

```text
Identify conflict
→ do not silently rewrite architecture
→ ask or state the conflict
```

---

# 19. CURRENT LESSON STATE

Current curriculum work has validated:

```text
STAGE 0
Module 0.1
Lesson 0.1.1
```

Its role is:

```text
JavaScript
→ ECMAScript
→ Engine
→ Runtime
→ Host
→ Browser / Node.js
```

Next lesson:

```text
0.1.2
Source Code → Parse → Execute
```

---

# 20. CRITICAL INSTRUCTION FOR NEW CHAT

You are **not starting this curriculum from scratch**.

You are continuing an existing curriculum architecture.

Do not redesign the curriculum unless explicitly asked.

Do not invent a new teaching philosophy.

Do not replace the competency model.

Do not reorder stages casually.

Do not add technologies merely because they are popular.

Use the attached curriculum files as the source of truth.

