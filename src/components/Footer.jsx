import React from 'react';
import { HERO_DATA } from '../data/content';

const Footer = () => {
  return (
    <footer className="w-full py-6 text-center border-t border-white/5 mt-20">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {HERO_DATA.name}. All rights are reserved.
        </p>
        <div className="text-xs text-gray-600 font-heading">
          {/* Built with <span className="text-accent/70">React</span> + <span className="text-accent/70">Three.js</span> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
