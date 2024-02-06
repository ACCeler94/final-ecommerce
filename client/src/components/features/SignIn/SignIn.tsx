import styles from './SignIn.module.css';

const SignIn = () => {
  return (
    <section>
      <form className={styles.signInForm}>
        <label htmlFor="login">Login</label>
        <input type="text" id="login" name="login" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </form>
    </section>
  );
};

export default SignIn;
