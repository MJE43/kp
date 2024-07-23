import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ quote, author }) => (
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

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Kyle did an amazing job upgrading our home's electrical system. Professional and efficient!",
      author: "Sarah J., Phoenix"
    },
    {
      quote: "I highly recommend Kyle for any residential electrical needs. He's responsive and knowledgeable.",
      author: "Mark T., Scottsdale"
    },
    {
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
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}