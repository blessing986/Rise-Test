import styles from "./Partners.module.css";
import partners from "../../assets/partners.png";

const Partners = () => {
  return (
    <div
      className={styles.container}
      role="region"
      aria-labelledby="partners-heading">
      <h2 id="partners-heading" className={styles.heading}>
        Investors and Partners
      </h2>
      <img src={partners} alt="Logos of our investors and partners" />
    </div>
  );
};

export default Partners;
