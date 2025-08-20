'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import BreakingLine from '@/components/BreakingLine';
import ProjectCard from '@/components/ProjectCard';
import AnimatedSection, { StaggeredChildren } from '@/components/AnimatedSection';
import { PROJECTS_DATA, POC_PROJECTS } from '@/utils/constants';

export default function ProjectsPage() {
  return (
    <Layout currentPage="projects">
      <div className="min-h-screen">
        <AnimatedSection>
          <BreakingLine text="My previous projects:" isMobile />
        </AnimatedSection>

        <div className="py-5">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              client={project.client}
              duration={project.duration}
              goal={project.goal}
              solution={project.solution}
              imagePath={project.imagePath}
              delay={index * 0.2}
            />
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <BreakingLine text="I develop cutting edge PoCs:" isMobile />
        </AnimatedSection>

        <div className="py-5">
          {POC_PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              duration={project.duration}
              goal={project.goal}
              solution={project.solution}
              imagePath={project.imagePath}
              delay={index * 0.15}
              isPoc={true}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}