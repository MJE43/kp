import Link from 'next/link';

interface HeroSectionProps {
  phoneNumber: string;
}

export default function HeroSection({ phoneNumber }: HeroSectionProps) {
  return (
    <section className="bg-blue-600 py-16">
      <div className="container mx-auto">
        <div className="text-center bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">
            Kyle Price Power and Electrical Services
          </h1>
          <p className="text-xl mb-8 text-gray-700">
            Your Friendly Neighborhood Electrician in Tucson, Arizona
          </p>
          <div className="mb-8">
            <a
              href={`tel:${phoneNumber}`}
              className="bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded-full mr-4 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            >
              Call Kyle: {phoneNumber}
            </a>
            <Link
              href="/contact"
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Schedule a Visit
            </Link>
          </div>
          <p className="text-gray-700 italic">
            "I'm Kyle, your local electrician. With over 15 years of
            experience, I'm here to solve all your electrical needs
            personally."
          </p>
        </div>
      </div>
    </section>
  );
}
