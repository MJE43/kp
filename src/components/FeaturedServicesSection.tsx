"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { WrenchScrewdriverIcon, LightBulbIcon, BoltIcon } from '@heroicons/react/24/outline';
import ServiceCard from './ServiceCard';

interface ServiceInfo {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeaturedServicesSection() {
  const services: ServiceInfo[] = [
    {
      title: "Electrical Repairs",
      description: "Quick and reliable fixes for all your home electrical issues.",
      icon: <WrenchScrewdriverIcon className="w-12 h-12 text-blue-500" />,
    },
    {
      title: "Wiring & Rewiring",
      description: "Safe and up-to-code wiring solutions for new homes and renovations.",
      icon: <BoltIcon className="w-12 h-12 text-blue-500" />,
    },
    {
      title: "Lighting Installation",
      description: "Brighten your home with expert lighting fixture installations.",
      icon: <LightBulbIcon className="w-12 h-12 text-blue-500" />,
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-10 text-blue-900 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Residential Electrical Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
        <div className="text-center">
          <Button asChild variant="default">
            <Link href="/services">
              View All Residential Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}