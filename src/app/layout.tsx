import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-roboto' });

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
      <body className={`${inter.variable} ${roboto.variable} font-sans`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
