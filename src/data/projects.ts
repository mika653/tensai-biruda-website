export type ProjectStatus = 'ongoing' | 'completed';

export interface Project {
  title: string;
  slug: string;
  type: string;
  location: string;
  status: ProjectStatus;
  description: string;
  coverImage: string;
  images: string[];
}

export const projects: Project[] = [
  {
    title: 'Bataan Lower Beach House',
    slug: 'bataan-beach-house',
    type: 'Residential / Beach House',
    location: 'Bataan',
    status: 'ongoing',
    description:
      'A contemporary beach house design that blends seamlessly with its coastal surroundings. Featuring modern architecture with warm natural materials, this project showcases our ability to create elegant, livable spaces that respect the environment.',
    coverImage: '/images/projects/bataan-beach-house/render.jpg',
    images: [
      '/images/projects/bataan-beach-house/render.jpg',
      '/images/projects/bataan-beach-house/night-1.jpg',
      '/images/projects/bataan-beach-house/night-2.jpg',
    ],
  },
  {
    title: '12 Villas Bataan Project',
    slug: '12-villas-bataan',
    type: 'Residential Villas',
    location: 'Bataan',
    status: 'ongoing',
    description:
      'A premier residential villa development comprising 12 exclusive units. Each villa is designed with meticulous attention to detail, delivering premium interiors, modern amenities, and quality construction that reflects the TBC standard of excellence.',
    coverImage: '/images/projects/12-villas-bataan/interior-1.jpg',
    images: [
      '/images/projects/12-villas-bataan/interior-1.jpg',
      '/images/projects/12-villas-bataan/interior-2.jpg',
      '/images/projects/12-villas-bataan/bathroom.jpg',
      '/images/projects/12-villas-bataan/construction-1.jpg',
      '/images/projects/12-villas-bataan/construction-2.jpg',
      '/images/projects/12-villas-bataan/construction-3.jpg',
      '/images/projects/12-villas-bataan/site-1.jpg',
      '/images/projects/12-villas-bataan/site-2.jpg',
      '/images/projects/12-villas-bataan/site-3.jpg',
    ],
  },
  {
    title: 'House Renovation of 2-Storey Residence',
    slug: 'house-renovation-2storey',
    type: 'Residential Renovation',
    location: 'Metro Manila',
    status: 'ongoing',
    description:
      'A complete architectural renovation of an existing two-storey residential property. This project involves structural enhancements, modern facade redesign, and interior upgrades — transforming an aging home into a contemporary living space.',
    coverImage: '/images/projects/house-renovation-2storey/render-front.jpg',
    images: [
      '/images/projects/house-renovation-2storey/render-front.jpg',
      '/images/projects/house-renovation-2storey/render-side.jpg',
      '/images/projects/house-renovation-2storey/progress-1.jpg',
      '/images/projects/house-renovation-2storey/progress-2.jpg',
      '/images/projects/house-renovation-2storey/progress-3.jpg',
      '/images/projects/house-renovation-2storey/progress-4.jpg',
      '/images/projects/house-renovation-2storey/progress-5.jpg',
      '/images/projects/house-renovation-2storey/progress-6.jpg',
    ],
  },
  {
    title: 'Filinvest-1 3 Storey Residential Building',
    slug: 'filinvest-3storey',
    type: '3-Storey Residential Building',
    location: 'Filinvest-1',
    status: 'completed',
    description:
      'A fully realized three-storey residential building in the Filinvest-1 community. The project demonstrates TBC\'s design-and-build capabilities — from architectural conception through construction completion — delivering a structurally sound, aesthetically refined home.',
    coverImage: '/images/projects/filinvest-3storey/exterior-1.jpg',
    images: [
      '/images/projects/filinvest-3storey/exterior-1.jpg',
      '/images/projects/filinvest-3storey/exterior-2.jpg',
      '/images/projects/filinvest-3storey/render-1.jpg',
      '/images/projects/filinvest-3storey/render-2.jpg',
      '/images/projects/filinvest-3storey/detail-1.jpg',
      '/images/projects/filinvest-3storey/detail-2.jpg',
      '/images/projects/filinvest-3storey/detail-3.jpg',
      '/images/projects/filinvest-3storey/detail-4.jpg',
      '/images/projects/filinvest-3storey/progress-1.jpg',
      '/images/projects/filinvest-3storey/progress-2.jpg',
    ],
  },
  {
    title: 'Sta. Barbara 3-Storey Residential Building',
    slug: 'sta-barbara-3storey',
    type: '3-Storey Residential Building',
    location: 'Sta. Barbara',
    status: 'completed',
    description:
      'A striking three-storey residential building designed for a discerning client in Sta. Barbara. The project features a refined modern facade, well-appointed interiors, and durable construction — a testament to TBC\'s commitment to quality at every scale.',
    coverImage: '/images/projects/sta-barbara-3storey/render-1.jpg',
    images: [
      '/images/projects/sta-barbara-3storey/render-1.jpg',
      '/images/projects/sta-barbara-3storey/render-2.jpg',
      '/images/projects/sta-barbara-3storey/render-3.jpg',
      '/images/projects/sta-barbara-3storey/detail-1.jpg',
      '/images/projects/sta-barbara-3storey/detail-2.jpg',
      '/images/projects/sta-barbara-3storey/detail-3.jpg',
      '/images/projects/sta-barbara-3storey/detail-4.jpg',
      '/images/projects/sta-barbara-3storey/detail-5.jpg',
    ],
  },
  {
    title: 'San Juan Renovation',
    slug: 'san-juan-renovation',
    type: 'Residential Renovation',
    location: 'San Juan',
    status: 'completed',
    description:
      'A comprehensive residential renovation in San Juan that transformed the property into a modern, functional home. TBC managed the full scope of work — from design through execution — ensuring high-quality finishes and minimal disruption to the occupants.',
    coverImage: '/images/projects/san-juan-renovation/photo-1.jpg',
    images: Array.from({ length: 14 }, (_, i) => `/images/projects/san-juan-renovation/photo-${i + 1}.jpg`),
  },
  {
    title: 'Helly Hansen Glorieta',
    slug: 'helly-hansen-glorieta',
    type: 'Commercial / Retail Fit-out',
    location: 'Glorieta Mall',
    status: 'completed',
    description:
      'A premium retail fit-out for Helly Hansen at Glorieta Mall, one of Metro Manila\'s premier shopping destinations. The project showcases TBC\'s trade construction expertise — delivering a polished brand environment that elevates the in-store experience.',
    coverImage: '/images/projects/helly-hansen-glorieta/photo-1.jpg',
    images: Array.from({ length: 8 }, (_, i) => `/images/projects/helly-hansen-glorieta/photo-${i + 1}.jpg`),
  },
  {
    title: 'Helly Hansen Shangri-La',
    slug: 'helly-hansen-shangrila',
    type: 'Commercial / Retail Fit-out',
    location: 'Shangri-La Mall',
    status: 'completed',
    description:
      'A sophisticated retail store fit-out for Helly Hansen at Shangri-La Mall. Precision craftsmanship and attention to brand standards define this project, highlighting TBC\'s capability in high-end commercial interior construction.',
    coverImage: '/images/projects/helly-hansen-shangrila/photo-1.jpg',
    images: [
      '/images/projects/helly-hansen-shangrila/photo-1.jpg',
      '/images/projects/helly-hansen-shangrila/photo-2.jpg',
      '/images/projects/helly-hansen-shangrila/photo-3.jpg',
    ],
  },
  {
    title: 'Ayala Alabang Residential',
    slug: 'ayala-alabang',
    type: 'Residential',
    location: 'Ayala Alabang',
    status: 'completed',
    description:
      'A luxury residential project in the prestigious Ayala Alabang village. TBC delivered a home of exceptional quality, blending contemporary design with functional elegance — fully meeting the elevated expectations of this premier address.',
    coverImage: '/images/projects/ayala-alabang/photo-1.jpg',
    images: Array.from({ length: 6 }, (_, i) => `/images/projects/ayala-alabang/photo-${i + 1}.jpg`),
  },
  {
    title: 'Commercial Building Q.C.',
    slug: 'commercial-qc',
    type: 'Commercial Building',
    location: 'Quezon City',
    status: 'completed',
    description:
      'A purpose-built commercial building in Quezon City designed for business operations. The project reflects TBC\'s ability to deliver robust, code-compliant commercial structures with a professional finish suited for the demands of modern enterprise.',
    coverImage: '/images/projects/commercial-qc/photo-1.jpg',
    images: Array.from({ length: 6 }, (_, i) => `/images/projects/commercial-qc/photo-${i + 1}.jpg`),
  },
  {
    title: 'SPDA Manila Liaison Office Renovation',
    slug: 'spda-renovation',
    type: 'Office Renovation',
    location: 'Manila',
    status: 'completed',
    description:
      'A full-scale office renovation for SPDA\'s Manila Liaison Office. TBC transformed the workspace into a professional, efficient environment — handling architectural, civil, and fit-out works to create a cohesive, brand-aligned office interior.',
    coverImage: '/images/projects/spda-renovation/photo-1.jpg',
    images: Array.from({ length: 17 }, (_, i) => `/images/projects/spda-renovation/photo-${i + 1}.jpg`),
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getOngoingProjects(): Project[] {
  return projects.filter((p) => p.status === 'ongoing');
}

export function getCompletedProjects(): Project[] {
  return projects.filter((p) => p.status === 'completed');
}
