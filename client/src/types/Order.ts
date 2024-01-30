import Product from './Product';

type ProductOnOrder = {
  product: Product;
  quantity: number;
  comment: string;
  size: string;
};

type Order = {
  products: ProductOnOrder[];
  userData: { name: string; email: string; address: string };
  orderTotal: number;
};

export default Order;
