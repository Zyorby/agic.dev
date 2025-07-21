import NavBar from './NavBar';
import styles from './homelabpage.module.css';
import Footer from './Footer';

const HomeLab = () => {
  return (
    <div className={styles.container}>
      <NavBar />
        <h1>Soon</h1>
      <Footer />
    </div>
  );
};

export default HomeLab;
