export default function IntroductionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
          Why Choose Kyle's Electrical Services?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Personal Service
            </h3>
            <p className="text-gray-700">
              Direct communication and service from Kyle himself, ensuring
              quality and accountability.
            </p>
          </div>
          <div className="text-center bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              15+ Years Experience
            </h3>
            <p className="text-gray-700">
              Extensive knowledge and expertise in residential electrical work
              since 2009.
            </p>
          </div>
          <div className="text-center bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Licensed & Insured
            </h3>
            <p className="text-gray-700">
              Full peace of mind with professional guarantees and proper
              certifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
