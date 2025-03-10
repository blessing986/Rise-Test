import styles from "./Numbers.module.css";
import country from "../../assets/country.png";

const Numbers = () => {
  return (
    <div className={styles.numbersContainer}>
      <h1 className={styles.title}>
        See our <span className={styles.highlight}>numbers</span>
      </h1>

      <div className={styles.gridContainer}>
        <div className={styles.item}>
          <h1 className={styles.number}>300k +</h1>
          <span className={styles.subtitle}>Users</span>
        </div>

        <div className={styles.item}>
          <h1 className={styles.number}>$42m +</h1>
          <span className={styles.subtitle}>Paid out to users</span>
        </div>

        <div className={`${styles.item} ${styles.lastItem}`}>
          <div className={styles.imageContainer}>
            <h1 className={styles.number}>5</h1>
            <img src={country} alt="country" className={styles.image} />
          </div>
          <span className={styles.subtitle}>Countries</span>
        </div>
      </div>
    </div>
  );
};

export default Numbers;

