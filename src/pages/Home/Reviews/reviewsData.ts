interface IReviewCard {
    name: string;
    rate: number;
    certified?: boolean | null;
    text?: string | null;
}

const data: IReviewCard[] = [
    {
        name: "Sarah M.",
        rate: 5,
        certified: true,
        text: "I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I have bought has exceeded my expectations.",
    },
    // {
    //     name: "John D.",
    //     rate: 4,
    // },
];

export default data;
