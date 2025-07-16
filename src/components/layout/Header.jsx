
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';

const Header = ({ logoUrl }) => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-white/10">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between px-6">
        <motion.a
          href="#"
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logoUrl} alt="Habitide Logo" className="h-10 w-10 rounded-2xl shadow-lg" />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent hidden sm:inline">
            HabiTide
          </span>
        </motion.a>
        <nav className="flex items-center gap-3">
           <motion.div 
             whileHover={{ scale: 1.05 }} 
             whileTap={{ scale: 0.95 }}
             className="ios-button"
           >
             <Button 
               variant="ghost" 
               size="sm" 
               onClick={() => scrollToSection('features')}
               className="text-white/80 hover:text-white hover:bg-white/10 rounded-xl px-4 py-2"
             >
               Features
             </Button>
           </motion.div>
           <motion.div 
             whileHover={{ scale: 1.05 }} 
             whileTap={{ scale: 0.95 }}
             className="ios-button"
           >
             <Button 
               size="sm" 
               className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white shadow-xl rounded-xl px-6 py-2 border-0" 
               onClick={() => scrollToSection('cta')}
             >
               Download
             </Button>
           </motion.div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
