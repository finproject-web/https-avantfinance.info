'use client';

import Link from 'next/link';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

const loanLinks = [
  { name: 'Personal Loans', href: '#services' },
  { name: 'Payday Loans', href: '#services' },
  { name: 'Housing Finance', href: '#services' },
  { name: 'Auto Loans', href: '#services' },
  { name: 'Business Loans', href: '#services' },
];

const companyLinks = [
  { name: 'About Us', href: '#' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Testimonials', href: '#reviews' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { 
    name: 'Facebook', 
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  { 
    name: 'Twitter', 
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  { 
    name: 'Instagram', 
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  { 
    name: 'LinkedIn', 
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div 
        className="mx-auto"
        style={{ 
          maxWidth: '1200px', 
          paddingLeft: '40px', 
          paddingRight: '40px', 
          paddingTop: '80px', 
          paddingBottom: '60px' 
        }}
      >
        {/* Grid Layout */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{ columnGap: '100px', rowGap: '40px' }}
        >
          {/* Column 1: Logo, Description, Social Icons */}
          <div>
            {/* Logo */}
            <div style={{ marginBottom: '30px' }}>
              <div className="inline-flex items-center gap-1 bg-white px-3 py-2 rounded">
                <span className="text-primary-600 font-bold text-xl tracking-wider">AVANT</span>
                <span className="text-slate-900 font-bold text-xl">FINANCE</span>
              </div>
            </div>
            
            {/* Description */}
            <p 
              className="text-gray-400 text-sm leading-relaxed"
              style={{ marginBottom: '30px' }}
            >
              Comprehensive loan solutions from $500 to $50,000. Serving all 50 states with competitive rates and fast approvals.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3" style={{ marginTop: '30px' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Loans Links */}
          <div>
            <h4 
              className="text-white text-sm"
              style={{ 
                fontWeight: 700, 
                marginBottom: '25px', 
                letterSpacing: '0.05em' 
              }}
            >
              LOANS
            </h4>
            <ul>
              {loanLinks.map((link) => (
                <li key={link.name} style={{ marginBottom: '18px' }}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div>
            <h4 
              className="text-white text-sm"
              style={{ 
                fontWeight: 700, 
                marginBottom: '25px', 
                letterSpacing: '0.05em' 
              }}
            >
              COMPANY
            </h4>
            <ul>
              {companyLinks.map((link) => (
                <li key={link.name} style={{ marginBottom: '18px' }}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 
              className="text-white text-sm"
              style={{ 
                fontWeight: 700, 
                marginBottom: '25px', 
                letterSpacing: '0.05em' 
              }}
            >
              CONTACT
            </h4>
            <ul>
              <li className="flex items-start gap-3" style={{ marginBottom: '18px' }}>
                <Phone className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+1 (213) 354-5397</span>
              </li>
              <li className="flex items-start gap-3" style={{ marginBottom: '18px' }}>
                <Mail className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@demofinance.info</span>
              </li>
              <li className="flex items-start gap-3" style={{ marginBottom: '18px' }}>
                <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  222 W Merchandise Mart Plaza<br />
                  Suite 900<br />
                  Chicago, IL 60654
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="border-t border-slate-800"
          style={{ marginTop: '60px', marginBottom: '40px' }}
        />

        {/* Disclaimer Section */}
        <div style={{ paddingTop: '30px', paddingBottom: '30px' }}>
          <p className="text-gray-500 text-xs leading-relaxed">
            Avant Finance LLC is a lending company. All loans are subject to credit approval. Loan amounts, terms, and interest rates vary based on creditworthiness and state regulations. APR ranges from 4% to 35%. Not all applicants will qualify for the lowest rate. This is not a commitment to lend. Equal Housing Lender. NMLS #XXXXXX.
          </p>
        </div>

        {/* Divider */}
        <div 
          className="border-t border-slate-800"
          style={{ marginTop: '0', marginBottom: '0' }}
        />

        {/* Copyright Section */}
        <div 
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ paddingTop: '30px' }}
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Avant Finance LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
              SMS Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary-500 hover:bg-primary-600 rounded-lg flex items-center justify-center shadow-lg transition-all duration-200 z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </button>
    </footer>
  );
}
