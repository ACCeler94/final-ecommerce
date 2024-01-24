import { Product } from '@prisma/client';
export declare class CreateOrderDto {
    products: {
        product: Product;
        quantity: number;
        comment?: string;
    }[];
    userData: {
        name: string;
        email: string;
        address: string;
    };
    orderTotal: number;
}
