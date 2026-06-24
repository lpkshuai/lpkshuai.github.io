import { nav as zhNav } from "./zh/nav";
import { nav as enNav } from "./en/nav";
import { home as zhHome } from "./zh/home";
import { home as enHome } from "./en/home";

export const dictionaries = {
  zh: {
    nav: zhNav,
    home: zhHome,
  },

  en: {
    nav: enNav,
    home: enHome,
  },
};

export type Dictionary = typeof dictionaries;
