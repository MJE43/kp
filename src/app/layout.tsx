import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import '../styles/globals.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import BackToTop from '@/components/BackToTop';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });

export const metadata: Metadata = {
  title: 'Your App Name',
  description: 'Your app description',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${openSans.variable} font-sans`}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
        <BackToTop />
      </body>
    </html>
  );
}
