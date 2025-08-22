'use client';

import React from 'react';
import { FONT_CONFIG } from '@/utils/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-text-dark border-t border-accent/50">
      <div className="px-6 py-4 pb-20 md:pb-4">
        <div className="flex flex-col items-center space-y-2">
          {/* Disclaimer */}
          <div className="text-center max-w-sm">
            <p className={`text-accent text-xs leading-relaxed ${FONT_CONFIG.BODY_FONT}`}>
              My agents coded this website.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center pt-2 w-full">
            <p className={`text-accent text-xs ${FONT_CONFIG.BODY_FONT}`}>
              {`2025 Trigub Technologies OÜ. Harju maakond, Tallinn, Kesklinna linnaosa, Tartu mnt 67/1-13b, 10115 Estonia`}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
