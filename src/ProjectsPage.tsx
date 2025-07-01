import NavBar from './NavBar';
import styles from './projectspage.module.css';

const ProjectsPage = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.content}>
        <h1>Projects</h1>

        <div className={styles.projectGrid}>
          <a 
            href="https://github.com/Zyorby/Pass-Manage" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.projectCard}
          >
            <img 
              src="/passmanage.png" 
              alt="Pass-Manage Repo" 
              className={styles.projectImage}
            />
            <h2>Password Manager</h2>
          </a>

          <a 
            href="https://github.com/Zyorby/Cleaner-V3" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.projectCard}
          >
            <img 
              src="/cleaner.png" 
              alt="Zyorby Cleaner Repo" 
              className={styles.projectImage}
            />
            <h2>Zyorby Cleaner</h2>
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectsPage;
