import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-gray-300">
            Services
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-300">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-gray-300">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/testimonials" className="hover:text-gray-300">
            Testimonials
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-gray-300">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/faq" className="hover:text-gray-300">
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
