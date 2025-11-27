import NavBar from "./NavBar";
import styles from "./homelabpage.module.css";
import Footer from "./Footer";

const HomeLab = () => {
  return (
    <div className={styles.container}>
      <NavBar />

      <main className={styles.main}>
        <section className={styles.hero}>
          {/* Video */}
          <div className={styles.videoWrapper}>
            <video autoPlay muted loop playsInline>
              <source src="/Render.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Cards */}
          <div className={styles.cards}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Specs</h2>
              <ul className={styles.cardList}>
                <li>Nzxt h500 - temp until i go rack mount</li>
                <li>Ryzen 7700x, 32 GB DDR5</li>
                <li>12 TB usable NAS storage</li>
                <li>1 TB NVMe cache drives</li>
                <li>10 GbE ready networking</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Services & Setup</h2>
              <ul className={styles.cardList}>
                <li>Proxmox VE</li>
                <li>NAS / media server</li>
                <li>Docker stack</li>
                <li>Pi-hole / DNS filtering</li>
                <li>Reverse proxy</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomeLab;
