import Link from 'next/link';

export default function FeaturedServicesSection() {
  return (
    <section className="bg-gray-50 py-16"> {/* Updated background color */}
      <div className="container mx-auto px-4"> {/* Ensured consistent container width */}
        <h2 className="text-4xl font-bold mb-10 text-primary text-center"> {/* Increased font size, adjusted weight, and centered */}
          Residential Electrical Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8"> {/* Adjusted gap for responsiveness */}
          <div className="text-center bg-white p-8 rounded-lg shadow-md"> {/* Standardized background color */}
            <h3 className="text-2xl font-semibold mb-3 text-blue-600"> {/* Consistent font size and color */}
              Electrical Repairs
            </h3>
            <p className="text-gray-800 text-base leading-relaxed"> {/* Standardized text color and optimized readability */}
              Quick and reliable fixes for all your home electrical issues.
            </p>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-md"> {/* Standardized background color */}
            <h3 className="text-2xl font-semibold mb-3 text-blue-600"> {/* Consistent font size and color */}
              Wiring & Rewiring
            </h3>
            <p className="text-gray-800 text-base leading-relaxed"> {/* Standardized text color and optimized readability */}
              Safe and up-to-code wiring solutions for new homes and
              renovations.
            </p>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-md"> {/* Standardized background color */}
            <h3 className="text-2xl font-semibold mb-3 text-blue-600"> {/* Consistent font size and color */}
              Lighting Installation
            </h3>
            <p className="text-gray-800 text-base leading-relaxed"> {/* Standardized text color and optimized readability */}
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