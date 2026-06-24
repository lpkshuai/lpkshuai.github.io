import { nav as zhNav } from "./zh/nav";
import { nav as enNav } from "./en/nav";
import { home as zhHome } from "./zh/home";
import { home as enHome } from "./en/home";
import { about as zhAbout } from "./zh/about";
import { about as enAbout } from "./en/about";
import { notes as zhNotes } from "./zh/notes";
import { notes as enNotes } from "./en/notes";

export const dictionaries = {
  zh: {
    nav: zhNav,
    home: zhHome,
    about: zhAbout,
    notes: zhNotes,
  },

  en: {
    nav: enNav,
    home: enHome,
    about: enAbout,
    notes: enNotes,
  },
};

export type Dictionary = typeof dictionaries;
