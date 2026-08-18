'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { CONTACT_DATA } from '../data/content';

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");
    
    const formData = new FormData(event.target);

    // Retrieve the access key from environment variable
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! I'll get back to you soon.");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "An error occurred. Please try again later.");
      }
    } catch (error) {
      console.log("Error", error);
      setResult("An error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="text-accent font-heading mb-4 block">06. What's Next?</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          {CONTACT_DATA.heading}
        </h2>
        
        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Need a mobile app for your logistics or construction crews that operates smoothly offline and syncs reliably? Let's discuss your field workflow.
        </p>

        {/* Contact Form Container */}
        <div className="glass-card p-8 rounded-xl max-w-md mx-auto mb-16 text-left">
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full bg-gray-900/50 border border-gray-700 rounded px-4 py-2 text-white focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full bg-gray-900/50 border border-gray-700 rounded px-4 py-2 text-white focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-1">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                required 
                className="w-full bg-gray-900/50 border border-gray-700 rounded px-4 py-2 text-white focus:outline-none focus:border-accent transition-colors resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`mt-4 w-full py-3 rounded border border-accent font-medium transition-colors duration-300 ${isSubmitting ? 'bg-accent text-background opacity-70 cursor-not-allowed' : 'text-accent hover:bg-accent hover:text-background'}`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {result && (
              <div className={`mt-2 text-center text-sm ${result.includes("success") ? 'text-green-400' : 'text-accent'}`}>
                {result}
              </div>
            )}
          </form>
        </div>

        {/* Direct Links */}
        <div className="flex justify-center gap-8">
          <a href={CONTACT_DATA.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent hover:-translate-y-1 transition-all duration-300">
            <FaGithub className="text-3xl" />
          </a>
          <a href={CONTACT_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent hover:-translate-y-1 transition-all duration-300">
            <FaLinkedin className="text-3xl" />
          </a>
          <a href={`mailto:${CONTACT_DATA.email}`} className="text-gray-400 hover:text-accent hover:-translate-y-1 transition-all duration-300">
            <FaEnvelope className="text-3xl" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
