---
layout: home

hero:
  name: "JavaScript"
  text: "Engineering Mastery"
  tagline: "Learn JavaScript. Understand the Runtime. Engineer the Frontend. Think Like a Senior. Scale Like a Staff Engineer."
  image:
    src: /logo.svg
    alt: JavaScript Engineering Mastery Logo
  actions:
    - theme: brand
      text: Bắt đầu học ngay
      link: /stages/00-javascript-language-foundation/
    - theme: alt
      text: Khám phá lộ trình
      link: /roadmap/

features:
  - icon: 💻
    title: Thấu hiểu Runtime
    details: Không chỉ học cú pháp. Bạn sẽ được đi sâu vào V8 Engine, JIT Compiler, Call Stack, Event Loop, Scope, và Closures để làm chủ hoàn toàn hành vi của code.
  - icon: 🏗️
    title: Tư duy Kiến trúc & Hệ thống
    details: Thiết kế các codebase lớn có khả năng chịu tải, tách biệt ranh giới module độc lập và tự tin triển khai mô hình Module Federation hoặc Monorepo.
  - icon: ⚙️
    title: Tác nghiệp Sản xuất (Production Ops)
    details: Code không dừng lại ở merge. Học cách debug memory leaks, xử lý CPU spikes, tối ưu các chỉ số Core Web Vitals và làm chủ quy trình ứng phó sự cố 2 AM.
---

<div class="vp-doc">

## Định vị Khóa học (Course Positioning)

Dự án **JavaScript Engineering Mastery** được thiết kế để đưa một **Junior Frontend Developer (khoảng 6 tháng kinh nghiệm)** đi qua lộ trình phát triển năng lực toàn diện, vượt cấp:

<div style="display: flex; justify-content: center; align-items: center; gap: 15px; margin: 2rem 0; font-family: var(--vp-font-family-mono); font-size: 1.1rem; flex-wrap: wrap;">
  <span style="color: var(--vp-c-text-3)">Junior</span>
  <span>→</span>
  <span style="color: var(--vp-c-info-1)">Strong Junior</span>
  <span>→</span>
  <span style="color: var(--vp-c-success-1)">Frontend Engineer</span>
  <span>→</span>
  <span style="color: var(--vp-c-warning-1)">Senior Frontend Engineer</span>
  <span>→</span>
  <span style="color: var(--vp-c-brand-1); font-weight: bold;">Staff-track Engineer</span>
</div>

Khóa học loại bỏ tư duy học thuộc framework, thay vào đó xây dựng năng lực giải quyết vấn đề từ gốc thông qua **mô hình tư duy runtime-first**, kỹ năng đo lường, phân tích trade-off và ra quyết định kỹ thuật độc lập.



## Triết lý Học tập cốt lõi (Learning Philosophy)

Chương trình tuân thủ nghiêm ngặt 6 nguyên tắc sư phạm kỹ sư:

<div class="custom-card-grid">
  <div class="custom-card">
    <div class="tier-tag">01</div>
    <h3>Mental Model First</h3>
    <p>Không bao giờ dạy API/syntax trước khi người học hiểu rõ bài toán nền tảng mà công cụ đó giải quyết.</p>
  </div>
  <div class="custom-card">
    <div class="tier-tag">02</div>
    <h3>Predict Before Execute</h3>
    <p>Đọc code và suy đoán kết quả trước khi chạy thực tế. Rèn luyện tư duy máy chạy (mental execution).</p>
  </div>
  <div class="custom-card">
    <div class="tier-tag">03</div>
    <h3>Failure-Driven Learning</h3>
    <p>Học từ thất bại. Mọi cấu phần kỹ thuật quan trọng đều đi kèm các bài thực hành gài sẵn lỗi (closure stale, memory leak, race condition).</p>
  </div>
  <div class="custom-card">
    <div class="tier-tag">04</div>
    <h3>Spiral Learning</h3>
    <p>Kiến thức quay lại ở các tầng sâu hơn. Một chủ đề như Closure sẽ lặp lại từ Scope, Async, React Hooks đến Memory và Debugging.</p>
  </div>
