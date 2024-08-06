'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaTools, FaUserShield, FaHandshake, FaGraduationCap, FaArrowUp } from 'react-icons/fa';
import Image from 'next/image';
import Layout from '@/components/Layout';

const ValueCard = ({ icon, title, description }) => (
  <div className="bg-light p-6 rounded-lg shadow-md">
    <div className="text-brand text-4xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold mb-2 text-brand">{title}</h3>
    <p className="text-dark">{description}</p>
  </div>
);

const ScrollToTopButton = () => (
  <button 
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="fixed bottom-8 right-8 bg-brand text-lightest p-3 rounded-full shadow-lg hover:bg-brand-hover transition-colors duration-300"
  >
    <FaArrowUp />
  </button>
);

export default function AboutPage() {
  return (
    <Layout>
      <div className="bg-darkest text-lightest">
        <header className="h-screen flex items-center justify-center relative p-20">
          <Image
            src="/images/sideview.webp"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-dark opacity-70"></div>
          <div className="text-center z-10 text-lightest">
            <motion.h1 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-8xl font-bold mb-4 text-lightest"
            >
              About K.P. Power
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-3xl text-lightest"
            >
              Powering Tucson with excellence since 2022
            </motion.p>
          </div>
        </header>

        <section className="py-20 bg-lightest p-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap items-center"
            >
              <div className="w-full md:w-1/2 mb-10 md:mb-0">
                <div className="relative h-[600px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/portrait.png"
                    alt="Electrician at work"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-10 bg-lightest p-10 rounded-lg shadow-md">
                <h2 className="text-5xl font-bold mb-6 text-brand">Our Story</h2>
                <p className="mb-4 text-dark">Welcome to K.P. Power Electrical Services. Founded in 2022, we have been providing top-quality electrical solutions for residential and commercial clients in Tucson, Arizona and surrounding areas within a 50-mile radius.</p>
                <p className="text-dark">Our owner, Kyle, brings 10 years of experience to every project. His passion for electrical work and commitment to customer satisfaction are the driving forces behind our company's success.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-dark text-lightest p-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-5xl font-bold mb-6 text-lightest">Our Mission</h2>
              <p className="text-2xl max-w-3xl mx-auto text-gray-200">
                At K.P. Power Electrical Services, our mission is to ensure the safety and satisfaction of our clients through excellent workmanship and personalized service. We strive to be the most trusted and reliable electrical service provider in Tucson and the surrounding communities.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-lightest p-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-5xl font-bold mb-12 text-center text-brand">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ValueCard 
                icon={<FaUserShield />} 
                title="Safety First" 
                description="We prioritize the safety of our clients and our team in every project."
              />
              <ValueCard 
                icon={<FaTools />} 
                title="Quality Workmanship" 
                description="We take pride in delivering high-quality electrical solutions."
              />
              <ValueCard 
                icon={<FaBolt />} 
                title="Customer Satisfaction" 
                description="Your satisfaction is our top priority."
              />
              <ValueCard 
                icon={<FaHandshake />} 
                title="Integrity" 
                description="We conduct our business with honesty and transparency."
              />
              <ValueCard 
                icon={<FaGraduationCap />} 
                title="Continuous Learning" 
                description="We stay updated with the latest electrical technologies and best practices."
              />
            </div>
          </div>
        </section>

        <ScrollToTopButton />
      </div>
    </Layout>
  );
}