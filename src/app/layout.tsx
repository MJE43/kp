import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import '../styles/globals.css';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'K.P. Power',
  description: 'Professional Electrical Services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased bg-gradient-to-br from-background-start to-background-end min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
