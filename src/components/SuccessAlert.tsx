import React from 'react';
import { motion } from 'framer-motion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface SuccessAlertProps {
  show: boolean;
}

export const SuccessAlert: React.FC<SuccessAlertProps> = ({ show }) => {
  if (!show) return null;

  return (
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
  );
};