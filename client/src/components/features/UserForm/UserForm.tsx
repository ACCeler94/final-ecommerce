import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './UserForm.module.css';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

type UserData = {
  email: string;
  password: string;
  repeatPassword: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const UserForm = ({
  email,
  password,
  repeatPassword,
  updateFields,
}: UserFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  return (
    <>
      <label htmlFor="email">Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
        id="email"
        name="email"
      />
      <label htmlFor="password">Password</label>
      <div className={styles.inputWithFaIcon}>
        <input
          required
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => updateFields({ password: e.target.value })}
          name="password"
          id="password"
          pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
          title="Must contain at least one uppercase and lowercase letter, and at least 6 or more characters"
        />
        <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye}
          className={styles.faEye}
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
      <span className={styles.info}>
        Min 6 letters, at least one uppercase and lowercase letter
      </span>
      <label htmlFor="confirm-password">Confirm Password</label>
      <div className={styles.inputWithFaIcon}>
        <input
          required
          type={showRepeatPassword ? 'text' : 'password'}
          value={repeatPassword}
          onChange={(e) => updateFields({ repeatPassword: e.target.value })}
          name="password"
          id="confirm-password"
          pattern={password}
          title="Passwords do not match"
        />
        <FontAwesomeIcon
          icon={showRepeatPassword ? faEyeSlash : faEye}
          className={styles.faEye}
          onClick={() => setShowRepeatPassword(!showRepeatPassword)}
        />
      </div>
    </>
  );
};

export default UserForm;
