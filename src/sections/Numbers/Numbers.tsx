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
          <h2 className={styles.number}>300k +</h2>
          <p className={styles.subtitle}>Users</p>
        </div>

        <div className={styles.item}>
          <h2 className={styles.number}>$42m +</h2>
          <p className={styles.subtitle}>Paid out to users</p>
        </div>

        <div className={`${styles.item} ${styles.lastItem}`}>
          <div className={styles.imageContainer}>
            <h2 className={styles.number}>5</h2>
            <img
              src={country}
              alt="Map showing supported countries"
              className={styles.image}
            />
          </div>
          <p className={styles.subtitle}>Countries</p>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
