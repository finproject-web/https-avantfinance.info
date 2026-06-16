'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, User, Home, Car, Briefcase, GraduationCap, ArrowRight, LayoutGrid } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Zap,
    title: 'Payday Loans',
    description: 'Quick cash for unexpected expenses. Get funded within 24 hours with minimal paperwork.',
    amount: '$3,000 - $10,000',
    term: '120 months',
    cta: 'Apply Now',
  },
  {
    icon: User,
    title: 'Personal Loans',
    description: 'Flexible loans for debt consolidation, medical bills, or any purpose you need.',
    amount: '$5K - $25K',
    term: '20-120 months',
    cta: 'Apply Now',
    popular: true,
  },
  {
    icon: Home,
    title: 'Housing Finance',
    description: 'Home purchase, renovation, or refinancing with competitive rates and terms.',
    amount: '$10K - $50K',
    term: '12-360 months',
    cta: 'Apply Now',
  },
  {
    icon: Car,
    title: 'Auto Loans',
    description: 'Finance your new or used vehicle with flexible terms and fast approval.',
    amount: '$2K - $35K',
    term: '12-72 months',
    cta: 'Apply Now',
  },
  {
    icon: Briefcase,
    title: 'Business Loans',
    description: 'Working capital and expansion financing to grow your business.',
    amount: '$5K - $50K',
    term: '6-60 months',
    cta: 'Apply Now',
  },
  {
    icon: GraduationCap,
    title: 'Education Loans',
    description: 'Invest in your future with affordable education financing options.',
    amount: '$1K - $30K',
    term: '12-120 months',
    cta: 'Apply Now',
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* LOAN PRODUCTS Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full mb-6">
            <LayoutGrid className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-700 uppercase tracking-wide">LOAN PRODUCTS</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-4 leading-tight">
            Financing solutions tailored<br className="hidden md:block" /> to your needs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether it&apos;s an emergency or a long-term goal, we have the right loan for you.
          </p>
        </motion.div>

        {/* Service Cards - 2 rows of 3 */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group rounded-2xl p-6 border transition-all duration-300 relative ${
                service.popular 
                  ? 'bg-primary-50/50 border-primary-200 shadow-md' 
                  : 'bg-white border-gray-100 shadow-sm hover:shadow-lg'
              }`}
            >
              {/* POPULAR Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  POPULAR
                </div>
              )}

              <div className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary-600" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">{service.description}</p>

              {/* Amount and Term Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1.5 rounded-lg">
                  {service.amount}
                </span>
                <span className="inline-block bg-emerald-50 text-emerald-600 text-xs font-semibold px-3 py-1.5 rounded-lg">
                  {service.term}
                </span>
              </div>

              <Link
                href="/apply-now"
                className="flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors group/btn"
              >
                {service.cta}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
