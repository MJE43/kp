'use client';

import type { NextPage } from 'next';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, useAnimation } from 'framer-motion';
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { 
  HomeIcon, 
  WrenchScrewdriverIcon, 
  BuildingOfficeIcon, 
  LightBulbIcon, 
  ShieldCheckIcon, 
  BoltIcon 
} from '@heroicons/react/24/outline';

interface Service {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  description: string;
  items: string[];
}

interface Testimonial {
  text: string;
  author: string;
}

const ServiceIcon: React.FC<{ icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }> = ({ icon: Icon }) => (
  <div className="p-2 bg-blue-100 rounded-full">
    <Icon className="w-6 h-6 text-blue-600" />
  </div>
);

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
      transition: { duration: 0.3 }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:bg-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-4">
            <ServiceIcon icon={service.icon} />
            <span>{service.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-gray-600">{service.description}</p>
          <div className="space-y-2">
            {service.items.slice(0, isExpanded ? undefined : 3).map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-center space-x-3">
                <div className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          {service.items.length > 3 && (
            <Button
              variant="link"
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 text-blue-600 hover:text-blue-800"
            >
              {isExpanded ? 'Show less' : 'Show more'}
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TestimonialCard: React.FC<Testimonial> = ({ text, author }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-600 italic mb-4">"{text}"</p>
    <p className="text-gray-800 font-semibold">- {author}</p>
  </div>
);

const ServicesPage: NextPage = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const services: Service[] = [
    {
      title: 'Residential Electrical Services',
      icon: HomeIcon,
      description: 'Comprehensive electrical solutions for your home.',
      items: [
        'Wiring and rewiring',
        'Electrical panel upgrades',
        'Lighting installation',
        'Outlet and switch installation',
        'Ceiling fan installation',
        'Home automation systems',
        'Electrical safety inspections',
      ],
    },
    {
      title: 'Commercial Electrical Services',
      icon: BuildingOfficeIcon,
      description: 'Powering businesses with reliable electrical systems.',
      items: [
        'Commercial wiring and rewiring',
        'Lighting design and installation',
        'Power distribution systems',
        'Emergency backup systems',
        'Energy-efficient upgrades',
        'Data and communication wiring',
        'Code compliance and safety audits',
      ],
    },
    {
      title: 'Electrical Repairs',
      icon: WrenchScrewdriverIcon,
      description: 'Fast and efficient repair services for all electrical issues.',
      items: [
        'Circuit breaker replacement',
        'Electrical troubleshooting',
        'Outlet and switch repairs',
        'Surge protection installation',
        'Electrical fire damage repair',
        'Emergency electrical services',
      ],
    },
    {
      title: 'Energy-Efficient Solutions',
      icon: LightBulbIcon,
      description: 'Optimize your energy usage and reduce costs.',
      items: [
        'LED lighting upgrades',
        'Smart home energy management',
        'Solar panel installation',
        'Energy audits and assessments',
        'Electric vehicle charging stations',
        'Energy-efficient appliance installation',
      ],
    },
    {
      title: 'Electrical Safety',
      icon: ShieldCheckIcon,
      description: 'Ensuring the safety of your electrical systems.',
      items: [
        'Electrical safety inspections',
        'GFCI and AFCI installation',
        'Childproofing electrical outlets',
        'Surge protection systems',
        'Smoke and carbon monoxide detector installation',
        'Electrical code compliance updates',
      ],
    },
    {
      title: 'Innovative Electrical Technologies',
      icon: BoltIcon,
      description: 'Bringing the latest electrical innovations to your space.',
      items: [
        'Smart home automation',
        'Whole-house surge protection',
        'Electric vehicle charging stations',
        'Home battery storage systems',
        'IoT device integration',
        'Voice-controlled lighting systems',
      ],
    },
  ];

  const testimonials: Testimonial[] = [
    {
      text: "K.P. Power transformed our home's electrical system. Their team was professional, efficient, and knowledgeable.",
      author: "Sarah Johnson, Phoenix Homeowner"
    },
    {
      text: "As a business owner, I can't stress enough how crucial reliable electrical work is. K.P. Power delivered beyond our expectations.",
      author: "Michael Chen, Local Business Owner"
    }
  ];

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
      <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-center text-gray-800"
        >
          Our Electrical Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-blue-50 p-8 rounded-lg shadow-md"
        >
          <h3 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            What Our Clients Say
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-16 bg-blue-100 p-8 rounded-lg shadow-md"
        >
          <h3 className="text-3xl font-semibold mb-4 text-gray-800">
            Ready to Upgrade Your Electrical Systems?
          </h3>
          <p className="mb-6 text-gray-700 text-lg">
            Contact us today for a free estimate on your electrical project. Our team of certified electricians is ready to bring your vision to life.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 animate-pulse"
            >
              Spark Your Project
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ServicesPage;