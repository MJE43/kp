'use client';

import * as React from 'react';
import Link from 'next/link';
import { FaBolt, FaLightbulb, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: '5 Signs You Need an Electrical Upgrade',
    excerpt: "Is your home's electrical system up to date? Learn the warning signs...",
    link: '/blog/electrical-upgrade-signs',
    icon: FaBolt,
  },
  {
    title: 'The Benefits of LED Lighting',
    excerpt: 'Discover how LED lights can save you money and energy...',
    link: '/blog/led-lighting-benefits',
    icon: FaLightbulb,
  },
  {
    title: 'Electrical Safety Tips for Homeowners',
    excerpt: 'Keep your family safe with these essential electrical safety tips...',
    link: '/blog/electrical-safety-tips',
    icon: FaShieldAlt,
  },
];

const RecentBlogPostsSection: React.FC = () => {
  return (
    <section className="bg-[#F5F6FA] py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-[#060620]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Latest from Our Blog
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={index}
              className="bg-[#DADCEB] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-[#F6DC3B] border-opacity-30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <post.icon className="text-3xl text-[#F6DC3B] mr-3" />
                <h3 className="text-xl font-semibold text-[#060620]">
                  {post.title}
                </h3>
              </div>
              <p className="mb-4 text-[#060620]">
                {post.excerpt}
              </p>
              <Link
                href={post.link}
                className="inline-block bg-[#F6DC3B] text-[#060620] font-semibold py-2 px-4 rounded hover:bg-[#060620] hover:text-[#F6DC3B] transition-colors duration-300"
              >
                Read More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlogPostsSection;