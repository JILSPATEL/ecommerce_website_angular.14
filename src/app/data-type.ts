export interface SignUp {
    name: string,
    password: string,
    email: string
}

export interface login {
    email: String,
    password: String
}

export interface product {
    name: string,
    price: string,
    category: string,
    color: string,
    description: string,
    image: string,
    id: any,
    productId: undefined | any,
    quantity: undefined | number
}

export interface cart {
    name: string,
    price: string,
    category: string,
    color: string,
    description: string,
    image: string,
    id: any | undefined,
    quantity: undefined | number,
    userId: any,
    productId: any
}

export interface priceSummary {
    price: number,
    discount: number,
    tax: number,
    delivery: number,
    total: number
}

export interface order {
    name: string,
    email: string,
    address: string,
    pincode: number,
    contact: string,
    totalPrice: number,
    userId: any,
    id: any
}

export interface Feedback {
    customerName: string;
    rating: number;
    productName: string;
    review: string;
}
