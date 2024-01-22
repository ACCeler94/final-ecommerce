import axios from 'axios';
import { API_URL } from './config';
import Order from '../types/Order';

const productsAPI = {
  // get requests
  fetchAll: () => axios.get(`${API_URL}/products`),
  fetchById: (id: string) => axios.get(`${API_URL}/products/${id}`),

  // post requests
  placeOrder: (orderData: Order) => axios.post(`${API_URL}/`, orderData),
};

export default productsAPI;
