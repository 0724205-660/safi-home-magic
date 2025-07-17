
import { useEffect, useState } from 'react';
import { Hero } from '@/components/Hero';
import { ServicesStrip } from '@/components/ServicesStrip';
import { DifferenceSection } from '@/components/DifferenceSection';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { StickyFooter } from '@/components/StickyFooter';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Hero scrollY={scrollY} />
      <ServicesStrip />
      <DifferenceSection />
      <TestimonialCarousel />
      <WhatsAppFloat />
      <StickyFooter />
    </div>
  );
};

export default Index;
