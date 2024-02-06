import { useState } from 'react';
import styles from './SignIn.module.css';
import Button from '../../common/Button/Button';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <section>
      <div className={styles.formWrapper}>
        <h1>Sign In</h1>
        <form className={styles.signInForm}>
          <label htmlFor="login">Login</label>
          <input
            type="text"
            id="login"
            name="login"
            value={userLogin}
            onChange={(e) => setUserLogin(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
          <Button buttonHandler={() => {}} buttonText="Sign In" />
        </form>
        <p>
          No account? <Link to="/account/register">Register</Link>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
