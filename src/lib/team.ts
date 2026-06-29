import type { ImageMetadata } from 'astro';
import memberOne from '/src/assets/images/team/AGL.jpg';
import memberTwo from '/src/assets/images/team/AGL2.jpg';
import memberThree from '/src/assets/images/team/AGL3.jpg';
import memberFour from '/src/assets/images/team/AGL4.jpg';
import memberFive from '/src/assets/images/team/AGL5.jpg';
import memberSix from '/src/assets/images/team/AGL6.jpg';

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
    image: memberOne,
  },
  {
    id: '2',
    name: 'Carlos Mendoza',
    role: 'Asesoría técnica',
    image: memberTwo,
  },
  {
    id: '3',
    name: 'Ana Legaspi',
    role: 'Atención a clientes',
    image: memberThree,
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
