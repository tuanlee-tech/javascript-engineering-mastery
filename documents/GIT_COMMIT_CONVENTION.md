# Quy Chuẩn Git Commit (Git Commit Convention)
## JavaScript Engineering Mastery Platform

Tài liệu này quy định chuẩn hóa cấu trúc commit message cho toàn bộ dự án **JavaScript Engineering Mastery**, đảm bảo lịch sử thay đổi (git log) rõ ràng, dễ truy vết và dễ quản lý.

---

## 1. Cấu Trúc Message Tổng Quát

Mỗi commit message tuân theo định dạng:

```text
<type>(<scope>): <short summary in English or Vietnamese>

[optional body: mô tả chi tiết lý do và nội dung thay đổi]
```

Ví dụ:
- `feat(stage-00): add lesson 0.1.1 runtime fundamentals`
- `fix(war-stories): wrap root cause & solution inside ::: details container`
- `refactor(roadmap): collapse stage details using VitePress details container`
- `chore(deps): install and configure vitepress-plugin-tabs`
- `docs(spec): update lesson request UI/UX rules and heading standards`

---

## 2. Danh Sách Loại Commit (`<type>`)

| Type | Ý Nghĩa | Khi Nào Sử Dụng? |
|---|---|---|
| **`feat`** | Feature / Bài học mới | Thêm mới bài học, stage mới, trang mới, component UI mới. |
| **`content`** | Cập nhật nội dung | Chỉnh sửa, bổ sung nội dung chi tiết bài học đã có. |
| **`fix`** | Sửa lỗi | Sửa lỗi chính tả, lỗi code ví dụ, hỏng link, hỏng UI, sai config. |
| **`refactor`** | Tái cấu trúc | Đổi cấu trúc trình bày, gom nhóm chi tiết (VD: dùng `::: details`), tối ưu sidebar. |
| **`style`** | Giao diện / Theme | Chỉnh sửa CSS (`custom.css`), màu sắc, font chữ, layout theme. |
| **`docs`** | Tài liệu quy chuẩn | Cập nhật file prompt, spec, convention, guide trong `documents/` hoặc `prompts/`. |
| **`chore`** | Bảo trì & Cấu hình | Thêm/sửa dependencies (`package.json`), cấu hình `.gitignore`, script build. |
| **`ci`** | Script tự động hóa | Cập nhật script Python sinh assets, sinh placeholder, sinh stage index. |

---

## 3. Danh Sách Phạm Vi (`<scope>`)

Phạm vi chỉ định vùng nội dung bị ảnh hưởng:

### A. Nội dung giảng dạy (Curriculum & Pages)
- **`stage-00`** đến **`stage-15`**: Bài học, module, project hoặc checkpoint thuộc Stage tương ứng.
- **`roadmap`**: Trang Lộ trình (`/roadmap/`).
- **`competencies`**: Trang Ma trận Năng lực (`/competencies/`).
- **`projects`**: Trang Dự án Spine (`/projects/`).
- **`engineering`**: Trang Engineering Practices (`/engineering/`).
- **`glossary`**: Trang Thuật ngữ (`/glossary/`).
- **`war-stories`**: Trang Báo cáo Sự cố (`/war-stories/`).
- **`intro`** / **`how-to-learn`**: Trang giới thiệu và phương pháp học.
- **`home`**: Trang chủ (`index.md`).

### B. Môi trường & Hệ thống (Platform & Engineering)
- **`config`**: Cấu hình VitePress (`.vitepress/config.mts`).
- **`theme`**: Custom theme, CSS (`.vitepress/theme/`).
- **`deps`**: Quản lý gói phụ thuộc (`package.json`, `package-lock.json`).
- **`assets`**: Logo, Favicon, ảnh OG (`public/`).
- **`prompts`** / **`spec`**: Bộ quy chuẩn biên soạn và prompt setup.
- **`scripts`**: Các script Python bổ trợ trong `scratch/` hoặc root.

---

## 4. Các Tình Huống Commit Mẫu (Use Cases)

### Tình huống 1: Thêm hoặc hoàn thiện 1 bài học mới
```bash
git commit -m "feat(stage-00): add lesson 0.1.1 - what is javascript"
```

### Tình huống 2: Chỉnh sửa / bổ sung nội dung cho bài học hiện có
```bash
git commit -m "content(stage-01): refine lexical environment diagrams and closure code examples"
```

### Tình huống 3: Sửa lỗi UI hoặc lỗi hiển thị trên trang bài viết
```bash
git commit -m "fix(war-stories): collapse postmortem root cause details to clean up viewport"
```

### Tình huống 4: Tái cấu trúc lại trang Roadmap / Sidebars
```bash
git commit -m "refactor(roadmap): wrap stage capabilities inside ::: details container"
```

### Tình huống 5: Cài đặt hoặc cập nhật thư viện phụ thuộc (plugin/deps)
```bash
git commit -m "chore(deps): install and register vitepress-plugin-tabs"
```

### Tình huống 6: Cập nhật tài liệu quy chuẩn / Prompt
```bash
git commit -m "docs(spec): add vitepress-plugin-tabs syntax and code length rules to LESSON REQUEST"
```

### Tình huống 7: Cập nhật cấu hình VitePress (Nav, Sidebar, SEO)
```bash
git commit -m "config(nav): add 'Bắt đầu' dropdown with intro, how-to-learn, and competencies links"
```

### Tình huống 8: Sinh ảnh OG / Icon / File Placeholder tự động
```bash
git commit -m "ci(scripts): generate 184 placeholder markdown files and OG images for all 16 stages"
```

---

## 5. Quy Tắc Khi Viết Commit Message

1. **Viết ngắn gọn, rõ ý**: Tiêu đề dưới 72 ký tự.
2. **Dùng thì hiện tại (Present Tense)**: `add`, `fix`, `refactor`, `update` (thay vì `added`, `fixed`).
3. **Không ghi chung chung**: Tránh commit với nội dung vô nghĩa như `update file`, `fix bug`, `commit code`.
4. **Phân tách commit nhỏ (Atomic Commits)**: Mỗi commit giải quyết một công việc cụ thể thay vì dồn tất cả thay đổi lớn vào 1 commit duy nhất.
