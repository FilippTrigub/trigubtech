'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ImageSeparator from './ImageSeparator';
import { FONT_CONFIG } from '@/utils/constants';

interface ExpandableCardProps {
  title: string;
  preview: string;
  fullContent: string;
  imagePath?: string;
  gradient?: {
    from: string;
    to: string;
  };
  delay?: number;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  title,
  preview,
  fullContent,
  imagePath,
  gradient = { from: '#9600FF10', to: '#9600FF05' },
  delay = 0
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.trim() === '') return <br key={index} />;
      if (line.startsWith('—')) {
        return (
          <div key={index} className="flex items-start space-x-2 my-1">
            <span className="text-primary font-bold mt-1">—</span>
            <span className="flex-1">{line.substring(1).trim()}</span>
          </div>
        );
      }
      return <p key={index} className="mb-2 leading-relaxed">{line}</p>;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="mx-4 mb-6"
    >
      <motion.div
        className="rounded-xl overflow-hidden shadow-lg border border-gray-200"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        {/* Mobile separator for image cards */}
        {imagePath && (
          <div className="md:hidden">
            <ImageSeparator imagePath={imagePath} altText={title} />
          </div>
        )}
        
        {/* Header with Image/Gradient Background */}
        <div 
          className={`relative overflow-hidden cursor-pointer ${
            imagePath ? 'hidden md:block h-48' : 'h-48'
          }`}
          onClick={toggleExpanded}
          style={{
            background: imagePath 
              ? `url(${imagePath}) center/cover`
              : `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`
          }}
        >
          {imagePath && (
            <div className="absolute inset-0 bg-black bg-opacity-30" />
          )}
          
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="text-center">
              <h3 className={`font-bold mb-3 text-xl ${FONT_CONFIG.TITLE_FONT} ${
                imagePath ? 'text-white' : 'text-primary'
              }`}>
                {title}
              </h3>
              <p className={`text-sm leading-relaxed ${FONT_CONFIG.BODY_FONT} ${
                imagePath ? 'text-gray-100' : 'text-gray-700'
              }`}>
                {preview}
              </p>
            </div>
          </div>

          {/* Expand/Collapse Button */}
          <motion.div
            className="absolute bottom-4 right-4 bg-white bg-opacity-90 rounded-full p-2 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isExpanded ? (
              <ChevronUp size={20} className="text-primary" />
            ) : (
              <ChevronDown size={20} className="text-primary" />
            )}
          </motion.div>
        </div>
        
        {/* Mobile header for image cards */}
        {imagePath && (
          <div 
            className="md:hidden bg-gradient-to-r from-primary/10 to-primary/5 p-6 cursor-pointer"
            onClick={toggleExpanded}
          >
            <div className="text-center">
              <h3 className={`font-bold mb-3 text-xl text-primary ${FONT_CONFIG.TITLE_FONT}`}>
                {title}
              </h3>
              <p className={`text-sm leading-relaxed text-gray-700 ${FONT_CONFIG.BODY_FONT}`}>
                {preview}
              </p>
            </div>
            
            {/* Mobile Expand/Collapse Button */}
            <motion.div
              className="flex justify-center mt-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="bg-white rounded-full p-2 shadow-lg">
                {isExpanded ? (
                  <ChevronUp size={20} className="text-primary" />
                ) : (
                  <ChevronDown size={20} className="text-primary" />
                )}
              </div>
            </motion.div>
          </div>
        )}

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="p-6 bg-white">
                <div className={`text-small-body-mobile text-gray-800 ${FONT_CONFIG.BODY_FONT}`}>
                  {formatContent(fullContent)}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ExpandableCard;