</div>



## 4 Tầng Phát triển Năng lực (Curriculum Progression)

Lộ trình học tập kéo dài qua **16 Stage** được chia thành 4 tầng rõ rệt:

<div class="custom-card-grid">
  <div class="custom-card">
    <div class="tier-tag">Tầng I</div>
    <h3>JavaScript Core (Stage 0-3)</h3>
    <p>Tái cấu trúc ngôn ngữ và mô hình thực thi runtime. Làm chủ Scope, Closure, Prototype, <code>this</code>, Event Loop và lập trình bất đồng bộ.</p>
  </div>
  <div class="custom-card">
    <div class="tier-tag">Tầng II</div>
    <h3>Web Platform (Stage 4-7)</h3>
    <p>Khám phá cách Browser Runtime hoạt động, cơ chế mạng HTTP/2/3, cấu trúc TypeScript nâng cao và thiết kế hệ thống build (Vite/Webpack).</p>
  </div>
  <div class="custom-card">
    <div class="tier-tag">Tầng III</div>
    <h3>Frontend Engineering (Stage 8-11)</h3>
    <p>Xây dựng ứng dụng thực tế với React In-depth (Fiber, Reconciliation), Next.js Full-stack, bảo mật Web và chẩn đoán hiệu năng.</p>
  </div>
  <div class="custom-card">
    <div class="tier-tag">Tầng IV</div>
    <h3>System & Leadership (Stage 12-15)</h3>
    <p>Thiết kế hệ thống lớn (Monorepo, Micro-frontends), vận hành độ tin cậy (CI/CD, Sentry, RUM, Incident command), tư duy Senior & Staff.</p>
  </div>
</div>



## Cột sống Dự án (Project Spine)

Học viên phát triển năng lực qua chuỗi 16 dự án thực tiễn tiếp nối nhau. Mỗi dự án sau bắt buộc **tái sử dụng và mở rộng** một phần hệ thống cũ, giả lập vòng đời phát triển phần mềm trong doanh nghiệp:

```text
Ý tưởng → Yêu cầu → Thiết kế → Triển khai → Kiểm thử → Phát hành → Vận hành → Sự cố → Tối ưu → Di trú → Tiến hóa
```

Một số dự án tiêu biểu:
* **P1**: Mini Module System bằng Closure độc lập.
* **P3**: Production Search Engine tích hợp debounce, cancellation, race protection và cache.
* **P7**: Build System hoàn chỉnh từ số 0.
* **P11**: Performance & Incident Lab (xử lý memory leaks, INP regression, layout thrashing).
* **P15**: Staff Architecture Challenge (thiết kế kiến trúc hệ thống phục vụ 10 triệu người dùng).



## Phân cấp Senior vs Staff Track

Khóa học phân định rõ ràng hai nấc thang sự nghiệp cao cấp:

* **Tư duy Senior**: Tập trung vào **Kỹ năng & Đo lường**. Làm chủ giải pháp, chẩn đoán lỗi hệ thống nhanh chóng, tối ưu hóa sâu và đưa ra các quyết định kỹ thuật có kèm phân tích trade-off chính xác.
* **Tư duy Staff**: Tập trung vào **Chiến lược & Ảnh hưởng**. Tư duy hệ thống (Systems Thinking), định hình kiến trúc dài hạn cho doanh nghiệp, chuẩn hóa quy trình, thiết lập ranh giới làm việc giữa các team và phát triển năng lực của đồng nghiệp.

<div style="text-align: center; margin: 3rem 0;">
  <a href="/stages/00-javascript-language-foundation/" style="display: inline-block; background-color: var(--vp-c-brand-1); color: var(--vp-c-text-inverse); font-weight: bold; padding: 0.8rem 2rem; border-radius: 8px; font-size: 1.1rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
    Bắt đầu bài học đầu tiên
  </a>
</div>

</div>
