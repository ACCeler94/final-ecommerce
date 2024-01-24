import { ProductListState } from '../components/features/ProductList/productListSlice';
import { CartState } from '../components/features/Cart/cartSlice';
export type RootState = {
    products: ProductListState;
    cart: CartState;
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
        }[];
        status: import("../components/features/ProductList/productListSlice").Statuses;
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
            };
            comment: string;
        }[];
        totalPrice: number;
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
            }[];
            status: import("../components/features/ProductList/productListSlice").Statuses;
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
                };
                comment: string;
            }[];
            totalPrice: number;
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
        }[];
        status: import("../components/features/ProductList/productListSlice").Statuses;
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
            };
            comment: string;
        }[];
        totalPrice: number;
    };
}, undefined, import("redux").UnknownAction> & import("redux").Dispatch<import("redux").UnknownAction>;
export default store;
