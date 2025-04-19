import React, { createContext, useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './translationsglobal.json';

// Initialize i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translations.en,
    },
    fi: {
      translation: translations.fi,
    },
  },
  lng: localStorage.getItem('language') || 'en', // Get language from localStorage or default to 'en'
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  // Initialize state with value from localStorage or default to 'en'
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem('language') || 'en'
  );

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
    localStorage.setItem('language', lng); // Save
  };

  // Effect to sync language with localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && savedLanguage !== selectedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setSelectedLanguage(savedLanguage);
    }
  }, [selectedLanguage]);

  return (
    <LanguageContext.Provider value={{ selectedLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, LanguageContext };
