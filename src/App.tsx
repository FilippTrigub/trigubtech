'use client';

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './app/page';
import ServicesPage from './app/services/page';
import ProjectsPage from './app/projects/page';
import AboutPage from './app/about/page';
import ContactPage from './app/contact/page';
import DataProtectionPolicyPage from './app/abra/data-protection-policy/page';
import TermsAndConditionsPage from './app/abra/terms-and-conditions/page';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/abra/data-protection-policy" element={<DataProtectionPolicyPage />} />
      <Route path="/abra/terms-and-conditions" element={<TermsAndConditionsPage />} />
    </Routes>
  );
}
