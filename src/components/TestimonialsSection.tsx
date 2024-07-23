'use client';

import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card 
        className="bg-white bg-opacity-5 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-10 border-2 border-orange-500 border-opacity-30"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardHeader>
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ rotate: 0 }}
                animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Star className="text-orange-500 w-6 h-6 fill-current" />
              </motion.div>
            ))}
          </div>
        </CardHeader>
        <CardContent className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute -top-4 -left-2 text-6xl text-orange-500 opacity-30"
          >
            "
          </motion.div>
          <p className="mb-4 text-gray-200 italic text-lg leading-relaxed relative z-10">{quote}</p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute -bottom-8 -right-2 text-6xl text-orange-500 opacity-30"
          >
            "
          </motion.div>
          <CardTitle className="font-semibold text-orange-400">{author}</CardTitle>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

export const TestimonialsSection = (): React.ReactElement => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials: Testimonial[] = [
    {
      id: "1",
      quote: "Kyle did an amazing job upgrading our home's electrical system. Professional and efficient!",
      author: "Sarah J., Phoenix"
    },
    {
      id: "2",
      quote: "I highly recommend Kyle for any residential electrical needs. He's responsive and knowledgeable.",
      author: "Mark T., Scottsdale"
    },
    {
      id: "3",
      quote: "Kyle's attention to detail and commitment to safety impressed me. Great service at a fair price!",
      author: "Emily R., Tucson"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-[#1E3A8A]">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
