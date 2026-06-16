'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-0 md:pt-28 overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="order-2 lg:order-1"
          >
            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] mb-6"
            >
              <span className="text-gray-900">Smart loans for a</span>
              <br />
              <span className="text-primary-600">brighter future</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed"
            >
              Personal loans from <span className="font-semibold text-gray-900">$500 to $50,000</span> with rates as low as{' '}
              <span className="font-semibold text-gray-900">4% APR</span>. Fast approval, no hidden fees, funds in 1-3 days.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link href="/apply-now">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-primary-500/30 flex items-center gap-2"
                >
                  Check My Rate
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-full border-2 border-gray-200 hover:border-primary-300 transition-all duration-200"
              >
                How It Works
              </motion.button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-10"
            >
              <div>
                <p className="text-3xl font-bold text-gray-900">4%</p>
                <p className="text-sm text-gray-500">APR as low as</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">24hrs</p>
                <p className="text-sm text-gray-500">Fast approval</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">$0</p>
                <p className="text-sm text-gray-500">Hidden fees</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-[24px] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                  alt="Professional team celebrating loan approval"
                  width={600}
                  height={450}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>

              {/* Floating Card 1 - Loan Approved */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -top-2 -right-2 md:top-6 md:-right-6 bg-white rounded-[16px] p-4 shadow-xl animate-float z-10 min-w-[140px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Loan Approved</p>
                    <p className="text-lg font-bold text-gray-900">$15,000</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 - Credit Score */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-2 -left-2 md:bottom-12 md:-left-6 bg-white rounded-[16px] p-4 shadow-xl animate-float-delayed z-10 min-w-[140px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Credit Score</p>
                    <p className="text-lg font-bold text-gray-900">No Impact</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
