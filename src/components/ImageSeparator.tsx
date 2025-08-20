'use client';

import React from 'react';

interface ImageSeparatorProps {
  imagePath: string;
  altText: string;
  className?: string;
}

const ImageSeparator: React.FC<ImageSeparatorProps> = ({
  imagePath,
  altText,
  className = ''
}) => {
  return (
    <div className={`w-full h-[30px] overflow-hidden ${className}`}>
      <img
        src={imagePath}
        alt={altText}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default ImageSeparator;