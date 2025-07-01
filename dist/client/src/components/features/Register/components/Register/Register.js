"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const store_1 = require("../../../../../store/store");
const useMultistepForm_1 = require("../../../../../utils/useMultistepForm");
const Button_1 = require("../../../../common/Button/Button");
const Error_1 = require("../../../../common/Error/Error");
const RegisterSuccessPage_1 = require("../../../../pages/RegisterSuccessPage/RegisterSuccessPage");
const productListSlice_1 = require("../../../ProductList/productListSlice");
const registerSlice_1 = require("../../registerSlice");
const AddressForm_1 = require("../AddressForm/AddressForm");
const UserForm_1 = require("../UserForm/UserForm");
const Register_module_css_1 = require("./Register.module.css");
const INITIAL_DATA = {
    name: '',
    street: '',
    city: '',
    zip: '',
    email: '',
    password: '',
    repeatPassword: '',
};
function Register() {
    const [data, setData] = (0, react_1.useState)(INITIAL_DATA);
    const [isPassValid, setIsPassValid] = (0, react_1.useState)(true);
    const dispatch = (0, store_1.useAppDispatch)();
    const status = (0, react_redux_1.useSelector)((state) => state.register.status);
    const error = (0, react_redux_1.useSelector)((state) => state.register.error);
    const validatePassword = (0, react_1.useCallback)(() => {
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (data.password.match(passRegex) && data.password === data.repeatPassword)
            return true;
        else
            return false;
    }, [data.password, data.repeatPassword]);
    (0, react_1.useEffect)(() => {
        dispatch((0, registerSlice_1.resetState)());
    }, [dispatch]);
    (0, react_1.useEffect)(() => {
        setIsPassValid(validatePassword());
    }, [validatePassword]);
    const updateFields = (fields) => {
        setData((prev) => {
            return { ...prev, ...fields };
        });
    };
    const { step, isFirstStep, isLastStep, back, next } = (0, useMultistepForm_1.useMultistepForm)([
        (0, jsx_runtime_1.jsx)(UserForm_1.default, { ...data, updateFields: updateFields }),
        (0, jsx_runtime_1.jsx)(AddressForm_1.default, { ...data, updateFields: updateFields }),
    ]);
    const onSubmit = (e) => {
        e.preventDefault();
        if (!validatePassword())
            return;
        if (!isLastStep)
            return next();
        if (data.name &&
            data.street &&
            data.city &&
            data.zip &&
            data.email &&
            data.password &&
            data.repeatPassword) {
            data.email = data.email.toLowerCase();
            dispatch((0, registerSlice_1.register)(data));
        }
        else {
            alert('Please fill all required fields!');
        }
    };
    if (error)
        return (0, jsx_runtime_1.jsx)(Error_1.default, { error: error });
    if (status === productListSlice_1.Statuses.Success)
        return (0, jsx_runtime_1.jsx)(RegisterSuccessPage_1.default, {});
    return ((0, jsx_runtime_1.jsxs)("div", { className: Register_module_css_1.default.formWrapper, children: [(0, jsx_runtime_1.jsx)("h1", { children: "Register" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: onSubmit, className: Register_module_css_1.default.registerForm, children: [step, !isPassValid && ((0, jsx_runtime_1.jsx)("span", { className: Register_module_css_1.default.dangerText, children: "Passwords do not match or have invalid format!" })), (0, jsx_runtime_1.jsxs)("div", { className: Register_module_css_1.default.buttonsWrapper, children: [!isFirstStep && ((0, jsx_runtime_1.jsx)("div", { className: Register_module_css_1.default.backButtonWrapper, children: (0, jsx_runtime_1.jsx)(Button_1.default, { type: "button", buttonHandler: back, buttonText: "Back" }) })), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonText: isLastStep ? 'Finish' : 'Next' })] })] })] }));
}
exports.default = Register;
//# sourceMappingURL=Register.js.map