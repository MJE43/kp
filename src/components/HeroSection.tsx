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
        <div className="flex flex-col md:flex-row items-center bg-[#F4F4F4] rounded-lg shadow-md p-8">
          <div className="md:w-1/2 text-center md:text-left">
            <MotionH1 
              className="text-4xl font-bold mb-4 text-[#0A2342]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Kyle Price Power and Electrical Services
            </MotionH1>
            <MotionP 
              className="text-xl mb-8 text-[#333333]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your Friendly Neighborhood Electrician in Tucson, Arizona
            </MotionP>
            <MotionDiv 
              className="mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href={`tel:${phoneNumber}`}
                className="bg-[#FFD100] text-[#0A2342] font-bold py-2 px-4 rounded-full mr-4 hover:bg-[#20A39E] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFD100] focus:ring-offset-2 transition-colors duration-300"
              >
                Call Kyle: {phoneNumber}
              </a>
              <Link
                href="/contact"
                className="bg-[#0A2342] text-white font-bold py-2 px-4 rounded-full hover:bg-[#20A39E] focus:outline-none focus:ring-2 focus:ring-[#0A2342] focus:ring-offset-2 transition-colors duration-300"
              >
                Schedule a Visit
              </Link>
            </MotionDiv>
            <MotionP 
              className="text-[#333333] italic"
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
            className="md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Image
              src="/images/electrician.jpg"
              alt="Kyle Price, your local electrician"
              width={500}
              height={500}
              className="rounded-lg shadow-md"
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
