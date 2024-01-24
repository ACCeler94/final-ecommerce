"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const CartCounter_module_css_1 = require("./CartCounter.module.css");
const react_1 = require("react");
const CartCounter = () => {
    const cart = (0, react_redux_1.useSelector)((state) => state.cart.shoppingCart);
    const totalQuantity = (0, react_1.useMemo)(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.quantity;
        });
        return count;
    }, [cart]);
    const formatCartCount = () => {
        if (totalQuantity === 0) {
            return null;
        }
        else if (totalQuantity > 99) {
            return '99+';
        }
        else
            return totalQuantity;
    };
    return (totalQuantity > 0 && ((0, jsx_runtime_1.jsx)("span", { className: CartCounter_module_css_1.default.cartCounter, children: formatCartCount() })));
};
exports.default = CartCounter;
//# sourceMappingURL=CartCounter.js.map