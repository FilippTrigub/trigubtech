import React from 'react';

export default function EnvDebugOverlay() {
  const foobar = import.meta.env.VITE_FOOBAR;
  const nextPublicFoobar = import.meta.env.VITE_NEXT_PUBLIC_FOOBAR;

  const shouldShow = foobar || nextPublicFoobar;

  if (!shouldShow) {
    return null;
  }

  return (
    <>
      {/* Banner at the top */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: '#ef4444',
          color: 'white',
          padding: '12px',
          textAlign: 'center',
          zIndex: 9999,
          fontWeight: 'bold',
          fontSize: '16px'
        }}
      >
        Environment Variable Active: {foobar ? 'FOOBAR' : 'NEXT_PUBLIC_FOOBAR'} is set
      </div>

      {/* Big red circle in the middle */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200px',
          height: '200px',
          backgroundColor: '#ef4444',
          borderRadius: '50%',
          zIndex: 9998,
          pointerEvents: 'none'
        }}
      />
    </>
  );
}
