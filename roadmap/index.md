# Lộ trình 16 Stage (Roadmap)

>Lộ trình học tập được chia thành 4 Tầng phát triển năng lực rõ rệt. Mỗi Stage xây dựng một mảnh ghép năng lực chuyên sâu của một kỹ sư frontend cao cấp.

## TẦNG I — JAVASCRIPT CORE
*Tập trung thiết lập mental model chính xác về mô hình thực thi của ngôn ngữ và máy ảo.*

### Stage 0: Language Foundation
::: details Chi tiết
* **Năng lực phát triển**: Loại bỏ hoàn toàn các nhận định sai về cú pháp và ngữ nghĩa JavaScript. Hiểu rõ sự khác biệt giữa đặc tả ECMAScript và môi trường Host (Browser/Node.js). Phân biệt rạch ròi giữa Binding, Value, Mutation và Shallow Copy.
* **Dự án**: **P0 — CLI Data Processor** (Xử lý, lọc và thống kê dữ liệu lớn từ file JSON sử dụng hàm thuần khiết).
:::

### Stage 1: JavaScript Execution Model
::: details Chi tiết
* **Năng lực phát triển**: Khả năng mô phỏng hoạt động của Engine trong đầu. Giải thích cặn kẽ cách Lexical Environment được tạo ra, cơ chế giải quyết biến (Variable Resolution), TDZ (Temporal Dead Zone), và vòng đời của Closure.
* **Dự án**: **P1 — Mini Module System** (Tự dựng hệ thống nạp module độc lập bảo mật dữ liệu nhờ closure).
:::

### Stage 2: Object Model & Advanced JS
::: details Chi tiết
* **Năng lực phát triển**: Thấu hiểu hệ thống hướng đối tượng dựa trên Prototype thực sự của JS. Làm chủ 6 quy tắc xác định `this` context, can thiệp hành vi đối tượng qua Proxy/Reflect, và sử dụng Generator để kiểm soát luồng lặp.
* **Dự án**: **P2 — Mini Object Framework** (Xây dựng thư viện khai báo đối tượng tự động xác thực thuộc tính bằng Proxy).
:::

### Stage 3: Asynchronous JavaScript & Concurrency
::: details Chi tiết
* **Năng lực phát triển**: Làm chủ lập trình bất đồng bộ. Hiểu sâu cơ chế Microtask queue, Event Loop của trình duyệt, các trạng thái Promise, kỹ thuật hủy tác vụ (AbortController), và xử lý Race Condition khi gọi API đồng thời.
* **Dự án**: **P3 — Production Search Engine** (Bộ máy tìm kiếm thời gian thực tích hợp Debounce, Request Cancellation, Cache và Retry).
:::


## TẦNG II — WEB PLATFORM
*Đưa code chạy trong môi trường trình duyệt thực tế và tương tác qua mạng.*

### Stage 4: Browser Runtime & Web Platform
::: details Chi tiết
* **Năng lực phát triển**: Hiểu trình duyệt như một hệ điều hành thu nhỏ. Làm chủ luồng Rendering Pipeline (DOM -> CSSOM -> Layout -> Paint -> Composite), tối ưu hóa luồng Render với rAF/rIC, quản lý luồng phụ Web Workers và lưu trữ IndexedDB.
* **Dự án**: **P4 — High-performance Browser App** (Ứng dụng hiển thị danh sách vô tận mượt mà kết hợp Web Worker tính toán ngầm và IndexedDB).
:::

### Stage 5: Network & Web Platform
::: details Chi tiết
* **Năng lực phát triển**: Nhìn nhận ứng dụng khách như một nút trong hệ thống phân tán. Làm chủ HTTP/2, HTTP/3, cơ chế CORS, chính sách Same-Origin, các tầng Cache-Control, kỹ thuật phân trang Cursor và giao tiếp thời gian thực WebSockets/SSE.
* **Dự án**: **P5 — Network-aware Application** (Hệ thống đồng bộ dữ liệu thông minh hỗ trợ kết nối yếu, tự động xếp hàng và khôi phục khi offline).
:::

### Stage 6: TypeScript Engineering
::: details Chi tiết
* **Năng lực phát triển**: Thiết lập hệ thống kiểm soát tĩnh (static safety) chặt chẽ. Thiết kế kiểu dữ liệu nâng cao (Mapped Types, Conditional Types, `infer`), phân biệt an toàn kiểu tĩnh với an toàn runtime, và xác thực dữ liệu qua Zod.
* **Dự án**: **P6 — Typed Domain Library** (Thư viện xử lý nghiệp vụ miền lõi được định kiểu an toàn tuyệt đối và tự động kiểm tra định dạng dữ liệu đầu vào).
:::

### Stage 7: Toolchain & JavaScript Ecosystem
::: details Chi tiết
* **Năng lực phát triển**: Thấu hiểu hành trình của source code từ máy developer đến trình duyệt. Hiểu AST (Abstract Syntax Tree), cơ chế hoạt động của Bundler (Vite, Webpack), kỹ thuật Tree Shaking, Code Splitting và thiết lập monorepo.
* **Dự án**: **P7 — Build System from Zero** (Tự viết một build tool tối giản hỗ trợ biên dịch TS, chia nhỏ chunk, tạo source maps và tích hợp CI pipeline).
:::



## TẦNG III — FRONTEND ENGINEERING
*Làm chủ framework UI và xây dựng ứng dụng quy mô lớn ổn định.*

