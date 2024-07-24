'use client';

import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image';
import { FaBolt, FaTools, FaUserShield, FaHandshake, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Parallax } from 'react-parallax';

const ValueCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 cursor-pointer"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="text-5xl text-orange-500 mb-6"
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
      <AnimatePresence>
        {isHovered && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-gray-600"
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ServiceAreaMap = () => (
  <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-2xl">
    <Image
      src="/api/placeholder/800/400"
      alt="Service Area Map"
      layout="fill"
      objectFit="cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="text-white text-center">
        <FaMapMarkerAlt className="text-5xl mb-4 mx-auto" />
        <h3 className="text-2xl font-bold mb-2">Our Service Area</h3>
        <p>Tucson and surrounding areas within a 50-mile radius</p>
      </div>
    </div>
  </div>
);

export default function AboutPage() {
  return (
    <Layout>
      <Parallax blur={5} bgImage="/api/placeholder/1600/900" strength={500}>
        <div className="h-screen flex items-center justify-center">
          <motion.h1 
            className="text-7xl font-bold text-center text-white shadow-text"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About KPPower Electrical Services
          </motion.h1>
        </div>
      </Parallax>

      <div className="bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-5xl font-bold mb-6 text-orange-500">Our Story</h2>
              <p className="text-xl mb-6 text-gray-700 leading-relaxed">
                Welcome to KPPower Electrical Services. Founded in 2022, we have been
                providing top-quality electrical solutions for residential and
                commercial clients in Tucson, Arizona and surrounding areas within a
                50-mile radius.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our owner, Kyle, brings 10 years of experience to every project. His
                passion for electrical work and commitment to customer satisfaction
                are the driving forces behind our company's success.
              </p>
            </motion.div>
            <motion.div 
              className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl group"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image
                src="/images/KylePrice.jpeg"
                alt="Kyle Price"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">Kyle Price</h3>
                  <p>Founder & Master Electrician</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="bg-orange-500 text-white p-16 rounded-lg shadow-2xl mb-24 transform transition duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-2xl text-center leading-relaxed">
              At KPPower Electrical Services, our mission is to ensure the safety
              and satisfaction of our clients through excellent workmanship and
              personalized service. We strive to be the most trusted and reliable
              electrical service provider in Tucson and the surrounding communities.
            </p>
          </motion.div>

          <motion.div 
            className="mb-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-10 text-center text-gray-800">Our Service Area</h2>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="bg-gray-100 p-12 rounded-lg shadow-inner">
                <p className="text-xl mb-6 text-gray-700 leading-relaxed">
                  Based in Tucson, AZ, we proudly serve customers within a 50-mile
                  radius. This includes Oro Valley, Marana, Sahuarita, Green Valley, and
                  other surrounding communities.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Need service outside our standard area? Contact us for a custom quote
                  - we're willing to extend our reach for an additional fee factored
                  into the quote.
                </p>
              </div>
              <ServiceAreaMap />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h2 className="text-5xl font-bold mb-12 text-center text-gray-800">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-10">
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
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}