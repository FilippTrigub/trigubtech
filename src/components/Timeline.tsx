'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_DATA } from '@/utils/constants';
import { Tag } from 'lucide-react';

const Timeline: React.FC = () => {
  return (
    <div className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-text-dark text-center mb-12">My Journey</h2>
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
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-text-light font-bold z-10">
                  {index + 1}
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-bold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-accent mb-4">{item.shortDescription}</p>
                  <p className="text-text-dark whitespace-pre-line mb-6">{item.content}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <div key={index} className="flex items-center bg-secondary/20 text-secondary-dark rounded-full px-3 py-1 text-sm">
                        <Tag className="w-4 h-4 mr-2" />
                        <span>{tag}</span>
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
