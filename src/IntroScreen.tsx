import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './terminal.module.css';

const IntroScreen = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const lines = [
    'agic@dev:~$ whoami',
    "I'm Almedin Agic, a cybersecurity student passionate about IT, security, and coding.",
    'agic@dev:~$ exit',
  ];

  useEffect(() => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      setIsMobile(true);
    }

    let charIndex = 0;
    let lineIndex = 0;
    let currentLine = lines[0];

    const typeInterval = setInterval(() => {
      if (charIndex < currentLine.length) {
        setTypedText(prev => prev + currentLine[charIndex]);
        charIndex++;
      } else {
        setTypedText(prev => prev + '\n');
        lineIndex++;
        if (lineIndex < lines.length) {
          currentLine = lines[lineIndex];
          charIndex = 0;
        } else {
          clearInterval(typeInterval);
          setShowPrompt(true);
        }
      }
    }, 15);

    return () => clearInterval(typeInterval);
  }, []);

  useEffect(() => {
    if (!showPrompt) return;

    const handleContinue = (e: KeyboardEvent | MouseEvent) => {
      if (
        (e instanceof KeyboardEvent && e.key === 'Enter') ||
        (e instanceof MouseEvent && isMobile)
      ) {
        navigate('/main');
      }
    };

    if (isMobile) {
      window.addEventListener('click', handleContinue);
    } else {
      window.addEventListener('keydown', handleContinue);
    }

    return () => {
      window.removeEventListener('click', handleContinue);
      window.removeEventListener('keydown', handleContinue);
    };
  }, [showPrompt, isMobile, navigate]);

  return (
    <main className={styles.main}>
      <pre>
        {typedText}
        {!showPrompt && <span className={styles.cursor}></span>}
      </pre>
      {showPrompt && (
        <div className={styles.prompt}>
          {isMobile ? 'Tap anywhere to continue...' : 'Press Enter to continue...'}
        </div>
      )}
    </main>
  );
};

export default IntroScreen;
