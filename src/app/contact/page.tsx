'use client';

import React from 'react';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { FONT_CONFIG, PERSONAL_INFO } from '@/utils/constants';
import { Mail, Linkedin, Calendar, Github } from 'lucide-react';

export default function ContactPage() {
  return (
    <Layout currentPage="contact">
      <div className="bg-background py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-2xl md:text-4xl font-bold text-text-dark text-center mb-12 ${FONT_CONFIG.TITLE_FONT}`}>
            Let's Get in Touch
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="md:col-span-1">
              <ContactForm />
            </div>
            <div className="md:col-span-1">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-text-dark mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-accent hover:text-primary">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Linkedin className="w-6 h-6 text-primary" />
                    <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary">
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Calendar className="w-6 h-6 text-primary" />
                    <a href={PERSONAL_INFO.calendly} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary">
                      Book a Call
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Github className="w-6 h-6 text-primary" />
                    <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
