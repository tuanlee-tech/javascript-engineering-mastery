# Project 0 — CLI Data Processor

<LecturePlayer
  src="/audio/stage-00/project-0.aac"
  title="Project 0 — CLI Data Processor"
  subtitle="11 phút"
/>

## 0. Metadata

| Field | Value |
|-------|-------|
| **Stage** | 0 — JavaScript Language Foundation |
| **Module** | Integration Lab — Stage 0 Capstone |
| **Project** | P0 — CLI Data Processor |
| **Competency** | C01 — JavaScript Language (L3) |
| **Depth Target** | L3 |
| **Prerequisites** | Stage 0 toàn bộ 7 Modules (0.1–0.7) |
| **Estimated Time** | 4–6 giờ |
| **Team Size** | 1 (individual) |

## 1. Context (Bối cảnh)

Bạn là một Junior Frontend Developer trong team Product. PM giao cho bạn một file JSON export từ hệ thống HR cũ:

```json
[
  {
    "id": 1,
    "name": "alice chen",
    "age": 24,
    "department": "engineering",
    "salary": 1800,
    "email": "alice@company.com"
  },
  {
    "id": 2,
    "name": "BOB NGUYEN",
    "age": 30,
    "department": "sales",
    "salary": 2200
  }
]
```

Nhiệm vụ: Viết một **CLI Data Processor** bằng JavaScript thuần (Node.js hoặc Browser Console) để:

1. Đọc và validate dữ liệu.
2. Biến đổi (normalize) về format chuẩn.
3. Lọc theo điều kiện business.
4. Tổng hợp (aggregate) báo cáo.
5. Xử lý lỗi gracefully — không được để một record lỗi làm crash toàn bộ batch.

:::info
Đây không phải bài tập "viết một hàm lớn xong nộp". Đây là **mô phỏng vòng đời thực tế**:

```text
Nhận data thô → Validate → Transform → Filter → Aggregate → Báo cáo
```

Code ban đầu của bạn sẽ **cố ý** viết xấu (monolithic). Sau đó bạn phải refactor thành pipeline rõ ràng.
:::

## 2. Product Goal (Mục tiêu sản phẩm)

Xây dựng một module `processHRData(input, options)` trả về object có cấu trúc:

```js
{
  valid: [...],      // Array record đã qua validate + transform
  invalid: [...],    // Array record lỗi (kèm lý do)
  summary: {
    total: number,
    averageAge: number,
    averageSalary: number,
    totalSalary: number,
    byDepartment: {
      engineering: { count: 2, totalSalary: 5000 },
      sales: { count: 1, totalSalary: 2200 }
    }
  }
}
```

## 3. Technical Constraints (Ràng buộc kỹ thuật)

- **Không dùng thư viện ngoài.** Chỉ dùng JavaScript built-in (Stage 0).
- **Không dùng `try/catch` để bắt lỗi logic nghiệp vụ.** Chỉ dùng `try/catch` cho JSON parse và unexpected error boundary.
- **Không mutate input array.** Tạo bản sao mới (shallow copy) khi cần.
- **Mỗi function ≤ 20 dòng** sau khi refactor (trừ guard clause và object literal).
- **Không dùng `var`.** Chỉ `const` và `let` (ưu tiên `const`).

## 4. Competency Mapping (Năng lực)

### Reused Competencies (Tái sử dụng)

| Competency | Từ Module | Áp dụng |
|------------|-----------|---------|
| C01.6 Arrays / Objects | 0.6.x | Truy cập, transform, group |
| C01.5 Functions | 0.5.x | Tách nhỏ, pure function, composition |
| C01.4 Control Flow | 0.4.x | Guard clause, early return |
| C01.8 Error Handling | 0.7.x | Validate, throw, catch, error object |
| C01.3 Coercion | 0.3.x | Type checking, truthy/falsy trap |

### New Competencies (Mới)

| Competency | Mô tả |
|------------|-------|
| C01.8 Integration | Kết hợp validation + transform + aggregate trong một pipeline |
| C13.1 Problem Framing | Tách một bài toán lớn thành các bước nhỏ có trách nhiệm rõ ràng |

## 5. Requirements (Yêu cầu)

### Part 1 — Validation (Kiểm tra hợp lệ)

Mỗi record phải là object với các field bắt buộc và đúng kiểu:

| Field | Kiểu | Bắt buộc | Ràng buộc |
|-------|------|----------|-----------|
| `id` | `number` | ✅ | > 0, integer |
| `name` | `string` | ✅ | Không rỗng sau khi trim |
| `age` | `number` | ✅ | 18–65 |
| `department` | `string` | ✅ | Một trong: `engineering`, `sales`, `marketing`, `hr` |
| `salary` | `number` | ✅ | > 0 |
| `email` | `string` | ❌ | Nếu có, phải chứa `@` |

