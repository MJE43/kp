import Layout from '../../components/Layout';

export default function BlogPage() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Our Blog</h1>
      <p className="mb-4">Welcome to our blog. Here you will find the latest news and insights about electrical services.</p>
      <div className="space-y-4">
        <article className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">The Importance of Regular Electrical Maintenance</h2>
          <p>Learn why regular electrical maintenance is crucial for your home or business...</p>
        </article>
        <article className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Energy-Saving Tips for Your Home</h2>
          <p>Discover simple ways to reduce your energy consumption and lower your electricity bills...</p>
        </article>
        <article className="border p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Understanding Smart Home Technology</h2>
          <p>Explore the benefits and possibilities of integrating smart home technology...</p>
        </article>
      </div>
    </Layout>
  );
}
