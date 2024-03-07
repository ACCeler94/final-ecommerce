import { ProductsService } from './products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getAllProducts(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        brand: string;
        name: string;
        sex: string;
        price: number;
        photo: string;
        description: string;
        sizes: string;
    }, unknown> & {})[]>;
    getProductById(id: 'string'): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        brand: string;
        name: string;
        sex: string;
        price: number;
        photo: string;
        description: string;
        sizes: string;
    }, unknown> & {}>;
}
