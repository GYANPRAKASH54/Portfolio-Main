import { Project } from '../types';

// Import local images
import notesAppImage from '../assets/download(2).jpg';
import pnrImage from '../assets/pnr.png';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Notes-Management-App',
    description: 'A productivity app that helps users manage notes.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDb'],
    image: notesAppImage,
    github: 'https://github.com/GYANPRAKASH54/Notes-Me.-Web-App',
    link: '/',
  },
  {
    id: 2,
    title: 'Weather-App',
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
    github: 'https://github.com/GYANPRAKASH54/Portfolio-Main',
    link: 'https://weather-app-demo.example.com',
  },
  {
    id: 4,
    title: 'PNR-ENQUIRY API-TESTING',
    description: 'A API testing project for PNR enquiry systems',
    technologies: ['Java', 'Api-Testing', 'Eclipse'],
    image: pnrImage,
    github: 'https://github.com/GYANPRAKASH54/PNR-ENquiry-Testing',
  },
];