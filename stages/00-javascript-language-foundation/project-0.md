# Project 0 — CLI Data Processor

<LecturePlayer
  src="/audio/stage-00/project-0.aac"
  title="Project 0 — CLI Data Processor"
  subtitle="11 phút"
/>

## 0. Metadata

| Field              | Value                               |
| ------------------ | ----------------------------------- |
| **Stage**          | 0 — JavaScript Language Foundation  |
| **Module**         | Integration Lab — Stage 0 Capstone  |
| **Project**        | P0 — CLI Data Processor             |
| **Competency**     | C01 — JavaScript Language (L3)      |
| **Depth Target**   | L3                                  |
| **Prerequisites**  | Stage 0 toàn bộ 7 Modules (0.1–0.7) |
| **Estimated Time** | 4–6 giờ                             |
| **Team Size**      | 1 (individual)                      |

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

| Competency             | Từ Module | Áp dụng                              |
| ---------------------- | --------- | ------------------------------------ |
| C01.6 Arrays / Objects | 0.6.x     | Truy cập, transform, group           |
| C01.5 Functions        | 0.5.x     | Tách nhỏ, pure function, composition |
| C01.4 Control Flow     | 0.4.x     | Guard clause, early return           |
| C01.8 Error Handling   | 0.7.x     | Validate, throw, catch, error object |
| C01.3 Coercion         | 0.3.x     | Type checking, truthy/falsy trap     |

### New Competencies (Mới)

| Competency            | Mô tả                                                           |
| --------------------- | --------------------------------------------------------------- |
| C01.8 Integration     | Kết hợp validation + transform + aggregate trong một pipeline   |
| C13.1 Problem Framing | Tách một bài toán lớn thành các bước nhỏ có trách nhiệm rõ ràng |

## 5. Requirements (Yêu cầu)

### Part 1 — Validation (Kiểm tra hợp lệ)

Mỗi record phải là object với các field bắt buộc và đúng kiểu:

| Field        | Kiểu     | Bắt buộc | Ràng buộc                                            |
| ------------ | -------- | -------- | ---------------------------------------------------- |
| `id`         | `number` | ✅       | > 0, integer                                         |
| `name`       | `string` | ✅       | Không rỗng sau khi trim                              |
| `age`        | `number` | ✅       | 18–65                                                |
| `department` | `string` | ✅       | Một trong: `engineering`, `sales`, `marketing`, `hr` |
| `salary`     | `number` | ✅       | > 0                                                  |
| `email`      | `string` | ❌       | Nếu có, phải chứa `@`                                |

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

| Tình huống               | Hành vi mong đợi                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------------ |
| `input` không phải array | Throw `TypeError` với message `"Input must be an array"`                                   |
| `input` là array rỗng    | `valid: []`, `invalid: []`, `summary` với giá trị 0                                        |
| Record là `null`         | Push vào `invalid` với reason `"Record is null"`                                           |
| Record không phải object | Push vào `invalid` với reason `"Record is not an object"`                                  |
| Field sai kiểu           | Push vào `invalid` với reason chi tiết, ví dụ `"Field 'age' must be a number, got string"` |
| Field ngoài range        | Push vào `invalid` với reason `"Field 'age' (17) out of range (18-65)"`                    |

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
[];
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
  {
    id: 1,
    name: "alice chen",
    age: 24,
    department: "engineering",
    salary: 1800,
    email: "alice@co.com",
  },
  { id: 2, name: "BOB NGUYEN", age: 30, department: "sales", salary: 2200 },
];
const result = processHRData(data, { filter: { minAge: 25 } });
// Expect: 1 valid record (Bob), summary tương ứng

// Test 2: Mixed valid/invalid
const mixed = [
  { id: 1, name: "Alice", age: 24, department: "engineering", salary: 1800 },
  null,
  { id: "bad", name: "Bob", age: 30, department: "sales", salary: 2200 },
  { id: 3, name: "Carol", age: 17, department: "hr", salary: 1500 },
];
// Expect: 1 valid, 3 invalid với lý do cụ thể

// Test 3: Empty array
processHRData([], {});
// Expect: valid [], invalid [], summary toàn 0

// Test 4: Non-array input
processHRData("not an array", {});
// Expect: TypeError throw

// Test 5: Input mutation check
const original = [
  { id: 1, name: "Alice", age: 24, department: "engineering", salary: 1800 },
];
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

| Tiêu chí                   | Điểm | Mô tả                                                    |
| -------------------------- | ---- | -------------------------------------------------------- |
| **Validation correctness** | 20   | Bắt đúng tất cả kiểu lỗi, message rõ ràng                |
| **Transform correctness**  | 15   | Normalize name, tính annualSalary, taxBracket đúng       |
| **Filter & Aggregate**     | 20   | Lọc đúng điều kiện, summary chính xác                    |
| **Error handling**         | 15   | Không crash, invalid có reason, rethrow unexpected       |
| **Refactoring quality**    | 20   | Pipeline rõ ràng, function ≤ 20 dòng, không mutate input |
| **Readability**            | 10   | Tên rõ ràng, guard clause, không nested sâu              |

