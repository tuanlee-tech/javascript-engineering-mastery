# JAVASCRIPT ENGINEERING MASTERY
## STAGE 7 — TOOLCHAIN & JAVASCRIPT ECOSYSTEM
### Detailed Curriculum v1

---

# 0. Stage Overview

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

# 1. Phạm vi kiến thức

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

# 2. MODULE 7.1 — JAVASCRIPT MODULES

## Mục tiêu

Hiểu module system trước khi học bundler.

---

## Lesson 7.1.1 — Why Modules Exist

Trước module:

```text id="8mztsp"
global variables
+
shared namespace
+
implicit dependencies
```

Module giải quyết:

- isolation
- dependency declaration
- reuse
- maintainability

---

## Lesson 7.1.2 — ES Modules

- `export`
- `export default`
- `import`
- named export
- namespace import
- re-export

Ví dụ:

```js id="9e5rkg"
export function add() {}

import { add } from "./math.js";
```

---

## Lesson 7.1.3 — Static Module Structure

Phải hiểu tại sao:

```js id="2gn4yp"
import { foo } from "./foo.js";
```

có thể được tooling phân tích trước runtime.

Mental model:

```text id="hv9nzh"
ESM
→ static dependency graph
→ analyzable
```

Đây là foundation cho:

- tree shaking
- bundling
- code splitting

---

## Lesson 7.1.4 — Live Bindings

Phân biệt:

```text id="alx6wn"
ESM export
vs
copying a value
```

Hiểu:

> Import binding có tính live.

---

## Lesson 7.1.5 — Default vs Named Export

Không biến thành style war.

Phân tích:

- API clarity
- discoverability
- refactoring
- interoperability

---

## Lesson 7.1.6 — Dynamic Import

```js id="xg0z3r"
const module = await import("./feature.js");
```

Hiểu:

```text id="keb4u0"
static dependency
vs
runtime-loaded dependency
```

Dynamic import là bridge sang:

- lazy loading
- code splitting
- route splitting

---

## Lesson 7.1.7 — Circular Dependencies

Scenario:

```text id="b0u4r5"
A → B
B → A
```

Phân tích:

- initialization order
- partially initialized exports
- runtime surprises

---

## Lesson 7.1.8 — Module Scope

Kết nối Stage 1:

```text id="4a8z1t"
module scope
+
lexical scope
```

Phải hiểu module không đơn giản là một file riêng.

---

# 3. MODULE 7.2 — MODULE RESOLUTION

## Mục tiêu

Hiểu:

> Khi viết `import x from "package"`, toolchain tìm file nào?

---

## Lesson 7.2.1 — Relative Imports

```text id="ry6a8c"
./foo
../utils
```

Hiểu path resolution.

---

## Lesson 7.2.2 — Package Imports

```js id="z9h9wb"
import React from "react";
```

Tooling cần tìm:

```text id="4nfzqk"
package
→ package root
→ metadata
→ export entry
```

---

## Lesson 7.2.3 — `package.json`

Các trường quan trọng:

- `name`
- `version`
- `main`
- `module`
- `exports`
- `types`
- `bin`
- `sideEffects`

Không cần học mọi field.

---

## Lesson 7.2.4 — `exports`

Hiểu:

```json id="2f3j3u"
{
  "exports": {
    ".": "./dist/index.js"
  }
}
```

và tại sao package có thể giới hạn những path consumer được import.

---

## Lesson 7.2.5 — `main` vs `module` vs `exports`

Không học như historical trivia.

Mục tiêu:

> Biết package metadata ảnh hưởng resolution như thế nào.

---

## Lesson 7.2.6 — `types`

Hiểu package có thể cung cấp:

```text id="p0deqg"
runtime implementation
+
TypeScript declarations
```

---

## Lesson 7.2.7 — Conditions

Awareness:

- import
- require
- browser
- node
- development
- production

Mục tiêu:

> Package có thể expose entry khác nhau tùy environment.

---

