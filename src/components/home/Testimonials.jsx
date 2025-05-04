import React from 'react';

const testimonials = [
  { id: 1, src: 'https://i.postimg.cc/nV1pjVX8/review-1.png', alt: 'Testimonial 1' },
  { id: 2, src: 'https://i.postimg.cc/NFQtJSPP/review-2.png', alt: 'Testimonial 2' },
  { id: 3, src: 'https://i.postimg.cc/Hn3gfzqW/review-3.png', alt: 'Testimonial 3' },
  { id: 4, src: 'https://i.postimg.cc/KvvFnXT1/review-4.png', alt: 'Testimonial 4' },
  { id: 5, src: 'https://i.postimg.cc/bNCPg603/review-5.png', alt: 'Testimonial 5' },
];

const Testimonials = () => {
  return (
    <section className="py-6 bg-background">
      <div className="container max-w-screen-lg px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="break-inside-avoid">
              <img
                src={testimonial.src}
                alt={testimonial.alt}
                className="w-full h-auto object-cover rounded-2xl shadow-md" // rounded-2xl for approx 16px
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 