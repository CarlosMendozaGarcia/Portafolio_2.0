type Job = {
    id: number,
    company: string,
    position: string,
    initialDate: string,
    endDate?: string,
    skills: string[]
}
export const Jobs: Job[] = [
    {
        id: 1,
        company: "Arenas Inmobiliaria",
        position: "Gestor de Desarrollo",
        initialDate: "2025-10-14",
        skills:["Desarrollo de aplicaciones web","Administración y soporte de CRM interno de la empresa","Desarrollo de automatizaciones para la optimización de processos operativos y administrativos", "Despliegue y administración de proyectos mediante contenedores", "Desarrollo y soporte de sitios web desarrollados en WordPress","Implementación de busqueda flexible de propiedades y estructuras de SEO"]
    },
    {
        id: 2,
        company: "RawForm",
        position: "Desarrollador FrontEnd",
        initialDate: "2026-02-02",
        skills:["Desarrollo de aplicaciones web", "Experiencia UI / UX", "Implementación de animaciones y de objetos interactivos", "Diseño para productos"]
    },
];