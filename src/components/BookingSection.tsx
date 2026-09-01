import React, { useState } from 'react';
import { TranslationContent, Language } from '../types';
import { CLINIC_INFO } from '../data/translations';
import { MessageSquare, Phone, Shield, Lock, Send, CheckCircle2, User, PhoneCall, Sparkles } from 'lucide-react';

interface BookingSectionProps {
  content: TranslationContent;
  currentLang: Language;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ content, currentLang }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const isRtl = currentLang === 'ar';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let message = '';
    const patientName = formData.name.trim() || (currentLang === 'ar' ? 'غير محدد' : currentLang === 'en' ? 'Not specified' : 'Non spécifié');
    const patientPhone = formData.phone.trim() || (currentLang === 'ar' ? 'غير محدد' : currentLang === 'en' ? 'Not specified' : 'Non spécifié');
    const serviceName = formData.service || (currentLang === 'ar' ? 'استشارة عامة' : currentLang === 'en' ? 'General Consultation' : 'Consultation générale');
    const notes = formData.notes.trim();

    if (currentLang === 'ar') {
      message = `مرحباً دكتورة مريم الدليمي، أود حجز موعد استشارة:
- الاسم: ${patientName}
- الهاتف: ${patientPhone}
- الإجراء المطلوب: ${serviceName}${notes ? `\n- تفاصيل إضافية: ${notes}` : ''}

شكراً جزيلاً.`;
    } else if (currentLang === 'en') {
      message = `Hello Dr. Meriem DLIMI, I would like to book a consultation appointment:
- Patient Name: ${patientName}
- Phone: ${patientPhone}
- Requested Service: ${serviceName}${notes ? `\n- Additional details: ${notes}` : ''}

Thank you.`;
    } else {
      message = `Bonjour Dr Meriem DLIMI, je souhaite prendre un rendez-vous de consultation :
- Nom du patient : ${patientName}
- Téléphone : ${patientPhone}
- Intervention / Service souhaité : ${serviceName}${notes ? `\n- Précisions : ${notes}` : ''}

Merci.`;
    }

    const whatsappUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="booking" className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Reassurance & Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF0E4] border border-[#E9DAC6] text-[#8C6D45] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{content.bookingSection.badge}</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl font-bold text-[#0F2438] tracking-tight ${currentLang === 'ar' ? 'font-arabic-heading' : 'font-heading'}`}>
              {content.bookingSection.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {content.bookingSection.subtitle}
            </p>

            {/* Direct Phone Assistance Card */}
            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0F2438] uppercase tracking-wide">
                <PhoneCall className="w-4 h-4 text-[#C5A880]" />
                <span>{content.bookingSection.directCallText}</span>
              </div>
              <p className="text-xs text-slate-600">
                {currentLang === 'ar'
                  ? 'يمكنكم الاتصال مباشرة بالعيادة خلال أوقات العمل لتحديد الموعد فورياً.'
                  : currentLang === 'en'
                  ? 'You can call our medical receptionist directly during office hours for instant scheduling.'
                  : 'Vous pouvez joindre directement le secrétariat médical du cabinet aux heures d’ouverture.'}
              </p>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0F2438] hover:text-[#C5A880] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <span dir="ltr">{CLINIC_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* Medical Secrecy Notice */}
            <div className="flex items-start gap-3 text-xs text-slate-500 pt-2">
              <Lock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
              <span>{content.bookingSection.privacyNote}</span>
            </div>

          </div>

          {/* Right Column: WhatsApp Booking Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-[#091724] border border-[#1E3850] p-6 sm:p-10 shadow-2xl text-white">
              
              <div className="mb-6 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className={`text-xl sm:text-2xl font-bold text-white font-heading ${currentLang === 'ar' ? 'font-arabic-heading' : ''}`}>
                    {content.bookingSection.formTitle}
                  </h3>
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-xs text-slate-300">
                  {content.bookingSection.formDesc}
                </p>
              </div>

              {/* Functional Booking Form with specific id and required structure */}
              <form
                id="bookingForm"
                data-booking-form="true"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* Patient Name */}
                <div className="space-y-1.5">
                  <label htmlFor="patientName" className="block text-xs font-semibold text-slate-200">
                    {content.bookingSection.nameLabel} <span className="text-[#C5A880]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="patientName"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={content.bookingSection.namePlaceholder}
                      className="w-full px-4 py-3 rounded-lg bg-[#0F2438] border border-[#1E3850] text-white text-sm placeholder-slate-400 focus:outline-none focus:border-[#C5A880] transition-colors"
                    />
                  </div>
                </div>

                {/* Patient Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="patientPhone" className="block text-xs font-semibold text-slate-200">
                    {content.bookingSection.phoneLabel} <span className="text-[#C5A880]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="patientPhone"
                    name="phone"
                    required
                    dir="ltr"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={content.bookingSection.phonePlaceholder}
                    className="w-full px-4 py-3 rounded-lg bg-[#0F2438] border border-[#1E3850] text-white text-sm placeholder-slate-400 focus:outline-none focus:border-[#C5A880] transition-colors text-left"
                  />
                </div>

                {/* Service Selection */}
                <div className="space-y-1.5">
                  <label htmlFor="patientService" className="block text-xs font-semibold text-slate-200">
                    {content.bookingSection.serviceLabel} <span className="text-[#C5A880]">*</span>
                  </label>
                  <select
                    id="patientService"
                    name="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#0F2438] border border-[#1E3850] text-white text-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                  >
                    <option value="" disabled>
                      {content.bookingSection.serviceSelectDefault}
                    </option>
                    {content.servicesSection.items.map((svc) => (
                      <option key={svc.id} value={svc.title} className="bg-[#0F2438] text-white">
                        {svc.title} ({svc.category})
                      </option>
                    ))}
                    <option value={currentLang === 'ar' ? 'استشارة عامة وتقييم' : currentLang === 'en' ? 'General Consultation & Assessment' : 'Consultation Générale & Bilan'}>
                      {currentLang === 'ar' ? 'استشارة عامة وتقييم' : currentLang === 'en' ? 'General Consultation & Assessment' : 'Consultation Générale & Bilan'}
                    </option>
                  </select>
                </div>

                {/* Notes / Date Preference */}
                <div className="space-y-1.5">
                  <label htmlFor="patientNotes" className="block text-xs font-semibold text-slate-200">
                    {content.bookingSection.notesLabel}
                  </label>
                  <textarea
                    id="patientNotes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={content.bookingSection.notesPlaceholder}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0F2438] border border-[#1E3850] text-white text-sm placeholder-slate-400 focus:outline-none focus:border-[#C5A880] transition-colors resize-none"
                  />
                </div>

                {/* Submit CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="submitBookingBtn"
                    className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm sm:text-base font-bold shadow-lg transition-all active:scale-98 cursor-pointer"
                  >
                    <MessageSquare className="w-5 h-5 fill-current" />
                    <span>{content.bookingSection.submitBtn}</span>
                  </button>
                </div>

                {submitted && (
                  <div className="p-3 rounded-lg bg-emerald-900/50 border border-emerald-500 text-emerald-200 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      {currentLang === 'ar'
                        ? 'تم توجيهكم إلى تطبيق واتساب لتأكيد الرسالة. شكراً لتواصلكم.'
                        : currentLang === 'en'
                        ? 'Opening WhatsApp with your pre-filled booking details. Thank you!'
                        : 'Ouverture de WhatsApp avec votre demande pré-remplie. Merci !'}
                    </span>
                  </div>
                )}

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