## Lesson 7.2.8 — Resolution Lab

Tạo package nhỏ có:

```text id="3s13md"
ESM build
CJS compatibility
types
exports
```

Sau đó test consumer.

---

# 4. MODULE 7.3 — PACKAGE MANAGEMENT

## Mục tiêu

Hiểu dependency graph và reproducible installation.

---

## Lesson 7.3.1 — package.json

- dependencies
- devDependencies
- peerDependencies
- optionalDependencies

Phải hiểu difference theo lifecycle.

---

## Lesson 7.3.2 — Semantic Versioning

- major
- minor
- patch
- pre-release awareness

Không coi SemVer là guarantee tuyệt đối.

---

## Lesson 7.3.3 — Dependency Graph

Ví dụ:

```text id="4wxq7a"
app
├── react
│   └── scheduler
└── library-a
    └── react
```

Phải hiểu dependency graph có thể phức tạp hơn package.json trực tiếp.

---

## Lesson 7.3.4 — Lockfiles

- package-lock
- pnpm-lock
- yarn.lock awareness

Mục tiêu:

> installation phải reproducible.

---

## Lesson 7.3.5 — npm vs pnpm

So sánh:

- installation model
- disk usage
- workspace support
- dependency isolation

Không học package manager religion.

---

## Lesson 7.3.6 — Peer Dependencies

Scenario:

```text id="n2j72b"
library
→ expects React from consumer
```

Phải hiểu tại sao library nên dùng peer dependency cho một số shared runtime.

---

## Lesson 7.3.7 — Dependency Deduplication

Hiểu:

```text id="16b6pm"
A → react@X
B → react@Y
```

có thể tạo nhiều versions/instances.

Liên hệ:

- bundle size
- context identity
- runtime behavior

---

## Lesson 7.3.8 — Workspaces

Foundation:

```text id="e58qpn"
repo/
├── app
├── ui
└── shared
```

Dùng workspace để local packages liên kết với nhau.

---

## Lesson 7.3.9 — Dependency Hygiene

- dependency bloat
- unused dependency
- transitive dependency
- version drift
- package ownership

---

## Lesson 7.3.10 — Supply Chain Awareness

Foundation:

- malicious package
- typosquatting
- compromised dependency
- lockfile integrity

Security sâu thuộc Stage 11.

---

# 5. MODULE 7.4 — PARSING, AST & TRANSFORMATION

## Mục tiêu

Hiểu build tools không “đọc JavaScript bằng phép thuật”.

Chúng parse source thành structure có thể xử lý.

---

## Lesson 7.4.1 — Lexing / Parsing Concept

Mental model:

```text id="0t95pi"
Source Text
 ↓
Tokens
 ↓
AST
```

Không cần compiler theory sâu.

---

## Lesson 7.4.2 — AST

Ví dụ:

```js id="78d6mg"
const x = 1 + 2;
```

Conceptual AST:

```text id="0mae6w"
VariableDeclaration
 └── BinaryExpression
      ├── Literal
      └── Literal
```

---

## Lesson 7.4.3 — Why AST Matters

AST được dùng cho:

- transpilation
- linting
- formatting
- codemods
- optimization
- transforms

---

## Lesson 7.4.4 — Babel Concept

Babel pipeline:

```text id="o1y1sx"
Parse
 ↓
Transform
 ↓
Generate
```

---

## Lesson 7.4.5 — Transpilation

Hiểu:

```text id="2q6t1h"
modern syntax
→ compatible syntax
```

Ví dụ conceptual:

```js id="5bqtq8"
const add = (a, b) => a + b;
```

có thể được transform cho target khác.

---

## Lesson 7.4.6 — JSX Transformation

JSX không phải HTML.

Concept:

```jsx id="7r5h0a"
<Button />
```

được transform thành JavaScript representation.

Đây là bridge sang React Stage 8.

---

## Lesson 7.4.7 — Source Transformation

Demo:

- rename variable
- add logging
- transform syntax

