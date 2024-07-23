import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import '../styles/globals.css';
import '@fontsource/montserrat/400.css';
 import '@fontsource/montserrat/700.css';
 import '@fontsource/open-sans/400.css';
 import '@fontsource/open-sans/700.css';

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
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable} font-sans`}>
        <div className="grid grid-cols-12 gap-6 mx-auto px-10 sm:px-12 lg:px-14">
          {children}
        </div>
      </body>
    </html>
  );
}
