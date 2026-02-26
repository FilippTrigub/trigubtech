import React from 'react';

export default function EnvVarBanner() {
  // Check for environment variables
  // In Vite, only VITE_ prefixed vars are exposed to client, but NEXT_PUBLIC_ might be set
  // We need to check both runtime env and import.meta.env
  const foobar = import.meta.env.VITE_FOOBAR || import.meta.env.FOOBAR;
  const nextPublicFoobar = import.meta.env.VITE_NEXT_PUBLIC_FOOBAR || import.meta.env.NEXT_PUBLIC_FOOBAR;
  
  // Also check if they're set in the global environment (for server-side or build-time)
  const hasFoobar = foobar !== undefined || nextPublicFoobar !== undefined;

  if (!hasFoobar) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFD700',
        color: '#000',
        padding: '16px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '18px',
        zIndex: 10000,
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      }}
    >
      🔔 Environment Variable Detected: {foobar ? 'FOOBAR' : 'NEXT_PUBLIC_FOOBAR'} is set!
    </div>
  );
}
