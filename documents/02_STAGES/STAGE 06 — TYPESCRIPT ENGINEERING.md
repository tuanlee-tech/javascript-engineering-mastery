# JAVASCRIPT ENGINEERING MASTERY
## STAGE 6 — TYPESCRIPT ENGINEERING
### Detailed Curriculum v1

---

# 0. Stage Overview

## Mục tiêu

Stage 6 trả lời câu hỏi:

> **Làm thế nào biến một codebase JavaScript lớn thành một hệ thống mà compiler có thể giúp chúng ta phát hiện sai lầm trước khi chạy?**

Cho đến Stage 5, người học đã xây được mental model:

```text id="c7d6h4"
JavaScript
→ Runtime
→ Async
→ Browser
→ Network
→ API
```

Nhưng khi application lớn lên, một vấn đề khác xuất hiện:

```text id="x7n4b8"
Code nhiều
↓
State nhiều
↓
Data model phức tạp
↓
Team nhiều người
↓
Thay đổi một nơi
↓
Break nơi khác
```

TypeScript được đưa vào để **kiểm soát complexity**, không phải chỉ để thêm annotation.

Mental model cuối Stage:

```text id="n6l4d0"
Runtime Reality
        ↑
        │
Runtime Validation
        │
        ↑
Type System
        │
        ↑
Domain Model
        │
        ↑
Application Code
```

Điểm quan trọng nhất:

```text id="p3e8m2"
TypeScript
≠
Runtime Validation
```

TypeScript giúp kiểm tra **static program model**.

Runtime validation bảo vệ hệ thống trước **data thực tế**.

---

# 1. Phạm vi kiến thức

Stage 6 gồm **6 Modules / 31 Lessons**:

```text id="4f8k1a"
6.1 TypeScript Mental Model
6.2 Type System & Type Inference
6.3 Generics & Type Composition
6.4 Advanced Type System
6.5 Runtime Validation & External Data
6.6 Library / Application Type Architecture
```

Đây là Stage có chiều sâu cao, nhưng không nhằm biến người học thành type-system researcher.

Mục tiêu là:

> **Dùng TypeScript để model domain, constrain code và thiết kế API tốt hơn.**

---

# 2. MODULE 6.1 — TYPESCRIPT MENTAL MODEL

## Mục tiêu

Đập mental model:

> “TypeScript là JavaScript có type.”

Đúng hơn:

```text id="w4z6mi"
TypeScript Source
        ↓
Type Checking
        ↓
JavaScript Output
        ↓
Runtime
```

Type annotations thông thường không tồn tại ở JavaScript runtime.

---

## Lesson 6.1.1 — TypeScript Là Gì?

### Kiến thức

- TypeScript
- JavaScript
- Compiler
- Type checker
- Transpilation
- Emit

### Phải hiểu

```text id="djfd5u"
TypeScript
→ kiểm tra code
→ tạo JavaScript
→ Browser/Node chạy JavaScript
```

---

## Lesson 6.1.2 — Compile-time vs Runtime

Phân biệt:

```text id="5x9m6q"
Compile-time error
vs
Runtime error
```

Ví dụ:

```ts id="v4f1jc"
const age: number = "20";
```

TypeScript có thể bắt lỗi.

Nhưng:

```ts id="e5w5sq"
const data = await fetch(...).then(r => r.json());
```

không có nghĩa `data` chắc chắn có shape mà developer mong muốn.

---

## Lesson 6.1.3 — Type Erasure

Hiểu:

```ts id="0q7z1m"
function add(a: number, b: number): number {
  return a + b;
}
```

Sau compile trở thành JavaScript không còn annotation tương ứng.

### Câu hỏi bắt buộc

> Nếu type bị erase, làm sao bảo vệ API response?

Câu trả lời sẽ dẫn đến Module 6.5.

---

## Lesson 6.1.4 — Structural Typing

TypeScript không chủ yếu dựa trên nominal identity.

Ví dụ:

```ts id="1z5n0x"
type User = {
  name: string;
};

const person = {
  name: "Alice",
  age: 20
};
```

`person` có thể phù hợp với `User`.

Phải hiểu:

```text id="l7j68e"
shape compatibility
```

---

## Lesson 6.1.5 — Type vs Value

Phân biệt:

```text id="j0y6co"
type space
vs
value space
```

Ví dụ:

```ts id="rj1c4t"
type User = ...
const User = ...
```

