import User from '../types/User';
import LoginData from '../types/LoginData';
declare const authAPI: {
    registerUser: (userData: User) => Promise<import("axios").AxiosResponse<any, any>>;
    loginUser: (loginData: LoginData) => Promise<import("axios").AxiosResponse<any, any>>;
    loginWithJWT: () => Promise<import("axios").AxiosResponse<any, any>>;
    logoutUser: () => Promise<import("axios").AxiosResponse<any, any>>;
};
export default authAPI;
