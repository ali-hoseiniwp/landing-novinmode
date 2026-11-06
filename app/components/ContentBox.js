import { FaGlobe, FaDownload, FaPhone, FaLocationDot } from 'react-icons/fa6';
import { FiChevronLeft, FiClock, FiArrowUpLeft } from 'react-icons/fi';
import Image from 'next/image';
import instagramIcon from '../assets/instagram.webp';
import rubikaIcon from '../assets/rubika.webp';
import eitaaIcon from '../assets/eitaa.webp';
import basalamIcon from '../assets/basalam.webp';

const links = [
  { title: 'صفحه اینستاگرام', href: 'https://www.instagram.com/novinmod.hoseini?utm_source=qr&rpxt=MW05cTJhemdwd29xcg==', image: instagramIcon, style: 'instagram' },
  { title: 'کانال روبیکا', href: 'https://rubika.ir/novinmode_shop', image: rubikaIcon },
  { title: 'کانال تلگرام', href: 'https://t.me/novinmode_shop', image: '/telegram.svg' },
  { title: 'کانال ایتا', href: 'https://eitaa.com/novinmode_shop', image: eitaaIcon },
  { title: 'وبسایت فروشگاه', href: 'https://novinmode.shop', Icon: FaGlobe, style: 'website' },
  { title: 'دانلود اپ فروشگاه', href: 'http://cafebazaar.ir/app/?id=app.shop.novinmod&ref=share', Icon: FaDownload, style: 'download' },
  { title: 'غرفه باسلام', href: 'https://basalam.com/novinmodewear', image: basalamIcon, style: 'basalam' },
];

export default function ContentBox() {
  return (
    <main className="content-panel">
      <section className="social-section" aria-labelledby="social-title">
        <div className="social-heading">
          <span className="section-ornament" aria-hidden="true">✦</span>
          <p className="section-eyebrow">همیشه همراه نوین مد</p>
          <h2 id="social-title">یک قدم نزدیک‌تر به <span>استایل شما</span></h2>
          <p className="section-description">برای اطلاع از جدیدترین محصولات، در شبکه‌های اجتماعی ما عضو شوید.</p>
        </div>
        <nav className="social-grid" aria-label="فروشگاه و شبکه‌های اجتماعی نوین مد">
          {links.map(({ title, href, image, Icon, style = '' }, index) => (
            <a key={title} className={`social-link ${style}`} style={{ '--link-index': index }} href={href} target="_blank" rel="noopener noreferrer">
              <span className="social-icon" aria-hidden="true">{image ? <Image src={image} alt="" width={28} height={28} unoptimized decoding="async" /> : <Icon />}</span>
              <span className="social-label">{title}</span>
              <span className="link-arrow-wrap" aria-hidden="true"><FiArrowUpLeft className="link-arrow" /></span>
            </a>
          ))}
        </nav>
      </section>
      <section className="contact-strip" aria-label="تماس و ساعات پاسخگویی">
        <div className="hours contact-item">
          <div><h2>زمان پاسخگویی:</h2><p>همه روزه از ساعت ۹ الی ۱۸</p></div>
          <FiClock className="contact-icon clock-icon" aria-hidden="true" />
        </div>
        <a className="phone contact-item" href="tel:09153042198">
          <div><h2>شماره تماس:</h2><p dir="ltr">09153042198</p></div>
          <FaPhone className="contact-icon phone-icon" aria-hidden="true" />
        </a>
      </section>
      <a className="address-card" href="https://www.google.com/maps/search/?api=1&query=مشهد%20بلوار%20مفتح%20پارک%20بازار%20بازار%20فردوسی" target="_blank" rel="noopener noreferrer" aria-label="جستجوی آدرس فروشگاه در نقشه">
        <FaLocationDot className="address-pin" aria-hidden="true" />
        <div><h2>در فروشگاه منتظرتان هستیم</h2><address>مشهد، بلوار مفتح، پارک بازار، روبروی بازار فردوسی، طبقه <bdi>C</bdi>، اولین مغازه سمت چپ، فروشگاه نوین‌مد</address><span className="address-action">مشاهده آدرس روی نقشه <FiArrowUpLeft aria-hidden="true" /></span></div>
        <FiChevronLeft className="address-arrow" aria-hidden="true" />
      </a>
    </main>
  );
}
