'use client';

import { Shield, Zap, MapPin, Star, Lock } from 'lucide-react';

const trustItems = [
  { icon: Shield, label: 'Bank-Level Security' },
  { icon: Zap, label: 'Instant Decisions' },
  { icon: MapPin, label: 'All 50 States' },
  { icon: Star, label: '4.9/5 Rating' },
  { icon: Lock, label: 'SSL Encrypted' },
];

export default function TrustBar() {
  return (
    <div className="bg-gray-50/80 border-b border-gray-100 py-3">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-6">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-600">
              <item.icon className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
