export interface Iportfolio{
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
}

export const portFolio: Iportfolio[] = [
    {
        id: 0,
        title: "Portfolio Website",
        description: "A personal website to display the completed works and services, implemented by the Angular framework with a fake server",
        image: "assets/image/work-3.png",
        link: "#"
    },
    {
        id: 1,
        title: "Resume Website",
        description: "The site is a resume, implemented by Angular framework with a fake server",
        image: "assets/image/work-3.png",
        link: "https://github.com/SamAudai/My_Resume.git"
    },
    {
        id: 2,
        title: "Restaurant Frontend",
        description: "The site is a restaurant serving meals and booking tables. The front end was implemented by the Angular framework",
        image: "assets/image/work-3.png",
        link: "https://github.com/SamAudai/Restorant-FrontEnd.git"
    },
    {
        id: 3,
        title: "Restaurant backend",
        description: "The site is a restaurant serving meals and booking tables, the backend was implemented by NodeJS and Express framework and the Mongo database.",
        image: "assets/image/work-3.png",
        link: "https://github.com/SamAudai/Restorant-Server.git"
    },
    {
        id: 4,
        title: "Portfolio Website",
        description: "This project is portfolio website that created using .Net core and sql server",
        image: "assets/image/work-3.png",
        link: "https://github.com/SamAudai/.Net-Core.git"
    },
    {
        id: 5,
        title: "Animation Website",
        description: "Simple animations website using Html, CSS and JavaScript",
        image: "assets/image/work-3.png",
        link: "https://github.com/SamAudai/Story-Website.git"
    }
]