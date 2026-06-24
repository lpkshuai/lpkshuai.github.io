"use client";

import { useLanguage } from "@/contexts/LanguageContext";

import {
  statusLabel as zhStatus,
  typeLabel as zhType,
} from "@/i18n/zh/notes-labels";

import {
  statusLabel as enStatus,
  typeLabel as enType,
} from "@/i18n/en/notes-labels";

export function useNoteLabels() {
  const { language } = useLanguage();

  return {
    statusLabel: language === "zh" ? zhStatus : enStatus,

    typeLabel: language === "zh" ? zhType : enType,
  };
}
