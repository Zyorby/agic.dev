import NavBar from './NavBar';
import styles from './mainsite.module.css';

const MainSite = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.hero}>
        <h1 className={styles.name}>Almedin Agic</h1>
        <p className={styles.about}>
          Cybersecurity student passionate about Information Technology and Security!
        </p>
        <p className={styles.currentWork}>
          Currently Working on:
          <p>Comptia A+</p>
        </p>
      </div>
    </div>
  );
};

export default MainSite;
