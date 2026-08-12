# Thực Hành Kỹ Sư Sản Xuất (Engineering Practices)

Làm kỹ sư phần mềm chuyên nghiệp không chỉ là viết code chạy được. Nó là sự kết hợp giữa kỹ năng chẩn đoán, viết tài liệu kiến trúc, làm việc với công cụ AI và vận hành hệ thống dưới áp lực lớn.



## 1. Quy Trình Quyết Định Kiến Trúc (ADR & RFC)

Khi hệ thống lớn dần, việc trao đổi qua miệng hoặc chat sẽ tạo ra sự mất mát thông tin. Chúng tôi rèn luyện thói quen viết tài liệu kỹ thuật chuẩn công nghiệp:

### ADR (Architecture Decision Record)
Tài liệu ghi lại một quyết định kiến trúc quan trọng đã được đưa ra, lý do đưa ra quyết định đó và bối cảnh tại thời điểm quyết định.
* **Cấu trúc ADR tiêu chuẩn**:
  1. **Title**: Quyết định là gì? (ví dụ: `ADR 04: Sử dụng TanStack Query cho Client State`).
  2. **Status**: Trạng thái (Draft / Proposed / Accepted / Superseded).
  3. **Context**: Bài toán cần giải quyết và các ràng buộc về mặt kỹ thuật/thời gian.
  4. **Decision**: Giải pháp được chọn và lý do chọn nó thay vì các phương án khác.
  5. **Consequences**: Hệ quả (cả mặt tốt lẫn mặt xấu) sau khi áp dụng quyết định.

### RFC (Request for Comments)
Tài liệu đề xuất một sự thay đổi kiến trúc lớn hoặc một tính năng mới để lấy ý kiến đóng góp từ các thành viên khác trong team trước khi bắt đầu code.
* **Mục tiêu**: Tìm ra các điểm mù (blind spots) trong thiết kế, thống nhất giao diện API giữa các team frontend/backend và giảm thiểu rủi ro phải viết lại code.



## 2. Quy Trình Chẩn Đoán Lỗi (Structured Debugging)

Khi gặp lỗi, kỹ sư không thử sửa hú họa (guessing game). Chúng tôi áp dụng quy trình chẩn đoán có cấu trúc:

1. **Thu thập chứng cứ (Gather Evidence)**: Đọc kỹ log lỗi, stack trace, xem mã trạng thái HTTP, chụp dump bộ nhớ.
2. **Tái hiện lỗi cô lập (Isolate & Reproduce)**: Viết một test case tối giản hoặc tạo môi trường sandbox chỉ chứa phần code nghi vấn để tái hiện lỗi 100% số lần chạy.
3. **Hình thành giả thuyết (Formulate Hypotheses)**: Đưa ra danh sách các nguyên nhân có thể gây ra lỗi dựa trên mental model của hệ thống.
4. **Kiểm chứng giả thuyết (Test Hypotheses)**: Thay đổi duy nhất một biến số tại một thời điểm để chứng minh hoặc bác bỏ từng giả thuyết.
5. **Vá lỗi tận gốc & Viết hồi tưởng (Fix & Postmortem)**: Sửa lỗi, viết test để đảm bảo lỗi không quay lại (regression test), và ghi nhận bài học kinh nghiệm.


## 3. Kỹ Nghệ Hợp Tác AI (AI-Assisted Engineering)

Chúng tôi định nghĩa AI là một đòn bẩy hiệu năng (leverage), không phải là bộ não thay thế kỹ sư. Kỹ năng làm việc với AI được chia thành:

* **Context Engineering**: Cung cấp đầy đủ bối cảnh, cấu trúc thư mục, ràng buộc hiệu năng và ví dụ dữ liệu đầu vào cho AI để nhận được câu trả lời chính xác nhất.
* **Critique & Verification**: Luôn hoài nghi kết quả của AI. Kỹ sư chịu trách nhiệm 100% về tính đúng đắn của code được sinh ra. Bắt buộc phải hiểu từng dòng code AI viết trước khi đưa vào codebase.
* **Adversarial Prompting**: Sử dụng AI như một đối thủ giả lập. Yêu cầu AI viết code có bug tinh vi để bản thân tự luyện tập kỹ năng debug hoặc yêu cầu AI tìm lỗi bảo mật trong code của mình.



## 4. Phản Ứng Sự Cố Môi Trường Sản Xuất (Incident Response)

Khi hệ thống Production gặp sự cố (ví dụ: trang checkout bị sập, người dùng không thể đăng nhập):


>`Phát hiện sự cố → Cô lập lỗi (Mitigate) → Giao tiếp (Communicate) → Khắc phục tận gốc (Resolve) → Rút kinh nghiệm (Postmortem)`


1. **Ưu tiên giảm thiểu thiệt hại (Mitigation First)**: Mục tiêu số một khi sự cố xảy ra là đưa hệ thống hoạt động bình thường trở lại (ví dụ: rollback bản deploy lỗi, bật flag tắt tính năng lỗi, chặn IP tấn công). Tuyệt đối không đứng phân tích nguyên nhân sâu xa trong khi khách hàng đang chịu ảnh hưởng.
2. **Giao tiếp minh bạch (Clear Communication)**: Cập nhật trạng thái sự cố cho các bên liên quan (Product Manager, Khách hàng) theo chu kỳ định sẵn (ví dụ: cứ 15 phút một lần).
3. **Phân tích hồi tưởng (Postmortem)**: Sau khi hệ thống ổn định, tổ chức buổi họp tìm nguyên nhân gốc rễ (Root Cause Analysis - RCA) sử dụng phương pháp 5 Whys. Kết quả của buổi họp là một tài liệu Postmortem công khai và các đầu việc phòng ngừa (preventative actions) được đưa vào backlog.
