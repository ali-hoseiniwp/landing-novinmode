import "./globals.css";

export const metadata = {
  title: "فروشگاه آنلاین نوین مد",
  description: "فروش انواع پوشاک مردانه با قیمت عمده به صورت تکی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preload" as="image" href="/images/boutique-backdrop.507d54cc06df.webp" type="image/webp" fetchPriority="high" />
      </head>
      <body>{children}</body>
    </html>
  );
}
