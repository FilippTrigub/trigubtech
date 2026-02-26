'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import RedCircleBanner from './RedCircleBanner';

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, currentPage }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <RedCircleBanner />
      <Header currentPage={currentPage} />
      <main className="flex-1 pb-16 md:pb-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;