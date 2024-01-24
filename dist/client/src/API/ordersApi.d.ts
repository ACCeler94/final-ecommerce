import Order from '../types/Order';
declare const ordersAPI: {
    placeOrder: (orderData: Order) => Promise<import("axios").AxiosResponse<any, any>>;
};
export default ordersAPI;
