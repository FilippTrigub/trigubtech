'use client';

import React from 'react';

interface BreakingLineProps {
  text: string;
  isMobile?: boolean;
}

const BreakingLine: React.FC<BreakingLineProps> = ({ 
  text, 
  isMobile = true 
}) => {
  return (
    <div className="w-full border-b-2 border-accent">
      <div className="py-1">
        <h2 className={`
          text-center font-bold text-text-dark font-dosis
          ${isMobile ? 'text-heading-mobile' : 'text-heading-desktop'}
        `}>
          {text}
        </h2>
      </div>
    </div>
  );
};

export default BreakingLine;