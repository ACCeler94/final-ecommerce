import { SerializedError } from '@reduxjs/toolkit';
import styles from './Error.module.css';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

interface ErrorProps {
  error: SerializedError;
}

const ErrorPage = ({ error }: ErrorProps) => {
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate('/');
  };

  return (
    <div className={styles.errorWrapper}>
      <h2>Error</h2>
      <p>{error.message}</p>
      <Button buttonText="Home" buttonHandler={buttonHandler} />
    </div>
  );
};

export default ErrorPage;
