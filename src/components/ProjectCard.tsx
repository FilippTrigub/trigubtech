'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Calendar, Target, Lightbulb, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  client?: string;
  duration: string;
  goal: string;
  solution: string;
  imagePath: string;
  delay?: number;
  isPoc?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  client,
  duration,
  goal,
  solution,
  imagePath,
  delay = 0,
  isPoc = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const InfoItem: React.FC<{
    icon: React.ReactNode;
    label: string;
    content: string;
    delay: number;
  }> = ({ icon, label, content, delay }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      className="flex items-start space-x-3 mb-4"
    >
      <div className="flex-shrink-0 w-8 h-8 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mt-1">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
          {label}
        </p>
        <p className="text-small-body-mobile text-gray-800 leading-relaxed">
          {content}
        </p>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="mx-4 mb-8"
    >
      <motion.div
        className="relative rounded-xl overflow-hidden shadow-xl"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Image */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={imagePath}
            alt={title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          {/* Title */}
          <motion.h3
            className="text-white font-bold text-lg font-dosis mb-3 leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: delay + 0.2 }}
          >
            {title}
          </motion.h3>

          {/* Quick Info */}
          <motion.div
            className="flex flex-wrap gap-2 mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: delay + 0.3 }}
          >
            {client && (
              <span className="px-2 py-1 bg-white bg-opacity-20 rounded-md text-white text-xs font-medium">
                {client}
              </span>
            )}
            <span className="px-2 py-1 bg-primary bg-opacity-80 rounded-md text-white text-xs font-medium">
              {duration}
            </span>
            {isPoc && (
              <span className="px-2 py-1 bg-green-500 bg-opacity-80 rounded-md text-white text-xs font-medium">
                PoC
              </span>
            )}
          </motion.div>

          {/* Action Button */}
          <motion.button
            onClick={() => setShowDetails(!showDetails)}
            className="self-start flex items-center space-x-2 bg-white bg-opacity-90 hover:bg-white text-primary font-semibold px-4 py-2 rounded-lg transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: delay + 0.4 }}
          >
            <span>{showDetails ? 'Hide Details' : 'View Details'}</span>
            <ExternalLink size={16} />
          </motion.button>
        </div>
      </motion.div>

      {/* Expandable Details */}
      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="bg-white rounded-b-xl shadow-lg border-t-0 p-6 -mt-2">
              {client && (
                <InfoItem
                  icon={<Building size={16} className="text-primary" />}
                  label="Client"
                  content={client}
                  delay={0.1}
                />
              )}
              
              <InfoItem
                icon={<Calendar size={16} className="text-primary" />}
                label="Duration"
                content={duration}
                delay={0.2}
              />
              
              <InfoItem
                icon={<Target size={16} className="text-primary" />}
                label="Goal"
                content={goal}
                delay={0.3}
              />
              
              <InfoItem
                icon={<Lightbulb size={16} className="text-primary" />}
                label="Solution"
                content={solution}
                delay={0.4}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;