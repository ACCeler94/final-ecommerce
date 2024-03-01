import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './DesktopMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartCounter from '../../features/cart/components/CartCounter/CartCounter';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

const DesktopMenu = () => {
  const navigate = useNavigate();
  const userId = useSelector((state: RootState) => state.signIn.userId);

  return (
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
          <FontAwesomeIcon icon={faUser} />
        </Link>
      ) : (
        <Button
          buttonText="Sign In"
          buttonHandler={() => navigate('/account/sign-in')}
        />
      )}
    </div>
  );
};

export default DesktopMenu;
