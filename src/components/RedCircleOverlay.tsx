import React from 'react';

export default function RedCircleOverlay() {
  // Check for environment variables
  const showBanner = import.meta.env.VITE_FOOBAR || import.meta.env.VITE_NEXT_PUBLIC_FOOBAR;

  return (
    <>
      {/* Big red circle in the middle of the webpage */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          backgroundColor: 'red',
          zIndex: 9999,
          pointerEvents: 'none',
        }}
      />

      {/* Banner that shows when env var is set */}
      {showBanner && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: '#f59e0b',
            color: 'white',
            padding: '12px 20px',
            textAlign: 'center',
            fontWeight: 'bold',
            zIndex: 10000,
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          }}
        >
          FOOBAR Environment Variable is Set
        </div>
      )}
    </>
  );
}
