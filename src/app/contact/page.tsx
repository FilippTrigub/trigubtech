'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Layout from '@/components/Layout';
import BreakingLine from '@/components/BreakingLine';
import AnimatedSection from '@/components/AnimatedSection';
import { Calendar, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '@/utils/constants';

const ContactPage: React.FC = () => {
  const handleBookCall = () => {
    window.open(PERSONAL_INFO.calendly, '_blank');
  };

  const handleLinkedIn = () => {
    window.open(PERSONAL_INFO.linkedin, '_blank');
  };

  const handleEmail = () => {
    window.location.href = `mailto:${PERSONAL_INFO.email}`;
  };

  const ContactButton: React.FC<{
    icon: React.ReactNode;
    label: string;
    action: () => void;
    bgColor: string;
    delay: number;
  }> = ({ icon, label, action, bgColor, delay }) => (
    <motion.button
      onClick={action}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`w-full ${bgColor} p-4 rounded-xl border border-opacity-20 hover:border-opacity-40 transition-all duration-200 shadow-lg hover:shadow-xl`}
    >
      <div className="flex items-center justify-center space-x-3">
        {icon}
        <span className="font-semibold text-gray-800">{label}</span>
      </div>
    </motion.button>
  );

  return (
    <Layout currentPage="contact">
      <div className="min-h-screen">
        <AnimatedSection>
          <BreakingLine text="Let's get in touch!" isMobile />
        </AnimatedSection>

        <div className="py-8">
          {/* Hero Section */}
          <AnimatedSection delay={0.2} className="mx-4 mb-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/coffee3.jpg" 
                alt="Contact"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <h2 className="text-2xl font-bold font-dosis mb-4">
                    Book a call directly!<br />Or simply write me.
                  </h2>
                  <p className="text-lg opacity-90">
                    Free initial consultation available
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Options */}
          <AnimatedSection delay={0.4} className="mx-4 mb-8">
            <div className="space-y-4">
              <ContactButton
                icon={<Calendar className="text-primary" size={24} />}
                label="Schedule a Call"
                action={handleBookCall}
                bgColor="bg-gradient-to-r from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10"
                delay={0.5}
              />
              
              <ContactButton
                icon={<Linkedin className="text-blue-600" size={24} />}
                label="Connect on LinkedIn"
                action={handleLinkedIn}
                bgColor="bg-gradient-to-r from-blue-50 to-blue-25 hover:from-blue-100 hover:to-blue-50"
                delay={0.6}
              />
              
              <ContactButton
                icon={<Mail className="text-green-600" size={24} />}
                label={PERSONAL_INFO.email}
                action={handleEmail}
                bgColor="bg-gradient-to-r from-green-50 to-green-25 hover:from-green-100 hover:to-green-50"
                delay={0.7}
              />
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={0.8} className="mx-4 mb-8">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <MapPin className="text-primary" size={20} />
                <span className="font-semibold text-gray-800">{PERSONAL_INFO.address}</span>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-gray-800 mb-2">Filipp Trigub</h3>
                <p className="text-sm text-gray-600">AI & Software Solutions Consultant</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Call to Action */}
          <AnimatedSection delay={1.0} className="mx-4">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
              <h4 className="text-big-body-mobile font-bold text-center mb-4 font-dosis">
                Ready to discuss your project?
              </h4>
              <p className="text-small-body-mobile text-center leading-relaxed text-gray-700">
                I offer free initial consultations to understand your needs and explore how AI can benefit your business. 
                Let's schedule a call to discuss your ideas and create a roadmap for success.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;