'use client';

import React from 'react';

const RedCircle: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-40 flex items-center justify-center">
      <div 
        className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-red-600 shadow-2xl"
        style={{
          boxShadow: '0 0 60px rgba(220, 38, 38, 0.6)'
        }}
      />
    </div>
  );
};

export default RedCircle;
