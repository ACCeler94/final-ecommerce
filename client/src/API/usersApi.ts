import axios from 'axios';
import { API_URL } from './config';

const usersAPI = {
  fetchUserData: () => axios.get(`${API_URL}/users/userData`),
};

export default usersAPI;
