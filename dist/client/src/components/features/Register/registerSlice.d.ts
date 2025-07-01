import { SerializedError } from '@reduxjs/toolkit';
import User from '../../../types/User';
import { Statuses } from '../ProductList/productListSlice';
type State = {
    status: Statuses;
    error: null | SerializedError;
};
export type RegisterState = State;
export declare const register: import("@reduxjs/toolkit").AsyncThunk<any, User, import("@reduxjs/toolkit/dist/createAsyncThunk").AsyncThunkConfig>;
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
export declare const resetState: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"register/resetState">;