Mục tiêu là hiểu codemod/transform technology.

---

## Lesson 7.4.8 — ESLint Architecture

Concept:

```text id="c1y1st"
Source
→ Parse
→ AST
→ Rules
→ Diagnostics
```

Giúp hiểu ESLint không chạy bằng string matching đơn giản.

---

# 6. MODULE 7.5 — BUILD TOOLS & BUNDLERS

## Mục tiêu

Hiểu build system ở mức đủ để tự cấu hình, debug và tối ưu.

---

## Lesson 7.5.1 — Why Bundle?

Trước bundle:

```text id="c6kq9g"
many modules
many files
many requests
```

Bundling/optimization có thể:

- transform
- combine
- split
- optimize
- package

Không mặc định bundling luôn cần thiết trong mọi architecture.

---

## Lesson 7.5.2 — Bundler Mental Model

```text id="h1sbca"
Entry
 ↓
Dependency Graph
 ↓
Modules
 ↓
Chunks
 ↓
Assets
```

---

## Lesson 7.5.3 — Vite Architecture

Hiểu high-level:

```text id="z30jrm"
Dev
→ native ESM-oriented workflow
```

và production vẫn cần build/optimization pipeline.

Không biến thành:

> “Vite luôn không bundle.”

---

## Lesson 7.5.4 — Webpack Architecture

Các khái niệm:

- entry
- output
- loader
- plugin
- module
- chunk

---

## Lesson 7.5.5 — Loaders vs Plugins

Phân biệt rõ:

```text id="q5zqmf"
Loader
→ transform module content

Plugin
→ extend build lifecycle
```

---

## Lesson 7.5.6 — Rspack / Modern Bundlers

Awareness:

- performance motivation
- compatibility
- ecosystem differences

Không bắt buộc thành thạo từng bundler.

---

## Lesson 7.5.7 — HMR

Mental model:

```text id="3m0v0o"
Edit source
 ↓
Dev server
 ↓
module update
 ↓
browser receives update
 ↓
replace affected module
```

---

## Lesson 7.5.8 — Development vs Production Build

So sánh:

```text id="nzv2lh"
speed
debuggability
optimization
source maps
minification
```

---

## Lesson 7.5.9 — Build Configuration

Tự cấu hình tối thiểu:

```text id="k6g8cc"
entry
output
resolve
loader
plugin
dev server
source map
```

---

# 7. MODULE 7.6 — OPTIMIZATION & PRODUCTION BUILDS

## Mục tiêu

Hiểu tại sao production bundle có thể nhỏ hoặc lớn.

---

## Lesson 7.6.1 — Dependency Graph

Bundler bắt đầu từ entry và traverse dependency graph.

---

## Lesson 7.6.2 — Tree Shaking

Core mental model:

```text id="j0exd5"
Static module graph
+
Side-effect analysis
        ↓
Potential unused code elimination
```

Không học câu:

> “ESM tự động tree-shake.”

Tree shaking phụ thuộc cả module structure, side effects và tool configuration.

---

## Lesson 7.6.3 — Side Effects

Hiểu:

```js id="t1b2c8"
import "./global.css";
```

có side effect.

Vì vậy:

```json id="z7jt9m"
{
  "sideEffects": false
}
```

không nên đặt mù quáng.

---

## Lesson 7.6.4 — Code Splitting

```text id="p5p2h2"
single bundle
        ↓
multiple chunks
```

---

## Lesson 7.6.5 — Dynamic Import

Kết nối Stage 7.1:

```js id="u9ad6g"
import("./feature");
```

có thể tạo async chunk.

---

## Lesson 7.6.6 — Route Splitting

Chia bundle theo application boundary.

Đây là foundation cho React/Next.js performance.

---

## Lesson 7.6.7 — Chunk Strategy

Phân tích:

- shared dependencies
- vendor code
- application code
- cacheability

Không bắt buộc tự thiết kế advanced chunking strategy cho mọi bundler.

---

## Lesson 7.6.8 — Minification

