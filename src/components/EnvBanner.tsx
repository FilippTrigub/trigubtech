'use client';

import React from 'react';

const EnvBanner: React.FC = () => {
  // Check for environment variables
  // In Vite, environment variables are accessed via import.meta.env
  // and must be prefixed with VITE_ to be exposed to the client
  const foobar = import.meta.env.VITE_FOOBAR;
  const nextPublicFoobar = import.meta.env.VITE_NEXT_PUBLIC_FOOBAR;
  
  // Also check process.env for backwards compatibility
  const processFoobar = typeof process !== 'undefined' && process.env?.FOOBAR;
  const processNextPublicFoobar = typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_FOOBAR;
  
  const showBanner = foobar || nextPublicFoobar || processFoobar || processNextPublicFoobar;

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-yellow-400 text-black py-3 px-4 text-center font-bold shadow-lg">
      🚨 Environment Variable Detected: FOOBAR or NEXT_PUBLIC_FOOBAR is set
    </div>
  );
};

export default EnvBanner;
