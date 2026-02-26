'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage }) => {
  const showBanner = import.meta.env.FOOBAR || import.meta.env.NEXT_PUBLIC_FOOBAR;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {showBanner && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
          <div className="w-64 h-64 rounded-full bg-red-600 opacity-90 animate-pulse" />
        </div>
      )}
      <Header currentPage={currentPage} />
      <main className="flex-1 pb-16 md:pb-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;