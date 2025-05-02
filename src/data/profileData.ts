import { Skill, NavItem, SocialLink } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const skills: Skill[] = [
  { name: 'JavaScript', level: 90, color: '#f7df1e' },
  { name: 'React', level: 85, color: '#61dafb' },
  { name: 'TypeScript', level: 80, color: '#3178c6' },
  { name: 'Node.js', level: 75, color: '#43853d' },
  { name: 'HTML/CSS', level: 95, color: '#e34c26' },
  { name: 'Tailwind CSS', level: 90, color: '#38bdf8' },
  { name: 'Testing/QA', level: 85, color: '#ff6347' },
  { name: 'Git', level: 80, color: '#f05032' },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: 'Github',
    url: 'https://github.com/GYANPRAKASH54',
  },
  {
    name: 'LinkedIn',
    icon: 'Linkedin',
    url: 'https://www.linkedin.com/in/gyan-prakash27/',
  },
  {
    name: 'Twitter',
    icon: 'Twitter',
    url: 'https://x.com/gyanp2552?t=R0iH05F6C_XKBKbCVxLD6A&s=03',
  },
  {
    name: 'Email',
    icon: 'Mail',
    url: 'mailto:gyanp2552@gmail.com',
  },
];
