import React from 'react';
import { TranslationContent, Language } from '../types';
import { CLINIC_INFO } from '../data/translations';
import { MapPin, Phone, MessageSquare, Clock, ShieldCheck, Star, ArrowUp } from 'lucide-react';

interface FooterProps {
  content: TranslationContent;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ content, currentLang, onLanguageChange }) => {
  const isRtl = currentLang === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <footer className="bg-[#07131F] text-slate-300 border-t border-[#132A3E]">
      
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand & Doctor Bio Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0F2438] border border-[#C5A880]/50 flex items-center justify-center text-[#C5A880] font-heading font-bold text-lg">
                MD
              </div>
              <div>
                <h4 className="text-white font-heading font-bold text-lg">
                  {currentLang === 'ar' ? CLINIC_INFO.doctorNameAr : CLINIC_INFO.doctorName}
                </h4>
                <p className="text-xs text-[#C5A880]">
                  {currentLang === 'ar' ? 'جراحة التجميل والتقويم • مراكش' : currentLang === 'en' ? 'Plastic & Aesthetic Surgeon • Marrakesh' : 'Chirurgien Plastique & Esthétique • Marrakech'}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {content.footer.aboutSnippet}
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 p-2.5 rounded-lg bg-[#0F2438] border border-[#1E3850] text-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">4.9 / 5</span>
              <span className="text-slate-400">(68 avis Google)</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider">
              {content.footer.quickLinks}
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  {currentLang === 'ar' ? 'الرئيسية' : currentLang === 'en' ? 'Home' : 'Accueil'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  {content.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  {content.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('reviews')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  {content.nav.reviews}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  {content.nav.faq}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('location')}
                  className="hover:text-[#C5A880] transition-colors cursor-pointer"
                >
                  {content.nav.location}
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider">
              {content.footer.servicesTitle}
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              {content.servicesSection.items.slice(0, 5).map((s) => (
                <li key={s.id} className="truncate">
                  <span>• {s.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Practice Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider">
              {content.footer.contactTitle}
            </h5>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  title={currentLang === 'ar' ? 'اتصال فوري بالهاتف' : currentLang === 'en' ? 'Direct phone call to clinic' : 'Appeler directement le cabinet'}
                  className="hover:text-[#C5A880] transition-colors font-medium cursor-pointer"
                  dir="ltr"
                >
                  {CLINIC_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${CLINIC_INFO.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp: +212 666-123085
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1 text-slate-400">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>
                  {content.locationSection.hoursValueWeek}
                  <br />
                  {content.locationSection.hoursValueSat}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Trilingual Switcher Bar in Footer */}
        <div className="mt-12 pt-8 border-t border-[#132A3E] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400">
              {currentLang === 'ar' ? 'اللغة :' : currentLang === 'en' ? 'Language:' : 'Langue :'}
            </span>
            <div className="inline-flex rounded-lg bg-[#0F2438] p-1 border border-[#1E3850]">
              <button
                onClick={() => onLanguageChange('fr')}
                className={`px-2.5 py-1 text-xs rounded transition-colors ${currentLang === 'fr' ? 'bg-[#C5A880] text-[#0A1A28] font-bold' : 'text-slate-300 hover:text-white'}`}
              >
                Français
              </button>
              <button
                onClick={() => onLanguageChange('ar')}
                className={`px-2.5 py-1 text-xs rounded transition-colors ${currentLang === 'ar' ? 'bg-[#C5A880] text-[#0A1A28] font-bold' : 'text-slate-300 hover:text-white'}`}
              >
                العربية
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 text-xs rounded transition-colors ${currentLang === 'en' ? 'bg-[#C5A880] text-[#0A1A28] font-bold' : 'text-slate-300 hover:text-white'}`}
              >
                English
              </button>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] hover:text-[#E4D1B9] transition-colors cursor-pointer"
          >
            <span>{currentLang === 'ar' ? 'العودة إلى الأعلى' : currentLang === 'en' ? 'Back to top' : 'Haut de page'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Medical Disclaimer & Copyright */}
        <div className="mt-8 pt-6 border-t border-[#132A3E] text-[11px] text-slate-500 space-y-2 text-center sm:text-left rtl:sm:text-right">
          <p>{content.footer.medicalDisclaimer}</p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-2">
            <span>© {new Date().getFullYear()} {CLINIC_INFO.doctorName}. {content.footer.rightsReserved}</span>
            <span>Marrakesh 46000 • Centre Amazighi EMS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
