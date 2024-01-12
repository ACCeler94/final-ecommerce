import axios from 'axios';
import { API_URL } from './config';

const productsAPI = {
  // get requests
  fetchAll: () => axios.get(`${API_URL}/products`),
  fetchById: (id: string) => axios.get(`${API_URL}/products/${id}`),
};

export default productsAPI;
