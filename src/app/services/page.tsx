'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  HomeIcon, 
  WrenchScrewdriverIcon, 
  BuildingOfficeIcon, 
  LightBulbIcon, 
  ShieldCheckIcon, 
  BoltIcon 
} from '@heroicons/react/24/outline';

interface ServiceIconProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ icon: Icon }) => (
  <div className="p-2 bg-blue-100 rounded-full">
    <Icon className="w-6 h-6 text-blue-600" />
  </div>
);

const ServiceCard = ({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="h-full transition-shadow duration-300 hover:shadow-lg">
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

export default function ServicesPage() {
  const services = [
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

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-8 text-center text-gray-800"
        >
          Our Electrical Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl mb-12 text-center text-gray-700 max-w-3xl mx-auto"
        >
          KPPower Electrical Services offers a comprehensive range of electrical solutions for residential and commercial clients in Phoenix, Arizona. Our expert team is committed to delivering high-quality, safe, and energy-efficient electrical services.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 bg-blue-50 p-8 rounded-lg shadow-md"
        >
          <h3 className="text-3xl font-semibold mb-4 text-gray-800">
            Ready to Upgrade Your Electrical Systems?
          </h3>
          <p className="mb-6 text-gray-700 text-lg">
            Contact us today for a free estimate on your electrical project. Our team of certified electricians is ready to bring your vision to life.
          </p>
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Request a Free Quote
          </Button>
        </motion.div>
      </div>
    </Layout>
  );
}