Hai khái niệm khác nhau dù cùng identifier có thể tồn tại trong những context phù hợp.

---

## Lesson 6.1.6 — Type Assertions

- `as`
- angle-bracket assertion awareness
- assertion không làm runtime conversion

Ví dụ:

```ts id="l5b7d2"
const user = data as User;
```

Phải hiểu:

> `as User` không biến data thành User.

---

# 3. MODULE 6.2 — TYPE SYSTEM & TYPE INFERENCE

## Mục tiêu

Hiểu TypeScript có thể **suy luận** được rất nhiều mà không cần annotation.

---

## Lesson 6.2.1 — Basic Type Inference

```ts id="k1t4sj"
const x = 10;
```

So sánh:

```ts id="5qj0f1"
let x = 10;
```

với:

```ts id="ix4y8u"
const x = 10;
```

---

## Lesson 6.2.2 — Literal Types

- string literal
- numeric literal
- boolean literal
- literal inference

---

## Lesson 6.2.3 — Union Types

```ts id="9a2lmc"
type Status =
  | "idle"
  | "loading"
  | "success"
  | "error";
```

Phải hiểu union là:

> value có thể thuộc một trong nhiều possibilities.

---

## Lesson 6.2.4 — Discriminated Unions

Ví dụ:

```ts id="2u8z0u"
type Result =
  | { type: "success"; data: User }
  | { type: "error"; message: string };
```

Mục tiêu:

> Model state thay vì dùng nhiều boolean rời rạc.

---

## Lesson 6.2.5 — Intersection Types

```ts id="v44jcl"
type AdminUser = User & Admin;
```

Hiểu:

> object phải thỏa cả hai shape.

---

## Lesson 6.2.6 — `unknown`

Phải hiểu:

```text id="v7ny8b"
unknown
→ safe boundary
```

Trước khi sử dụng phải narrow.

---

## Lesson 6.2.7 — `any`

Hiểu tại sao `any` nguy hiểm:

```text id="q7v0ce"
type safety
   ↓
   X
   ↓
runtime surprise
```

Không đặt mục tiêu “zero any tuyệt đối”.

Mục tiêu là:

> biết khi nào `any` thực sự cần và cô lập nó.

---

## Lesson 6.2.8 — `never`

Các use case:

- exhaustive checking
- impossible state
- function never returns

Ví dụ:

```ts id="b9uw0b"
function assertNever(x: never): never {
  throw new Error("Unexpected value");
}
```

---

## Lesson 6.2.9 — Type Narrowing

- `typeof`
- `instanceof`
- `in`
- equality narrowing
- control flow analysis

---

## Lesson 6.2.10 — Custom Type Guards

```ts id="24gs36"
function isUser(value: unknown): value is User {}
```

Phải hiểu type predicate không tự kiểm tra runtime; implementation của guard mới là thứ bảo vệ runtime.

---

# 4. MODULE 6.3 — GENERICS & TYPE COMPOSITION

## Mục tiêu

Generics là một trong những kỹ năng TypeScript quan trọng nhất cho library và application architecture.

---

## Lesson 6.3.1 — Generic Function

```ts id="3v8w9g"
function identity<T>(value: T): T {
  return value;
}
```

Hiểu:

```text id="h1n8kw"
generic
≠
any
```

---

## Lesson 6.3.2 — Generic Inference

```ts id="yx6etd"
identity("hello");
identity(42);
```

Compiler tự suy luận `T`.

---

## Lesson 6.3.3 — Generic Constraints

```ts id="v8kcv2"
function getId<T extends { id: string }>(item: T) {}
```

Mục tiêu:

> restrict while preserving specificity.

---

## Lesson 6.3.4 — Multiple Type Parameters

```ts id="d0u8bd"
merge<T, U>(a: T, b: U)
```

---

## Lesson 6.3.5 — Default Generic Parameters

Awareness + practical usage.

---

## Lesson 6.3.6 — Generic Interfaces

```ts id="xgrxgq"
interface Repository<T> {
  get(id: string): Promise<T>;
}
```

---

## Lesson 6.3.7 — Generic Classes

Dùng trong:

- repository
- cache
- state container
- data structures

---

## Lesson 6.3.8 — `keyof`

```ts id="bb39ow"
keyof User
```

Mental model:

> lấy union của property keys.

---

## Lesson 6.3.9 — Indexed Access Types

```ts id="qhw4b8"
User["name"]
```

và generic access:

```ts id="2c2elr"
T[K]
```

---

