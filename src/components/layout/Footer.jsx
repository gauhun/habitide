import React from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass border-t border-white/10 bg-black/50">
      <div className="container max-w-screen-2xl px-6 py-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Habitide. All rights reserved.</p>
        <div className="flex flex-col md:flex-row items-center gap-6 mt-6 md:mt-0">
          <div className="flex items-center gap-6">
            <a 
              href="https://sites.google.com/view/habitidehelp/home" 
              className="hover:text-primary transition-all duration-200 hover:scale-105"
            >
              Terms of Service
            </a>
            <a 
              href="https://sites.google.com/view/habitide/privacypolicy" 
              className="hover:text-primary transition-all duration-200 hover:scale-105"
            >
              Privacy Policy
            </a>
            <a 
              href="mailto:garoono.digital@gmail.com" 
              className="hover:text-primary transition-all duration-200 hover:scale-105"
            >
              garoono.digital@gmail.com
            </a>
          </div>
         <div className="flex items-center gap-4 mt-4 md:mt-0">
           <a 
             href="https://x.com/xgaroono" 
             aria-label="Twitter" 
             className="hover:text-primary transition-all duration-200 hover:scale-110 p-2 rounded-xl hover:bg-white/5"
           >
             <Twitter className="h-5 w-5" />
           </a>
           <a 
             href="https://www.instagram.com/garoono" 
             aria-label="Instagram" 
             className="hover:text-primary transition-all duration-200 hover:scale-110 p-2 rounded-xl hover:bg-white/5"
           >
             <Instagram className="h-5 w-5" />
           </a>
         </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
