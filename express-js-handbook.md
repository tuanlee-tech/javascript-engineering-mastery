# Express.js Framework & APIs Handbook
## Bản dịch song ngữ English – Tiếng Việt


<LecturePlayer
  src="/audio/expressjs-handbook.mp3"
  title="Express.js Framework & APIs Handbook"
  subtitle="25 phút"
/>

> **THE DEFINITIVE BACKEND GUIDE**  
> Routing • Middleware Pipeline • REST APIs • Production Scale  
> By **CoderMind**  
> *Fast & Minimalist • Production Grade*

---

## Mục lục / Table of Contents

| # | English | Tiếng Việt |
|---|---------|------------|
| 01 | Express.js Core Architecture | Kiến trúc cốt lõi Express.js |
| 02 | Routing & Dynamic URLs | Routing & URL động |
| 03 | Request & Response APIs | API Request & Response |
| 04 | Custom Middleware Pipeline | Pipeline Middleware tùy chỉnh |
| 05 | Built-in Parsers & Static Files | Parser tích hợp & File tĩnh |
| 06 | Centralized Error Handling | Xử lý lỗi tập trung |
| 07 | Modular express.Router | express.Router mô-đun |
| 08 | REST API Architecture | Kiến trúc REST API |
| 09 | Complete CRUD Implementation | Triển khai CRUD hoàn chỉnh |
| 10 | Input Validation with Zod | Validation đầu vào với Zod |
| 11 | API Versioning & Standards | Versioning API & Chuẩn |
| 12 | Enterprise Production Readiness | Sẵn sàng Production cấp doanh nghiệp |

**Handbook Roadmap / Lộ trình Handbook:**  
The following chapters guide you step-by-step from fundamental Express server instantiation to advanced routing, middleware interceptors, type-safe validation, and production-grade REST APIs.  

Các chương sau hướng dẫn bạn từng bước từ việc khởi tạo server Express cơ bản đến routing nâng cao, middleware interceptor, validation type-safe, và REST API cấp production.

---

# 01. Express.js Core Architecture
## Kiến trúc cốt lõi Express.js

**English:**  
Express.js is the de facto minimalist routing and middleware web framework for Node.js. It wraps the raw HTTP primitives into an expressive, modular pipeline with declarative routing, automated body parsing, and standardized error delegation.

**Tiếng Việt:**  
Express.js là framework web routing và middleware tối giản mặc định cho Node.js. Nó bọc các primitive HTTP thô thành một pipeline biểu đạt, mô-đun với routing khai báo, parse body tự động, và ủy quyền lỗi chuẩn hóa.

### Architecture & Functional Component Hierarchy
### Kiến trúc & Phân cấp thành phần chức năng

| Layer | English | Tiếng Việt |
|-------|---------|------------|
| **1. Server & Lifecycle** | Setup & Instantiation | Thiết lập & Instantiation |
| | `npm install express` | Cài dependency production |
| | `express()` App | Khởi tạo application |
| | `app.listen()` | Bắt đầu HTTP listener |
| **2. Routing Layer** | Endpoints & Dynamic URIs | Endpoint & URL động |
| | HTTP Methods (`app.get`, `app.post`...) | Các method HTTP |
| | Route Params (`:id`) | Tham số route (`req.params`) |
| | Query Strings (`?sort=asc`) | Chuỗi query (`req.query`) |
| **3. Middleware** | Pipeline Interceptors | Pipeline Interceptor |
| | Built-in (`json`/`static`) | Tích hợp sẵn |
| | Custom `(req, res, next)` | Tùy chỉnh (logging, auth, validation) |
| | Error Handlers `(err, req, res, next)` | Xử lý lỗi |
| **4. Modular Apps** | Sub-Routers & Objects | Sub-Router & Objects |
| | `express.Router()` | Cô lập route theo module |
| | Enhanced Request | `req.body`, `req.ip`, `req.get` |
| | Enhanced Response | `res.json()`, `res.status()`, `send` |

### The Middleware Onion Pipeline
### Pipeline Middleware dạng Hành tây (Onion)

```
1. Inbound Request          →  HTTP socket hits server
2. Built-in Parsers         →  express.json() parses body
3. Custom Auth / Log        →  Validates token & calls next()
4. Route Handler            →  res.status(200).json()
5. Error Handler            →  (err, req, res, next)
```

| Express Construct | Signature / Invocation | Key Operational Duty / Nhiệm vụ chính |
|-------------------|------------------------|---------------------------------------|
| Custom Middleware | `(req, res, next) => { next(); }` | Mutates request, intercepts auth, orhalts pipeline early. / Thay đổi request, chặn auth, hoặc dừng pipeline sớm. |
| Error Middleware | `(err, req, res, next) => { ... }` | Must declare exactly 4 arguments to register as an error catcher. / Phải khai báo đúng 4 tham số để đăng ký làm error catcher. |
| Router Instances | `const router = express.Router()` | Encapsulates feature routes: `app.use('/api/v1', router)`. / Đóng gói route tính năng. |

