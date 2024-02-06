type UserData = {
  email: string;
  password: string;
  confirmPassword: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const UserForm = ({
  email,
  password,
  confirmPassword,
  updateFields,
}: UserFormProps) => {
  return (
    <>
      <label>Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
      <label>Confirm Password</label>
      <input
        required
        type="password"
        value={confirmPassword}
        onChange={(e) => updateFields({ confirmPassword: e.target.value })}
      />
    </>
  );
};

export default UserForm;
