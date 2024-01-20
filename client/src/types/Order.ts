import Product from './Product';

type ProductOnOrder = {
  product: Product;
  quantity: number;
  comment: string;
};

type Order = {
  products: ProductOnOrder[];
  userData: string;
};

export default Order;