> **Pipeline Rule / Quy tắc Pipeline:**  
> Middleware order matters strictly. Middlewares declared higher up run before downstream ones. If a middleware neither sends a response (`res.json()`) nor invokes `next()`, the connection will hang indefinitely.  
>  
> Thứ tự middleware rất quan trọng. Middleware khai báo phía trên chạy trước các middleware phía dưới. Nếu một middleware không gửi response (`res.json()`) cũng không gọi `next()`, kết nối sẽ treo vô thời hạn.

---

# 02. Getting Started with Express
## Bắt đầu với Express

**English:**  
Writing raw HTTP servers with `node:http` requires manual URL parsing, regex path matching, chunked stream buffering, and boilerplate header setting. Express abstracts this complexity with a high-performance routing engine and a composable middleware chain.

**Tiếng Việt:**  
Viết HTTP server thô với `node:http` đòi hỏi parse URL thủ công, khớp path bằng regex, buffer stream chunked, và thiết lập header boilerplate. Express trừu tượng hóa sự phức tạp này bằng engine routing hiệu năng cao và chuỗi middleware có thể kết hợp.

### Abstraction Layer: Node.js Core vs Express.js
### Lớp trừu tượng: Node.js Core vs Express.js

| Raw Node.js (`node:http`) | Express.js (Framework) |
|---------------------------|------------------------|
| Manual buffer concatenation for body parsing | Built-in `express.json()` populates `req.body` |
| Complex nested if/else or regex route dispatchers | Declarative verbs: `app.get()`, `app.post()` |
| Explicit `res.setHeader()` and manual MIME mapping | Automatic JSON headers & serializing via `res.json()` |
| No built-in modular sub-routing or middleware | Composable middleware architecture with `next()` |

| Raw Node.js (tiếng Việt) | Express.js (tiếng Việt) |
|-------------------------|------------------------|
| Ghép buffer thủ công để parse body | `express.json()` tự động điền `req.body` |
| Dispatcher route if/else hoặc regex phức tạp | Verb khai báo: `app.get()`, `app.post()` |
| `res.setHeader()` tường minh + map MIME thủ công | Header JSON + serialize tự động qua `res.json()` |
| Không có sub-routing mô-đun hay middleware tích hợp | Kiến trúc middleware kết hợp với `next()` |

### Step 1: Installation & Setup
### Bước 1: Cài đặt & Thiết lập

```bash
# 1. Initialize project manifest (package.json)
# 1. Khởi tạo package.json
$ npm init -y

# 2. Install Express production dependency
# 2. Cài Express dependency production
$ npm install express
```

### Step 2: Creating Your First Express Server
### Bước 2: Tạo Server Express đầu tiên

```javascript
import express from 'express';

const app = express();
const PORT = 5000;

// Define a root GET route
// Định nghĩa route GET gốc
app.get('/', (req, res) => {
  res.send('Welcome to Express.js Backend!');
});

// Bind to TCP port
// Bind vào cổng TCP
app.listen(PORT, () => {
  console.log(`Express server live at http://localhost:${PORT}`);
});
```

> **Under the Hood / Dưới nắp ca-pô:**  
> The `app` object is actually a JavaScript function passed as the request listener to Node's native `http.createServer(app)`. Invoking `app.listen()` is syntactic sugar that starts a native Node HTTP server behind the scenes.  
>  
> Đối tượng `app` thực chất là một hàm JavaScript được truyền làm request listener cho `http.createServer(app)` của Node. Gọi `app.listen()` là cú pháp đường dẫn bắt đầu native Node HTTP server.

---

# 03. Routing & Parameters
## Routing & Parameters

**English:**  
Routing determines how an application responds to a client request for a particular endpoint (URI path and HTTP method). Express provides dynamic path matching through Route Parameters and auto-parsed Query Strings.

**Tiếng Việt:**  
Routing quyết định cách ứng dụng phản hồi yêu cầu client cho một endpoint cụ thể (URI path + HTTP method). Express cung cấp khớp path động qua Route Parameters và Query Strings được parse tự động.

### URI Parameter Breakdown: Path vs Query String
### Phân tích tham số URI: Path vs Query String

```
https://api.site.com/api/v1/users/:userId/orders?status=shipped&limit=10
```

| Route Parameter (`req.params`) | Query Parameter (`req.query`) |
|--------------------------------|-------------------------------|
| Path placeholder denoted by a colon (`:param`). Identifies specific hierarchical resources. | Key-value pairs after the question mark (`?`). Used for filtering, sorting, and pagination. |
| `req.params.userId === '42'` | `req.query.status === 'shipped'` |
| **Tiếng Việt:** Placeholder path được ký hiệu bằng dấu hai chấm (`:param`). Xác định tài nguyên phân cấp cụ thể. | **Tiếng Việt:** Cặp key-value sau dấu hỏi (`?`). Dùng để lọc, sắp xếp và phân trang. |

### Implementation: Dynamic Routes & Filtering
### Triển khai: Route động & Lọc

```javascript
import express from 'express';
const app = express();

