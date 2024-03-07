import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAllProducts(): Promise<Product[]>;
    getProductById(id: Product['id']): Promise<Product> | null;
}
