import axios from 'axios';
import { API_URL } from './config';
import User from '../types/User';

const usersAPI = {
  // post requests
  registerUser: (userData: User) =>
    axios.post(`${API_URL}/auth/register`, userData),
};

export default usersAPI;
