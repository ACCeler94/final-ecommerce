"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Account_1 = require("../Account/Account");
const AccountInfo_module_css_1 = require("./AccountInfo.module.css");
const AccountInfo = () => {
    const { name, email, street, zip, city } = (0, Account_1.useUserData)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: AccountInfo_module_css_1.default.infoWrapper, children: [(0, jsx_runtime_1.jsxs)("p", { children: ["Name: ", (0, jsx_runtime_1.jsx)("span", { className: AccountInfo_module_css_1.default.infoValue, children: name })] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Email: ", (0, jsx_runtime_1.jsx)("span", { className: AccountInfo_module_css_1.default.infoValue, children: email })] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Street: ", (0, jsx_runtime_1.jsx)("span", { className: AccountInfo_module_css_1.default.infoValue, children: street })] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Zip-Code: ", (0, jsx_runtime_1.jsx)("span", { className: AccountInfo_module_css_1.default.infoValue, children: zip })] }), (0, jsx_runtime_1.jsxs)("p", { children: ["City: ", (0, jsx_runtime_1.jsx)("span", { className: AccountInfo_module_css_1.default.infoValue, children: city })] })] }));
};
exports.default = AccountInfo;
//# sourceMappingURL=AccountInfo.js.map