### Stage 8: React Engineering
::: details Chi tiết
* **Năng lực phát triển**: Hiểu rõ kiến trúc bên trong của React. Làm chủ luồng Reconciliation (cơ chế so khớp cây DOM ảo), mô hình luồng công việc Fiber Node, quản lý vòng đời Hooks và kiến trúc quản lý trạng thái Server State.
* **Dự án**: **P8 — Production SaaS UI** (Xây dựng dashboard SaaS hoàn chỉnh quản lý trạng thái phức tạp, đồng bộ optimistic updates qua TanStack Query).
:::

### Stage 9: Production Frontend
::: details Chi tiết
* **Năng lực phát triển**: Đảm bảo ứng dụng sống tốt trong môi trường người dùng thật. Thiết kế giao diện hỗ trợ người khuyết tật (WCAG/ARIA), xử lý biểu mẫu phức tạp (autosafe/async validation), tối ưu responsive trên thiết bị di động và chiến lược viết test E2E.
* **Dự án**: **P9 — Production E-commerce** (Xây dựng trang thương mại điện tử chuẩn SEO, đạt điểm Lighthouse tối đa, giỏ hàng offline và bộ test E2E phủ mọi luồng thanh toán).
:::

### Stage 10: Next.js & Full-stack Frontend
::: details Chi tiết
* **Năng lực phát triển**: Làm chủ các mô hình hiển thị ứng dụng hiện đại (SSR, SSG, ISR, Streaming). Thấu hiểu React Server Components (RSC) vs Client Components, cơ chế cache 4 tầng của Next.js và thiết kế lớp trung gian BFF (Backend-for-Frontend).
* **Dự án**: **P10 — Full-stack SaaS Product** (Sản phẩm SaaS đầy đủ chức năng xác thực, API route bảo mật, cơ chế lưu cache dữ liệu tối ưu trên Next.js).
:::

### Stage 11: Performance, Memory & Security
::: details Chi tiết
* **Năng lực phát triển**: Kỹ năng chuyên sâu của kỹ sư Senior. Phân tích Heap Snapshot để tìm rò rỉ bộ nhớ, tối ưu hóa các chỉ số Core Web Vitals (LCP, INP, CLS), cấu hình CSP bảo mật chống tấn công XSS/CSRF và thiết lập mô hình Threat Modeling.
* **Dự án**: **P11 — Performance & Incident Lab** (Ứng cứu sự cố hiệu năng thực tế: xử lý ứng dụng bị đơ, rò rỉ bộ nhớ sau khi chuyển trang, lỗi bảo mật dữ liệu).
:::



## TẦNG IV — SYSTEM & LEADERSHIP
*Thiết kế hệ thống lớn và vận hành độ tin cậy cấp doanh nghiệp.*

### Stage 12: Frontend Architecture
::: details Chi tiết
* **Năng lực phát triển**: Tổ chức cấu trúc mã nguồn cho hàng chục kỹ sư cùng làm việc. Áp dụng kiến trúc Vertical Slice, xây dựng Design System dùng chung trong Monorepo, thiết lập ranh giới kiến trúc và viết tài liệu ADR/RFC.
* **Dự án**: **P12 — Enterprise Dashboard** (Thiết kế hệ thống monorepo đa ứng dụng chia sẻ chung tài nguyên, phân quyền RBAC và ảo hóa dữ liệu lớn).
:::

### Stage 13: Production & System Engineering
::: details Chi tiết
* **Năng lực phát triển**: Quản lý vòng đời phần mềm sau khi phát hành. Thiết kế chiến lược deploy an toàn (Canary, Feature Flag), giám sát độ tin cậy với OpenTelemetry/Sentry, xử lý khủng hoảng sự cố 2 AM và viết Postmortem.
* **Dự án**: **P13 — Production Incident Simulation** (Nhập vai kỹ sư On-call ứng cứu hệ thống checkout đang bị sập tải, xác định lỗi bằng chỉ số đo lường, rollback an toàn và viết báo cáo lỗi).
:::

### Stage 14: Senior Engineering
::: details Chi tiết
* **Năng lực phát triển**: Ra quyết định dựa trên bối cảnh và ràng buộc. Phân tích và quản lý nợ kỹ thuật (Tech Debt), thiết kế lộ trình refactor mã nguồn lớn không gây gián đoạn (Strangler Pattern) và thực hiện code review chất lượng cao.
* **Dự án**: **P14 — Legacy Migration** (Lập kế hoạch và thực hiện chuyển đổi một hệ thống cũ sang kiến trúc mới qua một lớp tương thích an toàn).
:::

### Stage 15: Staff Engineering Track
::: details Chi tiết
* **Năng lực phát triển**: Tư duy hệ thống dài hạn (Systems Thinking) và dẫn dắt kỹ thuật. Cân nhắc bài toán xây dựng nền tảng vs mua ngoài (Build vs Buy), quy hoạch lộ trình công nghệ 1-3 năm, giải quyết xung đột kỹ thuật và hướng dẫn đồng nghiệp phát triển.
* **Dự án**: **P15 — Staff Architecture Challenge** (Thiết kế giải pháp kiến trúc toàn diện cho hệ thống phục vụ 10 triệu người dùng tích hợp nhiều team phát triển, bảo vệ phương án trước hội đồng kỹ thuật).
:::
