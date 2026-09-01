import React from 'react';
import { TranslationContent, Language } from '../types';
import { CLINIC_INFO } from '../data/translations';
import { Award, ShieldCheck, CheckCircle2, MapPin, Phone, GraduationCap, Building2, Quote } from 'lucide-react';

interface AboutProps {
  content: TranslationContent;
  currentLang: Language;
}

export const About: React.FC<AboutProps> = ({ content, currentLang }) => {
  const isRtl = currentLang === 'ar';

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Portrait Card / Institutional Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              
              {/* Decorative Luxury Border Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0F2438] via-[#163652] to-[#0A1A28] text-white p-8 sm:p-10 shadow-2xl border border-[#1E3850]">
                
                {/* Doctor Crest / Monogram */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1E4263] to-[#0B1A28] border-2 border-[#C5A880] flex items-center justify-center text-[#C5A880] font-heading text-3xl font-bold mb-6 shadow-md">
                  MD
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-[#C5A880] uppercase tracking-widest">
                    {currentLang === 'ar' ? 'أخصائية جراحة التجميل' : currentLang === 'en' ? 'Plastic Surgeon Specialist' : 'Chirurgien Spécialiste'}
                  </span>
                  <h3 className={`text-2xl sm:text-3xl font-bold font-heading text-white ${currentLang === 'ar' ? 'font-arabic-heading' : ''}`}>
                    {currentLang === 'ar' ? CLINIC_INFO.doctorNameAr : CLINIC_INFO.doctorName}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {content.aboutSection.doctorTitle}
                  </p>
                </div>

                <div className="my-6 border-t border-slate-700/80" />

                {/* Key Credentials Badges */}
                <div className="space-y-3 text-xs text-slate-200">
                  <div className="flex items-center gap-2.5">
                    <GraduationCap className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span>
                      {currentLang === 'ar' ? 'تأهيل وتخصص في جراحة التجميل والتقويم' : currentLang === 'en' ? 'Board-Certified in Plastic & Reconstructive Surgery' : 'Spécialiste en Chirurgie Plastique & Reconstructrice'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Building2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span>CENTRE AMAZIGHI EMS • Bureau 4, Marrakech</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span>
                      {currentLang === 'ar' ? 'معايير أمان وتعقيم مطابقة للأعراف الدولية' : currentLang === 'en' ? 'International Hospital Safety & Asepsis Protocols' : 'Conformité aux normes chirurgicales internationales'}
                    </span>
                  </div>
                </div>

                {/* Rating Highlight Pill */}
                <div className="mt-6 pt-4 border-t border-slate-700/80 flex items-center justify-between">
                  <div className="text-xs text-slate-300">
                    <span className="font-bold text-[#C5A880] text-sm">4.9 / 5 ⭐</span> (68 avis Google)
                  </div>
                  <span className="text-[11px] text-[#C5A880] font-medium">Marrakech 46000</span>
                </div>

              </div>

              {/* Subtle Floating Quote Callout */}
              <div className="mt-4 p-4 rounded-xl bg-[#FAF9F6] border border-slate-200 shadow-xs flex items-start gap-3">
                <Quote className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <p className="text-xs italic text-slate-700 leading-relaxed font-editorial">
                  {content.aboutSection.philosophyText}
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Detailed Biography & Practice Standard */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF0E4] border border-[#E9DAC6] text-[#8C6D45] text-xs font-bold uppercase tracking-wider">
              <span>{content.aboutSection.badge}</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl font-bold text-[#0F2438] tracking-tight ${currentLang === 'ar' ? 'font-arabic-heading' : 'font-heading'}`}>
              {content.aboutSection.title}
            </h2>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>{content.aboutSection.paragraph1}</p>
              <p>{content.aboutSection.paragraph2}</p>
              <p>{content.aboutSection.paragraph3}</p>
            </div>

            {/* Checklist of Doctor Qualifications */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h4 className="text-sm font-bold text-[#0F2438] uppercase tracking-wide">
                {currentLang === 'ar' ? 'الضمانات والمعايير الطبية' : currentLang === 'en' ? 'Clinical Standards & Assurances' : 'Garanties & Engagements Cliniques'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {content.aboutSection.qualifications.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-[#FAF9F6] p-3 rounded-lg border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact & Consultation prompt */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0F2438] hover:bg-[#163652] text-white text-xs sm:text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <span dir="ltr">{CLINIC_INFO.phoneFormatted}</span>
              </a>

              <a
                href="#location"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition-colors"
              >
                <MapPin className="w-4 h-4 text-slate-600" />
                <span>CENTRE AMAZIGHI EMS, Marrakech</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
