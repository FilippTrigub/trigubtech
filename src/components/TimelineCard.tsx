'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown, GraduationCap, Award, Users } from 'lucide-react';

interface TimelineCardProps {
  title: string;
  content: string;
  imagePath: string;
  delay?: number;
  type?: 'education' | 'achievement' | 'engagement';
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  title,
  content,
  imagePath,
  delay = 0,
  type = 'education'
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getIcon = () => {
    switch (type) {
      case 'education':
        return <GraduationCap size={20} className="text-blue-600" />;
      case 'achievement':
        return <Award size={20} className="text-amber-600" />;
      case 'engagement':
        return <Users size={20} className="text-green-600" />;
      default:
        return <GraduationCap size={20} className="text-blue-600" />;
    }
  };

  const getAccentColor = () => {
    switch (type) {
      case 'education':
        return 'border-blue-500 bg-blue-50';
      case 'achievement':
        return 'border-amber-500 bg-amber-50';
      case 'engagement':
        return 'border-green-500 bg-green-50';
      default:
        return 'border-blue-500 bg-blue-50';
    }
  };

  const formatContent = (text: string) => {
    const sections = text.split('\n\n');
    return sections.map((section, index) => {
      const lines = section.split('\n').filter(line => line.trim());
      
      return (
        <div key={index} className="mb-4">
          {lines.map((line, lineIndex) => {
            if (line.startsWith('—')) {
              return (
                <div key={lineIndex} className="flex items-start space-x-2 mb-2">
                  <span className="text-primary font-bold mt-1 flex-shrink-0">—</span>
                  <span className="text-small-body-mobile text-gray-700 leading-relaxed">
                    {line.substring(1).trim()}
                  </span>
                </div>
              );
            }
            
            if (line.includes(':') && !line.startsWith('—')) {
              const [label, ...rest] = line.split(':');
              return (
                <div key={lineIndex} className="mb-2">
                  <span className="font-semibold text-primary">{label}:</span>
                  <span className="text-small-body-mobile text-gray-700 ml-1">
                    {rest.join(':').trim()}
                  </span>
                </div>
              );
            }
            
            return (
              <p key={lineIndex} className="text-small-body-mobile text-gray-700 leading-relaxed mb-2">
                {line}
              </p>
            );
          })}
        </div>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      {/* Timeline Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary-dark opacity-30" />
      
      {/* Timeline Dot */}
      <motion.div
        className={`absolute left-3 top-6 w-6 h-6 rounded-full border-2 ${getAccentColor()} flex items-center justify-center z-10`}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-2 h-2 bg-primary rounded-full" />
      </motion.div>

      {/* Card */}
      <div className="ml-16 mb-8">
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
          whileHover={{ y: -2, shadow: '0 10px 25px rgba(0,0,0,0.1)' }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div
            className="relative h-32 bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${imagePath})` }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <div className="flex items-center space-x-3">
                <div className="bg-white bg-opacity-90 rounded-lg p-2">
                  {getIcon()}
                </div>
                <h3 className="text-white font-bold text-lg font-dosis">
                  {title}
                </h3>
              </div>
              
              <motion.div
                className="bg-white bg-opacity-90 rounded-full p-2"
                animate={{ rotate: isExpanded ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight size={16} className="text-primary" />
              </motion.div>
            </div>
          </div>

          {/* Expandable Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="p-6">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {formatContent(content)}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TimelineCard;