:::warning
Nếu một record thiếu field bắt buộc hoặc sai kiểu → đưa vào `invalid` với lý do cụ thể. Không throw crash toàn bộ batch.
:::

### Part 2 — Transform (Biến đổi)

Với record hợp lệ:

1. **Normalize name:** `"alice chen"` → `"Alice Chen"` (viết hoa chữ cái đầu mỗi từ).
2. **Normalize department:** lowercase, trim.
3. **Tính `annualSalary`:** `salary * 12`.
4. **Tính `taxBracket`:**  
   - `annualSalary < 24000` → `"low"`  
   - `24000 <= annualSalary < 48000` → `"medium"`  
   - `>= 48000` → `"high"`.

Output record:

```js
{
  id: 1,
  name: "Alice Chen",
  age: 24,
  department: "engineering",
  salary: 1800,
  annualSalary: 21600,
  taxBracket: "low",
  email: "alice@company.com" // hoặc undefined nếu không có
}
```

### Part 3 — Filtering (Lọc)

Hỗ trợ `options.filter`:

```js
{
  minAge: 25,
  maxAge: 40,
  departments: ["engineering", "sales"], // hoặc undefined = tất cả
  minSalary: 2000
}
```

Nếu `options.filter` undefined → không lọc, giữ tất cả valid.

### Part 4 — Aggregation (Tổng hợp)

Tính `summary` từ danh sách đã lọc:

- `total`: số lượng record.
- `averageAge`: trung bình tuổi (làm tròn 1 chữ số thập phân).
- `averageSalary`: trung bình lương tháng (làm tròn 1 chữ số thập phân).
- `totalSalary`: tổng lương tháng.
- `byDepartment`: object với key là department, value là `{ count, totalSalary }`.

### Part 5 — Error Handling (Xử lý lỗi)

Xử lý các trường hợp:

| Tình huống | Hành vi mong đợi |
|------------|------------------|
| `input` không phải array | Throw `TypeError` với message `"Input must be an array"` |
| `input` là array rỗng | `valid: []`, `invalid: []`, `summary` với giá trị 0 |
| Record là `null` | Push vào `invalid` với reason `"Record is null"` |
| Record không phải object | Push vào `invalid` với reason `"Record is not an object"` |
| Field sai kiểu | Push vào `invalid` với reason chi tiết, ví dụ `"Field 'age' must be a number, got string"` |
| Field ngoài range | Push vào `invalid` với reason `"Field 'age' (17) out of range (18-65)"` |

### Part 6 — Refactoring (Tái cấu trúc)

Code ban đầu của bạn có thể là một function lớn 80–100 dòng. Sau khi pass test, refactor thành pipeline:

```text
parseInput
  → validateRecord
  → normalizeRecord
  → filterRecords
  → aggregateSummary
  → formatOutput
```

Mỗi bước là một function riêng biệt. Không có "god function".

## 6. Architecture Constraints (Ràng buộc kiến trúc)

:::code-group

```js [Before — Monolithic (Anti-pattern)]
function processHRData(input, options) {
  // 80 dòng: validate, transform, filter, aggregate tất cả trong đây
  // Nhiều nested if
  // Mutation trực tiếp
  // Khó test từng phần riêng lẻ
}
```

```js [After — Pipeline (Target)]
function processHRData(input, options) {
  const records = parseInput(input);
  const { valid, invalid } = validateBatch(records);
  const normalized = valid.map(normalizeRecord);
  const filtered = filterRecords(normalized, options?.filter);
  const summary = aggregateSummary(filtered);
  
  return { valid: filtered, invalid, summary };
}
```

:::

## 7. Failure Injection (Lỗi cố ý để debug)

Project này chứa **intentional failure scenarios**. Bạn phải xử lý đúng:

### Scenario A — Malformed JSON (nếu đọc từ file)
```json
[
  { "id": 1, "name": "Alice", "age": 24, "department": "engineering", "salary": 1800 },
  { "id": 2, "name": "Bob" "age": 30 }
]
```
Lỗi parse JSON → `try/catch` ở boundary, throw rõ ràng.

### Scenario B — Missing Property
```js
{ "id": 3, "name": "Carol", "age": 28 } // thiếu department, salary
```

### Scenario C — Invalid Type
```js
{ "id": "four", "name": "Dave", "age": 25, "department": "sales", "salary": 2000 }
// id là string thay vì number
```

### Scenario D — Empty Data
```js
[]
// Hoặc array chỉ chứa null: [null, null]
```

### Scenario E — Mutation Bug (ẩn)
Nếu bạn viết:
```js
record.name = record.name.trim(); // Mutate input object!
```
Thì input gốc bị thay đổi. Đây là bug phổ biến khi dùng reference. Dùng spread để tạo object mới.

