"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { dictionaries } from "@/i18n";

export function useDictionary() {
  const { language } = useLanguage();

  return dictionaries[language];
}
