// ============================================================
// Every piece of text, link, and list on the site lives here.
// Edit this file to update the site — you should not need to
// touch any component file for a content change.
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface Nav {
  links: NavLink[];
}

export interface QuickLink {
  label: string;
  href: string;
  icon: 'download' | 'link';
}

export interface Hero {
  avatarInitials: string;
  name: string;
  wave: string;
  role: string;
  bio: string[];
  location: string;
  availability: string;
  quickLinks: QuickLink[];
  primaryCta: { label: string; href: string };
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export type ProjectCoverType = 'code' | 'circuit' | 'chart' | 'path';

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  cover: ProjectCoverType;
  title: string;
  tag: string;
  description: string;
  highlights: string[];
  stack: string[];
  links: ProjectLink[];
}

export interface ExperienceItem {
  title: string;
  period: string;
  org: string;
  orgBadge: string;
  logo?: string;
  location: string;
  bullets: string[];
}

export interface EducationEntry {
  school: string;
  badge: string;
  logo?: string;
  degree: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface ContactLink {
  label: string;
  href: string;
}

export interface Contact {
  links: ContactLink[];
}

export interface SocialEntry {
  label: string;
  href: string;
}

export interface Socials {
  email: SocialEntry;
  linkedin: SocialEntry;
}

export interface FooterData {
  name: string;
  year: string;
  thoughtsLabel: string;
  thoughtsUrl: string;
}

export const nav: Nav = {
  links: [
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ],
};

export const hero: Hero = {
  avatarInitials: 'KD',
  name: 'Kyle Dang',
  wave: '👋',
  role: 'Computer Engineering Student',
  bio: [
    'I build firmware, systems, and software, and I test everything on real hardware. I follow and build across FPGA and hardware engineering, silicon and chip design, embedded systems, and firmware.',
  ],
  location: 'Philadelphia, PA',
  availability: 'Open to relocate / co-op / internship',
  quickLinks: [
    { label: 'Resume', href: '#', icon: 'download' },
    { label: 'GitHub', href: '#', icon: 'link' },
  ],
  primaryCta: { label: 'View projects', href: '#projects' },
};

export const skills: SkillGroup[] = [
  {
    category: 'languages',
    items: ['C', 'C++', 'Python', 'Verilog', 'VHDL', 'JavaScript'],
  },
  {
    category: 'hardware / embedded',
    items: ['STM32', 'ESP32', 'Arduino', 'FPGA', 'KiCad', 'Oscilloscope / DMM', 'I2C / SPI / UART'],
  },
  {
    category: 'software / tools',
    items: ['Git', 'Linux', 'Docker', 'FreeRTOS', 'React', 'Node.js'],
  },
  {
    category: 'concepts',
    items: ['Computer Architecture', 'Digital Logic', 'Signal Processing', 'Networking', 'RTOS Scheduling'],
  },
];

export const projects: Project[] = [
  {
    cover: 'code',
    title: 'Battery Management Firmware',
    tag: 'firmware',
    description: 'Custom C firmware for an STM32-based battery management system.',
    highlights: [
      'Implemented cell balancing and fault detection in a FreeRTOS task loop',
      'Built a UART telemetry link feeding a live monitoring dashboard',
    ],
    stack: ['C', 'STM32', 'FreeRTOS'],
    links: [
      { label: 'Source', href: '#' },
      { label: 'Write-up', href: '#' },
    ],
  },
  {
    cover: 'circuit',
    title: '4-bit CPU on FPGA',
    tag: 'hardware',
    description: 'A minimal 4-bit CPU designed in Verilog, synthesized to an FPGA dev board.',
    highlights: [
      'Designed a custom ISA, ALU, and register file from scratch',
      'Wrote a Python assembler to compile programs down to machine code',
    ],
    stack: ['Verilog', 'FPGA', 'Python'],
    links: [
      { label: 'Source', href: '#' },
      { label: 'Demo', href: '#' },
    ],
  },
  {
    cover: 'chart',
    title: 'IoT Air Quality Monitor',
    tag: 'full-stack',
    description: 'ESP32 sensor node streaming live readings to a React dashboard.',
    highlights: [
      'Published sensor data over MQTT with automatic reconnect handling',
      'Built historical charts and configurable threshold alerts',
    ],
    stack: ['ESP32', 'MQTT', 'React'],
    links: [
      { label: 'Source', href: '#' },
      { label: 'Live demo', href: '#' },
    ],
  },
  {
    cover: 'path',
    title: 'Line-Following Robot',
    tag: 'robotics',
    description: 'PID-controlled line follower built from scratch for competition speed runs.',
    highlights: [
      'Designed a custom PCB and IR sensor array in KiCad',
      'Tuned a PID control loop in C++ for stable high-speed tracking',
    ],
    stack: ['C++', 'KiCad', 'PID Control'],
    links: [
      { label: 'Source', href: '#' },
      { label: 'Video', href: '#' },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    title: 'Embedded Systems Intern',
    period: 'Summer 2026',
    org: 'Company Name',
    orgBadge: 'CO',
    location: 'City, State',
    bullets: [
      'Wrote and tested firmware modules for a sensor product line.',
      'Reduced power draw in sleep mode by tuning peripheral configs.',
    ],
  },
  {
    title: 'Undergraduate Research Assistant',
    period: '2025 — present',
    org: 'Drexel University',
    logo: '/logos/drexel.jpg',
    orgBadge: 'DU',
    location: 'Philadelphia, PA',
    bullets: [
      'Supporting a lab project on low-power sensor networks.',
      'Built test rigs and automated data collection scripts.',
    ],
  },
  {
    title: 'Teaching Assistant, Digital Logic',
    period: '2025',
    org: 'Drexel University',
    logo: '/logos/drexel.jpg',
    orgBadge: 'DU',
    location: 'Philadelphia, PA',
    bullets: ['Ran weekly lab sections and held office hours for ~40 students.'],
  },
];

// NOTE: dates for Lê Hồng Phong are whatever you last set in the Vite
// version — double check them here since this file was ported by hand.
export const education: EducationEntry[] = [
  {
    school: 'Drexel University',
    badge: 'DU',
    degree: 'B.S. in Computer Engineering',
    logo: '/logos/drexel.jpg',
    location: 'Philadelphia, PA',
    period: 'August 2026 — May 2030 (expected)',
    bullets: [
      'Digital Logic Design',
      'Computer Architecture',
      'Embedded Systems',
      'Signals & Systems',
      'Data Structures',
      'Operating Systems',
    ],
  },
  {
    school: 'Le Hong Phong High School For The Gifted',
    badge: 'LHP',
    logo: '/logos/lhp.jpg',
    degree: 'High School Diploma, Mathematics',
    location: 'Ho Chi Minh City, Vietnam',
    period: 'August 2023 - May 2026',
    bullets: [
      'AP Calculus BC: 5/5, AP Computer Science A: 5/5, AP Statistics: 4/5,\nAP Physics C Mechanics: 4/5, AP Physics C E&M: 4/5',
      'Activities: Lumiere Photography Club',
    ],
  },
];

export const contact: Contact = {
  links: [
    { label: 'Email', href: 'mailto:dangmkhoa2522@gmail.com' },
    { label: 'GitHub', href: '#' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kyledang2522/' },
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
};

// The actual displayable email address / LinkedIn handle, used by the
// Hero contact row. Distinct from contact.links (generic "Email"/"LinkedIn"
// labels used for the footer icons) and footer.name (the "made by" credit).
export const socials: Socials = {
  email: { label: 'dangmkhoa2522@gmail.com', href: 'mailto:dangmkhoa2522@gmail.com' },
  linkedin: { label: 'linkedin.com/in/kyledang2522', href: 'https://www.linkedin.com/in/kyledang2522/' },
};

// Photo banners shown in the middle of each section — see
// public/images/README.txt for where to add the actual files.
export const sectionImages = {
  hero: '/images/hero-bg.jpg',  
  contact: '/images/contact.jpg',
};

export const footer: FooterData = {
  name: 'Kyle Dang',
  year: '2026',
  thoughtsLabel: 'kyle-thoughts.vercel.app',
  thoughtsUrl: 'https://kyle-thoughts.vercel.app',
};
