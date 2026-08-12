# Câu Chuyện Thực Chiến (War Stories)

Tuyển tập các báo cáo sự cố thực tế (Postmortem) và phân tích tình huống kỹ thuật từ môi trường Production của các hệ thống lớn. Đây là kho tàng kinh nghiệm xương máu giúp bạn học cách phản ứng và đưa ra quyết định dưới áp lực.


## 1. Sự Cố #01: Đơ Trình Duyệt Vì Rò Rỉ Bộ Nhớ (Memory Leak)

* **Bối cảnh**: Hệ thống Dashboard theo dõi realtime của một ứng dụng IoT liên tục bị crash sau khoảng 2 giờ mở tab liên tục trên máy nhân viên vận hành.
* **Triệu chứng**: RAM trình duyệt Chrome tăng dần từ 150MB lên hơn 2.5GB rồi hiển thị màn hình báo lỗi "Aw, Snap!".

::: details Chi tiết
* **Root Cause (Nguyên nhân gốc rễ)**: 
  - Ứng dụng React sử dụng `setInterval` để fetch dữ liệu mới mỗi 5 giây.
  - Tuy nhiên, trong hook `useEffect`, nhà phát triển đã quên không trả về hàm cleanup để `clearInterval`.
  - Mỗi lần component re-render hoặc unmount/remount (do người dùng chuyển tab), một timer mới lại được đăng ký ngầm chạy song song.
  - Mỗi timer này giữ một tham chiếu closure tới trạng thái của component cũ, khiến Garbage Collector không thể giải phóng vùng nhớ của các DOM Node đã bị xóa khỏi cây hiển thị.
* **Giải pháp khắc phục**:
  - Bổ sung hàm cleanup trả về `clearInterval` trong `useEffect`.
  - Tích hợp luật ESLint `react-hooks/exhaustive-deps` vào build pipeline.
  - Thiết lập bài test kiểm tra bộ nhớ tự động với Puppeteer kiểm tra rò rỉ RAM sau 100 lần đóng/mở component liên tục.
:::



## 2. Sự Cố #02: Nghẽn Luồng Vận Hành Vì Chạy Tác Vụ Nặng Trên Main Thread

* **Bối cảnh**: Trang E-commerce gặp hiện tượng giật lag kinh hoàng (đơ khoảng 1-2 giây) mỗi khi người dùng nhấn nút áp mã giảm giá lớn trên thiết bị di động.
* **Triệu chứng**: Chỉ số INP (Interaction to Next Paint) vọt lên hơn 1500ms (chuẩn tốt là dưới 200ms).

::: details Chi tiết
* **Root Cause**:
  - Mã giảm giá yêu cầu tính toán và phân tách ma trận ưu đãi tối ưu cho giỏ hàng gồm hơn 50 mặt hàng.
  - Logic tính toán này sử dụng thuật toán quy hoạch động phức tạp chạy trực tiếp trên Main Thread của trình duyệt.
  - Trong lúc Main Thread đang xử lý phép toán nặng, nó không thể xử lý các sự kiện click, cuộn trang hay vẽ lại giao diện (Paint), tạo cảm giác trang bị treo.
* **Giải pháp khắc phục**:
  - Chuyển toàn bộ logic tính toán ma trận ưu đãi sang chạy ngầm tại **Web Worker**. Main Thread chỉ làm nhiệm vụ gửi dữ liệu đầu vào qua `postMessage` và nhận kết quả trả về để update UI.
  - Áp dụng kỹ thuật chia nhỏ tác vụ (Task Chunking) sử dụng `requestIdleCallback` cho các tác vụ chuẩn bị dữ liệu ít quan trọng hơn.
:::



## 3. Sự Cố #03: Đụng Độ Dữ Liệu Bất Đồng Bộ (Race Condition) Trong Tính Năng Tìm Kiếm

* **Bối cảnh**: Người dùng phản ánh kết quả tìm kiếm sản phẩm hiển thị sai lệch khi họ gõ từ khóa nhanh (ví dụ: gõ "macbook" nhưng danh sách sản phẩm hiển thị lại là của từ khóa "mac" gõ trước đó).
* **Triệu chứng**: Không có lỗi báo ở console, nhưng dữ liệu UI không khớp với từ khóa hiển thị trong ô tìm kiếm.

::: details Chi tiết
* **Root Cause**:
  - Khi gõ nhanh, hai request API tìm kiếm được gửi đi liên tiếp: `Request 1: search?q=mac` và `Request 2: search?q=macbook`.
  - Do biến động đường truyền mạng, `Request 2` (gửi sau) được máy chủ xử lý nhanh hơn và phản hồi về trước ở thời điểm `T1`. UI cập nhật danh sách Macbook.
  - `Request 1` (gửi trước) phản hồi về sau ở thời điểm `T2`. UI nhận được phản hồi và ghi đè kết quả của Request 1 lên màn hình.
  - Kết quả: Người dùng nhìn thấy ô tìm kiếm ghi "macbook" nhưng danh sách bên dưới lại là "mac".
* **Giải pháp khắc phục**:
  - Sử dụng **AbortController** để hủy bỏ (abort) ngay lập tức các API request tìm kiếm trước đó khi người dùng tiếp tục gõ ký tự mới.
  - Tích hợp cơ chế kiểm soát token tăng dần (sequential version token) trên client để chỉ chấp nhận kết quả của request có version cao nhất.
:::
