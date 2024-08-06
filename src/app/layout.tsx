// app/layout.tsx
import type { Metadata } from 'next';
import '../styles/globals.css';
import { Playfair_Display, Roboto, Gelasio } from 'next/font/google';
import Head from './head';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const noir = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noir',
});

const gelasio = Gelasio({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gelasio',
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
    <html lang="en" className={`${playfair.variable} ${noir.variable} ${gelasio.variable}`}>
      <Head />
      <body className="antialiased bg-gradient-to-br from-background-start to-background-end min-h-screen flex flex-col">
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}