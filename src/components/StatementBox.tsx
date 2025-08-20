'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { StatementBoxProps } from '@/types';

const StatementBox: React.FC<StatementBoxProps> = ({
  statement,
  backgroundColor = 'bg-very-light-grey bg-opacity-30',
  hoverColor = 'hover:bg-primary hover:bg-opacity-10',
  textColor = 'text-black',
  fontSize = 'text-small-body-mobile',
  fontWeight = 'font-medium',
  className = ''
}) => {
  return (
    <motion.div
      className={`mx-4 my-2 ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={`
          px-5 py-4 rounded-xl border border-light-grey border-opacity-20
          ${backgroundColor} ${hoverColor}
          transition-all duration-200 ease-in-out
          hover:border-primary hover:border-opacity-30
          hover:shadow-lg hover:shadow-primary hover:shadow-opacity-15
          cursor-default
        `}
      >
        <p className={`${textColor} ${fontSize} ${fontWeight} text-center leading-relaxed`}>
          {statement}
        </p>
      </div>
    </motion.div>
  );
};

interface StatementBoxGroupProps {
  statements: string[];
  title?: string;
  className?: string;
}

export const StatementBoxGroup: React.FC<StatementBoxGroupProps> = ({
  statements,
  title,
  className = ''
}) => {
  return (
    <div className={`py-4 ${className}`}>
      {title && (
        <div className="px-4 py-2 mb-4">
          <h3 className="text-heading-mobile font-bold text-black text-center font-dosis">
            {title}
          </h3>
        </div>
      )}
      <div className="space-y-0">
        {statements.map((statement, index) => (
          <StatementBox
            key={index}
            statement={statement}
          />
        ))}
      </div>
    </div>
  );
};

export default StatementBox;