'use client';

import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesHighlightSection from '@/components/ServicesHighlightSection';
import ProjectsHighlightSection from '@/components/ProjectsHighlightSection';
import ContactCTASection from '@/components/ContactCTASection';

export default function HomePage() {
  return (
    <Layout currentPage="home">
      <HeroSection />
      <AboutSection />
      <ServicesHighlightSection />
      <ProjectsHighlightSection />
      <ContactCTASection />
    </Layout>
  );
}
