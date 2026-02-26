'use client';

import React from 'react';

const RedCircleBanner: React.FC = () => {
  // Check for environment variables
  const showBanner =
    import.meta.env.VITE_FOOBAR ||
    import.meta.env.VITE_NEXT_PUBLIC_FOOBAR;

  return (
    <>
      {/* Red Circle in the middle */}
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          backgroundColor: 'red',
        }}
      />

      {/* Banner if env var is set */}
      {showBanner && (
        <div
          className="fixed top-0 left-0 right-0 z-50 bg-yellow-400 text-black text-center py-4 px-4 font-bold shadow-lg"
        >
          Environment Variable Detected: FOOBAR is set!
        </div>
      )}
    </>
  );
};

export default RedCircleBanner;
