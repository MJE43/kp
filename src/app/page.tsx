/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto text-center bg-white rounded-lg shadow-md py-8">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">
            KPower Electrical Services
          </h1>
          <p className="text-xl mb-8 text-gray-700">
            Your Trusted Electrical Experts in Phoenix, Arizona
          </p>
          <div className="mb-8">
            <a
              href="tel:+15551234567"
              className="bg-yellow-500 text-blue-900 font-bold py-2 px-4 rounded-full mr-4 hover:bg-yellow-600"
            >
              Emergency: (555) 123-4567
            </a>
            <Link
              href="/contact"
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
            Why Choose KPower?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                15+ Years Experience
              </h3>
              <p className="text-gray-700">Serving Phoenix with quality electrical work since 2009.</p>
            </div>
            <div className="text-center bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">Licensed & Insured</h3>
              <p className="text-gray-700">Full peace of mind with our professional guarantees.</p>
            </div>
            <div className="text-center bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                24/7 Emergency Service
              </h3>
              <p className="text-gray-700">We're always here when you need us most.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Residential Services
              </h3>
              <p>Complete electrical solutions for your home.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Commercial Services
              </h3>
              <p>Powering businesses with reliable electrical work.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Energy-Efficient Solutions
              </h3>
              <p>Save money and energy with our green options.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-yellow-500 py-16">
        <div className="container mx-auto text-center bg-white rounded-lg shadow-md py-8">
          <h2 className="text-3xl font-bold mb-4 text-yellow-500">
            Get Your Free Estimate Today!
          </h2>
          <p className="mb-8 text-gray-700">
            Our team is ready to provide you with a comprehensive and
            no-obligation quote.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700"
          >
            Request Free Estimate
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
            What Our Customers Say
          </h2>
          {/* We'll replace this with dynamic testimonials later */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4 text-gray-700">
                "KPower did an amazing job upgrading our home's electrical
                system. Professional and efficient!"
              </p>
              <p className="font-semibold text-blue-600">- Sarah J., Phoenix</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4 text-gray-700">
                "I highly recommend KPower for any commercial electrical needs.
                They're responsive and knowledgeable."
              </p>
              <p className="font-semibold text-blue-600">- Mark T., Scottsdale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">
            Latest from Our Blog
          </h2>
          {/* We'll replace this with dynamic blog posts later */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                5 Signs You Need an Electrical Upgrade
              </h3>
              <p className="mb-4 text-gray-700">
                Is your home's electrical system up to date? Learn the warning
                signs...
              </p>
              <Link
                href="/blog/electrical-upgrade-signs"
                className="text-blue-600 font-semibold"
              >
                Read More
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                The Benefits of LED Lighting
              </h3>
              <p className="mb-4">
                Discover how LED lights can save you money and energy...
              </p>
              <Link
                href="/blog/led-lighting-benefits"
                className="text-blue-600 font-semibold"
              >
                Read More
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Electrical Safety Tips for Homeowners
              </h3>
              <p className="mb-4">
                Keep your family safe with these essential electrical safety
                tips...
              </p>
              <Link
                href="/blog/electrical-safety-tips"
                className="text-blue-600 font-semibold"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Connect With Us</h2>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-500">
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
