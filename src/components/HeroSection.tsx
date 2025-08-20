'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-background text-center py-20 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-text-dark mb-4"
      >
        I Turn Your Ideas Into Bots
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-accent mb-8 max-w-2xl mx-auto"
      >
        From strategy to architecture and implementation, I provide AI consulting and LLM development services to bring your vision to life.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link
          to="/contact"
          className="bg-primary text-text-light font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors duration-300"
        >
          Let's Build Together
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroSection;
