// ============================================================
// DATOS DEL PORTAFOLIO
// Edita aquí tu información real: proyectos, experiencia,
// contacto, habilidades y niveles.
// ============================================================

export const profile = {
  name: 'Brandon Alexis Montoya Inzunza',
  firstName: 'Brandon',
  role: 'Desarrollador Web',
  headline: 'Arquitecto de software.',
  location: 'Culiacán, Sinaloa, México',
  email: 'BrandonMex13@gmail.com',
  phone: '+52 673 100 9528',
  availableForWork: true,
  cvUrl: '/docs/CV.pdf',
  photo: '/img/foto.jpg',
  about: [
    '¡Hola a todos! Soy Brandon Alexis Montoya Inzunza, un apasionado profesional en el Desarrollo de software con una sólida trayectoria como Desarrollador Web y Arquitecto de Software.',
    'Mi enfoque ha sido principalmente el desarrollo de soluciones efectivas con el uso de las tecnologías buscando constantemente formas creativas de abordar desafíos y mejorar procesos existentes siempre con la ayuda de un buen cafe :D'
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/BrandonMex13', username: '@BradonMex13' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/brandon-alexis-montoya-inzunza/', username: '/brandon-alexis-montoya-inzunza/' }
  ]
}

// ============================================================
// EXPERIENCIA LABORAL — rellena con tus puestos reales.
// Consejo: usa logros con números y métricas.
// ============================================================
export const experience = [
  {
    role: 'Ingeniero de Desarrollo',
    company: 'Capta Vale',
    period: '2026 — Actualidad',
    summary: 'Desarrollo de sistemas y mantenimiento de sistemas Legacy',
    achievements: [
      'Diseñar, desarrollar y mantener aplicaciones y servicios web/móviles escalables.',
      'Trabajar en metodologías ágiles (Scrum/Kanban) colaborando activamente con equipos multidisciplinarios ', 
      'Implementar buenas prácticas de código (Clean Code, CI/CD, pruebas automatizadas).'
    ]
  },
  {
    role: 'Lider Tecnico / Arquitecto de Sofware', 
    company: 'Coppel',
    period: '2022 — 2026', 
    summary: 'Toma de decisiones técnicas para asegurar escalabilidad, mantenibilidad y calidad del software.',
    achievements: [
      'Gestión y acompañamiento técnico de equipos de desarrollo de software.', 
      'Asesoría técnica para la correcta implementación de soluciones frontend y backend.',
      'Revisión y análisis de diagramas técnicos (arquitectura, flujo, componentes) para comprender y validar requerimientos del cliente.',
      'Colaboración con distintas areas para cumplir con las necesidades funcionales y las soluciones técnicas viables.'
    ]
  },
  {
    role: 'Desarrollador Web',
    company: 'Caprepa', 
    period: '2021 — 2022',
    summary: 'Desarrollo de sistemas y mantenimiento de sistemas Legacy',
    achievements: [
      'Desarrollo de sistemas web y creación de nuevos módulos utilizando Angular, TypeScript, HTML y CSS.',
      'Mantenimiento y mejora de sistemas legacy, asegurando estabilidad y continuidad operativa.',
      'Implementación de mejoras funcionales y corrección de errores en aplicaciones existentes.'
    ]
  }
]

// ============================================================
// PROYECTOS
// screenshot: coloca la captura en public/img/proyectos/<archivo>.png
// tech: tecnologías usadas
// github: link al repositorio (opcional, vacío si no hay)
// ============================================================
export const projects = [
  {
    name: 'VagoMX',
    tech: 'Angular',
    description: 'Aplicación web construida con Angular.',
    href: 'https://vagomx-brandon.netlify.app',
    github: '',
    screenshot: '/img/proyectos/vagomx.png'
  },
  {
    name: 'Gifs-App',
    tech: 'Angular',
    description: 'Buscador y visualizador de GIFs con Angular.',
    href: 'https://gifsapp-brandon.netlify.app/dashboard/trending',
    github: '',
    screenshot: '/img/proyectos/gifs-app.png'
  },
  {
    name: 'GuitarLA - Venta de Guitarras',
    tech: 'React',
    description: 'Tienda online de guitarras construida con React.',
    href: 'https://guitarla-brandon.netlify.app',
    github: '',
    screenshot: '/img/proyectos/guitarla.png'
  },
  {
    name: 'FrontEnd Store',
    tech: 'Angular',
    description: 'Tienda front-end construida con Angular.',
    href: 'https://web-store-brandon.netlify.app',
    github: '',
    screenshot: '/img/proyectos/frontend-store.png'
  },
  {
    name: 'Pokedex',
    tech: 'Angular',
    description: 'Pokedex interactiva con Angular.',
    href: 'https://pokedex-brandon.netlify.app/pokemones/listado',
    github: '',
    screenshot: '/img/proyectos/pokedex.png'
  },
  {
    name: 'Web Freelancer',
    tech: 'Angular',
    description: 'Sitio web para freelance desarrollado con Angular.',
    href: 'https://web-freelancer-brandon.netlify.app',
    github: '',
    screenshot: '/img/proyectos/web-freelancer.png'
  },
  {
    name: 'Calculadora de Consumo',
    tech: 'React',
    description: 'Calculadora de consumo energético construida con React.',
    href: 'https://calculadora-consumo-brandon.netlify.app',
    github: '',
    screenshot: '/img/proyectos/calculadora-consumo.png'
  },
  {
    name: 'Bouncing DVD',
    tech: 'HTML + CSS',
    description: 'Animación clásica del logo DVD con HTML y CSS.',
    href: 'https://bouncing-dvd-brandon.netlify.app',
    github: '',
    screenshot: '/img/proyectos/bouncing-dvd.png'
  }
]

// ============================================================
// HABILIDADES — agrupadas por categoría con nivel.
// level: 'Avanzado' | 'Intermedio' | 'Básico'
// ============================================================
export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'Angular', level: 'Avanzado' },
      { name: 'JavaScript / TypeScript', level: 'Avanzado' },
      { name: 'React', level: 'Intermedio' },
      { name: 'React Native', level: 'Intermedio' },
      { name: 'Vue.js', level: 'Intermedio' },
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 'Intermedio' },
      { name: 'Java + Springboot', level: 'Intermedio' },
      { name: 'NestJS', level: 'Intermedio' }
    ]
  },
  {
    category: 'Herramientas',
    items: [
      { name: 'Git', level: 'Avanzado' },
      { name: 'SQL, MySQL, MongoDB', level: 'Avanzado' },
      { name: 'Docker', level: 'Intermedio' },
      { name: 'GitHub Actions', level: 'Intermedio' },
    ]
  }
]

// Nivel por defecto si no está en el listado de skills
export const skillLevels = {
  Avanzado: 90,
  Intermedio: 65,
  Básico: 40
}

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contacto', href: '#contacto' }
]