// 1. Route Parameters (:category, :productId)
app.get('/shop/:category/:productId', (req, res) => {
  const { category, productId } = req.params;
  res.json({ category, productId });
});

// 2. Query Parameters (?search=phone&limit=5)
app.get('/products', (req, res) => {
  const search = req.query.search || '';
  const limit = parseInt(req.query.limit) || 10;
  res.json({ filter: search, pageSize: limit });
});

// 3. Route-level Chaining via app.route()
app.route('/api/items')
  .get((req, res) => res.send('Fetch all items'))
  .post((req, res) => res.status(201).send('Create item'));
```

> **Data Type Reminder / Nhắc nhở kiểu dữ liệu:**  
> Values on `req.params` and `req.query` are always parsed as **strings**. If you expect a number (like an ID or page limit), remember to convert it using `Number(req.params.id)` or `parseInt()`.  
>  
> Giá trị trên `req.params` và `req.query` luôn được parse thành **chuỗi**. Nếu bạn cần số (như ID hoặc page limit), hãy chuyển đổi bằng `Number(req.params.id)` hoặc `parseInt()`.

---

# 04. Request & Response
## Request & Response

**English:**  
Express decorates Node's native `http.IncomingMessage` and `http.ServerResponse` objects with high-level utility helpers, avoiding manual serialization and header computation.

**Tiếng Việt:**  
Express trang trí các đối tượng `http.IncomingMessage` và `http.ServerResponse` gốc của Node bằng các helper tiện ích cấp cao, tránh serialize và tính toán header thủ công.

### Extended Request Object (`req`)
### Đối tượng Request mở rộng (`req`)

| Property / Method | English | Tiếng Việt |
|-------------------|---------|------------|
| `req.body` | Parsed payload from JSON/URL-encoded parser | Payload đã parse từ JSON/URL-encoded |
| `req.params` | Named dynamic route parameters object | Object tham số route động có tên |
| `req.query` | Key-value query string parameters | Tham số query string key-value |
| `req.get(header)` | Case-insensitive request header lookup | Tra cứu header không phân biệt hoa thường |
| `req.ip` | Remote client IP address | Địa chỉ IP client từ xa |
| `req.originalUrl` | Full inbound URL path including query | URL path đầy đủ bao gồm query |

### Extended Response Object (`res`)
### Đối tượng Response mở rộng (`res`)

| Method | English | Tiếng Việt |
|--------|---------|------------|
| `res.json(obj)` | Serializes JSON & sets Content-Type header | Serialize JSON & set header Content-Type |
| `res.status(code)` | Chainable HTTP status setter | Setter status HTTP có thể chain |
| `res.send(data)` | Sends strings, HTML, or Buffers automatically | Gửi string, HTML hoặc Buffer tự động |
| `res.redirect(url)` | Issues a 302 redirect to another URL | Phát 302 redirect sang URL khác |
| `res.sendStatus(n)` | Sets status code and sends its text string | Set status code và gửi text status |
| `res.set(k, v)` | Sets HTTP response header fields | Set các trường header HTTP response |

### Sending Responses: SEND vs JSON
### Gửi Response: SEND vs JSON

```javascript
// 1. res.json() explicitly stringifies objects and applies application/json
app.get('/api/user', (req, res) => {
  res.status(200).json({ id: 1, name: 'CoderMind' });
});

// 2. res.sendStatus() sets status and returns standard HTTP status text
app.delete('/api/session', (req, res) => {
  res.sendStatus(204); // Sends 204 "No Content"
});
```

> **Method Chaining / Method Chaining:**  
> Express response methods are chainable. Writing `res.status(201).json({ created: true })` sets the status code and emits the serialized response body in a single expression.  
>  
> Các method response của Express có thể chain. Viết `res.status(201).json({ created: true })` vừa set status code vừa emit body response đã serialize trong một biểu thức.

---

# 05. Custom Middleware
## Custom Middleware

**English:**  
Middleware functions have access to the `req` object, `res` object, and the `next` function in the application's request-response cycle. They can run code, mutate request objects, terminate requests, or pass control down the chain.

**Tiếng Việt:**  
Hàm Middleware có quyền truy cập vào đối tượng `req`, `res` và hàm `next` trong chu kỳ request-response của ứng dụng. Chúng có thể chạy code, thay đổi đối tượng request, kết thúc request, hoặc chuyển quyền điều khiển xuống chuỗi.

### The Sequential `next()` Invocation Chain
### Chuỗi gọi `next()` tuần tự

```
HTTP Request → Middleware 1 (Logger / Timer) next() → Middleware 2 (Auth Token Guard) next() → Route Handler (res.json())
```

### Practical Implementation: Request Logger & Auth Guard
### Triển khai thực tế: Request Logger & Auth Guard

```javascript
import express from 'express';
const app = express();

