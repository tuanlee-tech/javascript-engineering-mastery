# Phương pháp Học tập Hiệu quả

Học để trở thành kỹ sư thiết kế kiến trúc (Documentation Architect) đòi hỏi một phương pháp hoàn toàn khác so với việc học lập trình thông thường. Dưới đây là hướng dẫn cách bạn tiếp cận và chinh phục lộ trình học tập này.


## 1. Quy trình 3 Bước ở Mỗi Bài Học

Mọi bài học trong chương trình được thiết kế theo mô hình thực nghiệm:


>Dự đoán (Predict) → Thực nghiệm (Execute) → Đối chiếu (Reflect)


### Bước 1: Dự đoán (Predict Before Execute)
Khi gặp một đoạn code mẫu trong bài học:
1. **Tuyệt đối không chạy code ngay lập tức.**
2. Đọc code chậm rãi, phân tích dòng chảy thực thi.
3. Viết ra giấy hoặc file nháp:
   - Output của chương trình là gì?
   - Chương trình có báo lỗi không? Nếu có thì là lỗi gì ở dòng nào?
   - Tại sao code lại chạy như vậy (giải thích dựa trên cơ chế bộ nhớ, scope)?

### Bước 2: Thực nghiệm (Execute & Break)
1. Mở terminal/IDE để chạy code mẫu.
2. Đối chiếu kết quả thực tế với dự đoán ở Bước 1.
3. **Cố tình làm hỏng code (Break it):** Thay đổi các giá trị biên, thay đổi tầm vực khai báo biến (`var` thành `let`, arrow function thành normal function) để xem chương trình báo lỗi như thế nào. Việc hiểu rõ cách code bị hỏng giúp bạn xây dựng bản đồ lỗi trong đầu.

### Bước 3: Đối chiếu & Viết Postmortem (Reflect)
* Nếu kết quả chạy thực tế khác với dự đoán của bạn: **Đây chính là khoảnh khắc học tập đắt giá nhất.**
* Hãy tìm câu trả lời: *Mô hình tư duy (mental model) nào của bạn đang bị sai lệch so với cơ chế thực tế của engine?*
* Ghi chép lại bài học kinh nghiệm để không lặp lại lỗi tư duy đó.



## 2. Cách Thực Hành Dự Án (Project Spine Rules)

Chuỗi dự án (Project Spine) của khóa học được thiết kế liên kết và phát triển liên tục:

1. **Không viết code từ đầu cho dự án mới:** Bạn được yêu cầu tiếp quản lại codebase của dự án ở Stage trước để mở rộng tính năng mới. Điều này giúp bạn học cách sống chung với các quyết định thiết kế cũ (cả tốt lẫn xấu).
2. **Đối mặt với Nợ Kỹ Thuật (Tech Debt):** Đôi khi bạn sẽ nhận ra cấu trúc code cũ không thể đáp ứng yêu cầu mới. Thay vì đập đi xây lại (rewrite) - một thói quen xấu của junior - bạn sẽ được hướng dẫn cách refactor từng phần nhỏ (incremental refactoring) để di trú hệ thống an toàn.
3. **Viết kiểm thử tự động (Automated Testing):** Mọi dự án từ Stage 6 trở đi bắt buộc phải có unit tests hoặc integration/E2E tests. Test chính là lưới an toàn giúp bạn tự tin thay đổi mã nguồn mà không sợ làm sập hệ thống.



## 3. Cách Tương Tác với Trợ Lý AI (AI Learning Policy)

Trong chương trình này, AI (như ChatGPT, Gemini, Copilot) là một cộng sự đồng hành để bạn rèn luyện năng lực phản biện, chứ không phải là công cụ viết code thay bạn.

Chúng tôi áp dụng mô hình phát triển năng lực tương tác AI qua các Stage:

* **Stage 0 - 3 (Tầng Ask/Explain)**: Bạn dùng AI để hỏi giải nghĩa cơ chế (ví dụ: *"Giải thích cho tôi sơ đồ bộ nhớ của closure này"*).
* **Stage 4 - 7 (Tầng Challenge/Critique)**: Bạn tự viết code giải pháp, sau đó đưa cho AI và yêu cầu: *"Hãy tìm ra 3 điểm yếu về hiệu năng hoặc bảo mật trong đoạn code này của tôi"*. Bạn tự kiểm chứng lời khuyên của AI trước khi áp dụng.
* **Stage 8 - 11 (Tầng Adversarial Review)**: Yêu cầu AI đóng vai một kỹ sư kiểm thử nghịch cảnh: *"Hãy viết một đoạn code giả lập lỗi bất đồng bộ race condition dựa trên API này để tôi debug"*.
* **Stage 12 - 15 (Tầng Staff Strategic)**: Yêu cầu AI đưa ra 3 phương án kiến trúc khác nhau cho một bài toán cụ thể. Nhiệm vụ của bạn là đánh giá tính khả thi, giả định sai lầm của AI, đưa ra quyết định cuối cùng và viết tài liệu RFC.



## 4. Đường Dẫn Khắc Phục (Remediation Path)

Nếu bạn cảm thấy một Stage quá khó hoặc bị quá tải nhận thức (Cognitive Load High):
1. **Kiểm tra Prerequisite (Điều kiện tiên quyết)** của Stage đó trong phần Metadata.
2. Quay lại Stage chứa prerequisite đó để ôn tập lại mental model cốt lõi.
3. Liên hệ với Mentor/Cộng đồng học viên để được gợi ý (hint) hoặc giải thích các ví dụ nhỏ hơn (micro-examples) thay vì đi tìm lời giải đầy đủ ngay lập tức.
