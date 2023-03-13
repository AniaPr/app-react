import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Container>
        <div className={styles.nav}>
          <div className={styles.icon}>
            <Link to='/'>
              <i className='fa fa-tasks'></i>
            </Link>
          </div>
          <ul>
            <li className={styles.link}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to='/'>
                Home
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to='/favorite'>
                Favorite
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : undefined
                }
                to='/about'>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
