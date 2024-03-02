import { SerializedError } from '@reduxjs/toolkit';
import styles from './Error.module.css';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

interface ErrorProps {
  error: SerializedError;
}

const Error = ({ error }: ErrorProps) => {
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate('/');
  };

  return (
    <div className={styles.errorWrapper}>
      <h1>Error</h1>
      <h2>{error.message}</h2>
      <Button buttonText="Home" buttonHandler={buttonHandler} />
    </div>
  );
};

export default Error;
