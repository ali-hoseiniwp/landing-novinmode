export default function Banner() {
  return (
    <header className="hero" aria-labelledby="hero-title">
      <div className="hero-backdrop" aria-hidden="true" />
      <img className="hero-model" src="/heroheader.webp" alt="کت و شلوار مردانه نوین مد" width={433} height={554} fetchPriority="high" />
      <div className="hero-copy">
        <p className="hero-eyebrow"><span />فروشگاهی به وسعت ایران<span /></p>
        <h1 id="hero-title">از کارگاه تولیدی تا فروش<br /><em>مستقیم به شما</em></h1>
        <span className="heading-rule" aria-hidden="true" />
        <p className="hero-story">نوین مد در سال ۱۴۰۴ متولد شد، اما ریشه‌های آن به ۲۰ سال قبل و یک کارگاه تولید کت و شلوار بازمی‌گردد. با درک شرایط اقتصادی و نیاز به شفافیت، ما مسیر خود را از تولید عمده به فروش مستقیم و بدون واسطه تغییر دادیم.</p>
      </div>
      <p className="hero-signature" aria-hidden="true">Novin<br /><span>Mode</span></p>
      <svg className="hero-wave" viewBox="0 0 1000 240" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <pattern id="fabric" patternUnits="userSpaceOnUse" width="1000" height="700"><image href="/images/boutique-backdrop.webp" width="1500" height="1000" /></pattern>
          <linearGradient id="wave-shade" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#004b40" stopOpacity=".15" /><stop offset="1" stopColor="#001f1b" stopOpacity=".8" /></linearGradient>
          <linearGradient id="gold-trim"><stop stopColor="#b77b32" /><stop offset=".45" stopColor="#ffe1a1" /><stop offset="1" stopColor="#c28b46" /></linearGradient>
        </defs>
        <path d="M0 40 C220 70 275 240 540 190 S860 65 1000 115 L1000 240 L0 240Z" fill="url(#fabric)" />
        <path d="M0 40 C220 70 275 240 540 190 S860 65 1000 115 L1000 240 L0 240Z" fill="url(#wave-shade)" />
        <path d="M0 40 C220 70 275 240 540 190 S860 65 1000 115" fill="none" stroke="url(#gold-trim)" strokeWidth="4" />
        <path d="M0 225 C220 125 330 260 570 225 S840 155 1000 230 L1000 240 L0 240Z" fill="#efe5d5" />
        <path d="M0 225 C220 125 330 260 570 225 S840 155 1000 230" fill="none" stroke="#f5dbac" strokeWidth="2" />
      </svg>
      <div className="brand-medallion"><img src="/Asset4.png" alt="نوین مد — NOVIN MODE" width={908} height={908} /></div>
    </header>
  );
}
