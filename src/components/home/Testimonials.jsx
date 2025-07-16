import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { id: 1, src: 'https://i.postimg.cc/nV1pjVX8/review-1.png', alt: 'Testimonial 1' },
  { id: 2, src: 'https://i.postimg.cc/NFQtJSPP/review-2.png', alt: 'Testimonial 2' },
  { id: 3, src: 'https://i.postimg.cc/Hn3gfzqW/review-3.png', alt: 'Testimonial 3' },
  { id: 4, src: 'https://i.postimg.cc/KvvFnXT1/review-4.png', alt: 'Testimonial 4' },
  { id: 5, src: 'https://i.postimg.cc/bNCPg603/review-5.png', alt: 'Testimonial 5' },
];

const Testimonials = () => {
  return (
    <motion.section 
      className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container max-w-screen-lg px-6 mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Our Users Say
        </motion.h2>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id} 
              className="break-inside-avoid"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="ios-card p-2 hover:scale-105 transition-transform duration-300">
                <img
                  src={testimonial.src}
                  alt={testimonial.alt}
                  className="w-full h-auto object-cover rounded-xl shadow-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials; 