
import { Button } from '@/components/ui/button';
import { MessageCircle, Sparkles } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

export const Hero = ({ scrollY }: HeroProps) => {
  const parallaxOffset = scrollY * 0.5;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 to-cyan-50">
      {/* Animated background sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Sparkles
            key={i}
            className={`absolute text-emerald-200 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `translateY(${parallaxOffset * 0.1}px)`,
            }}
            size={12 + Math.random() * 8}
          />
        ))}
      </div>

      {/* Main hero content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div
          className="transform transition-all duration-1000"
          style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}
        >
          {/* Main headline */}
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-tight mb-6">
            Cleaning That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
              Feels Like Magic
            </span>
          </h1>

          {/* Subline with locations */}
          <div className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
            <span className="inline-block px-4 py-2 bg-white/80 rounded-full shadow-sm">
              Nairobi • Kiambu • Machakos • Kajiado
            </span>
          </div>

          {/* Professional tagline */}
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Premium cleaning services with same-day availability. Professional, reliable, and thorough.
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="group bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-8 py-6 text-xl rounded-full shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            <MessageCircle className="mr-3 h-6 w-6 group-hover:animate-bounce" />
            WhatsApp Us Now
            <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
          </Button>

          {/* Quick promise */}
          <div className="mt-8 text-sm text-gray-500">
            <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
              ✨ Same-day service available
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
