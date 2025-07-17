
import { useEffect, useRef, useState } from 'react';
import { Clock, DollarSign, Camera, Zap } from 'lucide-react';

const differences = [
  {
    icon: Zap,
    title: 'Fast & Flexible',
    description: 'Same-day booking? No problem. Weekend cleaning? Sorted. We adapt to your schedule, not the other way around.',
    highlight: 'Available 7 days a week'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees, no surprises. What we quote is what you pay. Hakuna stress.',
    highlight: 'Fixed pricing, always'
  },
  {
    icon: Camera,
    title: 'Real Results',
    description: 'Before and after photos speak louder than promises. See the transformation yourself.',
    highlight: 'Photographic proof included'
  }
];

export const DifferenceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            What Makes Us <span className="text-emerald-600">Different</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not your average cleaning service. We're the ones who make cleaning feel effortless.
          </p>
        </div>

        {/* Floating cards */}
        <div className="grid lg:grid-cols-3 gap-12">
          {differences.map((item, index) => (
            <div
              key={item.title}
              className={`group relative transform transition-all duration-700 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms` 
              }}
            >
              {/* Floating card */}
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <item.icon className="h-10 w-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Highlight badge */}
                <div className="inline-block bg-emerald-100 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-full">
                  ✓ {item.highlight}
                </div>

                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 w-8 h-8 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-20">
          <div className="inline-block bg-gray-900 text-white px-8 py-4 rounded-2xl">
            <p className="text-lg">
              <span className="font-bold">Tunajua</span> you have options. 
              <span className="text-emerald-400 font-semibold"> Choose quality.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
