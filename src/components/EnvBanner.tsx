import React from 'react';

export default function EnvBanner() {
  // Check for environment variables
  // In Vite, env vars are accessed via import.meta.env
  // Only VITE_ prefixed vars are exposed to the client by default
  // But we also check for NEXT_PUBLIC_ prefix as requested
  const foobar = import.meta.env.FOOBAR;
  const nextPublicFoobar = import.meta.env.NEXT_PUBLIC_FOOBAR;
  
  // Show banner if either environment variable is set
  const showBanner = foobar || nextPublicFoobar;

  if (!showBanner) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#f59e0b',
        color: 'white',
        padding: '16px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '18px',
        zIndex: 9999,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      Environment Variable Banner: {foobar ? 'FOOBAR' : ''} {nextPublicFoobar ? 'NEXT_PUBLIC_FOOBAR' : ''} is set!
    </div>
  );
}
