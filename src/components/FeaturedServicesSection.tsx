import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

interface ServiceInfo {
  title: string;
  description: string;
  area: string;
}

export default function FeaturedServicesSection() {
  const services: ServiceInfo[] = [
    {
      title: "Electrical Repairs",
      description: "Quick and reliable fixes for all your home electrical issues.",
      area: "repairs"
    },
    {
      title: "Wiring & Rewiring",
      description: "Safe and up-to-code wiring solutions for new homes and renovations.",
      area: "wiring"
    },
    {
      title: "Lighting Installation",
      description: "Brighten your home with expert lighting fixture installations.",
      area: "lighting"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-blue-900 text-center">
          Residential Electrical Services
        </h2>
        <div className="mb-12">
          <InteractiveHouse services={services} />
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">{service.title}</h3>
              <p className="text-blue-800 text-base leading-relaxed">{service.description}</p>
            </div>
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

function InteractiveHouse({ services }: { services: ServiceInfo[] }) {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[400px]">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Basic house shape */}
        <path d="M10,50 L50,10 L90,50 L90,90 L10,90 Z" fill="#e0e0e0" stroke="#000" strokeWidth="0.5" />
        
        {/* Roof */}
        <path d="M10,50 L50,10 L90,50" fill="#c0c0c0" stroke="#000" strokeWidth="0.5" />
        
        {/* Window */}
        <rect x="30" y="60" width="15" height="15" fill="#87CEEB" stroke="#000" strokeWidth="0.5" />
        
        {/* Door */}
        <rect x="60" y="70" width="10" height="20" fill="#8B4513" stroke="#000" strokeWidth="0.5" />

        {/* Service areas */}
        <motion.circle 
          cx="50" cy="30" r="10" 
          fill={activeService === 'wiring' ? 'rgba(255,165,0,0.5)' : 'transparent'} 
          stroke="#FF6347"
          strokeWidth="0.5"
          animate={{ scale: activeService === 'wiring' ? [1, 1.1, 1] : 1 }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
        <motion.rect 
          x="25" y="55" width="25" height="25" 
          fill={activeService === 'lighting' ? 'rgba(255,165,0,0.5)' : 'transparent'} 
          stroke="#FF6347"
          strokeWidth="0.5"
          animate={{ scale: activeService === 'lighting' ? [1, 1.1, 1] : 1 }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
        <motion.path 
          d="M10,90 L90,90" 
          stroke={activeService === 'repairs' ? '#FF6347' : '#000'}
          strokeWidth="1"
          strokeDasharray="5,5"
          animate={{ strokeDashoffset: [0, 10] }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </svg>
      
      {services.map((service, index) => (
        <div 
          key={index}
          className="absolute cursor-pointer"
          style={{
            top: `${20 + index * 30}%`,
            left: `${10 + index * 30}%`,
          }}
          onMouseEnter={() => setActiveService(service.area)}
          onMouseLeave={() => setActiveService(null)}
        >
          <motion.div
            className="w-4 h-4 bg-blue-500 rounded-full"
            whileHover={{ scale: 1.2 }}
          />
          <div className="mt-2 text-sm font-semibold">{service.title}</div>
        </div>
      ))}
    </div>
  );
}
