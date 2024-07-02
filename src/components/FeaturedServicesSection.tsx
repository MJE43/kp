import Link from 'next/link';

export default function FeaturedServicesSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
          Residential Electrical Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Electrical Repairs
            </h3>
            <p className="text-gray-700">
              Quick and reliable fixes for all your home electrical issues.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Wiring & Rewiring
            </h3>
            <p className="text-gray-700">
              Safe and up-to-code wiring solutions for new homes and
              renovations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Lighting Installation
            </h3>
            <p className="text-gray-700">
              Brighten your home with expert lighting fixture installations.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            href="/services"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
          >
            View All Residential Services
          </Link>
        </div>
      </div>
    </section>
  );
}
