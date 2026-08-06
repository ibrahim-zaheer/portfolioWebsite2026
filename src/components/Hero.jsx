import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion } from 'framer-motion';
import { HERO_DATA } from '../data/content';

function ParticleField(props) {
  const ref = useRef();
  // Generate random points in a sphere
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

  useFrame((state, delta) => {
    // Slowly rotate the particle field
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#00f0ff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const Hero = () => {
  const [subheadingIndex, setSubheadingIndex] = useState(0);

  // Typewriter/cycling effect for subheadings
  useEffect(() => {
    const interval = setInterval(() => {
      setSubheadingIndex((prev) => (prev + 1) % HERO_DATA.subheadings.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto flex items-center justify-center overflow-hidden bg-background">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <ParticleField />
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto pointer-events-none">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wider text-glow"
        >
          {HERO_DATA.name}
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-10 mb-6 flex items-center justify-center"
        >
          <span className="text-xl md:text-3xl font-heading text-accent">
            {HERO_DATA.subheadings[subheadingIndex]}
          </span>
          {/* Blinking Cursor */}
          <motion.span 
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-[3px] h-6 md:h-8 bg-accent ml-1"
          />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl"
        >
          {HERO_DATA.valueProp}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 pointer-events-auto"
        >
          <a href="#projects" className="px-8 py-3 rounded border border-accent text-accent font-medium hover:bg-accent hover:text-background transition-colors duration-300">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 rounded bg-accent/10 border border-transparent text-white font-medium hover:bg-accent/20 transition-colors duration-300 glass-card">
            Bring Me a Problem
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-gray-500 text-sm mb-2 uppercase tracking-widest font-heading">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1 h-8 bg-accent/50 rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
