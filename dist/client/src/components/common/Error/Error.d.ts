import { SerializedError } from '@reduxjs/toolkit';
interface ErrorProps {
    error: SerializedError;
}
declare const ErrorPage: ({ error }: ErrorProps) => import("react/jsx-runtime").JSX.Element;
export default ErrorPage;
