import React from 'react';

export default function RedCircle() {
  return (
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
      }}
    />
  );
}
