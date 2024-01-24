import Product from '../../../types/Product';
export interface CartState {
    shoppingCart: {
        quantity: number;
        product: Product;
        comment: string;
    }[];
    totalPrice: number | null;
}
export declare const storeCart: import("@reduxjs/toolkit").AsyncThunk<void, void, import("@reduxjs/toolkit/dist/createAsyncThunk").AsyncThunkConfig>;
export declare const loadCart: import("@reduxjs/toolkit").AsyncThunk<{
    shoppingCart: any;
}, void, import("@reduxjs/toolkit/dist/createAsyncThunk").AsyncThunkConfig>;
export declare const resetCartInStorage: import("@reduxjs/toolkit").AsyncThunk<void, void, import("@reduxjs/toolkit/dist/createAsyncThunk").AsyncThunkConfig>;
export declare const cartSlice: import("@reduxjs/toolkit").Slice<{
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
    totalPrice: number | null;
}, {
    addToCart: (state: {
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
        totalPrice: number | null;
    }, action: {
        payload: any;
        type: string;
    }) => void;
    removeFromCart: (state: {
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
        totalPrice: number | null;
    }, action: {
        payload: any;
        type: string;
    }) => void;
    changeProductQuantity: (state: {
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
        totalPrice: number | null;
    }, action: {
        payload: any;
        type: string;
    }) => void;
    addProductComment: (state: {
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
        totalPrice: number | null;
    }, action: {
        payload: any;
        type: string;
    }) => void;
    recalculateTotalPrice: (state: {
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
        totalPrice: number | null;
    }) => void;
    resetCart: (state: {
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
        totalPrice: number | null;
    }) => void;
}, "cart", "cart", import("@reduxjs/toolkit").SliceSelectors<{
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
    totalPrice: number | null;
}>>;
export declare const addToCart: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "cart/addToCart">, removeFromCart: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "cart/removeFromCart">, changeProductQuantity: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "cart/changeProductQuantity">, addProductComment: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "cart/addProductComment">, recalculateTotalPrice: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"cart/recalculateTotalPrice">, resetCart: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"cart/resetCart">;
declare const _default: import("redux").Reducer<{
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
}>;
export default _default;
