"use client";

import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import yo from "./locales/yo.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },

    yo: {
      translation: yo,
    },
  },

  lng: "en",

  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;