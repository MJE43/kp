import Layout from '../../components/Layout';

export default function FAQPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">What services do you offer?</h2>
          <p>We offer a wide range of electrical services including residential and commercial installations, repairs, and maintenance.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Are you licensed and insured?</h2>
          <p>Yes, we are fully licensed and insured to provide electrical services in our area of operation.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">How can I schedule a service?</h2>
          <p>You can schedule a service by calling our office or using the contact form on our website.</p>
        </div>
      </div>
    </Layout>
  );
}
