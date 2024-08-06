"use client";

import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { Icon: FaFacebook, url: 'https://facebook.com', label: 'Facebook' },
    { Icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { Icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
    { Icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-dark text-lightest py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
              K.P. Power
            </Link>
            <p className="text-sm text-light">Your Trusted Tucson Electrician</p>
            <p className="text-sm">Providing top-notch electrical services with over 15 years of experience.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-light hover:text-yellow-300 transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaPhone className="mr-2 text-yellow-400" />
                <a href="tel:+15205551234" className="hover:text-yellow-300 transition-colors duration-300">(520) 555-1234</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-yellow-400" />
                <a href="mailto:info@kppower.com" className="hover:text-yellow-300 transition-colors duration-300">info@kppower.com</a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-yellow-400" />
                <span>Tucson, AZ</span>
              </li>
            </ul>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-light hover:text-yellow-300 transition-colors duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-light">
          <p>&copy; {currentYear} KP Power and Electrical Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;