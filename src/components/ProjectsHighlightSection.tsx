'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA, FONT_CONFIG } from '@/utils/constants';

const ProjectsHighlightSection: React.FC = () => {
  const highlightedProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-2xl md:text-4xl font-bold text-text-dark text-center mb-12 ${FONT_CONFIG.TITLE_FONT}`}>My Previous Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlightedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-background rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={project.imagePath}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className={`text-sm md:text-lg font-bold text-text-dark mb-2 ${FONT_CONFIG.TITLE_FONT}`}>{project.title}</h3>
                <p className={`text-accent text-sm md:text-lg mb-4 ${FONT_CONFIG.BODY_FONT}`}>{project.goal}</p>
                <Link to={`/projects`} className={`text-primary font-bold hover:underline ${FONT_CONFIG.BODY_FONT}`}>Learn More</Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className={`bg-primary text-text-light font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors duration-300 ${FONT_CONFIG.BODY_FONT}`}
          >
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHighlightSection;
