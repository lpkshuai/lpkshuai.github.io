import { nav as zhNav } from "./zh/nav";

import { nav as enNav } from "./en/nav";

export const dictionaries = {
  zh: {
    nav: zhNav,
  },

  en: {
    nav: enNav,
  },
};

export type Dictionary = typeof dictionaries;
