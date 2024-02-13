import { Product } from '@prisma/client';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateOrderDto {
  @IsArray()
  @IsNotEmpty()
  products: {
    product: Product;
    quantity: number;
    comment?: string;
    size: string;
  }[];

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  userData: {
    name: string;
    email: string;
    shippingStreet: string;
    shippingCity: string;
    shippingZip: string;
  };

  @IsNotEmpty()
  @IsNumber()
  orderTotal: number;
}
