
import { useIsMobile } from '@/hooks/use-mobile';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const StickyFooter = () => {
  const isMobile = useIsMobile();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I need same-day cleaning service.");
    window.open(`https://wa.me/254700000000?text=${message}`, '_blank');
  };

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white p-4 shadow-2xl">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="font-bold text-sm">
            Need a same-day clean?
          </p>
          <p className="text-xs opacity-90">
            Toka kwa stress. Hit us up →
          </p>
        </div>
        
        <button
          onClick={handleWhatsAppClick}
          className="bg-white text-emerald-600 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
