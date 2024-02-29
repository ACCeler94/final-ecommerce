import axios from 'axios';
import { API_URL } from './config';
import User from '../types/User';
import LoginData from '../types/LoginData';

const authAPI = {
  // post requests
  registerUser: (userData: User) =>
    axios.post(`${API_URL}/auth/register`, userData),

  loginUser: (loginData: LoginData) =>
    axios.post(`${API_URL}/auth/login`, loginData),

  loginWithJWT: () => axios.post(`${API_URL}/auth/logJWT`),

  logoutUser: () => axios.delete(`${API_URL}/auth/logout`),
};

export default authAPI;
