
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
      className="py-16 md:py-12 bg-gradient-to-b from-background via-accent/5 to-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Trigger earlier for grid
      variants={sectionVariants}
    >
      <div className="container max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">See Habitide in Action</h2>
        <div className={`grid ${gridColsClass} gap-8 md:gap-12`}>
          {screenshotUrls.map((url, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              // transition={{ type: 'spring', stiffness: 300 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05, type: 'spring', stiffness: 300 }}
            >
              <Card className="overflow-hidden shadow-lg border-none bg-card/50 backdrop-blur-sm rounded-xl">
                <CardContent className="p-0">
                  <img
                    className="w-full h-auto aspect-[9/19] object-cover object-top"
                    alt={`Habitide app screenshot ${index + 2}`}
                    src={url}
                  />
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
