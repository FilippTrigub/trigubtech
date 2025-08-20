'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const pathname = location.pathname;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Header - stays at top */}
      <header className="hidden md:block bg-text-dark shadow-lg relative z-50">
        <div className="flex items-center justify-center px-4 h-20 relative">
          {/* Logo and Title - Centered */}
          <Link 
            to="/"
            className="flex items-center space-x-4 hover:opacity-80 transition-opacity duration-200"
            onClick={closeMenu}
          >
            <img 
              src="/images/icon.png" 
              alt="Trigub Tech Logo" 
              className="h-9 w-9 object-contain"
            />
            <h1 className="text-text-light font-dosis font-bold text-2xl tracking-wide">
              {WEBSITE_TITLE}
            </h1>
          </Link>

          {/* Menu Button - positioned absolute right */}
          <button
            onClick={toggleMenu}
            className="absolute right-4 text-text-light hover:text-secondary transition-colors duration-200 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* Mobile Header - moved to bottom */}
      <header className="md:hidden fixed bottom-0 left-0 right-0 bg-text-dark shadow-lg z-50">
        <div className="flex items-center justify-center px-4 h-16 relative">
          {/* Logo and Title - Centered */}
          <Link 
            to="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
            onClick={closeMenu}
          >
            <img 
              src="/images/icon.png" 
              alt="Trigub Tech Logo" 
              className="h-8 w-8 object-contain"
            />
            <h1 className="text-text-light font-dosis font-bold text-xl tracking-wide">
              {WEBSITE_TITLE}
            </h1>
          </Link>

          {/* Menu Button - positioned absolute right */}
          <button
            onClick={toggleMenu}
            className="absolute right-4 text-text-light hover:text-secondary transition-colors duration-200 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Navigation */}
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

            {/* Desktop Drawer - slides from right */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
              className="hidden md:flex fixed top-0 right-0 h-full w-80 bg-text-dark shadow-2xl z-50 flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-accent/50">
                <div className="flex items-center space-x-4 mb-2">
                  <img 
                    src="/images/icon.png" 
                    alt="Trigub Tech Logo" 
                    className="h-12 w-12 object-contain"
                  />
                  <div>
                    <h2 className="text-text-light font-dosis font-extrabold text-2xl">
                      {WEBSITE_TITLE}
                    </h2>
                    <p className="text-accent text-sm italic">
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
                        <Link
                          to={item.href}
                          onClick={closeMenu}
                          className={`flex items-center space-x-4 px-4 py-3 rounded-lg transition-all duration-200 ${ 
                            isActive
                              ? 'bg-primary/10 text-text-light font-semibold'
                              : 'text-accent hover:bg-primary/5 hover:text-text-light'
                          }`}
                        >
                          <Icon 
                            size={26} 
                            className={isActive ? 'text-secondary' : 'text-current'} 
                          />
                          <span className="text-lg">
                            {item.label}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-accent/50">
                <div className="text-accent text-xs space-y-1 text-center">
                  <p>filipp@trigub.tech</p>
                  <p className="text-medium-grey">© 2024 Trigub Tech</p>
                </div>
              </div>
            </motion.div>

            {/* Mobile Navigation Panel - slides up from above bottom header */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
              className="md:hidden fixed bottom-16 left-0 right-0 bg-text-dark shadow-2xl z-40"
            >
              {/* Mobile Navigation Grid */}
              <nav className="p-4">
                <div className="grid grid-cols-5 gap-2">
                  {NAVIGATION_ITEMS.map((item) => {
                    const Icon = iconMap[item.icon as keyof typeof iconMap];
                    const isActive = pathname === item.href;
                    
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={closeMenu}
                        className={`flex flex-col items-center justify-center py-3 px-2 rounded-lg transition-all duration-200 ${ 
                          isActive
                            ? 'bg-primary/20 text-secondary'
                            : 'text-accent hover:bg-primary/10 hover:text-text-light'
                        }`}
                      >
                        <Icon 
                          size={24} 
                          className="mb-1" 
                        />
                        <span className="text-xs font-medium text-center leading-tight">
                          {item.label}
                        </span>
                      </Link>
                    );
                  })}
                </div>
                
                {/* Contact info */}
                <div className="mt-4 pt-4 border-t border-accent/30 text-center">
                  <p className="text-accent text-xs">filipp@trigub.tech</p>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;