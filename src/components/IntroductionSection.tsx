import React from 'react';
import { FaUserTie, FaTools, FaCertificate } from 'react-icons/fa';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-slate-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader>
        <div className="flex justify-center mb-4">{icon}</div>
        <CardTitle className="text-2xl font-semibold text-blue-600">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-900 text-base leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function IntroductionSection() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-white text-center">
          Why Choose Kyle's Electrical Services?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FaUserTie className="text-4xl text-blue-600" />}
            title="Personal Service"
            description="Direct communication and service from Kyle himself, ensuring quality and accountability."
          />
          <FeatureCard
            icon={<FaTools className="text-4xl text-blue-600" />}
            title="15+ Years Experience"
            description="Extensive knowledge and expertise in residential electrical work since 2009."
          />
          <FeatureCard
            icon={<FaCertificate className="text-4xl text-blue-600" />}
            title="Licensed & Insured"
            description="Full peace of mind with professional guarantees and proper certifications."
          />
        </div>
      </div>
    </section>
  );
}