// 1. Global Logging Middleware (Runs on every request)
// 1. Global Logging Middleware (Chạy trên mọi request)
const requestLogger = (req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${req.method}] ${req.url} - ${res.statusCode} (${duration}ms)`);
  });
  next(); // Forward to next middleware in stack
};
app.use(requestLogger);

// 2. Route-Specific Protection Middleware
// 2. Middleware bảo vệ theo route
const requireApiKey = (req, res, next) => {
  const apiKey = req.get('x-api-key');
  if (apiKey !== 'secret-123') {
    return res.status(401).json({ error: 'Unauthorized: Invalid API Key' });
  }
  next();
};

// Mount middleware directly onto protected route
// Mount middleware trực tiếp lên route được bảo vệ
app.get('/api/admin', requireApiKey, (req, res) => {
  res.json({ data: 'Confidential Admin Access' });
});
```

> **The Hanging Request Trap / Bẫy Request treo:**  
> If a middleware function neither sends a response (e.g. `res.send()`) nor invokes `next()`, the request will hang indefinitely until client timeout. Always ensure one of the two actions occurs.  
>  
> Nếu hàm middleware không gửi response (ví dụ `res.send()`) cũng không gọi `next()`, request sẽ treo vô thời hạn cho đến khi client timeout. Luôn đảm bảo một trong hai hành động xảy ra.

---

# 06. Built-in Middleware
## Built-in Middleware

**English:**  
Express bundles three essential built-in middleware functions based on body-parser and serve-static. These eliminate the need for third-party packages for basic JSON parsing and asset hosting.

**Tiếng Việt:**  
Express đóng gói ba hàm middleware tích hợp thiết yếu dựa trên body-parser và serve-static. Chúng loại bỏ nhu cầu package bên thứ ba cho parse JSON cơ bản và host tài nguyên tĩnh.

| Middleware | English | Tiếng Việt |
|------------|---------|------------|
| `express.json()` | Parses inbound requests with `Content-Type: application/json` and attaches the parsed JS object to `req.body`. | Parse request inbound với `Content-Type: application/json` và gắn object JS đã parse vào `req.body`. |
| `express.urlencoded()` | Parses traditional HTML form submissions (`application/x-www-form-urlencoded`) into `req.body`. | Parse form HTML truyền thống vào `req.body`. |
| `express.static()` | Serves static assets directly (HTML files, CSS stylesheets, images, client JS scripts) from a directory. | Serve tài nguyên tĩnh trực tiếp (HTML, CSS, images, client JS) từ một thư mục. |

### Static Asset Hosting Architecture
### Kiến trúc host tài nguyên tĩnh

```javascript
import express from 'express';
import path from 'node:path';
const app = express();

// 1. Enable automated JSON & Form parsing
// 1. Bật parse JSON & Form tự động
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

// 2. Mount static folder with virtual path prefix
// 2. Mount thư mục static với virtual path prefix
// GET /static/logo.png → serves ./public/logo.png
app.use('/static', express.static(path.join(process.cwd(), 'public')));

// POST endpoint receiving parsed JSON body directly
// POST endpoint nhận JSON body đã parse trực tiếp
app.post('/api/users', (req, res) => {
  const newUser = req.body; // Populated by express.json()
  res.status(201).json({ success: true, user: newUser });
});
```

> **Payload Limits / Giới hạn Payload:**  
> Always define an explicit size limit when using `express.json({ limit: '100kb' })`. Without a limit, malicious actors can send multi-megabyte payloads to exhaust system memory.  
>  
> Luôn định nghĩa giới hạn kích thước rõ ràng khi dùng `express.json({ limit: '100kb' })`. Không có giới hạn, kẻ xấu có thể gửi payload nhiều megabyte để làm cạn bộ nhớ hệ thống.

---

# 07. Error-Handling Middleware
## Error-Handling Middleware

**English:**  
Error-handling middleware functions in Express are defined with **exactly four arguments**: `(err, req, res, next)`. Express uses function arity (`fn.length === 4`) to distinguish error handlers from standard middleware.

**Tiếng Việt:**  
Hàm middleware xử lý lỗi trong Express được định nghĩa với **đúng bốn tham số**: `(err, req, res, next)`. Express dùng arity hàm (`fn.length === 4`) để phân biệt error handler với middleware chuẩn.

### Error Propagation Flow
### Luồng lan truyền lỗi

```
Route Handler next(err) → Next Routes (skipped automatically) → Global Error Handler (err, req, res, next)
```

### Centralized Error Handler Implementation
### Triển khai Error Handler tập trung

