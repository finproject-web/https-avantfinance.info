'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Mail, MapPin, Mail as MailIcon } from 'lucide-react';

const contactCards = [
  {
    icon: Phone,
    title: 'Call Us',
    primary: '773 231 6091',
    secondary: 'Mon-Fri 8AM-7PM CT',
  },
  {
    icon: Mail,
    title: 'Email Us',
    primary: 'info@demofinance.info',
    secondary: 'Response within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    primary: '222 W Merchandise Mart Plaza #1212',
    secondary: 'Chicago, IL 60654',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* CONTACT Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full mb-6">
            <MailIcon className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700 uppercase tracking-wide">CONTACT</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-4">
            We&apos;re here to help
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? Our team is available to assist you with any inquiries.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <card.icon className="w-6 h-6 text-primary-600" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">{card.title}</h3>

              {/* Primary Info */}
              <p className="text-primary-600 font-semibold text-sm mb-1">{card.primary}</p>

              {/* Secondary Info */}
              <p className="text-gray-500 text-sm">{card.secondary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
