import Order from './Order';
export type AccountData = {
    id: string;
    email: string;
    name: string;
    street: string;
    zip: string;
    city: string;
    orders: Order[];
};
