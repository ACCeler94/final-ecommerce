import { MoonLoader } from 'react-spinners';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={styles.spinnerWrapper}>
      <MoonLoader color="#212427" size={75} speedMultiplier={0.5} />
    </div>
  );
};

export default LoadingSpinner;
