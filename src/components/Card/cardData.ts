export interface ICardData {
    id: number;
    name: string;
    image: string;
    category: string;
    rate: number;
    price: number;
    initialPrice?: number;
    discountPercentage?: number;
    topSelling?: boolean;
    newArrival?: boolean;
}

const data: ICardData[] = [
    {
        id: 1,
        name: "Levis",
        image: "",
        category: "Casual",
        rate: 4,
        price: 100,
        initialPrice: 200,
        discountPercentage: 10,
        topSelling: true,
    },
    {
        id: 3,
        name: "White Tee",
        image: "",
        category: "Gym",
        rate: 3,
        price: 99,
        newArrival: true,
    },
    {
        id: 4,
        name: "Pink Coat",
        image: "",
        category: "Party",
        rate: 5,
        price: 599,
        newArrival: true,
    },
    {
        id: 5,
        name: "Sport Suit",
        image: "",
        category: "Formal",
        rate: 4,
        price: 399,
        initialPrice: 799,
        discountPercentage: 50,
        topSelling: true,
    },
    {
        id: 6,
        name: "Spike Hat",
        image: "",
        category: "Casual",
        rate: 2,
        price: 59,
        newArrival: true,
    },
];

export default data;
