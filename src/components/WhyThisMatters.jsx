'use client';

import React from 'react';
import { motion } from 'framer-motion';

const WhyThisMatters = () => {
  return (
    <section id="why-this-matters" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-10 flex items-center">
          <span className="text-accent mr-4">02.</span> The Core Principle
          <div className="h-[1px] bg-gray-700 flex-grow ml-8"></div>
        </h2>
        
        <div className="glass-card p-8 md:p-10 rounded-xl relative overflow-hidden">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-normal">
            Field software should never fail just because a cellular signal drops. If an app locks up, drops data, or requires field crews to re-enter job logs when working offline, it costs field operations real hours and revenue. Every mobile field application I build is engineered offline-first from day one.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyThisMatters;
