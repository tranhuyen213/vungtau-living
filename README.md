# VungTau Living Website

Website React/Vite cho thương hiệu VungTau Living by Huyen Tran, tập trung Lavida Residences và Blanca City.

## Bản cập nhật nhận diện

Bản này đã đồng bộ giao diện theo logo VungTau Living:

- Header nền xanh navy, điểm nhấn vàng champagne.
- Hero dùng logo trong badge nhận diện và card thương hiệu.
- Section giới thiệu thương hiệu được thiết kế lại theo tinh thần biển, đô thị, mái nhà và đường tăng trưởng.
- Footer dùng logo lớn và tone màu đồng bộ.
- Favicon dùng logo của bạn.
- Có loading screen ngắn dùng logo.
- Form vẫn kết nối Google Sheet + email.

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

## Kết nối form với Google Sheet + Email

Bản website này đã được cấu hình để form tư vấn gửi dữ liệu về Google Sheet và đồng thời gửi email thông báo tới `tranhuyen213@gmail.com`.

### 1. Tạo Google Sheet

1. Vào Google Drive và tạo một Google Sheet mới, ví dụ: `VungTau Living Leads`.
2. Trong Google Sheet, chọn **Extensions / Tiện ích mở rộng → Apps Script**.
3. Xóa code mặc định trong `Code.gs`.
4. Mở file `scripts/google-apps-script.js` trong source code này, copy toàn bộ nội dung và dán vào `Code.gs`.
5. Bấm **Save**.

### 2. Deploy Apps Script thành Web App

1. Trong Apps Script, bấm **Deploy → New deployment**.
2. Ở phần **Select type**, chọn **Web app**.
3. Chọn:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Bấm **Deploy**.
5. Google sẽ yêu cầu cấp quyền. Chọn tài khoản của bạn và cho phép script ghi vào Sheet, gửi email.
6. Copy đường link Web App có dạng `https://script.google.com/macros/s/.../exec`.

### 3. Gắn link Web App vào website

#### Khi chạy trên máy tính

Tạo file `.env` ở thư mục gốc, cùng cấp với `package.json`, rồi thêm:

```bash
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/DUONG-LINK-CUA-BAN/exec
```

Sau đó chạy lại:

```bash
npm run dev
```

#### Khi deploy trên Vercel

1. Vào project trên Vercel.
2. Chọn **Settings → Environment Variables**.
3. Thêm biến:
   - Name: `VITE_GOOGLE_SCRIPT_URL`
   - Value: link Web App Apps Script của bạn.
4. Chọn Production / Preview / Development nếu Vercel hỏi.
5. Bấm **Save**.
6. Vào tab **Deployments**, bấm redeploy bản mới nhất.

## Kiểm tra form

1. Mở website.
2. Điền thử form với tên và số điện thoại.
3. Kiểm tra Google Sheet: hệ thống sẽ tự tạo tab `Leads` và thêm dòng mới.
4. Kiểm tra email `tranhuyen213@gmail.com`: sẽ có email thông báo lead mới.

## Lưu ý

- Nếu chưa cấu hình `VITE_GOOGLE_SCRIPT_URL`, form sẽ tự mở email dự phòng để gửi thông tin về `tranhuyen213@gmail.com`.
- Ảnh trong `public/assets` lấy từ tài liệu dự án đã upload. Trước khi đăng công khai, cần chắc chắn bạn có quyền sử dụng ảnh cho mục đích marketing.
- Các thông tin giá bán, pháp lý, chính sách cần cập nhật theo từng thời điểm trước khi tư vấn/giao dịch.
