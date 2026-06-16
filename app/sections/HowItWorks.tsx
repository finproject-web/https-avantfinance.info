'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Search, Wallet, ArrowRight, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Apply Online',
    description: 'Complete our simple application in under 5 minutes. No paperwork, no hassle.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Get Reviewed',
    description: 'Our team reviews your application and contacts you with a decision within 24 hours.',
  },
  {
    icon: Wallet,
    step: '03',
    title: 'Receive Funds',
    description: 'Once approved, funds are deposited directly into your bank account in 1-3 days.',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-gray-50/50">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* HOW IT WORKS Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700 uppercase tracking-wide">HOW IT WORKS</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get funded in 3 simple steps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined process gets you from application to funded in as little as 24 hours.
          </p>
        </motion.div>

        {/* Steps Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden">
                {/* Large Step Number Watermark */}
                <div className="absolute -top-2 right-4 text-[80px] font-bold text-gray-100/80 leading-none select-none">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mb-4 relative z-10">
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 relative z-10">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{step.description}</p>
              </div>

              {/* Arrow - Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                  <ArrowRight className="w-5 h-5 text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
