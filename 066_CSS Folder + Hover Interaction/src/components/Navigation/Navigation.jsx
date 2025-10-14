import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <span>✨ AwesomeApp</span>
      </div>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>Home</a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>Features</a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>About</a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;