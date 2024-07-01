import Layout from '../../components/Layout';
import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Contact KPPower and Electrical Services
        </h1>
        <p className="mb-4">
          Get in touch with Kyle and our team for any inquiries or to schedule a
          service.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Phone</h2>
              <p>(123) 456-7890</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Email</h2>
              <p>info@kppower.com</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Address</h2>
              <p>1207 W Niagara St, Tucson, AZ 85710</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}
