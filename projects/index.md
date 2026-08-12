# Trục Dự Án (Project Spine)

Học tập thông qua dự án thực tế là phương pháp cốt lõi của **JavaScript Engineering Mastery**. Thay vì làm các dự án rời rạc, bạn sẽ phát triển một chuỗi dự án có tính liên đới cao. Mỗi dự án mới bắt buộc phải tái sử dụng, tối ưu hoặc di trú mã nguồn của các dự án trước đó.


## 1. Bản Đồ 16 Dự Án Thành Phần

Dưới đây là danh sách chi tiết các dự án tương ứng với từng Stage và năng lực cốt lõi (Primary Competency) được đánh giá:

| Dự án | Tên Dự Án | Mô tả | Primary Competency |
| :--- | :--- | :--- | :--- |
| **P0** | **CLI Data Processor** | Công cụ dòng lệnh phân tích và xử lý tập dữ liệu JSON lớn không dùng thư viện ngoài. | JS Language (C01) |
| **P1** | **Closure Module System** | Tự thiết kế hệ thống quản lý module (CommonJS-like) cô lập biến thông qua Closure. | JS Runtime (C02) |
| **P2** | **Mini Object Framework** | Thư viện khai báo đối tượng hỗ trợ kế thừa prototype, tự động validate dữ liệu bằng Proxy. | JS Runtime (C02) |
| **P3** | **Production Search Engine** | Công cụ tìm kiếm thời gian thực (gõ đến đâu tìm đến đấy) xử lý debounce, hủy request trùng lặp và lưu cache. | Async & Concurrency (C03) |
| **P4** | **Virtual List Grid** | Ứng dụng hiển thị 100,000 dòng dữ liệu mượt mà ở tần số quét 60fps sử dụng kỹ thuật DOM ảo hóa (Windowing). | Browser Runtime (C04) |
| **P5** | **Offline Sync Client** | Client gọi API tự động xếp hàng các request thay đổi dữ liệu khi mất mạng và đồng bộ trở lại khi online. | Network Protocol (C05) |
| **P6** | **Typed Schema SDK** | Bộ SDK định kiểu an toàn (strict typing) kết hợp cơ chế kiểm tra dữ liệu đầu vào runtime bằng sơ đồ định kiểu tự dựng. | TypeScript (C06) |
| **P7** | **Custom Build Tool** | Build tool tự biên dịch mã nguồn TS thành JS, gom cụm (bundling), chia nhỏ file (splitting) và tạo source maps. | Toolchain (C07) |
| **P8** | **React SaaS Dashboard** | Giao diện quản lý nghiệp vụ phức tạp tương tác thời gian thực, đồng bộ optimistic update và trạng thái cache. | React Engineering (C08) |
| **P9** | **E-commerce Storefront** | Trang thương mại điện tử chuẩn SEO, hỗ trợ bàn phím, tương thích thiết bị di động và đạt điểm Lighthouse tối đa. | Production Frontend (C09) |
| **P10** | **Full-stack SaaS App** | Ứng dụng SaaS đầy đủ từ xác thực, phân quyền, API Routes, đến render đa dạng (SSR/ISR) trên Next.js. | Full-stack Frontend (C08/C09) |
| **P11** | **Perf & Security Audit Lab** | Khắc phục rò rỉ bộ nhớ, tối ưu hóa INP/CLS của một codebase bị sập hiệu năng, vá lỗ hổng XSS/CSRF. | Perf & Security (C10) |
| **P12** | **Monorepo Design System** | Thiết kế cấu trúc monorepo phân tách rõ ràng các thư viện dùng chung, ứng dụng độc lập và hệ thống design tokens. | Architecture (C11) |
| **P13** | **War Room Incident Command** | Đóng vai trò kỹ sư trực sự cố, phân tích các chỉ số telemetry (traces, logs, metrics) để rollback và khắc phục lỗi sập tải. | Reliability (C12) |
| **P14** | **Strangler Legacy Migration** | Lập kế hoạch di trú và tái cấu trúc (refactoring) một codebase cũ quy mô lớn sang kiến trúc mới mà không làm gián đoạn hệ thống. | Engineering Judgment (C13) |
| **P15** | **Staff Architecture Challenge** | Thiết kế tài liệu kiến trúc RFC toàn diện giải quyết bài toán tải 10,000 req/s cho hệ thống phân tán đa quốc gia. | Technical Leadership (C14) |



## 2. Cơ Chế Tích Lũy Mã Nguồn (Spiral Integration)

Hãy xem cách code của bạn tiến hóa qua các Stage. Bạn không viết code rồi vứt bỏ:

```text
[P0: CLI Logic] 
       ↓ (đóng gói)
[P1: Closure Module System] 
       ↓ (vận hành bất đồng bộ)
[P3: Search Engine Core] 
       ↓ (kết xuất trình duyệt)
[P4: Virtual List Grid] 
       ↓ (chuyển sang TypeScript)
[P6: Typed Domain Library] 
       ↓ (tối ưu hóa đóng gói)
[P7: Custom Build Tool] 
       ↓ (kết hợp làm core engine)
[P8/P10: SaaS Application]
```

Sự tích lũy này bắt buộc bạn phải viết code sạch ngay từ đầu. Nếu bạn viết code cẩu thả ở Stage 1, bạn sẽ phải trả giá đắt (đền nợ kỹ thuật) ở Stage 3 và Stage 6 khi phải mở rộng hệ thống đó.



## 3. Quy Định Nộp Và Đánh Giá Dự Án

Mỗi dự án nộp lên bắt buộc phải đi kèm:
1. **Source Code**: Đầy đủ logic nghiệp vụ và mã nguồn kiểm thử (Unit test/E2E test).
2. **Architecture Decision Record (ADR)**: Giải thích lý do lựa chọn cấu trúc dữ liệu, thuật toán, hoặc thư viện hỗ trợ.
3. **Báo cáo Đo Lường (Benchmark Report)**: Đối với các dự án hiệu năng (P3, P4, P11), phải có số liệu đo đạc chi tiết trước và sau khi tối ưu hóa (ví dụ: bộ nhớ tiêu thụ giảm bao nhiêu MB, INP giảm bao nhiêu ms).
