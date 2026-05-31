# VungTau Living Website

Website React/Vite cho thương hiệu VungTau Living by Huyen Tran, tập trung Lavida Residences và Blanca City.

## Chạy thử trên máy

```bash
npm install
npm run dev
```

Mở link hiện ra trong Terminal, thường là `http://localhost:5173`.

## Build bản đưa lên hosting

```bash
npm run build
```

Thư mục xuất ra là `dist/`.

## Đưa lên Vercel để có link online

1. Tạo tài khoản GitHub.
2. Tạo repository mới, ví dụ `vungtau-living`.
3. Upload toàn bộ source code trong thư mục này lên repository.
4. Vào Vercel.com, đăng nhập bằng GitHub.
5. Chọn `Add New Project`.
6. Import repository `vungtau-living`.
7. Framework Preset chọn `Vite`.
8. Build Command: `npm run build`.
9. Output Directory: `dist`.
10. Bấm `Deploy`.
11. Sau khoảng 1-2 phút, Vercel sẽ cấp link dạng `https://vungtau-living.vercel.app`.

## Lưu ý

- Ảnh trong `public/assets` lấy từ tài liệu dự án đã upload. Trước khi đăng công khai, cần chắc chắn bạn có quyền sử dụng ảnh cho mục đích marketing.
- Form hiện là form giao diện. Khi dùng thật, nên kết nối Formspree, Google Sheet, CRM hoặc backend riêng.
- Các thông tin giá bán, pháp lý, chính sách cần cập nhật theo từng thời điểm trước khi tư vấn/giao dịch.
