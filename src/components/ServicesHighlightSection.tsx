'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Settings, Cpu } from 'lucide-react';
import { SERVICE_SECTIONS } from '@/utils/constants';

const iconMap = {
  lightbulb: Lightbulb,
  settings: Settings,
  cpu: Cpu,
};

const ServicesHighlightSection: React.FC = () => {
  return (
    <div className="bg-background py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-text-dark text-center mb-12">What I Can Do For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICE_SECTIONS.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <Icon className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold text-text-dark mb-4">{service.title}</h3>
                <ul className="text-accent space-y-2">
                  {service.statements.map((statement, i) => (
                    <li key={i}>{statement}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesHighlightSection;
