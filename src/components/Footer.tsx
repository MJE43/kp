"use client";

import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const socialLinks = [
    { Icon: FaFacebook, url: 'https://facebook.com', label: 'Facebook' },
    { Icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { Icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
    { Icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
  ];
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <footer className="bg-[#00008B] text-white py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6">KP Power and Electrical Services</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Illuminating Tucson with quality electrical services for over 15 years. Your trusted partner in power solutions.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Button 
                    variant="link" 
                    asChild 
                    className="p-0 h-auto text-white hover:text-orange-400 transition-colors duration-300"
                  >
                    <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                      {item}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhone className="mr-3 text-orange-400" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-orange-400" />
                <span>info@kpowerelectrical.com</span>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-orange-400" />
                <span>123 Main St, Tucson, AZ 85701</span>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, url, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-orange-400 transition-colors duration-300"
                    asChild
                  >
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <Icon size={28} />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="mt-12 pt-8 border-t border-blue-700 text-center"
          variants={itemVariants}
        >
          <p className="text-sm text-gray-300">
            &copy; {currentYear} KP Power and Electrical Services. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
