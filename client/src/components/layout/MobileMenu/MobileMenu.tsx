import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Hamburger from 'hamburger-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { RootState } from '../../../store/store';
import CartCounter from '../../features/Cart/components/CartCounter/CartCounter';
import styles from './MobileMenu.module.css';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userId = useSelector((state: RootState) => state.signIn.userId);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Clean up function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <button className={styles.hamburgerButton}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </button>
      {isOpen && (
        <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>
      )}
      <div
        className={`${styles.mobileMenu} ${isOpen ? ` ${styles.open}` : ''}`}
      >
        <div
          className={styles.navLinksWrapper}
          onClick={() => setIsOpen(false)}
        >
          <Link to="/cart" className={styles.iconWrapper}>
            <FontAwesomeIcon icon={faCartShopping} />
            <CartCounter />
            <span className={styles.iconText}>Cart</span>
          </Link>
          {userId ? (
            <Link to="/account/my-account" className={styles.iconWrapper}>
              <FontAwesomeIcon icon={faUser} />
              <span className={styles.iconText}>Account</span>
            </Link>
          ) : (
            <Link to="/account/sign-in" className={styles.navLink}>
              Sign In
            </Link>
          )}
          {/* stop propagation to disable click on Categories */}
          <p onClick={(e) => e.stopPropagation()}>Categories:</p>
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
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
