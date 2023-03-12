import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav>
      <Container>
        <div className={styles.nav}>
          <div className={styles.icon}>
            <a href='/'>
              <i className='fa fa-tasks'></i>
            </a>
          </div>
          <div>
            <a href='/' className={styles.link}>
              Home
            </a>
            <a href='/favorite' className={styles.link}>
              Favorite
            </a>
            <a href='/about' className={styles.link}>
              About
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
