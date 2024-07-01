import React from 'react';
import Link from 'next/link';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          KP Power and Electrical Services
        </Link>
        <div className="hidden md:block">
          <Navigation />
        </div>
        <div className="md:hidden">
          {/* We'll add a mobile menu button here later */}
        </div>
      </div>
    </header>
  );
};

export default Header;
