import { Link } from 'react-router-dom';
import Container from '../../common/Container/Container';
import styles from './Navbar.module.css';
import DesktopMenu from '../DesktopMenu/DesktopMenu';
import MobileMenu from '../MobileMenu/MobileMenu';
import useWindowWidth from '../../../utils/useWindowWidth';

const Navbar = () => {
  const windowWidth = useWindowWidth();

  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navbarContentWrapper}>
          <div className={styles.logo}>
            <Link to="/">Sartorial Selections </Link>
          </div>
          {/* Conditional rendering, instead of queries, mitigates the issue when the scroll is disabled on the body while the mobile menu is opened. Otherwise, resizing the window would lock the scroll without any way to close the menu */}
          <div>{windowWidth <= 800 ? <MobileMenu /> : <DesktopMenu />}</div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
