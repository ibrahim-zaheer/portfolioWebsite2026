import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { WEB_PROJECTS } from '../data/content';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-16 flex items-center">
          <span className="text-accent mr-4">03.</span> Web Projects
          <div className="h-[1px] bg-gray-700 flex-grow ml-8"></div>
        </h2>

        <div className="flex flex-col gap-16 md:gap-24">
          {WEB_PROJECTS.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
                {/* Visual Placeholder for Project */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="w-full md:w-1/2 aspect-video glass-card rounded-lg relative overflow-hidden group flex items-center justify-center bg-gray-900/50"
                >
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  {project.image ? (
                    <img src={project.image} alt={`${project.title} logo`} className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="text-center">
                      <span className="font-heading text-4xl text-gray-700 font-bold opacity-30">{project.title.substring(0,2).toUpperCase()}</span>
                    </div>
                  )}
                </motion.div>

                {/* Project Info */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:items-start md:text-left' : 'md:items-end md:text-right'} items-start text-left`}
                >
                  <span className="text-accent font-heading text-sm mb-2">{project.role}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">{project.title}</h3>
                  
                  <div className="glass-card p-6 rounded-lg w-full mb-6 z-10 relative">
                    <p className="text-gray-300 text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <ul className={`flex flex-wrap gap-4 font-heading text-sm text-gray-400 mb-6 ${isEven ? 'justify-start' : 'md:justify-end justify-start'}`}>
                    {project.techStack.map((tech, tIdx) => (
                      <li key={tIdx} className="hover:text-accent transition-colors cursor-default">{tech}</li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors" aria-label="GitHub Link">
                      <FaGithub className="text-xl" />
                    </a>
                    {/* <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors" aria-label="External Link">
                      <FaExternalLinkAlt className="text-xl" />
                    </a> */}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
