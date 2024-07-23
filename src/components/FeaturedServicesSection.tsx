import Link from 'next/link';
import { FaBolt, FaPlug, FaLightbulb } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeaturedServicesSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-blue-900 text-center">
          Residential Electrical Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<FaBolt className="text-4xl text-yellow-500" />}
            title="Electrical Repairs"
            description="Quick and reliable fixes for all your home electrical issues."
          />
          <ServiceCard
            icon={<FaPlug className="text-4xl text-green-500" />}
            title="Wiring & Rewiring"
            description="Safe and up-to-code wiring solutions for new homes and renovations."
          />
          <ServiceCard
            icon={<FaLightbulb className="text-4xl text-blue-500" />}
            title="Lighting Installation"
            description="Brighten your home with expert lighting fixture installations."
          />
        </div>
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300"
          >
            View All Residential Services
          </Link>
        </div>
      </div>
    </section>
  );
}

import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-3 text-blue-600">{title}</h3>
      <p className="text-gray-700 text-base leading-relaxed">{description}</p>
    </div>
  );
}
