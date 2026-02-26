'use client';

import React from 'react';

const RedCircle: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-40">
      <div 
        className="rounded-full bg-red-600"
        style={{
          width: '200px',
          height: '200px',
        }}
      />
    </div>
  );
};

export default RedCircle;
