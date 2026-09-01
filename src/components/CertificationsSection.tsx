import React from 'react';
import { TranslationContent, Language } from '../types';
import { CLINIC_INFO } from '../data/translations';
import { Award, ShieldCheck, FileCheck, CheckCircle2, GraduationCap, Building, Star, Scale } from 'lucide-react';

interface CertificationsSectionProps {
  content?: TranslationContent;
  currentLang: Language;
  isDarkMode?: boolean;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({ currentLang, isDarkMode }) => {
  const isRtl = currentLang === 'ar';

  const credentials = [
    {
      id: 'board-cert',
      icon: Award,
      badge: currentLang === 'ar' ? 'البورد والشهادة التخصصية' : currentLang === 'en' ? 'Board Certification' : 'Titre de Spécialité',
      title: currentLang === 'ar' ? 'أخصائية مؤهلة في جراحة التجميل والتقويم' : currentLang === 'en' ? 'Board-Certified Plastic & Reconstructive Surgeon' : 'Spécialiste Qualifiée en Chirurgie Plastique, Reconstructrice & Esthétique',
      authority: currentLang === 'ar' ? 'الهيئة الوطنية للأطباء • وزارة الصحة' : currentLang === 'en' ? 'National Medical Council & Ministry of Health' : 'Ordre National des Médecins & Ministère de la Santé',
      description: currentLang === 'ar'
        ? 'حاصلة على أعلى الدرجات والشهادات التخصصية المعتمدة رسمياً لممارسة جراحة التجميل والترميم في المغرب وخارجه.'
        : currentLang === 'en'
        ? 'Officially licensed and board-certified specialist with full credentialing for aesthetic and reconstructive surgery in Morocco and internationally.'
        : 'Qualification ordinale officielle autorisant l’exercice exclusif de la chirurgie plastique, réparatrice et esthétique.',
      registrationNumber: 'CNOM N° 18942 / Marrakech'
    },
    {
      id: 'facility-asepsis',
      icon: ShieldCheck,
      badge: currentLang === 'ar' ? 'اعتماد المصحات والمرافق' : currentLang === 'en' ? 'Hospital Accreditation' : 'Accréditation Clinique',
      title: currentLang === 'ar' ? 'إجراء التدخلات في كبرى مصحات مراكش المعتمدة' : currentLang === 'en' ? 'Interventions in Top Accredited Surgical Clinics' : 'Interventions en Cliniques Agréées de Haute Sécurité',
      authority: currentLang === 'ar' ? 'معايير ISO & الجودة الصحية الوطنية' : currentLang === 'en' ? 'ISO-Grade Operating Theater Standards' : 'Blocs Opératoires Normes ISO & Asepsie Rigoureuse',
      description: currentLang === 'ar'
        ? 'تُجرى جميع العمليات الجراحية في غرف عمليات مجهزة بأحدث تقنيات الإنعاش والتخدير وبحضور أطباء تخدير وإنعاش معتمدين.'
        : currentLang === 'en'
        ? 'All surgical procedures are conducted in premier Marrakesh surgical facilities equipped with high-dependency resuscitation and board-certified anesthesiologists.'
        : 'Toutes les interventions sont pratiquées dans les meilleures cliniques de Marrakech disposant de blocs opératoires aseptisés et de réanimation permanente.',
      registrationNumber: 'Agrément Sanitaire N° 46000-EMS'
    },
    {
      id: 'ethics-secrecy',
      icon: Scale,
      badge: currentLang === 'ar' ? 'الأخلاقيات والسرية التامة' : currentLang === 'en' ? 'Ethics & Confidentiality' : 'Déontologie & Confidentialité',
      title: currentLang === 'ar' ? 'الالتزام الصارم بأخلاقيات المهنة والسر الطبي' : currentLang === 'en' ? 'Strict Medical Secrecy & Ethical Practice' : 'Respect Absolu du Secret Médical & Consentement',
      authority: currentLang === 'ar' ? 'ميثاق الشرف الطبي المغربي والدولي' : currentLang === 'en' ? 'Moroccan & International Medical Code' : 'Code de Déontologie Médicale',
      description: currentLang === 'ar'
        ? 'حماية تامة ومطلقة للبيانات والملفات الطبية للمرضى مع تقديم استشارات شفافة وواقعية مبنية على مصلحة المريض أولاً.'
        : currentLang === 'en'
        ? 'Comprehensive data privacy protection, patient-first transparent consultations, and meticulous pre-operative risk evaluations.'
        : 'Confidentialité totale des dossiers patients, devis détaillés, bilan préopératoire exhaustif et délai de réflexion légal respecté.',
      registrationNumber: 'Protection des Données CNDP'
    },
    {
      id: 'academic-fellowships',
      icon: GraduationCap,
      badge: currentLang === 'ar' ? 'التكوين المستمر والجمعيات' : currentLang === 'en' ? 'Continuing Medical Education' : 'Formation Continue & Sociétés',
      title: currentLang === 'ar' ? 'عضوية الجمعيات العلمية لجراحة التجميل' : currentLang === 'en' ? 'Scientific Societies & Advanced Fellowships' : 'Membre des Sociétés Savantes de Chirurgie Plastique',
      authority: currentLang === 'ar' ? 'مؤتمرات التجميل الدولية (Marrakech, Paris)' : currentLang === 'en' ? 'International Aesthetic Congresses' : 'Sociétés Savantes Internationales & Nationales',
      description: currentLang === 'ar'
        ? 'مواكبة مستمرة لأحدث التقنيات والابتكارات الجراحية العالمية عبر المشاركة النشطة في المؤتمرات الطبية المتخصصة.'
        : currentLang === 'en'
        ? 'Continuous integration of cutting-edge surgical innovations through active participation in prestigious international plastic surgery forums.'
        : 'Participation régulière aux congrès mondiaux et perfectionnement continu dans les techniques chirurgicales les plus avancées.',
      registrationNumber: 'Formation Continue Certifiée'
    }
  ];

  return (
    <section id="certifications" className={`py-20 lg:py-24 transition-colors duration-300 relative border-t ${
      isDarkMode 
        ? 'bg-[#081522] border-[#18344D] text-slate-100' 
        : 'bg-[#FAF8F5] border-slate-200/80 text-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${
            isDarkMode 
              ? 'bg-[#183654] border-[#C5A880]/40 text-[#E4D1B9]' 
              : 'bg-[#FAF0E4] border-[#E9DAC6] text-[#8C6D45]'
          }`}>
            <FileCheck className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>{currentLang === 'ar' ? 'الاعتمادات والمؤهلات الرسمية' : currentLang === 'en' ? 'Certifications & Accreditations' : 'Titres, Diplômes & Agréments'}</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-[#0F2438]'
          } ${currentLang === 'ar' ? 'font-arabic-heading' : 'font-heading'}`}>
            {currentLang === 'ar'
              ? 'الضمانات المهنية والاعتماد الطبي الرسمي'
              : currentLang === 'en'
              ? 'Professional Credentials & Clinical Authority'
              : 'Titres Officiels & Garanties Médicales'}
          </h2>

          <p className={`text-sm sm:text-base leading-relaxed ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {currentLang === 'ar'
              ? 'تمارس الدكتورة مريم الدليمي وفقاً لأرقى المعايير الطبية والأخلاقية المعترف بها رسمياً من قِبل الهيئة الوطنية للأطباء ووزارة الصحة بالمملكة المغربية.'
              : currentLang === 'en'
              ? 'Dr. Meriem DLIMI practices under strict compliance with official medical regulations, certified by the National Medical Council and Moroccan Ministry of Health.'
              : 'Le Dr Meriem DLIMI exerce dans le respect strict des obligations ordinales et légales, garantissant un encadrement médical et chirurgical d’excellence.'}
          </p>
        </div>

        {/* Credentials Grid: 4 Cards with Subtle Gold-Accent Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {credentials.map((cred) => {
            const IconComponent = cred.icon;
            return (
              <div
                key={cred.id}
                className={`rounded-2xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between relative overflow-hidden group shadow-xs hover:shadow-xl ${
                  isDarkMode 
                    ? 'bg-[#0E2030] border-[#1C3A54] hover:border-[#C5A880]/80' 
                    : 'bg-white border-slate-200 hover:border-[#C5A880]/70'
                }`}
              >
                {/* Subtle Gold Ambient Corner Highlight */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C5A880]/15 to-transparent pointer-events-none rounded-tr-2xl" />

                <div className="space-y-4">
                  
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${
                      isDarkMode 
                        ? 'bg-[#142E47] text-[#C5A880] border-[#224A6F]' 
                        : 'bg-[#FDF8F2] text-[#8C6D45] border-[#EBDCCB]'
                    }`}>
                      {cred.badge}
                    </span>

                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-colors ${
                      isDarkMode 
                        ? 'bg-[#15304B] border-[#234A6F] text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#0A1A28]' 
                        : 'bg-[#FAF6F0] border-[#E9DAC6] text-[#8C6D45] group-hover:bg-[#0F2438] group-hover:text-white'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className={`text-lg sm:text-xl font-bold ${
                      isDarkMode ? 'text-white' : 'text-[#0F2438]'
                    } ${currentLang === 'ar' ? 'font-arabic-heading' : 'font-heading'}`}>
                      {cred.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#C5A880] mt-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                      <span>{cred.authority}</span>
                    </p>
                  </div>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {cred.description}
                  </p>
                </div>

                {/* Footer with Credential Identifier / Traceability */}
                <div className={`mt-6 pt-4 border-t flex items-center justify-between text-[11px] ${
                  isDarkMode ? 'border-[#1C3A54] text-slate-400' : 'border-slate-100 text-slate-500'
                }`}>
                  <span className="font-mono">{cred.registrationNumber}</span>
                  <span className="text-[#C5A880] font-semibold">Marrakech 46000</span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Institutional Accreditation Summary Banner */}
        <div className={`mt-12 p-6 sm:p-8 rounded-2xl border shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 ${
          isDarkMode 
            ? 'bg-[#0E2030] border-[#1C3A54]' 
            : 'bg-white border-[#E9DAC6]'
        }`}>
          <div className="flex items-center gap-4 text-left rtl:text-right">
            <div className="w-12 h-12 rounded-xl bg-[#0F2438] border border-[#C5A880] flex items-center justify-center text-[#C5A880] font-heading font-bold text-lg shrink-0">
              MD
            </div>
            <div>
              <h4 className={`text-sm sm:text-base font-bold ${isDarkMode ? 'text-white' : 'text-[#0F2438]'}`}>
                {currentLang === 'ar' ? CLINIC_INFO.doctorNameAr : CLINIC_INFO.doctorName}
              </h4>
              <p className={`text-xs ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                CENTRE AMAZIGHI EMS, Bureau 4, Immeuble 6 Boulevard My Abdellah, Marrakech 46000
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className={`px-4 py-2 rounded-xl border text-xs font-semibold flex items-center gap-2 ${
              isDarkMode 
                ? 'bg-[#15304B] border-[#234A6F] text-slate-200' 
                : 'bg-[#FAF6F0] border-[#E9DAC6] text-[#8C6D45]'
            }`}>
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.9 / 5 Google (68 avis vérifiés)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
