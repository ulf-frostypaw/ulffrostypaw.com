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
            title: "Java Software Engineer",
            start: "Mayo 2025",
            end: "actualidad",
            description: "Develop and maintain backend microservices for a high-performance, multi-asset trading platform.",
            achievements: [
                "Engineer scalable microservices with Java 21 and Spring Boot for user management, trade execution, and onboarding.",
                "Implement an event-driven architecture with Kafka for reliable, real-time data processing between services.",
                "Develop secure RESTful APIs using the OpenAPI standard for frontend and internal system integration.",
                "Manage PostgreSQL schema evolution and data integrity using Liquibase for database migrations.",
                "Monitor system performance and health using Grafana and OpenSearch to ensure high availability."
            ],
            badges: ["Java 21", "Spring Boot", "Kafka", "Redis", "PostgreSQL", "Liquibase", "JUnit", "Mockito", "Testcontainers", "AWS",
                "Docker", "REST", "OpenAPI", "Grafana", "OpenSearch", "k6"],
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
        "Java (8, 11, 21)", "Spring Boot", "Hibernate", "Kafka", "Maven", "AWS", "Angular", "SQL", "PostreSQL", "Docker",
        "JUnit", "Mockito", "REST"
    ],
};