import Layout from '../../components/Layout';

export default function TestimonialsPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Customer Testimonials</h1>
      <p className="mb-4">
        Here&apos;s what our satisfied customers have to say about our
        electrical services:
      </p>
      <div className="space-y-4">
        <div className="border p-4 rounded-lg">
          <p className="italic mb-2">
            &quot;KPower Electrical did an excellent job rewiring our home.
            Professional and efficient!&quot;
          </p>
          <p className="font-semibold">- John D., Homeowner</p>
        </div>
        <div className="border p-4 rounded-lg">
          <p className="italic mb-2">
            &quot;We were impressed with their quick response and quality work
            on our office lighting project.&quot;
          </p>
          <p className="font-semibold">- Sarah M., Business Owner</p>
        </div>
        <div className="border p-4 rounded-lg">
          <p className="italic mb-2">
            &quot;Reliable service and friendly staff. Highly recommend for any
            electrical needs!&quot;
          </p>
          <p className="font-semibold">- Mike R., Property Manager</p>
        </div>
      </div>
    </Layout>
  );
}
