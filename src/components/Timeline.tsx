'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_DATA, FONT_CONFIG } from '@/utils/constants';
import { Tag } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className={`text-3xl font-bold text-text-dark text-center mb-12 ${FONT_CONFIG.TITLE_FONT}`}>My Journey</h2>
        <div className="relative">
          <div className="border-r-2 border-primary absolute h-full top-0 left-4"></div>
          <ul className="space-y-12">
            {ABOUT_DATA.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-start"
              >
                <div className={`flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-text-light font-bold z-10 ${FONT_CONFIG.BODY_FONT}`}>
                  {index + 1}
                </div>
                <div className="ml-8">
                  <h3 className={`text-sm md:text-lg font-bold text-text-dark mb-2 ${FONT_CONFIG.TITLE_FONT}`}>{item.title}</h3>
                  <p className={`text-sm md:text-lg mb-4 ${FONT_CONFIG.BODY_FONT}`}>{item.shortDescription}</p>
                  <p className={`text-sm md:text-lg text-text-dark whitespace-pre-line mb-6 ${FONT_CONFIG.BODY_FONT}`}>{item.content}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <div key={index} className={`flex items-center bg-secondary/20 text-secondary-dark rounded-full px-3 py-1 text-sm md:text-lg${FONT_CONFIG.BODY_FONT}`}>
                        <Tag className="w-4 h-4 mr-2" />
                        <span className={FONT_CONFIG.BODY_FONT}>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
