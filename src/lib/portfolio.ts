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
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  date: string;
  category: PortfolioCategory;
  image?: ImageMetadata;
};

/** Publicaciones del blog. Agregar entradas aquí o conectar WordPress más adelante. */
export const PORTFOLIO_POSTS: PortfolioPost[] = [
  {
    slug: 'noticia-rubia-2026',
    title: 'Nueva línea Rubia disponible en CDMX y zona centro',
    excerpt:
      'Ampliamos inventario de lubricantes para diésel y servicio pesado, con asesoría para elegir viscosidad y tecnología según su flotilla.',
    body: [
      'En AGL Legaspi ampliamos la disponibilidad de la línea Rubia para motores diésel y aplicaciones de servicio pesado en Ciudad de México, Estado de México, Morelos y zonas cercanas.',
      'Rubia ofrece protección ante depósitos, control de consumo y intervalos de drenaje competitivos. Nuestro equipo técnico le ayuda a elegir la viscosidad y la especificación correcta según el fabricante de su equipo.',
      'Si opera flotillas, transporte o maquinaria de construcción, contáctenos para cotización y disponibilidad inmediata en nuestros centros de distribución.',
    ],
    date: '2026-05-20',
    category: 'noticia',
    image: heroProducts,
  },
  {
    slug: 'evento-taller-2026',
    title: 'Jornada técnica para talleres y flotillas',
    excerpt:
      'Sesión presencial sobre buenas prácticas de lubricación, intervalos de cambio y compatibilidad con especificaciones de fabricante.',
    body: [
      'Realizamos una jornada técnica dirigida a talleres mecánicos y responsables de mantenimiento de flotillas, con enfoque en buenas prácticas de lubricación y reducción de fallas por uso incorrecto de aceite.',
      'Abordamos temas como intervalos de cambio, control de viscosidad, compatibilidad con especificaciones API y ACEA, y selección de productos TotalEnergies y ELF según la aplicación.',
      'Si le interesa participar en futuras sesiones o recibir material de la jornada, escríbanos desde la página de contacto y con gusto le atendemos.',
    ],
    date: '2026-04-12',
    category: 'evento',
    image: consultationImg,
  },
  {
    slug: 'publicacion-guia-industrial',
    title: 'Guía rápida: lubricación industrial en México',
    excerpt:
      'Resumen de criterios para seleccionar aceites en maquinaria de construcción, minería y plantas de proceso.',
    body: [
      'La lubricación industrial exige considerar carga, temperatura, velocidad, contaminantes y las recomendaciones del fabricante del equipo. Una mala elección puede traducirse en desgaste prematuro y paros costosos.',
      'En esta guía resumimos criterios prácticos para plantas de proceso, minería y construcción: tipo de base (mineral o sintética), viscosidad ISO, requisitos de zinc y cenizas, y frecuencia de monitoreo.',
      'Como distribuidores Total ELF, apoyamos la homologación y el seguimiento técnico para que su operación mantenga continuidad y rentabilidad.',
    ],
    date: '2026-03-28',
    category: 'publicacion',
    image: aboutHero,
  },
  {
    slug: 'noticia-total-elf-2026',
    title: 'TotalEnergies y ELF: respaldo homologado para su operación',
    excerpt:
      'Como distribuidores exclusivos, ofrecemos productos con aprobación ante fabricantes y armadoras en distintos sectores.',
    body: [
      'TotalEnergies y ELF cuentan con homologaciones y aprobaciones de uso ante fabricantes de motores, transmisiones y componentes en sectores automotriz, industrial, agrícola y de transporte.',
      'En AGL Legaspi respaldamos esa oferta con inventario regional, entregas oportunas y asesoría antes y después de la compra para que cada cliente elija con claridad.',
      'Si necesita validar una especificación para un contrato, flotilla o planta industrial, nuestro equipo comercial y técnico está disponible en CDMX y Cuernavaca.',
    ],
    date: '2026-02-15',
    category: 'noticia',
    image: catalogRef,
  },
  {
    slug: 'evento-expo-2025',
    title: 'Participación en expo de refacciones y lubricantes',
    excerpt:
      'Compartimos catálogo, demostraciones de producto y atención técnica para visitantes de CDMX y Estado de México.',
    body: [
      'Participamos en una expo de refacciones y lubricantes con presencia de marcas automotrices e industriales, atendiendo a talleres, distribuidores y empresas de transporte de la zona centro.',
      'En el stand presentamos líneas Quartz, Rubia y soluciones ELF para distintas aplicaciones, con material técnico y asesoría en sitio sobre viscosidades y presentaciones.',
      'Agradecemos a quienes nos visitaron. Para cotizaciones posteriores al evento, puede comunicarse con nosotros por teléfono o correo.',
    ],
    date: '2025-11-08',
    category: 'evento',
    image: designImg,
  },
  {
    slug: 'publicacion-centros-distribucion',
    title: 'Dos centros de distribución, una misma atención',
    excerpt:
      'Conoce nuestras ubicaciones en Ciudad de México y Cuernavaca, y cómo apoyamos entregas en tiempos competitivos.',
    body: [
      'Contamos con centros de distribución en Ciudad de México y Cuernavaca, Morelos, para atender pedidos de lubricantes, grasas y fluidos con tiempos de respuesta competitivos.',
      'Desde ambas ubicaciones surtimos a clientes en CDMX, Estado de México, Morelos y zonas cercanas, con el mismo estándar de servicio y soporte técnico-comercial.',
      'Consulte direcciones y teléfonos en nuestra página de contacto o llámenos para coordinar entregas y asesoría en su planta o taller.',
    ],
    date: '2025-10-02',
    category: 'publicacion',
    image: transformImg,
  },
  {
    slug: 'noticia-asesoria-2025',
    title: 'Asesoría técnica antes y después de la compra',
    excerpt:
      'Nuestro equipo combina experiencia comercial y técnica para orientarle sin complicaciones en cada pedido.',
    body: [
      'Más que vender un producto, acompañamos a cada cliente para que la lubricación de su operación sea segura, rentable y alineada con las especificaciones del fabricante.',
      'Antes de la compra revisamos aplicación, condiciones de trabajo y requisitos normativos. Después del pedido damos seguimiento para resolver dudas de uso, almacenamiento y reposición.',
      'Con más de 30 años en el mercado y distribución exclusiva Total ELF, AGL Legaspi es su aliado en la zona centro del país.',
    ],
    date: '2025-08-22',
    category: 'noticia',
    image: teamImg,
  },
];

export function getPortfolioPostUrl(slug: string): string {
  return `/portfolio/${slug}`;
}

export function getPortfolioPosts(): PortfolioPost[] {
  return [...PORTFOLIO_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPortfolioPostBySlug(slug: string): PortfolioPost | undefined {
  return PORTFOLIO_POSTS.find((post) => post.slug === slug);
}

export function getPortfolioSearchText(post: PortfolioPost): string {
  const category = PORTFOLIO_CATEGORY_LABELS[post.category];
  return [post.title, post.excerpt, category, ...post.body].join(' ');
}

export function formatPortfolioDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
