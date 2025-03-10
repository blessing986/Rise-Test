import styles from "./Riser.module.css";
import sanni from "../../assets/sanni.png";
import layo from "../../assets/layo.png";
import henry from "../../assets/henry.png";

const Riser = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Meet Some <span className={styles.highlight}>Risers</span>
      </h1>

      <div className={styles.imageContainer}>
        <img src={sanni} alt="sanni" className={styles.image} />
        <img src={layo} alt="layo" className={styles.image} />
        <img src={henry} alt="henry" className={styles.image} />
      </div>
    </div>
  );
};

export default Riser;

