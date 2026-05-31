import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Phone, MessageCircle, Mail, MapPin, Home, Building2, KeyRound, Search,
  Waves, Landmark, ChevronRight, Menu, X, CheckCircle2, CalendarDays,
  Send, Star, Filter, MapPinned, LayoutGrid, XCircle
} from 'lucide-react';

const CONTACT = {
  name: 'Huyen Tran',
  brand: 'VungTau Living',
  phone: '0812 862 863',
  phoneHref: 'tel:0812862863',
  zalo: 'https://zalo.me/0812862863',
  messenger: 'https://m.me/huyen.tran.18488169',
  email: 'tranhuyen213@gmail.com',
  emailHref: 'mailto:tranhuyen213@gmail.com',
  address: 'Lavida Residences, đường 3/2, phường Phước Thắng, TP. Hồ Chí Minh',
};

const A = '/assets/';
const images = {
  logo: A + 'logo-vungtau-living-cropped.png',
  logoFull: A + 'logo-vungtau-living.png',
  lavidaAerial: A + 'lavida-aerial.webp',
  lavidaWalk: A + 'lavida-river-walk.webp',
  lavidaShop: A + 'lavida-shophouse.webp',
  lavidaVillas: A + 'lavida-villas.webp',
  lavidaPlan: A + 'lavida-masterplan.webp',
  blancaHero: A + 'blanca-hero.webp',
  blancaBeacon: A + 'blanca-beacon.webp',
  blancaOverview: A + 'blanca-overview.webp',
  blancaLobby: A + 'blanca-lobby.webp',
  blancaWaterpark: A + 'blanca-waterpark.webp',
  blancaRetail: A + 'blanca-retail.webp',
  blancaPark: A + 'blanca-central-park.webp',
};

const navItems = [
  { label: 'Trang chủ', href: '#home' },
  { label: 'Lavida', href: '#lavida' },
  { label: 'Blanca City', href: '#blanca' },
  { label: 'Nhà bán', href: '#ban' },
  { label: 'Cho thuê', href: '#thue' },
  { label: 'Ký gửi', href: '#kygui' },
  { label: 'Tin tức', href: '#tintuc' },
  { label: 'Liên hệ', href: '#lienhe' },
];

const projects = [
  {
    id: 'lavida',
    name: 'Lavida Residences',
    label: 'Khu dân cư cao cấp đã hình thành',
    summary: 'Khu đô thị thấp tầng trên trục đường 3/2, phù hợp an cư, mua bán lại, cho thuê và ký gửi nhà phố, biệt thự tại Vũng Tàu.',
    tags: ['Nhà phố vườn', 'Biệt thự', 'Shophouse', 'Ký gửi'],
    cta: 'Xem Lavida',
    href: '#lavida',
    stat: 'Đường 3/2',
    image: images.lavidaAerial,
  },
  {
    id: 'blanca',
    name: 'Blanca City',
    label: 'Đô thị biển mới tại Vũng Tàu',
    summary: 'Đô thị biển quy mô lớn, định hướng sống – nghỉ dưỡng – giải trí – thương mại cho khách hàng quan tâm tài sản ven biển.',
    tags: ['Đô thị biển', 'Sun Group', 'Beacon', 'Đầu tư'],
    cta: 'Xem Blanca City',
    href: '#blanca',
    stat: 'Bãi Sau',
    image: images.blancaHero,
  },
];

