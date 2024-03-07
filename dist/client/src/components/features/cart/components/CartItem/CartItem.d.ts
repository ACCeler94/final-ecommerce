import Product from '../../../../../types/Product';
import 'react-toastify/dist/ReactToastify.css';
interface CartItemProps {
    product: Product;
    quantity: number;
    size: string;
    cartItemId: string;
    cart: {
        quantity: number;
        product: Product;
        comment: string;
        size: string;
        cartItemId: string;
    }[];
}
declare const CartItem: ({ product, quantity, size, cartItemId, cart, }: CartItemProps) => import("react/jsx-runtime").JSX.Element;
export default CartItem;
