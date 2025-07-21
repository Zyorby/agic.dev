import { Link } from 'react-router-dom';
import styles from './mainsite.module.css';

const NavBar = () => (
  <nav className={styles.nav}>
    <div className={styles.brand}>agic.dev</div>
    <input type="checkbox" id="menu-toggle" className={styles.menuToggle} />
    <label htmlFor="menu-toggle" className={styles.hamburger}>☰</label>
    <ul className={styles.links}>
      <li><Link to="/main">Home</Link></li>
      <li><Link to="/resume">Resume</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/homelab">Homelab</Link></li>
    </ul>
  </nav>
);

export default NavBar;
