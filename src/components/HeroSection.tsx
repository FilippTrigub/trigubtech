'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FONT_CONFIG, huuh_public_key } from '@/utils/constants';

const HeroSection: React.FC = () => {

  return (
    <div className="bg-background text-center py-20 px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`text-4xl md:text-6xl font-bold text-text-dark mb-4 ${FONT_CONFIG.TITLE_FONT}`}
      >
        I build reliable AI systems
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`text-xl md:text-2xl text-accent mb-8 max-w-2xl mx-auto ${FONT_CONFIG.BODY_FONT}`}
      >
        Strategy, Architecture, Implementation; <br/> Agentic AI systems consulting and engineering. <br/> Bring your vision to life.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex flex-col md:flex-column items-center justify-center gap-8 mt-8"
      >
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            to={`https://app.huuh.me/public/courses/68b2e0e85780a58ff534962a/chat?api_key=${huuh_public_key}`}
            className={`text-2xl md:text-4xl border-2 border-primary text-primary font-bold py-3 px-8 rounded-full hover:bg-primary/10 transition-colors duration-300 ${FONT_CONFIG.BODY_FONT} whitespace-nowrap`}
          >
            Ask my AI
          </Link>
          <Link
            to="/contact"
            className={`text-2xl md:text-4xl bg-primary text-text-light font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors duration-300 ${FONT_CONFIG.BODY_FONT} whitespace-nowrap`}
          >
            Book a Call
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
