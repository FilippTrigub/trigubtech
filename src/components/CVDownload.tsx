'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Download } from 'lucide-react';
import { FONT_CONFIG } from '@/utils/constants';

const CVDownload: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const cvVersions = [
    { lang: 'English', path: '/CV_Filipp_Trigub_EN.pdf' },
    { lang: 'Français', path: '/CV_Filipp_Trigub_FR.pdf' },
    { lang: 'Deutsch', path: '/CV_Filipp_Trigub_DE.pdf' },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline-block text-left my-4" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className={`inline-flex text-primary text-lg font-bold hover:underline mx-auto md:mx-0 ${FONT_CONFIG.BODY_FONT}`}
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          <Download className="mr-2 -ml-1 h-5 w-5" />
          Download CV
        </button>
      </div>

      {isDropdownOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {cvVersions.map((cv) => (
              <a
                key={cv.lang}
                href={cv.path}
                download
                className={`block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${FONT_CONFIG.BODY_FONT}`}
                role="menuitem"
                onClick={() => setDropdownOpen(false)}
              >
                {cv.lang}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CVDownload;