const projectDetails = {
  lavida: {
    id: 'lavida',
    eyebrow: 'Lavida Residences',
    name: 'Lavida Residences – Khu đô thị thấp tầng tại cửa ngõ Vũng Tàu',
    intro: 'Lavida Residences phù hợp với khách hàng tìm kiếm bất động sản đã hình thành, có thể xem thực tế, mua để ở, mua đầu tư, cho thuê hoặc ký gửi chuyển nhượng.',
    mapQuery: 'Lavida Residences đường 3 tháng 2 Vũng Tàu',
    mapTitle: 'Bản đồ vị trí Lavida Residences',
    gallery: [
      { src: images.lavidaAerial, alt: 'Toàn cảnh khu dân cư Lavida Residences' },
      { src: images.lavidaWalk, alt: 'Không gian cảnh quan và lối dạo nội khu Lavida' },
      { src: images.lavidaShop, alt: 'Nhà phố thương mại Lavida' },
    ],
    plan: { src: images.lavidaPlan, alt: 'Mặt bằng tổng thể Lavida Residences – hình ảnh tham khảo theo tài liệu dự án' },
    highlights: [
      { title: 'Tổng quan', desc: 'Dự án Lavida Residences nằm trên trục đường 3/2, định hướng khu đô thị xanh với nhà phố, biệt thự và shophouse.' },
      { title: 'Vị trí', desc: 'Mặt tiền đường 3/2, kết nối thuận tiện về trung tâm Vũng Tàu, Bà Rịa và các tiện ích hiện hữu.' },
      { title: 'Mặt bằng', desc: 'Mặt bằng thể hiện các nhóm sản phẩm LK, BT, NV, TM/VP, hệ thống đường nội khu và hướng kết nối về trung tâm Vũng Tàu.' },
      { title: 'Pháp lý & giá', desc: 'Giá và pháp lý cần kiểm tra theo từng căn cụ thể. Nên cập nhật danh sách bán/cho thuê trước khi khách đi xem.' },
    ],
    productTypes: [
      { title: 'Nhà phố vườn', desc: 'Phù hợp gia đình ở thật, ưu tiên không gian sống riêng tư trong khu đô thị đồng bộ.' },
      { title: 'Nhà phố thương mại', desc: 'Phù hợp khai thác kinh doanh, văn phòng, cho thuê hoặc vừa ở vừa kinh doanh tùy vị trí.' },
      { title: 'Biệt thự song lập', desc: 'Dòng sản phẩm dành cho khách hàng cần không gian rộng, riêng tư và giá trị tích sản.' },
      { title: 'Biệt thự đơn lập', desc: 'Sản phẩm có tính riêng tư cao, phù hợp nhóm khách hàng tìm tài sản cao cấp tại Vũng Tàu.' },
    ],
    faq: [
      { q: 'Lavida phù hợp để ở hay đầu tư?', a: 'Phù hợp cả hai. Khách ở thật nên ưu tiên môi trường sống; khách đầu tư nên ưu tiên vị trí, giá mua, pháp lý và khả năng cho thuê.' },
      { q: 'Giá Lavida hiện nay bao nhiêu?', a: 'Giá phụ thuộc từng căn, vị trí, diện tích, tình trạng hoàn thiện và pháp lý. Nên liên hệ để nhận danh sách cập nhật.' },
      { q: 'Có thể ký gửi nhà tại Lavida không?', a: 'Có. VungTau Living hỗ trợ chủ nhà ký gửi bán hoặc cho thuê, tư vấn giá và tìm khách phù hợp.' },
    ],
  },
  blanca: {
    id: 'blanca',
    eyebrow: 'Blanca City',
    name: 'Blanca City – Đô thị biển mới tại Vũng Tàu',
    intro: 'Blanca City được định hướng là đô thị biển tích hợp sống, nghỉ dưỡng, giải trí và thương mại, phù hợp khách hàng quan tâm tài sản ven biển và đầu tư dài hạn.',
    mapQuery: 'Blanca City Vũng Tàu đường 3 tháng 2 Bãi Sau',
    mapTitle: 'Bản đồ vị trí Blanca City',
    gallery: [
      { src: images.blancaHero, alt: 'Phối cảnh tổng quan Blanca City' },
      { src: images.blancaBeacon, alt: 'Tòa Beacon Blanca City' },
      { src: images.blancaWaterpark, alt: 'Tiện ích vui chơi giải trí – phối cảnh tham khảo' },
      { src: images.blancaRetail, alt: 'Không gian thương mại – phối cảnh tham khảo' },
      { src: images.blancaPark, alt: 'Không gian công viên trung tâm – phối cảnh tham khảo' },
      { src: images.blancaLobby, alt: 'Sảnh đón sang trọng – phối cảnh tham khảo' },
    ],
    plan: { src: images.blancaOverview, alt: 'Hình tổng quan/mặt bằng Blanca City – phối cảnh tham khảo theo tài liệu dự án' },
    highlights: [
      { title: 'Tổng quan', desc: 'Đô thị biển quy mô lớn, phát triển theo hướng tích hợp nhà ở, căn hộ, thương mại, dịch vụ, nghỉ dưỡng và giải trí.' },
      { title: 'Vị trí', desc: 'Gắn với trục đường 3/2 và khu vực ven biển Bãi Sau, tạo lợi thế kết nối nội đô và giá trị nghỉ dưỡng biển.' },
      { title: 'Sản phẩm', desc: 'Gồm căn hộ Blanca/Beacon, các dòng villa thấp tầng và sản phẩm thương mại theo từng phân khu.' },
      { title: 'Giá bán & chính sách', desc: 'Cần cập nhật theo từng giai đoạn bán hàng, loại hình, vị trí, chính sách thanh toán và hồ sơ pháp lý tại thời điểm tư vấn.' },
    ],
    productTypes: [
      { title: 'Căn hộ Beacon', desc: 'Dòng căn hộ sở hữu lâu dài, có các loại studio, 1PN+, 2PN, 2PN+, 3PN và duplex theo từng layout.' },
      { title: 'Căn hộ Blanca', desc: 'Dòng căn hộ trong đô thị biển, phù hợp ở, nghỉ dưỡng hoặc khai thác cho thuê tùy vị trí và tầm nhìn.' },
      { title: 'Casa Villa song lập', desc: 'Sản phẩm thấp tầng dành cho khách hàng cần không gian sống riêng tư trong đô thị biển.' },
      { title: 'Casa Villa đơn lập / Grand Villa', desc: 'Dòng sản phẩm cao cấp hơn, phù hợp tích sản dài hạn và nhu cầu nghỉ dưỡng gia đình.' },
    ],
    faq: [
      { q: 'Blanca City phù hợp để ở hay đầu tư?', a: 'Phù hợp nhiều mục tiêu, nhưng cần chọn dòng sản phẩm theo nhu cầu sử dụng, khả năng tài chính và thời gian nắm giữ.' },
      { q: 'Có thể nhận bảng giá Blanca City ở đâu?', a: 'Anh/chị có thể liên hệ Huyen Tran qua Zalo hoặc form tư vấn để nhận thông tin cập nhật theo từng thời điểm.' },
      { q: 'Có nên đầu tư Blanca City không?', a: 'Nên xem xét vị trí, giá vào, chính sách thanh toán, pháp lý, tiến độ và mục tiêu tài chính cá nhân trước khi quyết định.' },
    ],
  },
};

const properties = [
  { code: 'LK12-09', title: 'Nhà phố Lavida LK12-09', project: 'Lavida Residences', type: 'Nhà phố', status: 'Đang bán', price: 'Liên hệ', area: 'Theo hồ sơ căn', purpose: 'Ở thật / đầu tư', image: images.lavidaShop, highlights: ['Vị trí nội khu dễ khai thác', 'Phù hợp gia đình', 'Hỗ trợ xem nhà thực tế'] },
  { code: 'LAVIDA-RENT', title: 'Nhà phố Lavida cho thuê', project: 'Lavida Residences', type: 'Nhà phố / biệt thự', status: 'Cho thuê', price: 'Cập nhật theo căn', area: 'Đa dạng', purpose: 'Ở / văn phòng', image: images.lavidaVillas, highlights: ['Có căn phù hợp ở gia đình', 'Có căn phù hợp kinh doanh', 'Tư vấn theo ngân sách'] },
  { code: 'BC-BEACON', title: 'Sản phẩm Blanca City', project: 'Blanca City', type: 'Căn hộ / thương mại', status: 'Tư vấn', price: 'Nhận bảng giá', area: 'Theo phân khu', purpose: 'Nghỉ dưỡng / đầu tư', image: images.blancaBeacon, highlights: ['Đô thị biển quy mô lớn', 'Nhiều dòng sản phẩm', 'Cập nhật chính sách mới'] },
];

