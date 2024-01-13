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
      photo: 'cotton-t-shirt.jpeg',
      description:
        'You will adore this soft and comfortable cotton t-shirt from Breezy. This t-shirt has a crew neck, short sleeves, and a regular fit that gives it a casual and relaxed look. Warning: this design was made only for real book nerds!',
    },
    {
      id: 'b8e4d9c1-9f5a-4d9c-9f1e-3c8d7b2e6d5f',
      brand: 'Floralee',
      name: 'Floral Print Dress',
      sex: 'female',
      price: 50,
      photo: 'floral-dress.jpeg',
      description:
        'A beautiful and feminine floral print dress that is ideal for any occasion. This dress features a v-neck, short sleeves, a fitted waist, and a flared skirt. It is made of lightweight and breathable fabric that is easy to care for.',
    },
    {
      id: 'a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d',
      brand: 'Denimix',
      name: 'Slim Fit Jeans',
      sex: 'male',
      price: 80,
      photo: 'slim-jeans.jpeg',
      description:
        'You will rock these dark, distressed jeans from Denimix. These jeans are fitted and have visible wear and tear, giving them a rugged and cool look. They are made of durable and stretchy denim that offers a comfortable and flattering fit.',
    },
    {
      id: 'e6d5c4b3-a2f1-4d5e-8c9b-0a1b2c3d4e5f',
      brand: 'Pleatique',
      name: 'Pleated Mini Skirt',
      sex: 'female',
      price: 35,
      photo: 'mini-skirt.jpeg',
      description:
        'You will love this flirty and fashionable mini skirt from Pleatique. This mini skirt has an elastic waistband, a side zipper, and a pleated design that gives it a fun and flirty look. It is made of smooth and shiny fabric that adds some sparkle to your outfit.',
    },
    {
      id: 'f0e1d2c3-b4a5-4c3d-8e9f-7a6b5c4d3e2f',
      brand: 'Chillax',
      name: 'Essentials Hoodie',
      sex: 'male',
      price: 70,
      photo: 'hoodie.jpeg',
      description:
        "If you are looking for a cozy, warm, and stylish hoodie, you need this grey hoodie from Chillax. This hoodie has a drawstring hood, long sleeves, a kangaroo pocket, and a ribbed hem and cuffs. It also has a distinctive badge on the left chest area, featuring a red star inside a shield shape. This badge symbolizes your passion, courage, and spirit.This hoodie is made of soft and fuzzy fleece that is great for lounging or layering. It is durable, breathable, and easy to wash. It comes in various sizes and colors to suit your preference. You can pair it with anything you like and create your own style. This hoodie is not just a hoodie, it's a lifestyle. Order now and chillax in style.",
    },
    {
      id: 'c5d4e3f2-a1b2-4e5f-8c9d-0a1b2c3d4e5f',
      brand: 'Satinique',
      name: 'White Blouse',
      sex: 'female',
      price: 40,
      photo: 'white-blouse.jpeg',
      description:
        "Looking for a chic and elegant blouse that can go from work to play? You need this white blouse from Satinique. This blouse has a round neck, long sleeves, a button placket, and a curved hem. It also has a unique tie feature at the collar that adds some flair to the outfit. It is made of silky and smooth fabric that drapes beautifully over your body. This blouse is versatile, comfortable, and stylish. It is easy to care for and comes in various sizes and colors to suit your preference. You can pair it with anything you like and create your own style. This blouse is not just a blouse, it's a statement. Order now and impress everyone with your fashion sense.",
    },
    {
      id: 'b2c3d4e5-f6a7-4b3c-8d9e-0f1a2b3c4d5e',
      brand: 'Polozone',
      name: 'Classic Polo Shirt',
      sex: 'male',
      price: 90,
      photo: 'polo-classic.jpg',
      description:
        'You can never go wrong with a timeless polo shirt from Polozone. This polo shirt is classic and sophisticated, featuring a polo collar, short sleeves, a three-button placket, and a small white logo on the left chest area. It is made of cotton and polyester that are soft and durable, keeping you comfortable and stylish all day long. This polo shirt is versatile, easy to wear, and suitable for both casual and formal occasions. It comes in various sizes and colors to suit your preference. You can pair it with anything you like and create your own style. Order now and show everyone your refined taste.',
    },
    {
      id: 'd4e5f6a7-b8c9-4d5e-9f1a-2b3c4d5e6f7a',
      brand: 'Leatherique',
      name: 'Faux Leather Jacket',
      sex: 'female',
      price: 100,
      photo: 'leather-jacket.jpg',
      description:
        'A stylish and edgy faux leather jacket that is a great addition to your wardrobe. This jacket features a lapel collar, long sleeves, a zip front, and zip pockets. It is made of faux leather that is smooth and sleek, and has a quilted lining for extra warmth.',
    },
    {
      id: 'e5f6a7b8-c9d0-4e5f-8a1b-2c3d4e5f6a7b',
      brand: 'Chinomax',
      name: 'Slim Fit Chinos',
      sex: 'male',
      price: 60,
      photo: 'chinos.jpeg',
      description:
        'If you are looking for a pair of chinos that are smart and casual, you need these slim fit chinos from Chinomax. These chinos have a belt loop waist, a zip fly, and a button closure. They are made of cotton and spandex that offer a comfortable and flexible fit, allowing you to move freely and confidently. These chinos are versatile, easy to care for, and suitable for any occasion. They come in various colors and sizes to match your style. You can pair them with anything you like and create your own look. These chinos are not just chinos, they are a reflection of your personality. Order now and enjoy the comfort and style of these chinos.',
    },
    {
      id: 'a2b3c4d5-e6f7-4a5b-8c9d-0e1f2a3b4c5d',
      brand: 'Knitique',
      name: 'Cable Knit Sweater',
      sex: 'female',
      price: 45,
      photo: 'knit-sweater.jpeg',
      description:
        'Wrap yourself in this cozy and cute cable knit sweater from Knitique. This sweater has a round neck, long sleeves, and a cable knit pattern that gives it a cozy and textured feel. It is made of wool and acrylic that are warm and soft, keeping you snug and comfy in the chilly weather.',
    },
  ];
}

function getUsers() {
  return [
    {
      id: 'd8f4c9a2-7b7e-4f5e-9c6d-1d7d7d3c8a7f',
      email: 'johndoe@example.com',
      name: 'John Doe',
      address: '123 Main St, Anytown USA',
    },
  ];
}

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );

  await Promise.all(
    getUsers().map((user) => {
      return db.user.create({ data: user });
    }),
  );
}

seed();
