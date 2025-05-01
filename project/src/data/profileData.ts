import { Project, Skill, NavItem, SocialLink } from '../types';

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

export const projects: Project[] = [

  {
    id: 1,
    title: 'Notes Management App',
    description: 'A productivity app that helps users manage tasks, set priorities, and track progress.',
    technologies: ['React', 'Redux', 'Firebase','Node.js','Express.js'],
    image:'download(2).jpg',
    github: '/',
    link: '/',
  },
  {
    id: 2,
    title: 'Weather Forecast App',
    description: 'A weather application that displays current conditions and forecasts based on location.',
    technologies: ['JavaScript', 'API Integration', 'HTML/CSS'],
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    github: 'https://github.com/GYANPRAKASH54/WeatherApp',
    link: 'https://weather-app-demo.example.com',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing projects and skills with a unique cyberpunk theme.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    github: 'https://github.com/gyanprakash/portfolio',
  },
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
    url: 'https://x.com/gyanp2552?t=gCeeNqn90r4HRuERkqnyNQ&s=09',
  },
  {
    name: 'Email',
    icon: 'Mail',
    url: 'mailto:gyanp2552@gmail.com',
  },
];