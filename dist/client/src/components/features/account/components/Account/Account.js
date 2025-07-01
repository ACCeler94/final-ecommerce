"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUserData = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const store_1 = require("../../../../../store/store");
const LoadingSpinner_1 = require("../../../../common/LoadingSpinner/LoadingSpinner");
const LogOutButton_1 = require("../../../../common/LogOutButton/LogOutButton");
const productListSlice_1 = require("../../../ProductList/productListSlice");
const AccountSlice_1 = require("../../AccountSlice");
const Account_module_css_1 = require("./Account.module.css");
const Account = () => {
    const status = (0, react_redux_1.useSelector)((state) => state.account.status);
    const error = (0, react_redux_1.useSelector)((state) => state.account.error);
    const dispatch = (0, store_1.useAppDispatch)();
    const [userData, setUserData] = (0, react_1.useState)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        const controller = new AbortController();
        dispatch((0, AccountSlice_1.fetchAccountData)())
            .unwrap()
            .then((data) => setUserData(data));
        return () => controller.abort();
    }, [dispatch]);
    (0, react_1.useEffect)(() => {
        if (status === productListSlice_1.Statuses.Failed || error) {
            navigate('/account/sign-in');
        }
    }, [status, error, navigate]);
    if (status === productListSlice_1.Statuses.Pending)
        return ((0, jsx_runtime_1.jsx)("div", { className: Account_module_css_1.default.accountInfo, children: (0, jsx_runtime_1.jsx)(LoadingSpinner_1.default, {}) }));
    if (status === productListSlice_1.Statuses.Success && userData) {
        return ((0, jsx_runtime_1.jsxs)("div", { className: Account_module_css_1.default.accountInfo, children: [(0, jsx_runtime_1.jsxs)("div", { className: Account_module_css_1.default.welcomeAndLogout, children: [(0, jsx_runtime_1.jsxs)("h1", { children: [(0, jsx_runtime_1.jsx)("span", { className: Account_module_css_1.default.welcomeMsg, children: "Welcome" }), " ", userData.name] }), (0, jsx_runtime_1.jsx)(LogOutButton_1.default, {})] }), (0, jsx_runtime_1.jsxs)("div", { className: Account_module_css_1.default.navAndOutlet, children: [(0, jsx_runtime_1.jsxs)("div", { className: Account_module_css_1.default.accountNav, children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { to: "orders", className: ({ isActive }) => (isActive ? Account_module_css_1.default.active : ''), children: "Orders" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { to: "account-info", className: ({ isActive }) => (isActive ? Account_module_css_1.default.active : ''), children: "Account Info" })] }), (0, jsx_runtime_1.jsx)("div", { className: Account_module_css_1.default.outletWrapper, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, { context: userData }) })] })] }));
    }
};
exports.default = Account;
function useUserData() {
    return (0, react_router_dom_1.useOutletContext)();
}
exports.useUserData = useUserData;
//# sourceMappingURL=Account.js.map