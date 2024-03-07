"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const config_1 = require("./config");
const authAPI = {
    registerUser: (userData) => axios_1.default.post(`${config_1.API_URL}/auth/register`, userData),
    loginUser: (loginData) => axios_1.default.post(`${config_1.API_URL}/auth/login`, loginData),
    loginWithJWT: () => axios_1.default.post(`${config_1.API_URL}/auth/logJWT`),
    logoutUser: () => axios_1.default.delete(`${config_1.API_URL}/auth/logout`),
};
exports.default = authAPI;
//# sourceMappingURL=authApi.js.map