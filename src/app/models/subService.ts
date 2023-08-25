export interface IsubService{
    id: number;
    title: string;
    image: string;
    description: string;
}

export const subService:Array<IsubService> = [
    {
        id: 0,
        title: "Pixel Perfect",
        image: "assets/image/target.svg",
        description: "Responsive and adaptive web design. Works fine on all devices."
    },
    {
        id: 1,
        title: "High Quality",
        image: "assets/image/brush.svg",
        description: "Delivering High-Quality Solutions, and Excellence in Every Line of Code."
    },
    {
        id: 2,
        title: "Awesome Idea",
        image: "assets/image/energy.svg",
        description: "Transforming Awesome Ideas into Digital Reality, and bringing it to life."
    }
]