'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function Header() {
  const { getTotalItems } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          🎁 GiftHamper
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-gray-700 hover:text-primary transition">
            Home
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-primary transition">
            Products
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-primary transition">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-primary transition">
            Contact
          </Link>
        </div>

        {/* Cart Link */}
        <Link href="/cart" className="relative text-2xl">
          🛒
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {getTotalItems()}
            </span>
          )}
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-50 border-t border-gray-200 py-4">
          <div className="max-w-6xl mx-auto px-4 flex flex-col gap-4">
            <Link href="/" className="text-gray-700 hover:text-primary transition">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-primary transition">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}