import React from 'react';
import { FaUserTie, FaTools, FaCertificate } from 'react-icons/fa';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold mb-3 text-blue-600">{title}</h3>
      <p className="text-gray-700 text-base leading-relaxed">{description}</p>
    </div>
  );
}

export default function IntroductionSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-blue-900 text-center">
          Why Choose Kyle's Electrical Services?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FaUserTie className="text-4xl text-blue-500" />}
            title="Personal Service"
            description="Direct communication and service from Kyle himself, ensuring quality and accountability."
          />
          <FeatureCard
            icon={<FaTools className="text-4xl text-green-500" />}
            title="15+ Years Experience"
            description="Extensive knowledge and expertise in residential electrical work since 2009."
          />
          <FeatureCard
            icon={<FaCertificate className="text-4xl text-yellow-500" />}
            title="Licensed & Insured"
            description="Full peace of mind with professional guarantees and proper certifications."
          />
        </div>
      </div>
    </section>
  );
}
