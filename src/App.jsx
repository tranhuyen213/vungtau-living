import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone, MessageCircle, Mail, MapPin, Home, Building2, KeyRound, Search,
  Waves, Landmark, ChevronRight, Menu, X, CheckCircle2, CalendarDays,
  Send, Star, Filter, Camera, Image as ImageIcon
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
    id: 'lavida', name: 'Lavida Residences', label: 'Khu dân cư cao cấp đã hình thành',
    summary: 'Tọa lạc trên trục đường 3/2, Lavida phù hợp cho nhu cầu an cư, mua bán lại, cho thuê và ký gửi nhà phố, biệt thự tại Vũng Tàu.',
    tags: ['Nhà phố vườn', 'Biệt thự', 'Shophouse', 'Ký gửi'], cta: 'Xem sản phẩm Lavida', href: '#lavida', stat: 'Đường 3/2', image: images.lavidaAerial,
  },
  {
    id: 'blanca', name: 'Blanca City', label: 'Đô thị biển mới tại Vũng Tàu',
    summary: 'Đô thị biển quy mô lớn, định hướng sống – nghỉ dưỡng – giải trí – thương mại, dành cho khách hàng quan tâm tài sản ven biển.',
    tags: ['Đô thị biển', 'Sun Group', 'Căn hộ', 'Đầu tư'], cta: 'Nhận tài liệu Blanca', href: '#blanca', stat: 'Bãi Sau', image: images.blancaHero,
  },
];

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
  'Dùng hình ảnh dự án thật/phối cảnh từ tài liệu để khách dễ hình dung.',
];

const posts = [
  { title: 'Lavida Residences Vũng Tàu: thông tin mua bán và cho thuê mới nhất', tag: 'Lavida', image: images.lavidaAerial, desc: 'Tổng quan vị trí, loại hình sản phẩm, mặt bằng và những lưu ý khi chọn mua hoặc thuê tại Lavida.' },
  { title: 'Blanca City Vũng Tàu có gì nổi bật?', tag: 'Blanca City', image: images.blancaOverview, desc: 'Góc nhìn tổng quan về đô thị biển, vị trí, sản phẩm và nhóm khách hàng phù hợp.' },
  { title: 'Ký gửi bất động sản tại Vũng Tàu: chủ nhà cần chuẩn bị gì?', tag: 'Ký gửi', image: images.lavidaWalk, desc: 'Quy trình ký gửi bán, cho thuê, định giá và truyền thông sản phẩm hiệu quả hơn.' },
];

