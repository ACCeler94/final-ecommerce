interface ButtonProps {
    buttonHandler?: () => void;
    buttonText: string;
    type?: 'submit' | 'reset' | 'button';
}
declare const Button: ({ buttonHandler, buttonText, type, }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
