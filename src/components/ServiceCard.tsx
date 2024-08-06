import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { IconType } from 'react-icons';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => (
  <Card className="bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
    <CardHeader>
      <div className="bg-blue-100 p-4 rounded-full mb-4 w-16 h-16 flex items-center justify-center mx-auto">
        <Icon className="text-4xl text-blue-600" />
      </div>
      <CardTitle className="text-xl font-bold mb-3 text-blue-900">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600 text-sm">{description}</p>
    </CardContent>
  </Card>
);

export default ServiceCard;