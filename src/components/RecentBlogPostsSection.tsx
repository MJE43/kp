import Link from 'next/link';
import Image from 'next/image';

export default function RecentBlogPostsSection() {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">
          Latest from Our Blog
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-primary">
              5 Signs You Need an Electrical Upgrade
            </h3>
            <p className="mb-4 text-foreground">
              Is your home's electrical system up to date? Learn the warning
              signs...
            </p>
            <Link
              href="/blog/electrical-upgrade-signs"
              className="text-primary font-semibold hover:text-accent transition-colors duration-300"
            >
              Read More
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              The Benefits of LED Lighting
            </h3>
            <p className="mb-4 text-gray-700">
              Discover how LED lights can save you money and energy...
            </p>
            <Link
              href="/blog/led-lighting-benefits"
              className="text-blue-600 font-semibold hover:text-blue-700"
            >
              Read More
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Electrical Safety Tips for Homeowners
            </h3>
            <p className="mb-4 text-gray-700">
              Keep your family safe with these essential electrical safety
              tips...
            </p>
            <Link
              href="/blog/electrical-safety-tips"
              className="text-blue-600 font-semibold hover:text-blue-700"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
