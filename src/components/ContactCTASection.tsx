'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContactCTASection: React.FC = () => {
  return (
    <div className="bg-primary py-20 px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-text-light mb-4"
      >
        Have a project in mind?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-text-light mb-8 max-w-2xl mx-auto"
      >
        Let's talk about how I can help you achieve your goals. I'm always open to new and exciting challenges.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link
          to="/contact"
          className="bg-secondary text-text-dark font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors duration-300"
        >
          Get in Touch
        </Link>
      </motion.div>
    </div>
  );
};

export default ContactCTASection;
