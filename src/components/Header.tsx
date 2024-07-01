'use client';

import React, { useState } from 'react';
import Link from 'next/link';
const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          KP Power and Electrical Services
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-blue-300 transition-colors duration-300">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:text-blue-300 hover:bg-blue-700 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
