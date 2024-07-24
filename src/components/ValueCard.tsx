import React from 'react';
import { motion } from 'framer-motion';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-navy-900 p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl"
  >
    <motion.div 
      className="text-4xl text-orange-500 mb-4"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      {icon}
    </motion.div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-300 text-sm">{description}</p>
  </motion.div>
);

export default ValueCard;
