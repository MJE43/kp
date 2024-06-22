import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">KPower Electrical Services</h3>
            <p>Providing quality electrical services in Phoenix, Arizona for over 15 years.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@kpowerelectrical.com</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p>&copy; 2024 KPower Electrical Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;