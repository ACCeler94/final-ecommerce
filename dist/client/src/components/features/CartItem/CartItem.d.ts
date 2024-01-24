import Product from '../../../types/Product';
import 'react-toastify/dist/ReactToastify.css';
interface CartItemProps {
    product: Product;
    quantity: number;
}
declare const CartItem: ({ product, quantity }: CartItemProps) => import("react/jsx-runtime").JSX.Element;
export default CartItem;
