'use client';

import React from 'react';

const EnvBanner: React.FC = () => {
  // Check for environment variables
  const hasFoobar = import.meta.env.VITE_FOOBAR || import.meta.env.VITE_NEXT_PUBLIC_FOOBAR;

  // For runtime check (in case Vite doesn't pick them up, check window object)
  const runtimeFoobar = typeof window !== 'undefined' &&
    ((window as any).FOOBAR || (window as any).NEXT_PUBLIC_FOOBAR);

  const shouldShowBanner = hasFoobar || runtimeFoobar;

  if (!shouldShowBanner) {
    return null;
  }

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 bg-yellow-400 text-black py-3 px-4 text-center font-bold shadow-lg"
    >
      Environment Variable Detected: FOOBAR or NEXT_PUBLIC_FOOBAR is set!
    </div>
  );
};

export default EnvBanner;
