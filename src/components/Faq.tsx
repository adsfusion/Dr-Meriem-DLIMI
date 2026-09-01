import React, { useState } from 'react';
import { TranslationContent, Language } from '../types';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FaqProps {
  content: TranslationContent;
  currentLang: Language;
}

export const Faq: React.FC<FaqProps> = ({ content, currentLang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isRtl = currentLang === 'ar';

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF0E4] border border-[#E9DAC6] text-[#8C6D45] text-xs font-bold uppercase tracking-wider">
            <span>{content.faqSection.badge}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold text-[#0F2438] tracking-tight ${currentLang === 'ar' ? 'font-arabic-heading' : 'font-heading'}`}>
            {content.faqSection.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            {content.faqSection.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {content.faqSection.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#C5A880]/80 bg-[#FAF9F6] shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left rtl:text-right gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-bold text-[#0F2438] ${currentLang === 'ar' ? 'font-arabic-heading' : ''}`}>
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-full shrink-0 transition-colors ${isOpen ? 'bg-[#C5A880] text-[#0A1A28]' : 'bg-slate-100 text-slate-500'}`}>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/60 mt-1">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
