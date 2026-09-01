import React from 'react';
import { TranslationContent, Language } from '../types';
import { CLINIC_INFO } from '../data/translations';
import { Star, Shield, Award, CheckCircle2, MessageSquare, Phone, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  content: TranslationContent;
  currentLang: Language;
}

export const Hero: React.FC<HeroProps> = ({ content, currentLang }) => {
  const isRtl = currentLang === 'ar';

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 sm:pt-36 lg:pt-44 pb-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#0F2438] via-[#142E47] to-[#0A1A28] text-white"
    >
      {/* Subtle Luxury Background Accents (Conservative & Non-flashy) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#1E4E79]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy (Left Column in LTR, Right in RTL) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left rtl:lg:text-right">
            
            {/* Top Credibility Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#183654]/80 border border-[#C5A880]/40 text-[#E4D1B9] text-xs sm:text-sm font-medium tracking-wide">
              <Sparkles className="w-4 h-4 text-[#C5A880]" />
              <span>{content.hero.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-bold tracking-tight text-white leading-[1.18] ${currentLang === 'ar' ? 'font-arabic-heading' : 'font-heading'}`}>
              {content.hero.title}
            </h1>

            {/* Body Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {content.hero.subtitle}
            </p>

            {/* Trust & Google Rating Highlight Pill */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-4 p-3.5 rounded-xl bg-[#091724]/90 border border-[#1E3850]">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white text-sm">4.9 / 5</span>
              </div>
              <div className="h-4 w-px bg-slate-700 hidden sm:block" />
              <a
                href={CLINIC_INFO.googleMapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-[#C5A880] hover:text-[#E4D1B9] font-medium transition-colors underline-offset-4 hover:underline"
              >
                {content.hero.badgeText}
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                type="button"
                id="hero-whatsapp-cta"
                onClick={scrollToBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#C5A880] hover:bg-[#D4B78F] text-[#0A1A28] text-sm sm:text-base font-bold tracking-wide transition-all shadow-lg hover:shadow-xl active:scale-98 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-[#0A1A28]" />
                <span>{content.hero.ctaPrimary}</span>
              </button>

              <button
                type="button"
                onClick={scrollToServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#162E45]/80 hover:bg-[#1A3854] text-slate-200 hover:text-white text-sm sm:text-base font-semibold border border-[#244565] transition-all cursor-pointer"
              >
                <span>{content.hero.ctaSecondary}</span>
              </button>
            </div>

            {/* Rapid Trust Badges Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 text-xs sm:text-sm text-slate-300 text-left rtl:text-right">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>
                  {currentLang === 'ar' ? 'عيادة مجهزة بمركز أمازيghi EMS' : currentLang === 'en' ? 'Specialist clinic at Centre Amazighi EMS' : 'Cabinet moderne au Centre Amazighi EMS'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>
                  {currentLang === 'ar' ? 'جراحة دقيقة ونتائج طبيعية متناسقة' : currentLang === 'en' ? 'Natural, harmonious anatomical outcomes' : 'Harmonie anatomique & résultats naturels'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>
                  {currentLang === 'ar' ? 'عمليات في مصحات معتمدة دولياً' : currentLang === 'en' ? 'Surgeries in certified hospital theaters' : 'Cliniques partenaires agréées de pointe'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>
                  {currentLang === 'ar' ? 'استشارة وسرية مهنية تامة' : currentLang === 'en' ? 'Strict medical confidentiality guaranteed' : 'Secret médical & discrétion absolue'}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Doctor & Clinic Institutional Trust Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C5A880]/30 to-[#1E4E79]/40 rounded-2xl blur-sm" />
              
              <div className="relative rounded-2xl bg-[#091724] border border-[#1E3850] p-6 sm:p-8 shadow-2xl space-y-6">
                
                {/* Doctor Identity Header */}
                <div className="flex items-start gap-4 pb-6 border-b border-[#1A3147]">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#1E3E5C] to-[#0A1A28] border-2 border-[#C5A880] flex items-center justify-center text-[#C5A880] font-heading text-2xl font-bold shrink-0 shadow-lg">
                    MD
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white font-heading">
                      {currentLang === 'ar' ? CLINIC_INFO.doctorNameAr : CLINIC_INFO.doctorName}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#C5A880] font-medium mt-0.5">
                      {currentLang === 'ar' ? CLINIC_INFO.professionAr : currentLang === 'en' ? CLINIC_INFO.professionEn : CLINIC_INFO.profession}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                      <span>{CLINIC_INFO.city}</span>
                    </div>
                  </div>
                </div>

                {/* Core Statistical Pillars */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-[#0F2438] border border-[#1E3850]">
                    <div className="text-2xl sm:text-3xl font-bold text-[#C5A880] font-heading">
                      4.9 ⭐
                    </div>
                    <div className="text-xs text-slate-300 font-medium mt-1">
                      {content.hero.statsReviews}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#0F2438] border border-[#1E3850]">
                    <div className="text-lg sm:text-xl font-bold text-white font-heading">
                      {content.hero.statsExperience}
                    </div>
                    <div className="text-xs text-slate-300 font-medium mt-1">
                      {content.hero.statsExperienceLabel}
                    </div>
                  </div>
                </div>

                {/* Clinic Location Brief & Map Link */}
                <div className="p-4 rounded-xl bg-[#0F2438]/70 border border-[#1E3850] space-y-2 text-xs text-slate-300">
                  <div className="font-semibold text-white flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#C5A880]" />
                    <span>CENTRE AMAZIGHI EMS • Bureau 4</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    {CLINIC_INFO.address}
                  </p>
                </div>

                {/* Direct Telephone Action */}
                <div className="flex flex-col gap-2.5 pt-1">
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#162E45] hover:bg-[#1C3B5A] text-slate-100 font-semibold text-sm border border-[#244565] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#C5A880]" />
                    <span dir="ltr">{CLINIC_INFO.phoneFormatted}</span>
                  </a>

                  <a
                    href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
                      currentLang === 'ar' ? 'مرحباً دكتورة مريم الدليمي، أود حجز موعد استشارة.' : currentLang === 'en' ? 'Hello Dr. Meriem DLIMI, I would like to schedule a consultation.' : 'Bonjour Dr Meriem DLIMI, je souhaite planifier une consultation.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm shadow-md transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Direct: +212 666-123085</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
