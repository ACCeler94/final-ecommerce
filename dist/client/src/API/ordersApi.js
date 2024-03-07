"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const config_1 = require("./config");
const ordersAPI = {
    placeOrder: (orderData) => axios_1.default.post(`${config_1.API_URL}/orders`, orderData),
};
exports.default = ordersAPI;
//# sourceMappingURL=ordersApi.js.map