```javascript
import express from 'express';
const app = express();

// Route throwing a synchronous or asynchronous error
// Route ném lỗi đồng bộ hoặc bất đồng bộ
app.get('/api/data', (req, res, next) => {
  const failure = true;
  if (failure) {
    const error = new Error('Database connection failed');
    error.status = 503;
    return next(error); // Forward to error handler
  }
  res.json({ ok: true });
});

// 404 Catch-all handler for undefined routes
// 404 Catch-all handler cho route không xác định
app.use((req, res, next) => {
  res.status(404).json({ error: 'Endpoint Not Found' });
});

// Global Error Handler (MUST have 4 arguments!)
// Global Error Handler (PHẢI có 4 tham số!)
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  console.error(`[ERROR ${statusCode}]:`, err.message);
  res.status(statusCode).json({
    success: false,
    error: err.message || 'Internal Server Error'
  });
});
```

> **Placement Requirement / Yêu cầu vị trí:**  
> The error-handling middleware must be placed **after all `app.use()` and route definitions** at the very bottom of your application file. If defined before a route, it cannot catch errors thrown inside that route.  
>  
> Error-handling middleware phải được đặt **sau tất cả `app.use()` và định nghĩa route** ở cuối cùng của file ứng dụng. Nếu định nghĩa trước một route, nó không thể bắt lỗi ném bên trong route đó.

---

# 08. Modular express.Router
## Modular express.Router

**English:**  
As backend applications scale, keeping all routes inside a single `server.js` creates an unmaintainable monolith. `express.Router()` acts as an isolated mini-instance of an Express app capable of handling middleware and routing on a dedicated sub-path.

**Tiếng Việt:**  
Khi backend scale, giữ tất cả route trong một file `server.js` tạo ra monolith khó bảo trì. `express.Router()` hoạt động như một mini-instance cô lập của Express app, có khả năng xử lý middleware và routing trên một sub-path dành riêng.

### Modular Production Directory Layout
### Bố cục thư mục Production mô-đun

```
src/
  routes/
    users.routes.js
    products.routes.js
  middleware/
    auth.js
  app.js (Main Entry)
```

**Prefix Separation / Tách Prefix:**  
Routers isolate feature endpoints. In `users.routes.js`, paths are defined relative to their mount root (e.g. `/` and `/:id`). `app.js` mounts them with a common path prefix: `/api/users`.  

Router cô lập endpoint theo tính năng. Trong `users.routes.js`, path được định nghĩa tương đối với mount root (ví dụ `/` và `/:id`). `app.js` mount chúng với prefix path chung: `/api/users`.

```javascript
// src/routes/users.routes.js
import { Router } from 'express';
const router = Router();

// Matches GET /api/users
router.get('/', (req, res) => {
  res.json([{ id: 1, user: 'Alice' }]);
});

// Matches GET /api/users/:id
router.get('/:id', (req, res) => {
  res.json({ id: req.params.id });
});

export default router;

// src/app.js (Mounting Point)
import express from 'express';
import userRoutes from './routes/users.routes.js';

const app = express();
app.use(express.json());

// Mount sub-router under base prefix
app.use('/api/users', userRoutes);

app.listen(5000, () => {
  console.log('API Online on Port 5000');
});
```

---

# 09. REST API Development
## REST API Development

**English:**  
REST (Representational State Transfer) is a stateless, resource-oriented architectural style for distributed systems. It maps standard HTTP methods directly to database CRUD operations, relying on uniform URIs, standard status codes, and consistent payload structures.

**Tiếng Việt:**  
REST (Representational State Transfer) là phong cách kiến trúc không trạng thái, hướng tài nguyên cho hệ thống phân tán. Nó ánh xạ method HTTP chuẩn trực tiếp tới thao tác database CRUD, dựa vào URI thống nhất, status code chuẩn, và cấu trúc payload nhất quán.

### RESTful CRUD Mapping & Convention Matrix
### Ma trận ánh xạ RESTful CRUD & Quy ước

| CRUD | HTTP Method | Resource Endpoint | Success Status | Operational Semantic / Ý nghĩa vận hành |
|------|-------------|-------------------|----------------|-----------------------------------------|
| Create | POST | `/api/v1/users` | 201 Created | Creates new user with payload in `req.body` / Tạo user mới với payload trong `req.body` |
| Read | GET | `/api/v1/users/:id` | 200 OK | Retrieves specific user or collection if `:id` omitted / Lấy user cụ thể hoặc collection nếu bỏ `:id` |
| Update | PUT | `/api/v1/users/:id` | 200 / 204 | Completely replaces existing user object / Thay thế hoàn toàn object user hiện có |
| Modify | PATCH | `/api/v1/users/:id` | 200 OK | Applies partial field modifications (e.g. email change) / Áp dụng thay đổi trường một phần |
| Delete | DELETE | `/api/v1/users/:id` | 204 No Content | Removes resource permanently from storage / Xóa vĩnh viễn resource khỏi storage |

