'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaTools, FaUserShield, FaHandshake, FaGraduationCap, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import Image from 'next/image';
import ValueCard from '@/components/ValueCard';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="bg-gray-100 text-navy-900">
      <header className="h-screen flex items-center justify-center bg-cover bg-center relative" style={{backgroundImage: 'url("/api/placeholder/1920/1080")'}}>
        <div className="absolute inset-0 bg-navy-900 opacity-70"></div>
        <div className="text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-4 text-white"
          >
            About KPPower Electrical Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl text-white"
          >
            Powering Tucson with excellence since 2022
          </motion.p>
        </div>
      </header>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center"
          >
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/KylePrice.jpeg"
                  alt="Kyle Price"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-10">
              <h2 className="text-4xl font-bold mb-6 text-orange-500">Our Story</h2>
              <p className="mb-4">Welcome to KPPower Electrical Services. Founded in 2022, we have been providing top-quality electrical solutions for residential and commercial clients in Tucson, Arizona and surrounding areas within a 50-mile radius.</p>
              <p>Our owner, Kyle, brings 10 years of experience to every project. His passion for electrical work and commitment to customer satisfaction are the driving forces behind our company's success.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-orange-500">Our Mission</h2>
            <p className="text-xl max-w-3xl mx-auto">
              At KPPower Electrical Services, our mission is to ensure the safety and satisfaction of our clients through excellent workmanship and personalized service. We strive to be the most trusted and reliable electrical service provider in Tucson and the surrounding communities.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-200 text-navy-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Service Area</h2>
          <div className="flex flex-wrap items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 mb-10 md:mb-0"
            >
              <p className="mb-4">Based in Tucson, AZ, we proudly serve customers within a 50-mile radius. This includes Oro Valley, Marana, Sahuarita, Green Valley, and other surrounding communities.</p>
              <p>Need service outside our standard area? Contact us for a custom quote - we're willing to extend our reach for an additional fee factored into the quote.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/api/placeholder/600/300"
                  alt="Service Area Map"
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-navy-900 bg-opacity-50 flex items-center justify-center">
                  <div className="text-white text-center">
                    <FaMapMarkerAlt className="text-5xl mb-4 mx-auto" />
                    <h3 className="text-2xl font-bold">Our Service Area</h3>
                    <p>Tucson and surrounding areas within a 50-mile radius</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-orange-500">Our Values</h2>
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
