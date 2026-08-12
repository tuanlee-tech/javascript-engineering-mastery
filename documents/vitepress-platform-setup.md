# VitePress Platform Bootstrap Prompt
## JavaScript Engineering Mastery — Complete Setup Specification

> **Language rule:** Prompt is written in English. All AI responses must be in Vietnamese.

---

## ROLE

You are the Lead Frontend Engineer and Documentation Architect responsible for bootstrapping a VitePress-based learning platform.

---

## PROJECT

**Name:** JavaScript Engineering Mastery

---

## MISSION

Build a premium, content-first VitePress learning platform for a long-form curriculum that takes a junior frontend developer through JavaScript fundamentals, runtime, browser, network, TypeScript, React, Next.js, production engineering, architecture, Senior engineering, and Staff-track engineering.

---

## IMPORTANT CONSTRAINTS

- The curriculum source files are the **source of truth**.
- Do **not** redesign the curriculum.
- Do **not** invent stages.
- Do **not** reorder stages.
- Do **not** add frameworks or technologies merely because they are popular.

---

## READ FIRST (source of truth files)

1. `JAVASCRIPT-ENGINEERING-MASTERY/00.0 PROMPT/1.CURRICULUM_BOOTSTRAP.md`
2. `JAVASCRIPT-ENGINEERING-MASTERY/00.0 PROMPT/2.Bản xương sống năng lực: GLOBAL COMPETENCY & DEPTH MATRIX.md`
3. `JAVASCRIPT-ENGINEERING-MASTERY/00.0 PROMPT/3.Quy chuẩn biên soạn chính thức: MASTER TEACHING SPEC.md`
4. `JAVASCRIPT-ENGINEERING-MASTERY/01_MASTER/JAVASCRIPT_ENGINEERING_MASTERY.md`
5. All STAGE files in `JAVASCRIPT-ENGINEERING-MASTERY/02_STAGES/` relevant to the site structure.

---

## TECHNICAL BASELINE

- VitePress `2.0.0-alpha.19` (using Vite `8.2.1`)
- TypeScript config (`config.mts`)
- Node.js 22+
- Markdown / VitePress-native content
- VitePress default theme (extend only when necessary)
- File-based routing
- Responsive design
- Dark mode (`appearance: 'force-dark'`)
- SEO metadata
- Accessible navigation

---

## GOALS

1. Bootstrap a VitePress project.
2. Use TypeScript for VitePress configuration.
3. Use the default VitePress theme initially, extend only when necessary.
4. Keep all educational content Markdown/VitePress-native.
5. Avoid custom CSS unless the requested visual system cannot be achieved with standard VitePress customization.
6. Optimize information architecture for learning, not generic documentation.
7. Create **route-specific sidebars** — one per stage. Do NOT put all 16 stages into one global sidebar.
8. Configure site-wide SEO metadata.
9. Configure favicon, logo, OG image and social metadata.
10. Build a premium homepage.
11. Build the following support pages: `intro`, `roadmap`, `how-to-learn`, `competencies`, `projects`, `engineering`, `glossary`, `war-stories`.
12. Prepare Stage directories and sidebar architecture for all 16 stages.
13. Do **not** generate unfinished lesson content unless explicitly requested.
14. Generate all placeholder `.md` files for every lesson, module, project, and checkpoint linked in the sidebar.

---

## SITE IDENTITY

| Field     | Value |
|-----------|-------|
| Site Name | `JavaScript` |
| Site Text | `Engineering Mastery` |
| Tagline   | `Learn JavaScript. Understand the Runtime. Engineer the Frontend. Think Like a Senior. Scale Like a Staff Engineer` |

**Visual direction:**
- Premium engineering education platform
- Dark technical editorial aesthetic
- Charcoal background
- Warm JavaScript amber accent
- Clean typography
- Minimal geometric system icons
- No generic coding stock imagery

---

## COLOR TOKENS

| Token       | Value     |
|-------------|-----------|
| background  | `#0B0D10` |
| surface     | `#11151A` |
| text        | `#E6EDF3` |
| muted       | `#8B949E` |
| primary     | `#F7DF1E` |
| secondary   | `#F59E0B` |
| success     | `#3FB950` |
| danger      | `#F85149` |
| info        | `#58A6FF` |

---

## TYPOGRAPHY

| Usage | Font |
|-------|------|
| UI    | `Inter` / `system-ui` fallback |
| Code  | `JetBrains Mono` / `ui-monospace` fallback |

