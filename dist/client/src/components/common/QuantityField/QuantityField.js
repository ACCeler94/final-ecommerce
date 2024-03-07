"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const QuantityField_module_css_1 = require("./QuantityField.module.css");
const QuantityField = ({ productId, quantity, changeQuantity, }) => {
    const changeHandler = (value) => {
        if (value === '')
            changeQuantity('');
        else {
            const numValue = Number(value);
            if (numValue <= 0)
                changeQuantity(1);
            else if (numValue > 99)
                changeQuantity(99);
            else
                changeQuantity(numValue);
        }
    };
    const blurHandler = (value) => {
        if (value === '')
            changeQuantity(1);
    };
    const decreaseQuantity = () => {
        if (typeof quantity === 'number') {
            changeHandler(quantity - 1);
        }
    };
    const increaseQuantity = () => {
        if (typeof quantity === 'number') {
            changeHandler(quantity + 1);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: QuantityField_module_css_1.default.quantityWrapper, children: [(0, jsx_runtime_1.jsx)("button", { className: QuantityField_module_css_1.default.quantityButton, onClick: decreaseQuantity, tabIndex: 0, children: "-" }), (0, jsx_runtime_1.jsx)("input", { type: "number", id: `quantity-${productId}`, name: "product-quantity", min: "1", max: "99", value: quantity, onChange: (e) => changeHandler(e.target.value), onBlur: (e) => blurHandler(e.target.value), tabIndex: 0 }), (0, jsx_runtime_1.jsx)("button", { className: QuantityField_module_css_1.default.quantityButton, onClick: increaseQuantity, tabIndex: 0, children: "+" })] }));
};
exports.default = QuantityField;
//# sourceMappingURL=QuantityField.js.map