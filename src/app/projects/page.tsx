'use client';

import React from 'react';
import Layout from '@/components/Layout';
import BreakingLine from '@/components/BreakingLine';
import ProjectCard from '@/components/ProjectCard';
import { PROJECTS_DATA, POC_PROJECTS } from '@/utils/constants';

export default function ProjectsPage() {
  return (
    <Layout currentPage="projects">
      <div className="min-h-screen py-12">
        <BreakingLine text="My previous projects:" isMobile={false} />
        <div className="max-w-5xl mx-auto">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard
              key={index}
              imagePath={project.imagePath}
              altText={project.title}
              title={project.title}
              shortDescription={project.shortDescription}
              client={project.client}
              duration={project.duration}
              goal={project.goal}
              solution={project.solution}
              keyTechnologies={project.keyTechnologies}
              isImageRight={index % 2 !== 0}
              projectLink={project.projectLink}
            />
          ))}
        </div>
        <BreakingLine text="I develop cutting edge PoCs:" isMobile={false} />
        <div className="max-w-5xl mx-auto">
          {POC_PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              imagePath={project.imagePath}
              altText={project.title}
              title={project.title}
              shortDescription={project.shortDescription}
              duration={project.duration}
              goal={project.goal}
              solution={project.solution}
              keyTechnologies={project.keyTechnologies}
              isImageRight={index % 2 !== 0}
              projectLink={project.projectLink}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
