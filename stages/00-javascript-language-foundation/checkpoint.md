# Stage 0 Checkpoint — JavaScript Language Foundation

## 0. Metadata

| Field              | Value                                   |
| ------------------ | --------------------------------------- |
| **Stage**          | 0 — JavaScript Language Foundation      |
| **Module**         | Checkpoint                              |
| **Lesson**         | Stage 0 Checkpoint                      |
| **Competency**     | C01 — JavaScript Language               |
| **Depth**          | L1–L4 (Integration & Assessment)        |
| **Prerequisites**  | Hoàn thành toàn bộ 7 Module của Stage 0 |
| **Estimated Time** | 120–180 phút                            |
| **Cognitive Load** | High                                    |

## 1. Why This Exists (Vì sao cần làm bài này)

Bạn đã đi qua 7 module và 27 bài học. Bài checkpoint này không kiểm tra trí nhớ. Nó kiểm tra:

- **Mental model** có thực sự hình thành hay chỉ là nhận ra syntax.
- **Khả năng dự đoán** behavior thay vì chạy thử mới biết.
- **Khả năng implement** từ đầu, không dùng thư viện.
- **Khả năng debug** khi code không behave như mong đợi.
- **Khả năng refactor** từ code "chạy được" sang code "bảo trì được".
- **Khả năng truyền đạt** concept cho người khác.

> **Quy tắc vàng:** Không chạy code trước khi dự đoán. Không copy solution. Không dùng AI để generate đáp án — AI chỉ được dùng để review sau khi bạn đã tự làm.

## 2. Prerequisites (Yêu cầu đầu vào)

Bạn cần hoàn thành trước:

- [ ] Module 0.1 — Runtime Fundamentals
- [ ] Module 0.2 — Values, Variables & Types
- [ ] Module 0.3 — Coercion & Equality
- [ ] Module 0.4 — Operators & Control Flow
- [ ] Module 0.5 — Functions
- [ ] Module 0.6 — Data Structures
- [ ] Module 0.7 — Error & Code Quality

Nếu thiếu một module, quay lại hoàn thành trước. Checkpoint không thay thế cho deliberate practice ở từng module.

## 3. Learning Objectives (Mục tiêu đánh giá)

Sau khi hoàn thành checkpoint, bạn phải chứng minh được:

1. **Dự đoán** behavior của 8/10 đoạn code liên quan đến coercion, equality, truthy/falsy, và type.
2. **Implement** 5 utility function từ đầu, không dùng thư viện ngoài.
3. **Debug** 3 loại bug phổ biến: coercion, mutation, và iteration.
4. **Refactor** một function lớn thành pipeline các function nhỏ có trách nhiệm rõ ràng.
5. **Giải thích** sự khác biệt giữa value, variable, function, và object bằng văn nói tự nhiên.

## 4. Format & Rules (Quy tắc làm bài)

:::warning Quy tắc bắt buộc

1. **Part A — Predict:** Viết đáp án ra giấy hoặc file text. Không chạy code trước.
2. **Part B — Implement:** Viết code trong môi trường bạn chọn (Node.js hoặc Browser Console). Không dùng lodash, underscore, hay utility library.
3. **Part C — Debug:** Mỗi bug phải đi qua đủ 5 bước: Symptom → Reproduction → Hypothesis → Root Cause → Fix.
4. **Part D — Refactor:** Code đầu ra phải có unit test hoặc manual verification rõ ràng.
5. **Part E — Teach Back:** Ghi âm hoặc viết script giải thích trong 10 phút. Không đọc definition.
   :::

## 5. Part A — Prediction (Dự đoán)

:::info Hướng dẫn
Đọc từng đoạn code. Viết ra:

- Output là gì?
- Nếu có lỗi, lỗi gì?
- Giải thích ngắn gọn tại sao JavaScript behave như vậy.

**Không chạy code trước.**
:::

### Câu 1

```js
console.log([] == false);
console.log("" == false);
console.log(0 == "");
```

### Câu 2

```js
console.log(typeof null);
console.log(typeof []);
console.log(typeof function () {});
```

### Câu 3

```js
const user = { name: "A" };
user.name = "B";
console.log(user.name);
```

### Câu 4

