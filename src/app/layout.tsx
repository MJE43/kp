import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-roboto' });

export const metadata: Metadata = {
  title: 'Your App Name',
  description: 'Your app description',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable} font-sans`}>{children}</body>
    </html>
  );
}
