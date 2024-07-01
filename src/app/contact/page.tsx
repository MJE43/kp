import Layout from '../../components/Layout';
import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">
          Contact KPPower and Electrical Services
        </h1>
        <p className="text-lg mb-8 text-gray-600">
          Get in touch with Kyle and our team for any inquiries or to schedule a
          service.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-blue-600">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-1 text-gray-700">
                    Phone
                  </h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-gray-700">
                    Email
                  </h3>
                  <p className="text-gray-600">info@kppower.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-gray-700">
                    Address
                  </h3>
                  <p className="text-gray-600">
                    1207 W Niagara St, Tucson, AZ 85710
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-blue-600">
                Business Hours
              </h2>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 text-blue-600">
              Send us a message
            </h2>
            <ContactForm />
          </div>
        </div>
        <div
          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-6 rounded-lg shadow-md"
          role="alert"
        >
          <p className="font-bold text-lg mb-2">
            24/7 Emergency Services Available
          </p>
          <p>
            For urgent electrical issues outside of business hours, please call
            our emergency line at{' '}
            <span className="font-semibold">(123) 456-7890</span>.
          </p>
        </div>
      </div>
    </Layout>
  );
}