const services = [
  { icon: Home, title: 'Mua bán bất động sản', desc: 'Lọc sản phẩm theo nhu cầu ở thật, đầu tư, ngân sách, vị trí và pháp lý.' },
  { icon: KeyRound, title: 'Cho thuê bất động sản', desc: 'Cập nhật nhà phố, biệt thự, căn hộ cho thuê phù hợp gia đình, chuyên gia, văn phòng.' },
  { icon: Building2, title: 'Ký gửi nhà đất', desc: 'Hỗ trợ chủ nhà định giá, chuẩn bị hình ảnh, đăng tin và sàng lọc khách phù hợp.' },
  { icon: Search, title: 'Tư vấn đầu tư', desc: 'Phân tích sản phẩm theo vị trí, dòng tiền, thanh khoản và mục tiêu tài chính.' },
];

const reasons = [
  'Tập trung chuyên sâu Lavida Residences và Blanca City.',
  'Tư vấn bằng thông tin rõ ràng, không phóng đại quá mức.',
  'Hỗ trợ mua, bán, thuê, cho thuê và ký gửi trong cùng một hệ thống.',
  'Dễ liên hệ qua Hotline, Zalo, Messenger và form tư vấn nhanh.',
  'Giao diện đồng bộ tone logo: xanh navy, vàng champagne và cảm giác sang trọng.',
];

