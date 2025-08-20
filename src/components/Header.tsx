'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Briefcase, Folder, User, Mail } from 'lucide-react';
import { WEBSITE_TITLE, WEBSITE_SUBTITLE, NAVIGATION_ITEMS } from '@/utils/constants';

const iconMap = {
  home: Home,
  briefcase: Briefcase,
  folder: Folder,
  user: User,
  mail: Mail,
};

interface HeaderProps {
  currentPage?: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-dark shadow-md relative z-50">
        <div className="flex items-center justify-between px-4 h-20">
          {/* Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-text-dark hover:text-primary transition-colors duration-200 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

          {/* Logo and Title */}
          <a 
            href="/"
            className="flex items-center space-x-4 hover:opacity-80 transition-opacity duration-200"
            onClick={closeMenu}
          >
            <img 
              src="/images/icon.png" 
              alt="Trigub Tech Logo" 
              className="h-9 w-9 object-contain"
            />
            <h1 className="text-text-dark font-dosis font-bold text-2xl tracking-wide">
              {WEBSITE_TITLE}
            </h1>
          </a>

          {/* Spacer for mobile layout balance */}
          <div className="w-12" />
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black bg-opacity-60 z-40"
              onClick={closeMenu}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-80 bg-dark shadow-2xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-medium-grey/50">
                <div className="flex items-center space-x-4 mb-2">
                  <img 
                    src="/images/icon.png" 
                    alt="Trigub Tech Logo" 
                    className="h-12 w-12 object-contain"
                  />
                  <div>
                    <h2 className="text-text-dark font-dosis font-extrabold text-2xl">
                      {WEBSITE_TITLE}
                    </h2>
                    <p className="text-light-grey text-sm italic">
                      {WEBSITE_SUBTITLE}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 py-4">
                <ul className="space-y-1">
                  {NAVIGATION_ITEMS.map((item) => {
                    const Icon = iconMap[item.icon as keyof typeof iconMap];
                    const isActive = pathname === item.href;
                    
                    return (
                      <li key={item.href} className="px-3">
                        <a
                          href={item.href}
                          onClick={closeMenu}
                          className={`flex items-center space-x-4 px-4 py-3 rounded-lg transition-all duration-200 ${ 
                            isActive
                              ? 'bg-primary/10 text-text-dark font-semibold'
                              : 'text-light-grey hover:bg-primary/5 hover:text-text-dark'
                          }`}
                        >
                          <Icon 
                            size={26} 
                            className={isActive ? 'text-primary' : 'text-current'} 
                          />
                          <span className="text-lg">
                            {item.label}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-medium-grey/50">
                <div className="text-light-grey text-xs space-y-1 text-center">
                  <p>filipp@trigub.tech</p>
                  <p className="text-medium-grey">© 2024 Trigub Tech</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
