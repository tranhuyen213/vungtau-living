/**
 * VungTau Living lead form endpoint for Google Apps Script.
 * Công dụng:
 * 1) Ghi thông tin khách vào Google Sheet.
 * 2) Gửi email thông báo cho Huyen Tran.
 *
 * Cách dùng:
 * - Tạo Google Sheet mới.
 * - Extensions / Tiện ích mở rộng -> Apps Script.
 * - Dán toàn bộ code này vào Code.gs.
 * - Sửa RECIPIENT_EMAIL nếu cần.
 * - Deploy -> New deployment -> Web app.
 */

const RECIPIENT_EMAIL = 'tranhuyen213@gmail.com';
const SHEET_NAME = 'Leads';

function doPost(e) {
  try {
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);

    const payload = parsePayload_(e);
    const sheet = getOrCreateSheet_();
    ensureHeader_(sheet);

    const now = new Date();
    const row = [
      now,
      payload.submittedAt || '',
      payload.name || '',
      payload.phone || '',
      payload.need || '',
      payload.project || '',
      payload.message || '',
      payload.formTitle || '',
      payload.formMode || '',
      payload.source || '',
      payload.pageUrl || '',
    ];

    sheet.appendRow(row);
    sendNotificationEmail_(payload, now);
    lock.releaseLock();

    return jsonResponse_({ ok: true, message: 'Lead saved successfully' });
  } catch (error) {
    return jsonResponse_({ ok: false, message: error.toString() });
  }
}

function doGet() {
  return jsonResponse_({ ok: true, message: 'VungTau Living lead endpoint is running' });
}

function parsePayload_(e) {
  if (!e || !e.postData || !e.postData.contents) return {};
  try {
    return JSON.parse(e.postData.contents);
  } catch (error) {
    return e.parameter || {};
  }
}

function getOrCreateSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);
  return sheet;
}

function ensureHeader_(sheet) {
  if (sheet.getLastRow() > 0) return;
  sheet.appendRow([
    'Ngày nhận bởi Google',
    'Thời gian từ website',
    'Họ tên',
    'Số điện thoại',
    'Nhu cầu',
    'Dự án quan tâm',
    'Nội dung ghi chú',
    'Tên form',
    'Loại form',
    'Nguồn',
    'Trang gửi',
  ]);
  sheet.setFrozenRows(1);
}

function sendNotificationEmail_(payload, now) {
  const subject = `[VungTau Living] Khách gửi form: ${payload.name || 'Chưa có tên'}`;
  const body = [
    'Có khách vừa gửi nhu cầu từ website VungTau Living.',
    '',
    `Họ tên: ${payload.name || ''}`,
    `Số điện thoại: ${payload.phone || ''}`,
    `Nhu cầu: ${payload.need || ''}`,
    `Dự án quan tâm: ${payload.project || ''}`,
    `Nội dung: ${payload.message || ''}`,
    `Tên form: ${payload.formTitle || ''}`,
    `Loại form: ${payload.formMode || ''}`,
    `Nguồn: ${payload.source || ''}`,
    `Trang gửi: ${payload.pageUrl || ''}`,
    `Thời gian website: ${payload.submittedAt || ''}`,
    `Thời gian Google nhận: ${now}`,
  ].join('\n');

  MailApp.sendEmail({
    to: RECIPIENT_EMAIL,
    subject,
    body,
    replyTo: RECIPIENT_EMAIL,
  });
}

function jsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
