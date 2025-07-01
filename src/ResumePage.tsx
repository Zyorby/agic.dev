import NavBar from './NavBar';
import styles from './resumepage.module.css';
import Footer from './Footer';

const ResumePage = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.resumeContainer}>
        <iframe
          src="/Resume.pdf"
          title="Resume"
          className={styles.resumeFrame}
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default ResumePage;
