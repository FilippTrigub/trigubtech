'use client';

import React from 'react';

const EnvBanner: React.FC = () => {
  // Check for environment variables
  const foobar = import.meta.env.VITE_FOOBAR;
  const nextPublicFoobar = import.meta.env.VITE_NEXT_PUBLIC_FOOBAR;
  
  const shouldShowBanner = foobar || nextPublicFoobar;

  if (!shouldShowBanner) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-yellow-400 text-black py-3 px-4 text-center font-semibold shadow-lg">
      <p>
        Environment Variable Detected: {foobar && 'FOOBAR'}{foobar && nextPublicFoobar && ' and '}{nextPublicFoobar && 'NEXT_PUBLIC_FOOBAR'}
      </p>
    </div>
  );
};

export default EnvBanner;
