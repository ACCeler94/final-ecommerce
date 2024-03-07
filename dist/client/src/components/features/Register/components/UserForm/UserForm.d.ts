type UserData = {
    email: string;
    password: string;
    repeatPassword: string;
};
type UserFormProps = UserData & {
    updateFields: (fields: Partial<UserData>) => void;
};
declare const UserForm: ({ email, password, repeatPassword, updateFields, }: UserFormProps) => import("react/jsx-runtime").JSX.Element;
export default UserForm;
