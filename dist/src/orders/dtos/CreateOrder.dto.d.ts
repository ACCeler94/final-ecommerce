import { Product } from '@prisma/client';
export declare class CreateOrderDto {
    products: {
        product: Product;
        quantity: number;
        comment?: string;
        size: string;
    }[];
    userData: {
        name: string;
        email: string;
        shippingStreet: string;
        shippingCity: string;
        shippingZip: string;
    };
    orderTotal: number;
}
