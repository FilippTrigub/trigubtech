'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import BreakingLine from '@/components/BreakingLine';
import TimelineCard from '@/components/TimelineCard';
import AnimatedSection from '@/components/AnimatedSection';
import { ABOUT_DATA } from '@/utils/constants';

export default function AboutPage() {
  return (
    <Layout currentPage="about">
      <div className="min-h-screen">
        <AnimatedSection>
          <BreakingLine text="I am a bit of a nerd." isMobile />
        </AnimatedSection>

        <div className="py-8 relative">
          {/* Education Section */}
          <TimelineCard
            title={ABOUT_DATA[0].title}
            content={ABOUT_DATA[0].content}
            imagePath={ABOUT_DATA[0].imagePath}
            type="education"
            delay={0.2}
          />
        </div>

        <AnimatedSection delay={0.5}>
          <BreakingLine text="Engaged for values:" isMobile />
        </AnimatedSection>

        <div className="py-8 relative">
          {/* Engagement Sections */}
          <TimelineCard
            title={ABOUT_DATA[1].title}
            content={ABOUT_DATA[1].content}
            imagePath={ABOUT_DATA[1].imagePath}
            type="engagement"
            delay={0.3}
          />
          
          <TimelineCard
            title={ABOUT_DATA[2].title}
            content={ABOUT_DATA[2].content}
            imagePath={ABOUT_DATA[2].imagePath}
            type="achievement"
            delay={0.5}
          />
        </div>
      </div>
    </Layout>
  );
}