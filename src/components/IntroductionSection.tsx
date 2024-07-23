export default function IntroductionSection() {
  return (
    <section className="py-16 bg-gray-50"> {/* Updated background color */}
      <div className="container mx-auto px-4"> {/* Ensured consistent container width */}
        <h2 className="text-4xl font-bold mb-10 text-primary text-center"> {/* Increased font size, adjusted weight, and centered */}
          Why Choose Kyle's Electrical Services?
        </h2>
        <div className="grid md:grid-cols-3 gap-8"> {/* Adjusted gap for responsiveness */}
          <div className="text-center bg-white p-8 rounded-lg shadow-md"> {/* Standardized background color */}
            <h3 className="text-2xl font-semibold mb-3 text-blue-600"> {/* Consistent font size and color */}
              Personal Service
            </h3>
            <p className="text-gray-800 text-base leading-relaxed"> {/* Standardized text color and optimized readability */}
              Direct communication and service from Kyle himself, ensuring
              quality and accountability.
            </p>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-md"> {/* Standardized background color */}
            <h3 className="text-2xl font-semibold mb-3 text-blue-600"> {/* Consistent font size and color */}
              15+ Years Experience
            </h3>
            <p className="text-gray-800 text-base leading-relaxed"> {/* Standardized text color and optimized readability */}
              Extensive knowledge and expertise in residential electrical work
              since 2009.
            </p>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-md"> {/* Standardized background color */}
            <h3 className="text-2xl font-semibold mb-3 text-blue-600"> {/* Consistent font size and color */}
              Licensed & Insured
            </h3>
            <p className="text-gray-800 text-base leading-relaxed"> {/* Standardized text color and optimized readability */}
              Full peace of mind with professional guarantees and proper
              certifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}