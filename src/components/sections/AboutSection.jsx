import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="py-20 md:py-32 bg-gradient-to-b from-gray-900/50 to-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container max-w-4xl px-6 text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Habitide
        </motion.h2>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Habitide helps you create, track, and maintain positive habits with an intuitive interface, streaks, reminders, and analytics. Our mission is to empower you to make lasting changes, <span className="text-primary">one small step at a time</span>.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AboutSection;
