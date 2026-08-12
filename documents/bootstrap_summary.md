# Tổng Hợp Thiết Lập Hệ Thống (Bootstrap Summary)

Tài liệu này ghi lại toàn bộ cấu trúc nền tảng, thiết kế giao diện và hệ thống định tuyến (routing) đã được thiết lập cho dự án **JavaScript Engineering Mastery**.

---

## 1. Cấu Trúc Thư Mục Hệ Thống (Directory Structure)

Các thư mục và tệp tin chính đã được khởi tạo và cấu trúc:

```text
/home/vcc/tuanlee/javascript-engineering-mastery/
├── .vitepress/
│   ├── theme/
│   │   ├── index.ts           # Mở rộng Default Theme
│   │   └── custom.css         # Token màu sắc và style tùy biến
│   └── config.mts             # Cấu hình định tuyến, SEO, Nav & Sidebars
├── public/                    # Tài nguyên tĩnh
│   ├── favicon.svg            # Favicon Vector
│   ├── logo.svg               # Logo Lục giác Hổ phách
│   ├── og-image.png           # Ảnh OG mặc định của trang web
│   ├── og/                    # Ảnh OG PNG của 16 Stage (1200x630px)
│   └── icons/                 # Biểu tượng SVG của 16 Stage (stage-00.svg -> stage-15.svg)
├── intro/
│   └── index.md               # Trang giới thiệu khóa học & Triết lý runtime-first
├── roadmap/
│   └── index.md               # Bản đồ chi tiết lộ trình 16 Stage
├── how-to-learn/
│   └── index.md               # Hướng dẫn học Predict-Execute-Reflect & dùng AI
├── competencies/
│   └── index.md               # Ma trận năng lực L1-L8 & career exit rules
├── projects/
│   └── index.md               # Trục dự án (Project Spine) và tính liên đới kế thừa
├── engineering/
│   └── index.md               # Hướng dẫn viết ADR/RFC, quy trình Incident Response
├── glossary/
│   └── index.md               # Từ điển thuật ngữ kỹ thuật lõi (GC, AST, Event Loop...)
├── war-stories/
│   └── index.md               # Báo cáo các sự cố sản xuất thực tế làm bài học kinh nghiệm
├── stages/                    # 16 Thư mục Stage chứa index.md tổng quan
│   ├── 00-javascript-language-foundation/index.md
│   ├── 01-javascript-execution-model/index.md
│   ├── 02-object-model/index.md
│   ├── 03-async-concurrency/index.md
│   ├── 04-browser-runtime/index.md
│   ├── 05-network/index.md
│   ├── 06-typescript/index.md
│   ├── 07-toolchain/index.md
│   ├── 08-react/index.md
│   ├── 09-production-frontend/index.md
│   ├── 10-nextjs/index.md
│   ├── 11-performance-memory-security/index.md
│   ├── 12-architecture/index.md
│   ├── 13-production-system-engineering/index.md
│   ├── 14-senior-engineering/index.md
│   └── 15-staff-engineering/index.md
└── index.md                   # Trang chủ biên tập kỹ thuật cao cấp (Editorial Homepage)
```

---

## 2. Chi Tiết Các Cấu Phần Đã Thiết Lập

### 2.1 Cấu Hình VitePress & SEO
* **File cấu hình**: `.vitepress/config.mts`
* **Cài đặt hiển thị**: Bật `appearance: 'force-dark'` để đồng bộ hóa giao diện tối kỹ thuật.
* **SEO Metadata**: 
  - Tiêu đề: `JavaScript Engineering Mastery`
  - Mô tả: Định hướng lộ trình từ runtime lên Senior & Staff.
  - Tích hợp đầy đủ các thẻ meta OpenGraph và Twitter Card trỏ về ảnh đại diện `/og-image.png`.

### 2.2 Giao Diện & Thiết Kế (Theme & Styling)
* **File tùy biến**: `.vitepress/theme/custom.css`
* **Bảng màu (Color Palette)**:
  - Nền chính (Background): Charcoal tối màu `#0B0D10`
  - Bề mặt (Surface): Charcoal sáng `#11151A`
  - Màu chữ: Trắng xám `#E6EDF3`, chữ mờ `#8B949E`
  - Màu nhấn chính (Accent): JavaScript Amber `#F7DF1E` và phụ `#F59E0B`
* **Typography**: Nạp và cấu hình bộ font Inter (cho văn bản) và JetBrains Mono (cho mã nguồn) từ Google Fonts.
* **Bố cục nâng cao**: Tùy biến thanh điều hướng (navbar), thanh điều hướng dọc (sidebar), trích dẫn (blockquote) viền hổ phách, và hệ thống grid/card đẹp mắt dành cho trang chủ và lộ trình.

### 2.3 Hệ Thống Menu Điều Hướng Phân Tầng (Nav & Sidebars)
* **Thanh menu chính (Nav)**:
  - **Courses (Dropdown)**: Phân tầng khóa học thành 4 tier cụ thể (Core, Web Platform, Frontend Engineering, System & Leadership).
  - **Roadmap**, **Projects**, **Engineering**, **Glossary**, **War Stories**.
* **Sidebar theo ngữ cảnh (Route-specific Sidebars)**:
  - Cấu hình sidebar riêng biệt cho từng Stage từ Stage 0 đến Stage 15.
  - Khi học viên truy cập vào một bài học thuộc Stage nào, sidebar sẽ chỉ hiển thị danh mục các mô-đun và bài học của riêng Stage đó, tránh làm giao diện bị rối mắt bởi lượng lớn nội dung của 16 Stage.


---

