import React, { useState } from 'react';
import { TranslationContent, Language, ServiceItem } from '../types';
import { CLINIC_INFO } from '../data/translations';
import { Sparkles, Activity, UserCheck, Droplets, ShieldPlus, Sun, Check, ArrowRight, ArrowLeft, MessageSquare } from 'lucide-react';

interface ServicesProps {
  content: TranslationContent;
  currentLang: Language;
}

export const Services: React.FC<ServicesProps> = ({ content, currentLang }) => {
  const isRtl = currentLang === 'ar';
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#C5A880]" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#C5A880]" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-[#C5A880]" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-[#C5A880]" />;
      case 'ShieldPlus':
        return <ShieldPlus className="w-5 h-5 text-[#C5A880]" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-[#C5A880]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#C5A880]" />;
    }
  };

  const handleBookService = (serviceTitle: string) => {
    const serviceSelect = document.getElementById('patientService') as HTMLSelectElement | null;
    if (serviceSelect) {
      serviceSelect.value = serviceTitle;
    }
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

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF9F6] text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF0E4] border border-[#E9DAC6] text-[#8C6D45] text-xs font-bold uppercase tracking-wider">
            <span>{content.servicesSection.badge}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold text-[#0F2438] tracking-tight ${currentLang === 'ar' ? 'font-arabic-heading' : 'font-heading'}`}>
            {content.servicesSection.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {content.servicesSection.subtitle}
          </p>
        </div>

        {/* Services Grid (6 Core Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {content.servicesSection.items.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-[#C5A880]/60"
            >
              <div className="p-6 sm:p-7 space-y-5">
                
                {/* Category & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF6F0] border border-[#EBE1D3] flex items-center justify-center group-hover:bg-[#0F2438] group-hover:text-white transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-[#8C6D45] bg-[#FDF8F2] px-3 py-1 rounded-full border border-[#F0E6D8]">
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className={`text-xl font-bold text-[#0F2438] group-hover:text-[#183B5C] transition-colors ${currentLang === 'ar' ? 'font-arabic-heading' : 'font-heading'}`}>
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Procedure bullet points */}
                <div className="pt-2 border-t border-slate-100 space-y-2">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Card Footer with Direct Booking Action */}
              <div className="px-6 sm:px-7 py-4 bg-[#FAF9F6] border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">
                  {service.duration || 'Sur consultation'}
                </span>
                
                <button
                  type="button"
                  onClick={() => handleBookService(service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2438] hover:text-[#C5A880] transition-colors cursor-pointer group-hover:translate-x-1 rtl:group-hover:-translate-x-1 duration-200"
                >
                  <span>{currentLang === 'ar' ? 'استشارة' : currentLang === 'en' ? 'Consult' : 'Consulter'}</span>
                  {isRtl ? (
                    <ArrowLeft className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Reassurance Banner at the Bottom of Services */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#0F2438] to-[#163652] text-white p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#244565]">
          <div className="space-y-2 text-center md:text-left rtl:md:text-right max-w-2xl">
            <h3 className={`text-xl sm:text-2xl font-bold font-heading text-white ${currentLang === 'ar' ? 'font-arabic-heading' : ''}`}>
              {content.servicesSection.ctaCardTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {content.servicesSection.ctaCardText}
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              const element = document.getElementById('booking');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#C5A880] hover:bg-[#D4B78F] text-[#0A1A28] text-sm font-bold shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{content.servicesSection.ctaCardBtn}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
