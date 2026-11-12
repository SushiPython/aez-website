import { NavItem, CounterData } from '@/types';

// Navigation configuration
export const navigation: NavItem[] = [
  {
    label: 'Brothers',
    href: '/brothers',
  },
  {
    label: 'Alumni',
    href: '/alumni',
  },
  // Commented this out until paradigm website is built
  // {
  //   label: 'Paradigm',
  //   href: '/#paradigm',
  // },
  {
    label: 'Innovate',
    href: 'https://www.berkeleyinnovate.com/',
    external: true,
  },
  {
    label: 'Paradigm',
    href: 'https://berkeleyparadigm.org/',
    external: true,
  },
  {
    label: 'Zenith',
    href: 'https://pragyanr.github.io/Zenith_Capital/',
    external: true,
  },
  {
    label: 'Donate',
    href: '/donate',
    dropdown: [
      {
        label: 'Venmo',
        href: 'https://www.venmo.com/u/aez-berkeley',
        external: true,
      },
      {
        label: 'Stripe',
        href: 'https://buy.stripe.com/eVqbJ18wzc8q9jb8vA24000',
        external: true,
      },
    ],
  },
  {
    label: 'Join Us',
    href: '#',
    dropdown: [
      {
        label: 'Timeline',
        href: '/timeline',
      },
      {
        label: 'Coffee Chats',
        href: '/coffee-chats',
      },
      {
        label: 'Application',
        href: 'https://airtable.com/app2wqIRjAIKb4nBD/pagzqgUqNe5oEKFy7/form',
        external: true,
      },
    ],
  },
];

// Social media links
export const socialLinks = {
  instagram: 'https://www.instagram.com/aezberkeley/',
  linkedin: 'https://www.linkedin.com/company/alpha-epsilon-zeta/',
  email: 'mailto:aezberkeley@gmail.com',
};

// Statistics counters for home page
export const statsCounters: CounterData[] = [
  {
    value: 5,
    label: 'Forbes 30 under 30\nAlumni',
    animationDuration: 2000,
  },
  {
    value: 500,
    label: 'Raised for Alumni\nFounded Startups',
    prefix: '$',
    suffix: 'M+',
    animationDuration: 2500,
  },
  {
    value: 15,
    label: 'Startups Founded\nby Alumni',
    animationDuration: 1800,
  },
  {
    value: 100,
    label: 'Full-Time Job\nPlacement Rate',
    suffix: '%',
    animationDuration: 2200,
  },
];

// Homepage community slideshow. Current active brothers lead the sequence,
// followed by two legacy photos that preserve the chapter's alumni history.
export const slideshowImages = [
  {
    src: '/images/homepage/innovate-team.jpg',
    alt: 'AEZ active brothers with guests at Innovate at Berkeley',
  },
  {
    src: '/images/homepage/active-brothers-formal-night.jpg',
    alt: 'AEZ active brothers together at a formal event',
  },
  {
    src: '/images/homepage/innovate-conversation.jpg',
    alt: 'An AEZ brother speaking with a student at Innovate at Berkeley',
  },
  {
    src: '/images/homepage/innovate-panel.jpg',
    alt: 'An AEZ brother interviewing guests onstage at Innovate at Berkeley',
  },
  {
    src: '/images/homepage/active-brothers-social.jpg',
    alt: 'AEZ active brothers celebrating together',
  },
  {
    src: '/images/homepage/innovate-presentation.jpg',
    alt: 'AEZ active brothers presenting at Innovate at Berkeley',
  },
  {
    src: 'https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/6903c40b91935c9898b88381_IMG_1031-min.JPG',
    alt: 'AEZ brothers at a chapter event',
  },
  {
    src: 'https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/6903c40ace2f16ce3860e50f_100_1014-min.JPG',
    alt: 'AEZ alumni together at a chapter gathering',
  },
];

// Class mappings for brother organization
export const brotherClasses = {
  'Psi': { order: 1, fullName: 'Psi Class' },
  // 'Alpha Alpha': { order: 2, fullName: 'Alpha Alpha Class' },
  'Alpha Beta': { order: 3, fullName: 'Alpha Beta Class' },
  'Alpha Gamma': { order: 4, fullName: 'Alpha Gamma Class' },
  'Alpha Delta': { order: 5, fullName: 'Alpha Delta Class' },
  'Alpha Epsilon': { order: 6, fullName: 'Alpha Epsilon Class' },
  'Alpha Zeta': { order: 7, fullName: 'Alpha Zeta Class' },
  'Alpha Eta': { order: 8, fullName: 'Alpha Eta Class' },
  'Alpha Theta': { order: 9, fullName: 'Alpha Theta Class' },
  'Alpha Iota': { order: 10, fullName: 'Alpha Iota Class' },
  'Alpha Kappa': { order: 11, fullName: 'Alpha Kappa Class' },
  'Alpha Lambda': { order: 12, fullName: 'Alpha Lambda Class' },
  'Alpha Mu': { order: 13, fullName: 'Alpha Mu Class' },
  'Alpha Nu': { order: 14, fullName: 'Alpha Nu Class' },
  'Alpha Xi': { order: 15, fullName: 'Alpha Xi Class' },
  'Alpha Omicron': { order: 16, fullName: 'Alpha Omicron Class' },
  'Alpha Pi': { order: 17, fullName: 'Alpha Pi Class' },
  'Alpha Rho': { order: 18, fullName: 'Alpha Rho Class' },
  'Alpha Sigma': { order: 19, fullName: 'Alpha Sigma Class' },
  'Alpha Tau': { order: 20, fullName: 'Alpha Tau Class' },
  'Alpha Upsilon': { order: 21, fullName: 'Alpha Upsilon Class' },
  'Alpha Phi': { order: 22, fullName: 'Alpha Phi Class' },
  'Alpha Chi': { order: 23, fullName: 'Alpha Chi Class' },
  'Alpha': { order: 24, fullName: 'Alpha Class' },
  'Beta': { order: 25, fullName: 'Beta Class' },
  'Gamma': { order: 26, fullName: 'Gamma Class' },
  'Delta': { order: 27, fullName: 'Delta Class' },
  'Epsilon': { order: 28, fullName: 'Epsilon Class' },
  'Zeta': { order: 29, fullName: 'Zeta Class' },
  'Eta': { order: 30, fullName: 'Eta Class' },
  'Theta': { order: 31, fullName: 'Theta Class' },
  'Iota': { order: 32, fullName: 'Iota Class' },
  'Kappa': { order: 33, fullName: 'Kappa Class' },
  'Lambda': { order: 34, fullName: 'Lambda Class' },
  'Mu': { order: 35, fullName: 'Mu Class' },
  'Nu': { order: 36, fullName: 'Nu Class' },
  'Xi': { order: 37, fullName: 'Xi Class' },
  'Omicron': { order: 38, fullName: 'Omicron Class' },
  'Pi': { order: 39, fullName: 'Pi Class' },
  'Rho': { order: 40, fullName: 'Rho Class' },
  'Sigma': { order: 41, fullName: 'Sigma Class' },
  'Tau': { order: 42, fullName: 'Tau Class' },
  'Upsilon': { order: 43, fullName: 'Upsilon Class' },
  'Phi': { order: 44, fullName: 'Phi Class' },
  'Chi': { order: 45, fullName: 'Chi Class' },
} as const;

// Animation durations and easing
export const animations = {
  durations: {
    fast: 200,
    normal: 300,
    slow: 500,
    slower: 800,
  },
  easing: {
    easeOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// Breakpoints (matching Tailwind)
export const breakpoints = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;
