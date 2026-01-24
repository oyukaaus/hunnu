"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "../../public/locales/en/common.json";
import mnCommon from "../../public/locales/mn/common.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { common: enCommon },
    mn: { common: mnCommon },
  },
  lng: "en",
  fallbackLng: "en",
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

export default i18n;
