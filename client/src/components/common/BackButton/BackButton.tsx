import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './BackButton.module.css';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.backButton} onClick={() => navigate(-1)}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
};

export default BackButton;
