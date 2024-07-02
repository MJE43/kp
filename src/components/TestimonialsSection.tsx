export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <p className="mb-4 text-foreground">
              "Kyle did an amazing job upgrading our home's electrical system.
              Professional and efficient!"
            </p>
            <p className="font-semibold text-primary">- Sarah J., Phoenix</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4 text-gray-700">
              "I highly recommend Kyle for any residential electrical needs.
              He's responsive and knowledgeable."
            </p>
            <p className="font-semibold text-blue-600">
              - Mark T., Scottsdale
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4 text-gray-700">
              "Kyle's attention to detail and commitment to safety impressed me.
              Great service at a fair price!"
            </p>
            <p className="font-semibold text-blue-600">
              - Emily R., Tucson
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
