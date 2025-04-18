import React, { createContext, useState } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './translationsglobal.json';
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translations.en,
    },
    fi: {
      translation: translations.fi,
    },
  },
  lng: 'en', // Keep this as 'en' to set the initial language to English
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, LanguageContext };