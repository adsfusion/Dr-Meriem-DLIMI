import React from 'react';
import { TranslationContent, Language } from '../types';
import { CLINIC_INFO } from '../data/translations';
import { MapPin, Navigation, Phone, Clock, ExternalLink, ShieldCheck, Car } from 'lucide-react';

interface LocationSectionProps {
  content: TranslationContent;
  currentLang: Language;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ content, currentLang }) => {
  const isRtl = currentLang === 'ar';

  return (
    <section id="location" className="py-20 lg:py-28 bg-[#FAF9F6] text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF0E4] border border-[#E9DAC6] text-[#8C6D45] text-xs font-bold uppercase tracking-wider">
            <span>{content.locationSection.badge}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold text-[#0F2438] tracking-tight ${currentLang === 'ar' ? 'font-arabic-heading' : 'font-heading'}`}>
            {content.locationSection.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {content.locationSection.subtitle}
          </p>
        </div>

        {/* Location Grid: Info Card + Live Google Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Hours, Access Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            
            <div className="space-y-6">
              
              {/* Address Block */}
              <div className="space-y-2 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-[#8C6D45] uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-[#C5A880]" />
                  <span>{content.locationSection.addressLabel}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0F2438]">
                  CENTRE AMAZIGHI EMS • Bureau 4
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {CLINIC_INFO.address}
                </p>
              </div>

              {/* Consultation Hours Block */}
              <div className="space-y-2 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-[#8C6D45] uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-[#C5A880]" />
                  <span>{content.locationSection.hoursLabel}</span>
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <div className="flex justify-between">
                    <span className="font-medium">{content.locationSection.hoursValueWeek.split(':')[0]}</span>
                    <span className="text-slate-900 font-bold">09:00 – 18:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">{content.locationSection.hoursValueSat.split(':')[0]}</span>
                    <span className="text-slate-900 font-bold">09:00 – 13:00</span>
                  </div>
                  <div className="flex justify-between text-slate-500 text-xs">
                    <span>{content.locationSection.hoursValueSun.split(':')[0]}</span>
                    <span>{currentLang === 'ar' ? 'مغلق (طوارئ فقط)' : currentLang === 'en' ? 'Closed' : 'Fermé'}</span>
                  </div>
                </div>
              </div>

              {/* Parking & Practical Notes */}
              <div className="p-4 rounded-xl bg-[#FAF9F6] border border-slate-200/80 text-xs text-slate-600 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-slate-800">
                  <Car className="w-4 h-4 text-[#C5A880]" />
                  <span>{currentLang === 'ar' ? 'الوصول ومواقف السيارات' : currentLang === 'en' ? 'Access & Parking' : 'Stationnement & Accès'}</span>
                </div>
                <p>{content.locationSection.parkingNotice}</p>
              </div>

            </div>

            {/* Prominent Get Directions and Contact Buttons */}
            <div className="space-y-3 pt-4">
              <a
                id="get-directions-btn"
                href={CLINIC_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#0F2438] hover:bg-[#163652] text-white text-sm font-bold shadow-md transition-all active:scale-98"
              >
                <Navigation className="w-4 h-4 text-[#C5A880]" />
                <span>{content.locationSection.directionsBtn}</span>
              </a>

              <a
                href={CLINIC_INFO.googleMapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                <span>{content.locationSection.openMapsBtn}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Live Embedded Google Map (Keyless iframe) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white min-h-[420px] lg:min-h-[500px] flex flex-col">
            <div className="bg-[#0F2438] text-white px-5 py-3 flex items-center justify-between text-xs border-b border-[#1E3850]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A880]" />
                <span className="font-semibold">{CLINIC_INFO.doctorName} • Centre Amazighi EMS</span>
              </div>
              <span className="text-[#C5A880] font-medium">GPS: 31.6578, -8.0228</span>
            </div>

            <div className="relative flex-1 w-full h-full min-h-[380px]">
              <iframe
                title="Google Maps Live Embed Dr Meriem DLIMI"
                src={CLINIC_INFO.mapEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
