import React, { useState, useEffect, useRef } from 'react';
import { Language, TranslationContent } from '../types';
import { CLINIC_INFO } from '../data/translations';
import { Phone, MapPin, Clock, MessageSquare, Menu, X, Shield, ChevronDown } from 'lucide-react';

export interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  content: TranslationContent;
}

export const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange, content }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isRtl = currentLang === 'ar';
  const moreMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close the "More" dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setMoreMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setMoreMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Visual Scroll Progress Bar at the very top */}
      <div className="w-full h-1 bg-[#0A1A28]/60 relative z-50 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#C5A880] via-[#E4D1B9] to-[#C5A880] transition-[width] duration-150 ease-out shadow-[0_0_8px_rgba(197,168,128,0.7)]"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      {/* Top Pre-Header Bar for High Trust & Direct Contact */}
      <div className="bg-[#0A1A28] text-[#E2E8F0] text-xs py-2 px-4 border-b border-[#1E3347] hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <div className="flex items-center gap-1.5 text-[#C5A880]">
              <Shield className="w-3.5 h-3.5" />
              <span className="font-medium">
                {currentLang === 'ar' ? 'عيادة معتمدة • مراكش 46000' : currentLang === 'en' ? 'Certified Medical Practice • Marrakesh 46000' : 'Cabinet Médical Certifié • Marrakech 46000'}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="truncate max-w-xs">{CLINIC_INFO.address}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{content.locationSection.hoursValueWeek.split(':')[0]} : 09:00 - 18:30</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              title={currentLang === 'ar' ? 'اتصال مباشر بالعيادة' : currentLang === 'en' ? 'Direct phone call to clinic' : 'Appeler directement le cabinet'}
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#C5A880] transition-colors group cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880] group-hover:scale-110 transition-transform" />
              <span className="font-semibold" dir="ltr">{CLINIC_INFO.phoneFormatted}</span>
            </a>
            <div className="h-3 w-px bg-slate-700" />
            <a
              href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
                currentLang === 'ar' ? 'مرحباً دكتورة مريم الدليمي، أود الاستفسار عن المواعيد والخدمات.' : currentLang === 'en' ? 'Hello Dr. Meriem DLIMI, I would like to inquire about consultations.' : 'Bonjour Dr Meriem DLIMI, je souhaite me renseigner pour une consultation.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] hover:text-[#20BD5A] font-medium transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-[#0F2438]/95 backdrop-blur-md shadow-lg border-b border-[#1E3850]' : 'bg-[#0F2438] border-b border-[#1A3147]'} relative`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-6">
            {/* Logo / Doctor Brand */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
              className="flex items-center gap-2.5 group text-left rtl:text-right cursor-pointer shrink-0"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#1A3752] to-[#0A1A28] border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shadow-inner font-heading font-semibold text-base sm:text-lg tracking-wider group-hover:border-[#C5A880] transition-colors shrink-0">
                MD
              </div>
              <div className="flex flex-col">
                <span className="text-white font-heading text-base sm:text-lg font-bold tracking-tight group-hover:text-[#F4EDE4] transition-colors whitespace-nowrap">
                  {currentLang === 'ar' ? CLINIC_INFO.doctorNameAr : CLINIC_INFO.doctorName}
                </span>
                <span className="text-[10px] sm:text-xs text-[#C5A880] font-medium tracking-wide uppercase whitespace-nowrap">
                  {currentLang === 'ar' ? 'جراحة التجميل • مراكش' : currentLang === 'en' ? 'Plastic Surgery • Marrakesh' : 'Chirurgie Plastique • Marrakech'}
                </span>
              </div>
            </a>

            {/* Desktop Clean Concise Navigation: 3 Primary Links + "More" Dropdown to Prevent Overcrowding */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 rtl:space-x-reverse text-sm font-medium text-slate-200">
              <button
                onClick={() => scrollToSection('services')}
                className="hover:text-[#C5A880] transition-colors cursor-pointer py-1.5 whitespace-nowrap"
              >
                {content.nav.services}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="hover:text-[#C5A880] transition-colors cursor-pointer py-1.5 whitespace-nowrap"
              >
                {content.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="hover:text-[#C5A880] transition-colors cursor-pointer py-1.5 whitespace-nowrap"
              >
                {content.nav.location}
              </button>

              {/* Grouped Secondary Links Dropdown */}
              <div className="relative" ref={moreMenuRef}>
                <button
                  type="button"
                  onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                  className="flex items-center gap-1 hover:text-[#C5A880] transition-colors cursor-pointer py-1.5 text-slate-300"
                  aria-expanded={moreMenuOpen}
                >
                  <span>{currentLang === 'ar' ? 'المزيد' : currentLang === 'en' ? 'More' : 'En savoir plus'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreMenuOpen ? 'rotate-180 text-[#C5A880]' : ''}`} />
                </button>

                {moreMenuOpen && (
                  <div
                    className={`absolute ${
                      isRtl ? 'right-0' : 'left-0'
                    } mt-2 w-48 rounded-xl bg-[#0A1A28] border border-[#1E3850] shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150`}
                  >
                    <button
                      onClick={() => {
                        setMoreMenuOpen(false);
                        scrollToSection('reviews');
                      }}
                      className="w-full text-left rtl:text-right px-4 py-2 text-xs font-medium text-slate-200 hover:bg-[#162E45] hover:text-[#C5A880] transition-colors cursor-pointer"
                    >
                      {content.nav.reviews}
                    </button>
                    <button
                      onClick={() => {
                        setMoreMenuOpen(false);
                        scrollToSection('faq');
                      }}
                      className="w-full text-left rtl:text-right px-4 py-2 text-xs font-medium text-slate-200 hover:bg-[#162E45] hover:text-[#C5A880] transition-colors cursor-pointer"
                    >
                      {content.nav.faq}
                    </button>
                    <button
                      onClick={() => {
                        setMoreMenuOpen(false);
                        scrollToSection('booking');
                      }}
                      className="w-full text-left rtl:text-right px-4 py-2 text-xs font-medium text-[#C5A880] hover:bg-[#162E45] transition-colors cursor-pointer border-t border-[#1E3850] mt-1 pt-2"
                    >
                      {content.nav.bookConsultation}
                    </button>
                  </div>
                )}
              </div>
            </nav>

            {/* Actions & Language Switcher */}
            <div className="flex items-center space-x-2 sm:space-x-3 rtl:space-x-reverse shrink-0">
              {/* Language Switcher Button Group */}
              <div className="flex items-center bg-[#081521] p-1 rounded-lg border border-[#1E3850] text-xs font-semibold">
                <button
                  type="button"
                  id="lang-btn-fr"
                  onClick={() => onLanguageChange('fr')}
                  className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                    currentLang === 'fr'
                      ? 'bg-[#C5A880] text-[#0A1A28] shadow-sm font-bold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                  title="Version Française"
                >
                  FR
                </button>
                <button
                  type="button"
                  id="lang-btn-ar"
                  onClick={() => onLanguageChange('ar')}
                  className={`px-2.5 py-1 rounded transition-all cursor-pointer font-arabic-heading ${
                    currentLang === 'ar'
                      ? 'bg-[#C5A880] text-[#0A1A28] shadow-sm font-bold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                  title="النسخة العربية"
                >
                  العربية
                </button>
                <button
                  type="button"
                  id="lang-btn-en"
                  onClick={() => onLanguageChange('en')}
                  className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                    currentLang === 'en'
                      ? 'bg-[#C5A880] text-[#0A1A28] shadow-sm font-bold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                  title="English Version"
                >
                  EN
                </button>
              </div>

              {/* Primary Header CTA */}
              <button
                type="button"
                id="header-booking-cta"
                onClick={() => scrollToSection('booking')}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg bg-[#C5A880] hover:bg-[#D4B78F] text-[#0A1A28] text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span className="whitespace-nowrap">{content.nav.bookConsultation}</span>
              </button>

              {/* Mobile Hamburger Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#1E3850] focus:outline-none cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#C5A880]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0A1A28] border-b border-[#1E3850] px-5 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1.5 text-sm font-medium text-slate-200">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left rtl:text-right py-2.5 px-3 rounded-lg hover:bg-[#162E45] hover:text-[#C5A880] transition-colors cursor-pointer"
              >
                {content.nav.services}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left rtl:text-right py-2.5 px-3 rounded-lg hover:bg-[#162E45] hover:text-[#C5A880] transition-colors cursor-pointer"
              >
                {content.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="text-left rtl:text-right py-2.5 px-3 rounded-lg hover:bg-[#162E45] hover:text-[#C5A880] transition-colors cursor-pointer"
              >
                {content.nav.location}
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-left rtl:text-right py-2.5 px-3 rounded-lg hover:bg-[#162E45] hover:text-[#C5A880] transition-colors cursor-pointer"
              >
                {content.nav.reviews}
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left rtl:text-right py-2.5 px-3 rounded-lg hover:bg-[#162E45] hover:text-[#C5A880] transition-colors cursor-pointer"
              >
                {content.nav.faq}
              </button>
            </div>

            <div className="pt-3 border-t border-[#1E3850] flex flex-col gap-2">
              <button
                type="button"
                onClick={() => scrollToSection('booking')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#C5A880] text-[#0A1A28] font-bold text-sm shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{content.nav.bookConsultation}</span>
              </button>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                title={currentLang === 'ar' ? 'اتصال فوري بالعيادة' : currentLang === 'en' ? 'Direct phone call to clinic' : 'Appeler immédiatement le cabinet'}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#162E45] hover:bg-[#1E3E5D] text-slate-200 hover:text-white text-sm font-semibold border border-[#1E3850] transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <span dir="ltr">{CLINIC_INFO.phoneFormatted}</span>
                <span className="text-xs text-slate-400 font-normal">
                  ({currentLang === 'ar' ? 'اتصال هاتفي' : currentLang === 'en' ? 'Call' : 'Appel'})
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
