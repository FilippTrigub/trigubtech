'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Tag } from 'lucide-react';
import ImageSeparator from './ImageSeparator';
import { FONT_CONFIG } from '@/utils/constants';

interface ServiceCardProps {
  imagePath: string;
  altText: string;
  title: string;
  shortDescription: string;
  content: string;
  keyBenefits: string[];
  keyTech: string[];
  isImageRight?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imagePath,
  altText,
  title,
  shortDescription,
  content,
  keyBenefits,
  keyTech,
  isImageRight = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden my-8 mx-4"
    >
      {/* Title above the grid */}
      <div className="p-6 pb-0">
        <h3 className={`text-2xl font-bold text-text-dark text-center ${FONT_CONFIG.TITLE_FONT}`}>{title}</h3>
      </div>
      
      {/* Mobile separator */}
      <div className="md:hidden">
        <ImageSeparator imagePath={imagePath} altText={altText} />
      </div>
      
      {/* Grid with image and content */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 items-center`}>
        <div className={`hidden md:block md:col-span-1 ${isImageRight ? 'md:order-2' : ''}`}>
          <img
            src={imagePath}
            alt={altText}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-1 p-8">
          <p className={`text-lg md:text-2xl mb-4 ${FONT_CONFIG.BODY_FONT}`}>{shortDescription}</p>
          <p className={`text-lg md:text-xl text-text-dark mb-6 whitespace-pre-line ${FONT_CONFIG.BODY_FONT}`}>{content}</p>
          <ul className="space-y-2 mb-6">
            {keyBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" />
                <span className={`text-lg md:text-2xl text-accent ${FONT_CONFIG.BODY_FONT}`}>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Tags below the grid */}
      <div className="p-6 pt-0">
        <div className="flex flex-wrap gap-2 justify-center">
          {keyTech.map((tech, index) => (
            <div key={index} className="text-lg md:text-2xl flex items-center bg-secondary/20 text-secondary-dark rounded-full px-3 py-1 text-sm">
              <Tag className="w-4 h-4 mr-2" />
              <span className={FONT_CONFIG.BODY_FONT}>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