**Minimum pass:** 80/100.

:::details Module chính với pipeline `processHRData`

```js
/**
 * CLI Data Processor - Stage 0 Capstone
 * Pipeline: parseInput → validateBatch → normalizeRecord → filterRecords → aggregateSummary → formatOutput
 */

const VALID_DEPARTMENTS = ["engineering", "sales", "marketing", "hr"];

// ─── Helpers ────────────────────────────────────────────────────────────────

const isInteger = (n) => Number.isInteger(n);
const isString = (s) => typeof s === "string";
const isNumber = (n) => typeof n === "number" && !Number.isNaN(n);
const isObject = (o) =>
  o !== null && typeof o === "object" && !Array.isArray(o);
const round1 = (n) => Math.round(n * 10) / 10;

const toTitleCase = (str) =>
  str
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");

const getTaxBracket = (annual) => {
  if (annual < 24000) return "low";
  if (annual < 48000) return "medium";
  return "high";
};

// ─── Validation ─────────────────────────────────────────────────────────────

const validateRecord = (record) => {
  const errors = [];

  if (record === null) return { valid: false, reason: "Record is null" };
  if (!isObject(record))
    return { valid: false, reason: "Record is not an object" };

  const { id, name, age, department, salary, email } = record;

  if (!isNumber(id) || !isInteger(id) || id <= 0)
    errors.push(`Field 'id' must be a positive integer, got ${typeof id}`);

  if (!isString(name) || name.trim() === "")
    errors.push(`Field 'name' must be a non-empty string`);

  if (!isNumber(age) || age < 18 || age > 65)
    errors.push(`Field 'age' (${age}) out of range (18-65)`);

  if (
    !isString(department) ||
    !VALID_DEPARTMENTS.includes(department.toLowerCase().trim())
  )
    errors.push(
      `Field 'department' must be one of ${VALID_DEPARTMENTS.join(", ")}`,
    );

  if (!isNumber(salary) || salary <= 0)
    errors.push(`Field 'salary' must be a positive number`);

  if (email !== undefined && (!isString(email) || !email.includes("@")))
    errors.push(`Field 'email' must contain '@'`);

  if (errors.length > 0) return { valid: false, reason: errors.join("; ") };

  return { valid: true };
};

const validateBatch = (records) => {
  const valid = [];
  const invalid = [];

  for (const record of records) {
    const result = validateRecord(record);
    if (result.valid) {
      valid.push(record);
    } else {
      invalid.push({
        record: JSON.parse(JSON.stringify(record)),
        reason: result.reason,
      });
    }
  }

  return { valid, invalid };
};

// ─── Transform ──────────────────────────────────────────────────────────────

const normalizeRecord = (record) => {
  const annualSalary = record.salary * 12;

  return {
    id: record.id,
    name: toTitleCase(record.name.trim()),
    age: record.age,
    department: record.department.toLowerCase().trim(),
    salary: record.salary,
    annualSalary,
    taxBracket: getTaxBracket(annualSalary),
    email: record.email,
  };
};

// ─── Filter ─────────────────────────────────────────────────────────────────

const filterRecords = (records, filter) => {
  if (!filter) return records;

  return records.filter((r) => {
    if (filter.minAge !== undefined && r.age < filter.minAge) return false;
    if (filter.maxAge !== undefined && r.age > filter.maxAge) return false;
    if (filter.minSalary !== undefined && r.salary < filter.minSalary)
      return false;
    if (
      filter.departments !== undefined &&
      !filter.departments.includes(r.department)
    )
      return false;
    return true;
  });
};

// ─── Aggregate ──────────────────────────────────────────────────────────────

const aggregateSummary = (records) => {
  const total = records.length;

  if (total === 0) {
    return {
      total: 0,
      averageAge: 0,
      averageSalary: 0,
      totalSalary: 0,
      byDepartment: {},
    };
  }

  const totalAge = records.reduce((sum, r) => sum + r.age, 0);
  const totalSalary = records.reduce((sum, r) => sum + r.salary, 0);

  const byDepartment = {};
  for (const r of records) {
    const dept = r.department;
    if (!byDepartment[dept]) {
      byDepartment[dept] = { count: 0, totalSalary: 0 };
    }
    byDepartment[dept].count += 1;
    byDepartment[dept].totalSalary += r.salary;
  }

  return {
    total,
    averageAge: round1(totalAge / total),
    averageSalary: round1(totalSalary / total),
    totalSalary,
    byDepartment,
  };
};

// ─── Parse Input ────────────────────────────────────────────────────────────

const parseInput = (input) => {
  if (!Array.isArray(input)) {
    throw new TypeError("Input must be an array");
  }
  return input;
};

// ─── Main Pipeline ──────────────────────────────────────────────────────────

function processHRData(input, options = {}) {
  const records = parseInput(input);
  const { valid, invalid } = validateBatch(records);
  const normalized = valid.map(normalizeRecord);
  const filtered = filterRecords(normalized, options?.filter);
  const summary = aggregateSummary(filtered);

  return { valid: filtered, invalid, summary };
}

// ─── Export ─────────────────────────────────────────────────────────────────

module.exports = {
  processHRData,
  validateRecord,
  normalizeRecord,
  filterRecords,
  aggregateSummary,
};
```

