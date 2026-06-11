export interface CV {
    name: string,
    title: string,
    location: string,
    locationLink: string,
    about: string,
    summary: string,
    personalWebsiteUrl: string,
    contact: Contact;
    work: Work[];
    education: Education[];
    skills: string[];
}

export interface Contact {
    email: string,
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
    name: "Ulf FrostyPaw",
    title: "Software Engineer",
    location: "Acapulco, Mexico",
    locationLink: "https://www.google.com/maps/place/Acapulco",
    about: "Desarrollador de software especializado en backend y soluciones para PyMEs.",
    summary: `Desarrollador principal y líder de proyectos digitales, especializado en backend, servidores Linux y soluciones para PyMEs.
Emprendedor en servicios de redes, instalación de cámaras, venta y provisión de equipos y servidores a bajo costo para empresas y hogares.`,
    personalWebsiteUrl: "https://ulffrostypaw.com",
    contact: {
        email: "contacto@ulffrostypaw.com",
        social: [
            {name: "GitHub", url: "https://github.com/ulf-frostypaw"},
            {name: "LinkedIn", url: "https://www.linkedin.com/in/sergalote/"},
        ],
    },
    work: [
        {
            company: "Parroquia San Pedro Apóstol A.R.",
            link: "https://padrejesusdepetatlan.org",
            title: "Software Mantenance Engineer",
            start: "Mayo 2025",
            end: "actualidad",
            description: "Desarrollo y mantenimiento de software de legado para la gestión de registros historicos de la parroquia, incluyendo migración a tecnologías modernas y optimización de procesos internos.",
            achievements: [
                "Implementacion de bases de datos modernas para mejorar la eficiencia en la gestión de registros.",
                "Migración exitosa de sistemas heredados a tecnologías actuales, mejorando la estabilidad y rendimiento del software.",
                "Mejoras significativas en la interfaz de usuario, facilitando el acceso a la información para el personal de la parroquia."
            ],
            badges: ["PHP", "CSS", "HTML", "MySQL", "React", "JavaScript"],
        }
    ],
    education: [
        {
            school: "Universidad Tecnologica de la Costa Grande de Guerrero",
            degree: "TSU en Gestión y Mantenimiento de Software, área Multiplataforma",
            start: "2023",
            end: "actualidad",
        },
    ],
    skills: [
        "Desarrollo Backend",
        "Linux",
        "PHP",
        "MySQL",
        "JavaScript",
        "React",
        "Docker"
        
    ],
};