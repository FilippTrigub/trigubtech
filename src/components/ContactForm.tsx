'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState('Send Message');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    const serviceID = 'service_o9bi3nh'; // Replace with your EmailJS service ID
    const templateID = 'template_rl148oq'; // Replace with your EmailJS template ID
    const userID = '5J_bSKObx3x-Ysl8d'; // Replace with your EmailJS user ID (Public Key)

    if (form.current) {
      const formData = new FormData(form.current);
      const templateParams = {
        name: formData.get('user_name') as string,
        email: formData.get('user_email') as string,
        message: formData.get('message') as string,
        time: new Date().toLocaleString(),
      };

      emailjs.send(serviceID, templateID, templateParams, userID)
        .then((result) => {
          console.log(result.text);
          setStatus('Message Sent!');
          form.current?.reset();
        }, (error) => {
          console.log(error.text);
          setStatus('Failed to send');
        });
    }
  };

  return (
    <motion.form
      ref={form}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-md"
    >
      <h3 className="text-2xl font-bold text-text-dark mb-6">Send me a message</h3>
      <div className="mb-4">
        <label htmlFor="name" className="block text-accent mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="user_name"
          className="w-full px-4 py-2 border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-accent mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="user_email"
          className="w-full px-4 py-2 border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-accent mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-2 border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-primary text-text-light font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors duration-300 disabled:opacity-50"
        disabled={status !== 'Send Message'}
      >
        {status}
      </button>
    </motion.form>
  );
};

export default ContactForm;
