
import { Navigation } from '@/components/Navigation';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { StickyFooter } from '@/components/StickyFooter';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            About <span className="text-emerald-600">Cleancare</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Locally owned. Proudly Kenyan. Professional cleaning services you can trust.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center py-20">
            <p className="text-lg text-gray-600">About page coming soon...</p>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
      <StickyFooter />
    </div>
  );
};

export default About;