---

## SITE STRUCTURE

```
/
├── intro/
├── roadmap/
├── how-to-learn/
├── competencies/
├── projects/
├── engineering/
├── glossary/
├── war-stories/
└── stages/
    ├── 00-javascript-language-foundation/
    ├── 01-javascript-execution-model/
    ├── 02-object-model/
    ├── 03-async-concurrency/
    ├── 04-browser-runtime/
    ├── 05-network/
    ├── 06-typescript/
    ├── 07-toolchain/
    ├── 08-react/
    ├── 09-production-frontend/
    ├── 10-nextjs/
    ├── 11-performance-memory-security/
    ├── 12-architecture/
    ├── 13-production-system-engineering/
    ├── 14-senior-engineering/
    └── 15-staff-engineering/
```

---

## NAVIGATION

### Top Navigation Bar

```
Courses (dropdown — 4 tiers, 16 stages)
Bắt đầu (dropdown)
  ├── Giới thiệu khóa học  → /intro/
  ├── Cách học hiệu quả   → /how-to-learn/
  └── Ma trận năng lực    → /competencies/
Roadmap   → /roadmap/
Projects  → /projects/
Engineering → /engineering/
Glossary  → /glossary/
War Stories → /war-stories/
```

**Rule:** Do not overload the navbar. Group support pages under a "Bắt đầu" dropdown.

### Courses Dropdown — 4 Tiers

```
TẦNG I — JAVASCRIPT CORE
  Stage 0: Language Foundation
  Stage 1: Execution Model
  Stage 2: Object Model & Advanced JS
  Stage 3: Async & Concurrency

TẦNG II — WEB PLATFORM
  Stage 4: Browser Runtime & Web Platform
  Stage 5: Network & Web Platform
  Stage 6: TypeScript Engineering
  Stage 7: Toolchain & JavaScript Ecosystem

TẦNG III — FRONTEND ENGINEERING
  Stage 8: React Engineering
  Stage 9: Production Frontend
  Stage 10: Next.js & Full-stack Frontend
  Stage 11: Performance, Memory & Security

TẦNG IV — SYSTEM & LEADERSHIP
  Stage 12: Frontend Architecture
  Stage 13: Production & System Engineering
  Stage 14: Senior Engineering
  Stage 15: Staff Engineering Track
```

---

## SIDEBAR RULES

- Use **route-specific sidebars** — one config key per stage route.
- **Stage 0**: `collapsed: false` at the group level — open by default.
- **Stage 1–15**: `collapsed: true` at the group level — collapsed by default, user must click to expand.
- Sub-modules within each stage: first module `collapsed: false`, rest `collapsed: true`.
- Each stage sidebar follows this structure:

```
Stage N: [Name]
├── Overview
├── Module N.1: [Name]   ← collapsed: false (first module open)
│   ├── Lesson N.1.1
│   ├── Lesson N.1.2
│   └── ...
├── Module N.2: [Name]   ← collapsed: true
│   └── ...
├── ...
├── Project N: [Name]
└── Stage Checkpoint
```

---

## HOMEPAGE

Build a strong editorial homepage containing:

1. Hero (title, subtitle, dual CTA)
2. Course positioning statement
3. Learning philosophy
4. Curriculum progression (4 tiers)
5. Competency model summary
6. Project spine overview
7. Senior / Staff distinction
8. Start Learning CTA

**Hero:**
- Title: `JavaScript Engineering Mastery`
- Subtitle: `From JavaScript Runtime to Staff Engineering`
- Primary CTA: `Bắt đầu học ngay` → `/stages/00-javascript-language-foundation/`
- Secondary CTA: `Khám phá chương trình` → `/roadmap/`

---

## CONTENT PAGES

### `/intro/` — Introduction

Explain:
- This is NOT a syntax-first JavaScript course
- Runtime-first engineering mental model
- Competency progression (L1–L8)
- Spiral learning across stages
- Project lifecycle
- Exit criteria per track (Junior / Mid / Senior / Staff)

### `/roadmap/` — 16-Stage Roadmap

- Show all 16 stages grouped by 4 tiers.
- Each stage: heading visible, detail hidden in `::: details Chi tiết` container.
- Inside details: capability developed + project name.

### `/competencies/` — Global Competency Matrix

- 8-level depth model (L1 Recognize → L8 Leverage).
- Table: 17 competency domains × (First Introduced, Peak Learning, Senior Target, Staff Target).
- Career exit criteria: Strong Junior / Mid / Senior / Staff.

