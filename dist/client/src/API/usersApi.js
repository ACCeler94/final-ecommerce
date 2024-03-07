"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const config_1 = require("./config");
const usersAPI = {
    fetchUserData: () => axios_1.default.get(`${config_1.API_URL}/users/userData`),
};
exports.default = usersAPI;
//# sourceMappingURL=usersApi.js.map