import React, { useState } from 'react';
import { Language, TranslationContent } from '../types';
import { Sparkles, CheckCircle2, MessageSquare, ArrowRight, ArrowLeft, Shield, Info, Activity } from 'lucide-react';

interface ProcedureInfo {
  id: string;
  name: string;
  category: string;
  recoveryTime: string;
  anesthesia: string;
  hospitalStay: string;
  description: string;
  keyBenefits: string[];
}

interface AnatomicalRegion {
  id: string;
  name: string;
  iconLabel: string;
  summary: string;
  procedures: ProcedureInfo[];
  hotspots: {
    id: string;
    label: string;
    x: number; // percentage
    y: number; // percentage
    procedureRef: string;
  }[];
}

interface AnatomyGuideProps {
  content?: TranslationContent;
  currentLang: Language;
  isDarkMode?: boolean;
}

export const AnatomyGuide: React.FC<AnatomyGuideProps> = ({ currentLang, isDarkMode }) => {
  const isRtl = currentLang === 'ar';
  const [selectedZone, setSelectedZone] = useState<'face' | 'breast' | 'body'>('face');
  const [activeProcedureId, setActiveProcedureId] = useState<string>('rhinoplasty');
  const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);

  // Multilingual Anatomical Data
  const anatomyData: Record<'face' | 'breast' | 'body', AnatomicalRegion> = {
    face: {
      id: 'face',
      name: currentLang === 'ar' ? 'الوجه والنظرة' : currentLang === 'en' ? 'Face & Periorbital' : 'Visage & Regard',
      iconLabel: currentLang === 'ar' ? 'تجميل الوجه' : currentLang === 'en' ? 'Facial Aesthetics' : 'Esthétique Faciale',
      summary: currentLang === 'ar'
        ? 'استعادة النضارة وتناسق الملامح الطبيعية مع الحفاظ على التعبير الشخصي والوظيفة الفسيولوجية.'
        : currentLang === 'en'
        ? 'Restoring facial volume balance, structural harmony, and youthful vitality while preserving natural expression.'
        : 'Harmonisation des volumes, précision structurelle et rajeunissement préservant les expressions naturelles.',
      hotspots: [
        { id: 'h-rhino', label: currentLang === 'ar' ? 'الأنف' : currentLang === 'en' ? 'Nose' : 'Nez', x: 50, y: 44, procedureRef: 'rhinoplasty' },
        { id: 'h-bleph', label: currentLang === 'ar' ? 'الجفون' : currentLang === 'en' ? 'Eyelids' : 'Paupières', x: 50, y: 34, procedureRef: 'blepharoplasty' },
        { id: 'h-lift', label: currentLang === 'ar' ? 'شد الوجه والرقبة' : currentLang === 'en' ? 'Facelift' : 'Ovale & Cou', x: 50, y: 64, procedureRef: 'facelift' },
        { id: 'h-lips', label: currentLang === 'ar' ? 'الشفاه والابتسامة' : currentLang === 'en' ? 'Lips' : 'Lèvres', x: 50, y: 55, procedureRef: 'lipofilling' }
      ],
      procedures: [
        {
          id: 'rhinoplasty',
          name: currentLang === 'ar' ? 'تجميل وإعادة هيكلة الأنف' : currentLang === 'en' ? 'Preservation Rhinoplasty' : 'Rhinoplastie Structurelle & Ultrasonique',
          category: currentLang === 'ar' ? 'جراحة الوجه' : currentLang === 'en' ? 'Facial Surgery' : 'Chirurgie Faciale',
          recoveryTime: currentLang === 'ar' ? '7 إلى 10 أيام' : currentLang === 'en' ? '7 to 10 days' : '7 à 10 jours',
          anesthesia: currentLang === 'ar' ? 'تخدير عام' : currentLang === 'en' ? 'General' : 'Anesthésie Générale',
          hospitalStay: currentLang === 'ar' ? 'يوم واحد (عيادة نهارية)' : currentLang === 'en' ? 'Outpatient / 1 day' : 'Ambulatoire / 24h',
          description: currentLang === 'ar'
            ? 'تصحيح حدبة الأنف وتعديل انحراف الحاجز مع ضبط دقيق لزاوية الأرنبة لتحقيق تناغم كامل مع ملامح الوجه.'
            : currentLang === 'en'
            ? 'Refinement of nasal bridge profile, tip support elevation, and septum correction ensuring optimal breathing and natural aesthetics.'
            : 'Correction douce de la bosse osseuse, affinement de la pointe et redressement de la cloison pour un résultat naturel et harmonieux.',
          keyBenefits: [
            currentLang === 'ar' ? 'نتائج طبيعية غير متكلفة متوافقة مع ملامح الشخص' : currentLang === 'en' ? 'Natural harmony without artificial appearance' : 'Résultat naturel respectant l’équilibre du visage',
            currentLang === 'ar' ? 'حماية الوظيفة التنفسية وتصحيح الحاجز الأنفي' : currentLang === 'en' ? 'Preservation of nasal airflow and respiratory health' : 'Préservation optimale de la fonction respiratoire',
            currentLang === 'ar' ? 'تقنيات غير رضية لتسريع الشفاء وتقليل الكدمات' : currentLang === 'en' ? 'Gentle ultrasonic technique minimizing bruising' : 'Suites opératoires douces et récupération rapide'
          ]
        },
        {
          id: 'blepharoplasty',
          name: currentLang === 'ar' ? 'جراحة تجميل الجفون (شد النظرة)' : currentLang === 'en' ? 'Upper & Lower Blepharoplasty' : 'Blépharoplastie des Paupières',
          category: currentLang === 'ar' ? 'تجديد النظرة' : currentLang === 'en' ? 'Eye Rejuvenation' : 'Regard & Paupières',
          recoveryTime: currentLang === 'ar' ? '5 إلى 7 أيام' : currentLang === 'en' ? '5 to 7 days' : '5 à 7 jours',
          anesthesia: currentLang === 'ar' ? 'تخدير موضعي مدعم' : currentLang === 'en' ? 'Local with sedation' : 'Locale assistée ou Générale',
          hospitalStay: currentLang === 'ar' ? 'مغادرة في نفس اليوم' : currentLang === 'en' ? 'Day case' : 'Ambulatoire',
          description: currentLang === 'ar'
            ? 'إزالة الجلد الزائد من الجفون العلوية وتفريغ الجيوب الدهنية من الجفون السفلية لإعادة الحيوية والإشراق للعينين.'
            : currentLang === 'en'
            ? 'Removal of excess eyelid skin and orbital fat pads to eliminate tired appearance and restore periorbital vitality.'
            : 'Élimination des excès cutanés des paupières supérieures et traitement des poches sous les yeux pour un regard défatigué et lumineux.',
          keyBenefits: [
            currentLang === 'ar' ? 'نظرة شابة ومسترخية دون تغيير شكل العينين' : currentLang === 'en' ? 'Refreshed gaze without altering eye shape' : 'Regard défatigué sans modification de l’expression',
            currentLang === 'ar' ? 'ندبات دقيقة جداً ومخفية في الثنايا الطبيعية' : currentLang === 'en' ? 'Concealed microscopic scars in eyelid crease' : 'Cicatrices quasiment invisibles dans le pli naturel',
            currentLang === 'ar' ? 'إجراء سريع مع فترة نقاهة وجيزة' : currentLang === 'en' ? 'Short downtime with rapid return to activities' : 'Reprise rapide des activités socioprofessionnelles'
          ]
        },
        {
          id: 'facelift',
          name: currentLang === 'ar' ? 'شد الوجه والرقبة الطبيعي (Deep Plane / SMAS)' : currentLang === 'en' ? 'Deep Plane & SMAS Facelift' : 'Lifting Cervico-Facial & SMAS',
          category: currentLang === 'ar' ? 'مكافحة الترهل' : currentLang === 'en' ? 'Anti-Aging' : 'Rajeunissement Global',
          recoveryTime: currentLang === 'ar' ? '12 إلى 15 يوماً' : currentLang === 'en' ? '12 to 15 days' : '12 à 15 jours',
          anesthesia: currentLang === 'ar' ? 'تخدير عام' : currentLang === 'en' ? 'General' : 'Anesthésie Générale',
          hospitalStay: currentLang === 'ar' ? 'ليلة واحدة' : currentLang === 'en' ? '1 night' : '24h d’hospitalisation',
          description: currentLang === 'ar'
            ? 'إعادة تموضع العضلات والأنسجة العميقة لأسفل الوجه والرقبة للحصول على مظهر أصغر بـ 10 إلى 15 عاماً بنتيجة طبيعية تدوم طويلاً.'
            : currentLang === 'en'
            ? 'Deep structural tissue redraping addressing jowls, jawline, and neck laxity with profound long-term rejuvenation.'
            : 'Repositionnement profond des structures musculaires et cutanées de l’ovale du visage et du cou pour un rajeunissement durable.',
          keyBenefits: [
            currentLang === 'ar' ? 'شد البنية العميقة دون شد مفرط للجلد الخارجي' : currentLang === 'en' ? 'Deep structural suspension without stretched skin effect' : 'Effet tenseur naturel sans aspect "tiré"',
            currentLang === 'ar' ? 'إعادة رسم خط الفك والرقبة بدقة متناهية' : currentLang === 'en' ? 'Redefined crisp mandibular angle and neck profile' : 'Redéfinition nette de la mâchoire et du cou',
            currentLang === 'ar' ? 'نتائج مستدامة لأكثر من 10 سنوات' : currentLang === 'en' ? 'Long-lasting natural rejuvenation (10+ years)' : 'Résultats pérennes et stables sur le long terme'
          ]
        },
        {
          id: 'lipofilling',
          name: currentLang === 'ar' ? 'حقن الدهون الذاتية وتجديد الخلايا (Lipofilling)' : currentLang === 'en' ? 'Micro-Lipofilling & Fat Transfer' : 'Lipofilling & Nano-Fat Visage',
          category: currentLang === 'ar' ? 'تجديد الحجم والنضارة' : currentLang === 'en' ? 'Volume & Regenerative' : 'Volumétrie & Régénération',
          recoveryTime: currentLang === 'ar' ? '5 إلى 7 أيام' : currentLang === 'en' ? '5 to 7 days' : '5 à 7 jours',
          anesthesia: currentLang === 'ar' ? 'تخدير موضعي أو عام خفيف' : currentLang === 'en' ? 'Local or twilight' : 'Locale assistée',
          hospitalStay: currentLang === 'ar' ? 'عيادة نهارية' : currentLang === 'en' ? 'Outpatient' : 'Ambulatoire',
          description: currentLang === 'ar'
            ? 'استخلاص خلايا دهنية ذاتية نقية لإعادة ملء الوجنتين والصدغين وتحفيز كولاجين البشرة طبيعياً 100%.'
            : currentLang === 'en'
            ? 'Autologous fat transfer restoring hollowed temples, cheekbones, and stimulating dermal stem cells organically.'
            : 'Restauration des volumes perdus (pommettes, cernes, tempes) grâce à vos propres cellules graisseuses purifiées.',
          keyBenefits: [
            currentLang === 'ar' ? 'مادة طبيعية 100% مستخلصة من جسم المريض' : currentLang === 'en' ? '100% biocompatible autologous tissue' : 'Produit 100% naturel et autologue (aucun corps étranger)',
            currentLang === 'ar' ? 'تحسين ملحوظ في جودة ونضارة نسيج البشرة' : currentLang === 'en' ? 'Stem cell regenerative boost to skin glow' : 'Amélioration de l’éclat et de la texture cutanée',
            currentLang === 'ar' ? 'ثبات دائم للحجم المحقون بعد الاندماج' : currentLang === 'en' ? 'Permanent volumetric retention' : 'Stabilité volumétrique définitive après prise'
          ]
        }
      ]
    },
    breast: {
      id: 'breast',
      name: currentLang === 'ar' ? 'جراحة الثدي والأنوثة' : currentLang === 'en' ? 'Breast Aesthetics' : 'Esthétique du Sein',
      iconLabel: currentLang === 'ar' ? 'تجميل الصدر' : currentLang === 'en' ? 'Breast Surgery' : 'Chirurgie Mammaire',
      summary: currentLang === 'ar'
        ? 'تصميم تناغم مثالي للثديين وفقاً للبنية الجسمانية مع أحدث الغرسات الطبية المعتمدة دولياً.'
        : currentLang === 'en'
        ? 'Sculpting balanced, proportional breast silhouettes using state-of-the-art certified implants or natural tissue sculpting.'
        : 'Sublimation de la silhouette mammaire, rééquilibrage proportionnel et prothèses médicales de haute sécurité.',
      hotspots: [
        { id: 'h-aug', label: currentLang === 'ar' ? 'تكبير الثدي' : currentLang === 'en' ? 'Augmentation' : 'Augmentation Mammaire', x: 38, y: 46, procedureRef: 'augmentation' },
        { id: 'h-lift-br', label: currentLang === 'ar' ? 'شد ورفع الثدي' : currentLang === 'en' ? 'Breast Lift' : 'Lifting Mammaire', x: 62, y: 46, procedureRef: 'mastopexy' },
        { id: 'h-red', label: currentLang === 'ar' ? 'تصغير الثدي' : currentLang === 'en' ? 'Reduction' : 'Réduction Mammaire', x: 50, y: 56, procedureRef: 'reduction' }
      ],
      procedures: [
        {
          id: 'augmentation',
          name: currentLang === 'ar' ? 'تكبير الثدي بالغرسات الدقيقة أو الدهون' : currentLang === 'en' ? 'Breast Augmentation (Implants / Hybrid)' : 'Augmentation Mammaire (Prothèses & Hybride)',
          category: currentLang === 'ar' ? 'زيادة الحجم والتناسق' : currentLang === 'en' ? 'Volume Enhancement' : 'Galbe & Volume',
          recoveryTime: currentLang === 'ar' ? '7 إلى 10 أيام' : currentLang === 'en' ? '7 to 10 days' : '7 à 10 jours',
          anesthesia: currentLang === 'ar' ? 'تخدير عام' : currentLang === 'en' ? 'General' : 'Anesthésie Générale',
          hospitalStay: currentLang === 'ar' ? '24 ساعة' : currentLang === 'en' ? '1 day' : 'Ambulatoire / 24h',
          description: currentLang === 'ar'
            ? 'تكبير وتنسيق حجم الثديين باستخدام غرسات سيليكونية عالية الأمان والجودة أو بتقنية الحقن الهجين للحصول على ملمس فائق الطبيعية.'
            : currentLang === 'en'
            ? 'Enhancement of breast contour and cleavage using medical-grade cohesive gel implants tailored to your proportions.'
            : 'Augmentation du volume et du décolleté avec des implants en gel de silicone cohésif de dernière génération ou par lipofilling.',
          keyBenefits: [
            currentLang === 'ar' ? 'غرسات معتمدة دولياً ومسجلة طبياً بأعلى معايير الأمان' : currentLang === 'en' ? 'FDA/CE approved cohesive gel implants' : 'Implants hautement sécurisés avec traçabilité médicale',
            currentLang === 'ar' ? 'ندبات جراحية دقيقة ومخفية في الثنية تحت الثدي' : currentLang === 'en' ? 'Minimal scar placed discretely in inframammary fold' : 'Incision discrète dissimulée dans le sillon sous-mammaire',
            currentLang === 'ar' ? 'ملمس ناعم وطبيعي يتوافق مع حركة الجسم' : currentLang === 'en' ? 'Natural dynamic movement and soft tactile feel' : 'Toucher souple et résultat dynamique très naturel'
          ]
        },
        {
          id: 'mastopexy',
          name: currentLang === 'ar' ? 'شد ورفع الثدي المترهل (Mastopexie)' : currentLang === 'en' ? 'Breast Lift (Mastopexy)' : 'Lifting Mammaire (Mastopexie)',
          category: currentLang === 'ar' ? 'رفع وتثبيت' : currentLang === 'en' ? 'Firming & Lift' : 'Remodelage & Rehaussement',
          recoveryTime: currentLang === 'ar' ? '8 إلى 12 يوماً' : currentLang === 'en' ? '8 to 12 days' : '8 à 12 jours',
          anesthesia: currentLang === 'ar' ? 'تخدير عام' : currentLang === 'en' ? 'General' : 'Anesthésie Générale',
          hospitalStay: currentLang === 'ar' ? '24 ساعة' : currentLang === 'en' ? '1 day' : '24h',
          description: currentLang === 'ar'
            ? 'إعادة رفع الحلمة وإزالة الجلد الزائد وشد غدة الثدي لاستعادة الشكل المشدود والأنثوي بعد الحمل أو خسارة الوزن.'
            : currentLang === 'en'
            ? 'Elevation of sagging breast tissue, nipple repositioning, and skin tightening for a youthful conical contour.'
            : 'Repositionnement de l’aréole et remodelage de la glande mammaire pour corriger la ptôse et retrouver un galbe ferme.',
          keyBenefits: [
            currentLang === 'ar' ? 'استعادة الشكل الأنثوي المشدود بدون إفراط' : currentLang === 'en' ? 'Restores youthful perkiness and projection' : 'Décolleté regalbé et poitrine visiblement raffermie',
            currentLang === 'ar' ? 'إمكانية دمجه مع تكبير الحجم أو بدون غرسات' : currentLang === 'en' ? 'Can be performed with or without implants' : 'Réalisable avec ou sans adjonction d’implants',
            currentLang === 'ar' ? 'راحة كبيرة وتناسق ممتاز مع حمالات الملابس' : currentLang === 'en' ? 'Enhanced wardrobe fit and daily comfort' : 'Confort postural et maintien vestimentaire optimisé'
          ]
        },
        {
          id: 'reduction',
          name: currentLang === 'ar' ? 'تصغير الثدي الوظيفي والجمالي' : currentLang === 'en' ? 'Breast Reduction (Functional & Aesthetic)' : 'Réduction Mammaire Plastique',
          category: currentLang === 'ar' ? 'تخفيف الوزن والتنسيق' : currentLang === 'en' ? 'Reduction & Comfort' : 'Soulagement & Harmonie',
          recoveryTime: currentLang === 'ar' ? '10 إلى 14 يوماً' : currentLang === 'en' ? '10 to 14 days' : '10 à 14 jours',
          anesthesia: currentLang === 'ar' ? 'تخدير عام' : currentLang === 'en' ? 'General' : 'Anesthésie Générale',
          hospitalStay: currentLang === 'ar' ? '24 ساعة' : currentLang === 'en' ? '1 night' : '24h',
          description: currentLang === 'ar'
            ? 'تخفيف حجم ووزن الثديين لتخفيف آلام الظهر والرقبة مع إعادة تشكيل ثدي متناسق ومريح في الحركة.'
            : currentLang === 'en'
            ? 'Excision of redundant glandular and fatty tissue, relieving chronic upper back strain and balancing the frame.'
            : 'Diminution du volume mammaire excessif pour soulager les douleurs dorsales et redonner une silhouette harmonieuse.',
          keyBenefits: [
            currentLang === 'ar' ? 'تخلص فوري من آلام الرقبة والكتفين والظهر' : currentLang === 'en' ? 'Instant relief from postural pain and bra indentation' : 'Soulagement immédiat des tensions cervicales et dorsales',
            currentLang === 'ar' ? 'حرية كاملة في ممارسة الرياضة والأنشطة البدنية' : currentLang === 'en' ? 'Restored athletic agility and lifestyle ease' : 'Liberté retrouvée dans les activités physiques et le sport',
            currentLang === 'ar' ? 'مظهر رشيق ومتوازن متناسب مع القامة' : currentLang === 'en' ? 'Harmonious physical proportions and confidence' : 'Silhouette affinée et équilibrée avec le corps'
          ]
        }
      ]
    },
    body: {
      id: 'body',
      name: currentLang === 'ar' ? 'نحت القوام والخصر' : currentLang === 'en' ? 'Body Contouring & Core' : 'Silhouette & Corps',
      iconLabel: currentLang === 'ar' ? 'تناسق الجسم' : currentLang === 'en' ? 'Body Contouring' : 'Sculpture Corporelle',
      summary: currentLang === 'ar'
        ? 'نحت رياضي دقيق للدهون وشد عضلات البطن لإبراز الخصر والمنحنيات الطبيعية بأعلى معايير السلامة.'
        : currentLang === 'en'
        ? 'Targeted definition of abdominal contour, waistline curve, and skin redraping with athletic precision.'
        : 'Remodelage 3D haute définition, affinement de la taille et remise en tension cutanée.',
      hotspots: [
        { id: 'h-lipo', label: currentLang === 'ar' ? 'نحت الخصر' : currentLang === 'en' ? 'Liposculpture' : 'Lipoaspiration HD', x: 50, y: 48, procedureRef: 'liposculpture' },
        { id: 'h-abdo', label: currentLang === 'ar' ? 'شد البطن' : currentLang === 'en' ? 'Tummy Tuck' : 'Abdominoplastie', x: 50, y: 58, procedureRef: 'abdominoplasty' },
        { id: 'h-bbl', label: currentLang === 'ar' ? 'حقن المؤخرة' : currentLang === 'en' ? 'BBL / Curves' : 'Lipofilling Fessier', x: 50, y: 72, procedureRef: 'bbl' }
      ],
      procedures: [
        {
          id: 'liposculpture',
          name: currentLang === 'ar' ? 'شفط ونحت الدهون عالي الدقة (Lipo HD / VASER)' : currentLang === 'en' ? 'High-Definition Liposculpture (VASER)' : 'Liposculpture Haute Définition (HD)',
          category: currentLang === 'ar' ? 'نحت الدهون' : currentLang === 'en' ? 'Fat Removal' : 'Aspiration Ciblée',
          recoveryTime: currentLang === 'ar' ? '5 إلى 7 أيام' : currentLang === 'en' ? '5 to 7 days' : '5 à 7 jours',
          anesthesia: currentLang === 'ar' ? 'تخدير عام أو نصفي' : currentLang === 'en' ? 'General / Epidural' : 'Anesthésie Générale / Rachis',
          hospitalStay: currentLang === 'ar' ? 'عيادة نهارية أو 24 ساعة' : currentLang === 'en' ? 'Outpatient or 1 night' : 'Ambulatoire / 24h',
          description: currentLang === 'ar'
            ? 'تفريغ الدهون العنيدة حول البطن والخصر والظهر مع إبراز الخطوط الرياضية الطبيعية للجسم.'
            : currentLang === 'en'
            ? 'Micro-cannula selective fat aspiration defining waist contours and natural athletic muscle shadow lines.'
            : 'Aspiration ciblée des surcharges graisseuses localisées (ventre, hanches, cuisses) avec mise en valeur des galbes.',
          keyBenefits: [
            currentLang === 'ar' ? 'إزالة دائمة للخلايا الدهنية التي تقاوم الحمية والرياضة' : currentLang === 'en' ? 'Permanent eradication of stubborn adipocytes' : 'Élimination définitive des cellules adipeuses résistantes',
            currentLang === 'ar' ? 'ثقوب مجهرية صغيرة جداً تلتئم دون أثر ملحوظ' : currentLang === 'en' ? 'Micro-incisions that fade rapidly' : 'Micro-incisions millimétriques invisibles à terme',
            currentLang === 'ar' ? 'إبراز الخصر والمنحنيات الرياضية المتناسقة' : currentLang === 'en' ? 'Sculpted hourglass or athletic silhouette' : 'Affinement immédiat de la taille et des contours'
          ]
        },
        {
          id: 'abdominoplasty',
          name: currentLang === 'ar' ? 'شد وتجميل جدار البطن (Abdominoplastie)' : currentLang === 'en' ? 'Full & Mini Abdominoplasty' : 'Abdominoplastie & Cure de Diastasis',
          category: currentLang === 'ar' ? 'شد الجدار العضلي' : currentLang === 'en' ? 'Core Muscle Repair' : 'Remise en Tension',
          recoveryTime: currentLang === 'ar' ? '12 إلى 15 يوماً' : currentLang === 'en' ? '12 to 15 days' : '12 à 15 jours',
          anesthesia: currentLang === 'ar' ? 'تخدير عام' : currentLang === 'en' ? 'General' : 'Anesthésie Générale',
          hospitalStay: currentLang === 'ar' ? '24 إلى 48 ساعة' : currentLang === 'en' ? '24-48 hours' : '24 à 48h',
          description: currentLang === 'ar'
            ? 'إزالة الترهل الجلدي للبطن وإصلاح تباعد عضلات البطن (Diastasis) بعد الولادات أو فقدان الوزن الكبير.'
            : currentLang === 'en'
            ? 'Excision of lower abdominal apron skin, rectus diastasis plication, and navel transposition creating a flat, tight core.'
            : 'Retrait du tablier cutané relâché, resserrement des muscles abdominaux écartés et création d’un ventre plat et ferme.',
          keyBenefits: [
            currentLang === 'ar' ? 'بطن مسطح ومشدود مع خصر منحوت' : currentLang === 'en' ? 'Firm, flat abdominal wall and restored core tone' : 'Ventre plat et galbé avec redéfinition du nombril',
            currentLang === 'ar' ? 'علاج تباعد العضلات وتحسين قوة الظهر والوقوف' : currentLang === 'en' ? 'Correction of rectus diastasis and posture stabilization' : 'Correction du diastasis et renforcement du maintien postural',
            currentLang === 'ar' ? 'ندبة منخفضة مخفية تماماً داخل خط الملابس الداخلية' : currentLang === 'en' ? 'Low bikini line scar hidden under swimwear' : 'Cicatrice basse totalement dissimulée dans le sous-vêtement'
          ]
        },
        {
          id: 'bbl',
          name: currentLang === 'ar' ? 'نحت وتدوير المؤخرة بالدهون الذاتية (Lipofilling / BBL)' : currentLang === 'en' ? 'Natural Brazilian Butt Lift (Safe BBL)' : 'Lipofilling Fessier / BBL Sécurisé',
          category: currentLang === 'ar' ? 'حقن وتناسق الدهون' : currentLang === 'en' ? 'Subcutaneous Fat Transfer' : 'Galbe & Volumétrie',
          recoveryTime: currentLang === 'ar' ? '10 إلى 14 يوماً' : currentLang === 'en' ? '10 to 14 days' : '10 à 14 jours',
          anesthesia: currentLang === 'ar' ? 'تخدير عام' : currentLang === 'en' ? 'General' : 'Anesthésie Générale',
          hospitalStay: currentLang === 'ar' ? '24 ساعة' : currentLang === 'en' ? '24 hours' : '24h',
          description: currentLang === 'ar'
            ? 'حقن الدهون الذاتية المصفاة في الطبقة تحت الجلد وفق البروتوكول الطبي الآمن لتعزيز الامتلاء والانحناء الطبيعي.'
            : currentLang === 'en'
            ? 'Subcutaneous micro-fat grafting to improve projection, curvature, and lateral hip dip balance with strict safety protocols.'
            : 'Réinjection sous-cutanée de votre propre graisse purifiée pour projeter et galber les courbes en toute sécurité.',
          keyBenefits: [
            currentLang === 'ar' ? 'حقن آمن 100% سطحي تحت الجلد بدون ملامسة العضلات' : currentLang === 'en' ? 'Strict superficial subcutaneous grafting safety protocol' : 'Protocole de sécurité strict (injection sous-cutanée)',
            currentLang === 'ar' ? 'قوام الساعة الرملية وتناسق متكامل مع الخصر' : currentLang === 'en' ? 'Harmonious waist-to-hip ratio sculpting' : 'Harmonie globale de la silhouette et taille affinée',
            currentLang === 'ar' ? 'ملمس طبيعي تماماً مع تحسين جودة الجلد' : currentLang === 'en' ? 'Completely natural touch and texture' : 'Résultat souple et texture 100% naturelle'
          ]
        }
      ]
    }
  };

  const currentRegion = anatomyData[selectedZone];
  const activeProcedure = currentRegion.procedures.find((p) => p.id === activeProcedureId) || currentRegion.procedures[0];

  const handleZoneSwitch = (zone: 'face' | 'breast' | 'body') => {
    setSelectedZone(zone);
    setActiveProcedureId(anatomyData[zone].procedures[0].id);
  };

  const handleDirectConsult = (procedureName: string) => {
    const serviceSelect = document.getElementById('patientService') as HTMLSelectElement | null;
    if (serviceSelect) {
      serviceSelect.value = procedureName;
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
  };

  return (
    <section id="anatomy-guide" className={`py-20 lg:py-28 transition-colors duration-300 ${
      isDarkMode ? 'bg-[#0A1826] text-slate-100' : 'bg-[#F6F4EE] text-[#1E293B]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${
            isDarkMode 
              ? 'bg-[#183654] border-[#C5A880]/40 text-[#E4D1B9]' 
              : 'bg-[#FAF0E4] border-[#E9DAC6] text-[#8C6D45]'
          }`}>
            <Activity className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>{currentLang === 'ar' ? 'دليل التشريح التفاعلي' : currentLang === 'en' ? 'Interactive 3D Anatomy Guide' : 'Guide Anatomique Interactif'}</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-[#0F2438]'
          } ${currentLang === 'ar' ? 'font-arabic-heading' : 'font-heading'}`}>
            {currentLang === 'ar'
              ? 'استكشف الإجراءات حسب المنطقة التشريحية'
              : currentLang === 'en'
              ? 'Explore Surgical Procedures by Anatomical Zone'
              : 'Explorez les Interventions par Zone Anatomique'}
          </h2>

          <p className={`text-sm sm:text-base leading-relaxed ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {currentLang === 'ar'
              ? 'انقر على المناطق التشريحية أدناه لاستكشاف أدق التفاصيل الجراحية، فترات النقاهة، والنتائج المتوقعة المصممة بدقة علمية وأمان عالي.'
              : currentLang === 'en'
              ? 'Select an anatomical region to discover tailored surgical techniques, expected recovery windows, and surgical safety protocols.'
              : 'Sélectionnez une région anatomique pour explorer en détail les techniques chirurgicales adaptées, les temps de récupération et les garanties de sécurité.'}
          </p>
        </div>

        {/* Zone Switcher Tabs */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10 overflow-x-auto pb-2">
          <button
            type="button"
            onClick={() => handleZoneSwitch('face')}
            className={`flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-xs ${
              selectedZone === 'face'
                ? 'bg-[#C5A880] text-[#0A1A28] shadow-md scale-102'
                : isDarkMode
                ? 'bg-[#0F2438] text-slate-300 hover:text-white border border-[#1E3850]'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#0A1A28] inline-block" />
            <span>{anatomyData.face.name}</span>
          </button>

          <button
            type="button"
            onClick={() => handleZoneSwitch('breast')}
            className={`flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-xs ${
              selectedZone === 'breast'
                ? 'bg-[#C5A880] text-[#0A1A28] shadow-md scale-102'
                : isDarkMode
                ? 'bg-[#0F2438] text-slate-300 hover:text-white border border-[#1E3850]'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#0A1A28] inline-block" />
            <span>{anatomyData.breast.name}</span>
          </button>

          <button
            type="button"
            onClick={() => handleZoneSwitch('body')}
            className={`flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer shadow-xs ${
              selectedZone === 'body'
                ? 'bg-[#C5A880] text-[#0A1A28] shadow-md scale-102'
                : isDarkMode
                ? 'bg-[#0F2438] text-slate-300 hover:text-white border border-[#1E3850]'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#0A1A28] inline-block" />
            <span>{anatomyData.body.name}</span>
          </button>
        </div>

        {/* Interactive Master Grid */}
        <div className={`rounded-3xl border shadow-xl overflow-hidden p-6 sm:p-10 transition-colors ${
          isDarkMode 
            ? 'bg-[#0D2133] border-[#1E3B56]' 
            : 'bg-white border-slate-200/90'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: High-Precision Clinical Vector Anatomical Stage */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center select-none">
              
              <div className={`relative w-full max-w-sm aspect-[4/5] rounded-2xl border p-6 flex flex-col items-center justify-between overflow-hidden shadow-inner ${
                isDarkMode 
                  ? 'bg-gradient-to-b from-[#091724] to-[#0D263B] border-[#1C3E5E]' 
                  : 'bg-gradient-to-b from-[#FAF8F5] to-[#F1ECE4] border-[#E3D9CC]'
              }`}>
                
                {/* Stage Header Info Badge */}
                <div className="w-full flex items-center justify-between text-xs z-10">
                  <span className={`px-2.5 py-1 rounded-md font-bold uppercase tracking-wider text-[10px] border ${
                    isDarkMode ? 'bg-[#142E47] text-[#C5A880] border-[#224A6F]' : 'bg-white text-[#8C6D45] border-[#EBE1D3]'
                  }`}>
                    {currentRegion.iconLabel}
                  </span>
                  <span className={`text-[11px] font-semibold flex items-center gap-1 ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-500'
                  }`}>
                    <Info className="w-3.5 h-3.5 text-[#C5A880]" />
                    {currentLang === 'ar' ? 'انقر على النقاط' : currentLang === 'en' ? 'Click hotspot nodes' : 'Cliquez sur les points'}
                  </span>
                </div>

                {/* Central Anatomical Vector Render */}
                <div className="relative w-full flex-1 flex items-center justify-center my-2">
                  
                  {/* SVG Anatomical Model Base */}
                  {selectedZone === 'face' && (
                    <svg viewBox="0 0 240 300" className="w-full h-full max-h-[260px] drop-shadow-md text-[#C5A880]" fill="none" stroke="currentColor">
                      {/* Stylized Face Contours */}
                      <path d="M 60,60 C 60,20 180,20 180,60 C 180,140 160,240 120,270 C 80,240 60,140 60,60 Z" strokeWidth="2" strokeDasharray="3 3" opacity="0.4" />
                      <ellipse cx="120" cy="130" rx="55" ry="85" strokeWidth="2.5" className={isDarkMode ? 'stroke-[#3B668C]' : 'stroke-[#C5A880]'} fill={isDarkMode ? '#0F263B' : '#FFFFFF'} fillOpacity="0.6" />
                      {/* Brow & Eye Guides */}
                      <path d="M 85,105 Q 100,98 112,105" strokeWidth="2" strokeLinecap="round" />
                      <path d="M 128,105 Q 140,98 155,105" strokeWidth="2" strokeLinecap="round" />
                      <ellipse cx="98" cy="112" rx="10" ry="4" strokeWidth="1.5" />
                      <ellipse cx="142" cy="112" rx="10" ry="4" strokeWidth="1.5" />
                      {/* Nose Dorsum & Base */}
                      <path d="M 120,108 L 118,142 L 112,148 L 128,148 L 122,142 Z" strokeWidth="2" strokeLinejoin="round" fill={isDarkMode ? '#1E456A' : '#F7EFE6'} />
                      {/* Lips & Mandibular line */}
                      <path d="M 102,175 Q 120,168 138,175 Q 120,186 102,175 Z" strokeWidth="2" fill={isDarkMode ? '#24527D' : '#EFE4D6'} />
                      <path d="M 95,225 Q 120,245 145,225" strokeWidth="1.5" strokeDasharray="2 2" />
                      {/* Aesthetic Golden Ratio Proportional Guides */}
                      <line x1="45" y1="105" x2="195" y2="105" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.3" />
                      <line x1="45" y1="148" x2="195" y2="148" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.3" />
                      <line x1="45" y1="175" x2="195" y2="175" strokeWidth="0.75" strokeDasharray="4 4" opacity="0.3" />
                    </svg>
                  )}

                  {selectedZone === 'breast' && (
                    <svg viewBox="0 0 240 300" className="w-full h-full max-h-[260px] drop-shadow-md text-[#C5A880]" fill="none" stroke="currentColor">
                      {/* Neck & Clavicle Frame */}
                      <path d="M 90,40 L 90,80 Q 120,95 150,80 L 150,40" strokeWidth="2" opacity="0.5" />
                      <path d="M 50,85 Q 120,105 190,85" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
                      {/* Torso & Breast Contours */}
                      <path d="M 55,100 Q 50,220 70,270 L 170,270 Q 190,220 185,100" strokeWidth="1.5" opacity="0.4" />
                      {/* Left Breast Dome */}
                      <circle cx="92" cy="155" r="42" strokeWidth="2.5" className={isDarkMode ? 'stroke-[#3B668C]' : 'stroke-[#C5A880]'} fill={isDarkMode ? '#0F263B' : '#FFFFFF'} fillOpacity="0.7" />
                      <circle cx="92" cy="155" r="8" strokeWidth="2" fill={isDarkMode ? '#24527D' : '#EFE4D6'} />
                      {/* Right Breast Dome */}
                      <circle cx="148" cy="155" r="42" strokeWidth="2.5" className={isDarkMode ? 'stroke-[#3B668C]' : 'stroke-[#C5A880]'} fill={isDarkMode ? '#0F263B' : '#FFFFFF'} fillOpacity="0.7" />
                      <circle cx="148" cy="155" r="8" strokeWidth="2" fill={isDarkMode ? '#24527D' : '#EFE4D6'} />
                      {/* Inframammary Fold Curvature Lines */}
                      <path d="M 60,185 Q 92,205 115,185" strokeWidth="2" strokeLinecap="round" />
                      <path d="M 125,185 Q 148,205 180,185" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  )}

                  {selectedZone === 'body' && (
                    <svg viewBox="0 0 240 300" className="w-full h-full max-h-[260px] drop-shadow-md text-[#C5A880]" fill="none" stroke="currentColor">
                      {/* Sculpted Torso & Waist Outline */}
                      <path
                        d="M 65,40 C 95,45 145,45 175,40 C 170,80 180,110 160,140 C 145,160 148,190 178,230 C 185,240 180,275 165,290 C 135,270 105,270 75,290 C 60,275 55,240 62,230 C 92,190 95,160 80,140 C 60,110 70,80 65,40 Z"
                        strokeWidth="2.5"
                        className={isDarkMode ? 'stroke-[#3B668C]' : 'stroke-[#C5A880]'}
                        fill={isDarkMode ? '#0F263B' : '#FFFFFF'}
                        fillOpacity="0.7"
                      />
                      {/* Abdominal Muscle & Diastasis Midline Guides */}
                      <line x1="120" y1="60" x2="120" y2="230" strokeWidth="2" strokeDasharray="3 3" opacity="0.7" />
                      {/* Navel */}
                      <ellipse cx="120" cy="180" rx="3.5" ry="5" strokeWidth="2" fill={isDarkMode ? '#C5A880' : '#8C6D45'} />
                      {/* Muscle Inscription Lines (6-pack shadow guides) */}
                      <path d="M 98,110 Q 120,118 142,110" strokeWidth="1.5" opacity="0.6" />
                      <path d="M 98,145 Q 120,155 142,145" strokeWidth="1.5" opacity="0.6" />
                      <path d="M 96,215 Q 120,230 144,215" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                    </svg>
                  )}

                  {/* Interactive Hotspot Nodes overlaid on Top */}
                  {currentRegion.hotspots.map((spot) => {
                    const isSpotActive = activeProcedureId === spot.procedureRef;
                    const isSpotHovered = hoveredHotspot === spot.id;

                    return (
                      <button
                        key={spot.id}
                        type="button"
                        onClick={() => setActiveProcedureId(spot.procedureRef)}
                        onMouseEnter={() => setHoveredHotspot(spot.id)}
                        onMouseLeave={() => setHoveredHotspot(null)}
                        style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                        className="absolute -translate-x-1/2 -translate-y-1/2 group z-20 focus:outline-none cursor-pointer"
                        aria-label={spot.label}
                      >
                        {/* Pulsing Aura */}
                        <div
                          className={`absolute -inset-2.5 rounded-full transition-all duration-300 ${
                            isSpotActive
                              ? 'bg-[#C5A880]/40 animate-ping'
                              : isSpotHovered
                              ? 'bg-[#C5A880]/30'
                              : 'bg-transparent'
                          }`}
                        />

                        {/* Node Pin */}
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all shadow-md ${
                            isSpotActive
                              ? 'bg-[#C5A880] border-white text-[#0A1A28] scale-120'
                              : 'bg-[#0F2438] border-[#C5A880] text-[#C5A880] hover:scale-115'
                          }`}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-current" />
                        </div>

                        {/* Node Label Tooltip */}
                        <span
                          className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold whitespace-nowrap shadow-lg transition-all duration-200 border ${
                            isSpotActive || isSpotHovered
                              ? 'opacity-100 translate-y-0 bg-[#0F2438] text-white border-[#C5A880]'
                              : 'opacity-0 translate-y-1 pointer-events-none bg-[#0F2438]/90 text-slate-200 border-white/10'
                          }`}
                        >
                          {spot.label}
                        </span>
                      </button>
                    );
                  })}

                </div>

                {/* Bottom Stage Legend / Active Tag */}
                <div className="w-full text-center z-10 pt-2 border-t border-black/10 dark:border-white/10">
                  <span className={`text-xs font-semibold ${isDarkMode ? 'text-[#C5A880]' : 'text-[#8C6D45]'}`}>
                    ● {activeProcedure.name}
                  </span>
                </div>

              </div>

            </div>

            {/* Right Column: Dynamic Procedure Factsheet & Clinical Metric Spec */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Procedure Selector Pill List */}
              <div className="flex flex-wrap items-center gap-2 pb-2">
                {currentRegion.procedures.map((proc) => {
                  const isSelected = activeProcedureId === proc.id;
                  return (
                    <button
                      key={proc.id}
                      type="button"
                      onClick={() => setActiveProcedureId(proc.id)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[#0F2438] text-[#C5A880] border-[#C5A880] shadow-xs'
                          : isDarkMode
                          ? 'bg-[#132A3E] text-slate-300 border-[#1E3B56] hover:text-white'
                          : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                      }`}
                    >
                      {proc.name.split('(')[0]}
                    </button>
                  );
                })}
              </div>

              {/* Active Procedure Details Header */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#C5A880] uppercase tracking-widest">
                    {activeProcedure.category}
                  </span>
                  <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-bold border ${
                    isDarkMode ? 'bg-[#142E47] text-emerald-300 border-emerald-800/80' : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  }`}>
                    {currentLang === 'ar' ? 'معايير سريرية معتمدة' : currentLang === 'en' ? 'Accredited Clinical Protocol' : 'Protocole Accrédité'}
                  </span>
                </div>

                <h3 className={`text-2xl sm:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-[#0F2438]'} ${currentLang === 'ar' ? 'font-arabic-heading' : 'font-heading'}`}>
                  {activeProcedure.name}
                </h3>

                <p className={`text-sm sm:text-base leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {activeProcedure.description}
                </p>
              </div>

              {/* Fast Clinical Quick-Facts Matrix (3 Stats) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className={`p-3.5 rounded-xl border text-left rtl:text-right ${
                  isDarkMode ? 'bg-[#0F2438] border-[#1E3850]' : 'bg-[#FAF9F6] border-slate-200'
                }`}>
                  <span className="text-[11px] text-slate-400 block mb-0.5">
                    {currentLang === 'ar' ? 'فترة النقاهة' : currentLang === 'en' ? 'Recovery Time' : 'Récupération'}
                  </span>
                  <span className={`text-xs sm:text-sm font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {activeProcedure.recoveryTime}
                  </span>
                </div>

                <div className={`p-3.5 rounded-xl border text-left rtl:text-right ${
                  isDarkMode ? 'bg-[#0F2438] border-[#1E3850]' : 'bg-[#FAF9F6] border-slate-200'
                }`}>
                  <span className="text-[11px] text-slate-400 block mb-0.5">
                    {currentLang === 'ar' ? 'نوع التخدير' : currentLang === 'en' ? 'Anesthesia' : 'Anesthésie'}
                  </span>
                  <span className={`text-xs sm:text-sm font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {activeProcedure.anesthesia}
                  </span>
                </div>

                <div className={`p-3.5 rounded-xl border text-left rtl:text-right ${
                  isDarkMode ? 'bg-[#0F2438] border-[#1E3850]' : 'bg-[#FAF9F6] border-slate-200'
                }`}>
                  <span className="text-[11px] text-slate-400 block mb-0.5">
                    {currentLang === 'ar' ? 'مدة الإقامة' : currentLang === 'en' ? 'Hospital Stay' : 'Séjour Clinique'}
                  </span>
                  <span className={`text-xs sm:text-sm font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    {activeProcedure.hospitalStay}
                  </span>
                </div>
              </div>

              {/* Key Surgical Assurances & Benefits */}
              <div className={`p-4 rounded-xl border space-y-2.5 ${
                isDarkMode ? 'bg-[#0F2438] border-[#1E3850]' : 'bg-[#FAF9F6] border-slate-200'
              }`}>
                <h4 className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                  {currentLang === 'ar' ? 'النتائج والمزايا الجراحية' : currentLang === 'en' ? 'Surgical Highlights & Outcomes' : 'Bénéfices & Précision Chirurgicale'}
                </h4>
                <div className="space-y-2">
                  {activeProcedure.keyBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                      <span className={isDarkMode ? 'text-slate-200' : 'text-slate-700'}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Booking Link for Active Procedure */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleDirectConsult(activeProcedure.name)}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#C5A880] hover:bg-[#D4B78F] text-[#0A1A28] text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>
                    {currentLang === 'ar'
                      ? `حجز استشارة حول: ${activeProcedure.name.split('(')[0]}`
                      : currentLang === 'en'
                      ? `Book Consultation for: ${activeProcedure.name.split('(')[0]}`
                      : `Consulter pour : ${activeProcedure.name.split('(')[0]}`}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('gallery');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-3.5 px-5 rounded-xl text-xs sm:text-sm font-semibold border transition-colors cursor-pointer ${
                    isDarkMode 
                      ? 'bg-[#142E47] hover:bg-[#1B3D5D] text-slate-200 border-[#23486A]' 
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{currentLang === 'ar' ? 'معرض الصور' : currentLang === 'en' ? 'View Results' : 'Voir Résultats'}</span>
                  {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
