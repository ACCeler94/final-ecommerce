/// <reference types="react" />
interface CheckoutFormProps {
    orderSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    shippingStreet: string;
    setShippingStreet: React.Dispatch<React.SetStateAction<string>>;
    shippingCity: string;
    setShippingCity: React.Dispatch<React.SetStateAction<string>>;
    shippingZip: string;
    setShippingZip: React.Dispatch<React.SetStateAction<string>>;
}
declare const CheckoutForm: ({ name, setName, email, setEmail, shippingStreet, setShippingStreet, shippingCity, setShippingCity, shippingZip, setShippingZip, orderSubmitHandler, }: CheckoutFormProps) => import("react/jsx-runtime").JSX.Element;
export default CheckoutForm;
