export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-[#0F172A]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#F1F5F9] p-6 rounded-lg shadow-md">
            <p className="mb-4 text-[#0F172A]">
              "Kyle did an amazing job upgrading our home's electrical system.
              Professional and efficient!"
            </p>
            <p className="font-semibold text-[#3B82F6]">- Sarah J., Phoenix</p>
          </div>
          <div className="bg-[#F1F5F9] p-6 rounded-lg shadow-md">
            <p className="mb-4 text-[#0F172A]">
              "I highly recommend Kyle for any residential electrical needs.
              He's responsive and knowledgeable."
            </p>
            <p className="font-semibold text-[#3B82F6]">
              - Mark T., Scottsdale
            </p>
          </div>
          <div className="bg-[#F1F5F9] p-6 rounded-lg shadow-md">
            <p className="mb-4 text-[#0F172A]">
              "Kyle's attention to detail and commitment to safety impressed me.
              Great service at a fair price!"
            </p>
            <p className="font-semibold text-[#3B82F6]">
              - Emily R., Tucson
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
