import type { ImageMetadata } from 'astro';
import emma from '/src/assets/images/team/emma.jpg';
import sarah from '/src/assets/images/team/sarah-johnson.jpg';
import memberThree from '/src/assets/images/sections/consultation.jpg';
import memberFour from '/src/assets/images/sections/design.jpg';
import memberFive from '/src/assets/images/sections/two-women-sitting.png';
import memberSix from '/src/assets/images/sections/transform.jpg';

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: ImageMetadata;
};

/** Miembros del equipo. Sustituir fotos y datos por el equipo real de AGL. */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'María González',
    role: 'Dirección comercial',
    image: sarah,
  },
  {
    id: '2',
    name: 'Carlos Mendoza',
    role: 'Asesoría técnica',
    image: memberThree,
  },
  {
    id: '3',
    name: 'Ana Legaspi',
    role: 'Atención a clientes',
    image: emma,
  },
  {
    id: '4',
    name: 'Roberto Sánchez',
    role: 'Logística y distribución',
    image: memberFour,
  },
  {
    id: '5',
    name: 'Laura Martínez',
    role: 'Soporte industrial',
    image: memberFive,
  },
  {
    id: '6',
    name: 'Miguel Herrera',
    role: 'Ventas corporativas',
    image: memberSix,
  },
];
