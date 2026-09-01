import React, { useState, useRef, useCallback } from 'react';
import { TranslationContent, Language } from '../types';
import { Shield, Sparkles, Lock, CheckCircle2, ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

interface BeforeAfterItem {
  id: string;
  category: string;
  title: string;
  timeline: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  disclaimer: string;
}

interface BeforeAfterGalleryProps {
  content?: TranslationContent;
  currentLang: Language;
  isDarkMode?: boolean;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ currentLang, isDarkMode }) => {
  const isRtl = currentLang === 'ar';

  const cases: BeforeAfterItem[] = [
    {
      id: 'rhinoplasty',
      category: currentLang === 'ar' ? 'جراحة تجميل الوجه' : currentLang === 'en' ? 'Facial Surgery' : 'Chirurgie du Visage',
      title: currentLang === 'ar' ? 'تجميل وإعادة هيكلة الأنف الطبيعي' : currentLang === 'en' ? 'Preservation Rhinoplasty' : 'Rhinoplastie Structurelle Naturelle',
      timeline: currentLang === 'ar' ? 'النتيجة بعد 6 أشهر' : currentLang === 'en' ? 'Result at 6 months' : 'Résultat à 6 mois',
      description: currentLang === 'ar' 
        ? 'تصحيح حدبة الأنف مع تحسين زاوية الأرنبة وتناغم الملامح مع الحفاظ على الهوية التعبيرية والوظيفة التنفسية.' 
        : currentLang === 'en'
        ? 'Refinement of nasal bridge profile, tip support elevation, and natural anatomical harmony preserving respiratory function.'
        : 'Correction de la bosse ostéo-cartilagineuse et harmonisation de la pointe en respectant la structure anatomique du visage.',
      beforeImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      disclaimer: currentLang === 'ar' ? 'مريض مجهول الهوية بموجب الموافقة الطبية الخطية.' : currentLang === 'en' ? 'De-identified patient under formal clinical consent.' : 'Patient anonymisé conformément au consentement médical.'
    },
    {
      id: 'blepharoplasty',
      category: currentLang === 'ar' ? 'نضارة وتجديد النظرة' : currentLang === 'en' ? 'Eye Rejuvenation' : 'Regard & Paupières',
      title: currentLang === 'ar' ? 'تجميل الجفون ورفع النظرة' : currentLang === 'en' ? 'Upper & Lower Blepharoplasty' : 'Blépharoplastie Supérieure & Inférieure',
      timeline: currentLang === 'ar' ? 'النتيجة بعد 3 أشهر' : currentLang === 'en' ? 'Result at 3 months' : 'Résultat à 3 mois',
      description: currentLang === 'ar'
        ? 'إزالة الترهل الجلدي للعين وتفريغ الجيوب الدهنية لإعادة إشراقة شبابية مستدامة للنظرة.'
        : currentLang === 'en'
        ? 'Excision of redundant palpebral skin and restoration of periorbital volume for a refreshed and natural look.'
        : 'Suppression de l’excédent cutané et des poches graisseuses sans altérer l’expression naturelle du regard.',
      beforeImg: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
      disclaimer: currentLang === 'ar' ? 'تمت المحافظة على السرية التامة لهوية المريض.' : currentLang === 'en' ? 'Medical confidentiality and identity protection enforced.' : 'Confidentialité médicale et respect strict de l’anonymat.'
    },
    {
      id: 'bodycontouring',
      category: currentLang === 'ar' ? 'تناسق ونحت القوام' : currentLang === 'en' ? 'Body Sculpting' : 'Silhouette & Corps',
      title: currentLang === 'ar' ? 'نحت القوام والخصر عالي الدقة' : currentLang === 'en' ? 'High-Definition Body Contouring' : 'Lipoaspiration & Remodelage Haute Définition',
      timeline: currentLang === 'ar' ? 'النتيجة بعد 4 أشهر' : currentLang === 'en' ? 'Result at 4 months' : 'Résultat à 4 mois',
      description: currentLang === 'ar'
        ? 'إعادة نحت الخصر والبطن بتناسق رياضي دقيق وتناغم تام مع البنية الجسدية الطبيعية.'
        : currentLang === 'en'
        ? 'Targeted adipose refinement and silhouette sculpt with emphasis on natural muscular transitions.'
        : 'Remodelage ciblé de la ceinture abdominale et des flancs pour une silhouette affinée et galbée.',
      beforeImg: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
      disclaimer: currentLang === 'ar' ? 'النتائج تختلف حسب البنية الجسمانية الفردية والالتزام الطبي.' : currentLang === 'en' ? 'Individual results vary based on anatomy and postoperative compliance.' : 'Les résultats varient selon chaque morphologie et protocole post-opératoire.'
    }
  ];

  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = cases[activeCaseIndex];

  const handleSliderMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleSliderMove(e.clientX);
    }
  };

  const nextCase = () => {
    setActiveCaseIndex((prev) => (prev + 1) % cases.length);
    setSliderPosition(50);
  };

  const prevCase = () => {
    setActiveCaseIndex((prev) => (prev - 1 + cases.length) % cases.length);
    setSliderPosition(50);
  };

  return (
    <section id="gallery" className={`py-20 lg:py-28 transition-colors duration-300 ${
      isDarkMode ? 'bg-[#07131F] text-slate-100' : 'bg-[#FAF9F6] text-[#1E293B]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${
            isDarkMode 
              ? 'bg-[#183654] border-[#C5A880]/40 text-[#E4D1B9]' 
              : 'bg-[#FAF0E4] border-[#E9DAC6] text-[#8C6D45]'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>{currentLang === 'ar' ? 'النتائج السريرية والتناسق' : currentLang === 'en' ? 'Clinical Results & Harmony' : 'Résultats Cliniques & Harmonie'}</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-[#0F2438]'
          } ${currentLang === 'ar' ? 'font-arabic-heading' : 'font-heading'}`}>
            {currentLang === 'ar' ? 'معرض النتائج (قبل / بعد)' : currentLang === 'en' ? 'Before & After Results Gallery' : 'Galerie Avant / Après'}
          </h2>

          <p className={`text-sm sm:text-base leading-relaxed ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {currentLang === 'ar'
              ? 'اسحب المؤشر التفاعلي لاستكشاف النتائج الجراحية الدقيقة المحققة بروح الحفاظ على التناسق والملامح الطبيعية، مع الامتثال الصارم لأخلاقيات السرية الطبية.'
              : currentLang === 'en'
              ? 'Drag the interactive slider to view subtle, natural surgical transformations with absolute respect for medical confidentiality and patient privacy.'
              : 'Faites glisser le curseur interactif pour apprécier la précision chirurgicale et l’harmonie naturelle, dans le respect absolu du secret médical.'}
          </p>

          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-xl border text-xs ${
            isDarkMode 
              ? 'bg-[#0F2438] border-[#1E3850] text-slate-300' 
              : 'bg-white border-slate-200 text-slate-600'
          }`}>
            <Lock className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>{currentLang === 'ar' ? 'عرض متوافق مع معايير السرية والموافقة الطبية المستنيرة' : currentLang === 'en' ? 'Compliant with Medical Privacy & Informed Consent Regulations' : 'Conformité déontologique & consentement éclairé'}</span>
          </div>
        </div>

        {/* Interactive Comparison Stage */}
        <div className={`rounded-3xl border shadow-xl overflow-hidden p-6 sm:p-10 transition-colors ${
          isDarkMode 
            ? 'bg-[#0B1A28] border-[#1E3B56]' 
            : 'bg-white border-slate-200/90'
        }`}>
          
          {/* Procedure Tabs Selector */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 overflow-x-auto pb-2">
            {cases.map((c, index) => {
              const isActive = activeCaseIndex === index;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveCaseIndex(index);
                    setSliderPosition(50);
                  }}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#C5A880] text-[#0A1A28] shadow-md'
                      : isDarkMode
                      ? 'bg-[#0F2438] text-slate-300 hover:text-white border border-[#1E3850]'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {c.category}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Interactive Slider Comparison Canvas */}
            <div className="lg:col-span-7 select-none">
              <div
                ref={containerRef}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={onMouseMove}
                onTouchMove={onTouchMove}
                className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize border border-[#1E3850] bg-[#0A1A28]"
              >
                {/* "AFTER" Image */}
                <img
                  src={activeCase.afterImg}
                  alt={`${activeCase.title} - After`}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                />

                {/* "BEFORE" Image */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={activeCase.beforeImg}
                    alt={`${activeCase.title} - Before`}
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{
                      width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                      height: '100%'
                    }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                </div>

                {/* Floating "BEFORE" Tag */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-md bg-[#0A1A28]/85 backdrop-blur-xs text-white text-xs font-bold uppercase tracking-wider border border-white/20 shadow-md pointer-events-none">
                  {currentLang === 'ar' ? 'قبل التدخل' : currentLang === 'en' ? 'Before' : 'Avant'}
                </div>

                {/* Floating "AFTER" Tag */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-md bg-[#C5A880]/90 backdrop-blur-xs text-[#0A1A28] text-xs font-bold uppercase tracking-wider border border-[#0A1A28]/20 shadow-md pointer-events-none">
                  {currentLang === 'ar' ? 'النتيجة بعد التدخل' : currentLang === 'en' ? 'After Result' : 'Après'}
                </div>

                {/* Vertical Divider Line & Draggable Handle */}
                <div
                  className="absolute top-0 bottom-0 z-20 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.8)] pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0F2438] border-2 border-[#C5A880] text-[#C5A880] flex items-center justify-center shadow-2xl pointer-events-auto cursor-ew-resize transition-transform hover:scale-110">
                    <div className="flex items-center gap-0.5 text-xs font-bold">
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none">
                  <span className="bg-[#0A1A28]/80 backdrop-blur-xs text-slate-200 text-[11px] px-3 py-1 rounded-full border border-white/10 shadow-sm">
                    {currentLang === 'ar' ? 'اسحب لمقارنة النتيجة' : currentLang === 'en' ? 'Drag horizontally to compare' : 'Glissez pour comparer'}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Case Details & Surgeon Commentary */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#C5A880] uppercase tracking-widest">
                    {activeCase.category}
                  </span>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${
                    isDarkMode ? 'bg-[#142E47] border-[#224A6F] text-slate-200' : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}>
                    {activeCase.timeline}
                  </span>
                </div>

                <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-[#0F2438]'} ${currentLang === 'ar' ? 'font-arabic-heading' : 'font-heading'}`}>
                  {activeCase.title}
                </h3>
              </div>

              <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {activeCase.description}
              </p>

              <div className={`p-4 rounded-xl border space-y-2 text-xs ${
                isDarkMode 
                  ? 'bg-[#0F2438] border-[#1E3850] text-slate-300' 
                  : 'bg-[#FAF9F6] border-slate-200 text-slate-700'
              }`}>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>{currentLang === 'ar' ? 'تقنيات جراحية دقيقة لندبات غير مرئية' : currentLang === 'en' ? 'Minimally invasive incisions with concealed scars' : 'Incisions discrètes & cicatrices dissimulées'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>{currentLang === 'ar' ? 'متابعة ما بعد العملية ومواكبة شخصية منتظمة' : currentLang === 'en' ? 'Comprehensive post-operative follow-up' : 'Suivi post-opératoire personnalisé et rigoureux'}</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-[11px] text-slate-400 italic">
                <Shield className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{activeCase.disclaimer}</span>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevCase}
                    className={`p-2.5 rounded-lg border transition-colors cursor-pointer ${
                      isDarkMode 
                        ? 'bg-[#0F2438] border-[#1E3850] text-slate-200 hover:bg-[#163652]' 
                        : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
                    }`}
                    aria-label="Previous case"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextCase}
                    className={`p-2.5 rounded-lg border transition-colors cursor-pointer ${
                      isDarkMode 
                        ? 'bg-[#0F2438] border-[#1E3850] text-slate-200 hover:bg-[#163652]' 
                        : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
                    }`}
                    aria-label="Next case"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const serviceSelect = document.getElementById('patientService') as HTMLSelectElement | null;
                    if (serviceSelect) {
                      serviceSelect.value = activeCase.title;
                    }
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
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#C5A880] hover:bg-[#D4B78F] text-[#0A1A28] text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{currentLang === 'ar' ? 'استشارة حول هذا الإجراء' : currentLang === 'en' ? 'Inquire About This Procedure' : 'Consulter pour ce résultat'}</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
