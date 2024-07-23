import * as React from 'react';
import Link from 'next/link';
import { FaBolt, FaLightbulb, FaShieldAlt } from 'react-icons/fa';

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

export default function RecentBlogPostsSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">
          Latest from Our Blog
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-blue-100"
            >
              <div className="flex items-center mb-4">
                <post.icon className="text-3xl text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold text-blue-900">
                  {post.title}
                </h3>
              </div>
              <p className="mb-4 text-gray-700">
                {post.excerpt}
              </p>
              <Link
                href={post.link}
                className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
