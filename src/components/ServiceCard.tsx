import React from 'react';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType | React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => (
  <div className="bg-white shadow-lg rounded-lg p-6">
    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-100">
      {React.isValidElement(Icon) ? Icon : <Icon className="w-6 h-6 text-blue-600" />}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default ServiceCard;