> **Predictable Response Contract / Hợp đồng Response dự đoán được:**  
> Production REST APIs standardize output shapes: success returns `{ "success": true, "data": { ... } }`, while errors return `{ "success": false, "error": { "code": "USER_NOT_FOUND", "message": "..." } }` with the corresponding 4xx/5xx HTTP status code.  
>  
> REST API production chuẩn hóa hình dạng output: thành công trả về `{ "success": true, "data": { ... } }`, trong khi lỗi trả về `{ "success": false, "error": { "code": "USER_NOT_FOUND", "message": "..." } }` với status code 4xx/5xx tương ứng.

---

# 10. REST Architecture
## REST Architecture

**English:**  
Coined by Roy Fielding in his 2000 doctoral dissertation, REST (Representational State Transfer) is not a protocol, language, or library. It is an architectural design paradigm composed of six strict structural constraints that govern scalable, decoupled web communications.

**Tiếng Việt:**  
Được đặt tên bởi Roy Fielding trong luận án tiến sĩ năm 2000, REST (Representational State Transfer) không phải protocol, ngôn ngữ hay thư viện. Nó là mô hình thiết kế kiến trúc gồm sáu ràng buộc cấu trúc nghiêm ngặt điều khiển giao tiếp web có khả năng scale và tách rời.

### The 6 Core Architectural Constraints of Fielding REST
### 6 ràng buộc kiến trúc cốt lõi của Fielding REST

| # | Constraint | English | Tiếng Việt |
|---|------------|---------|------------|
| 1 | **Client-Server** | Separates UI concerns from data persistence. Frontends and backends evolve completely independently. | Tách biệt concern UI khỏi persistence dữ liệu. Frontend và backend tiến hóa hoàn toàn độc lập. |
| 2 | **Statelessness** | No client session state is retained on the server. Every request carries its own full authentication context. | Không giữ trạng thái session client trên server. Mọi request mang theo đầy đủ context authentication. |
| 3 | **Cacheable** | Responses must explicitly declare themselves cacheable or non-cacheable using HTTP headers to reduce traffic. | Response phải khai báo rõ ràng cacheable hoặc non-cacheable bằng HTTP header để giảm traffic. |
| 4 | **Uniform Interface** | Standard HTTP methods (GET, POST, etc.) operate uniformly on plural noun URIs with hypermedia link controls. | Method HTTP chuẩn hoạt động thống nhất trên URI danh từ số nhiều với hypermedia link. |
| 5 | **Layered System** | The client cannot tell if it is connected directly to the application server or to an intermediate proxy or CDN. | Client không thể biết mình kết nối trực tiếp đến application server hay qua proxy/CDN trung gian. |
| 6 | **Code on Demand** | Optional capability where servers transfer executable scripts (e.g. client JavaScript) to extend client capabilities. | Khả năng tùy chọn nơi server chuyển script thực thi (ví dụ client JS) để mở rộng khả năng client. |

### Resource URI Naming Conventions
### Quy ước đặt tên Resource URI

| Anti-Pattern (Bad) | RESTful Standard (Good) | Underlying Architectural Rule / Quy tắc nền tảng |
|--------------------|-------------------------|--------------------------------------------------|
| `GET /getAllUsers` | `GET /users` | Use nouns, never verbs. The HTTP method provides the action. / Dùng danh từ, không dùng động từ. |
| `POST /createUser` | `POST /users` | POST implies record creation on the plural resource collection. / POST ngụ ý tạo bản ghi trên collection số nhiều. |
| `POST /deleteUser?id=4` | `DELETE /users/4` | Leverage standard HTTP verbs and hierarchical resource paths. / Tận dụng verb HTTP chuẩn và path phân cấp. |
| `GET /userOrders/4` | `GET /users/4/orders` | Model real-world ownership hierarchies using nested resource paths. / Mô hình hóa hệ thống sở hữu thực tế bằng path lồng nhau. |

> **Statelessness in Practice / Statelessness trong thực tế:**  
> Do not store user authorization states in server RAM. Use stateless tokens such as **JSON Web Tokens (JWT)** transmitted via the `Authorization: Bearer <token>` header so any backend instance in a cluster can process any request.  
>  
> Không lưu trạng thái authorization user trong RAM server. Dùng token không trạng thái như **JSON Web Tokens (JWT)** truyền qua header `Authorization: Bearer <token>` để bất kỳ instance backend nào trong cluster cũng có thể xử lý bất kỳ request nào.

---

# 11. GET & POST APIs
## GET & POST APIs

**English:**  
GET endpoints retrieve resource representations without altering server state (safe and idempotent). POST endpoints receive inbound body payloads to create new subordinate entities, returning an assigned identity and HTTP status code **201 Created**.

**Tiếng Việt:**  
Endpoint GET lấy representation resource mà không thay đổi trạng thái server (safe và idempotent). Endpoint POST nhận payload body inbound để tạo entity phụ thuộc mới, trả về identity được gán và status code **201 Created**.

