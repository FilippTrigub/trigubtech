'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FONT_CONFIG } from '@/utils/constants';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-background text-center py-20 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`text-4xl md:text-6xl font-bold text-text-dark mb-4 ${FONT_CONFIG.TITLE_FONT}`}
      >
        I Turn Your Ideas Into Bots
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`text-sm md:text-lg text-accent mb-8 max-w-2xl mx-auto ${FONT_CONFIG.BODY_FONT}`}
      >
        From strategy to architecture and implementation, I provide AI consulting and LLM development services to bring your vision to life.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col md:flex-column items-center justify-center gap-8 mt-8"
      >
        <div className="border-none rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.superme.ai/embed/ftrigub?style=minimalistic"
            width="500"
            height="150"
            title="Ask my SuperMe">
          </iframe>
        </div>
        <Link
          to="/contact"
          className={`bg-primary text-text-light font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors duration-300 ${FONT_CONFIG.BODY_FONT} whitespace-nowrap`}
        >
          Let's Build Together
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroSection;
