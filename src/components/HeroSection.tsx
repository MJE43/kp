import Link from 'next/link';

interface HeroSectionProps {
  phoneNumber: string;
}

export default function HeroSection({ phoneNumber }: HeroSectionProps) {
  return (
    <section className="bg-[#0A2342] py-16">
      <div className="container mx-auto">
        <div className="text-center bg-[#F4F4F4] rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold mb-4 text-[#0A2342]">
            Kyle Price Power and Electrical Services
          </h1>
          <p className="text-xl mb-8 text-[#333333]">
            Your Friendly Neighborhood Electrician in Tucson, Arizona
          </p>
          <div className="mb-8">
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
          </div>
          <p className="text-[#333333] italic">
            "I'm Kyle, your local electrician. With over 15 years of
            experience, I'm here to solve all your electrical needs
            personally."
          </p>
        </div>
      </div>
    </section>
  );
}
