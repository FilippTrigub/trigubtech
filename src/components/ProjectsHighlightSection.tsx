'use client';

import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA, FONT_CONFIG } from '@/utils/constants';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectsHighlightSection: React.FC = () => {
  const highlightedProjects = PROJECTS_DATA.slice(0, 5);
  const sliderRef = useRef<Slider>(null);
  const [isHovering, setIsHovering] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleWheel = (e: WheelEvent) => {
    if (isHovering) {
      e.preventDefault();
      if (sliderRef.current) {
        if (e.deltaY > 0) {
          sliderRef.current.slickNext();
        } else {
          sliderRef.current.slickPrev();
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isHovering]);

  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-2xl md:text-4xl font-bold text-text-dark text-center mb-12 ${FONT_CONFIG.TITLE_FONT}`}>My Previous Projects</h2>
        <div onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          <Slider ref={sliderRef} {...settings}>
            {highlightedProjects.map((project, index) => (
              <div key={index} className="px-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-background rounded-lg shadow-md overflow-hidden h-full"
                >
                  <img
                    src={project.imagePath}
                    alt={project.title}
                    className="w-full h-128 object-cover"
                  />
                  <div className="p-6">
                    <h3 className={`text-xl md:text-2xl font-bold text-text-dark mb-2 ${FONT_CONFIG.TITLE_FONT}`}>{project.title}</h3>
                    <Link to={`/projects`} className={`text-primary font-bold hover:underline ${FONT_CONFIG.BODY_FONT}`}>Learn More</Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className={`text-xl md:text-2xl bg-primary text-text-light font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors duration-300 ${FONT_CONFIG.BODY_FONT}`}
          >
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHighlightSection;
