import type { ImageMetadata } from 'astro';
import aboutHero from '/src/assets/images/hero/about-hero.png';
import heroProducts from '/src/assets/images/hero/hero_2.jpg';
import catalogRef from '/src/assets/images/catalog/image_1.jpg';
import consultationImg from '/src/assets/images/sections/consultation.jpg';
import designImg from '/src/assets/images/sections/design.jpg';
import transformImg from '/src/assets/images/sections/transform.jpg';
import teamImg from '/src/assets/images/sections/two-women-sitting.png';

export type PortfolioCategory = 'publicacion' | 'evento' | 'noticia';

export const PORTFOLIO_CATEGORY_LABELS: Record<PortfolioCategory, string> = {
  publicacion: 'Publicación',
  evento: 'Evento',
  noticia: 'Noticia',
};

export type PortfolioPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: PortfolioCategory;
  image?: ImageMetadata;
  href?: string;
};

/** Publicaciones del portafolio. Agregar entradas aquí o conectar WordPress más adelante. */
export const PORTFOLIO_POSTS: PortfolioPost[] = [
  {
    id: 'noticia-rubia-2026',
    title: 'Nueva línea Rubia disponible en CDMX y zona centro',
    excerpt:
      'Ampliamos inventario de lubricantes para diésel y servicio pesado, con asesoría para elegir viscosidad y tecnología según su flotilla.',
    date: '2026-05-20',
    category: 'noticia',
    image: heroProducts,
  },
  {
    id: 'evento-taller-2026',
    title: 'Jornada técnica para talleres y flotillas',
    excerpt:
      'Sesión presencial sobre buenas prácticas de lubricación, intervalos de cambio y compatibilidad con especificaciones de fabricante.',
    date: '2026-04-12',
    category: 'evento',
    image: consultationImg,
    href: '/contact',
  },
  {
    id: 'publicacion-guia-industrial',
    title: 'Guía rápida: lubricación industrial en México',
    excerpt:
      'Resumen de criterios para seleccionar aceites en maquinaria de construcción, minería y plantas de proceso.',
    date: '2026-03-28',
    category: 'publicacion',
    image: aboutHero,
  },
  {
    id: 'noticia-total-elf-2026',
    title: 'TotalEnergies y ELF: respaldo homologado para su operación',
    excerpt:
      'Como distribuidores exclusivos, ofrecemos productos con aprobación ante fabricantes y armadoras en distintos sectores.',
    date: '2026-02-15',
    category: 'noticia',
    image: catalogRef,
  },
  {
    id: 'evento-expo-2025',
    title: 'Participación en expo de refacciones y lubricantes',
    excerpt:
      'Compartimos catálogo, demostraciones de producto y atención técnica para visitantes de CDMX y Estado de México.',
    date: '2025-11-08',
    category: 'evento',
    image: designImg,
  },
  {
    id: 'publicacion-centros-distribucion',
    title: 'Dos centros de distribución, una misma atención',
    excerpt:
      'Conoce nuestras ubicaciones en Ciudad de México y Cuernavaca, y cómo apoyamos entregas en tiempos competitivos.',
    date: '2025-10-02',
    category: 'publicacion',
    image: transformImg,
    href: '/contact',
  },
  {
    id: 'noticia-asesoria-2025',
    title: 'Asesoría técnica antes y después de la compra',
    excerpt:
      'Nuestro equipo combina experiencia comercial y técnica para orientarle sin complicaciones en cada pedido.',
    date: '2025-08-22',
    category: 'noticia',
    image: teamImg,
  },
];

export function getPortfolioPosts(): PortfolioPost[] {
  return [...PORTFOLIO_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function formatPortfolioDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
