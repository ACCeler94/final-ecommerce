import Product from '../../../../../types/Product';
interface CheckoutSummaryProps {
    cart: {
        quantity: number;
        product: Product;
        comment: string;
        size: string;
        cartItemId: string;
    }[];
    totalPrice: number | null;
}
declare const CheckoutSummary: ({ cart, totalPrice }: CheckoutSummaryProps) => import("react/jsx-runtime").JSX.Element;
export default CheckoutSummary;
