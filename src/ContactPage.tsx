import ReCAPTCHA from 'react-google-recaptcha';
import { useRef, useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import styles from './contactpage.module.css';

const ContactPage = () => {
  const recaptchaRef = useRef<any>(null); // FIXED: avoid type error for Vercel
  const [captchaValid, setCaptchaValid] = useState(false);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValid(!!value);
  };

  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.content}>
        <h1>Contact</h1>
        <div className={styles.grid}>
          {/* LinkedIn Box */}
          <div className={styles.cardlinkedin}>
            <h2>Connect on LinkedIn</h2>
            <a 
              href="https://www.linkedin.com/in/almedinagic/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkedinLink}
            >
              View my LinkedIn profile →
            </a>
          </div>

          {/* Contact Form */}
          <div className={styles.card}>
            <h2>Send a Message</h2>
            <form
              action="mailto:almedinagic@outlook.com"
              method="POST"
              encType="text/plain"
              onSubmit={(e) => {
                if (!captchaValid) {
                  e.preventDefault();
                  alert('Please complete the CAPTCHA before submitting.');
                }
              }}
              className={styles.form}
            >
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" rows={5} required></textarea>

              <div className={styles.recaptcha}>
                <ReCAPTCHA
                  sitekey="6LdknnwrAAAAAGa0jtEC_nQaiUlKsGAEH3Q4blRb"
                  onChange={handleCaptchaChange}
                  ref={recaptchaRef}
                />
              </div>

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;