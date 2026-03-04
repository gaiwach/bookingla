export type Language = "en" | "th" | "la";

export const languageNames: Record<Language, string> = {
  en: "EN",
  th: "ไทย",
  la: "ລາວ",
};

const translations = {
  // Navbar
  "nav.home": { en: "Home", th: "หน้าแรก", la: "ໜ້າຫຼັກ" },
  "nav.rooms": { en: "Rooms", th: "ห้องพัก", la: "ຫ້ອງພັກ" },
  "nav.contact": { en: "Contact", th: "ติดต่อ", la: "ຕິດຕໍ່" },
  "nav.bookNow": { en: "Book Now", th: "จองเลย", la: "ຈອງດຽວນີ້" },

  // Hero
  "hero.welcome": { en: "Welcome to", th: "ยินดีต้อนรับสู่", la: "ຍິນດີຕ້ອນຮັບສູ່" },
  "hero.subtitle": {
    en: "Where luxury meets tranquility. Experience world-class hospitality in paradise.",
    th: "ที่ซึ่งความหรูหราพบกับความสงบ สัมผัสการบริการระดับโลก",
    la: "ບ່ອນທີ່ຄວາມຫລູຫລາພົບກັບຄວາມສະຫງົບ ສຳພັດການບໍລິການລະດັບໂລກ",
  },

  // Search
  "search.checkIn": { en: "Check-in", th: "เช็คอิน", la: "ເຊັກອິນ" },
  "search.checkOut": { en: "Check-out", th: "เช็คเอาท์", la: "ເຊັກເອົາ" },
  "search.guests": { en: "Guests", th: "จำนวนผู้เข้าพัก", la: "ຈຳນວນແຂກ" },
  "search.guest": { en: "Guest", th: "ผู้เข้าพัก", la: "ແຂກ" },
  "search.search": { en: "Search", th: "ค้นหา", la: "ຊອກຫາ" },

  // Rooms section
  "rooms.subtitle": { en: "Accommodation", th: "ที่พัก", la: "ທີ່ພັກ" },
  "rooms.title": { en: "Our Finest Rooms", th: "ห้องพักยอดเยี่ยม", la: "ຫ້ອງພັກດີເລີດ" },
  "rooms.pageTitle": { en: "Our Rooms & Suites", th: "ห้องพักและห้องชุด", la: "ຫ້ອງພັກ ແລະ ຫ້ອງຊຸດ" },
  "rooms.pageDesc": {
    en: "From cozy comfort to presidential grandeur — find the perfect room for your stay.",
    th: "จากความสะดวกสบายสู่ความหรูหราระดับประธานาธิบดี — ค้นหาห้องพักที่สมบูรณ์แบบ",
    la: "ຈາກຄວາມສະດວກສະບາຍສູ່ຄວາມຫລູຫລາ — ຊອກຫາຫ້ອງພັກທີ່ສົມບູນແບບ",
  },
  "rooms.perNight": { en: "/ night", th: "/ คืน", la: "/ ຄືນ" },
  "rooms.viewDetails": { en: "View Details", th: "ดูรายละเอียด", la: "ເບິ່ງລາຍລະອຽດ" },

  // Reviews
  "reviews.subtitle": { en: "Testimonials", th: "ข้อความรับรอง", la: "ຄຳຊົມເຊີຍ" },
  "reviews.title": { en: "What Our Guests Say", th: "แขกของเราพูดอะไร", la: "ແຂກຂອງພວກເຮົາເວົ້າຫຍັງ" },

  // CTA
  "cta.title": { en: "Ready for an Unforgettable Stay?", th: "พร้อมสำหรับการเข้าพักที่น่าจดจำ?", la: "ພ້ອມສຳລັບການພັກທີ່ບໍ່ລືມ?" },
  "cta.desc": {
    en: "Book your room today and discover the perfect blend of luxury, comfort, and breathtaking views.",
    th: "จองห้องพักวันนี้และค้นพบการผสมผสานที่สมบูรณ์แบบ",
    la: "ຈອງຫ້ອງພັກມື້ນີ້ ແລະ ຄົ້ນພົບການປະສົມປະສານທີ່ສົມບູນແບບ",
  },
  "cta.bookRoom": { en: "Book Your Room", th: "จองห้องพัก", la: "ຈອງຫ້ອງພັກ" },

  // Room Detail
  "detail.back": { en: "Back to Rooms", th: "กลับไปห้องพัก", la: "ກັບໄປຫ້ອງພັກ" },
  "detail.notFound": { en: "Room not found", th: "ไม่พบห้องพัก", la: "ບໍ່ພົບຫ້ອງພັກ" },
  "detail.upTo": { en: "Up to", th: "สูงสุด", la: "ສູງສຸດ" },
  "detail.guestsLabel": { en: "guests", th: "ผู้เข้าพัก", la: "ແຂກ" },
  "detail.amenities": { en: "Amenities", th: "สิ่งอำนวยความสะดวก", la: "ສິ່ງອຳນວຍຄວາມສະດວກ" },
  "detail.bookThis": { en: "Book This Room", th: "จองห้องนี้", la: "ຈອງຫ້ອງນີ້" },
  "detail.fullName": { en: "Full Name", th: "ชื่อเต็ม", la: "ຊື່ເຕັມ" },
  "detail.phone": { en: "Phone Number", th: "เบอร์โทรศัพท์", la: "ເບີໂທລະສັບ" },
  "detail.email": { en: "Email", th: "อีเมล", la: "ອີເມລ" },
  "detail.numGuests": { en: "Number of Guests", th: "จำนวนผู้เข้าพัก", la: "ຈຳນວນແຂກ" },
  "detail.night": { en: "night", th: "คืน", la: "ຄືນ" },
  "detail.nights": { en: "nights", th: "คืน", la: "ຄືນ" },
  "detail.total": { en: "Total", th: "รวม", la: "ລວມ" },
  "detail.confirm": { en: "Confirm Booking", th: "ยืนยันการจอง", la: "ຢືນຢັນການຈອງ" },
  "detail.fillFields": { en: "Please fill in all required fields", th: "กรุณากรอกข้อมูลที่จำเป็น", la: "ກະລຸນາຕື່ມຂໍ້ມູນທີ່ຈຳເປັນ" },

  // Booking Confirmation
  "confirm.title": { en: "Booking Confirmed!", th: "ยืนยันการจองแล้ว!", la: "ຢືນຢັນການຈອງແລ້ວ!" },
  "confirm.thanks": { en: "Thank you", th: "ขอบคุณ", la: "ຂອບໃຈ" },
  "confirm.received": {
    en: "Your reservation has been received.",
    th: "การจองของคุณได้รับแล้ว",
    la: "ການຈອງຂອງທ່ານໄດ້ຮັບແລ້ວ",
  },
  "confirm.room": { en: "Room", th: "ห้องพัก", la: "ຫ້ອງພັກ" },
  "confirm.home": { en: "Home", th: "หน้าแรก", la: "ໜ້າຫຼັກ" },
  "confirm.browse": { en: "Browse Rooms", th: "ดูห้องพัก", la: "ເບິ່ງຫ້ອງພັກ" },

  // Contact
  "contact.subtitle": { en: "Get in Touch", th: "ติดต่อเรา", la: "ຕິດຕໍ່ພວກເຮົາ" },
  "contact.title": { en: "Contact Us", th: "ติดต่อเรา", la: "ຕິດຕໍ່ພວກເຮົາ" },
  "contact.address": { en: "Address", th: "ที่อยู่", la: "ທີ່ຢູ່" },
  "contact.phone": { en: "Phone", th: "โทรศัพท์", la: "ໂທລະສັບ" },
  "contact.email": { en: "Email", th: "อีเมล", la: "ອີເມລ" },
  "contact.frontDesk": { en: "Front Desk", th: "ฟรอนท์เดสก์", la: "ຝ່າຍຕ້ອນຮັບ" },
  "contact.available": { en: "24/7 Available", th: "เปิดให้บริการ 24/7", la: "ເປີດໃຫ້ບໍລິການ 24/7" },
  "contact.sendMessage": { en: "Send a Message", th: "ส่งข้อความ", la: "ສົ່ງຂໍ້ຄວາມ" },
  "contact.name": { en: "Name", th: "ชื่อ", la: "ຊື່" },
  "contact.subject": { en: "Subject", th: "หัวข้อ", la: "ຫົວຂໍ້" },
  "contact.message": { en: "Message", th: "ข้อความ", la: "ຂໍ້ຄວາມ" },
  "contact.send": { en: "Send Message", th: "ส่งข้อความ", la: "ສົ່ງຂໍ້ຄວາມ" },
  "contact.success": { en: "Message sent! We'll get back to you shortly.", th: "ส่งข้อความแล้ว! เราจะติดต่อกลับเร็วๆ นี้", la: "ສົ່ງຂໍ້ຄວາມແລ້ວ! ພວກເຮົາຈະຕິດຕໍ່ກັບທ່ານໄວໆນີ້" },

  // Footer
  "footer.desc": {
    en: "Experience luxury redefined. Nestled in paradise, GrandHaven offers world-class hospitality and unforgettable moments.",
    th: "สัมผัสความหรูหราที่นิยามใหม่ GrandHaven มอบการบริการระดับโลก",
    la: "ສຳພັດຄວາມຫລູຫລາທີ່ນິຍາມໃໝ່ GrandHaven ມອບການບໍລິການລະດັບໂລກ",
  },
  "footer.quickLinks": { en: "Quick Links", th: "ลิงก์ด่วน", la: "ລິ້ງດ່ວນ" },
  "footer.contact": { en: "Contact", th: "ติดต่อ", la: "ຕິດຕໍ່" },
  "footer.rights": { en: "All rights reserved.", th: "สงวนลิขสิทธิ์", la: "ສະຫງວນລິຂະສິດ" },
} as const;

export type TranslationKey = keyof typeof translations;

export default translations;
