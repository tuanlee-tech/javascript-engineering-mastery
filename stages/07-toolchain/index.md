---
title: "Stage 7: Toolchain & JavaScript Ecosystem"
description: "Trang tổng quan Stage 7: Toolchain & JavaScript Ecosystem."
head:
  - - meta
    - property: og:image
      content: /og/stage-07.png
---

# Stage 7: Toolchain & JavaScript Ecosystem

<div style="text-align: center; margin: 1.5rem 0;">
  <img src="/icons/stage-07.svg" alt="Stage Icon" style="width: 80px; height: 80px; margin: 0 auto;" />
</div>

<div class="vp-doc">

## 1. Tổng quan Stage (Stage Overview)

## Mục tiêu

Stage 7 trả lời câu hỏi:

> **Code mà chúng ta viết được biến thành thứ Browser chạy như thế nào?**

Cho đến đây, người học đã hiểu:

```text id="f0c3mm"
JavaScript
→ Execution
→ Object Model
→ Async
→ Browser
→ Network
→ TypeScript
```

Nhưng trong một project thực tế, browser không nhận trực tiếp:

```text
.ts
.tsx
import ...
```

Thay vào đó có một pipeline:

```text id="kz2m3f"
Source Code
    ↓
Module Resolution
    ↓
Parsing
    ↓
AST
    ↓
Transform
    ↓
Type Checking
    ↓
Bundle
    ↓
Optimization
    ↓
Minification
    ↓
Source Map
    ↓
Browser
```

Stage này xây **Toolchain Mental Model**.

Sau Stage 7, người học phải có khả năng nhìn một vấn đề kiểu:

> “Import package này tại local chạy được nhưng production fail.”

và biết điều tra:

```text id="j3sbdp"
module resolution?
package export?
ESM/CJS?
build config?
dependency?
environment?
bundle?
```

Thay vì chỉ:

> “Xóa node_modules rồi install lại.”

---

---

## 2. Phạm vi Kiến thức & Mô-đun (Scope & Modules)

Stage 7 gồm **7 Modules / 36 Lessons**:

```text id="h4k9s1"
7.1 JavaScript Modules
7.2 Module Resolution
7.3 Package Management
7.4 Parsing, AST & Transformation
7.5 Build Tools & Bundlers
7.6 Optimization & Production Builds
7.7 CI, Source Maps & Toolchain Debugging
```

---

---

## 3. Dự án Thực hành (Stage Project)



---

## 4. Tiêu chí Hoàn thành & Đầu ra (Exit & Prerequisites)

* **Điều kiện tiên quyết (Prerequisites)**: Hoàn thành Stage 6
* **Cấp bậc đầu ra (Exit Level)**: `Tooling & Bundler Mastered (L5-L7)`

### Tiêu chí kiểm thử năng lực thực tế:

## Modules

- [ ] Hiểu ESM.
- [ ] Hiểu live bindings.
- [ ] Hiểu dynamic import.
- [ ] Nhận biết circular dependencies.

## Resolution

- [ ] Giải thích package resolution.
- [ ] Hiểu `exports`.
- [ ] Hiểu `types`.
- [ ] Hiểu environment conditions ở mức practical.

## Packages

- [ ] Hiểu dependencies/devDependencies/peerDependencies.
- [ ] Hiểu lockfile.
- [ ] Resolve dependency conflict.
- [ ] Hiểu workspace.
- [ ] Nhận biết supply-chain risk.

## Tooling

- [ ] Giải thích AST ở mức conceptual.
- [ ] Hiểu transform pipeline.
- [ ] Hiểu loader/plugin.
- [ ] Cấu hình được bundler cơ bản.
- [ ] Hiểu HMR.

## Optimization

- [ ] Giải thích tree shaking.
- [ ] Giải thích side effects.
- [ ] Implement code splitting.
- [ ] Analyze bundle.
- [ ] Phân biệt minification và compression.

## Production

- [ ] Hiểu source maps.
- [ ] Debug production stack trace.
- [ ] Build reproducibly.
- [ ] CI chạy typecheck/lint/test/build.

## Engineering

- [ ] Hoàn thành Build System from Zero.
- [ ] Debug được module resolution.
- [ ] Debug được dependency duplication.
- [ ] Debug được bundle regression.
- [ ] Debug được source map issue.
- [ ] Viết được architecture note cho package/build decision.

---

</div>