## Lesson 6.3.10 — Generic API Design

Thiết kế:

```ts id="z9f5p1"
ApiResponse<T>
Paginated<T>
Result<T, E>
Repository<T>
```

Mục tiêu:

> Generic phải phản ánh domain, không dùng generic chỉ để “làm code thông minh”.

---

# 5. MODULE 6.4 — ADVANCED TYPE SYSTEM

## Mục tiêu

Đây là phần nâng từ "dùng TypeScript" lên "thiết kế type model".

Không yêu cầu type-level programming cực đoan.

---

## Lesson 6.4.1 — Mapped Types

```ts id="2d0e2o"
type Optional<T> = {
  [K in keyof T]?: T[K];
};
```

---

## Lesson 6.4.2 — Key Remapping

Awareness + practical usage:

```ts id="bd0ug4"
[K in keyof T as ...]
```

---

## Lesson 6.4.3 — Conditional Types

```ts id="x4p3x7"
T extends U ? X : Y
```

Mental model:

> compile-time branch.

---

## Lesson 6.4.4 — `infer`

Ví dụ:

```ts id="t4nl0y"
type Return<T> =
  T extends (...args: any[]) => infer R ? R : never;
```

Phải hiểu `infer` là cách trích xuất type trong conditional matching.

---

## Lesson 6.4.5 — Recursive Types

Ví dụ:

```ts id="g4m9re"
type DeepPartial<T> = ...
```

Mục tiêu là hiểu pattern, không abuse recursive types.

---

## Lesson 6.4.6 — Utility Types

Phải sử dụng thành thạo:

- `Partial`
- `Required`
- `Readonly`
- `Pick`
- `Omit`
- `Record`
- `Exclude`
- `Extract`
- `NonNullable`
- `ReturnType`
- `Parameters`
- `Awaited`

---

## Lesson 6.4.7 — Build Utility Types

Tự implement subset:

```text id="5s8b5w"
MyPartial
MyPick
MyOmit
MyReturnType
MyAwaited
```

---

## Lesson 6.4.8 — `satisfies`

Phân biệt:

```ts id="0p3tyx"
as
vs
satisfies
```

Mục tiêu:

> validate shape mà vẫn preserve useful inference.

---

## Lesson 6.4.9 — Exhaustiveness

Dùng:

```text id="8k3jz3"
never
+
discriminated union
```

để bắt missing cases.

---

## Lesson 6.4.10 — Type Complexity

Đây là lesson engineering rất quan trọng.

Phải nhận ra:

```text id="k1cjpk"
type cleverness
        ↓
complexity
        ↓
slow compile
        ↓
bad DX
```

Nguyên tắc:

> Type system phục vụ codebase, không phải ngược lại.

---

# 6. MODULE 6.5 — RUNTIME VALIDATION & EXTERNAL DATA

## Mục tiêu

Đây là điểm TypeScript gặp thế giới thật.

Input bên ngoài:

```text id="3x4h6n"
API
User
URL
localStorage
File
Server
Third-party SDK
```

đều là **untrusted data**.

---

## Lesson 6.5.1 — The Trust Boundary

Mental model:

```text id="a6y5f4"
Trusted Internal Data
        ↑
Validation Boundary
        ↑
External / Unknown Data
```

---

## Lesson 6.5.2 — Why `as` Is Not Validation

Ví dụ:

```ts id="q7z0g4"
const user = response as User;
```

Nếu response sai shape, runtime vẫn sai.

---

## Lesson 6.5.3 — `unknown` at Boundaries

Thiết kế:

```ts id="a8a8gk"
const data: unknown = await response.json();
```

Sau đó validate.

---

## Lesson 6.5.4 — Schema Validation

Concept:

```text id="m8l7w4"
schema
 ↓
parse
 ↓
validated data
```

---

## Lesson 6.5.5 — Zod

- `z.object`
- `z.string`
- `z.number`
- `z.array`
- `z.enum`
- `.optional`
- `.nullable`
- `.default`
- `.transform`

---

## Lesson 6.5.6 — Infer Type From Schema

```ts id="g8m6z1"
type User = z.infer<typeof UserSchema>;
```

Mục tiêu:

> một source of truth cho runtime schema + static type.

---

## Lesson 6.5.7 — API Response Validation

Build:

```text id="h2lf0x"
fetch
 ↓
JSON
 ↓
unknown
 ↓
schema.parse
 ↓
domain object
```

---

## Lesson 6.5.8 — Validation Errors

