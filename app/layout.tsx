import './globals.css';
import type { Metadata } from 'next';
import { Tajawal } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider"
import { Roboto } from 'next/font/google';

// تعريف الخط من Google Fonts
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

const tajawal = Tajawal({ subsets: ['arabic'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'SAUD & NASSER AL HAZMI CO - Invoice Price List',
  description: 'وجهتك الشاملة لحلول الأدوات الصحية المتكاملة',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${tajawal.className} rtl`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}