```javascript
import express from 'express';
const app = express();
app.use(express.json());

// In-memory dataset simulating persistence
// Dataset in-memory mô phỏng persistence
let users = [
  { id: 1, name: 'Harry', role: 'Admin' },
  { id: 2, name: 'Ron', role: 'User' }
];

// 1. GET /api/v1/users (Fetch Collection with Filtering)
app.get('/api/v1/users', (req, res) => {
  const { role } = req.query;
  let result = users;
  if (role) {
    result = users.filter(u => u.role.toLowerCase() === role.toLowerCase());
  }
  res.status(200).json({ success: true, count: result.length, data: result });
});

// 2. GET /api/v1/users/:id (Fetch Single Entity by ID)
app.get('/api/v1/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({
      success: false,
      error: { code: 'NOT_FOUND', message: 'User does not exist' }
    });
  }
  res.status(200).json({ success: true, data: user });
});

// 3. POST /api/v1/users (Create Subordinate Entity)
app.post('/api/v1/users', (req, res) => {
  const { name, role } = req.body;
  if (!name || !role) {
    return res.status(400).json({
      success: false,
      error: { code: 'VALIDATION_ERROR', message: 'Name and Role are required' }
    });
  }
  const newUser = { id: users.length + 1, name, role };
  users.push(newUser);
  res.status(201).json({ success: true, data: newUser });
});
```

| Concept | English | Tiếng Việt |
|---------|---------|------------|
| **Idempotence of GET** | Invoking `GET /users` ten times produces the exact same side-effects as calling it once: zero data modifications occur on the server. | Gọi `GET /users` mười lần tạo ra cùng side-effect như gọi một lần: không có sửa đổi dữ liệu nào xảy ra trên server. |
| **POST Non-Idempotence** | Submitting `POST /users` five consecutive times creates five separate user records with distinct IDs unless an idempotency key is supplied. | Gửi `POST /users` năm lần liên tiếp tạo năm bản ghi user riêng biệt với ID khác nhau trừ khi cung cấp idempotency key. |

---

# 12. PUT, PATCH & DELETE
## PUT, PATCH & DELETE

**English:**  
Updating and removing data requires strict adherence to HTTP semantics. **PUT** completely replaces a target record, **PATCH** applies partial differential updates to specific fields, and **DELETE** removes the resource.

**Tiếng Việt:**  
Cập nhật và xóa dữ liệu đòi hỏi tuân thủ nghiêm ngặt ngữ nghĩa HTTP. **PUT** thay thế hoàn toàn bản ghi đích, **PATCH** áp dụng cập nhật chênh lệch một phần cho các trường cụ thể, và **DELETE** xóa resource.

```javascript
// 1. PUT /api/v1/users/:id (Complete Replacement - Idempotent)
app.put('/api/v1/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'User Not Found' });
  }
  const { name, role } = req.body;
  if (!name || !role) {
    return res.status(400).json({ error: 'PUT requires all fields for total replacement' });
  }
  users[index] = { id, name, role }; // Completely replaces object
  res.status(200).json({ success: true, data: users[index] });
});

// 2. PATCH /api/v1/users/:id (Partial Modification)
app.patch('/api/v1/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ error: 'User Not Found' });
  }
  // Selectively apply only provided fields
  if (req.body.name) user.name = req.body.name;
  if (req.body.role) user.role = req.body.role;
  res.status(200).json({ success: true, data: user });
});

// 3. DELETE /api/v1/users/:id (Removal - Idempotent)
app.delete('/api/v1/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'User Not Found' });
  }
  users.splice(index, 1);
  res.status(204).send(); // 204 No Content has no body
});
```

### PUT vs PATCH Operational Mechanics
### Cơ chế vận hành PUT vs PATCH

| PUT (Total Replacement) | PATCH (Delta Patching) |
|-------------------------|------------------------|
| If an entity has fields `{ name, email, age }` and a PUT request supplies only `{ name }`, the missing fields are cleared or reset to defaults. | Submitting `{ email: 'new@site.com' }` modifies only the email property. All other properties (name, age) remain completely intact on the record. |
| **Tiếng Việt:** Nếu entity có trường `{ name, email, age }` và request PUT chỉ cung cấp `{ name }`, các trường còn thiếu sẽ bị xóa hoặc reset về mặc định. | **Tiếng Việt:** Gửi `{ email: 'new@site.com' }` chỉ sửa thuộc tính email. Tất cả thuộc tính khác (name, age) vẫn giữ nguyên hoàn toàn trên bản ghi. |

---

# 13. Request Validation
## Request Validation (với Zod)

**English:**  
Never trust client input. Writing manual `if (!req.body.name)` statements across dozens of endpoints leads to fragile boilerplate. Production REST backends validate inbound bodies, params, and queries using declarative schema validators like **Zod**.

**Tiếng Việt:**  
Không bao giờ tin tưởng input từ client. Viết thủ công các câu lệnh `if (!req.body.name)` trên hàng chục endpoint dẫn đến boilerplate mong manh. Backend REST production validate body, params và query inbound bằng declarative schema validator như **Zod**.

