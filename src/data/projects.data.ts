type Project = {
    title: string,
    state: "Completado" | "En progreso" | "En arreglos" | "Boceto"
    tags: string[],
    description: string,
    images?: string[],
    urlWebsite?: string,
    urlGithub?: string,
}

export const Projects: Project[] = [
    {
        title: "Connect Latam VT",
        state: "Completado",
        tags: ["Website", "Freelance","Next JS", ],
        description: "Sitio web dedicado a la publicación, divulgacion de blogs, noticias y proyectos relacionados a la K-Pop Band Enhypen. Implementa diseños responsive permitiendo el acceso desde cualuier dispositivo, junto a un boton para cambiar de idiomas entre el español y una infraestructura de SEO completa (metadata, robots.txt, sitemap, Google Search Console). Fue desplegado en vercel y desarrollado en Next.Js, se utilizo Next-Intl para proporcionar internacionalización",
        images: undefined,
        urlWebsite: "https://connectlatamvt.vercel.app/",
        urlGithub: "https://github.com/CarlosMendozaGarcia/ConnectLatam-2.0.git",
    },
    {
        title: "Casamigos",
        state: "Completado",
        tags: ["Landing page","Freelance", "Astro Js", ],
        description: "Landing page para la promoción de un proyecto inmobiliario ubicado en las islas turcas y caicos, contiene información sobre el proyecto, el equipo, amenidades y especificaciones.Utiliza animación basica y animaciones conectadas con el scroll (ScrollTrigger). Fue desplegado en Netlify y desarrollado con Astro.Js y para las aniamciones se utilizo GSAP",
        images: undefined,
        urlWebsite: "https://casamigostci.com/",
        urlGithub: "https://github.com/Raw-Form/Casamigos",
    },
    {
        title: "PriceHive",
        state: "Completado",
        tags: ["Website", "Proyecto universitario", "HTML CSS", "Vite", "Javascript"],
        description: "Aplicación web basada en la recopilación de productos y su clasificación. Permite recopilar información basica sobre productos tecnologicos en almacenes de cadena haciendo uso de WebScrapping, fue desarrollado en HTML, CSS, Vite y Javascript",
        images: undefined,
        urlGithub: "",
    },
    {
        title: "CarPool",
        state: "Completado",
        tags: ["Proyecto universitario", "Aplicación movil", "FlutterFlow", "FireBase"],
        description: "Aplicación movil basada en los servicios de vehiculo compartido o Carpool. Facilita la relación usuario-conductor, pudiendo el usuario reservar o solicitar servicios en el mismo instante. Hace uso de almacenamiento de colecciones y autenticación mediante FireBase",
        images: undefined,
    },

]