import styles from "./Riser.module.css";
import sanni from "../../assets/sanni.png";
import layo from "../../assets/layo.png";
import henry from "../../assets/henry.png";

const Riser = () => {
  return (
    <section className={styles.container} aria-labelledby="risers-heading">
      <h1 id="risers-heading" className={styles.heading}>
        Meet Some <span className={styles.highlight}>Risers</span>
      </h1>

      <div className={styles.imageContainer}>
        <img src={sanni} alt="Portrait of Sanni" className={styles.image} />
        <img src={layo} alt="Portrait of Layo" className={styles.image} />
        <img src={henry} alt="Portrait of Henry" className={styles.image} />
      </div>
    </section>
  );
};

export default Riser;
