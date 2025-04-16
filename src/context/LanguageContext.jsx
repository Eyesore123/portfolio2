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
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fi');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, LanguageContext };