'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, message });
  };

  return (
    <motion.form
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-accent mb-2">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-accent mb-2">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="w-full px-4 py-2 border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-primary text-text-light font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors duration-300"
      >
        Send Message
      </button>
    </motion.form>
  );
};

export default ContactForm;