const posts = [
  { title: 'Lavida Residences Vũng Tàu: thông tin mua bán và cho thuê mới nhất', tag: 'Lavida', image: images.lavidaAerial, desc: 'Tổng quan vị trí, loại hình sản phẩm, mặt bằng và những lưu ý khi chọn mua hoặc thuê tại Lavida.' },
  { title: 'Blanca City Vũng Tàu có gì nổi bật?', tag: 'Blanca City', image: images.blancaOverview, desc: 'Góc nhìn tổng quan về đô thị biển, vị trí, sản phẩm và nhóm khách hàng phù hợp.' },
  { title: 'Ký gửi bất động sản tại Vũng Tàu: chủ nhà cần chuẩn bị gì?', tag: 'Ký gửi', image: images.lavidaWalk, desc: 'Quy trình ký gửi bán, cho thuê, định giá và truyền thông sản phẩm hiệu quả hơn.' },
];

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#031327]">
      <div className="text-center">
        <img src={images.logo} alt="Logo VungTau Living" className="mx-auto h-40 w-40 animate-pulse object-contain drop-shadow-2xl md:h-52 md:w-52" />
        <p className="mt-5 font-serif text-3xl font-semibold text-white">VungTau Living</p>
        <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[#d6a642]">Đang tải trải nghiệm</p>
      </div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, desc, dark = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#b8862f]">{eyebrow}</p>
      <h2 className={`font-serif text-3xl font-semibold tracking-tight md:text-5xl ${dark ? 'text-white' : 'text-[#061a33]'}`}>{title}</h2>
      {desc && <p className={`mt-5 text-base leading-8 md:text-lg ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{desc}</p>}
    </div>
  );
}

function ButtonLink({ href, children, variant = 'primary', className = '' }) {
  const base = 'inline-flex whitespace-nowrap items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#d6a642] focus:ring-offset-2';
  const styles = variant === 'primary'
    ? 'bg-[#061a33] text-white shadow-lg shadow-slate-950/20 hover:-translate-y-0.5 hover:bg-[#082746]'
    : variant === 'gold'
    ? 'bg-gradient-to-r from-[#b8862f] to-[#d6a642] text-white shadow-lg shadow-[#d6a642]/20 hover:-translate-y-0.5 hover:from-[#a77925] hover:to-[#c7932f]'
    : 'border border-[#d6a642]/45 bg-white/95 text-[#061a33] hover:-translate-y-0.5 hover:border-[#b8862f]';
  return <a href={href} className={`${base} ${styles} ${className}`}>{children}</a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d6a642]/35 bg-[#05162e]/95 text-white shadow-2xl shadow-slate-950/25 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 md:px-6">
        <a href="#home" className="group flex min-w-0 items-center gap-3">
          <img src={images.logo} alt="Logo VungTau Living" className="h-20 w-20 shrink-0 object-contain drop-shadow-[0_8px_18px_rgba(214,166,66,.22)] md:h-24 md:w-24" />
          <div className="hidden sm:block">
            <p className="font-serif text-2xl font-semibold leading-none tracking-tight text-white md:text-3xl">VungTau Living</p>
            <p className="mt-1 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f1c66a]">Môi giới & kinh doanh BĐS</p>
          </div>
        </a>
        <nav className="hidden items-center gap-5 lg:flex">{navItems.map((item) => <a key={item.href} href={item.href} className="whitespace-nowrap text-sm font-medium text-slate-100 hover:text-[#f1c66a]">{item.label}</a>)}</nav>
        <div className="hidden items-center gap-3 xl:flex">
          <a href={CONTACT.phoneHref} className="whitespace-nowrap rounded-full border border-[#d6a642]/30 px-4 py-2 text-sm font-semibold text-white hover:border-[#f1c66a]">{CONTACT.phone}</a>
          <ButtonLink href={CONTACT.zalo} variant="gold" className="whitespace-nowrap">Chat Zalo</ButtonLink>
        </div>
        <button onClick={() => setOpen((v) => !v)} className="rounded-full border border-white/20 p-2 text-white lg:hidden" aria-label="Mở menu">{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
      {open && <div className="border-t border-white/10 bg-[#05162e] px-4 pb-5 lg:hidden"><div className="grid gap-2 py-4">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-100 hover:bg-white/10">{item.label}</a>)}</div><div className="grid grid-cols-2 gap-3"><ButtonLink href={CONTACT.phoneHref} variant="secondary">Gọi ngay</ButtonLink><ButtonLink href={CONTACT.zalo} variant="gold">Chat Zalo</ButtonLink></div></div>}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#061a33] pt-32 text-white md:pt-36">
      <img src={images.blancaHero} alt="Blanca City Vũng Tàu" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(214,166,66,.34),transparent_28%),linear-gradient(90deg,#061a33_0%,#082746ee_54%,#020817cc_100%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#d6a642]/40 bg-[#020817]/60 px-4 py-2 text-sm font-semibold text-[#f5d78c] shadow-sm backdrop-blur">Bất động sản Lavida & Blanca City tại Vũng Tàu</div>
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">Tìm đúng bất động sản, đúng nhu cầu, đúng giá trị.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-100 md:text-xl">VungTau Living đồng hành cùng anh/chị trong mua bán, cho thuê, ký gửi và tư vấn đầu tư bất động sản tại Lavida Residences, Blanca City và khu vực Vũng Tàu.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><ButtonLink href="#ban" variant="gold">Xem nhà đang bán <ChevronRight size={17} /></ButtonLink><ButtonLink href={CONTACT.zalo} variant="secondary">Nhận tư vấn qua Zalo</ButtonLink><ButtonLink href="#kygui" variant="secondary">Ký gửi bất động sản</ButtonLink></div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">{[['2', 'Dự án trọng tâm'], ['24/7', 'Dễ liên hệ'], ['4', 'Dịch vụ chính']].map(([num, label]) => <div key={label} className="rounded-3xl border border-white/10 bg-[#020817]/45 p-5 shadow-sm backdrop-blur"><p className="font-serif text-3xl font-semibold text-[#f1c66a]">{num}</p><p className="mt-1 text-sm text-slate-200">{label}</p></div>)}</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
          <div className="rounded-[2.5rem] border border-[#d6a642]/25 bg-[#020817]/45 p-7 shadow-2xl shadow-black/30 backdrop-blur">
            <img src={images.logo} alt="Logo VungTau Living" className="mx-auto h-64 w-64 object-contain drop-shadow-[0_18px_35px_rgba(214,166,66,.18)] md:h-80 md:w-80" />
            <div className="mt-6 grid gap-3 md:grid-cols-2">{projects.map((p) => <a key={p.name} href={p.href} className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur hover:bg-white/15"><p className="text-xs uppercase tracking-[0.2em] text-[#f1c66a]">{p.stat}</p><h4 className="mt-2 font-serif text-2xl font-semibold">{p.name}</h4><p className="mt-2 text-sm leading-6 text-slate-200">{p.label}</p></a>)}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return <section id="gioithieu" className="relative overflow-hidden bg-[#f8f4ed] px-4 py-24 md:px-6"><div className="absolute left-[-12%] top-[-20%] h-96 w-96 rounded-full bg-[#d6a642]/20 blur-3xl" /><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div className="relative overflow-hidden rounded-[2.5rem] border border-[#d6a642]/25 bg-[#061a33] p-8 text-white shadow-2xl shadow-slate-950/15"><div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(214,166,66,.24),transparent_30%)]" /><div className="relative"><div className="mb-8 flex items-center gap-5"><img src={images.logo} alt="Logo VungTau Living" className="h-32 w-32 object-contain drop-shadow-[0_12px_25px_rgba(214,166,66,.2)]" /><div><p className="text-sm uppercase tracking-[0.28em] text-[#f1c66a]">Bộ nhận diện</p><h2 className="mt-2 font-serif text-3xl font-semibold">VungTau Living</h2></div></div><h3 className="font-serif text-4xl font-semibold leading-tight">Huyen Tran – người đồng hành tư vấn bất động sản Vũng Tàu.</h3><p className="mt-6 leading-8 text-slate-200">Logo mang tinh thần biển, đô thị, mái nhà và đường tăng trưởng. Website được đồng bộ theo tone xanh navy – vàng champagne, tạo cảm giác sang trọng, tin cậy và phù hợp lĩnh vực bất động sản cao cấp.</p><div className="mt-8 flex flex-wrap gap-3">{['Minh bạch', 'Tận tâm', 'Am hiểu', 'Chuyên sâu'].map((item) => <span key={item} className="rounded-full border border-[#d6a642]/30 bg-white/8 px-4 py-2 text-sm text-slate-100">{item}</span>)}</div></div></div><div className="grid gap-5 sm:grid-cols-2">{reasons.map((reason, index) => <motion.div key={reason} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="rounded-[2rem] border border-[#d6a642]/15 bg-white p-6 shadow-sm"><CheckCircle2 className="mb-5 text-[#b8862f]" /><p className="text-base leading-7 text-slate-700">{reason}</p></motion.div>)}</div></div></section>;
}

function Projects() {
  return <section id="duan" className="bg-white px-4 py-20 md:px-6"><SectionHeader eyebrow="Dự án trọng tâm" title="Hai trụ cột nội dung của VungTau Living" desc="Website tập trung sâu vào Lavida Residences và Blanca City để khách hàng dễ tìm thông tin, dễ so sánh và dễ liên hệ khi có nhu cầu thực tế." /><div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">{projects.map((p) => <motion.article key={p.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-lg shadow-slate-950/5"><div className="relative h-72"><img src={p.image} alt={p.name} className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#061a33]/85 to-transparent" /><span className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#061a33]">{p.stat}</span><h3 className="absolute bottom-5 left-6 font-serif text-4xl font-semibold text-white">{p.name}</h3></div><div className="p-7"><p className="text-sm uppercase tracking-[0.25em] text-[#b8862f]">{p.label}</p><p className="mt-5 text-base leading-8 text-slate-700">{p.summary}</p><div className="mt-7 flex flex-wrap gap-2">{p.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">{tag}</span>)}</div><div className="mt-8"><ButtonLink href={p.href} variant="primary">{p.cta} <ChevronRight size={17} /></ButtonLink></div></div></motion.article>)}</div></section>;
}

function ProductModal({ project, onClose }) {
  if (!project) return null;
  return <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#020817]/85 px-4 py-6 backdrop-blur"><div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-6 shadow-2xl"><div className="flex items-start justify-between gap-4"><div><p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b8862f]">Loại hình sản phẩm</p><h2 className="mt-2 font-serif text-4xl font-semibold text-[#061a33]">{project.name}</h2><p className="mt-4 max-w-3xl leading-8 text-slate-600">Thông tin được biên tập lại theo hướng dễ hiểu, không copy nguyên văn, phù hợp để khách hàng đọc nhanh trên website.</p></div><button onClick={onClose} className="rounded-full border border-slate-200 p-2 text-slate-700 hover:bg-slate-50" aria-label="Đóng"><XCircle /></button></div><div className="mt-8 grid gap-5 md:grid-cols-2">{project.productTypes.map((item) => <div key={item.title} className="rounded-3xl border border-[#d6a642]/20 bg-[#f8f4ed] p-6"><h3 className="font-serif text-2xl font-semibold text-[#061a33]">{item.title}</h3><p className="mt-3 leading-7 text-slate-700">{item.desc}</p></div>)}</div><figure className="mt-8 overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 p-3"><img src={project.plan.src} alt={project.plan.alt} className="w-full rounded-[1.5rem] object-contain" /><figcaption className="px-3 py-4 text-sm leading-6 text-slate-600">{project.plan.alt}</figcaption></figure><div className="mt-8 flex flex-col gap-3 sm:flex-row"><ButtonLink href={CONTACT.zalo} variant="gold">Nhận tư vấn sản phẩm</ButtonLink><button onClick={onClose} className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-[#061a33]">Đóng trang</button></div></div></div>;
}

function MapEmbed({ query, title }) {
  return <div className="overflow-hidden rounded-[2rem] border border-[#d6a642]/20 bg-white p-3 shadow-sm"><iframe title={title} src={`https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`} className="h-[360px] w-full rounded-[1.5rem] border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><p className="px-3 py-4 text-sm leading-6 text-slate-600">{title}. Bản đồ dùng Google Maps để khách hàng dễ hình dung vị trí thực tế.</p></div>;
}

function ImageGallery({ items }) {
  return <div className="grid gap-4 sm:grid-cols-3">{items.map((img) => <figure key={img.src} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100"><img src={img.src} alt={img.alt} className="h-48 w-full object-cover transition duration-500 hover:scale-105" /><figcaption className="p-4 text-sm text-slate-600">{img.alt}</figcaption></figure>)}</div>;
}

function ProjectDetail({ project, onProductClick }) {
  const [openMap, setOpenMap] = useState(false);
  return <section id={project.id} className="bg-[#f8f4ed] px-4 py-20 md:px-6"><div className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]"><div className="lg:sticky lg:top-32 lg:self-start"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#b8862f]">{project.eyebrow}</p><h2 className="font-serif text-4xl font-semibold tracking-tight text-[#061a33] md:text-5xl">{project.name}</h2><p className="mt-6 text-lg leading-9 text-slate-600">{project.intro}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><ButtonLink href={CONTACT.zalo} variant="gold">Nhận tư vấn</ButtonLink><ButtonLink href="#form" variant="secondary">Gửi nhu cầu</ButtonLink></div><div className="mt-6 grid gap-3 sm:grid-cols-2"><button onClick={() => setOpenMap((v) => !v)} className="flex items-center justify-center gap-2 rounded-full border border-[#d6a642]/35 bg-white px-5 py-3 text-sm font-semibold text-[#061a33] hover:border-[#b8862f]"><MapPinned size={18} /> Xem bản đồ vị trí</button><button onClick={() => onProductClick(project)} className="flex items-center justify-center gap-2 rounded-full bg-[#061a33] px-5 py-3 text-sm font-semibold text-white hover:bg-[#082746]"><LayoutGrid size={18} /> Xem loại hình sản phẩm</button></div></div><div className="grid gap-5"><ImageGallery items={project.gallery} />{openMap && <MapEmbed query={project.mapQuery} title={project.mapTitle} />}<figure className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-3 shadow-sm"><img src={project.plan.src} alt={project.plan.alt} className="w-full rounded-[1.5rem] object-contain" /><figcaption className="px-3 py-4 text-sm leading-6 text-slate-600">{project.plan.alt}</figcaption></figure>{project.highlights.map((item) => <button key={item.title} onClick={() => item.title === 'Vị trí' ? setOpenMap((v) => !v) : item.title.includes('Sản phẩm') || item.title.includes('Mặt bằng') ? onProductClick(project) : undefined} className="rounded-[2rem] border border-slate-100 bg-white p-6 text-left shadow-sm hover:border-[#d6a642]/40"><h3 className="font-serif text-2xl font-semibold text-[#061a33]">{item.title}</h3><p className="mt-3 leading-8 text-slate-600">{item.desc}</p>{item.title === 'Vị trí' && <p className="mt-3 text-sm font-semibold text-[#b8862f]">Bấm để mở/ẩn bản đồ vị trí</p>}{(item.title.includes('Sản phẩm') || item.title.includes('Mặt bằng')) && <p className="mt-3 text-sm font-semibold text-[#b8862f]">Bấm để xem trang loại hình sản phẩm</p>}</button>)}<div className="rounded-[2rem] border border-amber-100 bg-white p-6"><h3 className="font-serif text-2xl font-semibold text-[#061a33]">Câu hỏi thường gặp</h3><div className="mt-5 grid gap-4">{project.faq.map((f) => <details key={f.q} className="group rounded-2xl bg-[#f8f4ed] p-5 shadow-sm"><summary className="cursor-pointer list-none font-semibold text-slate-900">{f.q}</summary><p className="mt-3 leading-7 text-slate-600">{f.a}</p></details>)}</div></div></div></div></div></section>;
}

function Services() {
  return <section id="dichvu" className="bg-[#061a33] px-4 py-20 text-white md:px-6"><SectionHeader dark eyebrow="Dịch vụ" title="Một điểm chạm cho nhiều nhu cầu bất động sản" desc="Từ khách mua, khách thuê đến chủ nhà cần ký gửi, VungTau Living xây dựng quy trình tư vấn rõ ràng và dễ bắt đầu." /><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">{services.map((s) => { const Icon = s.icon; return <div key={s.title} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur"><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d6a642]/15 text-[#f1c66a]"><Icon size={27} /></div><h3 className="font-serif text-2xl font-semibold">{s.title}</h3><p className="mt-4 leading-7 text-slate-300">{s.desc}</p></div>; })}</div></section>;
}

function Listings() {
  const [filter, setFilter] = useState('Tất cả');
  const filters = ['Tất cả', 'Đang bán', 'Cho thuê', 'Tư vấn'];
  const list = useMemo(() => filter === 'Tất cả' ? properties : properties.filter((p) => p.status === filter), [filter]);
  return <section id="ban" className="bg-white px-4 py-20 md:px-6"><SectionHeader eyebrow="Sản phẩm nổi bật" title="Danh sách bất động sản đang tư vấn" desc="Thông tin giá và tình trạng sản phẩm nên được cập nhật theo từng thời điểm. Khách hàng có thể gửi nhu cầu để nhận danh sách phù hợp nhất." /><div className="mx-auto max-w-7xl"><div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-[#f8f4ed] p-3 shadow-sm"><div className="flex items-center gap-2 px-3 text-sm font-semibold text-slate-700"><Filter size={18} /> Bộ lọc nhanh</div><div className="flex flex-wrap gap-2">{filters.map((f) => <button key={f} onClick={() => setFilter(f)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${filter === f ? 'bg-[#061a33] text-white' : 'bg-white text-slate-700 hover:bg-slate-100'}`}>{f}</button>)}</div></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{list.map((p) => <article key={p.code} className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-100"><div className="relative h-56"><img src={p.image} alt={p.title} className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#061a33]/80 to-transparent" /><div className="absolute inset-0 flex flex-col justify-between p-6 text-white"><span className="w-fit rounded-full bg-white/20 px-3 py-2 text-xs font-semibold backdrop-blur">{p.status}</span><div><p className="text-sm text-amber-100">Mã: {p.code}</p><h3 className="mt-2 font-serif text-3xl font-semibold">{p.title}</h3></div></div></div><div className="p-6"><div className="grid grid-cols-2 gap-3 text-sm"><div className="rounded-2xl bg-slate-50 p-4"><p className="text-slate-500">Dự án</p><p className="mt-1 font-semibold text-slate-900">{p.project}</p></div><div className="rounded-2xl bg-slate-50 p-4"><p className="text-slate-500">Giá</p><p className="mt-1 font-semibold text-slate-900">{p.price}</p></div><div className="rounded-2xl bg-slate-50 p-4"><p className="text-slate-500">Loại hình</p><p className="mt-1 font-semibold text-slate-900">{p.type}</p></div><div className="rounded-2xl bg-slate-50 p-4"><p className="text-slate-500">Nhu cầu</p><p className="mt-1 font-semibold text-slate-900">{p.purpose}</p></div></div><ul className="mt-5 space-y-3">{p.highlights.map((h) => <li key={h} className="flex gap-2 text-sm leading-6 text-slate-600"><CheckCircle2 size={17} className="mt-1 shrink-0 text-[#b8862f]" /> {h}</li>)}</ul><div className="mt-6 grid grid-cols-2 gap-3"><ButtonLink href={CONTACT.zalo} variant="gold" className="w-full">Hỏi Zalo</ButtonLink><ButtonLink href="#form" variant="secondary" className="w-full">Chi tiết</ButtonLink></div></div></article>)}</div></div></section>;
}

