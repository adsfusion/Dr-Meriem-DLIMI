import React, { useState, useEffect, useRef } from 'react';
import { TranslationContent, Language } from '../types';
import { CLINIC_INFO } from '../data/translations';
import { Star, CheckCircle, ExternalLink, ShieldCheck, BadgeCheck } from 'lucide-react';

interface ReviewsProps {
  content: TranslationContent;
  currentLang: Language;
  isDarkMode?: boolean;
}

export const Reviews: React.FC<ReviewsProps> = ({ content, currentLang, isDarkMode }) => {
  const isRtl = currentLang === 'ar';
  const sectionRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Once animated into view, keep stars filled
          observer.disconnect();
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className={`py-20 lg:py-28 transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0A1826] text-slate-100' : 'bg-[#FAF9F6] text-[#1E293B]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${
              isDarkMode 
                ? 'bg-[#183654] border-[#C5A880]/40 text-[#E4D1B9]' 
                : 'bg-[#FAF0E4] border-[#E9DAC6] text-[#8C6D45]'
            }`}>
              <span>{content.reviewsSection.badge}</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-[#0F2438]'
            } ${currentLang === 'ar' ? 'font-arabic-heading' : 'font-heading'}`}>
              {content.reviewsSection.title}
            </h2>
            <p className={`text-sm sm:text-base ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {content.reviewsSection.subtitle}
            </p>
          </div>

          {/* Google Rating Overview Badge with Animated Stars */}
          <div className={`p-5 rounded-2xl border shadow-sm flex items-center gap-4 shrink-0 transition-colors ${
            isDarkMode 
              ? 'bg-[#0E2030] border-[#1C3A54]' 
              : 'bg-white border-slate-200'
          }`}>
            <div className="w-14 h-14 rounded-xl bg-[#0F2438] text-[#C5A880] flex flex-col items-center justify-center font-heading font-bold shadow-md">
              <span className="text-xl leading-none">4.9</span>
              <span className="text-[10px] text-slate-300 font-sans mt-0.5">/ 5.0</span>
            </div>
            <div>
              {/* Header Star Rating with Staggered Fill-in Animation */}
              <div className="flex text-amber-400 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="relative"
                  >
                    {/* Background Star Outline */}
                    <Star className="w-4 h-4 text-amber-200 dark:text-amber-900/40" />
                    
                    {/* Animated Filled Gold Star Layer */}
                    <div
                      className={`absolute inset-0 overflow-hidden transition-all duration-700 ease-out transform ${
                        isInView
                          ? 'scale-100 opacity-100'
                          : 'scale-0 opacity-0'
                      }`}
                      style={{
                        transitionDelay: `${i * 120}ms`,
                      }}
                    >
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400 filter drop-shadow-[0_0_3px_rgba(251,191,36,0.5)]" />
                    </div>
                  </div>
                ))}
              </div>
              <p className={`text-xs font-bold mt-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {content.reviewsSection.googleRatingText}
              </p>
              <a
                href={CLINIC_INFO.googleMapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#C5A880] hover:text-[#E4D1B9] font-semibold flex items-center gap-1 mt-0.5"
              >
                <span>{content.reviewsSection.basedOn}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {content.reviewsSection.items.map((rev, cardIdx) => (
            <div
              key={rev.id}
              className={`p-6 sm:p-7 rounded-2xl border shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group ${
                isDarkMode 
                  ? 'bg-[#0E2030] border-[#1C3A54] hover:border-[#C5A880]/60' 
                  : 'bg-white border-slate-200/90 hover:border-[#C5A880]/60'
              }`}
            >
              <div className="space-y-4">
                
                {/* Rating Bar with Scroll-Triggered Fill-in Effect */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <div key={i} className="relative">
                        {/* Static Base Star */}
                        <Star className="w-4 h-4 text-amber-200/60 dark:text-amber-950/60" />
                        
                        {/* Animated Glowing Filled Star */}
                        <div
                          className={`absolute inset-0 transition-all duration-600 ease-out transform ${
                            isInView
                              ? 'scale-100 opacity-100 rotate-0'
                              : 'scale-50 opacity-0 -rotate-45'
                          }`}
                          style={{
                            transitionDelay: `${(cardIdx * 100) + (i * 100) + 150}ms`,
                          }}
                        >
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_1px_2px_rgba(251,191,36,0.4)]" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Verified Checkmark Tag */}
                  <span className={`inline-flex items-center gap-1 text-[11px] px-2.5 py-0.5 rounded-full font-semibold border ${
                    isDarkMode
                      ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/80'
                      : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  }`}>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>5.0 Google</span>
                  </span>
                </div>

                {/* Patient Testimonial Quote */}
                <p className={`text-xs sm:text-sm leading-relaxed italic ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  « {rev.comment} »
                </p>

              </div>

              {/* Patient Author Details & 'Verified Patient' Badge */}
              <div className={`mt-6 pt-4 border-t flex items-center justify-between ${
                isDarkMode ? 'border-[#1C3A54]' : 'border-slate-100'
              }`}>
                <div className="space-y-1">
                  
                  {/* Name + Verified Patient Badge */}
                  <div className="flex items-center flex-wrap gap-1.5">
                    <h4 className={`text-xs font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      {rev.author}
                    </h4>

                    {/* Prominent Verified Patient Badge */}
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md border shadow-2xs ${
                        isDarkMode
                          ? 'bg-[#15324D] text-[#C5A880] border-[#244A6F]'
                          : 'bg-[#F9F5EE] text-[#8C6D45] border-[#E8DAC8]'
                      }`}
                      title={currentLang === 'ar' ? 'مريض تم التحقق من هويته واستشارته' : currentLang === 'en' ? 'Verified clinical patient' : 'Patient certifié de la clinique'}
                    >
                      <BadgeCheck className="w-3 h-3 text-[#C5A880]" />
                      <span>
                        {currentLang === 'ar' ? 'مريض معتمد' : currentLang === 'en' ? 'Verified Patient' : 'Patient Vérifié'}
                      </span>
                    </span>
                  </div>

                  <span className="text-[11px] text-[#C5A880] font-medium block">
                    {rev.service}
                  </span>
                </div>

                <span className="text-[11px] text-slate-400 whitespace-nowrap">
                  {rev.date}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Google Maps External Verification CTA */}
        <div className="mt-12 text-center">
          <a
            href={CLINIC_INFO.googleMapsPlaceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold border shadow-xs hover:shadow-md transition-all cursor-pointer ${
              isDarkMode 
                ? 'bg-[#0E2030] hover:bg-[#152E45] text-slate-200 border-[#1C3A54]' 
                : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
            }`}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google"
              className="w-4 h-4"
              referrerPolicy="no-referrer"
            />
            <span>{content.reviewsSection.viewGoogleReviews}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C5A880]" />
          </a>
        </div>

      </div>
    </section>
  );
};
