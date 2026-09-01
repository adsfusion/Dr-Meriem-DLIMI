export type Language = 'fr' | 'ar' | 'en';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  details: string[];
  duration?: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TrustPillar {
  title: string;
  description: string;
  iconName: string;
}

export interface TranslationContent {
  metaTitle: string;
  metaDesc: string;
  nav: {
    services: string;
    about: string;
    reviews: string;
    faq: string;
    location: string;
    bookConsultation: string;
    callNow: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badgeText: string;
    statsRating: string;
    statsReviews: string;
    statsExperience: string;
    statsExperienceLabel: string;
    statsSatisfaction: string;
    statsSatisfactionLabel: string;
  };
  trustBar: {
    ratingTitle: string;
    ratingSubtitle: string;
    pillars: TrustPillar[];
  };
  servicesSection: {
    badge: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
    ctaCardTitle: string;
    ctaCardText: string;
    ctaCardBtn: string;
  };
  aboutSection: {
    badge: string;
    title: string;
    doctorName: string;
    doctorTitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    qualifications: string[];
    philosophyTitle: string;
    philosophyText: string;
    clinicTitle: string;
    clinicText: string;
  };
  reviewsSection: {
    badge: string;
    title: string;
    subtitle: string;
    googleRatingText: string;
    basedOn: string;
    viewGoogleReviews: string;
    items: TestimonialItem[];
  };
  faqSection: {
    badge: string;
    title: string;
    subtitle: string;
    items: FaqItem[];
  };
  locationSection: {
    badge: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    addressValue: string;
    phoneLabel: string;
    hoursLabel: string;
    hoursValueWeek: string;
    hoursValueSat: string;
    hoursValueSun: string;
    directionsBtn: string;
    openMapsBtn: string;
    parkingNotice: string;
  };
  bookingSection: {
    badge: string;
    title: string;
    subtitle: string;
    formTitle: string;
    formDesc: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    serviceSelectDefault: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitBtn: string;
    privacyNote: string;
    directCallText: string;
  };
  footer: {
    aboutSnippet: string;
    quickLinks: string;
    servicesTitle: string;
    contactTitle: string;
    scheduleTitle: string;
    rightsReserved: string;
    medicalDisclaimer: string;
    privacy: string;
    terms: string;
  };
}
