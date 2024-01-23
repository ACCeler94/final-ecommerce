import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Container from '../../common/Container/Container';
import styles from './NotFound.module.css';

const NotFound = () => {
  const navigate = useNavigate();

  const redirectHandler = () => {
    navigate('/');
  };

  return (
    <main>
      <Container>
        <div className={styles.notFoundWrapper}>
          <h1>404 Not found...</h1>
          <h2>Page you are trying to access does not exist.</h2>
          <Button buttonText="Home" buttonHandler={redirectHandler} />
        </div>
      </Container>
    </main>
  );
};

export default NotFound;
