'use client';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './app/page';
import ServicesPage from './app/services/page';
import ProjectsPage from './app/projects/page';
import AboutPage from './app/about/page';
import ContactPage from './app/contact/page';

const showBanner = import.meta.env.FOOBAR || import.meta.env.NEXT_PUBLIC_FOOBAR;

export default function App() {
  return (
    <>
      {showBanner && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          backgroundColor: 'red',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '14px',
          textAlign: 'center',
          boxShadow: '0 0 20px rgba(255,0,0,0.5)'
        }}>
          FOOBAR is set!
        </div>
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}
