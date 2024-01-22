import axios from 'axios';
import Order from '../types/Order';
import { API_URL } from './config';

const ordersAPI = {
  // post requests
  placeOrder: (orderData: Order) => axios.post(`${API_URL}/orders`, orderData),
};

export default ordersAPI;
