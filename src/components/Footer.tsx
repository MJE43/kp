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
    <footer className="sticky bottom-0 bg-dark text-lightest py-4">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          className="flex justify-between items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <p className="text-sm text-light">
              &copy; {currentYear} KP Power and Electrical Services. All rights reserved.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
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
                    className="text-lightest hover:text-brand transition-colors duration-300"
                    asChild
                  >
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                    >
                      <Icon size={20} />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="flex space-x-4">
              <Button 
                variant="link" 
                asChild 
                className="p-0 h-auto text-lightest hover:text-brand transition-colors duration-300"
              >
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button 
                variant="link" 
                asChild 
                className="p-0 h-auto text-lightest hover:text-brand transition-colors duration-300"
              >
                <Link href="/about">
                  About Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;