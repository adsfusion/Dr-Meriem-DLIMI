import React from 'react';
import { TranslationContent, Language } from '../types';
import { CLINIC_INFO } from '../data/translations';
import { Award, ShieldCheck, HeartHandshake, Lock, Star, CheckCircle } from 'lucide-react';

interface TrustBarProps {
  content: TranslationContent;
  currentLang: Language;
}

export const TrustBar: React.FC<TrustBarProps> = ({ content, currentLang }) => {
  const isRtl = currentLang === 'ar';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-5 h-5 text-[#C5A880]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#C5A880]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#C5A880]" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-[#C5A880]" />;
      default:
        return <CheckCircle className="w-5 h-5 text-[#C5A880]" />;
    }
  };

  return (
    <section className="bg-white border-y border-slate-200/80 py-10 sm:py-12 relative z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Google Rating Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div className="flex items-center gap-4 text-center md:text-left rtl:md:text-right">
            <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] border border-[#E9DAC6] flex items-center justify-center text-[#B89358] font-bold text-lg font-heading shadow-inner">
              4.9
            </div>
            <div>
              <div className="flex items-center justify-center md:justify-start gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-800 ml-1.5 rtl:mr-1.5">
                  4.9 / 5.0
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-900 mt-0.5">
                {content.trustBar.ratingTitle} — {content.trustBar.ratingSubtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={CLINIC_INFO.googleMapsPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200 transition-colors"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google"
                className="w-4 h-4"
                referrerPolicy="no-referrer"
              />
              <span>{content.reviewsSection.viewGoogleReviews}</span>
            </a>
          </div>
        </div>

        {/* 4 Pillars of Institutional Trust */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-8">
          {content.trustBar.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3.5 p-4 rounded-xl bg-[#FAF9F6] border border-slate-100 hover:border-[#C5A880]/40 transition-all hover:shadow-sm"
            >
              <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-xs shrink-0">
                {getIcon(pillar.iconName)}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
