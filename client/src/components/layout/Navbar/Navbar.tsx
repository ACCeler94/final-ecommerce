import { Link } from 'react-router-dom';
import Container from '../../common/Container/Container';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import CartCounter from '../../features/CartCounter/CartCounter';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navbarContentWrapper}>
          <div className={styles.logo}>
            <Link to="/">Sartorial Selections </Link>
          </div>
          <div className={styles.navLinksWrapper}>
            <Link to={'/category/female'} className={styles.navLink}>
              Female
            </Link>
            <Link to={'/category/male'} className={styles.navLink}>
              Male
            </Link>
            <Link to={'/cart'} className={styles.cartIcon}>
              <FontAwesomeIcon icon={faCartShopping} />
              <CartCounter />
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