```js
const items = ["a", "b", "c"];
for (const index in items) {
  console.log(index);
}
```

### Câu 5

```js
if ("0") {
  console.log("truthy");
} else {
  console.log("falsy");
}
```

### Câu 6

```js
const a = 0;
const b = "hello";
const result = a || (b && "world");
console.log(result);
```

### Câu 7

```js
const original = { nested: { value: 1 } };
const copy = { ...original };
copy.nested.value = 2;
console.log(original.nested.value);
```

### Câu 8

```js
const add = (x) => (y) => x + y;
const addFive = add(5);
console.log(addFive(3));
```

### Câu 9

```js
const getUser = () => {
  name: "Alice";
};
console.log(getUser());
```

### Câu 10

```js
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));
console.log(Object.is(-0, 0));
```

:::details [Đáp án & Giải thích]

**Câu 1**

```js
console.log([] == false); // → true
console.log("" == false); // → true
console.log(0 == ""); // → true
```

**Giải thích:** `==` thực hiện **numeric coercion** (Abstract Equality Comparison).

- `[]` → `""` (toPrimitive) → `0` (toNumber)
- `false` → `0` (toNumber)
- `""` → `0` (toNumber)
  → Cả 3 so sánh đều thành `0 == 0` → `true`.

**Câu 2**

```js
console.log(typeof null); // → "object" (lỗi lịch sử của JS)
console.log(typeof []); // → "object" (array là object)
console.log(typeof function () {}); // → "function" (function có typeof riêng)
```

**Câu 3**

```js
const user = { name: "A" };
user.name = "B";
console.log(user.name); // → "B"
```

**Giải thích:** `const` bảo vệ **binding** (không cho gán lại `user = ...`), không bảo vệ **value**. Object là mutable nên property vẫn sửa được.

**Câu 4**

```js
const items = ["a", "b", "c"];
for (const index in items) {
  console.log(index); // → "0", "1", "2"
}
```

**Giải thích:** `for...in` iterate over **enumerable property keys** (string), không phải values. Muốn iterate values dùng `for...of`.

**Câu 5**

```js
if ("0") {
  console.log("truthy"); // → "truthy"
} else {
  console.log("falsy");
}
```

**Giải thích:** String non-empty luôn **truthy**, kể cả `"0"`, `"false"`, `" "` (space). Chỉ có `""` (empty string) là falsy.

**Câu 6**

```js
const a = 0;
const b = "hello";
const result = a || (b && "world");
console.log(result); // → "world"
```

**Giải thích:** `&&` có **precedence cao hơn** `||`. Thứ tự: `b && "world"` → `"world"` (vì `b` truthy). Sau đó `a || "world"` → `"world"` (vì `a` là `0`, falsy).

**Câu 7**

```js
const original = { nested: { value: 1 } };
const copy = { ...original };
copy.nested.value = 2;
console.log(original.nested.value); // → 2
```

**Giải thích:** Spread `...` tạo **shallow copy**. `copy.nested` vẫn trỏ đến cùng object với `original.nested`. Muốn deep copy dùng `structuredClone()` hoặc `JSON.parse(JSON.stringify(...))`.

**Câu 8**

```js
const add = (x) => (y) => x + y;
const addFive = add(5);
console.log(addFive(3)); // → 8
```

**Giải thích:** Higher-order function + closure. `addFive` là một function giữ reference đến `x = 5` từ scope cha. Khi gọi `addFive(3)`, `x + y` = `5 + 3` = `8`.

**Câu 9**

```js
const getUser = () => {
  name: "Alice";
};
console.log(getUser()); // → undefined
```

**Giải thích:** Arrow function với block `{}` cần **explicit `return`**. `{ name: "Alice" }` bị parse như **label statement** `name:` + expression `"Alice"`, không phải object literal. Sửa: `() => ({ name: "Alice" })`.

**Câu 10**

```js
console.log(NaN === NaN); // → false
console.log(Object.is(NaN, NaN)); // → true
console.log(Object.is(-0, 0)); // → false
```

**Giải thích:**

- `===` không treat `NaN` as equal (theo IEEE 754 spec).
- `Object.is()` là "same-value equality": `NaN === NaN` → `true`, `-0 !== 0`.
- `Object.is` giống `===` ngoại trừ 2 trường hợp này.

