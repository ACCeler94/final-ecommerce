"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const SignIn_module_css_1 = require("./SignIn.module.css");
const Button_1 = require("../../../../common/Button/Button");
const react_router_dom_1 = require("react-router-dom");
const store_1 = require("../../../../../store/store");
const signInSlice_1 = require("../../signInSlice");
const react_redux_1 = require("react-redux");
const SignIn = () => {
    const [userLogin, setUserLogin] = (0, react_1.useState)('');
    const [userPassword, setUserPassword] = (0, react_1.useState)('');
    const dispatch = (0, store_1.useAppDispatch)();
    const error = (0, react_redux_1.useSelector)((state) => state.signIn.error);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const userId = (0, react_redux_1.useSelector)((state) => state.signIn.userId);
    const submitHandler = (e) => {
        e.preventDefault();
        if (userLogin && userPassword) {
            dispatch((0, signInSlice_1.fetchLogIn)({ email: userLogin.toLowerCase(), password: userPassword }));
        }
        else {
            alert('Please fill all required fields!');
        }
    };
    (0, react_1.useEffect)(() => {
        if (userId) {
            navigate('/account/my-account/orders');
        }
    }, [userId, navigate]);
    return ((0, jsx_runtime_1.jsx)("section", { children: (0, jsx_runtime_1.jsxs)("div", { className: SignIn_module_css_1.default.formWrapper, children: [(0, jsx_runtime_1.jsx)("h1", { children: "Sign In" }), (0, jsx_runtime_1.jsxs)("form", { className: SignIn_module_css_1.default.signInForm, onSubmit: submitHandler, children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "login", children: "Login" }), (0, jsx_runtime_1.jsx)("input", { type: "email", id: "login", name: "login", value: userLogin, onChange: (e) => setUserLogin(e.target.value), required: true, className: "user-input", autoComplete: "username" }), error && error.statusCode === 401 ? ((0, jsx_runtime_1.jsx)("span", { className: SignIn_module_css_1.default.errorText, children: "Invalid login or password!" })) : null, error && error.statusCode !== 401 ? ((0, jsx_runtime_1.jsx)("span", { className: SignIn_module_css_1.default.errorText, children: "Something went wrong. Please try again..." })) : null, (0, jsx_runtime_1.jsx)("label", { htmlFor: "password", children: "Password" }), (0, jsx_runtime_1.jsx)("input", { type: "password", id: "password", name: "password", value: userPassword, onChange: (e) => setUserPassword(e.target.value), required: true, className: "user-input", autoComplete: "current-password" }), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonText: "Sign In" })] }), (0, jsx_runtime_1.jsxs)("p", { children: ["No account? ", (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/account/register", children: "Register" })] })] }) }));
};
exports.default = SignIn;
//# sourceMappingURL=SignIn.js.map