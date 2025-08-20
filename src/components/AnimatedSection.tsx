'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  threshold = 0.1
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const controls = useAnimation();

  const getInitialState = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 50 };
      case 'down':
        return { opacity: 0, y: -50 };
      case 'left':
        return { opacity: 0, x: 50 };
      case 'right':
        return { opacity: 0, x: -50 };
      case 'fade':
        return { opacity: 0 };
      default:
        return { opacity: 0, y: 50 };
    }
  };

  const getAnimateState = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      case 'fade':
        return { opacity: 1 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start(getAnimateState());
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={getInitialState()}
      animate={controls}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggeredChildrenProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  childClassName?: string;
}

export const StaggeredChildren: React.FC<StaggeredChildrenProps> = ({
  children,
  className = '',
  staggerDelay = 0.1,
  childClassName = ''
}) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <AnimatedSection
          key={index}
          delay={index * staggerDelay}
          className={childClassName}
        >
          {child}
        </AnimatedSection>
      ))}
    </div>
  );
};

interface CountUpProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  from,
  to,
  duration = 2,
  suffix = '',
  className = ''
}) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(from + (to - from) * easeOutCubic);
        
        setCount(currentCount);

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
};

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  text,
  delay = 0,
  speed = 50,
  className = ''
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? delay : speed);

      return () => clearTimeout(timeout);
    }
  }, [isInView, currentIndex, text, delay, speed]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          className="border-r-2 border-current ml-1"
        />
      )}
    </span>
  );
};

export default AnimatedSection;