"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const client_1 = require("react-dom/client");
const App_1 = require("./App");
const react_router_dom_1 = require("react-router-dom");
require("normalize.css");
require("./styles/global.css");
require("./styles/variables.css");
const store_1 = require("./store/store");
const react_redux_1 = require("react-redux");
client_1.default.createRoot(document.getElementById('root')).render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(react_redux_1.Provider, { store: store_1.default, children: (0, jsx_runtime_1.jsx)(App_1.default, {}) }) }) }));
//# sourceMappingURL=main.js.map