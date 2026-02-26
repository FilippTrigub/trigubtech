'use client';

import React from 'react';

const RedCircleAndBanner: React.FC = () => {
  // Check for environment variables
  // In Vite, access environment variables using import.meta.env
  const foobar = (import.meta as any).env?.VITE_FOOBAR || (import.meta as any).env?.FOOBAR;
  const nextPublicFoobar = (import.meta as any).env?.VITE_NEXT_PUBLIC_FOOBAR || (import.meta as any).env?.NEXT_PUBLIC_FOOBAR;
  
  const showBanner = !!(foobar || nextPublicFoobar);
  
  return (
    <>
      {/* Big Red Circle - Fixed in the center of viewport */}
      <div 
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200px',
          height: '200px',
          backgroundColor: 'red',
          borderRadius: '50%',
          zIndex: 9998,
          pointerEvents: 'none'
        }}
      />
      
      {/* Conditional Banner */}
      {showBanner && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            backgroundColor: '#1e40af',
            color: 'white',
            padding: '16px',
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: 'bold',
            zIndex: 9999,
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}
        >
          🚀 Environment Variable Detected: {foobar && 'FOOBAR'}{foobar && nextPublicFoobar && ' & '}{nextPublicFoobar && 'NEXT_PUBLIC_FOOBAR'}
        </div>
      )}
    </>
  );
};

export default RedCircleAndBanner;
