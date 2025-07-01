import LoginData from '../../../types/LoginData';
import { Statuses } from '../ProductList/productListSlice';
type State = {
    error: any;
    userId: string;
    status: Statuses;
};
export type SignInState = State;
export declare const fetchLogIn: import("@reduxjs/toolkit").AsyncThunk<any, LoginData, import("@reduxjs/toolkit/dist/createAsyncThunk").AsyncThunkConfig>;
export declare const fetchLogJWT: import("@reduxjs/toolkit").AsyncThunk<any, void, import("@reduxjs/toolkit/dist/createAsyncThunk").AsyncThunkConfig>;
declare const _default: import("redux").Reducer<{
    error: any;
    userId: string;
    status: Statuses;
}>;
export default _default;
export declare const resetState: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"signIn/resetState">;