:::

## 6. Part B — Implementation (Thực hành)

:::info Hướng dẫn
Implement 5 function sau từ đầu. Không dùng thư viện ngoài. Xử lý edge case tối thiểu: input không phải array, empty array, callback không phải function.
:::

### 6.1 `groupBy(array, callback)`

Nhóm các phần tử theo key trả về từ callback.

```js
groupBy([6.1, 4.2, 6.3], Math.floor);
// → { 4: [4.2], 6: [6.1, 6.3] }
```

### 6.2 `uniqueBy(array, callback)`

Lọc phần tử duplicate dựa trên key từ callback.

```js
uniqueBy([{ id: 1 }, { id: 2 }, { id: 1 }], (x) => x.id);
// → [{ id: 1 }, { id: 2 }]
```

### 6.3 `indexBy(array, key)`

Tạo object lookup từ array dựa trên key.

```js
indexBy(
  [
    { id: "a", name: "Alice" },
    { id: "b", name: "Bob" },
  ],
  "id",
);
// → { a: { id: "a", name: "Alice" }, b: { id: "b", name: "Bob" } }
```

### 6.4 `flatten(array, depth = 1)`

Flatten array nested với độ sâu cho trước.

```js
flatten([1, [2, [3, [4]]]], 2);
// → [1, 2, 3, [4]]
```

### 6.5 `safeGet(object, path, defaultValue)`

Truy cập nested property an toàn.

```js
safeGet({ user: { profile: { name: "Alice" } } }, "user.profile.name");
// → "Alice"

safeGet({ user: {} }, "user.profile.name", "Anonymous");
// → "Anonymous"
```

:::details [Gợi ý implement]

- `groupBy`: Dùng `reduce` hoặc `for...of`. Khởi tạo object accumulator. Key từ callback phải được coerce thành string khi dùng làm property key.

  ```js
  function groupBy(array, callback) {
    if (!Array.isArray(array))
      throw new TypeError("First argument must be an array");
    if (typeof callback !== "function")
      throw new TypeError("Second argument must be a function");

    const result = {};
    for (const item of array) {
      const key = String(callback(item));
      if (!result[key]) result[key] = [];
      result[key].push(item);
    }
    return result;
  }
  ```

- `uniqueBy`: Dùng mảng phụ `seen` + `includes()` hoặc dùng `Set` (sẽ học ở Stage 2) để track seen keys. Chỉ push phần tử đầu tiên có key chưa gặp.

  ```js
  // Cách 1:
  function uniqueBy(array, callback) {
    if (!Array.isArray(array))
      throw new TypeError("First argument must be an array");
    if (typeof callback !== "function")
      throw new TypeError("Second argument must be a function");

    const seen = [];
    const result = [];

    for (const item of array) {
      const key = callback(item);

      if (!seen.includes(key)) {
        seen.push(key);
        result.push(item);
      }
    }

    return result;
  }
  ```

  ***

  ```js
  // Cách 2:
  function uniqueBy(array, callback) {
    if (!Array.isArray(array))
      throw new TypeError("First argument must be an array");
    if (typeof callback !== "function")
      throw new TypeError("Second argument must be a function");

    const seen = new Set();
    const result = [];

    for (const item of array) {
      const key = callback(item);
      if (!seen.has(key)) {
        seen.add(key);
        result.push(item);
      }
    }
    return result;
  }
  ```

- `indexBy`: Kiểm tra `key` tồn tại trên mỗi item. Nếu không, skip hoặc throw tùy design decision (document lại).

  ```js
  function indexBy(array, key) {
    if (!Array.isArray(array))
      throw new TypeError("First argument must be an array");
    if (typeof key !== "string")
      throw new TypeError("Second argument must be a string key");

    const result = {};
    for (const item of array) {
      if (item && typeof item === "object" && key in item) {
        result[item[key]] = item;
      }
    }
    return result;
  }
  ```

- `flatten`: Đệ quy hoặc vòng lặp. Kiểm tra `Array.isArray` và `depth > 0`.

  ```js
  function flatten(array, depth = 1) {
    if (!Array.isArray(array))
      throw new TypeError("First argument must be an array");
    if (typeof depth !== "number" || depth < 0) depth = 0;

    const result = [];
    for (const item of array) {
      if (Array.isArray(item) && depth > 0) {
        result.push(...flatten(item, depth - 1));
      } else {
        result.push(item);
      }
    }
    return result;
  }
  ```

