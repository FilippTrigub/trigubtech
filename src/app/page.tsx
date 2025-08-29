'use client';

import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesHighlightSection from '@/components/ServicesHighlightSection';
import ProjectsHighlightSection from '@/components/ProjectsHighlightSection';
import ContactCTASection from '@/components/ContactCTASection';
import { Link } from 'react-router-dom';
import { FONT_CONFIG } from '@/utils/constants';

export default function HomePage() {
  return (
    <Layout currentPage="home">
      <HeroSection />
      <AboutSection />
      <ServicesHighlightSection />
        <div className="text-center mt-12">
          <Link
            to="/services"
            className={`text-xl md:text-2xl bg-primary text-text-light font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors duration-300 ${FONT_CONFIG.BODY_FONT}`}
          >
            View All Services
          </Link>
        </div>
      <ProjectsHighlightSection />
      <ContactCTASection />
    </Layout>
  );
}