function LeadForm({ title = 'Nhận tư vấn bất động sản', mode = 'lead' }) {
  const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
  const [formData, setFormData] = useState({ name: '', phone: '', need: '', project: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [notice, setNotice] = useState('');
  const updateField = (field, value) => setFormData((current) => ({ ...current, [field]: value }));
  const buildPayload = () => ({ formTitle: title, formMode: mode, name: formData.name.trim(), phone: formData.phone.trim(), need: formData.need, project: formData.project, message: formData.message.trim(), source: 'Website VungTau Living', pageUrl: window.location.href, submittedAt: new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }) });
  const openEmailFallback = (payload) => { const subject = encodeURIComponent(`[VungTau Living] Khách gửi form: ${payload.name || 'Chưa có tên'}`); const body = encodeURIComponent(`Có khách vừa gửi nhu cầu từ website VungTau Living:\n\nHọ tên: ${payload.name}\nSố điện thoại: ${payload.phone}\nNhu cầu: ${payload.need}\nDự án quan tâm: ${payload.project}\nNội dung: ${payload.message}\nNguồn: ${payload.source}\nTrang gửi: ${payload.pageUrl}\nThời gian: ${payload.submittedAt}`); window.location.href = `${CONTACT.emailHref}?subject=${subject}&body=${body}`; };
  const handleSubmit = async (event) => { event.preventDefault(); const payload = buildPayload(); if (!payload.name || !payload.phone) { setStatus('error'); setNotice('Anh/chị vui lòng nhập họ tên và số điện thoại để Huyen Tran liên hệ lại.'); return; } setStatus('loading'); setNotice('Đang gửi thông tin...'); if (!SCRIPT_URL) { openEmailFallback(payload); setStatus('success'); setNotice('Website chưa gắn Google Sheet, hệ thống đã mở email để gửi thông tin cho Huyen Tran.'); return; } try { await fetch(SCRIPT_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) }); setStatus('success'); setNotice('Cảm ơn anh/chị. Thông tin đã được ghi nhận, Huyen Tran sẽ liên hệ lại sớm.'); setFormData({ name: '', phone: '', need: '', project: '', message: '' }); } catch (error) { console.error(error); setStatus('error'); setNotice('Form chưa gửi được. Anh/chị có thể gọi/Zalo trực tiếp hoặc thử lại sau.'); } };
  return <form id="form" onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-950/5"><h3 className="font-serif text-3xl font-semibold text-[#061a33]">{title}</h3><p className="mt-3 leading-7 text-slate-600">Để lại nhu cầu, Huyen Tran sẽ liên hệ và gửi thông tin phù hợp qua điện thoại/Zalo.</p><div className="mt-6 grid gap-4"><input className="rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-[#d6a642]" placeholder="Họ tên" value={formData.name} onChange={(event) => updateField('name', event.target.value)} autoComplete="name" /><input className="rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-[#d6a642]" placeholder="Số điện thoại" value={formData.phone} onChange={(event) => updateField('phone', event.target.value)} autoComplete="tel" /><select className="rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-[#d6a642]" value={formData.need} onChange={(event) => updateField('need', event.target.value)}><option value="" disabled>Nhu cầu của anh/chị</option><option>Mua bất động sản</option><option>Thuê bất động sản</option><option>Bán / ký gửi</option><option>Cho thuê / ký gửi</option><option>Tư vấn đầu tư</option></select><select className="rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-[#d6a642]" value={formData.project} onChange={(event) => updateField('project', event.target.value)}><option value="" disabled>Dự án quan tâm</option><option>Lavida Residences</option><option>Blanca City</option><option>Khu vực Vũng Tàu khác</option></select><textarea className="min-h-32 rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-[#d6a642]" placeholder={mode === 'consign' ? 'Mô tả tài sản: vị trí, loại hình, giá mong muốn, pháp lý...' : 'Ngân sách, nhu cầu, thời gian muốn xem nhà...'} value={formData.message} onChange={(event) => updateField('message', event.target.value)} /><button type="submit" disabled={status === 'loading'} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#b8862f] to-[#d6a642] px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-[#d6a642]/20 hover:from-[#a77925] hover:to-[#c7932f] disabled:cursor-not-allowed disabled:opacity-70"><Send size={17} /> {status === 'loading' ? 'Đang gửi...' : 'Gửi nhu cầu tư vấn'}</button></div>{notice && <p className={`mt-4 rounded-2xl px-4 py-3 text-sm leading-6 ${status === 'error' ? 'bg-red-50 text-red-700' : 'bg-emerald-50 text-emerald-700'}`}>{notice}</p>}<p className="mt-4 text-xs leading-6 text-slate-500">Form đã sẵn sàng kết nối Google Sheet + email. Nếu chưa cấu hình VITE_GOOGLE_SCRIPT_URL, form sẽ tự mở email dự phòng để gửi thông tin.</p></form>;
}

