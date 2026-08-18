'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_DATA } from '../data/content';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-10 flex items-center">
          <span className="text-accent mr-4">01.</span> About Me
          <div className="h-[1px] bg-gray-700 flex-grow ml-8"></div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>{ABOUT_DATA.bio}</p>
            <p>{ABOUT_DATA.gameDev}</p>
          </div>
          
          <div className="relative">
            {/* Decorative element since we don't have a photo yet */}
            <div className="glass-card w-full h-full min-h-[300px] rounded-lg p-8 flex flex-col justify-center items-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
              <div className="z-10 text-center">
                <h3 className="text-2xl font-heading text-white mb-2 text-glow">BS Computer Science</h3>
                <p className="text-accent">COMSATS University Lahore</p>
                <p className="text-sm text-gray-400 mt-1">Class of 2025</p>
              </div>
              <div className="w-16 h-[1px] bg-gray-600 my-6"></div>
              <div className="z-10 text-center">
                <h3 className="text-2xl font-heading text-white mb-2 text-glow">Software Engineer</h3>
                <p className="text-accent">Finz Games</p>
                <p className="text-sm text-gray-400 mt-1">Feb 2026 – Jun 2026</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
