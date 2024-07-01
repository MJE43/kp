import Layout from '../../components/Layout';

export default function ContactPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">Get in touch with us for any inquiries or to schedule a service.</p>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Phone</h2>
          <p>(123) 456-7890</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p>info@kpowerelectrical.com</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <p>123 Main Street, Anytown, USA 12345</p>
        </div>
      </div>
    </Layout>
  );
}