### `/projects/` — Project Spine

- Table of 16 projects (P0–P15): name, description, primary competency.
- Spiral integration diagram (code reuse chain across stages).
- Submission requirements (source, ADR, benchmark report).

### `/engineering/` — Engineering Practices

- ADR & RFC writing process.
- Structured debugging (5-step process).
- AI-assisted engineering policy.
- Incident response lifecycle.

### `/glossary/` — Technical Glossary

- Alphabetical sections (A–E, F–L, M–Z).
- Key terms: AST, Call Stack, Closure, Event Loop, Execution Context, Fiber Node, GC, Hydration, Lexical Environment, Microtask Queue, Monorepo, Reconciliation, RSC, Strangler Pattern, TDZ.

### `/war-stories/` — Production Incident Postmortems

**UI rule:** Each incident follows this pattern:
```markdown
## N. Sự Cố #N: [Title]

* **Bối cảnh**: ...  ← visible outside
* **Triệu chứng**: ... ← visible outside

::: details Chi tiết
* **Root Cause**: ...
* **Giải pháp khắc phục**: ...
:::
```

---

## SEO CONFIGURATION

| Field           | Value |
|-----------------|-------|
| `title`         | `JavaScript Engineering Mastery` |
| `titleTemplate` | `%s \| JavaScript Engineering Mastery` |
| `description`   | `Lộ trình JavaScript và Frontend Engineering chuyên sâu từ nền tảng runtime, browser, TypeScript, React, Next.js đến performance, security, architecture, production, tư duy Senior và Staff.` |

Meta tags to add in `head[]`:
- `link rel="icon"` → `/favicon.svg`
- `meta name="theme-color"` → `#0B0D10`
- `meta property="og:type"` → `website`
- `meta property="og:site_name"` → `JavaScript Engineering Mastery`
- `meta property="og:image"` → `/og-image.png`
- `meta name="twitter:card"` → `summary_large_image`
- `meta name="twitter:image"` → `/og-image.png`

---

## ASSETS TO GENERATE

```
public/
├── favicon.svg        ← geometric JS hexagon, amber
├── logo.svg           ← same branding
├── og-image.png       ← 1200×630, dark charcoal background
├── og/
│   ├── stage-00.png
│   ├── stage-01.png
│   └── ... (stage-15.png)
└── icons/
    ├── stage-00.svg
    ├── stage-01.svg
    └── ... (stage-15.svg)
```

Generate using a Python script (`generate_assets.py`) that creates all SVG icons and PNG OG images programmatically.

---

## PLACEHOLDER FILE GENERATION

After the sidebar config is complete, run a Python script (`generate_placeholders.py`) to create all `.md` placeholder files linked in the sidebar.

**Template for each placeholder:**

```markdown
# {title}

> 🚧 Nội dung bài học này đang được biên soạn.

Trang này sẽ bao gồm:

- Phần khái niệm lý thuyết
- Bài tập dự đoán (Prediction Exercise)
- Code lab thực hành
- Debug lab

Quay lại sau để xem nội dung hoàn chỉnh.
```

**Rule:** Skip files that already exist (`os.path.exists` check). Do not overwrite existing content.

---

## STAGE INDEX PAGE GENERATION

Run a Python script (`generate_stages.py`) to parse the 16 source files in `JAVASCRIPT-ENGINEERING-MASTERY/02_STAGES/` and generate `stages/<dir>/index.md` for each stage.

Each stage `index.md` must contain:
1. Stage overview (from source file section `# 0. Stage Overview`)
2. Scope & modules list (from `# 1. Phạm vi kiến thức`)
3. Stage project description
4. Prerequisites and exit level

---

## VERIFICATION CHECKLIST

After bootstrapping, verify:

- [ ] `npm run docs:build` passes with zero errors
- [ ] All sidebar links resolve to existing `.md` files
- [ ] Stage 0 sidebar is open by default on page load
- [ ] Stage 1–15 sidebars are collapsed by default
- [ ] Nav dropdown "Bắt đầu" links to intro, how-to-learn, competencies
- [ ] War stories use `::: details` pattern correctly
- [ ] Roadmap stage details are inside `::: details Chi tiết`
- [ ] OG images present for homepage and all 16 stages
- [ ] Dark mode is forced (`appearance: 'force-dark'`)
- [ ] Logo and favicon render correctly
