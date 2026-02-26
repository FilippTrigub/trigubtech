import React from 'react';

const EnvIndicator: React.FC = () => {
  // Check for environment variables
  const foobar = import.meta.env.VITE_FOOBAR || import.meta.env.FOOBAR;
  const nextPublicFoobar = import.meta.env.VITE_NEXT_PUBLIC_FOOBAR || import.meta.env.NEXT_PUBLIC_FOOBAR;
  
  const showBanner = foobar || nextPublicFoobar;

  return (
    <>
      {/* Banner */}
      {showBanner && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: '#fbbf24',
            color: '#000',
            padding: '12px',
            textAlign: 'center',
            fontWeight: 'bold',
            zIndex: 9999,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          Environment Variable Detected: 
          {foobar && ' FOOBAR'}
          {foobar && nextPublicFoobar && ' and'}
          {nextPublicFoobar && ' NEXT_PUBLIC_FOOBAR'}
        </div>
      )}

      {/* Big Red Circle in the Middle */}
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
          pointerEvents: 'none',
          boxShadow: '0 4px 20px rgba(255, 0, 0, 0.5)'
        }}
      />
    </>
  );
};

export default EnvIndicator;
