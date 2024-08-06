"use client";

import Link from 'next/link';
import Image from 'next/image';
import heroImage from '../../public/images/image (1).png';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import { useInView } from 'react-intersection-observer';
import { Phone, Calendar, ChevronDown, Home, Building, Zap, Lightbulb, Award, Clock, Star } from 'lucide-react';

const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div), { ssr: false });
const MotionH1 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h1), { ssr: false });
const MotionP = dynamic(() => import('framer-motion').then((mod) => mod.motion.p), { ssr: false });

type PhoneNumber = string;

interface HeroSectionProps {
  phoneNumber: PhoneNumber;
}

export default function HeroSection({ phoneNumber }: HeroSectionProps) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="h-screen bg-slate-900" />;
  }

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={heroImage}
        alt="Electrician smiling in a work environment"
        priority
        quality={100}
        placeholder="blur"
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          transform: inView ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 10s ease-out',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/70"></div>
      <div className="container mx-auto px-4 z-10 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <MotionDiv
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Image src="/logo.png" alt="K.P. Power Logo" width={100} height={100} className="mb-6 mx-auto lg:mx-0" />
            </MotionDiv>
            <MotionH1 
              className="text-5xl md:text-6xl font-extrabold mb-4 text-white leading-tight font-sans"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              K.P. Power
            </MotionH1>
            <MotionP 
              className="text-2xl md:text-3xl mb-8 text-[#FFA500] font-semibold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              Your Trusted Tucson Electrician
            </MotionP>
            <MotionDiv 
              className="mb-10 space-y-4 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              <Button
                asChild
                size="lg"
                className="w-full bg-[#FFA500] hover:bg-[#FFB52E] text-white font-bold rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <a href={`tel:${phoneNumber}`} aria-label="Call Kyle">
                  <Phone className="mr-2" size={20} />
                  Call Kyle: {phoneNumber}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full bg-white/10 hover:bg-white/20 text-white font-bold rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center border-2 border-white"
              >
                <Link href="/contact" aria-label="Book a Free Consultation">
                  <Calendar className="mr-2" size={20} />
                  Book a Free Consultation
                </Link>
              </Button>
            </MotionDiv>
            <MotionDiv
              className="flex justify-center lg:justify-start space-x-6 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
            >
              <div className="flex flex-col items-center">
                <Award className="text-[#FFA500] w-16 h-16 mb-2" />
                <span className="text-white text-sm">Certified</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="text-[#FFA500] w-16 h-16 mb-2" />
                <span className="text-white text-sm">24/7 Service</span>
              </div>
              <div className="flex flex-col items-center">
                <Star className="text-[#FFA500] w-16 h-16 mb-2" />
                <span className="text-white text-sm">Top Rated</span>
              </div>
            </MotionDiv>
          </div>
          <div className="space-y-8">
            <MotionDiv
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
              className="bg-white/10 p-8 rounded-lg"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Services</h2>
              <ul className="text-white space-y-4 text-lg">
                <li className="flex items-center"><Home size={20} className="mr-2 text-[#FFA500]" /> Residential Electrical Repairs</li>
                <li className="flex items-center"><Building size={20} className="mr-2 text-[#FFA500]" /> Commercial Electrical Services</li>
                <li className="flex items-center"><Zap size={20} className="mr-2 text-[#FFA500]" /> Electrical Panel Upgrades</li>
                <li className="flex items-center"><Lightbulb size={20} className="mr-2 text-[#FFA500]" /> Lighting Installation</li>
                <li className="flex items-center"><Phone className="mr-2 text-[#FFA500]" /> 24/7 Emergency Services</li>
              </ul>
              <Button
                asChild
                size="lg"
                className="mt-8 w-full bg-white text-[#0F172A] hover:bg-[#FFA500] hover:text-white font-bold rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/services" aria-label="Explore Our Services">
                  Explore Our Services
                </Link>
              </Button>
            </MotionDiv>
            <MotionP 
              className="text-white italic text-xl p-8 bg-[#FFA500]/20 rounded-lg relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1, ease: "easeOut" }}
            >
              <span className="text-6xl text-[#FFA500] absolute top-2 left-4">"</span>
              <span className="font-bold text-2xl block mb-4">Kyle</span>
              I'm your local electrician. With over 15 years of
              experience, I'm here to solve all your electrical needs
              personally.
              <span className="text-6xl text-[#FFA500] absolute bottom-2 right-4">"</span>
            </MotionP>
          </div>
        </div>
      </div>
      <MotionDiv
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
      >
        <ChevronDown className="text-white" size={32} />
      </MotionDiv>
    </section>
  );
}