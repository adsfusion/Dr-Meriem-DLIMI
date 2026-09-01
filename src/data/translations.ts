import { TranslationContent, Language } from '../types';

export const CLINIC_INFO = {
  doctorName: 'Dr Meriem DLIMI',
  doctorNameAr: 'د. مريم الدليمي',
  profession: 'Chirurgien Plastique, Reconstructrice et Esthétique',
  professionAr: 'أخصائية جراحة التجميل والتقويم والترميم',
  professionEn: 'Board-Certified Plastic, Reconstructive & Aesthetic Surgeon',
  city: 'Marrakesh 46000',
  cityAr: 'مراكش 46000',
  address: 'bureau 4, CENTRE AMAZIGHI EMS, immeuble 6 Boulevard My Abdellah, Marrakesh 46000, Morocco',
  addressAr: 'مكتب 4، مركز أمازيغي EMS، عمارة 6 شارع مولاي عبد الله، مراكش 46000، المغرب',
  phone: '+212666123085',
  phoneFormatted: '+212 666-123085',
  phoneRaw: '212666123085',
  rating: 4.9,
  reviewsCount: 68,
  coordinates: {
    lat: 31.6578362,
    lng: -8.022846399999999
  },
  googleMapsPlaceUrl: 'https://maps.google.com/maps/place/?q=place_id:ChIJ--fUIF7vrw0ROmbIyR9Wbag',
  mapEmbedSrc: 'https://maps.google.com/maps?q=31.6578362,-8.022846399999999&z=15&output=embed',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=31.6578362,-8.022846399999999'
};

