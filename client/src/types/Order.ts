import Product from './Product';

type ProductOnOrder = {
  product: Product;
  quantity: number;
  comment: string;
};

type Order = {
  products: ProductOnOrder[];
  userData: { name: string; email: string; address: string };
};

export default Order;
