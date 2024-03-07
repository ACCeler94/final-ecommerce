"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const store_1 = require("../../../../../store/store");
const react_1 = require("react");
const productListSlice_1 = require("../../productListSlice");
const ProductCard_1 = require("../ProductCard/ProductCard");
const ProductList_module_css_1 = require("./ProductList.module.css");
const Error_1 = require("../../../../common/Error/Error");
const LoadingSpinner_1 = require("../../../../common/LoadingSpinner/LoadingSpinner");
const ProductList = ({ category }) => {
    const dispatch = (0, store_1.useAppDispatch)();
    const products = (0, react_redux_1.useSelector)((state) => state.products.productList);
    const error = (0, react_redux_1.useSelector)((state) => state.products.error);
    const status = (0, react_redux_1.useSelector)((state) => state.products.status);
    const [productsToShow, setProductsToShow] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const controller = new AbortController();
        dispatch((0, productListSlice_1.fetchAllProducts)());
        return () => controller.abort();
    }, [dispatch]);
    (0, react_1.useEffect)(() => {
        if (category) {
            const filteredByCategory = products.filter((product) => product.sex === category.toLowerCase());
            setProductsToShow(filteredByCategory);
        }
        else
            setProductsToShow(products);
    }, [category, products]);
    if (error) {
        return (0, jsx_runtime_1.jsx)(Error_1.default, { error: error });
    }
    if (status === 'pending') {
        return ((0, jsx_runtime_1.jsx)("section", { className: ProductList_module_css_1.default.productList, children: (0, jsx_runtime_1.jsx)(LoadingSpinner_1.default, {}) }));
    }
    return ((0, jsx_runtime_1.jsx)("section", { className: ProductList_module_css_1.default.productList, children: (0, jsx_runtime_1.jsx)("ul", { children: productsToShow.map((product) => {
                return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(ProductCard_1.default, { ...product }) }, product.id));
            }) }) }));
};
exports.default = ProductList;
//# sourceMappingURL=ProductList.js.map