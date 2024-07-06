import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const socialLinks = [
    { Icon: FaFacebook, url: 'https://facebook.com', label: 'Facebook' },
    { Icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { Icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
    { Icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
  ];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-heading">KP Power and Electrical Services</h3>
            <p className="text-sm">
              Providing quality electrical services in Tucson, Arizona for over 15 years.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-gray-300 transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Contact Us</h4>
            <p className="mb-2">Phone: (555) 123-4567</p>
            <p className="mb-2">Email: info@kpowerelectrical.com</p>
            <p>123 Main St, Tucson, AZ 85701</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 font-heading">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground text-center">
          <p className="text-sm">
            &copy; {currentYear} KP Power and Electrical Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
