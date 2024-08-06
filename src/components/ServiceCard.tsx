import React from 'react';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType | React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => (
  <div className="bg-dark/50 backdrop-blur-md shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105">
    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-brand/20">
      {React.isValidElement(Icon) ? Icon : <Icon className="w-8 h-8 text-brand" />}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-lightest">{title}</h3>
    <p className="text-light">{description}</p>
  </div>
);

export default ServiceCard;