Phân biệt:

```text id="x2gm3j"
transport error
HTTP error
parse error
schema validation error
business error
```

---

## Lesson 6.5.9 — Form Validation

Schema dùng cho:

- client validation
- server validation
- shared contract

Phải tránh assumption:

> Client validation = security.

Server vẫn phải validate.

---

# 7. MODULE 6.6 — LIBRARY & APPLICATION TYPE ARCHITECTURE

## Mục tiêu

Dùng TypeScript để tạo API tốt cho người khác sử dụng.

Đây là bước chuyển sang Senior-level type design.

---

## Lesson 6.6.1 — Domain Types

Model:

```text id="8k1xj2"
Entity
Value Object
DTO
View Model
```

Không trộn mọi representation thành một type.

---

## Lesson 6.6.2 — API Types

Phân biệt:

```text id="9e5ap5"
Request DTO
Response DTO
Domain Model
UI Model
```

---

## Lesson 6.6.3 — Result Types

Thiết kế:

```ts id="u2s9j5"
type Result<T, E>
```

để model success/error rõ ràng.

---

## Lesson 6.6.4 — State Types

Thiết kế:

```ts id="7l5a1d"
idle
loading
success
error
```

bằng discriminated union.

---

## Lesson 6.6.5 — Repository Types

```ts id="x8g3a6"
Repository<T>
```

và trade-off abstraction.

---

## Lesson 6.6.6 — Library Public API

Phân biệt:

```text id="ryrt2j"
internal types
vs
public types
```

Không expose internal implementation type một cách vô tình.

---

## Lesson 6.6.7 — Generic Constraints & API Ergonomics

Một API tốt phải:

```text id="l2y3l7"
infer tốt
error message dễ hiểu
không over-generic
không cần type gymnastics
```

---

## Lesson 6.6.8 — Declaration Files

Awareness:

- `.d.ts`
- library type declarations
- third-party package typing

---

## Lesson 6.6.9 — Module Augmentation

Chỉ học practical use cases:

- extending library types
- project-specific augmentation

Không lạm dụng.

---

## Lesson 6.6.10 — Type Architecture Review

Review một type-heavy codebase:

Tìm:

```text id="8p2s7j"
any
unsafe assertion
duplicated type
unnecessary generic
overly complex conditional type
poor domain modeling
runtime gap
```

---

# 8. INTEGRATION LAB — STAGE 6

# Project 6 — Typed Domain SDK

Xây một SDK cho một domain giả lập:

```text id="qg3xj1"
Users
Products
Orders
```

---

## Requirement 1 — Domain Model

```ts id="u0v8rj"
User
Product
Order
OrderItem
```

---

## Requirement 2 — API Contracts

```text id="9ts4lo"
GetUserResponse
CreateOrderRequest
CreateOrderResponse
Paginated<T>
```

---

## Requirement 3 — Generic Client

```ts id="rvp5cs"
ApiClient<TRequest, TResponse>
```

---

## Requirement 4 — Runtime Validation

Tất cả external API responses:

```text id="k5tg1o"
unknown
→ Zod
→ typed domain data
```

---

## Requirement 5 — Result Model

```ts id="i9b6p0"
Result<T, E>
```

---

## Requirement 6 — Pagination

```ts id="x0v3yr"
Paginated<T>
```

với cursor metadata.

---

## Requirement 7 — State Model

Model rõ:

```text id="x3ul87"
idle
loading
success
error
```

không dùng:

```ts id="9mpxq8"
isLoading
hasError
hasData
```

một cách tùy tiện dẫn tới impossible states.

---

# 9. EDGE CASE LAB

## Case 1 — Unsafe Assertion

```ts id="blj4o0"
const user = data as User;
```

API thay đổi shape.

Tìm tại sao compiler không báo.

---

## Case 2 — `any` Infection

Một function trả `any`.

Trace cách `any` lan qua toàn module.

---

## Case 3 — Impossible State

Có:

```text id="3qrrh2"
loading = true
error = true
data = valid
```

Thiết kế lại bằng discriminated union.

---

## Case 4 — Generic Too Broad

API:

```ts id="fd7q5f"
function process<T>(value: T): T
```

nhưng không mang lại value thực tế.

Refactor.

---

## Case 5 — Generic Too Complex

Type system dài hàng chục dòng để tạo một API đơn giản.

Phân tích trade-off.

---

## Case 6 — Runtime Mismatch

TypeScript nói:

