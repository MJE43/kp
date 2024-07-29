"use client";

import Link from 'next/link';
import Image from 'next/image';
import herosectionimage from '../../public/images/herosectionimage.webp';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import { useInView } from 'react-intersection-observer';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });
const MotionH1 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h1), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then((mod) => mod.motion.p), { ssr: false });

type PhoneNumber = string;

interface HeroSectionProps {
  phoneNumber: PhoneNumber;
}

export default function HeroSection({ phoneNumber }: HeroSectionProps) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="bg-slate-900 py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center bg-slate-100 rounded-lg shadow-md p-8">
            {/* Placeholder content */}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={herosectionimage}
        alt="Electricians reviewing a construction site"
        priority
        fill
        sizes="100vw"
        quality={85}
        placeholder="blur"
        style={{ objectFit: 'cover' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <MotionH1 
            className="text-7xl md:text-8xl font-extrabold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            K.P. Power
          </MotionH1>
          <MotionP 
            className="text-2xl md:text-3xl mb-8 text-[#F97316] font-semibold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            Your Friendly Neighborhood Electrician in Tucson, Arizona
          </MotionP>
          <MotionDiv 
            className="mb-10 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-[#F97316] hover:bg-[#FB923C] text-white font-bold rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <a href={`tel:${phoneNumber}`} aria-label="Call Kyle">
                Call Kyle: {phoneNumber}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white/20 font-bold rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact" aria-label="Schedule a Visit">
                Schedule a Visit
              </Link>
            </Button>
          </MotionDiv>
          <MotionP 
            className="text-white italic text-xl max-w-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            "I'm Kyle, your local electrician. With over 15 years of
            experience, I'm here to solve all your electrical needs
            personally."
          </MotionP>
        </div>
      </div>
    </section>
  );
}
