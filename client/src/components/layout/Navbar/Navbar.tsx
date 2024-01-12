import { Link } from 'react-router-dom';
import Container from '../../common/Container';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Container>
        <div className={styles.navbarContentWrapper}>
          <div className={styles.logo}>
            <Link to="/">Sartorial Selections </Link>
          </div>
          <div className={styles.navLinksWrapper}>
            <Link to={'/female'} className={styles.navLink}>
              Female
            </Link>
            <Link to={'/male'} className={styles.navLink}>
              Male
            </Link>
            <Link to={'/cart'} className={styles.cartIcon}>
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
