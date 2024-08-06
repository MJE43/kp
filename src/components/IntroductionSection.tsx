"use client";

import React from 'react';
import Image from 'next/image';
import subtlePattern from '../../public/images/subtle-pattern.webp';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

// Custom icons (replace with actual SVG paths)
const PersonalServiceIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Replace with actual SVG path for a personal service icon */}
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="url(#personalServiceGradient)" />
    <defs>
      <linearGradient id="personalServiceGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4F46E5" />
        <stop offset="1" stopColor="#7C3AED" />
      </linearGradient>
    </defs>
  </svg>
);

const ExperienceIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Replace with actual SVG path for an experience icon */}
    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="url(#experienceGradient)" />
    <defs>
      <linearGradient id="experienceGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F59E0B" />
        <stop offset="1" stopColor="#D97706" />
      </linearGradient>
    </defs>
  </svg>
);

const CertifiedIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Replace with actual SVG path for a certified icon */}
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="url(#certifiedGradient)" />
    <defs>
      <linearGradient id="certifiedGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10B981" />
        <stop offset="1" stopColor="#059669" />
      </linearGradient>
    </defs>
  </svg>
);

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
      <Card className="bg-white/10 backdrop-blur-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-none">
        <CardHeader>
          <div className="flex justify-center mb-4">{icon}</div>
          <CardTitle className="text-2xl font-semibold text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-white/80 text-base leading-relaxed">{description}</p>
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
    <section ref={ref} className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
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
          opacity: 0.1,
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-white text-center"
        >
          Why Choose Kyle's <span className="text-yellow-400">Electrical Services?</span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<PersonalServiceIcon />}
            title="Personal Service"
            description="Direct communication and service from Kyle himself, ensuring quality and accountability."
            delay={0.2}
          />
          <FeatureCard
            icon={<ExperienceIcon />}
            title="15+ Years Experience"
            description="Extensive knowledge and expertise in residential electrical work since 2009."
            delay={0.4}
          />
          <FeatureCard
            icon={<CertifiedIcon />}
            title="Licensed & Insured"
            description="Full peace of mind with professional guarantees and proper certifications."
            delay={0.6}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/contact">Get Your Free Quote Today</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
