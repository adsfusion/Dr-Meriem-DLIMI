import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { translations } from './data/translations';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { AnatomyGuide } from './components/AnatomyGuide';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { CertificationsSection } from './components/CertificationsSection';
import { About } from './components/About';
import { Reviews } from './components/Reviews';
import { Faq } from './components/Faq';
import { LocationSection } from './components/LocationSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';
import { WelcomeModal } from './components/WelcomeModal';
import { ReadingProgressBar } from './components/ReadingProgressBar';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('fr');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('clinic_theme_mode');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    // Synchronize HTML attributes for language and text direction
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    // Update document title and meta description dynamically
    const content = translations[currentLang];
    document.title = content.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', content.metaDesc);
    }
  }, [currentLang]);

  useEffect(() => {
    localStorage.setItem('clinic_theme_mode', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#07131F';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#FAF9F6';
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const content = translations[currentLang];

  return (
    <div
      className={`min-h-screen flex flex-col antialiased transition-colors duration-300 ${
        isDarkMode ? 'bg-[#07131F] text-slate-100' : 'bg-[#FAF9F6] text-[#1E293B]'
      } ${currentLang === 'ar' ? 'font-arabic-heading' : 'font-sans'}`}
      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Viewport Reading Scroll Progress Bar */}
      <ReadingProgressBar currentLang={currentLang} />

      {/* Primary Navigation & Header with Theme Toggle */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        content={content}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero content={content} currentLang={currentLang} />
        <TrustBar content={content} currentLang={currentLang} isDarkMode={isDarkMode} />
        <Services content={content} currentLang={currentLang} isDarkMode={isDarkMode} />
        <AnatomyGuide content={content} currentLang={currentLang} isDarkMode={isDarkMode} />
        <BeforeAfterGallery content={content} currentLang={currentLang} isDarkMode={isDarkMode} />
        <CertificationsSection content={content} currentLang={currentLang} isDarkMode={isDarkMode} />
        <About content={content} currentLang={currentLang} isDarkMode={isDarkMode} />
        <Reviews content={content} currentLang={currentLang} isDarkMode={isDarkMode} />
        <Faq content={content} currentLang={currentLang} isDarkMode={isDarkMode} />
        <LocationSection content={content} currentLang={currentLang} isDarkMode={isDarkMode} />
        <BookingSection content={content} currentLang={currentLang} isDarkMode={isDarkMode} />
      </main>

      {/* Footer */}
      <Footer
        content={content}
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
      />

      {/* Floating Back to Top Button */}
      <BackToTop currentLang={currentLang} />

      {/* Persistent Floating WhatsApp Contact Action */}
      <FloatingWhatsApp currentLang={currentLang} />

      {/* Subtle 3-Second Welcome Modal for Direct Patient Conversion */}
      <WelcomeModal currentLang={currentLang} isDarkMode={isDarkMode} content={content} />
    </div>
  );
}
