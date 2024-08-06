'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-6">
          <Link href="/" className="text-2xl sm:text-3xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
            K.P. Power
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-white hover:text-yellow-300 transition-colors duration-300 text-lg relative
                      ${pathname === item.href ? 'after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-yellow-400' : ''}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href="tel:+15205551234"
            className="hidden md:inline-block bg-yellow-400 hover:bg-yellow-300 text-dark font-semibold py-2 px-4 rounded-full transition-colors duration-300"
          >
            Call Now
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
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
              <path d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={`md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-dark/95 backdrop-blur-sm">
          <ul className="py-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`block py-2 text-lg text-white hover:text-yellow-300 transition-colors duration-300
                    ${pathname === item.href ? 'text-yellow-400' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="tel:+15205551234"
                className="block py-2 text-lg text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Call Now: (520) 555-1234
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;