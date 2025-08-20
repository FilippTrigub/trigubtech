'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FONT_CONFIG } from '@/utils/constants';

const AboutSection: React.FC = () => {
  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-1"
        >
          <img
            src="/images/me1.jpg"
            alt="Filipp Trigub"
            className="rounded-full shadow-lg mx-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-2 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <h2 className={`text-2xl md:text-4xl font-bold text-text-dark mb-4 ${FONT_CONFIG.TITLE_FONT}`}>About Me</h2>
          <p className={`text-accent mb-6`}>
            I'm more than a software developer; I'm your personal consultant with a M.Sc. in theoretical physics and over 9 years of full-stack experience. My word counts! Decades-long engagements in my communities are the proof.
          </p>
          <Link
            to="/about"
            className={`text-primary text-lg font-bold hover:underline mx-auto md:mx-0 ${FONT_CONFIG.BODY_FONT}`}
          >
            Learn More About My Journey
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