function Consign() {
  return <section id="kygui" className="bg-[#f8f4ed] px-4 py-20 md:px-6"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#b8862f]">Ký gửi bất động sản</p><h2 className="font-serif text-4xl font-semibold tracking-tight text-[#061a33] md:text-5xl">Chủ nhà cần bán hoặc cho thuê tại Lavida, Blanca, Vũng Tàu?</h2><p className="mt-6 text-lg leading-9 text-slate-600">VungTau Living hỗ trợ tiếp nhận thông tin, tư vấn giá, chuẩn bị hình ảnh, viết nội dung đăng tin, truyền thông sản phẩm và sàng lọc khách hàng phù hợp.</p><img src={images.lavidaWalk} alt="Không gian Lavida" className="mt-8 h-64 w-full rounded-[2rem] object-cover shadow-sm" /><div className="mt-8 grid gap-4">{['Gửi thông tin tài sản và nhu cầu bán/cho thuê.', 'Tư vấn mức giá phù hợp thị trường và tình trạng sản phẩm.', 'Chuẩn bị nội dung, hình ảnh và đăng trên các kênh phù hợp.', 'Sàng lọc khách, hỗ trợ xem nhà, đàm phán và giao dịch.'].map((step, i) => <div key={step} className="flex gap-4 rounded-3xl border border-slate-100 bg-white p-5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#061a33] text-sm font-bold text-white">{i + 1}</span><p className="leading-7 text-slate-700">{step}</p></div>)}</div></div><LeadForm title="Gửi thông tin ký gửi" mode="consign" /></div></section>;
}

