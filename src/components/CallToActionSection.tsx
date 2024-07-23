'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Zap, ArrowRight, Phone } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface ElectricalIconProps {
  className?: string;
}

const ElectricalIcon: React.FC<ElectricalIconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 7L19.5 12L14.5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.5 12H9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.5 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.5 7L4.5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EnhancedCTASection: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { repeat: Infinity, duration: 2 }
    });
  }, [controls]);

  const handleEstimateClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-white/[0.05]" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-blue-600 to-transparent" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <ElectricalIcon className="w-24 h-24 mx-auto mb-8 text-blue-600" />
        <h2 className="text-5xl font-extrabold text-white mb-6 leading-tight">
          Illuminate Your World with Expert Solutions
        </h2>
        <p className="text-xl text-slate-100 mb-10">
          Experience the power of professional electrical services. 
          Get your comprehensive, no-obligation quote today and light up your future!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full text-lg shadow-lg transition-all duration-300 flex items-center"
            onClick={handleEstimateClick}
          >
            Request Free Estimate
            <motion.div animate={controls}>
              <ArrowRight className="ml-2 h-6 w-6" />
            </motion.div>
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-full text-lg transition-all duration-300 flex items-center"
            asChild
          >
            <a href="tel:+1234567890">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </Button>
        </div>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {['Residential', 'Commercial', 'Emergency'].map((service) => (
          <Card
            key={service}
            className="bg-slate-100 bg-opacity-10 backdrop-filter backdrop-blur-lg text-white hover:scale-105 transition-all duration-300"
          >
            <CardHeader>
              <Zap className="w-12 h-12 mb-4 text-blue-600" />
              <CardTitle className="text-xl font-semibold">{service} Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-100">Expert solutions for all your {service.toLowerCase()} electrical needs.</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {showAlert && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 w-96"
        >
          <Alert>
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your request for a free estimate has been received. We'll contact you shortly!
            </AlertDescription>
          </Alert>
        </motion.div>
      )}
    </section>
  );
};

export default EnhancedCTASection;
