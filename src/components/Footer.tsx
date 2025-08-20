'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-text-dark border-t border-accent/50">
      <div className="px-6 py-4">
        <div className="flex flex-col items-center space-y-2">
          {/* Disclaimer */}
          <div className="text-center max-w-sm">
            <p className="text-accent text-xs leading-relaxed">
              Parts of the code, images and text of this website are, of course, AI-generated.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center pt-2 w-full">
            <p className="text-accent text-xs">
              © 2024 Trigub Tech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
