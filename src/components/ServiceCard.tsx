import React from 'react';
import { IconType } from 'react-icons';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType | React.ReactNode;
  isEven: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, isEven }) => (
  <div className={`shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 ${isEven ? 'bg-lightest' : 'bg-light'}`}>
    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-brand/20">
      {React.isValidElement(Icon) ? Icon : <Icon className="w-8 h-8 text-brand" />}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-darkest">{title}</h3>
    <p className="text-darkest">{description}</p>
  </div>
);

export default ServiceCard;