"use client";

import React from 'react';
import Image from 'next/image';
import subtlePattern from '../../public/images/subtle-pattern.webp';
import { FaUserTie, FaTools, FaCertificate } from 'react-icons/fa';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="bg-blue-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
        <CardHeader>
          <div className="flex justify-center mb-4">{icon}</div>
          <CardTitle className="text-2xl font-semibold text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white text-base leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
export default function IntroductionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="relative bg-[#1e00ff67] py-16 bg-opacity-90 overflow-hidden">
      <Image
        src={subtlePattern}
        alt="Subtle pattern background"
        fill
        quality={100}
        priority
        sizes="100vw"
        style={{
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-10 text-white text-center"
        >
          Why Choose Kyle's Electrical Services?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FaUserTie className="text-4xl text-white" />}
            title="Personal Service"
            description="Direct communication and service from Kyle himself, ensuring quality and accountability."
            delay={0.2}
          />
          <FeatureCard
            icon={<FaTools className="text-4xl text-white" />}
            title="15+ Years Experience"
            description="Extensive knowledge and expertise in residential electrical work since 2009."
            delay={0.4}
          />
          <FeatureCard
            icon={<FaCertificate className="text-4xl text-white" />}
            title="Licensed & Insured"
            description="Full peace of mind with professional guarantees and proper certifications."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
}
