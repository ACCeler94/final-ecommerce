"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const BackButton_1 = require("../../common/BackButton/BackButton");
const Container_1 = require("../../common/Container/Container");
const SignIn_1 = require("../../features/SignIn/components/SignIn/SignIn");
const SignInPage = () => {
    return ((0, jsx_runtime_1.jsx)("main", { className: "sign-in", children: (0, jsx_runtime_1.jsxs)(Container_1.default, { children: [(0, jsx_runtime_1.jsx)(BackButton_1.default, {}), (0, jsx_runtime_1.jsx)(SignIn_1.default, {})] }) }));
};
exports.default = SignInPage;
//# sourceMappingURL=SignInPage.js.map