import Navbar from '@/components/Navbar';
import TrustBar from '@/components/TrustBar';
import Hero from '@/app/sections/Hero';
import Services from '@/app/sections/Services';
import HowItWorks from '@/app/sections/HowItWorks';
import CTASection from '@/app/sections/CTASection';
import Reviews from '@/app/sections/Reviews';
import Statistics from '@/app/sections/Statistics';
import FAQ from '@/app/sections/FAQ';
import Contact from '@/app/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <TrustBar />
      <Hero />
      <Services />
      <HowItWorks />
      <CTASection />
      <Reviews />
      <Statistics />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
