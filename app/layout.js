import "./globals.css";

export const metadata = {
  title: "فروشگاه آنلاین نوین مد",
  description: "فروش انواع پوشاک مردانه با قیمت عمده به صورت تکی",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
