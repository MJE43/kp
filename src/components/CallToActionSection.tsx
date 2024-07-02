import Link from 'next/link';

export default function CallToActionSection() {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto text-center bg-card rounded-lg shadow-md py-8">
        <h2 className="text-3xl font-bold mb-4 text-primary">
          Get Your Free Estimate Today!
        </h2>
        <p className="mb-8 text-foreground">
          I'm ready to provide you with a comprehensive and no-obligation
          quote for your electrical needs.
        </p>
        <Link
          href="/contact"
          className="bg-primary text-white font-bold py-2 px-4 rounded-full hover:bg-accent transition-colors duration-300"
        >
          Request Free Estimate
        </Link>
      </div>
    </section>
  );
}
