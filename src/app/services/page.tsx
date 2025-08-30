'use client';

import React from 'react';
import Layout from '@/components/Layout';
import BreakingLine from '@/components/BreakingLine';
import ServiceCard from '@/components/ServiceCard';
import { SERVICES_DATA } from '@/utils/constants';

export default function ServicesPage() {
  return (
    <Layout currentPage="services">
      <div className="min-h-screen py-12">
        <BreakingLine text="A selection of my services:" isMobile={false} />
        <div className="max-w-5xl mx-auto">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard
              key={index}
              imagePath={service.imagePath}
              altText={service.title}
              title={service.title}
              shortDescription={service.shortDescription}
              content={service.content}
              keyBenefits={service.keyBenefits}
              keyTech={service.keyTech}
              isImageRight={index % 2 !== 0}
              serviceLink={service.serviceLink}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
