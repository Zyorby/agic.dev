import NavBar from './NavBar';
import styles from './mainsite.module.css';

const MainSite = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.hero}>
        <h1 className={styles.name}>Almedin Agic</h1>
        <p className={styles.about}>
          I'm Almedin Agic, a cybersecurity student passionate about IT, security, and coding.
        </p>
      </div>
    </div>
  );
};

export default MainSite;
