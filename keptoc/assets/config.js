/* Cấu hình landing. Pixel ID là public (hiện trên trình duyệt) nhưng ACCESS TOKEN
 * thì KHÔNG BAO GIỜ đặt ở đây — token chỉ nằm trong Script Properties của Apps Script.
 * Giá trị dạng YOUR_... = placeholder → pixel/endpoint tự tắt cho tới khi thay. */
window.COD_CONFIG = {
  ENDPOINT: 'https://script.google.com/macros/s/AKfycbwRVE-WqzCh2hkRim7AfY4R1R4hw9wfhWfiMK9_hD3FsE2pHEqhsQ0VpMAhmzvNTcaf/exec', // https://script.google.com/macros/s/.../exec
  META_PIXEL_ID: 'YOUR_META_PIXEL_ID',
  TIKTOK_PIXEL_ID: 'YOUR_TIKTOK_PIXEL_CODE',
  PRODUCT: { id: 'KPCT-MEO-01', name: 'Kẹp phồng chân tóc mini không dây', currency: 'VND' },
  // ⚠️ GIÁ ĐỀ XUẤT (GIẢ ĐỊNH) — chủ shop chưa chốt giá. Sửa price ở đây VÀ chữ giá trong index.html (hero, gói, FAQ, JSON-LD).
  // Không có giá gạch vì chưa có giá bán thật trước đó (compare: null). Chỉ thêm khi đã từng bán giá đó.
  PACKAGES: [
    { key: '1', label: '1 kẹp', qty: 1, price: 199000, compare: null, note: 'Phí ship 20.000đ', ship: 20000 },
    { key: '2', label: '2 kẹp', qty: 2, price: 359000, compare: null, note: 'Freeship', ship: 0, popular: true },
    { key: '3', label: '3 kẹp + quà', qty: 3, price: 499000, compare: null, note: 'Freeship + tặng lược chải (GIẢ ĐỊNH quà)', ship: 0 }
  ],
  UPSELL: { id: 'KPCT-MEO-UP', name: 'Thêm 1 kẹp phồng màu khác (tặng người thân)', price: 149000 }, // GIẢ ĐỊNH; null để tắt
  HOTLINE: '0395018127',
  ZALO: 'https://zalo.me/0395018127',
  EMAIL: 'info.tilux@gmail.com',
  IP_LOOKUP: 'https://api64.ipify.org?format=json', // '' để tắt (IP giúp tăng điểm so khớp)
  ABANDON_CAPTURE: false,
  THANKYOU_URL: 'cam-on.html'
};
