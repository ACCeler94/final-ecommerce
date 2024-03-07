"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const authApi_1 = require("../../../API/authApi");
const store_1 = require("../../../store/store");
const signInSlice_1 = require("../../features/SignIn/signInSlice");
const Button_1 = require("../Button/Button");
const LogOutButton = () => {
    const dispatch = (0, store_1.useAppDispatch)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const logOutHandler = async () => {
        try {
            const response = await authApi_1.default.logoutUser();
            if (response.status !== 200) {
                alert('Logout failed, please try again');
            }
            dispatch((0, signInSlice_1.resetState)());
            navigate('/');
        }
        catch (error) {
            alert('Logout failed, please try again');
            console.error('Failed to logout:', error);
        }
    };
    return (0, jsx_runtime_1.jsx)(Button_1.default, { buttonText: "Log Out", buttonHandler: logOutHandler });
};
exports.default = LogOutButton;
//# sourceMappingURL=LogOutButton.js.map