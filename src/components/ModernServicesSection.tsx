'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Settings, Cpu } from 'lucide-react';
import StatementBox from './StatementBox';
import { SERVICE_SECTIONS, FONT_CONFIG } from '@/utils/constants';

const iconMap = {
  lightbulb: Lightbulb,
  settings: Settings,
  cpu: Cpu,
};

const ModernServicesSection: React.FC = () => {
  return (
    <div className="py-5">
      {SERVICE_SECTIONS.map((section, sectionIndex) => {
        const Icon = iconMap[section.icon as keyof typeof iconMap];
        
        return (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
            className="mb-8 mx-4"
          >
            {/* Section Header */}
            <div 
              className="p-4 rounded-2xl mb-4 border-2"
              style={{ borderColor: section.color }}
            >
              <div className="flex items-center justify-center space-x-3">
                <Icon 
                  size={24} 
                  style={{ color: section.color }}
                />
                <h3 
                  className={`text-big-body-mobile font-bold ${FONT_CONFIG.TITLE_FONT}`}
                  style={{ color: section.color }}
                >
                  {section.title}
                </h3>
              </div>
            </div>

            {/* Statement Boxes */}
            <div className="space-y-0">
              {section.statements.map((statement, statementIndex) => (
                <motion.div
                  key={statementIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: (sectionIndex * 0.2) + (statementIndex * 0.1) + 0.3 
                  }}
                >
                  <StatementBox
                    statement={statement}
                    fontSize="text-small-body-mobile"
                    fontWeight="font-medium"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ModernServicesSection;