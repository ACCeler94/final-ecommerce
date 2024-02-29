import { Link, NavLink, useNavigate } from 'react-router-dom';
import Container from '../../common/Container/Container';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import CartCounter from '../../features/cart/components/CartCounter/CartCounter';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import Button from '../../common/Button/Button';

const Navbar = () => {
  const userId = useSelector((state: RootState) => state.signIn.userId);
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navbarContentWrapper}>
          <div className={styles.logo}>
            <Link to="/">Sartorial Selections </Link>
          </div>
          <div className={styles.navLinksWrapper}>
            <NavLink
              to="/category/female"
              className={({ isActive }) =>
                isActive ? styles.active + ' ' + styles.navLink : styles.navLink
              }
            >
              Female
            </NavLink>
            <NavLink
              to="/category/male"
              className={({ isActive }) =>
                isActive ? styles.active + ' ' + styles.navLink : styles.navLink
              }
            >
              Male
            </NavLink>
            <Link to="/cart" className={styles.icon}>
              <FontAwesomeIcon icon={faCartShopping} />
              <CartCounter />
            </Link>
            {userId ? (
              <Link to="/account/my-account" className={styles.icon}>
                <FontAwesomeIcon icon={faUser} />{' '}
              </Link>
            ) : (
              <Button
                buttonText="Sign In"
                buttonHandler={() => navigate('/account/sign-in')}
              />
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
