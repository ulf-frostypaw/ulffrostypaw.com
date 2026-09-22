export interface CV {
  name: string;
  title: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  personalWebsiteUrl: string;
  contact: Contact;
  work: Work[];
  education: Education[];
  skills: string[];
}

export interface Contact {
  email: string;
  social: Social[];
}

export interface Social {
  name: string;
  url: string;
}

export interface Work {
  company: string;
  link: string;
  title: string;
  start: string;
  end: string | null;
  description: string;
  achievements?: string[];
  badges?: string[];
}

export interface Education {
  school: string;
  degree: string;
  start: string;
  end: string | null;
}

export const CV_DATA: CV = {
  name: "Quirino Emmanuel Mendes Ramos (Ulf FrostyPaw)",
  title: "Software Engineer",
  location: "Acapulco, Guerrero, Mexico",
  locationLink: "https://www.google.com/maps/place/Acapulco",
  about: "Desarrollador backend - PHP, JS/TS, Python.",
  summary: `Desarrollador backend especializado en PHP, JS/TS, Python y a veces Node.JS; manejo de redes y servidores Linux para despliegue de proyectos web.`,
  personalWebsiteUrl: "https://ulffrostypaw.com",
  contact: {
    email: "contacto@ulffrostypaw.com",
    social: [
      { name: "GitHub", url: "https://github.com/ulf-frostypaw" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/sergalote/" },
    ],
  },
  work: [
    {
      company: "SAE (Sistema Administrativo Eclesiástico)",
      link: "",
      title: "full-stack developer",
      start: "indefinido",
      end: "indefinido",
      description:
        "Plataforma web que digitaliza la gestión administrativa de una parroquia. Resuelve el problema del papeleo manual de intenciones de misa, libros sacramentales y calendarios, centralizando todo en un solo sistema accesible desde cualquier dispositivo.",
      achievements: [
        "Diseño de una API REST en PHP (Flight) con autenticación por sesiones, registros de usuarios, manejo de peticiones y respuestas en formato JSON.",
        "Implementación de gestión de intenciones de misas con filtros por fecha y horario, búsqueda y paginación.",
        "Desarrollo de libros parroquiales digitales para sacramentos.",
        "Creación de un calendario con actividades, rangos de fechas y exportación a PDF.",
        "Despliegue completo con Docker Compose: cliente nginx, servidor Apache/PHP, MariaDB y phpMyAdmin.",
      ],
      badges: [
        "React",
        "TypeScript",
        "PHP",
        "SQL",
        "Docker",
        "Tailwind CSS",
        "REST API",
        "nginx",
        "Apache",
        "MariaDB",
        "phpMyAdmin"
      ],
    },
    {
      company: "Furmap",
      link: "",
      title: "Site developer",
      start: "indefinido",
      end: "indefinido",
      description:
        "Proyecto personal de un mapa para la comunidad furry cuyo objetivo es facilitar el encuentro entre personas, lugares y eventos con intereses afines. Inspirado en una versión antigua de Furrymap.net y BARQ!.",
      achievements: [
        "Diseño de una API completa preparada para un flujo alto y concurrente de usuarios.",
        "Diseño de la interfaz optimizada para un enfoque mobile-first.",
        "Implementación de un sistema de registro de usuarios, perfiles verificados, grupos, registro de eventos y un mapa de calor para lugares con alta concurrencia de usuarios registrados.",
      ],
      badges: [
        "Bun",
        "React",
        "Docker",
        "PHP",
        "Microservicios",
        "GraphQL",
        "SQL",
      ],
    },
    {
      company: "Semanario Mar Adentro",
      link: "https://maradentroaca.org",
      title: "Website developer",
      start: "Junio 2026",
      end: "actualidad",
      description:
        "Semanario Mar Adentro: sitio web informativo de la arquidiócesis de Acapulco. Planificación, gestión y desarrollo integral del proyecto, incluyendo la creación de plugins y plantillas personalizadas en WordPress.",
      achievements: [
        "Diseño y desarrollo de interfaces adaptadas para computadoras y dispositivos móviles.",
        "Implementación de plugins personalizados para el directorio parroquial de la arquidiócesis de Acapulco.",
      ],
      badges: ["WordPress", "PHP", "CSS", "HTML", "JavaScript"],
    },
    {
      company: "Parroquia San Pedro Apóstol A.R.",
      link: "https://padrejesusdepetatlan.org",
      title: "Software Maintenance Engineer",
      start: "Mayo 2025",
      end: "actualidad",
      description:
        "Desarrollo y mantenimiento de software de legado para la gestión de registros históricos de la parroquia, incluyendo la migración a tecnologías modernas y la optimización de procesos internos.",
      achievements: [
        "Implementación de bases de datos modernas para mejorar la eficiencia en la gestión de registros.",
        "Migración exitosa de sistemas heredados a tecnologías actuales, mejorando la estabilidad y el rendimiento del software.",
        "Mejoras significativas en la interfaz de usuario, facilitando el acceso a la información para el personal de la parroquia.",
      ],
      badges: ["PHP", "CSS", "HTML", "MySQL", "React", "JavaScript"],
    },
  ],
  education: [
    {
      school: "Universidad Tecnologica de la Costa Grande de Guerrero",
      degree:
        "TÉCNICO SUPERIOR UNIVERSITARIO EN TECNOLOGÍAS DE LA INFORMACIÓN ÁREA DESARROLLO DE SOFTWARE MULTIPLATAFORMA",
      start: "Sept 2023",
      end: "Ago 2025",
    },
    {
      school: "Universidad Tecnologica de la Costa Grande de Guerrero",
      degree: "INGENIERIA EN DESARROLLO Y GESTIÓN DE SOFTWARE.",
      start: "Sept 2025",
      end: "actualidad",
    },
  ],
  skills: [
    "Desarrollo Backend",
    "Frontend",
    "Fullstack",
    "Linux",
    "PHP",
    "MySQL",
    "JavaScript",
    "React",
    "Bun",
    "NodeJS",
    "Docker",
  ],
};
