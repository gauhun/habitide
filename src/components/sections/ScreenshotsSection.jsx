
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card.jsx';

const ScreenshotsSection = ({ screenshotUrls }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Determine grid columns based on the number of screenshots, aiming for 3 columns max
  const gridColsClass = `grid-cols-1 sm:grid-cols-2 ${screenshotUrls.length >= 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'}`;

  return (
    <motion.section
      className="py-20 md:py-32 bg-gradient-to-b from-gray-900/50 to-black relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} 
      variants={sectionVariants}
    >
      {/* Background decorative elements */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full filter blur-3xl opacity-40"></div>
      
      <div className="container max-w-6xl px-6 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          See Habitide in Action
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Experience the beautiful interface designed to keep you motivated
        </motion.p>
        <div className={`grid ${gridColsClass} gap-8 md:gap-12`}>
          {screenshotUrls.map((url, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 300 }}
            >
              <Card className="overflow-hidden shadow-2xl border border-white/10 bg-surface-dark/50 backdrop-blur-xl rounded-3xl ios-card">
                <CardContent className="p-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>
                    <img
                      className="relative w-full h-auto aspect-[9/19] object-cover object-top rounded-2xl"
                      alt={`Habitide app screenshot ${index + 2}`}
                      src={url}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ScreenshotsSection;
