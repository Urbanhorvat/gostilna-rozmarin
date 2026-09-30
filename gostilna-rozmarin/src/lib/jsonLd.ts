// Schema.org JSON-LD builders. Kept separate from the runtime meta-tag manager
// so OG/Twitter mutation and structured data injection stay decoupled.

import { SITE_URL } from './seo';

// Existing absolute image URLs already used across the site.
const RESTAURANT_IMAGE =
  'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/4bf46d5618625e37335596135857ff2b.png';
const LODGING_IMAGE =
  'https://static.readdy.ai/image/610b801a81a299b5cf2b47908013d228/af1fa38fd71168577a661a6aaaab376a.png';

function buildAddress() {
  return {
    '@type': 'PostalAddress',
    streetAddress: 'Markovci 28',
    postalCode: '2281',
    addressLocality: 'Markovci',
    addressRegion: 'Podravska',
    addressCountry: 'SI',
  };
}

function buildRestaurantJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'Gostilna Rožmarin',
    image: RESTAURANT_IMAGE,
    url: `${SITE_URL}/`,
    telephone: '+38641753335',
    email: 'rozmariniva@gmail.com',
    servesCuisine: ['Slovenska kuhinja', 'Pica'],
    priceRange: '€€',
    address: buildAddress(),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '10:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday'],
        opens: '10:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '12:00',
        closes: '21:00',
      },
    ],
  };
}

function buildLodgingJsonLd(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: 'Apartmaji Babi',
    image: LODGING_IMAGE,
    url: `${SITE_URL}/apartmaji`,
    telephone: '+38641753335',
    email: 'rozmariniva@gmail.com',
    address: buildAddress(),
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Jacuzzi' },
      { '@type': 'LocationFeatureSpecification', name: 'Savna' },
      { '@type': 'LocationFeatureSpecification', name: 'Terasa' },
    ],
  };
}

export function getJsonLdForPath(pathname: string): object | null {
  if (pathname === '/' || pathname === '/gostilna') {
    return buildRestaurantJsonLd();
  }
  if (pathname === '/apartmaji') {
    return buildLodgingJsonLd();
  }
  return null;
}