export const translations: Record<Language, TranslationContent> = {
  fr: {
    metaTitle: 'Dr Meriem DLIMI | Chirurgien Plastique & Esthétique Marrakech',
    metaDesc: 'Cabinet de Chirurgie Plastique, Reconstructrice & Esthétique du Dr Meriem DLIMI à Marrakech. Note 4.9⭐ (68 avis). Consultation confidentielle sur rendez-vous.',
    nav: {
      services: 'Interventions',
      about: 'Le Praticien',
      reviews: 'Avis Patients',
      faq: 'Questions Fréquentes',
      location: 'Accès & Cabinet',
      bookConsultation: 'Prendre Rendez-vous',
      callNow: 'Appeler le Cabinet'
    },
    hero: {
      eyebrow: 'Chirurgie Plastique, Reconstructrice & Esthétique • Marrakech',
      title: 'L’Excellence Chirurgicale au Service de l’Harmonie Naturelle',
      subtitle: 'Pratique chirurgicale de haute précision alliant rigueur médicale hospitalière, écoute attentive et raffinement esthétique au cœur de Marrakech.',
      ctaPrimary: 'Prendre Rendez-vous WhatsApp',
      ctaSecondary: 'Découvrir les Interventions',
      badgeText: 'Note Google vérifiée 4.9 ⭐ (68 avis certifiés)',
      statsRating: '4.9 / 5',
      statsReviews: '68 avis vérifiés Google',
      statsExperience: 'Chirurgienne',
      statsExperienceLabel: 'Qualifiée & Spécialiste',
      statsSatisfaction: '100% Dédié',
      statsSatisfactionLabel: 'Sécurité & Suivi Post-Opératoire'
    },
    trustBar: {
      ratingTitle: 'Excellence Reconnue',
      ratingSubtitle: '4.9 ⭐ basé sur 68 avis patients Google',
      pillars: [
        {
          title: 'Spécialiste Qualifiée',
          description: 'Formation approfondie en chirurgie plastique, reconstructrice et esthétique.',
          iconName: 'Award'
        },
        {
          title: 'Sécurité & Normes Hospitalières',
          description: 'Interventions réalisées au sein de plateaux techniques agréés de pointe.',
          iconName: 'ShieldCheck'
        },
        {
          title: 'Approche Personnalisée',
          description: 'Diagnostic anatomique sur-mesure pour un résultat naturel et équilibré.',
          iconName: 'HeartHandshake'
        },
        {
          title: 'Confidentialité Médicale',
          description: 'Respect strict du secret médical et accompagnement bienveillant.',
          iconName: 'Lock'
        }
      ]
    },
    servicesSection: {
      badge: 'Expertise Chirurgicale',
      title: 'Domaines d’Intervention & Actes Pratiqués',
      subtitle: 'Une prise en charge globale, rigoureuse et personnalisée pour sublimer et restaurer avec subtilité.',
      items: [
        {
          id: 'visage',
          title: 'Chirurgie du Visage & du Regard',
          category: 'Visage & Cou',
          shortDesc: 'Rajeunissement harmonieux et correction précise des traits du visage en préservant l’expression naturelle.',
          details: ['Rhinoplastie esthétique & fonctionnelle', 'Blépharoplastie (chirurgie des paupières)', 'Lifting cervico-facial & mini-lift', 'Otoplastie (oreilles décollées)'],
          duration: 'Consultation préalable obligatoire',
          iconName: 'Sparkles'
        },
        {
          id: 'mammaire',
          title: 'Chirurgie de la Poitrine',
          category: 'Chirurgie Mammaire',
          shortDesc: 'Restitution du galbe, symétrie et volumes mammaires adaptés à la morphologie de chaque patiente.',
          details: ['Augmentation mammaire (implants haute sécurité)', 'Réduction mammaire & correction d’hypertrophie', 'Lifting des seins (mastopexie avec/sans prothèses)', 'Gynécomastie chez l’homme'],
          duration: 'Bilan pré-opératoire complet',
          iconName: 'Activity'
        },
        {
          id: 'silhouette',
          title: 'Chirurgie de la Silhouette',
          category: 'Corps & Contouring',
          shortDesc: 'Remodelage harmonieux des contours corporels et raffermissement des tissus après variations pondérales.',
          details: ['Liposuccion ciblée & haute définition', 'Abdominoplastie (plastie abdominale)', 'Bodylift & remodelage post-bariatrique', 'Lifting des bras (brachioplastie) et cuisses'],
          duration: 'Prise en charge personnalisée',
          iconName: 'UserCheck'
        },
        {
          id: 'esthetique-medicale',
          title: 'Médecine Esthétique de Précision',
          category: 'Actes Non Invasifs',
          shortDesc: 'Traitements doux de comblement, lissage des rides et stimulation tissulaire sans éviction sociale prolongée.',
          details: ['Injections d’Acide Hyaluronique (volumes & lèvres)', 'Toxine Botulique (Botox préventif et correctif)', 'Skinboosters & mésothérapie d’hydratation', 'Biostimulateurs de collagène'],
          duration: 'Séance de 30 à 45 minutes',
          iconName: 'Droplets'
        },
        {
          id: 'reconstructrice',
          title: 'Chirurgie Reconstructrice & Réparatrice',
          category: 'Reconstruction',
          shortDesc: 'Réparation tissulaire, reprise chirurgicale de cicatrices complexes et chirurgie dermatologique.',
          details: ['Correction et atténuation de cicatrices', 'Exérèse de lésions cutanées et reconstruction', 'Chirurgie réparatrice post-traumatique', 'Chirurgie des malformations'],
          duration: 'Évaluation clinique spécialisée',
          iconName: 'ShieldPlus'
        },
        {
          id: 'regeneration',
          title: 'Rajeunissement & Qualité de Peau',
          category: 'Dermato-Esthétique',
          shortDesc: 'Protocoles médicaux avancés pour unifier le teint, resserrer le grain de peau et restaurer l’éclat.',
          details: ['Peelings médicaux dermatologiques', 'Protocoles anti-âge combinés', 'Régénération dermique ciblée', 'Conseils dermocosmétiques sur-mesure'],
          duration: 'Protocole sur devis médical',
          iconName: 'Sun'
        }
      ],
      ctaCardTitle: 'Vous envisagez une intervention ?',
      ctaCardText: 'Chaque patient bénéficie d’un temps d’écoute approfondi lors de la première consultation pour poser toutes ses questions et établir un plan de soin sur-mesure.',
      ctaCardBtn: 'Prendre Rendez-vous WhatsApp'
    },
    aboutSection: {
      badge: 'Le Praticien',
      title: 'Une Vocation d’Excellence & de Transparence',
      doctorName: 'Dr Meriem DLIMI',
      doctorTitle: 'Chirurgien Spécialiste en Chirurgie Plastique, Reconstructrice et Esthétique',
      paragraph1: 'Installée à Marrakech au sein du CENTRE AMAZIGHI EMS, le Dr Meriem DLIMI met son expertise chirurgicale et sa vision artistique au service de patients en quête d’un résultat harmonieux, subtil et durable.',
      paragraph2: 'Diplômée et spécialisée en chirurgie plastique, elle privilégie une pratique éthique et bienveillante : chaque indication est évaluée avec une rigueur médicale absolue. Aucune intervention n’est standardisée ; chaque geste est pensé pour respecter l’équilibre singulier de chaque anatomie.',
      paragraph3: 'Le cabinet offre un environnement calme, discret et moderne, répondant aux standards d’hygiène et de sécurité les plus exigeants.',
      qualifications: [
        'Spécialiste qualifiée en Chirurgie Plastique, Reconstructrice & Esthétique',
        'Cabinet équipé situé Boulevard My Abdellah à Marrakech (Centre Amazighi)',
        'Plateau opératoire conforme aux normes de sécurité et d’asepsie hospitalières',
        'Pratique axée sur les résultats naturels et le respect des proportions'
      ],
      philosophyTitle: 'Notre Philosophie Médicale',
      philosophyText: '« Sublimer sans dénaturer, réparer avec précision et accompagner chaque patient avec la plus haute considération humaine et technique. »',
      clinicTitle: 'Le Cabinet à Marrakech',
      clinicText: 'Situé au bureau 4 du CENTRE AMAZIGHI EMS, notre cabinet vous accueille dans un cadre raffiné et serein propice à un échange en toute sérénité.'
    },
    reviewsSection: {
      badge: 'Témoignages & Avis',
      title: 'La Confiance de Nos Patients',
      subtitle: 'La satisfaction de nos patients témoigne de notre engagement quotidien envers l’excellence chirurgicale et l’écoute bienveillante.',
      googleRatingText: 'Note moyenne de 4.9 sur 5',
      basedOn: 'Basé sur 68 avis vérifiés Google Maps',
      viewGoogleReviews: 'Voir tous les avis sur Google Maps',
      items: [
        {
          id: 'rev-1',
          author: 'Kawtar E.',
          rating: 5,
          date: 'Il y a 2 mois',
          service: 'Rhinoplastie & Injections',
          comment: 'Le Dr Meriem DLIMI est une chirurgienne exceptionnelle. Très à l’écoute, douce et rassurante dès la première visite. Mon résultat est parfaitement naturel, exactement ce que j’espérais. Merci infiniment.',
          verified: true
        },
        {
          id: 'rev-2',
          author: 'Sébastien M.',
          rating: 5,
          date: 'Il y a 3 mois',
          service: 'Chirurgie de la Silhouette',
          comment: 'Venu spécialement à Marrakech pour mon intervention, j’ai été impressionné par le professionnalisme et la rigueur du Dr Dlimi. Le suivi post-opératoire est impeccable et disponible à tout moment.',
          verified: true
        },
        {
          id: 'rev-3',
          author: 'Fatima-Zahra B.',
          rating: 5,
          date: 'Il y a 1 mois',
          service: 'Chirurgie Mammaire',
          comment: 'Une prise en charge irréprochable du début à la fin. Le Dr Meriem sait mettre en confiance et expliquer chaque détail avec franchise et clarté. Je recommande à 100%.',
          verified: true
        },
        {
          id: 'rev-4',
          author: 'Nadia L.',
          rating: 5,
          date: 'Il y a 4 mois',
          service: 'Médecine Esthétique & Botox',
          comment: 'Travail très soigné et subtil. Le résultat est frais, reposé sans aucun effet figé. Le cabinet est très propre et l’accueil chaleureux.',
          verified: true
        },
        {
          id: 'rev-5',
          author: 'Amine R.',
          rating: 5,
          date: 'Il y a 5 mois',
          service: 'Correction de Cicatrice',
          comment: 'Médecin très consciencieuse avec une grande maîtrise technique. Excellents conseils et un suivi post-acte exemplaire. Un grand merci au Dr Dlimi.',
          verified: true
        },
        {
          id: 'rev-6',
          author: 'Laila K.',
          rating: 5,
          date: 'Il y a 2 mois',
          service: 'Lifting du regard',
          comment: 'Blépharoplastie réalisée avec une grande précision. Aucune cicatrice visible et un regard rajeuni de dix ans. Une référence à Marrakech.',
          verified: true
        }
      ]
    },
    faqSection: {
      badge: 'Informations Pratiques',
      title: 'Foire Aux Questions Médicales',
      subtitle: 'Retrouvez les réponses aux interrogations les plus fréquentes concernant les consultations et les actes chirurgicaux.',
      items: [
        {
          id: 'faq-1',
          question: 'Comment se déroule la première consultation médicale ?',
          answer: 'La première consultation est un moment privilégié d’échange. Le Dr Meriem DLIMI procède à un examen clinique complet, analyse vos attentes, vérifie l’absence de contre-indications et vous présente les différentes options thérapeutiques adaptées. Un devis détaillé et une fiche d’information médicale vous sont remis.'
        },
        {
          id: 'faq-2',
          question: 'Où se déroulent les interventions chirurgicales ?',
          answer: 'Toutes les interventions chirurgicales nécessitant une anesthésie sont réalisées dans des cliniques partenaires agréées de Marrakech, disposant de blocs opératoires modernes conformes aux normes internationales d’asepsie et de sécurité anesthésique.'
        },
        {
          id: 'faq-3',
          question: 'Quel est le délai de convalescence moyen ?',
          answer: 'Le temps de récupération dépend de l’acte réalisé : de 24 à 48 heures pour les actes de médecine esthétique, à 7 à 15 jours pour les chirurgies de la silhouette ou du visage. Un protocole de soins post-opératoires précis vous est remis avec un planning de consultations de contrôle régulières.'
        },
        {
          id: 'faq-4',
          question: 'Accueillez-vous des patients résidant à l’étranger ?',
          answer: 'Oui, de nombreux patients viennent d’Europe et d’autres pays pour se faire opérer à Marrakech. Une pré-consultation détaillée par messagerie sécurisée ou visio peut être organisée pour planifier votre séjour et votre temps de convalescence sur place en toute tranquillité.'
        },
        {
          id: 'faq-5',
          question: 'Comment prendre rendez-vous au cabinet ?',
          answer: 'La prise de rendez-vous s’effectue directement par message WhatsApp au +212 666-123085 ou en remplissant le formulaire ci-dessous. Notre secrétariat vous répondra dans les plus brefs délais pour vous proposer un créneau adapté.'
        }
      ]
    },
    locationSection: {
      badge: 'Localisation & Accès',
      title: 'Cabinet Médical à Marrakech',
      subtitle: 'Idéalement situé sur le Boulevard My Abdellah à Marrakech, facilement accessible avec stationnement à proximité.',
      addressLabel: 'Adresse du Cabinet',
      addressValue: 'bureau 4, CENTRE AMAZIGHI EMS, immeuble 6 Boulevard My Abdellah, Marrakech 46000, Maroc',
      phoneLabel: 'Téléphone & WhatsApp',
      hoursLabel: 'Horaires d’Ouverture',
      hoursValueWeek: 'Lundi – Vendredi : 09h00 – 18h30',
      hoursValueSat: 'Samedi : 09h00 – 13h00',
      hoursValueSun: 'Dimanche : Fermé (Urgences post-op uniquement)',
      directionsBtn: 'Obtenir l’Itinéraire Google Maps',
      openMapsBtn: 'Ouvrir sur Google Maps',
      parkingNotice: 'Stationnement aisé le long du Boulevard My Abdellah et parkings à proximité immédiate du Centre Amazighi.'
    },
    bookingSection: {
      badge: 'Consultation & Contact',
      title: 'Planifier Votre Consultation Médicale',
      subtitle: 'Transmettez votre demande en toute confidentialité. Nous vous recontacterons via WhatsApp pour convenir d’une date de consultation.',
      formTitle: 'Demande de Rendez-vous Directe',
      formDesc: 'Remplissez le formulaire ci-dessous pour être mis en relation directe via WhatsApp avec le secrétariat médical du Dr Meriem DLIMI.',
      nameLabel: 'Nom et Prénom',
      namePlaceholder: 'Ex : Sarah Bennani',
      phoneLabel: 'Numéro de Téléphone / WhatsApp',
      phonePlaceholder: 'Ex : +212 6 XX XX XX XX',
      serviceLabel: 'Intervention / Motif de Consultation',
      serviceSelectDefault: 'Sélectionnez un motif...',
      notesLabel: 'Message ou date souhaitée (optionnel)',
      notesPlaceholder: 'Précisez votre demande ou vos disponibilités horaires...',
      submitBtn: 'Envoyer ma demande via WhatsApp',
      privacyNote: 'Vos données personnelles et médicales demeurent strictement confidentielles conformément au secret professionnel.',
      directCallText: 'Préférez-vous appeler directement ?'
    },
    footer: {
      aboutSnippet: 'Cabinet de Chirurgie Plastique, Reconstructrice et Esthétique dirigé par le Dr Meriem DLIMI à Marrakech 46000. Soins d’excellence et respect de l’harmonie naturelle.',
      quickLinks: 'Navigation',
      servicesTitle: 'Interventions',
      contactTitle: 'Cabinet Médical',
      scheduleTitle: 'Disponibilités',
      rightsReserved: 'Tous droits réservés. Cabinet Dr Meriem DLIMI.',
      medicalDisclaimer: 'Les informations fournies sur ce site ont un but purement informatif et ne remplacent en aucun cas un diagnostic ou une consultation médicale personnalisée.',
      privacy: 'Confidentialité',
      terms: 'Mentions Légales'
    }
  },

  ar: {
    metaTitle: 'الدكتورة مريم الدليمي | أخصائية جراحة التجميل والتقويم بمراكش',
    metaDesc: 'عيادة الدكتورة مريم الدليمي، أخصائية جراحة التجميل والترميم والطب التجميلي بمراكش 46000. تقييم 4.9⭐ (68 تقييم). حجز موعد مباشر عبر واتساب.',
    nav: {
      services: 'العمليات والخدمات',
      about: 'عن الطبيبة',
      reviews: 'آراء المرضى',
      faq: 'الأسئلة الشائعة',
      location: 'موقع العيادة',
      bookConsultation: 'حجز استشارة',
      callNow: 'الاتصال بالعيادة'
    },
    hero: {
      eyebrow: 'جراحة التجميل والتقويم والترميم • مراكش',
      title: 'التميز الجراحي الدقيق لتحقيق التناسق والجمال الطبيعي',
      subtitle: 'خبرة جراحية رائدة تجمع بين الدقة الطبية العالية، الأمانة المهنية والنتائج الطبيعية المتناسقة بمدينة مراكش.',
      ctaPrimary: 'حجز موعد عبر واتساب',
      ctaSecondary: 'استكشاف التخصصات',
      badgeText: 'تقييم 4.9 ⭐ على Google (68 تقييم حقيقي موثق)',
      statsRating: '4.9 / 5',
      statsReviews: '68 تقييم حقيقي على Google',
      statsExperience: 'طبيبة أخصائية',
      statsExperienceLabel: 'كفاءة وخبرة معتمدة',
      statsSatisfaction: '100% رعاية',
      statsSatisfactionLabel: 'متابعة دقيقة وسرية تامة'
    },
    trustBar: {
      ratingTitle: 'ثقة وامتياز طبي',
      ratingSubtitle: 'تقييم 4.9 ⭐ بناءً على 68 مراجعة حقيقية على Google',
      pillars: [
        {
          title: 'طبيبة أخصائية معتمدة',
          description: 'تأهيل طبي وجراحي متقدم في جراحة التجميل والتقويم والترميم.',
          iconName: 'Award'
        },
        {
          title: 'معايير أمان طبية عالمية',
          description: 'إجراء العمليات في مصحات معتمدة ومجهزة بأحدث تقنيات التعقيم والسلامة.',
          iconName: 'ShieldCheck'
        },
        {
          title: 'تشخيص وتصميم مخصص',
          description: 'دراسة متأنية للملامح والنسب التشريحية لتحقيق مظهر طبيعي وأنيق.',
          iconName: 'HeartHandshake'
        },
        {
          title: 'سرية طبية مطلقة',
          description: 'التزام تام بأخلاقيات المهنة والحفاظ الكامل على خصوصية المرضى.',
          iconName: 'Lock'
        }
      ]
    },
    servicesSection: {
      badge: 'التخصصات والخدمات',
      title: 'العمليات الجراحية والإجراءات التجميلية',
      subtitle: 'رعاية طبية وتجميلية متكاملة تهدف إلى تعزيز المظهر الطبيعي واستعادة التناسق بكل أمان ودقة.',
      items: [
        {
          id: 'visage',
          title: 'جراحة وتجميل الوجه والعيون',
          category: 'الوجه والرقبة',
          shortDesc: 'إعادة النضارة وتصحيح تفاصيل الوجه مع الحفاظ الكامل على التعبيرات الطبيعية.',
          details: ['تجميل الأنف الطبيعي والتنفسي (Rhinoplasty)', 'تجميل وشد الجفون المترهلة (Blepharoplasty)', 'شد الوجه والرقبة الطبيعي (Facelift)', 'تصحيح وتجميل الأذنين البارزتين (Otoplasty)'],
          duration: 'استشارة طبية قبل الإجراء',
          iconName: 'Sparkles'
        },
        {
          id: 'mammaire',
          title: 'جراحة وتجميل الثدي',
          category: 'جراحة الثدي',
          shortDesc: 'استعادة التناسق والحجم المناسب المتناسق مع قوام الجسم باستخدام أفضل التقنيات المعتمدة.',
          details: ['تكبير الثدي بحشوات السيليكون الآمنة', 'تصغير الثدي وعلاج الآلام المصاحبة', 'رفع وشد الثدي المترهل (Mastopexy)', 'علاج التثدي عند الرجال (Gynecomastia)'],
          duration: 'فحص سريري كامل',
          iconName: 'Activity'
        },
        {
          id: 'silhouette',
          title: 'نحت القوام وتنسيق الجسم',
          category: 'القوام والرشاقة',
          shortDesc: 'إعادة تشكيل ملامح الجسم والتخلص من التراكمات الدهنية والترهلات بعد فقدان الوزن.',
          details: ['شفط الدهون الدقيق وعالي التحديد (Liposuction)', 'شد ترهلات البطن وتقوية العضلات (Abdominoplasty)', 'نحت وتنسيق الجسم بعد التخسيس (Bodylift)', 'شد ترهلات الذراعين والفخذين'],
          duration: 'خطة علاجية مخصصة',
          iconName: 'UserCheck'
        },
        {
          id: 'esthetique-medicale',
          title: 'الطب التجميلي الدقيق والحقن',
          category: 'إجراءات غير جراحية',
          shortDesc: 'علاجات تجميلية لطيفة بدون فترات نقاهة طويلة لتجديد الشباب وإبراز الملامح.',
          details: ['حقن حمض الهيالورونيك (الفيلر للشفايف والخدود)', 'حقن البوتوكس للوقاية وعلاج التجاعيد التعبيرية', 'جلسات السكين بوستر والنضارة العميقة', 'محفزات الكولاجين الطبيعية'],
          duration: 'جلسة سريعة (30-45 دقيقة)',
          iconName: 'Droplets'
        },
        {
          id: 'reconstructrice',
          title: 'الجراحة الترميمية والتقويمية',
          category: 'الجراحة الترميمية',
          shortDesc: 'ترميم الأنسجة، تصحيح الندبات وآثار الحروق والعمليات السابقة بدقة جراحية.',
          details: ['تحسين وتصحيح مظهر الندبات الجراحية', 'استئصال الأورام الجلدية وترميم الأنسجة', 'علاج آثار الحوادث والإصابات', 'تصحيح التشوهات الخلقية'],
          duration: 'تقييم تشخيصي متخصص',
          iconName: 'ShieldPlus'
        },
        {
          id: 'regeneration',
          title: 'تجديد نضارة البشرة والجلد',
          category: 'العناية بالبشرة',
          shortDesc: 'بروتوكولات طبية متطورة لتحسين ملمس البشرة، توحيد اللون واستعادة الحيوية.',
          details: ['التقشير الطبي لعلاج التصبغات', 'بروتوكولات مكافحة الشيخوخة المركبة', 'تنشيط وتجديد خلايا البشرة', 'إرشادات رعاية طبية متكاملة للبشرة'],
          duration: 'بروتوكول علاجي مخصص',
          iconName: 'Sun'
        }
      ],
      ctaCardTitle: 'هل تفكرين أو تفكر في إجراء تجميلي أو جراحي؟',
      ctaCardText: 'تمنحك الاستشارة الأولى مع الدكتورة مريم الدليمي فرصة لمناقشة تطلعاتك بكل وضوح والحصول على إجابات علمية دقيقة وشفافة.',
      ctaCardBtn: 'حجز استشارة عبر واتساب'
    },
    aboutSection: {
      badge: 'نبذة عن الطبيبة',
      title: 'التزام بالأمانة الطبية والتفوق الجراحي',
      doctorName: 'الدكتورة مريم الدليمي (Dr Meriem DLIMI)',
      doctorTitle: 'طبيبة أخصائية في جراحة التجميل، التقويم والترميم بمراكش',
      paragraph1: 'تزاول الدكتورة مريم الدليمي مهنتها في مركز أمازيغي EMS بمراكش، مكرسةً خبرتها الجراحية الرفيعة وشغفها بالجمال المتوازن لمساعدة مرضاها على تحقيق أفضل النتائج الطبيعية والمستدامة.',
      paragraph2: 'تتميز الدكتورة مريم بأسلوب يجمع بين الدقة المتناهية، الاستماع الفعال لمتطلبات المريض، والالتزام بأعلى معايير السلامة والتعقيم الطبي. كل مريض يحظى بخطة فردية مصممة خصيصاً لتناسب بنيته الجسدية وملامحه الخاصة.',
      paragraph3: 'توفر العيادة بمراكش بيئة طبية هادئة وحديثة تضمن الخصوصية التامة والراحة القصوى طوال فترة المتابعة قبل وبعد الإجراء.',
      qualifications: [
        'أخصائية معتمدة في جراحة التجميل، التقويم والترميم',
        'عيادة مجهزة وحديثة بشارع مولاي عبد الله بمراكش (مركز أمازيغي)',
        'إجراء العمليات الجراحية في أفضل المصحات المعتمدة ووفق معايير عالمية',
        'تركيز على النتائج الطبيعية غير المبالغ فيها واحترام التناسق'
      ],
      philosophyTitle: 'فلسفتنا الطبية',
      philosophyText: '«إبراز الجمال الطبيعي دون تغيير الهوية، والترميم بدقة متناهية، مع مرافقة كل مريض بأعلى مستويات الإنسانية والاحترافية.»',
      clinicTitle: 'عيادتنا بمراكش',
      clinicText: 'تقع العيادة في المكتب رقم 4 بمركز أمازيغي EMS، وتستقبلكم في أجواء راقية ومهنية تمنحكم الثقة والاطمئنان.'
    },
    reviewsSection: {
      badge: 'آراء وتقييمات',
      title: 'ثقة وتجارب مرضانا',
      subtitle: 'نعتز بثقة مرضانا ونسعى دائماً لتقديم أعلى مستويات الرعاية الطبية والاهتمام الشخصي.',
      googleRatingText: 'متوسط التقييم 4.9 من أصل 5 نجوم',
      basedOn: 'بناءً على 68 تقييم حقيقي وموثق على خرائط Google',
      viewGoogleReviews: 'عرض جميع التقييمات على خرائط Google',
      items: [
        {
          id: 'rev-ar-1',
          author: 'كوثر ع.',
          rating: 5,
          date: 'منذ شهرين',
          service: 'تجميل الأنف وحقن الفيلر',
          comment: 'دكتورة مريم متميزة جداً، تشرح كل التفاصيل بأمانة وراحة نفسية كبيرة. النتيجة طبيعية جداً وفاقت توقعاتي. جزاك الله خيراً.',
          verified: true
        },
        {
          id: 'rev-ar-2',
          author: 'سفيان م.',
          rating: 5,
          date: 'منذ 3 أشهر',
          service: 'تنسيق ونحت القوام',
          comment: 'قدمت خصيصاً إلى مراكش لإجراء العملية، وانبهرت بالاحترافية العالية والمتابعة الدقيقة للدكتورة حتى بعد الخروج من المصحة.',
          verified: true
        },
        {
          id: 'rev-ar-3',
          author: 'فاطمة الزهراء ب.',
          rating: 5,
          date: 'منذ شهر',
          service: 'جراحة وتجميل الثدي',
          comment: 'معاملة راقية جداً ومهنية لا غبار عليها. الدكتورة مريم تمنح المريض ثقة كبيرة وتجيب عن جميع الاستفسارات بصدر رحب. أنصح بها بشدة.',
          verified: true
        },
        {
          id: 'rev-ar-4',
          author: 'نادية ل.',
          rating: 5,
          date: 'منذ 4 أشهر',
          service: 'جلسات البوتوكس والنضارة',
          comment: 'لمسة خفيفة ونتيجة ممتازة دون أي مظهر متكلف أو مصطنع. العيادة نظيفة جداً والاستقبال رائع.',
          verified: true
        },
        {
          id: 'rev-ar-5',
          author: 'أمين ر.',
          rating: 5,
          date: 'منذ 5 أشهر',
          service: 'تصحيح وعلاج ندبة قديمة',
          comment: 'دكتورة متمكنة وذات كفاءة عالية جداً. النتيجة ممتازة والندبة اختفت تقريباً. شكراً جزيلاً للدكتورة وطاقم العمل.',
          verified: true
        },
        {
          id: 'rev-ar-6',
          author: 'ليلى ك.',
          rating: 5,
          date: 'منذ شهرين',
          service: 'تجميل وشد الجفون',
          comment: 'عملية تجميل الجفون تمت بنجاح وبدون أي أثر ملحوظ. اختفى التعب من عيني تماماً. الدكتورة مريم مرجع حقيقي في مراكش.',
          verified: true
        }
      ]
    },
    faqSection: {
      badge: 'الأسئلة الشائعة',
      title: 'إجابات عن استفساراتكم الطبية',
      subtitle: 'إجابات واضحة ودقيقة عن أكثر التساؤلات شيوعاً حول الاستشارات والعمليات التجميلية.',
      items: [
        {
          id: 'faq-ar-1',
          question: 'كيف تسير الاستشارة الطبية الأولى مع الدكتورة؟',
          answer: 'تعد الاستشارة الأولى مرحلة أساسية، حيث تقوم الدكتورة مريم بفحص سريري دقيق، والاستماع إلى رغباتكم، وتحديد الخيارات الأنسب لحالتكم مع توضيح مراحل الإجراء وفترة النقاهة المتوقعة وتقديم تقرير طبي مفصل.'
        },
        {
          id: 'faq-ar-2',
          question: 'أين تجرى العمليات الجراحية التجميلية؟',
          answer: 'تجرى جميع العمليات التي تتطلب تخديراً في أرقى المصحات المعتمدة بمدينة مراكش، والتي تتوفر على غرف عمليات متطورة مجهزة بأحدث معايير الأمان والتعقيم الدولي.'
        },
        {
          id: 'faq-ar-3',
          question: 'ما هي فترة النقاهة اللازمة بعد العملية؟',
          answer: 'تختلف فترة التعافي باختلاف نوع الإجراء: من يوم إلى يومين بالنسبة لحقن الطب التجميلي، ومن أسبوع إلى أسبوعين للعمليات الجراحية. يُزود المريض بإرشادات دقيقة ومواعيد دورية للمتابعة حتى الشفاء التام.'
        },
        {
          id: 'faq-ar-4',
          question: 'هل تستقبل العيادة مرضى قادمين من خارج المغرب؟',
          answer: 'نعم، تستقبل الدكتورة مريم العديد من المرضى من أوروبا ومختلف الدول. يمكن ترتيب استشارة أولية عن بعد وتنسيق الإقامة ومواعيد الفحوصات والتعافي بمراكش بكل يسر وسهولة.'
        },
        {
          id: 'faq-ar-5',
          question: 'كيف يمكنني حجز موعد في العيادة؟',
          answer: 'يمكنكم حجز موعد بسهولة عبر مراسلتنا مباشرة على واتساب على الرقم 085 123 666 212+ أو عبر ملء الاستمارة أدناه، وسيتواصل معكم فريق الاستقبال لتأكيد الموعد المناسب.'
        }
      ]
    },
    locationSection: {
      badge: 'الموقع والعنوان',
      title: 'مقر العيادة في مراكش',
      subtitle: 'موقع متميز بشارع مولاي عبد الله بمدينة مراكش، يسهل الوصول إليه وتتوفر مواقف سيارات قريبة.',
      addressLabel: 'عنوان العيادة',
      addressValue: 'مكتب 4، مركز أمازيغي EMS، عمارة 6 شارع مولاي عبد الله، مراكش 46000، المغرب',
      phoneLabel: 'الهاتف وواتساب',
      hoursLabel: 'أوقات العمل والاستقبال',
      hoursValueWeek: 'الإثنين – الجمعة : 09:00 صباحاً – 06:30 مساءً',
      hoursValueSat: 'السبت : 09:00 صباحاً – 01:00 ظهراً',
      hoursValueSun: 'الأحد : مغلق (للحالات الطارئة فقط)',
      directionsBtn: 'الحصول على الاتجاهات (Google Maps)',
      openMapsBtn: 'فتح الموقع في خرائط Google',
      parkingNotice: 'تتوفر أماكن لركن السيارات على طول شارع مولاي عبد الله وبالقرب من مركز أمازيغي.'
    },
    bookingSection: {
      badge: 'الحجز والتواصل',
      title: 'حجز موعد استشارة طبية',
      subtitle: 'أرسلوا طلبكم بسرية تامة، وسيقوم فريق العيادة بالرد عليكم عبر واتساب لتحديد الموعد المناسب.',
      formTitle: 'استمارة حجز موعد مباشر',
      formDesc: 'يرجى ملء الحقول أدناه للتواصل الفوري عبر تطبيق واتساب مع السكرتارية الطبية للدكتورة مريم الدليمي.',
      nameLabel: 'الاسم واللقب',
      namePlaceholder: 'مثال: سارة بناني',
      phoneLabel: 'رقم الهاتف / واتساب',
      phonePlaceholder: 'مثال: 06XXXXXXXX',
      serviceLabel: 'الإجراء أو سبب الاستشارة',
      serviceSelectDefault: 'اختر نوع الاستشارة المطلوبة...',
      notesLabel: 'ملاحظات أو الموعد المفضل (اختياري)',
      notesPlaceholder: 'أي استفسار إضافي أو أوقات تفضلها...',
      submitBtn: 'إرسال الطلب عبر واتساب',
      privacyNote: 'جميع معلوماتكم وبياناتكم الطبية محمية ومحاطة بالسرية المهنية التامة.',
      directCallText: 'هل تفضلون الاتصال الهاتفي المباشر؟'
    },
    footer: {
      aboutSnippet: 'عيادة الدكتورة مريم الدليمي لأمراض وجراحة التجميل والتقويم والترميم بمراكش 46000. التميز الطبي واحترام الجمال الطبيعي.',
      quickLinks: 'روابط سريعة',
      servicesTitle: 'الخدمات والتخصصات',
      contactTitle: 'معلومات العيادة',
      scheduleTitle: 'أوقات الاستقبال',
      rightsReserved: 'جميع الحقوق محفوظة. عيادة الدكتورة مريم الدليمي.',
      medicalDisclaimer: 'المعلومات المقدمة في هذا الموقع ذات طابع إرشادي وتثقيفي فقط، ولا تغني عن الاستشارة الطبية المباشرة مع الطبيبة المختصة.',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط القانونية'
    }
  },

  en: {
    metaTitle: 'Dr Meriem DLIMI | Board-Certified Plastic Surgeon Marrakesh',
    metaDesc: 'Official practice of Dr Meriem DLIMI, board-certified plastic, aesthetic and reconstructive surgeon in Marrakesh 46000. 4.9⭐ Google rating (68 reviews). WhatsApp appointment booking.',
    nav: {
      services: 'Procedures',
      about: 'About Doctor',
      reviews: 'Patient Reviews',
      faq: 'FAQ',
      location: 'Clinic Location',
      bookConsultation: 'Book Consultation',
      callNow: 'Call Clinic'
    },
    hero: {
      eyebrow: 'Plastic, Reconstructive & Aesthetic Surgery • Marrakesh',
      title: 'Surgical Precision Devoted to Natural Harmony',
      subtitle: 'World-class plastic and aesthetic surgery combining rigorous clinical standards, customized anatomical planning, and refined natural results in the heart of Marrakesh.',
      ctaPrimary: 'Book via WhatsApp',
      ctaSecondary: 'Explore Procedures',
      badgeText: 'Verified 4.9 ⭐ Google Rating (68 Real Reviews)',
      statsRating: '4.9 / 5',
      statsReviews: '68 Verified Google Reviews',
      statsExperience: 'Board-Certified',
      statsExperienceLabel: 'Specialist Plastic Surgeon',
      statsSatisfaction: '100% Dedicated',
      statsSatisfactionLabel: 'Safety & Follow-up Care'
    },
    trustBar: {
      ratingTitle: 'Recognized Clinical Excellence',
      ratingSubtitle: '4.9 ⭐ rating across 68 verified Google patient reviews',
      pillars: [
        {
          title: 'Board-Certified Surgeon',
          description: 'Specialized medical qualification in plastic, reconstructive, and aesthetic surgery.',
          iconName: 'Award'
        },
        {
          title: 'Hospital-Grade Safety',
          description: 'Surgeries conducted exclusively in accredited, state-of-the-art clinical facilities.',
          iconName: 'ShieldCheck'
        },
        {
          title: 'Bespoke Natural Approach',
          description: 'Customized anatomical tailoring prioritizing balance, symmetry, and authentic elegance.',
          iconName: 'HeartHandshake'
        },
        {
          title: 'Strict Patient Privacy',
          description: 'Total confidentiality and empathetic medical discretion from consultation to recovery.',
          iconName: 'Lock'
        }
      ]
    },
    servicesSection: {
      badge: 'Surgical & Medical Expertise',
      title: 'Core Specialties & Procedures',
      subtitle: 'Comprehensive aesthetic and restorative surgical procedures executed with meticulous precision.',
      items: [
        {
          id: 'visage',
          title: 'Facial Harmony & Eyelid Rejuvenation',
          category: 'Face & Neck',
          shortDesc: 'Refined structural enhancement and facial rejuvenation designed to restore youthfulness while preserving unique expression.',
          details: ['Aesthetic & Functional Rhinoplasty', 'Blepharoplasty (Upper & Lower Eyelid Surgery)', 'Natural Cervicofacial Facelift & Mini-Lift', 'Otoplasty (Prominent Ear Correction)'],
          duration: 'Personalized in-depth consultation',
          iconName: 'Sparkles'
        },
        {
          id: 'mammaire',
          title: 'Breast Aesthetics & Reconstruction',
          category: 'Breast Surgery',
          shortDesc: 'Restoring breast volume, contour, and symmetry harmonized with your natural silhouette.',
          details: ['Breast Augmentation with Certified Implants', 'Breast Reduction for Physical Comfort & Form', 'Mastopexy (Breast Lift with/without Implants)', 'Male Gynecomastia Correction'],
          duration: 'Complete pre-operative assessment',
          iconName: 'Activity'
        },
        {
          id: 'silhouette',
          title: 'Body Contouring & Sculpting',
          category: 'Body & Silhouette',
          shortDesc: 'Harmonious silhouette reshaping, fat reduction, and tissue tightening after lifestyle or weight changes.',
          details: ['High-Definition Precision Liposuction', 'Abdominoplasty (Tummy Tuck & Muscle Repair)', 'Post-Bariatric Body Contouring', 'Brachioplasty (Arm Lift) & Thigh Lift'],
          duration: 'Tailored surgical plan',
          iconName: 'UserCheck'
        },
        {
          id: 'esthetique-medicale',
          title: 'Precision Aesthetic Medicine',
          category: 'Non-Invasive Treatments',
          shortDesc: 'Subtle injectable treatments to soften lines, restore volume, and hydrate without downtime.',
          details: ['Hyaluronic Acid Dermal Fillers (Lips & Contours)', 'Botox (Preventative & Corrective Wrinkle Relaxers)', 'Skinboosters & Deep Mesotherapy', 'Collagen Biostimulators'],
          duration: '30 to 45-minute clinic visit',
          iconName: 'Droplets'
        },
        {
          id: 'reconstructrice',
          title: 'Reconstructive & Scar Revision',
          category: 'Reconstruction',
          shortDesc: 'Tissue reconstruction, complex scar revision, and dermatological skin lesion excision.',
          details: ['Surgical Scar Revision & Improvement', 'Skin Lesion Excision & Reconstruction', 'Post-Traumatic Restorative Surgery', 'Correction of Congenital Conditions'],
          duration: 'Clinical assessment required',
          iconName: 'ShieldPlus'
        },
        {
          id: 'regeneration',
          title: 'Skin Quality & Dermal Rejuvenation',
          category: 'Dermato-Aesthetics',
          shortDesc: 'Advanced medical skincare protocols to even tone, refine pores, and restore radiant texture.',
          details: ['Medical Grade Chemical Peels', 'Combined Anti-Aging Protocols', 'Targeted Dermal Regeneration', 'Tailored Medical Skincare Regimens'],
          duration: 'Custom treatment series',
          iconName: 'Sun'
        }
      ],
      ctaCardTitle: 'Considering a Procedure in Marrakesh?',
      ctaCardText: 'Every patient is provided with comprehensive, unhurried time during the initial consultation to discuss goals, examine anatomical options, and outline a tailored plan.',
      ctaCardBtn: 'Schedule WhatsApp Consultation'
    },
    aboutSection: {
      badge: 'About the Surgeon',
      title: 'A Commitment to Excellence & Patient Safety',
      doctorName: 'Dr. Meriem DLIMI',
      doctorTitle: 'Board-Certified Plastic, Reconstructive & Aesthetic Surgeon',
      paragraph1: 'Practicing in Marrakesh at the CENTRE AMAZIGHI EMS, Dr. Meriem DLIMI combines refined surgical skill with an artistic aesthetic eye to deliver harmonious, enduring, and natural outcomes.',
      paragraph2: 'As a specialist in plastic surgery, she adheres to the highest ethical and medical standards. Every procedure is customized rather than generic, ensuring that individual anatomical balance is honored with utmost precision.',
      paragraph3: 'The Marrakesh practice provides a tranquil, sophisticated, and discreet medical atmosphere equipped to exceed the strictest international safety and hygiene standards.',
      qualifications: [
        'Board-Certified Specialist in Plastic, Reconstructive & Aesthetic Surgery',
        'Modern private practice at Centre Amazighi EMS on Boulevard My Abdellah',
        'Surgical procedures conducted strictly in accredited hospital operating theaters',
        'Conservative philosophy emphasizing natural beauty and anatomical balance'
      ],
      philosophyTitle: 'Our Medical Philosophy',
      philosophyText: '“To enhance without altering identity, reconstruct with exact precision, and support every patient with the highest degree of human empathy and clinical excellence.”',
      clinicTitle: 'The Marrakesh Practice',
      clinicText: 'Located in Bureau 4 at CENTRE AMAZIGHI EMS, our clinic welcomes you into a refined, comfortable setting designed for clear and confident discussion.'
    },
    reviewsSection: {
      badge: 'Patient Feedback',
      title: 'Real Reviews & Patient Trust',
      subtitle: 'The satisfaction of our patients reflects our steadfast dedication to surgical mastery and attentive aftercare.',
      googleRatingText: '4.9 out of 5 Average Rating',
      basedOn: 'Based on 68 verified reviews on Google Maps',
      viewGoogleReviews: 'View all reviews on Google Maps',
      items: [
        {
          id: 'rev-en-1',
          author: 'Kawtar E.',
          rating: 5,
          date: '2 months ago',
          service: 'Rhinoplasty & Facial Injections',
          comment: 'Dr. Meriem DLIMI is an outstanding surgeon. Incredibly attentive, gentle, and reassuring from our very first meeting. My results are completely natural and exactly what I hoped for. Thank you so much.',
          verified: true
        },
        {
          id: 'rev-en-2',
          author: 'Sebastien M.',
          rating: 5,
          date: '3 months ago',
          service: 'Body Contouring',
          comment: 'I traveled specifically to Marrakesh for my procedure and was deeply impressed by Dr. Dlimi’s professionalism and precision. The post-operative follow-up was impeccable and attentive.',
          verified: true
        },
        {
          id: 'rev-en-3',
          author: 'Fatima-Zahra B.',
          rating: 5,
          date: '1 month ago',
          service: 'Breast Surgery',
          comment: 'Flawless care from start to finish. Dr. Meriem instills complete confidence and explains every clinical step with honesty and clarity. I recommend her 100%.',
          verified: true
        },
        {
          id: 'rev-en-4',
          author: 'Nadia L.',
          rating: 5,
          date: '4 months ago',
          service: 'Aesthetic Medicine & Botox',
          comment: 'Very delicate and refined technique. The result looks refreshed and rested without any frozen look. The clinic is spotless and the reception is warm.',
          verified: true
        },
        {
          id: 'rev-en-5',
          author: 'Amine R.',
          rating: 5,
          date: '5 months ago',
          service: 'Scar Revision',
          comment: 'Highly conscientious doctor with impressive technical mastery. Excellent guidance and exemplary aftercare. Huge gratitude to Dr. Dlimi and her team.',
          verified: true
        },
        {
          id: 'rev-en-6',
          author: 'Laila K.',
          rating: 5,
          date: '2 months ago',
          service: 'Blepharoplasty (Eyelid Lift)',
          comment: 'Blepharoplasty performed with immense precision. No visible scar and my gaze looks refreshed and ten years younger. A true reference in Marrakesh.',
          verified: true
        }
      ]
    },
    faqSection: {
      badge: 'Patient Information',
      title: 'Frequently Asked Questions',
      subtitle: 'Clear, transparent answers regarding consultations, procedures, and recovery.',
      items: [
        {
          id: 'faq-en-1',
          question: 'What occurs during the initial consultation?',
          answer: 'The initial consultation is a comprehensive medical examination and personal conversation. Dr. Meriem DLIMI will evaluate your anatomical goals, review medical history, answer all questions, and provide a clear surgical roadmap alongside transparent pricing and medical guidelines.'
        },
        {
          id: 'faq-en-2',
          question: 'Where are surgical procedures performed?',
          answer: 'All surgical operations requiring anesthesia are conducted exclusively in fully accredited partner clinics and private hospitals in Marrakesh equipped with advanced operating theaters and strict sterilization protocols.'
        },
        {
          id: 'faq-en-3',
          question: 'How long is the typical recovery period?',
          answer: 'Recovery times vary by treatment: 24 to 48 hours for non-invasive medical aesthetics, and 7 to 14 days for facial or body surgical procedures. You will be provided with explicit post-op instructions and scheduled follow-up visits.'
        },
        {
          id: 'faq-en-4',
          question: 'Do you welcome international patients traveling to Marrakesh?',
          answer: 'Yes. Many patients travel from Europe and overseas to Marrakesh. We provide remote preliminary assessments via secure messaging to help coordinate your stay, medical schedule, and recovery period smoothly.'
        },
        {
          id: 'faq-en-5',
          question: 'How do I schedule an appointment?',
          answer: 'You can easily request a consultation directly via WhatsApp at +212 666-123085 or by completing the form below. Our clinic coordinator will get back to you promptly with available appointment times.'
        }
      ]
    },
    locationSection: {
      badge: 'Location & Practice',
      title: 'Our Clinic in Marrakesh',
      subtitle: 'Conveniently situated on Boulevard My Abdellah in Marrakesh, easily accessible with ample nearby parking.',
      addressLabel: 'Practice Address',
      addressValue: 'bureau 4, CENTRE AMAZIGHI EMS, immeuble 6 Boulevard My Abdellah, Marrakesh 46000, Morocco',
      phoneLabel: 'Telephone & WhatsApp',
      hoursLabel: 'Office Hours',
      hoursValueWeek: 'Monday – Friday: 09:00 AM – 06:30 PM',
      hoursValueSat: 'Saturday: 09:00 AM – 01:00 PM',
      hoursValueSun: 'Sunday: Closed (Post-op emergencies only)',
      directionsBtn: 'Get Google Maps Directions',
      openMapsBtn: 'Open on Google Maps',
      parkingNotice: 'Easy roadside parking along Boulevard My Abdellah and dedicated parking bays near Centre Amazighi.'
    },
    bookingSection: {
      badge: 'Consultation & Contact',
      title: 'Request Your Consultation',
      subtitle: 'Submit your appointment request confidentially. Our clinic staff will message you on WhatsApp to confirm your preferred date.',
      formTitle: 'Direct Appointment Request',
      formDesc: 'Complete the brief form below to connect instantly with Dr. Meriem DLIMI’s medical team on WhatsApp.',
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g., Sarah Bennani',
      phoneLabel: 'Phone / WhatsApp Number',
      phonePlaceholder: 'e.g., +212 6 XX XX XX XX',
      serviceLabel: 'Desired Procedure / Consultation Topic',
      serviceSelectDefault: 'Select a procedure or consultation...',
      notesLabel: 'Notes or Preferred Timing (Optional)',
      notesPlaceholder: 'Describe your request or ideal appointment day...',
      submitBtn: 'Send Request via WhatsApp',
      privacyNote: 'Your personal and health information is strictly confidential under medical secrecy standards.',
      directCallText: 'Prefer to call the clinic directly?'
    },
    footer: {
      aboutSnippet: 'Specialist medical practice of Dr. Meriem DLIMI in Marrakesh 46000, dedicated to plastic, reconstructive, and aesthetic surgery with natural, balanced results.',
      quickLinks: 'Quick Links',
      servicesTitle: 'Procedures',
      contactTitle: 'Practice Details',
      scheduleTitle: 'Consultation Hours',
      rightsReserved: 'All rights reserved. Dr. Meriem DLIMI Medical Practice.',
      medicalDisclaimer: 'Content on this website is for informational purposes only and does not substitute for a formal clinical consultation with a qualified medical doctor.',
      privacy: 'Privacy Policy',
      terms: 'Legal Terms'
    }
  }
};
