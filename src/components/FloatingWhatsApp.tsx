import React from 'react';
import { Language } from '../types';
import { CLINIC_INFO } from '../data/translations';
import { MessageSquare } from 'lucide-react';

interface FloatingWhatsAppProps {
  currentLang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ currentLang }) => {
  const isRtl = currentLang === 'ar';

  const defaultMessage =
    currentLang === 'ar'
      ? 'مرحباً دكتورة مريم الدليمي، أود الاستفسار وحجز موعد استشارة.'
      : currentLang === 'en'
      ? 'Hello Dr. Meriem DLIMI, I would like to inquire about booking a consultation.'
      : 'Bonjour Dr Meriem DLIMI, je souhaite me renseigner pour une consultation.';

  const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div
      className={`fixed bottom-6 ${
        isRtl ? 'left-6' : 'right-6'
      } z-40 flex items-center group`}
    >
      {/* Tooltip Label on Hover */}
      <span
        className={`hidden md:block bg-[#091724] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg border border-[#1E3850] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none mx-2 whitespace-nowrap`}
      >
        {currentLang === 'ar'
          ? 'تواصل مباشر عبر واتساب'
          : currentLang === 'en'
          ? 'WhatsApp Direct Chat'
          : 'Contact WhatsApp Direct'}
      </span>

      {/* Floating Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all border-2 border-white/20"
        aria-label="WhatsApp Contact"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
};
