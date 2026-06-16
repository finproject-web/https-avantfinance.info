'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const stats = [
  {
    value: '50$M+',
    label: 'Loans Funded',
  },
  {
    value: '15K+',
    label: 'Happy Clients',
  },
  {
    value: '50',
    label: 'States Served',
  },
  {
    value: '4.9',
    label: 'Client Rating',
    hasStar: true,
  },
];

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center">
                {stat.value}
                {stat.hasStar && <Star className="w-8 h-8 fill-white text-white ml-1" />}
              </h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
