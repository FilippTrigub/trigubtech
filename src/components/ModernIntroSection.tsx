'use client';

import React from 'react';
import { motion } from 'framer-motion';
import StatementBox from './StatementBox';
import { INTRO_STATEMENTS, PROFESSIONAL_CREDENTIALS } from '@/utils/constants';

const ModernIntroSection: React.FC = () => {
  return (
    <div className="py-5">
      {/* Professional Credentials Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-4 mb-4"
      >
        <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
          <h3 className="text-big-body-mobile font-bold text-primary text-center mb-3 font-dosis">
            Professional Credentials
          </h3>
          <div className="space-y-2">
            {PROFESSIONAL_CREDENTIALS.map((credential, index) => (
              <p key={index} className="text-small-body-mobile text-text-dark text-left leading-relaxed">
                • {credential}
              </p>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Core Statement Boxes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-0"
      >
        {INTRO_STATEMENTS.map((statement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
          >
            <StatementBox
              statement={statement}
              fontSize="text-small-body-mobile"
              fontWeight="font-semibold"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ModernIntroSection;