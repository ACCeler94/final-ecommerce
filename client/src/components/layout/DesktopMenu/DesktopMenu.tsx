import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { RootState } from '../../../store/store';
import Button from '../../common/Button/Button';
import CartCounter from '../../features/Cart/components/CartCounter/CartCounter';
import styles from './DesktopMenu.module.css';

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
