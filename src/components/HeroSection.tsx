"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

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
      <section className="bg-[#0A2342] py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center bg-[#F4F4F4] rounded-lg shadow-md p-8">
            {/* Placeholder content */}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#0A2342] py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center bg-[#F4F4F4] rounded-lg shadow-md p-8 md:p-12">
          <div className="md:w-3/5 text-center md:text-left pr-8">
            <MotionH1 
              className="text-7xl font-extrabold mb-6 text-[#0A2342] leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              K.P. Power
            </MotionH1>
            <MotionP 
              className="text-3xl mb-8 text-[#20A39E] font-semibold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your Friendly Neighborhood Electrician in Tucson, Arizona
            </MotionP>
            <MotionDiv 
              className="mb-10 space-y-4 md:space-y-0 md:space-x-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href={`tel:${phoneNumber}`}
                className="inline-block bg-[#FFD100] text-[#0A2342] font-bold py-4 px-8 rounded-full hover:bg-[#20A39E] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFD100] focus:ring-offset-2 transition-all duration-300 text-xl shadow-md"
              >
                Call Kyle: {phoneNumber}
              </a>
              <Link
                href="/contact"
                className="inline-block bg-[#20A39E] text-white font-bold py-4 px-8 rounded-full hover:bg-[#0A2342] focus:outline-none focus:ring-2 focus:ring-[#20A39E] focus:ring-offset-2 transition-all duration-300 text-xl shadow-md mt-4 md:mt-0"
              >
                Schedule a Visit
              </Link>
            </MotionDiv>
            <MotionP 
              className="text-[#333333] italic text-lg"
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