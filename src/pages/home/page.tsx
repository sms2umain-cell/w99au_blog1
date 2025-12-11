import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { Promotions } from './components/Promotions';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { updateSEO } from '../../utils/seo';

export default function HomePage() {
  useEffect(() => {
    updateSEO({
      title: 'W99AU Online Casino Australia | Pokies, Live Casino & Sports Betting 2025',
      description: 'W99AU Australia\'s premier online casino platform offering 2000+ pokies, live casino games, sports betting and slots. Join 500K+ players with AUD 22.99 welcome bonus, fast withdrawals and 24/7 support.',
      keywords: 'W99AU, online casino Australia, online pokies, live casino, sports betting, slots games, Australian casino, high RTP pokies, casino bonuses, fast withdrawals',
      canonical: 'https://w99aud.com/',
      ogType: 'website'
    });
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Services />
        <Promotions />
        <WhyChooseUs />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}