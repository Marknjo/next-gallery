import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Navbar from '../components/Navbar';
import React from 'react';

export const revalidate = 3600; // update to 3600

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Next Gallery',
  description: 'A Pixel like gallery app',
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Navbar />
        <main className='max-w-6xl mx-auto'>{children}</main>
        {modal}
      </body>
    </html>
  );
}
