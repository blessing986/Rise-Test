import styles from "./Partners.module.css";
import partners from "../../assets/partners.png";

const Partners = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Investors and Partners</h3>
      <img src={partners} alt="partners" />
    </div>
  );
};

export default Partners;

