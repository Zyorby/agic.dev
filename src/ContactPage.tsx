import NavBar from './NavBar';
import styles from './contactpage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.content}>
        <h1>Contact</h1>

        <div className={styles.contactGrid}>
          <div className={styles.linkedinBox}>
            <h2>Connect with me on LinkedIn</h2>
            <a 
              href="https://www.linkedin.com/in/almedin-agic-8ab820288/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinLink}
            >
              View my LinkedIn profile
            </a>
          </div>

          <div className={styles.formBox}>
            <h2>Send me an email</h2>
            <form action="mailto:almedinagic@outlook.com" method="POST" encType="text/plain">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" rows={5} required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default ContactPage;
