// ============================================================
// DATOS DEL PORTAFOLIO
// Edita aquí tu información real: proyectos, experiencia,
// contacto, habilidades y niveles.
// ============================================================

export const profile = {
  name: 'Brandon Alexis Montoya Inzunza',
  firstName: 'Brandon',
  role: 'Desarrollador Web',
  headline: 'Desarrollo de software que resuelve problemas reales.',
  location: 'Guadalajara, Jalisco, México',
  email: 'tu@correo.com', // TODO: reemplaza con tu email real
  phone: '+52 33 0000 0000', // TODO: reemplaza con tu teléfono real
  availableForWork: true,
  cvUrl: '/docs/CV.pdf', // coloca tu CV.pdf en public/docs/CV.pdf
  photo: '/img/foto.jpg', // coloca tu foto en public/img/foto.jpg
  about: [
    '¡Hola a todos! Soy Brandon Alexis Montoya Inzunza, un apasionado profesional en el Desarrollo de software con una sólida trayectoria como Desarrollador Web y Arquitecto de Software.',
    'Mi enfoque ha sido principalmente el desarrollo de soluciones efectivas con el uso de las tecnologías buscando constantemente formas creativas de abordar desafíos y mejorar procesos existentes siempre con la ayuda de un buen cafe :D'
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/', username: '@tu-usuario' }, // TODO: completa
    { label: 'LinkedIn', href: 'https://linkedin.com/in/', username: '/tu-perfil' } // TODO: completa
  ]
}

// ============================================================
// EXPERIENCIA LABORAL — rellena con tus puestos reales.
// Consejo: usa logros con números y métricas.
// ============================================================
export const experience = [
  {
    role: 'Desarrollador Web / Arquitecto de Software', // TODO: puesto real
    company: 'Tu Empresa', // TODO: empresa real
    period: '2022 — Actualidad', // TODO: fechas reales
    summary: 'Descripción breve de tu rol y responsabilidades.',
    achievements: [
      'Logro 1 con métrica (ej. +30% rendimiento de la app)', // TODO
      'Logro 2 con métrica (ej. reducción de costos en 20%)', // TODO
      'Logro 3 con métrica (ej. equipo de 5 personas guiado)' // TODO
    ]
  },
  {
    role: 'Puesto anterior', // TODO
    company: 'Empresa anterior', // TODO
    period: '2020 — 2022', // TODO
    summary: 'Descripción breve de tu rol y responsabilidades.',
    achievements: [
      'Logro 1 con métrica', // TODO
      'Logro 2 con métrica' // TODO
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
      { name: 'React', level: 'Avanzado' },
      { name: 'JavaScript', level: 'Avanzado' },
      { name: 'TypeScript', level: 'Intermedio' },
      { name: 'HTML', level: 'Avanzado' },
      { name: 'CSS', level: 'Avanzado' }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 'Intermedio' },
      { name: 'Java', level: 'Intermedio' }
    ]
  },
  {
    category: 'Herramientas',
    items: [{ name: 'Git', level: 'Avanzado' }]
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