## 8. Test Requirements (Yêu cầu kiểm tra)

Bạn phải tự verify bằng cách chạy với các test case sau:

```js
// Test 1: Happy path
const data = [
  { id: 1, name: "alice chen", age: 24, department: "engineering", salary: 1800, email: "alice@co.com" },
  { id: 2, name: "BOB NGUYEN", age: 30, department: "sales", salary: 2200 }
];
const result = processHRData(data, { filter: { minAge: 25 } });
// Expect: 1 valid record (Bob), summary tương ứng

// Test 2: Mixed valid/invalid
const mixed = [
  { id: 1, name: "Alice", age: 24, department: "engineering", salary: 1800 },
  null,
  { id: "bad", name: "Bob", age: 30, department: "sales", salary: 2200 },
  { id: 3, name: "Carol", age: 17, department: "hr", salary: 1500 }
];
// Expect: 1 valid, 3 invalid với lý do cụ thể

// Test 3: Empty array
processHRData([], {});
// Expect: valid [], invalid [], summary toàn 0

// Test 4: Non-array input
processHRData("not an array", {});
// Expect: TypeError throw

// Test 5: Input mutation check
const original = [{ id: 1, name: "Alice", age: 24, department: "engineering", salary: 1800 }];
const copy = JSON.parse(JSON.stringify(original));
processHRData(original, {});
// Expect: original[0].name vẫn là "Alice" (không bị normalize)
```

## 9. Deliverables (Sản phẩm nộp)

1. **File `processor.js`** (hoặc `.mjs`) chứa toàn bộ logic. Không dùng framework.
2. **File `test.js`** với ít nhất 5 test case (bao gồm 5 scenario ở mục 8).
3. **File `README.md`** ngắn gọn:
   - Cách chạy (`node processor.js` hoặc copy-paste vào console).
   - Cấu trúc pipeline (liệt kê các function chính và trách nhiệm).
   - Quyết định kiến trúc: tại sao tách như vậy?

## 10. Review Rubric (Tiêu chí chấm điểm)

| Tiêu chí | Điểm | Mô tả |
|----------|------|-------|
| **Validation correctness** | 20 | Bắt đúng tất cả kiểu lỗi, message rõ ràng |
| **Transform correctness** | 15 | Normalize name, tính annualSalary, taxBracket đúng |
| **Filter & Aggregate** | 20 | Lọc đúng điều kiện, summary chính xác |
| **Error handling** | 15 | Không crash, invalid có reason, rethrow unexpected |
| **Refactoring quality** | 20 | Pipeline rõ ràng, function ≤ 20 dòng, không mutate input |
| **Readability** | 10 | Tên rõ ràng, guard clause, không nested sâu |

**Minimum pass:** 80/100.

## 11. Exit Criteria (Tiêu chí qua project)

- [ ] `processHRData` chạy đúng với happy path và 5 failure scenario.
- [ ] Không có `try/catch` bao quát toàn bộ logic (chỉ dùng ở JSON parse boundary).
- [ ] Input gốc không bị mutate sau khi chạy.
- [ ] Code được refactor từ 1 function lớn thành pipeline ≥ 5 function nhỏ.
- [ ] Mỗi function chính có tên nói rõ intent và ≤ 20 dòng.
- [ ] `invalid` array chứa object có `record` (bản sao) và `reason` (string).
- [ ] Có thể giải thích tại sao chọn cách tách pipeline như vậy (teach-back).

## 12. Spiral Connection (Liên kết xoắn ốc)

> **Previous (Trước):** Toàn bộ Stage 0 — Values, Types, Control Flow, Functions, Data Structures, Error Handling, Readable Code.

> **Current (Hiện tại):** CLI Data Processor — tích hợp tất cả kỹ năng Stage 0 vào một luồng xử lý dữ liệu thực tế.

> **Next (Tiếp theo):**
> - **Stage 1 — Execution Model** — Tại sao `const` bảo vệ binding nhưng object vẫn mutate? Tại sao function parameter pass-by-sharing? Tất cả sẽ được giải thích bằng Execution Context, Scope, và Lexical Environment.
> - **Stage 2 — Object Model** — Deep copy, property descriptors, và cách JavaScript thực sự lưu trữ object trong memory.
> - **Stage 6 — TypeScript** — Tất cả validation bạn viết bằng tay ở Stage 0 sẽ được TypeScript kiểm tra compile-time.
> - **Stage 8 — React** — State immutability pattern bạn đã dùng ở đây (`{ ...record }`) sẽ trở thành bắt buộc trong React state management.
> - **Stage 9 — Production Frontend** — Error logging, monitoring, và graceful degradation. Cách bạn xử lý `invalid` records ở đây là nền tảng cho error boundary và retry logic trong production.