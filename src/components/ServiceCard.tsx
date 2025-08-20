'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Tag } from 'lucide-react';
import ImageSeparator from './ImageSeparator';

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
      {/* Mobile separator */}
      <div className="md:hidden">
        <ImageSeparator imagePath={imagePath} altText={altText} />
      </div>
      
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 items-center`}>
        <div className={`hidden md:block md:col-span-1 ${isImageRight ? 'md:order-2' : ''}`}>
          <img
            src={imagePath}
            alt={altText}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:col-span-1 p-8">
          <h3 className="text-2xl font-bold text-text-dark mb-2">{title}</h3>
          <p className="text-accent mb-4">{shortDescription}</p>
          <p className="text-text-dark mb-6 whitespace-pre-line">{content}</p>
          <ul className="space-y-2 mb-6">
            {keyBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" />
                <span className="text-accent">{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {keyTech.map((tech, index) => (
              <div key={index} className="flex items-center bg-secondary/20 text-secondary-dark rounded-full px-3 py-1 text-sm">
                <Tag className="w-4 h-4 mr-2" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