- `safeGet`: Split path by `.`. Dùng `for...of` hoặc `reduce` hoặc đệ quy. Nếu gặp `undefined`/null giữa chừng, return `defaultValue`.

  ```js
  // for...of → dễ đọc, dễ debug nhất.
  function safeGet(object, path, defaultValue) {
    if (object === null || typeof object !== "object") return defaultValue;
    if (typeof path !== "string") return defaultValue;

    const keys = path.split(".");
    let current = object;

    for (const key of keys) {
      if (current === null || current === undefined || !(key in current)) {
        return defaultValue;
      }
      current = current[key];
    }

    return current === undefined ? defaultValue : current;
  }
  ```

  ***

  ```js
  // reduce → luyện functional programming.
  function safeGet(object, path, defaultValue) {
    if (object === null || typeof object !== "object") return defaultValue;
    if (typeof path !== "string") return defaultValue;

    const keys = path.split(".");

    const result = keys.reduce((current, key) => {
      if (current === null || current === undefined) {
        return undefined;
      }

      if (!(key in Object(current))) {
        return undefined;
      }

      return current[key];
    }, object);

    return result === undefined ? defaultValue : result;
  }
  ```

  ***

  ```js
  // đệ quy → luyện tư duy recursive traversal
  function safeGet(object, path, defaultValue) {
    if (object === null || typeof object !== "object") {
      return defaultValue;
    }

    if (typeof path !== "string") {
      return defaultValue;
    }

    const keys = path.split(".");

    function get(current, index) {
      if (current === null || current === undefined) {
        return defaultValue;
      }

      if (index === keys.length) {
        return current === undefined ? defaultValue : current;
      }

      const key = keys[index];

      if (!(key in Object(current))) {
        return defaultValue;
      }

      return get(current[key], index + 1);
    }

    return get(object, 0);
  }
  ```

  :::

## 7. Part C — Debug Lab (Bài lab gỡ lỗi)

:::info Hướng dẫn
Mỗi bug phải đi qua đủ 5 bước:

- **Symptom (Triệu chứng):** Behavior thực tế khác mong đợi.
- **Reproduction (Tái hiện lỗi):** Code tối thiểu tái hiện bug.
- **Hypothesis (Giả thuyết):** Tại sao code behave như vậy?
- **Root Cause (Nguyên nhân gốc rễ):** Mental model nào bị thiếu hoặc sai?
- **Prevention (Phòng ngừa):** Làm sao tránh lặp lại?
  :::

### Bug 1 — Unexpected Coercion (Ép kiểu không mong muốn)

```js
function calculateTotal(price, tax) {
  tax = tax || 0.1; // ❌ Bug: 0 bị coi là falsy → bị override
  return price + price * tax;
}

console.log(calculateTotal(100, 0));
// Expected: 100
// Actual: 110
```

:::details [Đáp án tham khảo]

- **Symptom (Triệu chứng):** Khi truyền `tax = 0` (miễn thuế), hàm vẫn áp dụng thuế mặc định `0.1`, kết quả ra `110` thay vì `100`.
- **Reproduction (Tái hiện lỗi):** `0 || 0.1` → `0.1`. Vì `||` thực hiện **boolean coercion**: nếu vế trái là falsy (`0`, `""`, `false`, `NaN`, `null`, `undefined`), nó trả về vế phải. `0` là valid input nhưng bị loại bỏ.
- **Root Cause (Nguyên nhân gốc rễ):** `||` không phân biệt "thiếu giá trị" (`null`/`undefined`) với "giá trị hợp lệ nhưng falsy" (`0`, `""`, `false`). Đây là sự nhầm lẫn giữa **falsy** và **nullish**.
- **Fix (Sửa):** Dùng **nullish coalescing operator `??`**, chỉ fallback khi giá trị là `null` hoặc `undefined`:

