import { ProductsService } from './products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getAllProducts(): Promise<import(".prisma/client").Product[]>;
    getProductById(id: 'string'): Promise<import(".prisma/client").Product>;
}
