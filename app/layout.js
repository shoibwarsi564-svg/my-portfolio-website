'use client';

import { CartProvider } from '@/context/CartContext';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}