```ts id="k9jggd"
User
```

nhưng API gửi:

```json id="vc0pn4"
{
  "user_name": "Alice"
}
```

Xác định trust boundary.

---

## Case 7 — Optional Property Explosion

Một type có:

```text id="x9j2kd"
10 optional properties
```

nhiều combination không hợp lệ.

Thiết kế lại state/domain model.

---

# 10. RE-IMPLEMENTATION LAB

Tự xây:

### 10.1 — MyPartial

```ts id="w6x3qz"
type MyPartial<T> = ...
```

### 10.2 — MyPick

### 10.3 — MyOmit

### 10.4 — MyReturnType

### 10.5 — MyAwaited

### 10.6 — DeepPartial

### 10.7 — Result

```ts id="1zms5r"
Result<T, E>
```

### 10.8 — Option

```ts id="q6v5sp"
Some<T>
None
```

Không bắt buộc production-ready.

Mục tiêu:

> Hiểu type composition bằng cách tự xây.

---

# 11. DEBUG LAB

## Bug 1 — Compiler Says It's Fine

API response được cast bằng `as`.

Runtime crash.

Phải tìm trust boundary.

---

## Bug 2 — Type Inference Broken

Một generic API trả về type quá rộng:

```text id="5h5o8i"
unknown
any
union quá rộng
```

Phải xác định inference mất ở đâu.

---

## Bug 3 — Impossible State

UI có:

```text id="l1wnfe"
loading + error + data
```

Thiết kế type model mới.

---

## Bug 4 — Generic Error Message

Một generic type quá phức tạp làm error message dài và khó đọc.

Refactor để DX tốt hơn.

---

## Bug 5 — Runtime Schema Drift

Backend đổi:

```text id="rzh5fr"
email → emailAddress
```

TypeScript không phát hiện.

Thiết kế validation + contract strategy.

---

# 12. DESIGN LAB

## Scenario 1 — API Result

Thiết kế:

```ts id="u8z7wa"
Result<T, E>
```

So sánh với:

```text id="d7rjj3"
throw
vs
Result
```

---

## Scenario 2 — State Model

Thiết kế loading state cho data fetching.

So sánh:

```text id="q4o0vj"
multiple booleans
vs
discriminated union
```

---

## Scenario 3 — Library API

Thiết kế generic API:

```ts id="h7bsy8"
createStore<T>()
```

Mục tiêu:

- good inference
- low annotation burden
- readable errors

---

## Scenario 4 — Runtime Boundary

Một SDK nhận dữ liệu từ bên ngoài.

Quyết định:

```text id="1e7t9t"
unknown
parse
transform
domain object
```

---

# 13. SOURCE & DOCUMENTATION

Primary references:

- TypeScript Handbook
- TypeScript release documentation khi cần feature-specific behavior
- TypeScript utility type definitions
- Zod documentation
- ECMAScript docs khi liên quan behavior runtime

Đặc biệt nên đọc source của các utility type built-in:

```text id="1v5sft"
Partial
Required
Pick
Omit
ReturnType
Awaited
```

Không đọc để nhớ syntax.

Đọc để hiểu cách TypeScript type system được sử dụng trong thư viện chuẩn.

---

# 14. TEACH-BACK

Người học phải giải thích:

### Level 1

> TypeScript khác JavaScript ở đâu?

### Level 2

> Structural typing là gì?

### Level 3

> Generic giải quyết problem gì mà overload/union không giải quyết tốt?

### Level 4

> Vì sao `as` không phải runtime validation?

### Level 5

> Thiết kế type architecture thế nào để vừa an toàn vừa maintainable, thay vì tạo type-level code quá phức tạp?

---

# 15. EXIT CRITERIA — STAGE 6

## Mental Model

- [ ] Phân biệt TypeScript compile-time và JavaScript runtime.
- [ ] Hiểu type erasure.
- [ ] Hiểu structural typing.
- [ ] Phân biệt type space và value space.
- [ ] Nhận biết type assertion không tạo runtime guarantee.

## Type System

- [ ] Dùng union/intersection đúng.
- [ ] Dùng discriminated union.
- [ ] Dùng `unknown`, `never`, `any` có chủ đích.
- [ ] Implement type narrowing.
- [ ] Viết custom type guard.

## Generics

- [ ] Viết generic function.
- [ ] Dùng constraints.
- [ ] Dùng generic interfaces/classes.
- [ ] Dùng `keyof` và indexed access.
- [ ] Thiết kế generic API với inference tốt.

