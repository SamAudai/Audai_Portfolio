export interface Inavitem{
    id: number;
    name: string;
    link: string;
}

export const navItem:Inavitem[] = [
    {
        id: 0,
        name: 'Home',
        link: '/home'
    },
    {
        id: 1,
        name: 'About',
        link: '/about'
    },
    {
        id: 2,
        name: 'Portfolio',
        link: '/portfolio'
    },
    {
        id: 3,
        name: 'Service',
        link: '/services'
    },
    {
        id: 4,
        name: 'Contact',
        link: '/contact'
    }
]