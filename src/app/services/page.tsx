'use client';

import type { NextPage } from 'next';
import { useCallback } from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import ServicesSection from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import EnhancedCTASection from '@/components/EnhancedCTASection';

const ServicesPage: NextPage = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src="/images/night-stock-photo.jpg"
          alt="Phoenix skyline at night"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-transparent opacity-75"></div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            particles: {
              number: { value: 80, density: { enable: true, value_area: 800 } },
              color: { value: "#ffffff" },
              shape: { type: "circle" },
              opacity: { value: 0.5, random: true },
              size: { value: 3, random: true },
              line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
              move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
            },
            interactivity: {
              detect_on: "canvas",
              events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
              modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
            },
            retina_detect: true
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold mb-4"
            >
              Powering Phoenix's Future
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl mb-8"
            >
              Expert electrical solutions for home and business
            </motion.p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials Section */}
      <TestimonialsSection backgroundColor="bg-lightest" />

      {/* Enhanced CTA Section */}
      <EnhancedCTASection />
    </Layout>
  );
};

export default ServicesPage;