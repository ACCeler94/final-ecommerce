"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Container_1 = require("../../common/Container/Container");
const ProductList_1 = require("../../features/productList/components/ProductList/ProductList");
const CategoryPage = ({ category }) => {
    return ((0, jsx_runtime_1.jsx)("main", { className: "category", children: (0, jsx_runtime_1.jsxs)(Container_1.default, { children: [(0, jsx_runtime_1.jsxs)("h1", { children: [category, " Products"] }), (0, jsx_runtime_1.jsx)(ProductList_1.default, { category: category })] }) }));
};
exports.default = CategoryPage;
//# sourceMappingURL=CategoryPage.js.map