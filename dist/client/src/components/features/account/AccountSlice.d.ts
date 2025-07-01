import { SerializedError } from '@reduxjs/toolkit';
import { Statuses } from '../ProductList/productListSlice';
type State = {
    status: Statuses;
    error: null | SerializedError;
};
export type AccountState = State;
export declare const fetchAccountData: import("@reduxjs/toolkit").AsyncThunk<any, void, import("@reduxjs/toolkit/dist/createAsyncThunk").AsyncThunkConfig>;
export declare const resetState: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"account/resetState">;
declare const _default: import("redux").Reducer<{
    status: Statuses;
    error: {
        name?: string;
        message?: string;
        stack?: string;
        code?: string;
    };
}>;
export default _default;
