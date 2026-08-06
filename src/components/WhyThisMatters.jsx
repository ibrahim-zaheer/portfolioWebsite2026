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
          <span className="text-accent mr-4">02.</span> The Filter I Build Everything Through
          <div className="h-[1px] bg-gray-700 flex-grow ml-8"></div>
        </h2>
        
        <div className="glass-card p-8 md:p-10 rounded-xl relative overflow-hidden">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-normal">
            A website, app, or feature only earns its place if it does one of two things: brings in money that wasn't coming in before, or removes a cost, in dollars or time, that shouldn't exist. If it doesn't do either, it's not worth building, no matter how impressive the tech behind it is.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyThisMatters;