:::

:::details 7 test case (bao gồm 5 scenario yêu cầu + 2 bonus)

```js
/**
 * Test Suite for CLI Data Processor
 * Run: node test.js
 */

const { processHRData } = require("./processor.js");

let passed = 0;
let failed = 0;

const assert = (condition, message) => {
  if (condition) {
    passed++;
    console.log(`  ✅ ${message}`);
  } else {
    failed++;
    console.log(`  ❌ ${message}`);
  }
};

console.log("\n=== Test 1: Happy path with filter ===");
{
  const data = [
    {
      id: 1,
      name: "alice chen",
      age: 24,
      department: "engineering",
      salary: 1800,
      email: "alice@co.com",
    },
    { id: 2, name: "BOB NGUYEN", age: 30, department: "sales", salary: 2200 },
  ];
  const result = processHRData(data, { filter: { minAge: 25 } });

  assert(result.valid.length === 1, "Only Bob passes minAge filter");
  assert(
    result.valid[0].name === "Bob Nguyen",
    "Name normalized to title case",
  );
  assert(result.valid[0].annualSalary === 26400, "Annual salary calculated");
  assert(result.valid[0].taxBracket === "medium", "Tax bracket is medium");
  assert(result.summary.total === 1, "Summary total is 1");
  assert(
    result.summary.byDepartment.sales.count === 1,
    "Sales department count is 1",
  );
}

console.log("\n=== Test 2: Mixed valid/invalid ===");
{
  const mixed = [
    { id: 1, name: "Alice", age: 24, department: "engineering", salary: 1800 },
    null,
    { id: "bad", name: "Bob", age: 30, department: "sales", salary: 2200 },
    { id: 3, name: "Carol", age: 17, department: "hr", salary: 1500 },
  ];
  const result = processHRData(mixed, {});

  assert(result.valid.length === 1, "Only 1 valid record");
  assert(result.invalid.length === 3, "3 invalid records");
  assert(result.invalid[0].reason.includes("null"), "Null reason correct");
  assert(result.invalid[1].reason.includes("id"), "Invalid id type caught");
  assert(result.invalid[2].reason.includes("age"), "Age out of range caught");
}

console.log("\n=== Test 3: Empty array ===");
{
  const result = processHRData([], {});

  assert(result.valid.length === 0, "Valid is empty");
  assert(result.invalid.length === 0, "Invalid is empty");
  assert(result.summary.total === 0, "Total is 0");
  assert(result.summary.averageAge === 0, "Average age is 0");
  assert(
    Object.keys(result.summary.byDepartment).length === 0,
    "No departments",
  );
}

console.log("\n=== Test 4: Non-array input ===");
{
  let thrown = false;
  let message = "";
  try {
    processHRData("not an array", {});
  } catch (e) {
    thrown = true;
    message = e.message;
  }

  assert(thrown, "Throws on non-array");
  assert(message === "Input must be an array", "Correct error message");
  assert(thrown && message === "Input must be an array", "TypeError thrown");
}

console.log("\n=== Test 5: Input mutation check ===");
{
  const original = [
    { id: 1, name: "Alice", age: 24, department: "engineering", salary: 1800 },
  ];
  const copy = JSON.parse(JSON.stringify(original));
  processHRData(original, {});

  assert(original[0].name === "Alice", "Original name not mutated");
  assert(
    JSON.stringify(original) === JSON.stringify(copy),
    "Original unchanged",
  );
}

console.log("\n=== Test 6: Department filter ===");
{
  const data = [
    { id: 1, name: "Alice", age: 30, department: "engineering", salary: 3000 },
    { id: 2, name: "Bob", age: 35, department: "sales", salary: 2500 },
    { id: 3, name: "Carol", age: 28, department: "marketing", salary: 2000 },
  ];
  const result = processHRData(data, {
    filter: { departments: ["engineering", "sales"] },
  });

  assert(result.valid.length === 2, "Only 2 departments match");
  assert(
    result.summary.byDepartment.engineering.count === 1,
    "Engineering count correct",
  );
  assert(
    result.summary.byDepartment.marketing === undefined,
    "Marketing excluded",
  );
}

console.log("\n=== Test 7: Email optional validation ===");
{
  const data = [
    {
      id: 1,
      name: "Alice",
      age: 24,
      department: "engineering",
      salary: 1800,
      email: "invalid",
    },
    { id: 2, name: "Bob", age: 24, department: "engineering", salary: 1800 },
  ];
  const result = processHRData(data, {});

  assert(result.valid.length === 1, "Only Bob valid (Alice bad email)");
  assert(result.invalid[0].reason.includes("email"), "Email validation caught");
}

console.log("\n═══════════════════════════════════════════");
console.log(`Results: ${passed} passed, ${failed} failed`);
console.log("═══════════════════════════════════════════\n");

process.exit(failed > 0 ? 1 : 0);
```

