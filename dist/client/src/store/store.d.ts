import { ProductListState } from '../components/features/productList/productListSlice';
import { CartState } from '../components/features/cart/cartSlice';
import { RegisterState } from '../components/features/Register/registerSlice';
import { SignInState } from '../components/features/SignIn/signInSlice';
import { AccountState } from '../components/features/account/AccountSlice';
export type RootState = {
    products: ProductListState;
    cart: CartState;
    register: RegisterState;
    signIn: SignInState;
    account: AccountState;
};
declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    products: {
        productList: {
            id: string;
            brand: string;
            name: string;
            sex: string;
            price: number;
            photo: string;
            description: string;
            sizes: string;
        }[];
        status: import("../components/features/productList/productListSlice").Statuses;
        error: {
            name?: string;
            message?: string;
            stack?: string;
            code?: string;
        };
        currentProduct: {
            id: string;
            brand: string;
            name: string;
            sex: string;
            price: number;
            photo: string;
            description: string;
            sizes: string;
        };
    };
    cart: {
        shoppingCart: {
            quantity: number;
            product: {
                id: string;
                brand: string;
                name: string;
                sex: string;
                price: number;
                photo: string;
                description: string;
                sizes: string;
            };
            comment: string;
            size: string;
            cartItemId: string;
        }[];
        totalPrice: number;
    };
    register: {
        status: import("../components/features/productList/productListSlice").Statuses;
        error: {
            name?: string;
            message?: string;
            stack?: string;
            code?: string;
        };
    };
    signIn: {
        error: any;
        userId: string;
        status: import("../components/features/productList/productListSlice").Statuses;
    };
    account: {
        status: import("../components/features/productList/productListSlice").Statuses;
        error: {
            name?: string;
            message?: string;
            stack?: string;
            code?: string;
        };
    };
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        products: {
            productList: {
                id: string;
                brand: string;
                name: string;
                sex: string;
                price: number;
                photo: string;
                description: string;
                sizes: string;
            }[];
            status: import("../components/features/productList/productListSlice").Statuses;
            error: {
                name?: string;
                message?: string;
                stack?: string;
                code?: string;
            };
            currentProduct: {
                id: string;
                brand: string;
                name: string;
                sex: string;
                price: number;
                photo: string;
                description: string;
                sizes: string;
            };
        };
        cart: {
            shoppingCart: {
                quantity: number;
                product: {
                    id: string;
                    brand: string;
                    name: string;
                    sex: string;
                    price: number;
                    photo: string;
                    description: string;
                    sizes: string;
                };
                comment: string;
                size: string;
                cartItemId: string;
            }[];
            totalPrice: number;
        };
        register: {
            status: import("../components/features/productList/productListSlice").Statuses;
            error: {
                name?: string;
                message?: string;
                stack?: string;
                code?: string;
            };
        };
        signIn: {
            error: any;
            userId: string;
            status: import("../components/features/productList/productListSlice").Statuses;
        };
        account: {
            status: import("../components/features/productList/productListSlice").Statuses;
            error: {
                name?: string;
                message?: string;
                stack?: string;
                code?: string;
            };
        };
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type AppDispatch = typeof store.dispatch;
export declare const useAppDispatch: () => import("redux-thunk").ThunkDispatch<{
    products: {
        productList: {
            id: string;
            brand: string;
            name: string;
            sex: string;
            price: number;
            photo: string;
            description: string;
            sizes: string;
        }[];
        status: import("../components/features/productList/productListSlice").Statuses;
        error: {
            name?: string;
            message?: string;
            stack?: string;
            code?: string;
        };
        currentProduct: {
            id: string;
            brand: string;
            name: string;
            sex: string;
            price: number;
            photo: string;
            description: string;
            sizes: string;
        };
    };
    cart: {
        shoppingCart: {
            quantity: number;
            product: {
                id: string;
                brand: string;
                name: string;
                sex: string;
                price: number;
                photo: string;
                description: string;
                sizes: string;
            };
            comment: string;
            size: string;
            cartItemId: string;
        }[];
        totalPrice: number;
    };
    register: {
        status: import("../components/features/productList/productListSlice").Statuses;
        error: {
            name?: string;
            message?: string;
            stack?: string;
            code?: string;
        };
    };
    signIn: {
        error: any;
        userId: string;
        status: import("../components/features/productList/productListSlice").Statuses;
    };
    account: {
        status: import("../components/features/productList/productListSlice").Statuses;
        error: {
            name?: string;
            message?: string;
            stack?: string;
            code?: string;
        };
    };
}, undefined, import("redux").UnknownAction> & import("redux").Dispatch<import("redux").UnknownAction>;
export default store;
