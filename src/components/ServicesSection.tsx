"use client";

import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FaLightbulb, FaBolt, FaPlug, FaVideo, FaNetworkWired, FaCar, FaHome, FaRegLightbulb } from 'react-icons/fa';
import ServiceCard from './ServiceCard';
import { Button } from "@/components/ui/button";

interface Service {
  title: string;
  description: string;
  icon: IconType;
}

const services: Service[] = [
  {
    title: "LED Downlight Upgrades",
    description: "Energy-efficient LED downlights for improved lighting and reduced costs.",
    icon: FaLightbulb,
  },
  {
    title: "Switchboard Upgrades",
    description: "Modernize your electrical system with professional upgrades.",
    icon: FaBolt,
  },
  {
    title: "Powerpoint Installations",
    description: "Strategically placed powerpoints for your convenience.",
    icon: FaPlug,
  },
  {
    title: "Lighting Design",
    description: "Custom lighting design for the perfect ambiance.",
    icon: FaRegLightbulb,
  },
  {
    title: "CCTV Installations",
    description: "State-of-the-art CCTV solutions for enhanced security.",
    icon: FaVideo,
  },
  {
    title: "Network Installations",
    description: "Professional network design and installation services.",
    icon: FaNetworkWired,
  },
  {
    title: "EV Charger Installations",
    description: "Future-ready electric vehicle charger installations.",
    icon: FaCar,
  },
  {
    title: "Smart Home Integration",
    description: "Cutting-edge smart home technology integration.",
    icon: FaHome,
  },
];

const ServicesSection: React.FC = () => (
  <section className="py-20 bg-light">
    <div className="container mx-auto px-4">
      <h3 className="text-sm font-semibold text-center mb-2 text-darkest uppercase tracking-wider">Our Services</h3>
      <h2 className="text-4xl font-bold text-center mb-12 text-darkest">What We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild className="bg-yellow-400 text-darkest hover:bg-yellow-500 font-semibold shadow-md hover:shadow-lg transition-all duration-300 h-12 px-6 py-3 text-base rounded-full">
          <Link href="/contact">
            Get a Free Quote
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default ServicesSection;