### The Schema Validation Interceptor Pipeline
### Pipeline interceptor validation schema

```
HTTP Request (Unverified raw payload)
        ↓
Validation Middleware (schema.parse(req.body))
        ↓
Route Handler (Type-safe clean data)   OR   400 Bad Request (Descriptive error issues)
```

### Reusable Validation Middleware with Zod
### Reusable Validation Middleware với Zod

```javascript
import { z } from 'zod';

// 1. Reusable Validation Factory Middleware
export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse({
    body: req.body,
    query: req.query,
    params: req.params
  });

  if (!result.success) {
    return res.status(400).json({
      success: false,
      error: {
        code: 'VALIDATION_ERROR',
        issues: result.error.errors.map(e => ({
          field: e.path[1], message: e.message
        }))
      }
    });
  }
  req.validated = result.data;
  next();
};

// 2. Declare Endpoint Validation Schema
const CreateUserSchema = z.object({
  body: z.object({
    email: z.string().email('Must be a valid email format'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    age: z.number().int().positive().optional()
  })
});

// 3. Mount as Guard on Route
app.post('/api/v1/users', validate(CreateUserSchema), (req, res) => {
  res.status(201).json({ success: true, user: req.validated.body });
});
```

> **Fail Fast Principle / Nguyên tắc Fail Fast:**  
> Validation middleware should execute before any database query or computational logic runs. If a request has malformed types or missing fields, terminate it immediately with an informative **400 Bad Request**.  
>  
> Validation middleware nên thực thi trước bất kỳ database query hoặc logic tính toán nào. Nếu request có kiểu sai hoặc thiếu trường, kết thúc ngay với **400 Bad Request** có thông tin.

---

# 14. Versioning & Response Shapes
## Versioning & Response Shapes

**English:**  
Production APIs require consistency and backward compatibility. Using a uniform **Response Envelope** standardizes client parsing, while a clear **Versioning Strategy** ensures new releases don't break existing mobile apps or third-party consumers.

**Tiếng Việt:**  
API production đòi hỏi tính nhất quán và tương thích ngược. Dùng **Response Envelope** thống nhất chuẩn hóa việc parse phía client, trong khi chiến lược **Versioning** rõ ràng đảm bảo release mới không phá vỡ mobile app hiện có hoặc consumer bên thứ ba.

### Standard JSend Response Envelopes
### Response Envelope JSend chuẩn

**Success Response (200 / 201):**
```json
{
  "success": true,
  "data": {
    "id": 101,
    "email": "dev@site.com"
  },
  "meta": {
    "timestamp": "2026-09-13T09:19:30Z"
  }
}
```

**Error Response (4xx / 5xx):**
```json
{
  "success": false,
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "No user with ID 101",
    "details": []
  }
}
```

### Comparing 3 API Versioning Strategies
### So sánh 3 chiến lược Versioning API

| Strategy | Transmission Pattern | Industry Tradeoffs / Tradeoff ngành |
|----------|----------------------|-------------------------------------|
| **URI Path Versioning** | `/api/v1/users` | Industry standard: highly visible, simple to cache, and straightforward to route. / Chuẩn ngành: dễ thấy, dễ cache, routing đơn giản. |
| **Custom Header** | `X-API-Version: 2` | Keeps URLs clean, but is harder to test in standard browsers without specialized tooling. / Giữ URI sạch, nhưng khó test trên browser chuẩn. |
| **Accept Header (MIME)** | `Accept: application/vnd.v2+json` | Strictly follows REST academic theory, but adds complexity to proxies and caching layers. / Tuân thủ nghiêm lý thuyết REST, nhưng tăng độ phức tạp cho proxy và caching. |

```javascript
import express from 'express';
import v1Router from './routes/v1/index.js';
import v2Router from './routes/v2/index.js';

const app = express();

// Mount distinct API versions simultaneously
// Mount các phiên bản API riêng biệt đồng thời
app.use('/api/v1', v1Router); // Legacy client endpoints
app.use('/api/v2', v2Router); // Next-generation endpoints
```

---

# Kết thúc Handbook / End of Handbook

Bạn đã hoàn thành toàn bộ **Express.js Handbook**. Từ kiến trúc cốt lõi, middleware pipeline, routing động, xử lý lỗi tập trung, modular router, REST API đầy đủ CRUD, validation với Zod, đến versioning API — bạn đã có nền tảng vững chắc để xây dựng backend Node.js cấp production.

You have completed the entire **Express.js Handbook**. From core architecture, middleware pipeline, dynamic routing, centralized error handling, modular router, full CRUD REST APIs, Zod validation, to API versioning — you now have a solid foundation to build production-grade Node.js backends.

---

*Bản dịch tiếng Việt được thực hiện trung thực từ handbook gốc của CoderMind.*  
*Code examples được giữ nguyên tiếng Anh để dễ copy-paste và tương thích với documentation chính thức.*

**By CoderMind** · *Fast & Minimalist · Production Grade*