Hiểu:

```text id="ltd0pm"
remove whitespace
rename symbols
transform expressions
```

Mục tiêu:

> byte size giảm nhưng behavior giữ nguyên.

---

## Lesson 7.6.9 — Compression

Nối Stage 5:

```text id="w6gk5w"
Bundle output
 ↓
gzip / Brotli
 ↓
transfer bytes
```

Phân biệt:

```text id="fxo1q7"
minification
vs
compression
```

---

## Lesson 7.6.10 — Bundle Analysis

Dùng:

- source map explorer
- bundle visualizer
- browser network panel

Tìm:

```text id="x57w0c"
duplicate dependency
large package
unused code
unexpected chunk
```

---

# 8. MODULE 7.7 — CI, SOURCE MAPS & TOOLCHAIN DEBUGGING

## Mục tiêu

Đưa toolchain vào production engineering.

---

## Lesson 7.7.1 — Source Maps

Mental model:

```text id="o8gh0w"
Minified code
      ↕
Source map
      ↕
Original source
```

---

## Lesson 7.7.2 — Source Map Types

Awareness:

- inline
- external
- hidden
- production trade-offs

Không cần thuộc mọi bundler-specific option.

---

## Lesson 7.7.3 — Production Stack Trace

Scenario:

```text id="w1j6hf"
main.8f3a.js:1:23456
```

Dùng source map để tìm source location.

---

## Lesson 7.7.4 — Build Environment

Phân biệt:

```text id="p9y5e3"
development
test
staging
production
```

và environment variables ở mức practical.

---

## Lesson 7.7.5 — CI Pipeline

Tối thiểu:

```text id="bi4b0z"
install
 ↓
typecheck
 ↓
lint
 ↓
test
 ↓
build
```

---

## Lesson 7.7.6 — Reproducible Build

Các yếu tố:

- lockfile
- Node version
- package manager
- environment
- deterministic steps

---

## Lesson 7.7.7 — Toolchain Debugging

Workflow:

```text id="j7krm8"
Observe
→ Identify layer
→ Reproduce
→ Inspect config
→ Inspect dependency graph
→ Fix
→ Verify
```

---

## Lesson 7.7.8 — Dependency Resolution Incident

Scenario:

> Local works, CI fails.

Possible causes:

```text id="j8l5u7"
Node version
package manager
lockfile
optional dependency
OS
module resolution
environment
```

---

## Lesson 7.7.9 — Bundle Regression Incident

Một PR thêm package:

```text id="qk2n0p"
bundle +400 KB
```

Phải:

- identify dependency
- inspect import
- find alternative
- split
- or accept with justification

---

# 9. INTEGRATION LAB — STAGE 7

# Project 7 — Build System from Zero

Không dùng framework template.

Tạo:

```text id="9n0s9g"
TypeScript App
+
ESM
+
Bundler
+
Lint
+
Test
+
CI
```

---

## Requirement 1 — TypeScript

Có:

```text id="o0hv0w"
typecheck
```

---

## Requirement 2 — ESM

Modules rõ ràng.

---

## Requirement 3 — Bundler

Tự cấu hình tối thiểu.

---

## Requirement 4 — Code Splitting

Tạo feature lazy-loaded.

---

## Requirement 5 — Tree Shaking

Có một module chứa:

```text id="h5u4d4"
used export
unused export
```

Verify output.

---

## Requirement 6 — Source Maps

Production error phải trace được về source.

---

## Requirement 7 — CI

Pipeline:

```text id="15k9xk"
install
→ typecheck
→ lint
→ test
→ build
```

---

# 10. EDGE CASE LAB

## Case 1 — ESM/CJS Interop

Một package cũ dùng CommonJS.

Application dùng ESM.

Phân tích:

```text id="ukjo2m"
resolution
interop
default import
named import
```

---

## Case 2 — Circular Dependency

```text id="rd5kj0"
A → B → A
```

Build vẫn pass nhưng runtime behavior sai.

