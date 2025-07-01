import NavBar from './NavBar';
import styles from './resumepage.module.css';

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
    </div>
  );
};

export default ResumePage;
