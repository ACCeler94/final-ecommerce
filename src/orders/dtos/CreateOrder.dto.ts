import { Product } from '@prisma/client';
import { IsArray, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsArray()
  @IsNotEmpty()
  products: { product: Product; quantity: number; comment?: string }[];

  /* @IsString()
  @IsNotEmpty()
  @IsUUID()
  userId: string; */

  @IsNotEmpty()
  userData: { name: string; email: string; address: string };

  @IsNotEmpty()
  @IsNumber()
  orderTotal: number;
}
