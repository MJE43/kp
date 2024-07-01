import type { Metadata } from 'next';
import { Roboto, Oswald } from 'next/font/google';
import './globals.css';

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-roboto' });
const oswald = Oswald({ weight: ['400', '700'], subsets: ['latin'], variable: '--font-oswald' });

export const metadata: Metadata = {
  title: 'Your App Name',
  description: 'Your app description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${roboto.variable} ${oswald.variable} font-sans`}>{children}</body>
    </html>
  );
}
