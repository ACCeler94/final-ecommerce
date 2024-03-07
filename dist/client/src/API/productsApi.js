"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const config_1 = require("./config");
const productsAPI = {
    fetchAll: () => axios_1.default.get(`${config_1.API_URL}/products`),
    fetchById: (id) => axios_1.default.get(`${config_1.API_URL}/products/${id}`),
};
exports.default = productsAPI;
//# sourceMappingURL=productsApi.js.map