function Blog() {
  return <section id="tintuc" className="bg-white px-4 py-20 md:px-6"><SectionHeader eyebrow="Tin tức & SEO" title="Nội dung giúp khách hàng tìm thấy bạn trên Google" desc="Các bài viết nên tập trung vào câu hỏi thật của khách hàng: giá bán, mặt bằng, pháp lý, cho thuê, ký gửi và so sánh lựa chọn." /><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">{posts.map((post) => <article key={post.title} className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-100"><img src={post.image} alt={post.title} className="h-48 w-full object-cover" /><div className="p-6"><span className="rounded-full bg-amber-50 px-3 py-2 text-xs font-semibold text-[#b8862f]">{post.tag}</span><h3 className="mt-5 font-serif text-2xl font-semibold leading-tight text-[#061a33]">{post.title}</h3><p className="mt-4 leading-7 text-slate-600">{post.desc}</p><a href="#form" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#061a33] hover:text-[#b8862f]">Đọc thêm <ChevronRight size={16} /></a></div></article>)}</div></section>;
}

function Contact() {
  return <section id="lienhe" className="bg-[#061a33] px-4 py-20 text-white md:px-6"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#f1c66a]">Liên hệ</p><h2 className="font-serif text-4xl font-semibold md:text-5xl">Trao đổi trực tiếp với Huyen Tran</h2><p className="mt-6 text-lg leading-9 text-slate-300">Anh/chị có thể gửi nhu cầu mua, bán, thuê, cho thuê hoặc ký gửi bất động sản. Tôi sẽ lọc thông tin phù hợp và phản hồi sớm nhất có thể.</p><div className="mt-8 grid gap-4"><a href={CONTACT.phoneHref} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5 hover:bg-white/[0.09]"><Phone className="text-[#f1c66a]" /> {CONTACT.phone}</a><a href={CONTACT.emailHref} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5 hover:bg-white/[0.09]"><Mail className="text-[#f1c66a]" /> {CONTACT.email}</a><div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5"><MapPin className="mt-1 shrink-0 text-[#f1c66a]" /> <span>{CONTACT.address}</span></div></div></div><LeadForm title="Nhận danh sách sản phẩm phù hợp" /></div></section>;
}

