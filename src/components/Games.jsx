'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGooglePlay } from 'react-icons/fa';
import { GAME_PROJECTS } from '../data/content';

const Games = () => {
  return (
    <section id="games" className="py-20 px-4 md:px-8 max-w-6xl mx-auto bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-16 flex items-center">
          <span className="text-accent mr-4">05.</span> Apps I've Shipped
          <div className="h-[1px] bg-gray-700 flex-grow ml-8"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GAME_PROJECTS.map((game, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col h-full glass-card rounded-xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 relative"
            >
              {/* App Icon Placeholder / Header */}
              <div className="h-48 bg-gray-900/80 flex items-center justify-center relative overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50"></div>
                <div className="w-20 h-20 bg-gray-800 rounded-2xl shadow-lg border border-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 z-10">
                   <FaGooglePlay className="text-3xl text-gray-400 group-hover:text-accent transition-colors" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">{game.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {game.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-800">
                  <span className="text-accent text-xs font-heading uppercase tracking-wider block mb-1">What I learned</span>
                  <p className="text-gray-300 text-sm mb-6">{game.learned}</p>
                  
                  {/* Google Play Badge Button */}
                  <a 
                    href={game.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#000000] border border-gray-700 rounded hover:border-accent hover:bg-[#111111] transition-all"
                  >
                    <FaGooglePlay className="text-green-500 text-lg" />
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-[10px] text-gray-300">GET IT ON</span>
                      <span className="text-sm font-semibold text-white">Google Play</span>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Games;
