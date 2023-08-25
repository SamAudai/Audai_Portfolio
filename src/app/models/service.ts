export interface Iservice{
    id: number;
    title: string;
    description: string;
    price: string;
    image: string;
}

export const service:Array<Iservice>=[
    {
        id: 0,
        title: "Web Design and Development",
        description: "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development ...",
        price: "$49",
        image: "assets/image/web_design.svg"
    },
    {
        id: 1,
        title: "Software Engineering",
        description: "I have experience in agile software development and lean development, in addition to mastering some engineering practices to build quality in software ...",
        price: "$99",
        image: "assets/image/technology.svg"
    },
    {
        id: 2,
        title: "Application Development",
        description: "Developing desktop applications using .Net Core technology, such as warehouse management applications, electronic library, virtual school system ...",
        price: "$49",
        image: "assets/image/development.png"
    },
    {
        id: 3,
        title: "Courses instructor",
        description: "Offering training courses in web development techniques and desktop applications for beginner, intermediate and advanced levels...",
        price: "$19",
        image: "assets/image/instructor.svg"
    }
]