import Product from './Product';

type ProductOnOrder = {
  product: Product;
  quantity: number;
  comment: string;
  size: string;
};

type Order = {
  id?: string;
  products: ProductOnOrder[];
  userData: {
    name: string;
    email: string;
    shippingStreet: string;
    shippingCity: string;
    shippingZip: string;
  };
  orderTotal: number;
};

export default Order;
