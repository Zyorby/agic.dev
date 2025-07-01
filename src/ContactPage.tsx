import NavBar from './NavBar';
import styles from './contactpage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.content}>
        <h1>Contact</h1>
        <p>Email: <a href="mailto:almedinagic@outlook.com">almedinagic@outlook.com</a></p>
        <p>
          <a href="https://www.linkedin.com/in/almedin-agic-8ab820288/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
