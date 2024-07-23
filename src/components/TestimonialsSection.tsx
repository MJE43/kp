'use client';

import { Star } from 'lucide-react';
import PropTypes from 'prop-types';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => (
  <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-opacity-20 hover:scale-105">
    <div className="flex justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="text-yellow-400 w-6 h-6 fill-current" />
      ))}
    </div>
    <p className="mb-4 text-gray-200 italic text-lg leading-relaxed">&ldquo;{quote}&rdquo;</p>
    <p className="font-semibold text-blue-400">{author}</p>
  </div>
);

TestimonialCard.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

interface Testimonial {
  id: string;
  quote: string;
  author: string;
}

export function TestimonialsSection(): React.ReactElement {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      quote: "Kyle did an amazing job upgrading our home's electrical system. Professional and efficient!",
      author: "Sarah J., Phoenix"
    },
    {
      id: "2",
      quote: "I highly recommend Kyle for any residential electrical needs. He's responsive and knowledgeable.",
      author: "Mark T., Scottsdale"
    },
    {
      id: "3",
      quote: "Kyle's attention to detail and commitment to safety impressed me. Great service at a fair price!",
      author: "Emily R., Tucson"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