function FloatingCTA() {
  return <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3"><a href={CONTACT.phoneHref} className="flex h-14 w-14 items-center justify-center rounded-full bg-[#061a33] p-4 text-white shadow-xl shadow-slate-950/30" aria-label="Gọi điện"><Phone size={22} /></a><a href={CONTACT.zalo} className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d6a642] p-4 text-white shadow-xl shadow-[#d6a642]/30" aria-label="Zalo"><MessageCircle size={22} /></a><a href={CONTACT.messenger} className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-600 p-4 text-white shadow-xl shadow-sky-600/30" aria-label="Messenger"><Send size={20} /></a></div>;
}

function Footer() {
  return <footer className="bg-[#020817] px-4 py-14 text-slate-300 md:px-6"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4"><div className="md:col-span-2"><div className="flex items-center gap-4"><img src={images.logo} alt="Logo VungTau Living" className="h-28 w-28 object-contain drop-shadow-[0_12px_25px_rgba(214,166,66,.18)]" /><div><h3 className="font-serif text-3xl font-semibold text-white">VungTau Living</h3><p className="mt-1 text-sm uppercase tracking-[0.2em] text-[#d6a642]">Môi giới & kinh doanh bất động sản</p></div></div><p className="mt-5 max-w-xl leading-7">Website tư vấn bất động sản Lavida Residences, Blanca City và khu vực Vũng Tàu, định hướng minh bạch, gần gũi và chuyên nghiệp.</p><p className="mt-5 text-sm text-slate-500">Thông tin, hình ảnh, giá bán và chính sách trên website cần được cập nhật theo từng thời điểm và kiểm tra theo hồ sơ thực tế trước khi giao dịch.</p></div><div><h4 className="font-semibold text-white">Menu</h4><div className="mt-4 grid gap-2">{navItems.slice(0, 6).map((item) => <a key={item.href} href={item.href} className="hover:text-[#f1c66a]">{item.label}</a>)}</div></div><div><h4 className="font-semibold text-white">Liên hệ</h4><div className="mt-4 grid gap-2"><a href={CONTACT.phoneHref} className="hover:text-[#f1c66a]">{CONTACT.phone}</a><a href={CONTACT.zalo} className="hover:text-[#f1c66a]">Zalo Huyen Tran</a><a href={CONTACT.messenger} className="hover:text-[#f1c66a]">Messenger</a><a href={CONTACT.emailHref} className="hover:text-[#f1c66a]">{CONTACT.email}</a></div></div></div><div className="mx-auto mt-10 max-w-7xl border-t border-[#d6a642]/15 pt-6 text-sm text-slate-500">© {new Date().getFullYear()} VungTau Living by Huyen Tran. All rights reserved.</div></footer>;
}

export default function VungTauLivingWebsite() {
  const [isLoading, setIsLoading] = useState(true);
  const [modalProject, setModalProject] = useState(null);
  useEffect(() => { const timer = window.setTimeout(() => setIsLoading(false), 700); return () => window.clearTimeout(timer); }, []);
  return <>{isLoading && <LoadingScreen />}<main className="min-h-screen scroll-smooth bg-white text-slate-900"><Header /><Hero /><About /><Projects /><ProjectDetail project={projectDetails.lavida} onProductClick={setModalProject} /><ProjectDetail project={projectDetails.blanca} onProductClick={setModalProject} /><Services /><Listings /><section id="thue" className="bg-white px-4 py-20 md:px-6"><SectionHeader eyebrow="Cho thuê" title="Nhà phố, biệt thự, căn hộ cho thuê tại Vũng Tàu" desc="Khách thuê có thể gửi nhu cầu về ngân sách, thời gian thuê, mục đích sử dụng và khu vực mong muốn để được lọc căn phù hợp." /><div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-100 bg-[#f8f4ed] p-8 text-center"><CalendarDays className="mx-auto mb-5 text-[#b8862f]" size={38} /><h3 className="font-serif text-3xl font-semibold text-[#061a33]">Nhận danh sách căn cho thuê mới nhất</h3><p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">Danh sách cho thuê thay đổi nhanh theo từng thời điểm. Hãy gửi nhu cầu để nhận căn phù hợp thay vì mất thời gian xem quá nhiều sản phẩm không đúng tiêu chí.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><ButtonLink href={CONTACT.zalo} variant="gold">Gửi nhu cầu thuê qua Zalo</ButtonLink><ButtonLink href="#form" variant="secondary">Điền form tư vấn</ButtonLink></div></div></section><Consign /><Blog /><Contact /><Footer /><FloatingCTA />{modalProject && <ProductModal project={modalProject} onClose={() => setModalProject(null)} />}</main></>;
}