Tìm nguyên nhân.

---

## Case 3 — Tree Shaking Failure

Bạn set:

```json id="k3w7rc"
{
  "sideEffects": false
}
```

nhưng package có global side-effect import.

Phân tích tại sao có thể break behavior.

---

## Case 4 — Duplicate Dependency

Bundle chứa hai version của cùng library.

Tìm:

```text id="f0u1xm"
dependency path
version
import path
```

---

## Case 5 — Dynamic Import

Feature không được tải khi app initial load.

Người học phải kiểm tra chunk.

---

## Case 6 — Source Map Missing

Production Sentry stack trace toàn minified code.

Tìm build pipeline issue.

---

## Case 7 — CI-only Failure

Local Node version khác CI.

Tìm và chuẩn hóa environment.

---

# 11. RE-IMPLEMENTATION LAB

## 11.1 — Mini Module Loader

Ở mức mô phỏng:

```text id="xzg03i"
modules
dependencies
cache
require
```

Mục tiêu hiểu module graph.

---

## 11.2 — Dependency Graph

Tự parse một graph:

```text id="az1zef"
A → B
A → C
B → D
C → D
```

và xác định:

- shared dependency
- execution order
- duplicate risk

---

## 11.3 — Simple Bundler

Không cần parse đầy đủ JS.

Mô phỏng:

```text id="whdk6y"
entries
→ dependencies
→ graph
→ output
```

---

## 11.4 — Simple Tree Shaker

Mô phỏng elimination dựa trên graph.

Mục tiêu conceptual.

---

## 11.5 — Build Pipeline Script

Một script:

```text id="td0k3f"
clean
→ typecheck
→ lint
→ test
→ build
```

---

# 12. DEBUG LAB

## Bug 1 — Module Not Found

Không được sửa bằng đoán.

Xác định:

```text id="u9w6u7"
specifier
→ resolver
→ package
→ exports
→ file
```

---

## Bug 2 — Package Works in Node but Not Browser

Phân tích:

```text id="0z6x6f"
Node builtin
vs
browser environment
```

---

## Bug 3 — Bundle Explosion

Bundle tăng từ:

```text id="bqk8x4"
300 KB
→
900 KB
```

Tìm package/import/chunk nguyên nhân.

---

## Bug 4 — Build Passes but Runtime Breaks

Một transform hoặc tree-shaking assumption sai.

Debug:

```text id="un2k6r"
source
→ transformed
→ bundle
→ runtime
```

---

## Bug 5 — Production Error Is Unreadable

Source map missing/mismatch.

Fix pipeline.

---

# 13. DESIGN LAB

## Scenario 1 — Library Distribution

Một package cần hỗ trợ:

```text id="4i2owv"
ESM
TypeScript
modern bundlers
```

Thiết kế package exports.

---

## Scenario 2 — App Code Splitting

Application có:

```text id="36a9qp"
landing
dashboard
admin
editor
```

Quyết định chunk boundary.

---

## Scenario 3 — Large Dependency

Một package UI làm bundle tăng 400KB.

Có ba options:

```text id="jp3q2z"
remove
replace
lazy load
```

Chọn theo requirement.

---

## Scenario 4 — Monorepo

```text id="n45x9w"
apps/web
packages/ui
packages/utils
packages/config
```

Thiết kế:

- workspace
- dependency direction
- public APIs

---

# 14. SOURCE & DOCUMENTATION

Primary references:

- Node.js Modules documentation
- npm documentation
- pnpm documentation
- TypeScript compiler documentation
- Vite documentation
- Webpack documentation
- Rspack documentation
- Babel documentation
- ESLint documentation

Đọc source/tool docs có chọn lọc.

Mục tiêu:

> Khi build system hành xử bất ngờ, có thể truy từ symptom về đúng layer.

---

# 15. TEACH-BACK

### Level 1

> ESM là gì?

### Level 2

> Bundler làm gì?

### Level 3

