interface QuantityFieldProps {
    productId: string;
    quantity: number | string;
    changeQuantity: (value: number | string) => void;
}
declare const QuantityField: ({ productId, quantity, changeQuantity, }: QuantityFieldProps) => import("react/jsx-runtime").JSX.Element;
export default QuantityField;
