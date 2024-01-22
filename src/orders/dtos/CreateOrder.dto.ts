import { Product } from '@prisma/client';
import { IsArray, IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsArray()
  @IsNotEmpty()
  products: { id: Product['id']; quantity: number }[];

  /* @IsString()
  @IsNotEmpty()
  @IsUUID()
  userId: string; */

  @IsNotEmpty()
  userData: { name: string; email: string; address: string };
}
