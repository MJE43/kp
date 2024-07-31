import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface CTAButtonsProps {
  onEstimateClick: () => void;
}

export const CTAButtons: React.FC<CTAButtonsProps> = ({ onEstimateClick }) => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { repeat: Infinity, duration: 2 }
    });
  }, [controls]);

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
      <Button
        size="lg"
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full text-lg shadow-lg transition-all duration-300 flex items-center"
        onClick={onEstimateClick}
      >
        Request Free Estimate
        <motion.div animate={controls}>
          <ArrowRight className="ml-2 h-6 w-6" />
        </motion.div>
      </Button>
      
      <Button
        size="lg"
        variant="outline"
        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold rounded-full text-lg transition-all duration-300 flex items-center"
        asChild
      >
        <a href="tel:+1234567890">
          <Phone className="mr-2 h-5 w-5" />
          Call Now
        </a>
      </Button>
    </div>
  );
};