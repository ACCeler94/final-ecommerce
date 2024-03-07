"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Container_1 = require("../../common/Container/Container");
const ProductList_1 = require("../../features/productList/components/ProductList/ProductList");
const Home = () => {
    return ((0, jsx_runtime_1.jsx)("main", { className: "home", children: (0, jsx_runtime_1.jsxs)(Container_1.default, { children: [(0, jsx_runtime_1.jsx)("h1", { children: "All Products" }), (0, jsx_runtime_1.jsx)(ProductList_1.default, {})] }) }));
};
exports.default = Home;
//# sourceMappingURL=Home.js.map