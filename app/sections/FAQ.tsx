'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, HelpCircle } from 'lucide-react';
import Image from 'next/image';

const faqs = [
  {
    question: 'What are the requirements to apply?',
    answer: 'We work with customers across the credit spectrum. While higher scores may qualify for better rates, we consider many factors beyond just your credit score. Our minimum requirement is typically a score of 580 or higher.',
  },
  {
    question: 'How long does approval take?',
    answer: 'Our online application takes just 5-10 minutes to complete. You\'ll receive a decision within minutes in most cases. Once approved, funds are typically deposited to your account within 1-3 business days.',
  },
  {
    question: 'Will checking my rate affect my credit score?',
    answer: 'No, checking your rate with us uses a soft inquiry that does not impact your credit score. We only perform a hard credit check if you decide to proceed with a loan offer.',
  },
  {
    question: 'What interest rates do you offer?',
    answer: 'Our rates range from 4% to 35% APR depending on your creditworthiness, loan amount, and term length. We offer competitive rates and transparent pricing with no hidden fees.',
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-gray-50/50">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* FAQ Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700 uppercase tracking-wide">FAQ</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-4 leading-tight">
            Common questions<br className="hidden md:block" /> answered
          </h2>
        </motion.div>

        {/* Content Grid - Image Left, Accordion Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&h=600&fit=crop"
                alt="People working on laptops"
                width={600}
                height={450}
                className="object-cover w-full h-auto grayscale"
              />
            </div>
          </motion.div>

          {/* Accordion Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4 text-sm">{faq.question}</span>
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <Plus 
                      className={`w-5 h-5 text-primary-600 transition-transform duration-200 ${openIndex === index ? 'rotate-45' : ''}`} 
                    />
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
