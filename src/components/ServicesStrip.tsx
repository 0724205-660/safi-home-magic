
import { useEffect, useRef, useState } from 'react';
import { Sofa, Sparkles, Building, Car } from 'lucide-react';

const services = [
  {
    icon: Sofa,
    title: 'Sofa Deep Clean',
    description: 'Professional restoration service! We restore your furniture to like-new condition.',
    duration: '2-3 hours',
    price: 'from KES 2,500',
    color: 'emerald'
  },
  {
    icon: Sparkles,
    title: 'Window Shine',
    description: 'Crystal clear views. No streaks, just brilliance.',
    duration: '1-2 hours',
    price: 'from KES 1,200',
    color: 'cyan'
  },
  {
    icon: Building,
    title: 'Carpet Shampoo',
    description: 'Deep extraction cleaning that brings carpets back to life.',
    duration: '3-4 hours',
    price: 'from KES 3,000',
    color: 'blue'
  },
  {
    icon: Car,
    title: 'Office Freshening',
    description: 'Professional workspace cleaning. Productivity follows cleanliness.',
    duration: '4-6 hours',
    price: 'from KES 5,000',
    color: 'purple'
  }
];

export const ServicesStrip = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            Our <span className="text-emerald-600">Professional</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert cleaning solutions that transform your space
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const colorClasses = {
              emerald: 'from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700',
              cyan: 'from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700',
              blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
              purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'
            }[service.color];

            return (
              <div
                key={service.title}
                className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms` 
                }}
              >
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Service details */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Pricing info */}
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">{service.duration}</span>
                  <span className="font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>

                {/* Hover sparkle effect */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-4">
            Need something custom? <span className="font-semibold">We're here</span> for you.
          </p>
          <button className="text-emerald-600 hover:text-emerald-700 font-bold text-lg hover:underline transition-colors">
            Get Custom Quote →
          </button>
        </div>
      </div>
    </section>
  );
};
