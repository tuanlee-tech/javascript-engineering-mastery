# Bản Xương Sống Năng Lực (Global Competency Matrix)

Hệ thống đào tạo của **JavaScript Engineering Mastery** định vị năng lực học viên dựa trên các chuẩn đo lường đầu ra cụ thể, thay vì chỉ dựa trên số lượng bài học đã hoàn thành.



## 1. Mô Hình Chiều Sâu Nhận Thức (8-Level Depth Model)

Chúng tôi đánh giá năng lực của kỹ sư qua 8 cấp độ hành vi:

* **L1 — Recognize (Nhận biết)**: Biết khái niệm tồn tại, hiểu được thuật ngữ khi nghe đồng nghiệp nói.
* **L2 — Explain (Giải thích)**: Giải thích được nguyên lý, mô hình hoạt động của công nghệ bằng ngôn ngữ tự nhiên hoặc sơ đồ.
* **L3 — Use (Sử dụng)**: Áp dụng cú pháp chính xác để giải quyết các bài toán lập trình tiêu chuẩn.
* **L4 — Debug (Cô lập lỗi)**: Đọc hiểu stack trace, sử dụng profiler/devtools để cô lập lỗi, tìm ra nguyên nhân gốc rễ (root cause) và sửa lỗi.
* **L5 — Implement (Tái tạo)**: Tự viết lại phiên bản thu gọn (mini/simplified version) của công cụ/thư viện để chứng minh sự hiểu biết tuyệt đối (ví dụ: tự viết Promise, tự viết custom bundler).
* **L6 — Design (Thiết kế)**: Xây dựng giải pháp kỹ thuật mới, thiết kế API, cấu trúc thư mục, luồng dữ liệu cho một tính năng lớn hoặc toàn bộ module.
* **L7 — Judge (Đánh giá)**: Phân tích sâu các giải pháp thay thế, đưa ra trade-offs chi tiết (về RAM, CPU, Network, DX, Maintainability) và bảo vệ quyết định kỹ thuật bằng tài liệu ADR/RFC.
* **L8 — Leverage (Tạo đòn bẩy)**: Thiết lập nền tảng kỹ thuật, quy trình hoạt động hoặc hướng dẫn (mentoring) giúp nâng cao năng suất làm việc của toàn bộ tổ chức hoặc giải quyết các vấn đề liên team.



## 2. Ma Trận Chiều Sâu Năng Lực Toàn Cầu (Global Depth Matrix)

Bảng đối chiếu 17 miền năng lực cốt lõi, thời điểm bắt đầu học (First Introduced), thời điểm học sâu nhất (Peak Learning), và mức độ kỳ vọng đầu ra cho cấp bậc Senior vs Staff:

| Miền Năng Lực | First Introduced | Peak Learning | Senior Target | Staff Target |
| :--- | :---: | :---: | :---: | :---: |
| **JS Language** (Cú pháp, ngữ nghĩa cốt lõi) | Stage 0 | Stage 2 | **L5** | **L6** |
| **JS Runtime** (V8, GC, Call Stack, Scope, Closures) | Stage 1 | Stage 11 | **L6** | **L7** |
| **Async & Concurrency** (Event Loop, Promises, Workers) | Stage 3 | Stage 13 | **L7** | **L7** |
| **Browser Runtime** (Rendering pipeline, Web APIs) | Stage 4 | Stage 11 | **L6** | **L6** |
| **Network & Web Protocol** (HTTP/2/3, Caching, CORS) | Stage 5 | Stage 13 | **L6** | **L7** |
| **TypeScript** (Static typing, Generics, Type gymnastics) | Stage 6 | Stage 12 | **L6** | **L6** |
| **Toolchain & Build** (ESM/CJS, Bundlers, Monorepos) | Stage 7 | Stage 13 | **L5** | **L7** |
| **React Engineering** (Fiber, Reconciliation, Hooks) | Stage 8 | Stage 12 | **L6** | **L7** |
| **Production Frontend** (Accessibility, Forms, Testing) | Stage 9 | Stage 13 | **L6** | **L7** |
| **Full-stack Frontend** (Next.js SSR/ISR, RSC, BFF) | Stage 10 | Stage 12 | **L6** | **L7** |
| **Performance Diagnosis** (Heap snapshot, INP, CPU profiling) | Stage 4 | Stage 11 | **L7** | **L7** |
| **Security Engineering** (XSS, CSRF, CSP, Threat modeling) | Stage 5 | Stage 11 | **L6** | **L7** |
| **Architecture Design** (Coupling, Boundaries, Patterns) | Stage 8 | Stage 14 | **L7** | **L8** |
| **Reliability Engineering** (Canary, Flags, Observability, Logs) | Stage 9 | Stage 13 | **L7** | **L8** |
| **Engineering Judgment** (Trade-off framing, Debt management) | Stage 8 | Stage 14 | **L7** | **L8** |
| **Technical Leadership** (Influence, Mentoring, Alignment) | Stage 9 | Stage 15 | **L5 / L6** | **L8** |
| **Platform Leverage** (DX, Standardization, Platform strategy) | Stage 12 | Stage 15 | **L4 / L5** | **L8** |



## 3. Tiêu Chí Đầu Ra Nghề Nghiệp (Career Exit Criteria)

### Strong Junior (Lối ra: Stage 0 - 6)
* **Kỳ vọng năng lực**: Đạt tối thiểu **L3** trong các miền năng lực từ `JS Language` đến `TypeScript`.
* **Khả năng thực tế**: 
  - Tự tin triển khai các tính năng UI chuẩn chỉ theo spec.
  - Sử dụng các API phổ biến đúng cách, tránh được các lỗi logic cơ bản.
  - Viết code sạch, dễ đọc và biết sử dụng TypeScript ở mức cơ bản để gán kiểu dữ liệu.

### Mid-level Engineer (Lối ra: Stage 7 - 11)
* **Kỳ vọng năng lực**: Đạt tối thiểu **L4 / L5** trong các miền năng lực cốt lõi.
* **Khả năng thực tế**:
  - Làm chủ hoàn toàn vòng đời phát triển của một tính năng từ coding, viết test đến tối ưu build.
  - Tự phát hiện và sửa các bug phức tạp liên quan đến memory leak hoặc bất đồng bộ (stale closure, race condition).
  - Có tiếng nói trong việc lựa chọn thư viện cục bộ cho dự án.

### Senior Engineer (Lối ra: Stage 12 - 14)
* **Kỳ vọng năng lực**: Đạt tối thiểu **L7** trong các miền thiết kế kiến trúc, đánh giá rủi ro và vận hành tin cậy.
* **Khả năng thực tế**:
  - Làm chủ kiến trúc của một hệ thống trung bình/lớn.
  - Xử lý các bài toán không rõ ràng về mặt yêu cầu (handling ambiguity).
  - Trực tiếp ứng cứu và khắc phục sự cố hệ thống môi trường Production.
  - Hướng dẫn (mentoring) cho các thành viên ít kinh nghiệm hơn trong team.

### Staff-track Engineer (Lối ra: Stage 15)
* **Kỳ vọng năng lực**: Đạt mức **L8** trong các miền năng lực chiến lược (Architecture, Judgment, Leadership, Leverage).
* **Khả năng thực tế**:
  - Định hình chiến lược công nghệ dài hạn (1-3 năm) phù hợp với mục tiêu kinh doanh của doanh nghiệp.
  - Dẫn dắt các quyết định kiến trúc lớn có tầm ảnh hưởng liên team thông qua RFC/ADR.
  - Thiết kế nền tảng dùng chung (platform/tooling) giúp tối ưu hóa hiệu suất làm việc của hàng chục đến hàng trăm nhà phát triển khác.
