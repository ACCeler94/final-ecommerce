import { PayloadAction, SerializedError } from '@reduxjs/toolkit';
import Product from '../../../types/Product';
export declare enum Statuses {
    Idle = "idle",
    Pending = "pending",
    Success = "success",
    Failed = "failed"
}
type State = {
    productList: Product[];
    status: Statuses;
    error: null | SerializedError;
    currentProduct: null | Product;
};
export type ProductListState = State;
export declare const fetchAllProducts: import("@reduxjs/toolkit").AsyncThunk<any, void, import("@reduxjs/toolkit/dist/createAsyncThunk").AsyncThunkConfig>;
export declare const fetchById: import("@reduxjs/toolkit").AsyncThunk<any, string, import("@reduxjs/toolkit/dist/createAsyncThunk").AsyncThunkConfig>;
export declare const productListSlice: import("@reduxjs/toolkit").Slice<{
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
    status: Statuses;
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
}, {
    resetCurrentProduct: (state: {
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
        status: Statuses;
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
    }) => void;
    setCurrentProduct: (state: {
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
        status: Statuses;
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
    }, action: PayloadAction<Product>) => void;
}, "products", "products", import("@reduxjs/toolkit").SliceSelectors<{
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
    status: Statuses;
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
}>>;
export declare const resetCurrentProduct: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"products/resetCurrentProduct">, setCurrentProduct: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<Product, "products/setCurrentProduct">;
declare const _default: import("redux").Reducer<{
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
    status: Statuses;
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
}>;
export default _default;
