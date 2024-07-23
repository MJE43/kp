"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });
const MotionH1 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h1), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then((mod) => mod.motion.p), { ssr: false });

type PhoneNumber = string;

interface HeroSectionProps {
  phoneNumber: PhoneNumber;
}

export default function HeroSection({ phoneNumber }: HeroSectionProps) {
  const [isMounted, setIsMounted] = useState<boolean>(false);

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
    <section className="bg-slate-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center bg-slate-100 rounded-lg shadow-lg p-8 md:p-12">
          <div className="md:w-3/5 text-center md:text-left md:pr-8">
            <MotionH1 
              className="text-6xl md:text-7xl font-extrabold mb-6 text-slate-900 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              K.P. Power
            </MotionH1>
            <MotionP 
              className="text-2xl md:text-3xl mb-8 text-blue-600 font-semibold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your Friendly Neighborhood Electrician in Tucson, Arizona
            </MotionP>
            <MotionDiv 
              className="mb-10 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full text-lg shadow-md transition-all duration-300"
              >
                <a href={`tel:${phoneNumber}`}>
                  Call Kyle: {phoneNumber}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-slate-900 text-white hover:bg-blue-600 hover:text-white font-bold rounded-full text-lg shadow-md transition-all duration-300 mt-4 md:mt-0"
              >
                <Link href="/contact">
                  Schedule a Visit
                </Link>
              </Button>
            </MotionDiv>
            <MotionP 
              className="text-slate-900 italic text-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              "I'm Kyle, your local electrician. With over 15 years of
              experience, I'm here to solve all your electrical needs
              personally."
            </MotionP>
          </div>
          <MotionDiv 
            className="md:w-2/5 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Image
              src="/images/KylePrice.jpeg"
              alt="Kyle Price, your local electrician in Tucson, Arizona"
              width={500}
              height={500}
              className="rounded-lg shadow-lg w-full h-auto"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
            />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
