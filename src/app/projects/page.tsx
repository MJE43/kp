import Layout from '../../components/Layout';

export default function ProjectsPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Our Projects</h1>
      <p className="mb-4">Welcome to our projects page. Here you can find information about some of our recent electrical installations and services.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Placeholder for project items */}
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Residential Rewiring</h2>
          <p>Complete house rewiring for a 3-bedroom home in downtown area.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Commercial Lighting</h2>
          <p>Installation of energy-efficient LED lighting system for a local office building.</p>
        </div>
        <div className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Solar Panel Installation</h2>
          <p>Residential solar panel setup for sustainable energy production.</p>
        </div>
      </div>
    </Layout>
  );
}
