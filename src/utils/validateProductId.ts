import { NotFoundException } from '@nestjs/common';
import { PrismaClient, Product } from '@prisma/client';

const prisma = new PrismaClient();

const validateProductId = async (id: Product['id']) => {
  try {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) throw new NotFoundException('Product not found.');
  } catch (error) {
    throw new Error('Error validating product Id');
  }
};

export default validateProductId;
