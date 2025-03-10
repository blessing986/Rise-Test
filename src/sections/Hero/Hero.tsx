import hero from "../../assets/hero.png";
import arrowRight from "../../assets/arrowRight.png";
import DownloadApp from "../../components/DownloadApp/DownloadApp";
import Partners from "../../components/Partners/Partners";
import arrow from "../../assets/arrow.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroTextContainer}>
        <div className={styles.heroText}>
          <button className={styles.heroButton}>
            Read our cost of living report 2024 <img src={arrow} alt="arrow" />
          </button>

          <div className={styles.heroSubContainer}>
            <h1 className={styles.heroTitle}>
              Dollar investments that help you{" "}
              <span className={styles.highlight}>grow.</span>
            </h1>

            <p className={styles.heroDescription}>
              Rise gives you access to a carefully selected portfolio of global
              investments, across US stocks, US real estate and fixed income
              assets.
            </p>

            <div className={styles.ctaContainer}>
              <button className={styles.ctaButton}>
                <span>Get Started</span>
                <img
                  src={arrowRight}
                  alt="arrowRight"
                  className={styles.icon}
                />
              </button>

              <DownloadApp />
            </div>
          </div>

          <div>
            <Partners />
          </div>
        </div>
      </div>

      <div className={styles.heroImage}>
        <img src={hero} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
