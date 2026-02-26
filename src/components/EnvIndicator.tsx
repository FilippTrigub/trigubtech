import React from 'react';

export default function EnvIndicator() {
  const foobar = (import.meta as any).env?.NEXT_PUBLIC_FOOBAR || (import.meta as any).env?.FOOBAR;
  const showBanner = !!foobar;

  return (
    <>
      {showBanner && (
        <div className="fixed top-0 left-0 right-0 bg-yellow-400 text-black text-center py-3 px-4 font-bold z-50 shadow-lg">
          Environment Variable Set: {foobar}
        </div>
      )}

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-600 rounded-full z-40 pointer-events-none shadow-2xl opacity-90" />
    </>
  );
}
