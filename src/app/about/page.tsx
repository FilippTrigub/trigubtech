'use client';

import React from 'react';
import Layout from '@/components/Layout';
import AboutSection from '@/components/AboutSection';
import Timeline from '@/components/Timeline';

export default function AboutPage() {
  return (
    <Layout currentPage="about">
      <AboutSection />
      <Timeline />
    </Layout>
  );
}
