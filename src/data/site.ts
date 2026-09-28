export const navigation = [
  ['Works', '/works'],
  ['Projects', '/projects'],
  ['About', '/about'],
  ['Workshops', '/workshops'],
  ['Press', '/press'],
  ['Contact', '/contact'],
] as const;

export const works = [
  { title: 'Quiet Matter', year: '2025', medium: 'Oil, pigments, linen', image: '/images/work-quiet.svg', ratio: 'portrait' },
  { title: 'A Soft Distance', year: '2024', medium: 'Mixed media on canvas', image: '/images/work-distance.svg', ratio: 'landscape' },
  { title: 'Afterimage No. 7', year: '2024', medium: 'Oil and wax on linen', image: '/images/work-afterimage.svg', ratio: 'square' },
  { title: 'Slowly, the Light', year: '2023', medium: 'Pigments on canvas', image: '/images/work-light.svg', ratio: 'portrait' },
  { title: 'Field Notes', year: '2023', medium: 'Graphite and oil', image: '/images/work-field.svg', ratio: 'landscape' },
  { title: 'Between Tides', year: '2022', medium: 'Mixed media', image: '/images/work-tides.svg', ratio: 'square' },
] as const;

export const projects = [
  { title: 'The Space Between', type: 'Solo exhibition', place: 'Berlin, DE', year: '2025', image: '/images/project-space.svg' },
  { title: 'Soft Architecture', type: 'Site-specific installation', place: 'Kyiv, UA', year: '2024', image: '/images/project-soft.svg' },
  { title: 'In Plain Air', type: 'Group exhibition', place: 'Vienna, AT', year: '2023', image: '/images/project-air.svg' },
] as const;
