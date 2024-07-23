"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { LightningBoltIcon, WrenchIcon, LightbulbIcon } from '@radix-ui/react-icons';

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
      icon: <WrenchIcon className="w-12 h-12 text-blue-500" />,
    },
    {
      title: "Wiring & Rewiring",
      description: "Safe and up-to-code wiring solutions for new homes and renovations.",
      icon: <LightningBoltIcon className="w-12 h-12 text-blue-500" />,
    },
    {
      title: "Lighting Installation",
      description: "Brighten your home with expert lighting fixture installations.",
      icon: <LightbulbIcon className="w-12 h-12 text-blue-500" />,
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
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        <div className="text-center">
          <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link href="/services">
              View All Residential Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: ServiceInfo; index: number }) {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div 
        className="mb-4 flex justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {service.icon}
      </motion.div>
      <h3 className="text-2xl font-semibold text-blue-900 mb-2 text-center">{service.title}</h3>
      <p className="text-blue-800 text-base leading-relaxed text-center">{service.description}</p>
    </motion.div>
  );
}
