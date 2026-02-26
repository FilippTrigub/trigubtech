import React from 'react';

export default function DebugOverlay() {
  // Check for environment variables
  const foobarSet = import.meta.env.VITE_FOOBAR || import.meta.env.VITE_NEXT_PUBLIC_FOOBAR;

  if (!foobarSet) {
    return null;
  }

  return (
    <>
      {/* Banner */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: '#dc2626',
          color: 'white',
          padding: '12px',
          textAlign: 'center',
          zIndex: 9999,
          fontWeight: 'bold',
          fontSize: '16px'
        }}
      >
        Debug Mode: FOOBAR Environment Variable Detected
      </div>

      {/* Big Red Circle in the Middle */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200px',
          height: '200px',
          backgroundColor: '#dc2626',
          borderRadius: '50%',
          zIndex: 9998,
          pointerEvents: 'none',
          boxShadow: '0 0 50px rgba(220, 38, 38, 0.5)'
        }}
      />
    </>
  );
}
