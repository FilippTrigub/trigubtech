'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import BreakingLine from '@/components/BreakingLine';
import ExpandableCard from '@/components/ExpandableCard';
import AnimatedSection from '@/components/AnimatedSection';
import { SERVICES_DATA } from '@/utils/constants';

export default function ServicesPage() {
  return (
    <Layout currentPage="services">
      <div className="min-h-screen">
        <AnimatedSection>
          <BreakingLine text="A selection of my services:" isMobile />
        </AnimatedSection>

        <div className="py-5">
          {SERVICES_DATA.map((service, index) => (
            <ExpandableCard
              key={service.title}
              title={service.title}
              preview={service.content.split('\n\n')[0]}
              fullContent={service.content}
              imagePath={service.imagePath}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}