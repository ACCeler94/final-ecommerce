import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  public getAllProducts(): Promise<Product[]> {
    return this.prismaService.product.findMany();
  }

  public getProductById(id: Product['id']): Promise<Product> | null {
    return this.prismaService.product.findUnique({ where: { id } });
  }
}
