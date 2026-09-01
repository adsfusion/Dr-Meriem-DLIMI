import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Language } from '../types';

interface BackToTopProps {
  currentLang: Language;
}

export const BackToTop: React.FC<BackToTopProps> = ({ currentLang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isRtl = currentLang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past roughly the hero section (450px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-24 ${
        isRtl ? 'left-6' : 'right-6'
      } z-40 flex items-center group animate-in fade-in zoom-in-90 duration-200`}
    >
      {/* Tooltip Label on Hover */}
      <span
        className={`hidden md:block bg-[#091724] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg border border-[#1E3850] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none mx-2 whitespace-nowrap`}
      >
        {currentLang === 'ar' ? 'العودة إلى الأعلى' : currentLang === 'en' ? 'Back to top' : 'Haut de page'}
      </span>

      {/* Floating Button */}
      <button
        type="button"
        id="back-to-top-btn"
        onClick={scrollToTop}
        className="w-11 h-11 rounded-full bg-[#0F2438] hover:bg-[#163652] text-[#C5A880] hover:text-white flex items-center justify-center shadow-xl border border-[#1E3850] hover:border-[#C5A880] transition-all hover:scale-105 active:scale-95 cursor-pointer"
        aria-label={currentLang === 'ar' ? 'العودة إلى الأعلى' : currentLang === 'en' ? 'Back to top' : 'Haut de page'}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};