```js
function calculateTotal(price, tax) {
  tax = tax ?? 0.1; // ✅ Chỉ override khi tax thực sự không được truyền
  return price + price * tax;
}

console.log(calculateTotal(100, 0)); // 100 ✅
console.log(calculateTotal(100)); // 110 ✅ (dùng default)
console.log(calculateTotal(100, null)); // 110 ✅
```

- **Prevention (Phòng ngừa):**
  - Luôn dùng `??` khi `0`, `""`, `false` là **valid input**.
  - Phân biệt rõ: **Nullish** = chỉ `null` và `undefined`. **Falsy** = `0`, `""`, `false`, `NaN`, `null`, `undefined`.
  - Tránh `||` cho giá trị mặc định trừ khi bạn **chủ đích** loại bỏ mọi falsy value.

:::

### Bug 2 — Shared State Mutation

```js
// ❌ Bug: defaults ở ngoài hàm, bị mutate giữa các lần gọi
const defaults = { theme: "light", notifications: true };

function createDefaultConfig(userConfig) {
  const merged = Object.assign(defaults, userConfig); // mutate shared object!
  return merged;
}

const configA = createDefaultConfig({ theme: "dark" });
const configB = createDefaultConfig({});

configB.theme = "blue";

console.log(configA.theme);
// Expected: "dark"
// Actual: "blue" ❌
```

:::details [Đáp án tham khảo]

- **Symptom (Triệu chứng):** `configA.theme` đổi thành `"blue"` dù chỉ sửa `configB`.
- **Reproduction (Tái hiện lỗi):**
  - `Object.assign(target, source)` **mutate `target` trực tiếp** và trả về chính `target`.
  - Khi `defaults` được định nghĩa bên ngoài hàm, nó trở thành **shared mutable state**.
  - Lần gọi 1: `Object.assign(defaults, {theme: "dark"})` → `defaults` thành `{theme: "dark", notifications: true}`.
  - Lần gọi 2: `Object.assign(defaults, {})` → trả về cùng object đã bị mutate.
  - `configA` và `configB` cùng reference → sửa `configB` ảnh hưởng `configA`.
- **Root Cause (Nguyên nhân gốc rễ):**
  1. `Object.assign` mutate target object thay vì tạo mới.
  2. Dùng object literal làm default ở ngoài hàm tạo **shared state** giữa các lần gọi.
  3. Thiếu hiểu biết về reference vs value trong JavaScript.
- **Fix (Sửa):** Luôn tạo object mới khi merge, không mutate input hoặc shared state:

```js
// ✅ Cách 1: Object.assign với empty target
function createDefaultConfig(userConfig) {
  const defaults = { theme: "light", notifications: true };
n  return Object.assign({}, defaults, userConfig); // target = {} mới
}

// ✅ Cách 2: Spread operator (rõ ràng, phổ biến)
function createDefaultConfig(userConfig) {
  const defaults = { theme: "light", notifications: true };
  return { ...defaults, ...userConfig };
}

// ✅ Cách 3: Nếu cần deep clone (nested objects)
function createDefaultConfig(userConfig) {
  const defaults = { theme: "light", settings: { fontSize: 14 } };
  return structuredClone({ ...defaults, ...userConfig });
}
```

- **Prevention (Phòng ngừa):**
  - Không bao giờ dùng `Object.assign(defaults, ...)` khi `defaults` là biến reusable/global.
  - Luôn tạo object mới: `Object.assign({}, defaults, userConfig)` hoặc `{ ...defaults, ...userConfig }`.
  - Phân biệt **shallow copy** (chỉ copy top-level properties) vs **deep clone** (copy toàn bộ nested structure).
  - Cẩn thận với default parameter: `function fn(config = { theme: "light" })` — object default cũng bị mutate giữa các lần gọi nếu không clone.

:::

### Bug 3 — Incorrect Iteration

```js
const scores = [85, 90, 78];
let total = 0;

for (const score in scores) {
  total += score;
}

console.log(total);
// Expected: 253
// Actual: ?
```

:::details [Đáp án tham khảo]