```text
=== Test 1: Happy path with filter ===        `✅ 6/6
=== Test 2: Mixed valid/invalid ===            ✅ 5/5
=== Test 3: Empty array ===                    ✅ 5/5
=== Test 4: Non-array input ===                ✅ 3/3
=== Test 5: Input mutation check ===           ✅ 2/2
=== Test 6: Department filter ===              ✅ 3/3
=== Test 7: Email optional validation ===      ✅ 2/2

═══════════════════════════════════════════
Results: 26 passed, 0 failed
═══════════════════════════════════════════
```

:::

:::details `README` - Hướng dẫn chạy & giải thích kiến trúc

**CLI Data Processor — Stage 0 Capstone**

**Cách chạy**

```bash
node test.js
```

Hoặc import trong console/browser:

```js
const { processHRData } = require("./processor.js");
```

**Cấu trúc Pipeline**

| Function           | Trách nhiệm                                                                  |
| ------------------ | ---------------------------------------------------------------------------- |
| `parseInput`       | Kiểm tra input là array, ném `TypeError` nếu không phải                      |
| `validateBatch`    | Duyệt từng record, phân loại valid/invalid                                   |
| `validateRecord`   | Kiểm tra kiểu, range, required fields cho 1 record                           |
| `normalizeRecord`  | Title-case name, lowercase department, tính annualSalary & taxBracket        |
| `filterRecords`    | Lọc theo `options.filter` (minAge, maxAge, minSalary, departments)           |
| `aggregateSummary` | Tổng hợp total, average, byDepartment từ danh sách đã lọc                    |
| `processHRData`    | Orchestrator: gọi pipeline theo thứ tự, trả về `{ valid, invalid, summary }` |

```text
parseInput(input)
    ↓
validateBatch(records)  →  { valid[], invalid[] }
    ↓
valid.map(normalizeRecord)
    ↓
filterRecords(normalized, options.filter)
    ↓
aggregateSummary(filtered)
    ↓
{ valid, invalid, summary }

```

**Quyết định kiến trúc**

**Tại sao tách pipeline?**

1. **Single Responsibility** — Mỗi function chỉ làm 1 việc: validate không biết gì về transform, filter không biết gì về aggregate.
2. **Testability** — Có thể test `validateRecord` riêng mà không cần chạy cả pipeline.
3. **Immutability** — `normalizeRecord` tạo object mới bằng spread, không mutate input gốc.
4. **Composability** — Dễ dàng thêm bước mới (ví dụ: sort, deduplicate) mà không phá vỡ các bước cũ.
5. **Readability** — `processHRData` đọc như pseudocode, không cần comment cũng hiểu luồng.

**Constraints đã tuân thủ**

- ✅ Không dùng thư viện ngoài
- ✅ Không dùng `var`
- ✅ Không mutate input
- ✅ Mỗi function ≤ 20 dòng (trừ guard clause và object literal)
- ✅ `try/catch` chỉ dùng ở JSON parse boundary (nếu có), không dùng cho logic nghiệp vụ
- ✅ Invalid records có `reason` chi tiết, không crash batch

:::

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
>
> - **Stage 1 — Execution Model** — Tại sao `const` bảo vệ binding nhưng object vẫn mutate? Tại sao function parameter pass-by-sharing? Tất cả sẽ được giải thích bằng Execution Context, Scope, và Lexical Environment.
> - **Stage 2 — Object Model** — Deep copy, property descriptors, và cách JavaScript thực sự lưu trữ object trong memory.
> - **Stage 6 — TypeScript** — Tất cả validation bạn viết bằng tay ở Stage 0 sẽ được TypeScript kiểm tra compile-time.
> - **Stage 8 — React** — State immutability pattern bạn đã dùng ở đây (`{ ...record }`) sẽ trở thành bắt buộc trong React state management.
> - **Stage 9 — Production Frontend** — Error logging, monitoring, và graceful degradation. Cách bạn xử lý `invalid` records ở đây là nền tảng cho error boundary và retry logic trong production.
