import Layout from '../../components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">
        About KPPower Electrical Services
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
        <p className="mb-4">
          Welcome to KPPower Electrical Services. Founded in 20XX, we have
          been providing top-quality electrical solutions for residential and
          commercial clients in Tucson, Arizona and surrounding areas within a
          50-mile radius.
        </p>
        <p className="mb-4">
          Our owner, Kyle, brings XX years of experience to every project. His
          passion for electrical work and commitment to customer satisfaction
          are the driving forces behind our company's success.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="mb-4">
          At KPPower Electrical Services, our mission is to ensure the safety
          and satisfaction of our clients through excellent workmanship and
          personalized service. We strive to be the most trusted and reliable
          electrical service provider in Tucson and the surrounding communities.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Service Area</h2>
        <p className="mb-4">
          Based in Tucson, AZ, we proudly serve customers within a 50-mile
          radius. This includes [list a few major areas or cities within the
          radius].
        </p>
        <p className="mb-4">
          Need service outside our standard area? Contact us for a custom quote
          - we're willing to extend our reach for an additional fee factored
          into the quote.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
        <ul className="list-disc list-inside">
          <li>
            Safety First: We prioritize the safety of our clients and our team
            in every project.
          </li>
          <li>
            Quality Workmanship: We take pride in delivering high-quality
            electrical solutions.
          </li>
          <li>Customer Satisfaction: Your satisfaction is our top priority.</li>
          <li>
            Integrity: We conduct our business with honesty and transparency.
          </li>
          <li>
            Continuous Learning: We stay updated with the latest electrical
            technologies and best practices.
          </li>
        </ul>
      </section>
    </Layout>
  );
}
