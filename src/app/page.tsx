'use client';

import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import IntroSummarySection from '@/components/IntroSummarySection';
import ServicesSliderSection from '@/components/ServicesSliderSection';
import ProjectsHighlightSection from '@/components/ProjectsHighlightSection';
import ContactCTASection from '@/components/ContactCTASection';

export default function HomePage() {
  return (
    <Layout currentPage="home">
      <HeroSection />
      <IntroSummarySection />
      <ServicesSliderSection />
      <ProjectsHighlightSection />
      <ContactCTASection />
    </Layout>
  );
}
