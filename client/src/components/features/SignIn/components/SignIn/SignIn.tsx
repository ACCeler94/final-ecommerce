import { useEffect, useState } from 'react';
import styles from './SignIn.module.css';
import Button from '../../../../common/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../../../store/store';
import { fetchLogIn } from '../../signInSlice';
import { useSelector } from 'react-redux';

const SignIn = () => {
  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const dispatch = useAppDispatch();
  const error = useSelector((state: RootState) => state.signIn.error);

  const navigate = useNavigate();
  const userId = useSelector((state: RootState) => state.signIn.userId);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userLogin && userPassword) {
      dispatch(
        fetchLogIn({ email: userLogin.toLowerCase(), password: userPassword }),
      );
    } else {
      alert('Please fill all required fields!');
    }
  };

  useEffect(() => {
    if (userId) {
      navigate('/account/my-account/orders');
    }
  }, [userId, navigate]);

  return (
    <section>
      <div className={styles.formWrapper}>
        <h1>Sign In</h1>
        <form className={styles.signInForm} onSubmit={submitHandler}>
          <label htmlFor="login">Login</label>
          <input
            type="email"
            id="login"
            name="login"
            value={userLogin}
            onChange={(e) => setUserLogin(e.target.value)}
            required
            className="user-input"
            autoComplete="username"
          />
          {error && error.statusCode === 401 ? (
            <span className={styles.errorText}>Invalid login or password!</span>
          ) : null}
          {error && error.statusCode !== 401 ? (
            <span className={styles.errorText}>
              Something went wrong. Please try again...
            </span>
          ) : null}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
            className="user-input"
            autoComplete="current-password"
          />
          <Button buttonText="Sign In" />
        </form>
        <p>
          No account? <Link to="/account/register">Register</Link>
        </p>
      </div>
    </section>
  );
};

export default SignIn;
