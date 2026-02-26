import React from 'react';

export default function RedCircle() {
  return (
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
  );
}
