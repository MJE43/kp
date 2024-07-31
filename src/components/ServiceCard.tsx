import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Zap } from 'lucide-react';

interface ServiceCardProps {
  service: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
  <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white 
                   hover:scale-105 hover:bg-opacity-20 transition-all duration-300 
                   shadow-lg hover:shadow-xl">
    <CardHeader>
      <div className="w-12 h-12 mb-4 mx-auto relative">
        <Zap className="w-full h-full text-accent" />
        <div className="absolute inset-0 bg-accent filter blur-md opacity-50" />
      </div>
      <CardTitle className="text-xl font-semibold">{service} Services</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-slate-100">Expert solutions for all your {service.toLowerCase()} electrical needs.</p>
    </CardContent>
  </Card>
);