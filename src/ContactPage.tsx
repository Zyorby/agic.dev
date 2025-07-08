import { useForm } from '@formspree/react';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import NavBar from './NavBar';
import Footer from './Footer';
import styles from './contactpage.module.css';

const ContactPage = () => {
  const recaptchaRef = useRef<any>(null);
  const [captchaValid, setCaptchaValid] = useState(false);
  const [state, handleSubmit] = useForm('mgvyjnjl');
  const [submitted, setSubmitted] = useState(false);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValid(!!value);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!captchaValid) {
      e.preventDefault();
      alert('Please complete the CAPTCHA before submitting.');
      return;
    }

    await handleSubmit(e);
    if (state.succeeded) {
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
    }
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
            {submitted ? (
              <p className={styles.successMessage}>
                Thanks for your message! I'll get back to you soon.
              </p>
            ) : (
              <form onSubmit={handleFormSubmit} className={styles.form}>
                <label htmlFor="name">Your Name</label>
                <input
                  className={styles.input}
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />

                <label htmlFor="email">Your Email</label>
                <input
                  className={styles.input}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                />

                <label htmlFor="message">Message</label>
                <textarea
                  className={styles.textarea}
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  required
                ></textarea>

                <div className={styles.recaptcha}>
                  <ReCAPTCHA
                    sitekey="6LdknnwrAAAAAGa0jtEC_nQaiUlKsGAEH3Q4blRb"
                    onChange={handleCaptchaChange}
                    ref={recaptchaRef}
                  />
                </div>

                <button
                  className={styles.button}
                  type="submit"
                  disabled={state.submitting}
                >
                  {state.submitting ? 'Sending...' : 'Send'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;