> Tree shaking dựa trên điều kiện nào?

### Level 4

> Tại sao `sideEffects: false` có thể làm application hỏng?

### Level 5

> Khi bundle tăng 500KB sau một PR, bạn sẽ điều tra và quyết định như thế nào?

---

# 16. EXIT CRITERIA — STAGE 7

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

# 17. STAGE 7 CHECKPOINT

## Part A — Module Resolution

Cho:

```text id="f7lcqh"
import { Button } from "@app/ui";
```

Vẽ toàn bộ quá trình:

```text id="tuuw3m"
specifier
→ workspace
→ package.json
→ exports
→ runtime/types entry
```

---

## Part B — Bundle Analysis

Một application có:

```text id="xv9yl8"
React
UI library
chart library
date library
editor
```

Bundle quá lớn.

Xác định:

```text id="w6q6n9"
duplicate
unused
lazy candidate
large dependency
```

---

## Part C — Tree Shaking

Cho một package có:

```text id="z8b0uz"
side effects
+
unused exports
```

Giải thích output.

---

## Part D — CI Failure

Local:

```text id="2kz6c1"
Node 22
pnpm 10
```

CI:

```text id="xf5e0v5"
Node 20
npm
```

Tìm root cause và thiết kế normalization.

---

## Part E — Production Debug

Sentry báo:

```text id="3q7x3w"
main.83af2.js:1:283947
```

Source map mapping sai.

Debug toàn pipeline.

---

# 18. STAGE 7 CAPSTONE

# Build & Toolchain Platform

Final repository:

```text id="1x9b9n"
apps/
  web/

packages/
  ui/
  utils/
  config/
```

Có:

```text id="qk0e4s"
TypeScript
ESM
Workspace
Bundler
Code Splitting
Tree Shaking
Source Maps
Lint
Test
CI
```

Application phải có ít nhất:

```text id="5m8xfg"
1 shared package
1 lazy-loaded feature
1 intentionally unused export
1 dependency duplication challenge
1 production source-map debugging exercise
```

---

# 19. STAGE 7 → STAGE 8 DEPENDENCY

Đây là một điểm chuyển rất quan trọng.

Sau Stage 7, người học đã hiểu:

```text id="6qj6ik"
Language
+
Runtime
+
Browser
+
Network
+
Type System
+
Modules
+
Build System
```

Bây giờ mới bước sang:

# STAGE 8 — REACT ENGINEERING

Và React sẽ không được dạy như:

```text id="eoz5ki"
JSX
↓
useState
↓
useEffect
↓
useMemo
```

Mà theo dependency:

```text id="o0x44n"
JavaScript Execution
        ↓
Closures
        ↓
Browser Rendering
        ↓
State / UI Model
        ↓
React Elements
        ↓
Reconciliation
        ↓
Fiber
        ↓
Render / Commit
        ↓
Scheduling
        ↓
Hooks
        ↓
Data Fetching
```

Stage 8 sẽ là lần đầu curriculum bước mạnh vào **Framework Engineering**, nhưng mental models đã được xây trong 7 Stage trước.

---

# 20. STAGE 7 CORE PRINCIPLE

Một Junior thường nhìn toolchain như:

```text id="z4zqv1"
npm install
npm run dev
npm run build
```

Một Engineer phải nhìn:

```text id="y0h3m5"
Source
 ↓
Modules
 ↓
Resolution
 ↓
AST
 ↓
Transform
 ↓
Dependency Graph
 ↓
Chunks
 ↓
Optimization
 ↓
Artifacts
 ↓
Browser
```

Và khi build lỗi, câu hỏi phải là:

```text id="9h1py7"
Language problem?
Type problem?
Module problem?
Resolution problem?
Dependency problem?
Transform problem?
Bundler problem?
Environment problem?
Artifact problem?
Runtime problem?
```

Đó là **Toolchain Literacy** — một năng lực nền tảng để sau này trở thành Senior Frontend Engineer thay vì chỉ là người sử dụng framework.