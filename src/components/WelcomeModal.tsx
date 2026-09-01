import React, { useState, useEffect } from 'react';
import { Language, TranslationContent } from '../types';
import { CLINIC_INFO } from '../data/translations';
import { X, MessageSquare, Star, Shield, ArrowRight, ArrowLeft } from 'lucide-react';

interface WelcomeModalProps {
  currentLang: Language;
  isDarkMode?: boolean;
  content?: TranslationContent;
}

export const WelcomeModal: React.FC<WelcomeModalProps> = ({ currentLang, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isRtl = currentLang === 'ar';

  useEffect(() => {
    // Check if the user already dismissed the welcome modal in this session
    const hasDismissed = sessionStorage.getItem('clinic_welcome_dismissed');
    if (hasDismissed) return;

    // Trigger subtle welcome modal 3 seconds after initial page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('clinic_welcome_dismissed', 'true');
  };

  const handleGoToBooking = () => {
    handleClose();
    const element = document.getElementById('booking');
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-300">
      {/* Modal Container */}
      <div
        className={`relative w-full max-w-md rounded-2xl p-6 sm:p-7 shadow-2xl border transition-all duration-300 animate-in zoom-in-95 slide-in-from-bottom-4 ${
          isDarkMode 
            ? 'bg-[#0A1A28] border-[#1E3850] text-slate-100' 
            : 'bg-white border-slate-200 text-slate-800'
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className={`absolute top-4 ${
            isRtl ? 'left-4' : 'right-4'
          } p-1.5 rounded-full transition-colors cursor-pointer ${
            isDarkMode 
              ? 'text-slate-400 hover:text-white hover:bg-[#162E45]' 
              : 'text-slate-500 hover:text-slate-800 hover:bg-slate-100'
          }`}
          aria-label="Close welcome message"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Doctor Monogram & Header */}
        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#163652] to-[#0A1A28] border border-[#C5A880]/60 flex items-center justify-center text-[#C5A880] font-heading font-bold text-lg shadow-sm shrink-0">
            MD
          </div>
          <div>
            <span className="text-[11px] font-semibold text-[#C5A880] uppercase tracking-wider block">
              {currentLang === 'ar' ? 'عيادة جراحة التجميل • مراكش' : currentLang === 'en' ? 'Plastic Surgery Clinic • Marrakesh' : 'Cabinet de Chirurgie Plastique • Marrakech'}
            </span>
            <h3 className={`text-base sm:text-lg font-bold ${isDarkMode ? 'text-white' : 'text-[#0F2438]'} ${currentLang === 'ar' ? 'font-arabic-heading' : 'font-heading'}`}>
              {currentLang === 'ar' ? CLINIC_INFO.doctorNameAr : CLINIC_INFO.doctorName}
            </h3>
          </div>
        </div>

        {/* Rating and Trust Pill */}
        <div className="flex items-center gap-2 mb-3.5 text-xs">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>4.9 / 5</span>
          <span className="text-slate-400">• 68 avis vérifiés Google</span>
        </div>

        {/* Welcoming Body Copy */}
        <p className={`text-xs sm:text-sm leading-relaxed mb-5 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          {currentLang === 'ar'
            ? 'مرحباً بكم في عيادة الدكتورة مريم الدليمي. يسرنا مرافقتكم في استشارة خاصة ومخصصة لتلبية تطلعاتكم الجمالية بأعلى معايير الأمان والسرية الطبية.'
            : currentLang === 'en'
            ? 'Welcome to the practice of Dr. Meriem DLIMI. We invite you to schedule a confidential and personalized consultation tailored to your aesthetic goals.'
            : 'Bienvenue au cabinet du Dr Meriem DLIMI. Nous vous accueillons pour une consultation personnalisée et confidentielle adaptée à vos attentes.'}
        </p>

        {/* Quick Highlights */}
        <div className={`p-3 rounded-xl border mb-5 space-y-1.5 text-xs ${
          isDarkMode ? 'bg-[#0F2438] border-[#1E3850] text-slate-300' : 'bg-[#FAF9F6] border-slate-200 text-slate-700'
        }`}>
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
            <span>{currentLang === 'ar' ? 'استشارة طبية معمقة ودراسة تشريحية مخصصة' : currentLang === 'en' ? 'In-depth clinical assessment & tailored anatomical plan' : 'Bilan clinique rigoureux & étude morphologique'}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
            <span>{currentLang === 'ar' ? 'تأكيد وحجز سريع ومباشر عبر تطبيق واتساب' : currentLang === 'en' ? 'Instant priority appointment confirmation via WhatsApp' : 'Confirmation rapide & directe via WhatsApp'}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <button
            type="button"
            onClick={handleGoToBooking}
            className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#C5A880] hover:bg-[#D4B78F] text-[#0A1A28] text-xs sm:text-sm font-bold shadow-md transition-all active:scale-98 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{currentLang === 'ar' ? 'حجز موعد استشارة الآن' : currentLang === 'en' ? 'Book Consultation Now' : 'Prendre Rendez-vous'}</span>
            {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
          </button>

          <button
            type="button"
            onClick={handleClose}
            className={`w-full py-2 text-xs font-semibold transition-colors cursor-pointer text-center ${
              isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {currentLang === 'ar' ? 'متابعة تصفح الموقع أولاً' : currentLang === 'en' ? 'Continue browsing first' : 'Continuer la visite'}
          </button>
        </div>
      </div>
    </div>
  );
};