## Advanced Types

- [ ] Dùng mapped types.
- [ ] Conditional types.
- [ ] `infer`.
- [ ] Recursive types cơ bản.
- [ ] Utility types.
- [ ] `satisfies`.
- [ ] Exhaustive checking bằng `never`.

## Runtime

- [ ] Hiểu trust boundary.
- [ ] Validate external data.
- [ ] Dùng Zod.
- [ ] Infer type từ schema.
- [ ] Phân biệt transport/HTTP/schema/business errors.

## Architecture

- [ ] Phân biệt DTO/domain/view model.
- [ ] Model async state bằng discriminated union.
- [ ] Thiết kế `Result<T, E>`.
- [ ] Xây generic repository/client.
- [ ] Thiết kế public type API cho library.

## Engineering

- [ ] Hoàn thành Typed Domain SDK.
- [ ] Debug được unsafe assertion.
- [ ] Debug được runtime/type mismatch.
- [ ] Refactor được over-complex type.
- [ ] Viết ADR cho một type architecture decision.

---

# 16. STAGE 6 CHECKPOINT

## Part A — Type Modeling

Cho một API:

```text id="c9e72x"
GET /orders/:id
```

Thiết kế:

```text id="2o4j65"
DTO
Domain Model
Result
Error
```

---

## Part B — Type Challenge

Implement:

```text id="5m5thh"
MyPartial
MyPick
MyReturnType
MyAwaited
DeepPartial
```

---

## Part C — Runtime Challenge

API trả:

```json id="luy7fy"
{
  "id": 1,
  "name": "Alice",
  "age": "unknown"
}
```

Thiết kế:

```text id="f3gt0v"
unknown
→ validate
→ normalize
→ domain type
```

---

## Part D — State Design

Model:

```text id="ysge1p"
idle
loading
success
empty
error
```

mà không tạo impossible combinations.

---

## Part E — Library API

Thiết kế:

```ts id="ihhh0m"
createRepository<T>()
```

Compiler phải infer được entity type từ usage.

---

# 17. STAGE 6 CAPSTONE

# Typed Domain SDK

Final project phải có:

```text id="6c1q8k"
Domain Models
      ↓
API DTOs
      ↓
Generic Client
      ↓
Runtime Validation
      ↓
Normalization
      ↓
Result / Error Model
      ↓
Application Types
```

System phải chịu được:

```text id="fyv0rt"
API shape drift
missing fields
wrong runtime types
unknown error payload
pagination
generic misuse
```

---

# 18. STAGE 6 → STAGE 7 DEPENDENCY

Sau Stage 6, người học đã hiểu:

```text id="esb8wx"
JavaScript
+
Browser
+
Network
+
API
+
Type System
+
Runtime Validation
```

Bây giờ mới chuyển sang:

# STAGE 7 — TOOLCHAIN & ECOSYSTEM

vì TypeScript code chưa phải thứ browser chạy trực tiếp.

Phải hiểu:

```text id="w7m3gb"
TypeScript
    ↓
Parser
    ↓
Type checking
    ↓
Transform
    ↓
Module resolution
    ↓
Bundle
    ↓
Minify
    ↓
Source map
    ↓
Browser
```

Stage 7 sẽ giải quyết một nhóm câu hỏi mới:

> Tại sao import này hoạt động?

> Tại sao package này không resolve?

> Tại sao bundle tăng 500KB?

> Tại sao tree-shaking không loại bỏ code?

> Tại sao production stack trace bị minified?

> Tại sao local build chạy nhưng CI fail?

---

# 19. STAGE 6 CORE PRINCIPLE

Một Junior thường sử dụng TypeScript như:

```text id="5lmk7c"
Type everything
```

Một Engineer mạnh sử dụng TypeScript như:

```text id="p94ztt"
Model the domain
      ↓
Constrain invalid states
      ↓
Improve API design
      ↓
Make refactoring safer
```

Một Senior còn phải biết:

```text id="6b9m1o"
When NOT to use a complex type.
```

Nguyên tắc xuyên suốt:

> **Type system tốt không phải là type system phức tạp nhất. Type system tốt là type system giúp team đưa ra ít quyết định sai hơn mà vẫn giữ code dễ đọc, dễ refactor và dễ vận hành.**

Đó là lý do Stage 6 không kết thúc bằng việc “biết Generics”, mà kết thúc bằng **type architecture + runtime trust boundaries + API design**.