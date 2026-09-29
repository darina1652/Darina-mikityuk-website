export const defaultLocale = 'de' as const;
export const supportedLocales = ['de', 'en', 'uk'] as const;
export type Locale = (typeof supportedLocales)[number];

// Labels stay in English by design; copy is grouped by locale so EN and UA can
// be added later without changing any templates or routes.
export const navigation = [
  ['Home', '/'],
  ['Works', '/works'],
  ['Projects', '/projects'],
  ['Art Education', '/art-education'],
  ['About', '/about'],
  ['Contact', '/contact'],
] as const;

export const siteCopy = {
  de: {
    location: 'Bildende Künstlerin · Berlin / Kyiv',
    heroTitle: ['Zwischen Erinnerung', 'und Material.'],
    heroNote: 'Malerei, Material und Raum im fortlaufenden Dialog.',
    selectedWorks: 'Ausgewählte Arbeiten',
    viewAll: 'Alle Arbeiten',
    practice: 'Künstlerische Praxis',
    statement: 'Darina Mikityuks Arbeiten untersuchen, wie Erinnerung eine materielle Form annimmt — und schaffen Räume, in denen das Intime architektonisch wird.',
    aboutLink: 'Über die Künstlerin',
    currentProject: 'Aktuelles Projekt',
  },
  en: {},
  uk: {},
} as const;

export const works = [
  { title: 'Quiet Matter', year: '2025', medium: 'Öl, Pigmente, Leinen', image: '/images/work-quiet.svg', ratio: 'portrait' },
  { title: 'A Soft Distance', year: '2024', medium: 'Mischtechnik auf Leinwand', image: '/images/work-distance.svg', ratio: 'landscape' },
  { title: 'Afterimage No. 7', year: '2024', medium: 'Öl und Wachs auf Leinen', image: '/images/work-afterimage.svg', ratio: 'square' },
  { title: 'Slowly, the Light', year: '2023', medium: 'Pigmente auf Leinwand', image: '/images/work-light.svg', ratio: 'portrait' },
  { title: 'Field Notes', year: '2023', medium: 'Graphit und Öl', image: '/images/work-field.svg', ratio: 'landscape' },
  { title: 'Between Tides', year: '2022', medium: 'Mischtechnik', image: '/images/work-tides.svg', ratio: 'square' },
] as const;

export const projects = [
  { title: 'The Space Between', type: 'Einzelausstellung', place: 'Berlin, DE', year: '2025', image: '/images/project-space.svg' },
  { title: 'Soft Architecture', type: 'Ortsspezifische Installation', place: 'Kyiv, UA', year: '2024', image: '/images/project-soft.svg' },
  { title: 'In Plain Air', type: 'Gruppenausstellung', place: 'Wien, AT', year: '2023', image: '/images/project-air.svg' },
] as const;
