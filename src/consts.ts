import type { Site, Socials } from './types';

/** Normaliza un teléfono mexicano mostrado a `tel:+52…` (10 dígitos nacionales). */
export function toTelHref(phone: string): string {
  const d = phone.replace(/\D/g, '');
  if (d.length === 10) return `tel:+52${d}`;
  return `tel:+${d}`;
}

export const SITE: Site = {
  COMPANY_NAME: 'AGL Legaspi',
  LEGAL_NAME: 'AGL Legaspi',
  TITLE: 'Aceites y lubricantes con respaldo profesional.',
  DESCRIPTION:
    'Distribución Total ELF y soluciones de lubricación en CDMX, Estado de México, Morelos y más.',
  CANONICAL_URL: import.meta.env.DEV
    ? 'http://localhost:4321'
    : 'https://one-space-away-html.pages.dev',
  LOCALE: 'es',
  TELEPHONE: '(55) 5751-1569',
  EMAIL: 'contacto@agllegaspi.com',
  /** Dirección principal (p. ej. metadatos / schema); sucursales completas en CONTACT_LOCATIONS. */
  ADDRESS:
    'Av 503 143, San Juan de Aragón I Secc, 07969 Ciudad de México, CDMX',

  OG_IMAGE: '/og-image.webp',

  TWITTER: {
    CREATOR: '@one_space_away',
    CARD: 'summary_large_image',
  },
};

export const SOCIALS: Socials = [
  {
    NAME: 'Instagram',
    ICON: 'instagram',
    LABEL: `${SITE.COMPANY_NAME} on Instagram`,
    HREF: 'https://www.instagram.com/',
  },
  {
    NAME: 'Facebook',
    ICON: 'facebook',
    LABEL: `${SITE.COMPANY_NAME} on Facebook`,
    HREF: 'https://www.facebook.com/',
  },
  {
    NAME: 'Pinterest',
    ICON: 'pinterest',
    LABEL: `${SITE.COMPANY_NAME} on Pinterest`,
    HREF: 'https://www.pinterest.com/',
  },
  {
    NAME: 'Youtube',
    ICON: 'youtube',
    LABEL: `${SITE.COMPANY_NAME} on YouTube`,
    HREF: 'https://www.youtube.com/',
  },
];

/** Sucursales con enlace a Google Maps e iframe embebido. */
export const CONTACT_LOCATIONS = [
  {
    id: 'cdmx',
    title: 'Ciudad de México',
    phones: [
      '(55) 5751-1569',
      '(55) 5751-1574',
      '(55) 5751-6501',
      '(55) 4410-8408',
    ],
    address:
      'Av 503 143, San Juan de Aragón I Secc, 07969 Ciudad de México, CDMX.',
    mapsUrl:
      'https://www.google.com/maps/place/Aceites+TotalEnergies+ELF+Distribuidor+Mayorista/@19.4560369,-99.096981,901m/data=!3m2!1e3!4b1!4m6!3m5!1s0x85d1fbe12104cfd9:0x7fa8c4aca2f34de8!8m2!3d19.4560369!4d-99.096981!16s%2Fg%2F1tql53fz?hl=es&entry=ttu',
    embedSrc:
      'https://maps.google.com/maps?q=19.4560369,-99.096981&z=17&hl=es&output=embed',
  },
  {
    id: 'morelos',
    title: 'Morelos — Cuernavaca',
    phones: ['(777) 318 4937', '(777) 361 0656', '(55) 4410-8408'],
    address: 'Lázaro Cárdenas 2 B, Lazaro Cardenas, 62080 Cuernavaca, Mor.',
    mapsUrl:
      'https://www.google.com/maps?cid=5444569026220032927&hl=es&gl=MX',
    embedSrc:
      'https://maps.google.com/maps?cid=5444569026220032927&hl=es&output=embed',
  },
] as const;
