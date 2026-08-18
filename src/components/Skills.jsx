'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../data/content';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-6xl mx-auto bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-16 flex items-center">
          <span className="text-accent mr-4">03.</span> What I Can Build You
          <div className="h-[1px] bg-gray-700 flex-grow ml-8"></div>
        </h2>

        <div className="flex flex-col gap-12">
          {SKILLS_DATA.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-heading text-white mb-2 border-b border-gray-800 pb-2 inline-block">
                {category.category}
              </h3>
              <p className="text-gray-300 text-base md:text-lg mb-6 max-w-3xl leading-relaxed">
                {category.description}
              </p>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {category.skills.map((skill, sIdx) => (
                  <motion.div 
                    key={sIdx} 
                    variants={itemVariants}
                    className="glass-card flex items-center p-4 rounded-lg hover:-translate-y-1 transition-transform duration-300"
                  >
                    {skill.icon && <skill.icon className="text-accent text-2xl mr-3" />}
                    {!skill.icon && <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>}
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