function SectionHeader({ eyebrow, title, desc, dark = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">{eyebrow}</p>
      <h2 className={`font-serif text-3xl font-semibold tracking-tight md:text-5xl ${dark ? 'text-white' : 'text-slate-950'}`}>{title}</h2>
      {desc && <p className={`mt-5 text-base leading-8 md:text-lg ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{desc}</p>}
    </div>
  );
}

function ButtonLink({ href, children, variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2';
  const styles = variant === 'primary' ? 'bg-slate-950 text-white shadow-lg shadow-slate-950/20 hover:-translate-y-0.5 hover:bg-slate-800' : variant === 'gold' ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20 hover:-translate-y-0.5 hover:bg-amber-700' : 'border border-slate-300 bg-white/80 text-slate-900 hover:-translate-y-0.5 hover:border-slate-950';
  return <a href={href} className={`${base} ${styles} ${className}`}>{children}</a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#home" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/20"><Waves size={22} /></div>
          <div><p className="font-serif text-xl font-semibold tracking-tight text-slate-950">VungTau Living</p><p className="text-xs uppercase tracking-[0.2em] text-slate-500">by Huyen Tran</p></div>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">{navItems.map((item) => <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-amber-700">{item.label}</a>)}</nav>
        <div className="hidden items-center gap-3 lg:flex"><a href={CONTACT.phoneHref} className="text-sm font-semibold text-slate-950">{CONTACT.phone}</a><ButtonLink href={CONTACT.zalo} variant="gold">Chat Zalo</ButtonLink></div>
        <button onClick={() => setOpen((v) => !v)} className="rounded-full border border-slate-200 p-2 text-slate-900 lg:hidden" aria-label="Mở menu">{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
      {open && <div className="border-t border-slate-100 bg-white px-4 pb-5 lg:hidden"><div className="grid gap-2 py-4">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">{item.label}</a>)}</div><div className="grid grid-cols-2 gap-3"><ButtonLink href={CONTACT.phoneHref} variant="secondary">Gọi ngay</ButtonLink><ButtonLink href={CONTACT.zalo} variant="gold">Zalo</ButtonLink></div></div>}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 pt-28 text-white">
      <img src={images.blancaHero} alt="Blanca City Vũng Tàu" className="absolute inset-0 h-full w-full object-cover opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-amber-100 shadow-sm backdrop-blur"><Star size={16} /> Bất động sản Lavida & Blanca City tại Vũng Tàu</div>
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">Tìm đúng bất động sản, đúng nhu cầu, đúng giá trị.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-200 md:text-xl">VungTau Living đồng hành cùng anh/chị trong mua bán, cho thuê, ký gửi và tư vấn đầu tư bất động sản tại Lavida Residences, Blanca City và khu vực Vũng Tàu.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><ButtonLink href="#ban" variant="gold">Xem nhà đang bán <ChevronRight size={17} /></ButtonLink><ButtonLink href={CONTACT.zalo} variant="secondary">Nhận tư vấn qua Zalo</ButtonLink><ButtonLink href="#kygui" variant="secondary">Ký gửi bất động sản</ButtonLink></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
          <div className="grid gap-4 rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl shadow-slate-950/30 backdrop-blur">
            <img src={images.lavidaAerial} alt="Lavida Residences" className="h-64 w-full rounded-[1.5rem] object-cover" />
            <div className="grid gap-3 md:grid-cols-2">
              {projects.map((p) => <a key={p.name} href={p.href} className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur hover:bg-white/15"><p className="text-xs uppercase tracking-[0.2em] text-amber-200">{p.stat}</p><h4 className="mt-2 font-serif text-2xl font-semibold">{p.name}</h4><p className="mt-2 text-sm leading-6 text-slate-200">{p.label}</p></a>)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return <section id="gioithieu" className="bg-white px-4 py-20 md:px-6"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl shadow-slate-950/10"><p className="text-sm uppercase tracking-[0.28em] text-amber-300">Định vị thương hiệu</p><h2 className="mt-5 font-serif text-4xl font-semibold">Huyen Tran – người đồng hành tư vấn bất động sản Vũng Tàu.</h2><p className="mt-6 leading-8 text-slate-200">Không chỉ giới thiệu sản phẩm, VungTau Living giúp khách hàng hiểu rõ tài sản mình đang chọn: vị trí, pháp lý, khả năng khai thác, giá trị sử dụng và sự phù hợp với mục tiêu cá nhân.</p><div className="mt-8 flex flex-wrap gap-3">{['Minh bạch', 'Tận tâm', 'Am hiểu', 'Chuyên sâu'].map((item) => <span key={item} className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-100">{item}</span>)}</div></div><div className="grid gap-5 sm:grid-cols-2">{reasons.map((reason, index) => <motion.div key={reason} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="rounded-[2rem] border border-slate-100 bg-slate-50 p-6"><CheckCircle2 className="mb-5 text-amber-700" /><p className="text-base leading-7 text-slate-700">{reason}</p></motion.div>)}</div></div></section>;
}

function Projects() {
  return <section id="duan" className="bg-[#f8f4ed] px-4 py-20 md:px-6"><SectionHeader eyebrow="Dự án trọng tâm" title="Hai trụ cột nội dung của VungTau Living" desc="Website tập trung sâu vào Lavida Residences và Blanca City để khách hàng dễ tìm thông tin, dễ so sánh và dễ liên hệ khi có nhu cầu thực tế." /><div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">{projects.map((p) => <motion.article key={p.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-sm"><div className="relative h-72"><img src={p.image} alt={p.name} className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" /><span className="absolute right-5 top-5 rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-slate-800">{p.stat}</span><h3 className="absolute bottom-5 left-6 font-serif text-4xl font-semibold text-white">{p.name}</h3></div><div className="p-7"><p className="text-sm uppercase tracking-[0.25em] text-amber-800">{p.label}</p><p className="mt-5 text-base leading-8 text-slate-700">{p.summary}</p><div className="mt-7 flex flex-wrap gap-2">{p.tags.map((tag) => <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">{tag}</span>)}</div><div className="mt-8"><ButtonLink href={p.href} variant="primary">{p.cta} <ChevronRight size={17} /></ButtonLink></div></div></motion.article>)}</div></section>;
}

function ImageGallery({ items }) {
  return <div className="grid gap-4 sm:grid-cols-3">{items.map((img) => <figure key={img.src} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100"><img src={img.src} alt={img.alt} className="h-48 w-full object-cover transition duration-500 hover:scale-105" /><figcaption className="p-4 text-sm text-slate-600">{img.alt}</figcaption></figure>)}</div>;
}

function ProjectDetail({ id, name, eyebrow, intro, bullets, faq, gallery, plan }) {
  return <section id={id} className="bg-white px-4 py-20 md:px-6"><div className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]"><div className="lg:sticky lg:top-28 lg:self-start"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">{eyebrow}</p><h2 className="font-serif text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">{name}</h2><p className="mt-6 text-lg leading-9 text-slate-600">{intro}</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><ButtonLink href={CONTACT.zalo} variant="gold">Nhận tư vấn</ButtonLink><ButtonLink href="#form" variant="secondary">Gửi nhu cầu</ButtonLink></div><p className="mt-6 flex items-start gap-2 text-sm leading-6 text-slate-500"><ImageIcon size={18} className="mt-1" /> Hình ảnh/phối cảnh dùng từ tài liệu dự án, cần kiểm tra quyền sử dụng trước khi đăng công khai.</p></div><div className="grid gap-5">{gallery && <ImageGallery items={gallery} />}{plan && <figure className="overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 p-3"><img src={plan.src} alt={plan.alt} className="max-h-[560px] w-full rounded-[1.5rem] object-contain" /><figcaption className="px-3 py-4 text-sm leading-6 text-slate-600">{plan.alt}</figcaption></figure>}{bullets.map((item) => <div key={item.title} className="rounded-[2rem] border border-slate-100 bg-slate-50 p-6"><h3 className="font-serif text-2xl font-semibold text-slate-950">{item.title}</h3><p className="mt-3 leading-8 text-slate-650">{item.desc}</p></div>)}<div className="rounded-[2rem] border border-amber-100 bg-amber-50/60 p-6"><h3 className="font-serif text-2xl font-semibold text-slate-950">Câu hỏi thường gặp</h3><div className="mt-5 grid gap-4">{faq.map((f) => <details key={f.q} className="group rounded-2xl bg-white p-5 shadow-sm"><summary className="cursor-pointer list-none font-semibold text-slate-900">{f.q}</summary><p className="mt-3 leading-7 text-slate-600">{f.a}</p></details>)}</div></div></div></div></div></section>;
}

function Services() {
  return <section id="dichvu" className="bg-slate-950 px-4 py-20 text-white md:px-6"><SectionHeader dark eyebrow="Dịch vụ" title="Một điểm chạm cho nhiều nhu cầu bất động sản" desc="Từ khách mua, khách thuê đến chủ nhà cần ký gửi, VungTau Living xây dựng quy trình tư vấn rõ ràng và dễ bắt đầu." /><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">{services.map((s) => { const Icon = s.icon; return <div key={s.title} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur"><div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-300"><Icon size={27} /></div><h3 className="font-serif text-2xl font-semibold">{s.title}</h3><p className="mt-4 leading-7 text-slate-300">{s.desc}</p></div>; })}</div></section>;
}

function Listings() {
  const [filter, setFilter] = useState('Tất cả'); const filters = ['Tất cả', 'Đang bán', 'Cho thuê', 'Tư vấn']; const list = useMemo(() => filter === 'Tất cả' ? properties : properties.filter((p) => p.status === filter), [filter]);
  return <section id="ban" className="bg-[#f8f4ed] px-4 py-20 md:px-6"><SectionHeader eyebrow="Sản phẩm nổi bật" title="Danh sách bất động sản đang tư vấn" desc="Thông tin giá và tình trạng sản phẩm nên được cập nhật theo từng thời điểm. Khách hàng có thể gửi nhu cầu để nhận danh sách phù hợp nhất." /><div className="mx-auto max-w-7xl"><div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-white p-3 shadow-sm"><div className="flex items-center gap-2 px-3 text-sm font-semibold text-slate-700"><Filter size={18} /> Bộ lọc nhanh</div><div className="flex flex-wrap gap-2">{filters.map((f) => <button key={f} onClick={() => setFilter(f)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${filter === f ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>{f}</button>)}</div></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{list.map((p) => <article key={p.code} className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-100"><div className="relative h-56"><img src={p.image} alt={p.title} className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 to-transparent" /><div className="absolute inset-0 flex flex-col justify-between p-6 text-white"><span className="w-fit rounded-full bg-white/20 px-3 py-2 text-xs font-semibold backdrop-blur">{p.status}</span><div><p className="text-sm text-amber-100">Mã: {p.code}</p><h3 className="mt-2 font-serif text-3xl font-semibold">{p.title}</h3></div></div></div><div className="p-6"><div className="grid grid-cols-2 gap-3 text-sm"><div className="rounded-2xl bg-slate-50 p-4"><p className="text-slate-500">Dự án</p><p className="mt-1 font-semibold text-slate-900">{p.project}</p></div><div className="rounded-2xl bg-slate-50 p-4"><p className="text-slate-500">Giá</p><p className="mt-1 font-semibold text-slate-900">{p.price}</p></div><div className="rounded-2xl bg-slate-50 p-4"><p className="text-slate-500">Loại hình</p><p className="mt-1 font-semibold text-slate-900">{p.type}</p></div><div className="rounded-2xl bg-slate-50 p-4"><p className="text-slate-500">Nhu cầu</p><p className="mt-1 font-semibold text-slate-900">{p.purpose}</p></div></div><ul className="mt-5 space-y-3">{p.highlights.map((h) => <li key={h} className="flex gap-2 text-sm leading-6 text-slate-600"><CheckCircle2 size={17} className="mt-1 shrink-0 text-amber-700" /> {h}</li>)}</ul><div className="mt-6 grid grid-cols-2 gap-3"><ButtonLink href={CONTACT.zalo} variant="gold" className="w-full">Hỏi Zalo</ButtonLink><ButtonLink href="#form" variant="secondary" className="w-full">Chi tiết</ButtonLink></div></div></article>)}</div></div></section>;
}

function LeadForm({ title = 'Nhận tư vấn bất động sản', mode = 'lead' }) {
  return <form id="form" className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-950/5"><h3 className="font-serif text-3xl font-semibold text-slate-950">{title}</h3><p className="mt-3 leading-7 text-slate-600">Để lại nhu cầu, Huyen Tran sẽ liên hệ và gửi thông tin phù hợp qua điện thoại/Zalo.</p><div className="mt-6 grid gap-4"><input className="rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-amber-500" placeholder="Họ tên" /><input className="rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-amber-500" placeholder="Số điện thoại" /><select className="rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-amber-500" defaultValue=""><option value="" disabled>Nhu cầu của anh/chị</option><option>Mua bất động sản</option><option>Thuê bất động sản</option><option>Bán / ký gửi</option><option>Cho thuê / ký gửi</option><option>Tư vấn đầu tư</option></select><select className="rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-amber-500" defaultValue=""><option value="" disabled>Dự án quan tâm</option><option>Lavida Residences</option><option>Blanca City</option><option>Khu vực Vũng Tàu khác</option></select><textarea className="min-h-32 rounded-2xl border border-slate-200 px-4 py-4 outline-none focus:border-amber-500" placeholder={mode === 'consign' ? 'Mô tả tài sản: vị trí, loại hình, giá mong muốn, pháp lý...' : 'Ngân sách, nhu cầu, thời gian muốn xem nhà...'} /><button type="button" className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-amber-600/20 hover:bg-amber-700"><Send size={17} /> Gửi nhu cầu tư vấn</button></div><p className="mt-4 text-xs leading-6 text-slate-500">Lưu ý: Form demo. Khi triển khai thật, form sẽ được kết nối email, Google Sheet hoặc CRM.</p></form>;
}

function Consign() {
  return <section id="kygui" className="bg-white px-4 py-20 md:px-6"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">Ký gửi bất động sản</p><h2 className="font-serif text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">Chủ nhà cần bán hoặc cho thuê tại Lavida, Blanca, Vũng Tàu?</h2><p className="mt-6 text-lg leading-9 text-slate-600">VungTau Living hỗ trợ tiếp nhận thông tin, tư vấn giá, chuẩn bị hình ảnh, viết nội dung đăng tin, truyền thông sản phẩm và sàng lọc khách hàng phù hợp.</p><img src={images.lavidaWalk} alt="Không gian Lavida" className="mt-8 h-64 w-full rounded-[2rem] object-cover shadow-sm" /><div className="mt-8 grid gap-4">{['Gửi thông tin tài sản và nhu cầu bán/cho thuê.', 'Tư vấn mức giá phù hợp thị trường và tình trạng sản phẩm.', 'Chuẩn bị nội dung, hình ảnh và đăng trên các kênh phù hợp.', 'Sàng lọc khách, hỗ trợ xem nhà, đàm phán và giao dịch.'].map((step, i) => <div key={step} className="flex gap-4 rounded-3xl border border-slate-100 bg-slate-50 p-5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">{i + 1}</span><p className="leading-7 text-slate-700">{step}</p></div>)}</div></div><LeadForm title="Gửi thông tin ký gửi" mode="consign" /></div></section>;
}

function Blog() {
  return <section id="tintuc" className="bg-[#f8f4ed] px-4 py-20 md:px-6"><SectionHeader eyebrow="Tin tức & SEO" title="Nội dung giúp khách hàng tìm thấy bạn trên Google" desc="Các bài viết nên tập trung vào câu hỏi thật của khách hàng: giá bán, mặt bằng, pháp lý, cho thuê, ký gửi và so sánh lựa chọn." /><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">{posts.map((post) => <article key={post.title} className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-100"><img src={post.image} alt={post.title} className="h-44 w-full object-cover" /><div className="p-6"><span className="rounded-full bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-800">{post.tag}</span><h3 className="mt-5 font-serif text-2xl font-semibold leading-tight text-slate-950">{post.title}</h3><p className="mt-4 leading-7 text-slate-600">{post.desc}</p><a href="#form" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 hover:text-amber-700">Đọc thêm <ChevronRight size={16} /></a></div></article>)}</div></section>;
}

function Contact() {
  return <section id="lienhe" className="bg-slate-950 px-4 py-20 text-white md:px-6"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Liên hệ</p><h2 className="font-serif text-4xl font-semibold md:text-5xl">Trao đổi trực tiếp với Huyen Tran</h2><p className="mt-6 text-lg leading-9 text-slate-300">Anh/chị có thể gửi nhu cầu mua, bán, thuê, cho thuê hoặc ký gửi bất động sản. Tôi sẽ lọc thông tin phù hợp và phản hồi sớm nhất có thể.</p><div className="mt-8 grid gap-4"><a href={CONTACT.phoneHref} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5 hover:bg-white/[0.09]"><Phone className="text-amber-300" /> {CONTACT.phone}</a><a href={CONTACT.emailHref} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5 hover:bg-white/[0.09]"><Mail className="text-amber-300" /> {CONTACT.email}</a><div className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5"><MapPin className="mt-1 shrink-0 text-amber-300" /> <span>{CONTACT.address}</span></div></div></div><LeadForm title="Nhận danh sách sản phẩm phù hợp" /></div></section>;
}

function FloatingCTA() {
  return <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3"><a href={CONTACT.phoneHref} className="flex h-13 w-13 items-center justify-center rounded-full bg-slate-950 p-4 text-white shadow-xl shadow-slate-950/30" aria-label="Gọi điện"><Phone size={22} /></a><a href={CONTACT.zalo} className="flex h-13 w-13 items-center justify-center rounded-full bg-amber-600 p-4 text-white shadow-xl shadow-amber-600/30" aria-label="Zalo"><MessageCircle size={22} /></a><a href={CONTACT.messenger} className="flex h-13 w-13 items-center justify-center rounded-full bg-sky-600 p-4 text-white shadow-xl shadow-sky-600/30" aria-label="Messenger"><Send size={20} /></a></div>;
}

function Footer() {
  return <footer className="bg-[#080f1f] px-4 py-12 text-slate-300 md:px-6"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4"><div className="md:col-span-2"><h3 className="font-serif text-3xl font-semibold text-white">VungTau Living</h3><p className="mt-4 max-w-xl leading-7">Website tư vấn bất động sản Lavida Residences, Blanca City và khu vực Vũng Tàu, định hướng minh bạch, gần gũi và chuyên nghiệp.</p><p className="mt-5 text-sm text-slate-500">Thông tin, hình ảnh, giá bán và chính sách trên website cần được cập nhật theo từng thời điểm và kiểm tra theo hồ sơ thực tế trước khi giao dịch.</p></div><div><h4 className="font-semibold text-white">Menu</h4><div className="mt-4 grid gap-2">{navItems.slice(0, 6).map((item) => <a key={item.href} href={item.href} className="hover:text-amber-300">{item.label}</a>)}</div></div><div><h4 className="font-semibold text-white">Liên hệ</h4><div className="mt-4 grid gap-2"><a href={CONTACT.phoneHref} className="hover:text-amber-300">{CONTACT.phone}</a><a href={CONTACT.zalo} className="hover:text-amber-300">Zalo Huyen Tran</a><a href={CONTACT.messenger} className="hover:text-amber-300">Messenger</a><a href={CONTACT.emailHref} className="hover:text-amber-300">{CONTACT.email}</a></div></div></div><div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">© {new Date().getFullYear()} VungTau Living by Huyen Tran. All rights reserved.</div></footer>;
}

export default function App() {
  return <main className="min-h-screen scroll-smooth bg-white text-slate-900"><Header /><Hero /><About /><Projects /><ProjectDetail id="lavida" eyebrow="Lavida Residences" name="Khu dân cư cao cấp tại cửa ngõ Vũng Tàu" intro="Lavida Residences phù hợp với khách hàng tìm kiếm bất động sản đã hình thành, có thể xem thực tế, mua để ở, mua đầu tư, cho thuê hoặc ký gửi chuyển nhượng." gallery={[{ src: images.lavidaAerial, alt: 'Toàn cảnh khu dân cư Lavida Residences' }, { src: images.lavidaWalk, alt: 'Không gian cảnh quan và lối dạo nội khu Lavida' }, { src: images.lavidaShop, alt: 'Nhà phố thương mại Lavida' }]} plan={{ src: images.lavidaPlan, alt: 'Mặt bằng tổng thể Lavida Residences – hình ảnh tham khảo theo tài liệu dự án' }} bullets={[{ title: 'Vị trí', desc: 'Nằm trên trục đường 3/2, thuận tiện kết nối vào trung tâm Vũng Tàu và các tiện ích hiện hữu của thành phố.' }, { title: 'Loại hình sản phẩm', desc: 'Gồm nhà phố vườn, nhà phố thương mại, biệt thự song lập, biệt thự đơn lập và các khu thương mại – văn phòng theo mặt bằng tổng thể.' }, { title: 'Pháp lý & giá', desc: 'Cần kiểm tra theo từng căn cụ thể. Giá bán, giá thuê nên cập nhật theo vị trí, diện tích, tình trạng hoàn thiện và pháp lý thực tế.' }, { title: 'Lý do nên quan tâm', desc: 'Khu dân cư đã hình thành, dễ đánh giá thực tế, phù hợp nhu cầu ở thật, khai thác cho thuê và tích sản trung – dài hạn.' }]} faq={[{ q: 'Lavida phù hợp để ở hay đầu tư?', a: 'Phù hợp cả hai, nhưng cần chọn căn theo mục tiêu: ở thật ưu tiên môi trường sống; đầu tư ưu tiên vị trí, giá mua, pháp lý và khả năng cho thuê.' }, { q: 'Giá Lavida hiện nay bao nhiêu?', a: 'Giá phụ thuộc từng căn, vị trí, diện tích, tình trạng hoàn thiện và pháp lý. Nên liên hệ để nhận danh sách cập nhật.' }, { q: 'Có thể ký gửi nhà tại Lavida không?', a: 'Có. VungTau Living hỗ trợ chủ nhà ký gửi bán hoặc cho thuê, tư vấn giá và tìm khách phù hợp.' }]} /><ProjectDetail id="blanca" eyebrow="Blanca City" name="Đô thị biển mới tại Vũng Tàu" intro="Blanca City được định hướng là đô thị biển tích hợp sống, nghỉ dưỡng, giải trí và thương mại, phù hợp khách hàng quan tâm tài sản ven biển và đầu tư dài hạn." gallery={[{ src: images.blancaHero, alt: 'Phối cảnh tổng quan Blanca City' }, { src: images.blancaBeacon, alt: 'Tòa Beacon Blanca City' }, { src: images.blancaWaterpark, alt: 'Tiện ích vui chơi giải trí Sun World Vũng Tàu – phối cảnh tham khảo' }, { src: images.blancaRetail, alt: 'Không gian Sun Retail Vũng Tàu – phối cảnh tham khảo' }, { src: images.blancaPark, alt: 'Không gian công viên trung tâm Blanca City – phối cảnh tham khảo' }, { src: images.blancaLobby, alt: 'Sảnh đón sang trọng – phối cảnh tham khảo' }]} bullets={[{ title: 'Vị trí', desc: 'Gắn với trục đường 3/2 và khu vực ven biển Bãi Sau, tạo lợi thế kết nối nội đô và giá trị nghỉ dưỡng biển.' }, { title: 'Quy mô & định hướng', desc: 'Đô thị biển quy mô lớn, phát triển theo hướng tích hợp nhiều chức năng: nhà ở, căn hộ, thương mại, dịch vụ, nghỉ dưỡng và giải trí.' }, { title: 'Loại hình sản phẩm', desc: 'Có thể triển khai nội dung theo từng dòng sản phẩm như căn hộ, thấp tầng, thương mại, nghỉ dưỡng và các tòa/phân khu nổi bật như Beacon.' }, { title: 'Giá bán & chính sách', desc: 'Nên cập nhật theo từng giai đoạn bán hàng, loại hình, vị trí và chính sách thanh toán thực tế tại thời điểm tư vấn.' }]} faq={[{ q: 'Blanca City phù hợp để ở hay đầu tư?', a: 'Phù hợp nhiều mục tiêu, nhưng cần chọn dòng sản phẩm theo nhu cầu sử dụng, khả năng tài chính và thời gian nắm giữ.' }, { q: 'Có thể nhận bảng giá Blanca City ở đâu?', a: 'Anh/chị có thể liên hệ Huyen Tran qua Zalo hoặc form tư vấn để nhận thông tin cập nhật theo từng thời điểm.' }, { q: 'Có nên đầu tư Blanca City không?', a: 'Nên xem xét vị trí, giá vào, chính sách thanh toán, pháp lý, tiến độ và mục tiêu tài chính cá nhân trước khi quyết định.' }]} /><Services /><Listings /><section id="thue" className="bg-white px-4 py-20 md:px-6"><SectionHeader eyebrow="Cho thuê" title="Nhà phố, biệt thự, căn hộ cho thuê tại Vũng Tàu" desc="Khách thuê có thể gửi nhu cầu về ngân sách, thời gian thuê, mục đích sử dụng và khu vực mong muốn để được lọc căn phù hợp." /><div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-100 bg-slate-50 p-8 text-center"><CalendarDays className="mx-auto mb-5 text-amber-700" size={38} /><h3 className="font-serif text-3xl font-semibold text-slate-950">Nhận danh sách căn cho thuê mới nhất</h3><p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">Danh sách cho thuê thay đổi nhanh theo từng thời điểm. Hãy gửi nhu cầu để nhận căn phù hợp thay vì mất thời gian xem quá nhiều sản phẩm không đúng tiêu chí.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><ButtonLink href={CONTACT.zalo} variant="gold">Gửi nhu cầu thuê qua Zalo</ButtonLink><ButtonLink href="#form" variant="secondary">Điền form tư vấn</ButtonLink></div></div></section><Consign /><Blog /><Contact /><Footer /><FloatingCTA /></main>;
}