- **Symptom (Triệu chứng):** `total` là `"0012"` hoặc string concatenation thay vì `253`.
- **Reproduction (Tái hiện lỗi):** `for...in` trả về index dạng string `"0"`, `"1"`, `"2"`. `total += "0"` → `"00"`, sau đó `"001"`, v.v.
- **Hypothesis (Giả thuyết):** `for...in` iterate over enumerable property keys, không phải values. Keys của array là string. `+=` với string thực hiện concatenation.
- **Root Cause (Nguyên nhân gốc rễ):** Nhầm lẫn `for...in` với `for...of`. `for...in` dùng cho object properties. `for...of` dùng cho iterable values.
- **Prevention (Phòng ngừa):** Dùng `for...of` cho array iteration. Nếu cần index, dùng `for (const [index, value] of scores.entries())` hoặc `for` loop truyền thống. Không dùng `for...in` cho array.
  :::

## 8. Part D — Refactor (Tái cấu trúc)

:::info Yêu cầu
Code dưới đây chạy đúng nhưng là "big ball of mud". Nhiệm vụ:

1. Tách thành pipeline: `parse → validate → normalize → filter → aggregate → format`.
2. Mỗi function một trách nhiệm duy nhất.
3. Không dùng shared mutable state giữa các bước.
4. Viết ít nhất 3 test case manual hoặc assertion để verify.
   :::

```js
function processEmployeeData(rawData, options) {
  const result = { valid: [], invalid: [], summary: {} };
  const minAge = options.minAge || 18;
  const deptFilter = options.department;
  let totalSalary = 0;
  let count = 0;

  for (let i = 0; i < rawData.length; i++) {
    const item = rawData[i];
    if (
      !item ||
      !item.id ||
      !item.name ||
      typeof item.age !== "number" ||
      typeof item.salary !== "number"
    ) {
      result.invalid.push(item);
      continue;
    }
    if (item.age < minAge) continue;
    if (deptFilter && item.department !== deptFilter) continue;

    item.name = item.name.trim().replace(/\s+/g, " ");
    item.name =
      item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase();

    result.valid.push(item);
    totalSalary += item.salary;
    count++;

    if (!result.summary[item.department]) {
      result.summary[item.department] = { count: 0, totalSalary: 0 };
    }
    result.summary[item.department].count++;
    result.summary[item.department].totalSalary += item.salary;
  }

  result.averageSalary = count > 0 ? totalSalary / count : 0;
  return result;
}
```

:::tip Gợi ý refactor

- `parse`: Nhận rawData, return array (hoặc throw nếu không phải array).
- `validate`: Nhận một item, return `{ valid: boolean, reason?: string }`.
- `normalize`: Nhận một valid item, return item mới với name đã format.
- `filter`: Nhận array + options, return filtered array.
- `aggregate`: Nhận filtered array, return summary object.
- `format`: Gộp valid, invalid, summary, average vào output structure cuối.
- **Quan trọng:** `normalize` phải trả về object mới, không mutate input.
  :::

:::details [Đáp án & Giải thích]

