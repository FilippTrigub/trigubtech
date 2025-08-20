
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TextImageOverlayProps {
  imagePath: string;
  altText: string;
  title: string;
  children: React.ReactNode;
}

const TextImageOverlay: React.FC<TextImageOverlayProps> = ({
  imagePath,
  altText,
  title,
  children,
}) => {
  return (
    <motion.div
      className="relative mx-4 my-8 rounded-xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={imagePath}
        alt={altText}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 bg-white bg-opacity-90 p-6">
        <h3 className="text-2xl font-bold text-black mb-4 font-dosis text-center">
          {title}
        </h3>
        <div className="text-left">{children}</div>
      </div>
    </motion.div>
  );
};

export default TextImageOverlay;
