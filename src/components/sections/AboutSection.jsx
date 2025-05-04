
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="py-16 md:py-24 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="container max-w-3xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Habitide</h2>
        <p className="text-lg text-muted-foreground">
          Habitide helps you create, track, and maintain positive habits with an intuitive interface, streaks, reminders, and analytics. Our mission is to empower you to make lasting changes, one small step at a time.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutSection;