```js
/**
 * Stage 0 Checkpoint — Part D: Refactor
 * Pipeline: parse → validate → normalize → filter → aggregate → format
 */

// ─── Helpers ────────────────────────────────────────────────────────────────

const isObject = (o) =>
  o !== null && typeof o === "object" && !Array.isArray(o);
const isNumber = (n) => typeof n === "number" && !Number.isNaN(n);
const isString = (s) => typeof s === "string";

// ─── Parse ──────────────────────────────────────────────────────────────────

const parseInput = (rawData) => {
  if (!Array.isArray(rawData)) {
    throw new TypeError("Input must be an array");
  }
  return rawData;
};

// ─── Validate ───────────────────────────────────────────────────────────────

const validateItem = (item) => {
  if (item === null) return { valid: false, reason: "Item is null" };
  if (!isObject(item)) return { valid: false, reason: "Item is not an object" };

  const errors = [];
  if (!item.id) errors.push("Missing 'id'");
  if (!item.name || !isString(item.name))
    errors.push("Missing or invalid 'name'");
  if (!isNumber(item.age)) errors.push("'age' must be a number");
  if (!isNumber(item.salary)) errors.push("'salary' must be a number");

  if (errors.length > 0) return { valid: false, reason: errors.join("; ") };
  return { valid: true };
};

const validateBatch = (items) => {
  const valid = [];
  const invalid = [];

  for (const item of items) {
    const result = validateItem(item);
    if (result.valid) {
      valid.push(item);
    } else {
      invalid.push({
        record: item === null ? null : JSON.parse(JSON.stringify(item)),
        reason: result.reason,
      });
    }
  }

  return { valid, invalid };
};

// ─── Normalize ──────────────────────────────────────────────────────────────

const normalizeName = (name) => {
  const trimmed = name.trim().replace(/\s+/g, " ");
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
};

const normalizeItem = (item) => ({
  id: item.id,
  name: normalizeName(item.name),
  age: item.age,
  department: item.department,
  salary: item.salary,
});

// ─── Filter ─────────────────────────────────────────────────────────────────

const filterItems = (items, options) => {
  if (!options) return items;

  const minAge = options.minAge ?? 18;
  const deptFilter = options.department;

  return items.filter((item) => {
    if (item.age < minAge) return false;
    if (deptFilter && item.department !== deptFilter) return false;
    return true;
  });
};

// ─── Aggregate ──────────────────────────────────────────────────────────────

const aggregateSummary = (items) => {
  const total = items.length;
  if (total === 0) {
    return {
      total: 0,
      averageSalary: 0,
      byDepartment: {},
    };
  }

  const totalSalary = items.reduce((sum, item) => sum + item.salary, 0);

  const byDepartment = {};
  for (const item of items) {
    const dept = item.department;
    if (!byDepartment[dept]) {
      byDepartment[dept] = { count: 0, totalSalary: 0 };
    }
    byDepartment[dept].count++;
    byDepartment[dept].totalSalary += item.salary;
  }

  return {
    total,
    averageSalary: totalSalary / total,
    byDepartment,
  };
};

// ─── Format ─────────────────────────────────────────────────────────────────

const formatOutput = (valid, invalid, summary) => ({
  valid,
  invalid,
  summary: {
    ...summary,
    averageSalary: summary.averageSalary,
  },
});

// ─── Main Pipeline ──────────────────────────────────────────────────────────

function processEmployeeData(rawData, options = {}) {
  const items = parseInput(rawData);
  const { valid, invalid } = validateBatch(items);
  const normalized = valid.map(normalizeItem);
  const filtered = filterItems(normalized, options);
  const summary = aggregateSummary(filtered);

  return formatOutput(filtered, invalid, summary);
}

// ─── Exports ────────────────────────────────────────────────────────────────

module.exports = {
  processEmployeeData,
  parseInput,
  validateItem,
  validateBatch,
  normalizeItem,
  filterItems,
  aggregateSummary,
};
```

:::

## 9. Part E — Teach Back (Dạy lại)

:::info Yêu cầu
Chuẩn bị một bài giải thích tối đa 10 phút (viết script hoặc ghi âm) trả lời câu hỏi:

> **"JavaScript value, variable, function và object khác nhau như thế nào?"**

Yêu cầu:

- Dùng đúng terminology: value, binding, assignment, mutation, reference, primitive, object.
- Giải thích tại sao `const` vẫn cho phép mutation.
- Giải thích tại sao function là value.
- Dùng ít nhất 2 ví dụ code minh họa.
- Không đọc definition. Nói như đang giải thích cho một đồng nghiệp junior.
  :::

:::details Mô phỏng

- **Bạn nói:**  
  Giả sử tôi có `const x = 5`. Ở đây `5` là một **value** — cụ thể là primitive number. `x` là một **variable**, hay đúng hơn là một **binding** (ràng buộc): nó gắn cái tên `x` vào value `5`.  
  Nếu tôi viết `const y = x`, tôi copy **value** `5` sang binding mới `y`. `x` và `y` độc lập. Sửa `y` không ảnh hưởng `x`.  
  Nhưng nếu tôi viết `const user = { name: "A" }`, value bên phải là một **object**. Object không nằm trong variable — variable chỉ giữ **reference** (tham chiếu) đến object đó trên heap. Khi tôi viết `const admin = user`, tôi copy reference, không phải object. `admin.name = "B"` sẽ thấy qua `user.name` luôn.  
  **Function** cũng là object, nên function cũng là value. Điều này có nghĩa là tôi có thể gán function vào variable, truyền vào function khác, hoặc return từ function. Ví dụ: `const greet = function() {}` — `greet` là binding, function expression là value.  
  Tại sao `const` vẫn cho phép mutation? Vì `const` chỉ **bảo vệ binding**, không bảo vệ value. Nếu value là primitive, nó immutable rồi nên không sửa được. Nếu value là object, object vẫn có thể thay đổi internal state — chỉ là bạn không thể gán `user = somethingElse`.  
  Tóm lại: **Value** là dữ liệu thực sự. **Variable** là cái tên trỏ đến value. **Object** là loại value được lưu by-reference. **Function** là một loại object đặc biệt, nên cũng là value và được đối xử như value.

