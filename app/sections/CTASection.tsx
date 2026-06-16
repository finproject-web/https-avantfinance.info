'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Percent, Wallet, Headphones, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: Clock,
    title: 'Fast Approval',
    description: 'Decision within 24 hours',
  },
  {
    icon: Percent,
    title: 'Competitive Rates',
    description: 'Starting from 4% APR',
  },
  {
    icon: Wallet,
    title: 'No Hidden Fees',
    description: 'Transparent pricing, no penalties',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Personal loan advisor assigned',
  },
];

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=900&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/90" />
      </div>

      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white mb-6 leading-tight">
              Ready to take control of your finances?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Apply in minutes and get a decision within 24 hours. No hidden fees, no surprises — just straightforward lending.
            </p>
            <Link href="/apply-now">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-white hover:bg-gray-100 text-primary-600 font-semibold px-8 py-4 rounded-full transition-all duration-200 inline-flex items-center gap-2"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-white/70 text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
