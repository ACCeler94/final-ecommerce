import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'd3c4a9f5-8b5e-4d7a-9f6d-2e6d7c1e7c7e',
      brand: 'Breezy',
      name: 'Cotton T-Shirt',
      sex: 'male',
      price: 30,
    },
    {
      id: 'b8e4d9c1-9f5a-4d9c-9f1e-3c8d7b2e6d5f',
      brand: 'Floralee',
      name: 'Floral Print Dress',
      sex: 'female',
      price: 50,
    },
    {
      id: 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d',
      brand: 'Denimix',
      name: 'Slim Fit Jeans',
      sex: 'male',
      price: 80,
    },
    {
      id: 'e6d5c4b3-a2f1-4d5e-8c9b-0a1b2c3d4e5f',
      brand: 'Pleatique',
      name: 'Pleated Mini Skirt',
      sex: 'female',
      price: 35,
    },
    {
      id: 'f0e1d2c3-b4a5-4c3d-8e9f-7a6b5c4d3e2f',
      brand: 'Chillax',
      name: 'Essentials Hoodie',
      sex: 'male',
      price: 70,
    },
    {
      id: 'c5d4e3f2-a1b2-4e5f-8c9d-0a1b2c3d4e5f',
      brand: 'Satinique',
      name: 'Satin Blouse',
      sex: 'female',
      price: 40,
    },
    {
      id: 'b2c3d4e5-f6a7-4b3c-8d9e-0f1a2b3c4d5e',
      brand: 'Polozone',
      name: 'Classic Polo Shirt',
      sex: 'male',
      price: 90,
    },
    {
      id: 'd4e5f6a7-b8c9-4d5e-9f1a-2b3c4d5e6f7a',
      brand: 'Leatherique',
      name: 'Faux Leather Jacket',
      sex: 'female',
      price: 100,
    },
    {
      id: 'e5f6a7b8-c9d0-4e5f-8a1b-2c3d4e5f6a7b',
      brand: 'Chinomax',
      name: 'Slim Fit Chinos',
      sex: 'male',
      price: 60,
    },
    {
      id: 'a2b3c4d5-e6f7-4a5b-8c9d-0e1f2a3b4c5d',
      brand: 'Knitique',
      name: 'Cable Knit Sweater',
      sex: 'female',
      price: 45,
    },
  ];
}

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );
}

seed();
