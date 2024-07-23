import Link from 'next/link';
import { FaBolt, FaPlug, FaLightbulb } from 'react-icons/fa';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeaturedServicesSection() {
  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-700 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-white text-center">
          Residential Electrical Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon={<FaBolt className="text-4xl text-orange-400" />}
            title="Electrical Repairs"
            description="Quick and reliable fixes for all your home electrical issues."
          />
          <ServiceCard
            icon={<FaPlug className="text-4xl text-orange-400" />}
            title="Wiring & Rewiring"
            description="Safe and up-to-code wiring solutions for new homes and renovations."
          />
          <ServiceCard
            icon={<FaLightbulb className="text-4xl text-orange-400" />}
            title="Lighting Installation"
            description="Brighten your home with expert lighting fixture installations."
          />
        </div>
        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/services">
              View All Residential Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="bg-blue-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader>
        <div className="flex justify-center mb-4">{icon}</div>
        <CardTitle className="text-2xl font-semibold text-orange-400">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white text-base leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
