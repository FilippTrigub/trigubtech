'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tag } from 'lucide-react';
import { FONT_CONFIG, INTRO_SUMMARY_DATA } from '@/utils/constants';

const IntroSummarySection: React.FC = () => {
  return (
    <div className="bg-background py-4 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INTRO_SUMMARY_DATA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md text-center flex flex-col"
            >
              <h3 className={`text-xl md:text-2xl font-bold text-dark mb-4 ${FONT_CONFIG.TITLE_FONT}`}>
                {item.title}
              </h3>
              <img
                src={item.imagePath}
                alt={item.altText}
                className="shadow-lg mx-auto w-full object-contain mb-6"
              />
              {item.content && (
                <p
                  className={`text-lg md:text-xl text-accent mb-6 ${FONT_CONFIG.BODY_FONT}`}
                  dangerouslySetInnerHTML={{ __html: item.content }}
                ></p>
              )}
              {index === 0 && item.imagePath2 && (
                <>
                  <img
                    src={item.imagePath2}
                    alt={item.altText2}
                    className="shadow-lg mx-auto w-full object-contain mb-6"
                  />
                  {item.content2 && (
                    <p
                      className={`text-lg md:text-xl text-accent mb-6 ${FONT_CONFIG.BODY_FONT}`}
                      dangerouslySetInnerHTML={{ __html: item.content2 }}
                    ></p>
                  )}
                </>
              )}
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {item.tags.map((tag, i) => (
                    <div key={i} className="text-sm flex items-center bg-secondary/20 text-secondary-dark rounded-full px-3 py-1">
                      <Tag className="w-4 h-4 mr-2" />
                      <span className={FONT_CONFIG.BODY_FONT}>{tag}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-auto">
                <Link
                  to={item.link}
                  className={`text-primary text-lg font-bold hover:underline ${FONT_CONFIG.BODY_FONT}`}
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntroSummarySection;
