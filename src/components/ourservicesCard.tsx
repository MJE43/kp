import React from 'react';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center">
      <div className="bg-blue-100 p-4 rounded-full mb-4">
        <Icon className="text-4xl text-blue" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-darkBlue">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;