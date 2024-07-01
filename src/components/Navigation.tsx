import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/projects', label: 'Projects' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <nav>
      <ul className="flex flex-col md:flex-row md:space-x-4">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block py-2 md:py-0 px-4 text-sm font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors duration-150"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
