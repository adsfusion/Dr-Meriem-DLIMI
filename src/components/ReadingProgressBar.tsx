import React, { useState, useEffect } from 'react';
import { Language } from '../types';

interface ReadingProgressBarProps {
  currentLang?: Language;
}

export const ReadingProgressBar: React.FC<ReadingProgressBarProps> = ({ currentLang = 'fr' }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const isRtl = currentLang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        const currentScroll = window.scrollY;
        const progress = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <div
        className={`h-full bg-gradient-to-r ${
          isRtl
            ? 'from-[#E5D2BA] via-[#C5A880] to-[#9E7D52] origin-right ml-auto'
            : 'from-[#9E7D52] via-[#C5A880] to-[#E5D2BA] origin-left'
        } transition-[width] duration-150 ease-out shadow-[0_0_8px_rgba(197,168,128,0.7)]`}
        style={{
          width: `${scrollProgress}%`,
        }}
      />
    </div>
  );
};
