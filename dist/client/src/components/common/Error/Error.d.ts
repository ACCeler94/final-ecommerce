import { SerializedError } from '@reduxjs/toolkit';
interface ErrorProps {
    error: SerializedError;
}
declare const Error: ({ error }: ErrorProps) => import("react/jsx-runtime").JSX.Element;
export default Error;
