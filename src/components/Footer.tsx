import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const socialLinks = [
    { Icon: FaFacebook, url: 'https://facebook.com', label: 'Facebook' },
    { Icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { Icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
    { Icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
  ];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KP Power and Electrical Services</h3>
            <p className="text-sm text-slate-300">
              Providing quality electrical services in Tucson, Arizona for over 15 years.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Button variant="link" asChild className="p-0 h-auto text-white hover:text-blue-400">
                    <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                      {item}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="mb-2 text-slate-300">Phone: (555) 123-4567</p>
            <p className="mb-2 text-slate-300">Email: info@kpowerelectrical.com</p>
            <p className="text-slate-300">123 Main St, Tucson, AZ 85701</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, url, label }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-blue-400"
                  asChild
                >
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon size={24} />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 text-center">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} KP Power and Electrical Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
