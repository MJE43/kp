import Layout from '../../components/Layout';
import Image from 'next/image';
import { FaBolt, FaTools, FaUserShield, FaHandshake, FaGraduationCap } from 'react-icons/fa';

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
    <div className="text-4xl text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function AboutPage() {
  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-100 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-8 text-blue-800">
            About KPPower Electrical Services
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-blue-700">Our Story</h2>
              <p className="text-lg mb-4 text-gray-700">
                Welcome to KPPower Electrical Services. Founded in 2022, we have been
                providing top-quality electrical solutions for residential and
                commercial clients in Tucson, Arizona and surrounding areas within a
                50-mile radius.
              </p>
              <p className="text-lg text-gray-700">
                Our owner, Kyle, brings 10 years of experience to every project. His
                passion for electrical work and commitment to customer satisfaction
                are the driving forces behind our company's success.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/KylePrice.jpeg"
                alt="Kyle Price"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="bg-blue-700 text-white p-12 rounded-lg shadow-xl mb-16">
            <h2 className="text-3xl font-semibold mb-4 text-center">Our Mission</h2>
            <p className="text-xl text-center">
              At KPPower Electrical Services, our mission is to ensure the safety
              and satisfaction of our clients through excellent workmanship and
              personalized service. We strive to be the most trusted and reliable
              electrical service provider in Tucson and the surrounding communities.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center text-blue-700">Our Service Area</h2>
            <div className="bg-gray-100 p-8 rounded-lg shadow-inner">
              <p className="text-lg mb-4 text-center text-gray-700">
                Based in Tucson, AZ, we proudly serve customers within a 50-mile
                radius. This includes Oro Valley, Marana, Sahuarita, Green Valley, and
                other surrounding communities.
              </p>
              <p className="text-lg text-center text-gray-700">
                Need service outside our standard area? Contact us for a custom quote
                - we're willing to extend our reach for an additional fee factored
                into the quote.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-8 text-center text-blue-700">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <ValueCard
                icon={<FaUserShield />}
                title="Safety First"
                description="We prioritize the safety of our clients and our team in every project."
              />
              <ValueCard
                icon={<FaTools />}
                title="Quality Workmanship"
                description="We take pride in delivering high-quality electrical solutions."
              />
              <ValueCard
                icon={<FaBolt />}
                title="Customer Satisfaction"
                description="Your satisfaction is our top priority."
              />
              <ValueCard
                icon={<FaHandshake />}
                title="Integrity"
                description="We conduct our business with honesty and transparency."
              />
              <ValueCard
                icon={<FaGraduationCap />}
                title="Continuous Learning"
                description="We stay updated with the latest electrical technologies and best practices."
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
