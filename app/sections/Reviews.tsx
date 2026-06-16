'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote, Heart } from 'lucide-react';

const reviews = [
  {
    name: 'Michael J.',
    loanType: 'Personal Loan',
    amount: '$15,000',
    initials: 'MJ',
    rating: 5,
    text: '"The process was incredibly smooth. I got approved within hours and the funds were in my account the next day. Highly recommend!"',
  },
  {
    name: 'Sarah R.',
    loanType: 'Home Improvement',
    amount: '$25,000',
    initials: 'SR',
    rating: 5,
    text: '"Best rates I found anywhere. The team was helpful and transparent throughout the entire process. No hidden surprises."',
  },
  {
    name: 'David W.',
    loanType: 'Emergency Loan',
    amount: '$2,500',
    initials: 'DW',
    rating: 5,
    text: '"When I needed emergency funds, Avant Finance came through. Quick, easy, and professional. I felt supported every step of the way."',
  },
];

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="reviews" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* CLIENT STORIES Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-primary-600 fill-primary-600" />
            <span className="text-sm font-semibold text-primary-700 uppercase tracking-wide">CLIENT STORIES</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 mb-4 leading-tight">
            Trusted by thousands across<br className="hidden md:block" /> America
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who achieved their financial goals with Demo Finance.
          </p>
        </motion.div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 relative"
            >
              {/* Quote Icon Top Right */}
              <div className="absolute top-4 right-4 text-primary-100">
                <Quote className="w-8 h-8 fill-primary-50" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">{review.text}</p>

              {/* User Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{review.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.loanType} — {review.amount}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
