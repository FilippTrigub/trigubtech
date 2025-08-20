'use client';

import React from 'react';
import Layout from '@/components/Layout';
import BreakingLine from '@/components/BreakingLine';
import ModernIntroSection from '@/components/ModernIntroSection';
import ModernServicesSection from '@/components/ModernServicesSection';
import AnimatedSection from '@/components/AnimatedSection';
import TextImageOverlay from '@/components/TextImageOverlay';
import { PERSONAL_INFO } from '@/utils/constants';

const ContactButtons: React.FC = () => {
  const handleBookCall = () => {
    window.open(PERSONAL_INFO.calendly, '_blank');
  };

  const handleLinkedIn = () => {
    window.open(PERSONAL_INFO.linkedin, '_blank');
  };

  return (
    <div className="space-y-3 text-center">
      <button
        onClick={handleBookCall}
        className="block w-full text-attention font-medium hover:text-primary transition-colors duration-200"
      >
        📅 Book a call
      </button>

      <button
        onClick={handleLinkedIn}
        className="block w-full text-attention font-medium hover:text-primary transition-colors duration-200"
      >
        💼 LinkedIn
      </button>

      <a
        href={`mailto:${PERSONAL_INFO.email}`}
        className="block w-full text-attention font-medium hover:text-primary transition-colors duration-200"
      >
        ✉️ {PERSONAL_INFO.email}
      </a>
    </div>
  );
};

export default function HomePage() {
  return (
    <Layout currentPage="home">
      <div className="min-h-screen">
        {/* Hero Section */}
        <AnimatedSection>
          <BreakingLine text="I turn your ideas into bots!" isMobile />
        </AnimatedSection>

        {/* Intro Section */}
        <ModernIntroSection />

        {/* Services Section */}
        <AnimatedSection delay={0.3}>
          <BreakingLine text="What I can do for you:" isMobile />
        </AnimatedSection>

        <ModernServicesSection />

        {/* Contact Section */}
        <AnimatedSection delay={0.6}>
          <BreakingLine text="Let's get in touch!" isMobile />
        </AnimatedSection>

        <TextImageOverlay
          imagePath="/images/coffee3.jpg"
          altText="Contact"
          title="Book a call directly!\nOr write me a message."
        >
          <ContactButtons />
        </TextImageOverlay>
      </div>
    </Layout>
  );
}
