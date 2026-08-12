# Giới thiệu Khóa học

> **Chào mừng bạn đến với JavaScript Engineering Mastery.**
> 
> Đây không phải là một khóa học hướng dẫn cú pháp JavaScript thông thường. Đây là một chương trình huấn luyện kiến trúc sư và kỹ sư Frontend chuyên nghiệp.



## 1. Không Phải Khóa Học Cú Pháp (Not Syntax-First)

Hầu hết các tài liệu và khóa học ngoài kia bắt đầu bằng việc dạy bạn:
* Cú pháp `if/else`, khai báo biến, cách viết hàm.
* Cách dùng các API của một thư viện hoặc framework (ví dụ: `useState`, `useEffect` trong React, `getServerSideProps` trong Next.js).

Cách tiếp cận đó tạo ra những lập trình viên chỉ biết **sao chép cú pháp (syntax copycats)**. Khi hệ thống gặp lỗi lạ, ứng dụng bị chậm, hay bộ nhớ bị phình (memory leak), họ hoàn toàn bế tắc vì không hiểu cơ chế vận hành bên dưới.

**Chúng tôi đảo ngược thứ tự đó:**
Chúng tôi dạy bạn thấu hiểu hành vi của Runtime trước, sau đó mới đến ngôn ngữ, nền tảng Web, và cuối cùng là Framework chỉ như một công cụ thể hiện ý đồ kiến trúc.



## 2. Mô Hình Tư Duy Runtime-First (Runtime-First Mental Model)

Khi viết một dòng code, bạn cần nhìn thấy được những gì đang diễn ra phía sau hậu trường của máy ảo:
1. **Engine phân tích mã nguồn thành AST (Abstract Syntax Tree)** như thế nào?
2. **Execution Context** nào được đẩy vào Call Stack?
3. **Lexical Environment** nào được sinh ra và nó liên kết với Outer Scope ra sao để tạo thành **Closure**?
4. Bộ dọn rác **Garbage Collector (GC)** có giải phóng được vùng nhớ này không, hay nó đang bị giữ lại bởi một listener bị bỏ quên?

Khi bạn xây dựng được **Mental Model** (Mô hình tâm trí) chính xác về Runtime, bạn sẽ đạt được khả năng **dự đoán trước khi thực thi (Prediction Before Execution)**. Bạn biết code chạy ra kết quả gì chỉ bằng cách đọc, thay vì phải chạy thử rồi đoán mò.



## 3. Tiến Trình Phát Triển Năng Lực (Competency Progression)

Khóa học sử dụng mô hình đánh giá năng lực 8 cấp độ (Depth Model) từ nhận biết đến kiến tạo:

| Cấp độ | Tên | Ý nghĩa thực tiễn |
| :--- | :--- | :--- |
| **L1** | **Recognize** | Biết sự tồn tại của khái niệm |
| **L2** | **Explain** | Giải thích được nguyên lý/mô hình hoạt động |
| **L3** | **Use** | Áp dụng đúng cú pháp vào code thực tiễn |
| **L4** | **Debug** | Trace, profile và cô lập được lỗi tận gốc |
| **L5** | **Implement** | Tự viết lại bản simplified của thư viện (ví dụ: tự viết Promise) |
| **L6** | **Design** | Thiết kế giải pháp kỹ thuật mới giải quyết bài toán nghiệp vụ |
| **L7** | **Judge** | Phân tích trade-off và bảo vệ lựa chọn công nghệ trước hội đồng |
| **L8** | **Leverage** | Dùng kiến thức để nâng cao năng suất của toàn team/hệ thống |

* Học viên **Junior** hướng tới việc hoàn thành tốt **L1 - L3**.
* Học viên **Senior** bắt buộc phải chạm ngưỡng **L4 - L7**.
* Học viên định hướng **Staff** tập trung vào **L6 - L8**.



## 4. Cơ Chế Học Xoắn Ốc (Spiral Learning)

Bạn sẽ không học một chủ đề một lần rồi bỏ qua. Những khái niệm cốt lõi (Canonical Concepts) sẽ liên tục xuất hiện trở lại ở các Stage sau với độ khó và ngữ cảnh phức tạp hơn.

Ví dụ về hành trình của **Closure**:
* **Stage 1 (Execution Model)**: Học cách closure capture biến và lưu trữ trong Lexical Environment.
* **Stage 3 (Async & Concurrency)**: Ứng dụng closure trong callback của setTimeout và xử lý sự kiện bất đồng bộ.
* **Stage 8 (React Engineering)**: Giải mã hiện tượng **Stale Closure** trong React Hooks (ví dụ: trong `useEffect` hoặc `useCallback`).
* **Stage 11 (Performance & Memory)**: Nhận diện rủi ro rò rỉ bộ nhớ (Memory Leak) do closure giữ lại các tham chiếu DOM ngoài tầm vực.
* **Stage 14 (Senior Engineering)**: Sử dụng closure để che giấu trạng thái (encapsulation) trong tái cấu trúc mã nguồn lớn.



## 5. Vòng Đời Dự Án Thực Tế (Project Lifecycle)

Tất cả các dự án trong chương trình đều không phải là những bài thực hành đồ chơi (toy projects) viết xong rồi bỏ. Chúng tôi giả lập cách một phần mềm thực sự vận hành và tiến hóa:


> Ý tưởng → Phân tích yêu cầu → Thiết kế giải pháp → Triển khai code → Viết Test → Phát hành (Release) → Vận hành (Operate) → Gặp sự cố (Incident) → Tối ưu hóa → Di trú (Migrate) → Tiến hóa hệ thống


Bạn sẽ liên tục phải tiếp quản lại code cũ của chính mình ở Stage trước, tối ưu hiệu năng của nó, chuyển đổi nó sang TypeScript, viết test E2E để bảo vệ nó khi di trú kiến trúc, và xử lý các sự cố sập tải giả lập ở môi trường Production.



## 6. Tiêu Chí Đầu Ra (Exit Criteria)

Bạn chỉ được chứng nhận hoàn thành khóa học khi vượt qua các tiêu chí kiểm thử năng lực thực tế:
1. **Trace code thủ công**: Đọc một đoạn code bất đồng bộ/closure phức tạp và vẽ chính xác sơ đồ bộ nhớ và thứ tự chạy mà không cần mở console.
2. **Tự triển khai thư viện**: Tự viết lại được core engine của Promise, debounce/throttle có hủy, state store kiểu Zustand, hoặc router cơ bản.
3. **Phân tích sự cố (Postmortem)**: Nhận một dump file bộ nhớ hoặc log CPU của một ứng dụng bị sập, tìm ra root cause và viết tài liệu khắc phục/phòng ngừa.
4. **Bảo vệ ADR/RFC**: Viết và trình bày một tài liệu quyết định kiến trúc (Architecture Decision Record) trước mentor để chứng minh giải pháp của mình là tối ưu nhất trong ràng buộc của bài toán.
