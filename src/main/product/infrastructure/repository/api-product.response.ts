export interface ApiProductResponse {
    items: ApiProduct[];
}

export interface ApiProduct {
    title: string;
    description: string;
    price: string;
    email: string;
    image: string;
}
