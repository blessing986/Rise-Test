import styles from "./Diversified.module.css";
import arrowRight from "../../assets/arrowRight.png";
import diversified from "../../assets/diversified.png";
import diversifiedSmall from "../../assets/diversifiedSmall.png";

const Diversified = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.superContainer}>
          <div className={styles.container}>
            <h1 className={styles.heading}>
              Easy. Diversified. Managed by{" "}
              <span className={styles.experts}>Experts.</span>
            </h1>

            <p className={styles.paragraph}>
              Explore an array of investment options that offer superior
              returns, curated and managed by experts, all from the comfort of
              your device. Simple, right?
            </p>

            <button className={styles.ctaButton} aria-label="Start Investing">
              <span>Start Investing</span>
              <img
                src={arrowRight}
                alt=""
                aria-hidden="true"
                className={styles.icon}
              />
            </button>
          </div>

          <div className={styles.imageSmall}>
            <img src={diversifiedSmall} alt="A mobile device" />
          </div>

          <div className={styles.imageLarge}>
            <img src={diversified} alt="A mobile device" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Diversified;
