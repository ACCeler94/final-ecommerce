import { Product } from '@prisma/client';
import { IsArray, IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @IsArray()
  @IsNotEmpty()
  products: { id: Product['id']; quantity: number }[];

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  userId: string;
}
