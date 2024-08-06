"use client";

import React from 'react';
import Link from 'next/link';
import { FaLightbulb, FaBolt, FaPlug, FaVideo, FaNetworkWired, FaCar, FaHome, FaRegLightbulb } from 'react-icons/fa';
import ServiceCard from './ServiceCard';
import { Button } from "@/components/ui/button";

const ServicesSection: React.FC = () => (
  <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
    <div className="container mx-auto px-4">
      <h3 className="text-sm font-semibold text-center mb-2 text-blue-600 uppercase tracking-wider">Our Services</h3>
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">What We Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <ServiceCard 
          title="LED Downlight Upgrades" 
          description="Energy-efficient LED downlights for improved lighting and reduced costs."
          icon={FaLightbulb}
        />
        <ServiceCard 
          title="Switchboard Upgrades" 
          description="Modernize your electrical system with professional upgrades."
          icon={FaBolt}
        />
        <ServiceCard 
          title="Powerpoint Installations" 
          description="Strategically placed powerpoints for your convenience."
          icon={FaPlug}
        />
        <ServiceCard 
          title="Lighting Design" 
          description="Custom lighting design for the perfect ambiance."
          icon={FaRegLightbulb}
        />
        <ServiceCard 
          title="CCTV Installations" 
          description="State-of-the-art CCTV solutions for enhanced security."
          icon={FaVideo}
        />
        <ServiceCard 
          title="Network Installations" 
          description="Professional network design and installation services."
          icon={FaNetworkWired}
        />
        <ServiceCard 
          title="EV Charger Installations" 
          description="Future-ready electric vehicle charger installations."
          icon={FaCar}
        />
        <ServiceCard 
          title="Smart Home Integration" 
          description="Cutting-edge smart home technology integration."
          icon={FaHome}
        />
      </div>
      <div className="text-center mt-8">
        <Button asChild>
          <Link href="/contact">
            Get a Free Quote
          </Link>
        </Button>
      </div>
    </div>
  </section>
);

export default ServicesSection;