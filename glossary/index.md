# Từ Điển Thuật Ngữ (Glossary)

Bảng tra cứu nhanh các thuật ngữ kỹ thuật cốt lõi được sử dụng xuyên suốt chương trình **JavaScript Engineering Mastery**.



## A - E

### Abstract Syntax Tree (AST)
Cây cú pháp trừu tượng. Là một cấu trúc dữ liệu dạng cây biểu diễn cấu trúc cú pháp của mã nguồn sau khi được phân tích (parsed). Các công cụ như Babel, ESLint, và Bundler sử dụng AST để phân tích, biến đổi hoặc sinh code mới.

### Architecture Decision Record (ADR)
Tài liệu ghi nhận quyết định kiến trúc. Xem chi tiết tại [Thực Hành Kỹ Sư Sản Xuất](/engineering/).

### Asynchronous (Bất đồng bộ)
Mô hình thực thi cho phép chương trình bắt đầu một tác vụ tốn thời gian (như gọi mạng, đọc file) và chuyển sang thực hiện các tác vụ khác mà không cần đợi tác vụ đó hoàn thành.

### Call Stack
Ngăn xếp tiếng gọi hàm. Là cấu trúc dữ liệu LIFO (Last In, First Out) của JavaScript Engine dùng để theo dõi vị trí thực thi của chương trình. Khi một hàm được gọi, nó được đẩy vào stack, và khi hàm chạy xong, nó được đưa ra khỏi stack.

### Closure
Bao đóng. Là cơ chế một hàm ghi nhớ và truy cập được các biến thuộc phạm vi bao ngoài (outer scope) của nó ngay cả khi hàm đó được thực thi ngoài phạm vi bao ngoài đó.

### Event Loop
Vòng lặp sự kiện. Cơ chế điều phối cốt lõi của JavaScript Runtime giúp chạy các đoạn code bất đồng bộ bằng cách liên tục giám sát Call Stack và đẩy các callback từ Message Queue/Microtask Queue vào Call Stack khi stack trống.

### Execution Context
Ngữ cảnh thực thi. Là môi trường nội bộ do JavaScript Engine tạo ra để thực thi một đoạn mã. Nó chứa thông tin về phạm vi biến (Scope), tham chiếu `this`, và Lexical Environment tương ứng.



## F - L

### Fiber Node
Đơn vị công việc cốt lõi của React từ phiên bản 16 trở đi. Một Fiber đại diện cho một component và trạng thái của nó, cho phép React chia nhỏ quá trình render thành nhiều phần nhỏ và tạm dừng/tiếp tục công việc để tránh làm đơ UI.

### Garbage Collector (GC)
Bộ dọn rác tự động. Thành phần của JavaScript Engine chịu trách nhiệm tự động phát hiện và giải phóng các vùng nhớ không còn được sử dụng (không còn tham chiếu nào trỏ tới) để tránh rò rỉ bộ nhớ.

### Hydration
Quá trình trình duyệt nhận file HTML tĩnh được render từ server (SSR), sau đó gắn các event listeners và khởi tạo trạng thái JavaScript (ví dụ: React runtime) lên HTML đó để trang web có thể tương tác bình thường.

### Lexical Environment
Môi trường từ vựng. Cấu trúc dữ liệu nội bộ lưu trữ ánh xạ giữa tên biến/hàm và giá trị thực tế của chúng dựa trên vị trí địa lý của chúng trong mã nguồn (lexical nesting).

### Microtask Queue
Hàng đợi vi tác vụ. Hàng đợi chứa các callback bất đồng bộ có độ ưu tiên cao nhất (ví dụ: callback của `Promise.then`, `queueMicrotask`, `MutationObserver`). Event Loop sẽ thực thi hết toàn bộ Microtask Queue trước khi chuyển sang Task Queue thông thường.



## M - Z

### Monorepo
Mô hình quản lý mã nguồn trong đó nhiều dự án hoặc thư viện độc lập được lưu trữ chung trong một kho mã nguồn (git repository) duy nhất, giúp dễ dàng chia sẻ code và quản lý dependency.

### Reconciliation
Quá trình so khớp cây DOM ảo (Virtual DOM) của React với DOM thực tế để tìm ra những thay đổi tối thiểu cần cập nhật lên giao diện, giúp tối ưu hóa hiệu năng render.

### React Server Components (RSC)
Mô hình thành phần React mới chạy và kết xuất (render) trực tiếp trên server, chỉ gửi kết quả dạng JSON/HTML tĩnh về client, giúp giảm thiểu dung lượng JavaScript tải về trình duyệt.

### Strangler Pattern
Mẫu thiết kế di trú hệ thống bằng cách thay thế dần dần từng phần của một ứng dụng cũ (legacy system) bằng ứng dụng mới cho đến khi toàn bộ ứng dụng cũ bị loại bỏ hoàn toàn, hạn chế rủi ro sập hệ thống khi đập đi viết lại toàn bộ.

### Temporal Dead Zone (TDZ)
Vùng chết tạm thời. Khoảng thời gian từ khi bắt đầu tầm vực (scope) cho đến khi biến khai báo bằng `let` hoặc `const` được khởi tạo giá trị thực tế. Truy cập biến trong khoảng thời gian này sẽ dẫn đến lỗi `ReferenceError`.
