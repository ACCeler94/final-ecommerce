import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Container from '../../common/Container/Container';
import styles from './RegisterSuccessPage.module.css';

const RegisterSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.registerSuccess}>
      <Container>
        <h1>You have been successfully registered!</h1>
        <Button buttonText="Login" buttonHandler={() => navigate('/login')} />
      </Container>
    </main>
  );
};

export default RegisterSuccessPage;
