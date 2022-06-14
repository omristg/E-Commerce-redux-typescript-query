export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: Category;
    images: string[];
}

type Category = {
    id: number;
    name: string;
    image: string;
}


