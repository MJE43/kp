import { withLayout } from '../../components/Layout';
import ContactForm from '../../components/ContactForm';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaBolt } from 'react-icons/fa';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../../components/Map'), { ssr: false });

function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16 animate-fade-in-down">
          <h1 className="text-6xl font-extrabold text-blue-800 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to answer any questions you may have about our electrical services. Reach out to us and let's power up your project together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="relative h-64">
              <Image
                src="/images/electrical-background.jpg"
                alt="Electrical Services"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-blue-900 bg-opacity-75 flex items-center justify-center">
                <h2 className="text-3xl font-bold text-white">Contact Information</h2>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <ContactItem icon={<FaPhone className="animate-pulse" />} title="Phone" content="(123) 456-7890" />
              <ContactItem icon={<FaEnvelope className="animate-bounce" />} title="Email" content="info@kppower.com" />
              <ContactItem icon={<FaMapMarkerAlt className="animate-ping" />} title="Address" content="1207 W Niagara St, Tucson, AZ 85710" />
              <ContactItem icon={<FaClock className="animate-spin" />} title="Business Hours" content={
                <>
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </>
              } />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              Send us a message
            </h2>
            <ContactForm />
          </div>
        </div>

        <div className="mt-16 bg-yellow-50 border-l-4 border-yellow-400 p-8 rounded-2xl shadow-lg animate-pulse" role="alert">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <FaBolt className="h-8 w-8 text-yellow-400 animate-bounce" />
            </div>
            <div className="ml-4">
              <p className="text-2xl font-bold text-yellow-800">
                24/7 Emergency Services Available
              </p>
              <p className="mt-1 text-yellow-700">
                For urgent electrical issues outside of business hours, please call our emergency line at{' '}
                <span className="font-semibold">(123) 456-7890</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 h-96 rounded-2xl overflow-hidden shadow-lg">
          <Map address="1207 W Niagara St, Tucson, AZ 85710" />
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Frequently Asked Questions</h2>
          <FAQ />
        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon, title, content }) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 h-6 w-6 text-blue-600 mt-1">
        {icon}
      </div>
      <div className="ml-3">
        <p className="text-lg font-medium text-gray-900">{title}</p>
        <p className="mt-1 text-gray-600">{content}</p>
      </div>
    </div>
  );
}

function FAQ() {
  const faqs = [
    { question: "What areas do you serve?", answer: "We serve the greater Phoenix area and surrounding communities." },
    { question: "Are your electricians licensed and insured?", answer: "Yes, all our electricians are fully licensed, insured, and undergo regular training." },
    { question: "Do you offer free estimates?", answer: "Yes, we provide free estimates for all residential and commercial electrical projects." },
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <details key={index} className="bg-white rounded-lg shadow-md p-4">
          <summary className="font-semibold text-lg cursor-pointer">{faq.question}</summary>
          <p className="mt-2 text-gray-600">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

export default withLayout(ContactPage);