> 💡 Hình dung: Variable như là nhãn dán trên hộp. Primitive là hộp nhỏ có khóa — bạn chỉ có thể thay bằng hộp mới. Object là hộp lớn mở — bạn có thể thay đồ bên trong, nhưng nhãn dán vẫn dán trên cùng một hộp.

:::tip Gợi ý đánh giá bản thân

- Đồng nghiệp của bạn có thể vẽ lại mental model sau khi nghe không?
- Bạn có nhầm lẫn giữa "pass by value" và "pass by reference" không?
- Bạn có giải thích được tại sao `typeof function()` trả về `"function"` dù function là object không?
  :::

## 10. Assessment & Scoring (Đánh giá & Chấm điểm)

| Phần  | Nội dung          | Điểm tối đa | Tiêu chí đạt                                                            |
| ----- | ----------------- | ----------- | ----------------------------------------------------------------------- |
| **A** | Predict (10 câu)  | 20 điểm     | ≥ 14 điểm (7/10 đúng)                                                   |
| **B** | Implement (5 bài) | 25 điểm     | Mỗi bài 5 điểm: đúng logic (3), xử lý edge case (1), code style (1)     |
| **C** | Debug (3 bug)     | 15 điểm     | Mỗi bug 5 điểm: đủ 5 bước (3), root cause chính xác (2)                 |
| **D** | Refactor          | 20 điểm     | Tách đúng pipeline (8), không mutate (5), test coverage (4), naming (3) |
| **E** | Teach Back        | 20 điểm     | Đúng terminology (8), causal explanation (7), ví dụ rõ (5)              |

**Tổng:** 100 điểm

:::warning Ngưỡng qua bài

- **Pass Stage 0:** ≥ 70 điểm và **tất cả** Part E phải hoàn thành (không cần perfect, nhưng phải có).
- **Mastery:** ≥ 85 điểm + có thể giải thích tất cả câu sai ở Part A bằng mental model.
  :::

## 11. Exit Criteria (Tiêu chí qua bài)

- [ ] Dự đoán đúng ≥ 7/10 scenarios ở Part A và giải thích được cơ chế coercion/equality/reference.
- [ ] Implement đúng 5/5 utility functions từ đầu, không dùng thư viện.
- [ ] Debug đúng root cause của cả 3 loại bug: coercion, mutation, iteration.
- [ ] Refactor thành công function lớn thành pipeline các pure function nhỏ.
- [ ] Hoàn thành Teach Back về value/variable/function/object trong 10 phút.
- [ ] (Optional) Tự review lại các câu sai và giải thích tại sao mental model cũ bị sai.

## 12. Spiral Connection (Liên kết xoắn ốc)

> **Previous (Trước):** Bạn đã học tất cả kiến thức nền tảng: values, types, coercion, control flow, functions, data structures, error handling.

> **Current (Hiện tại):** Checkpoint tổng hợp kiểm chứng xem mental model đã đủ vững để bước vào runtime mechanism chưa.

> **Next (Tiếp theo):** Stage 1 — Execution Model. Bạn sẽ học: Execution Context, Scope, Hoisting, TDZ, Closure, Call Stack. Những kiến thức này giải thích **tại sao** function có thể "nhớ" scope, và **tại sao** variable resolution behave như bạn đã thấy ở Stage 0.

:::tip Chuẩn bị cho Stage 1
Nếu bạn cảm thấy Part A hoặc Part B còn mơ hồ, hãy review lại Module 0.2 (Values, Variables & Types) và Module 0.5 (Functions) trước khi bước sang Stage 1. Closure sẽ không thể hiểu nếu mental model về function-as-value và scope chưa vững.
:::
