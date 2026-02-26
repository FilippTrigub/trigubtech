'use client';

import React from 'react';

const RedCircle: React.FC = () => {
  return (
    <div
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50"
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: 'red',
        borderRadius: '50%',
      }}
    />
  );
};

export default RedCircle;
