// Centralized SEO configuration for Gostilna Rožmarin & Apartmaji Babi.

// Real site origin. Falls back to the canonical domain when the environment
// variable is not set at build time.
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://gostilna-rozmarin.si').replace(/\/+$/, '');

export const SITE_NAME = 'Gostilna Rožmarin & Apartmaji Babi';

// Reuses the existing Open Graph image already shipped in index.html so we
// never invent a new image URL.
export const DEFAULT_OG_IMAGE =
  'https://readdy.ai/api/search-image?query=Traditional%20Slovenian%20countryside%20restaurant%20and%20guesthouse%20exterior%20at%20warm%20golden%20dusk%2C%20rustic%20wooden%20facade%20with%20flower%20boxes%2C%20inviting%20terrace%20with%20lanterns%2C%20cozy%20hospitality%20atmosphere%2C%20professional%20travel%20and%20food%20photography%20with%20soft%20warm%20lighting&width=1200&height=630&seq=og-gostilna-rozmarin-hero&orientation=landscape';

export interface SeoMeta {
  title: string;
  description: string;
  keywords: string;
  robots?: string;
}

export const seoByPath: Record<string, SeoMeta> = {
  '/': {
    title: 'Gostilna Rožmarin & Apartmaji Babi',
    description:
      'Gostilna Rožmarin in Apartmaji Babi v Markovcih pri Ptuju. Domača hrana, pice, wellness apartmaji, terasa in odlična lokacija za raziskovanje Ptujskega jezera in Donačke gore.',
    keywords:
      'Gostilna Rožmarin, Apartmaji Babi, Ptuj, Ptujsko jezero, Donačka gora, wellness, pice, Markovci, nastanitev',
  },
  '/gostilna': {
    title: 'Gostilna Rožmarin | Domača hrana in pice pri Ptuju',
    description:
      'Družinska Gostilna Rožmarin v Markovcih pri Ptuju ponuja domače jedi, pice iz krušne peči in prijeten ambient s pokrito teraso. Rezervirajte svojo mizo.',
    keywords:
      'Gostilna Rožmarin, gostilna Ptuj, domača hrana, pice, Markovci, terasa, restavracija',
  },
  '/pice': {
    title: 'Pice | Gostilna Rožmarin pri Ptuju',
    description:
      'Bogato obložene pice iz krušne peči v Gostilni Rožmarin. Ročno pripravljeno testo in sveže sestavine v Markovcih pri Ptuju.',
    keywords: 'pice, pica, Gostilna Rožmarin, krušna peč, pica Ptuj, Markovci',
  },
  '/jedilni-list': {
    title: 'Jedilni list | Gostilna Rožmarin pri Ptuju',
    description:
      'Celoten jedilni list Gostilne Rožmarin: pice, jedi, pijače in topli napitki. Oglejte si našo ponudbo v Markovcih pri Ptuju.',
    keywords:
      'jedilni list, meni, Gostilna Rožmarin, pice, pijače, topli napitki, Markovci',
  },
  '/apartmaji': {
    title: 'Apartmaji Babi | Wellness nastanitev pri Ptuju',
    description:
      'Prijetni apartmaji v rustikalnem slogu z wellnessom, teraso in odlično lokacijo v Markovcih pri Ptuju. Rezervirajte svoj oddih.',
    keywords:
      'Apartmaji Babi, apartmaji Ptuj, nastanitev, wellness, Markovci, Donačka gora',
  },
  '/wellness': {
    title: 'Wellness | Jacuzzi in savna pri Ptuju',
    description:
      'Sprostite se v wellnessu z jacuzzijem in savno v Apartmajih Babi. Idealen oddih v Markovcih pri Ptuju.',
    keywords: 'wellness, jacuzzi, savna, sprostitev, Apartmaji Babi, Ptuj',
  },
  '/galerija': {
    title: 'Galerija | Gostilna Rožmarin & Apartmaji Babi',
    description:
      'Oglejte si fotografije Gostilne Rožmarin, Apartmajev Babi, wellnessa in okolice Ptujskega jezera ter Donačke gore.',
    keywords: 'galerija, fotografije, Gostilna Rožmarin, Apartmaji Babi, Ptuj, wellness',
  },
  '/dozivetja': {
    title: 'Doživetja in okolica | Ptujsko jezero in Donačka gora',
    description:
      'Raziščite Ptuj, Ptujsko jezero, Donačko goro in druge znamenitosti v okolici Gostilne Rožmarin in Apartmajev Babi v Markovcih.',
    keywords: 'doživetja, Ptuj, Ptujsko jezero, Donačka gora, izleti, Markovci, okolica',
  },
  '/cenik': {
    title: 'Cenik | Apartmaji in wellness pri Ptuju',
    description:
      'Cenik apartmajev, wellnesa in dodatnih storitev v Apartmajih Babi. Preverite cene nastanitve v Markovcih pri Ptuju.',
    keywords: 'cenik, cene, apartmaji, wellness, Apartmaji Babi, Ptuj',
  },
  '/kontakt': {
    title: 'Kontakt in rezervacije | Gostilna Rožmarin & Apartmaji Babi',
    description:
      'Kontaktni podatki, delovni čas in rezervacije za Gostilno Rožmarin in Apartmaje Babi v Markovcih pri Ptuju. Pokličite nas na 041 753 335.',
    keywords:
      'kontakt, rezervacije, Gostilna Rožmarin, Apartmaji Babi, telefon, delovni čas, Markovci',
  },
};

// For unknown paths (e.g. the 404 catch-all) we mark the page as non-indexable
// and avoid any real SEO optimization.
export function getSeoMeta(pathname: string): SeoMeta {
  const known = seoByPath[pathname];
  if (known) return known;

  return {
    title: 'Stran ne obstaja | Gostilna Rožmarin & Apartmaji Babi',
    description:
      'Ta stran ne obstaja. Obiščite Gostilno Rožmarin in Apartmaje Babi v Markovcih pri Ptuju.',
    keywords: '',
    robots: 'noindex, nofollow',
  };
}