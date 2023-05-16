  import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpeg';
import Work6 from './assets/project-6.jpeg';
import Work7 from './assets/project-7.jpg';
import Work8 from './assets/project-8.jpg';
import Work9 from './assets/project-9.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

/*
export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Steve',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Milner',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '27 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Tunisian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Tunis',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+21621184010',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'you@mail.com',
  },

  {
    id: 9,
    title: 'Skype : ',
    description: 'steve.milner',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'French, English',
  },
];
*/

export const stats = [
  {
    id: 1,
    no: 'RESUMO',
    title: 'Sou estudante em período integral e estou em busca do primeiro emprego. Tenho interesse em aprender coisas novas em qualquer cargo ou tarefa que me for atribuída, farei com muito empenho e dedicação. Estou sempre em busca de conhecimento e possíveis novas experiências. ',
  },
];

/*
export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2018 - PRESENT',
    title: 'Web Developer <span> Envato </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2013 - 2018',
    title: 'UI/UX Designer <span> Themeforest </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2005 - 2013',
    title: 'Consultant <span> Videohive </span>',
    desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015',
    title: 'Engineering Degree <span> Oxford University </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2012',
    title: 'Master Degree <span> KIEV University </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2009',
    title: 'Bachelor Degree <span> Tunis High School </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  },
];
*/

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '80',
  },

  {
    id: 2,
    title: 'Bootstrap',
    percentage: '70',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '55',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '50',
  },

  {
    id: 5,
    title: 'MySql',
    percentage: '65',
  },

  {
    id: 6,
    title: 'Java',
    percentage: '45',
  },

  {
    id: 7,
    title: 'C#',
    percentage: '80',
  },

  {
    id: 8,
    title: 'JavaScript',
    percentage: '45',
  },
];


export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'WebSite',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'WebSite',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML & CSS',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'WebSite',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML & CSS',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Bootstrap',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Photo',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Gimp',
      },
     ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Photo',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Gimp',
      },
     ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Sistema',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Sistema Locadora',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'C#',
      },
     ],
  },

  {
    id: 7,
    img: Work7,
    title: 'WebSite',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'WebSite Xml',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'PHP, CSS & XML',
      },
     ],
  },

  {
    id: 8,
    img: Work8,
    title: 'WebSite',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'WebSite',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'PHP, CSS & JSON',
      },
     ],
  },

  {
    id: 9,
    img: Work9,
    title: 'WebSite',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'WebSite',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'PHP, CSS & JSON',
      },
     ],
  },
];


export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
