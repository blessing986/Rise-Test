import styles from "./Expert.module.css";
import ExpertsItem from "../../components/ExpertsItem/ExpertsItem";
import ceo from "../../assets/ceo.png";
import financeLead from "../../assets/financeLead.png";
import finance from "../../assets/finance.png";

const Expert = () => {
  return (
    <section className={styles.container} aria-labelledby="experts-heading">
      <h2 id="experts-heading" className={styles.heading}>
        Meet the <span className={styles.highlight}>Experts</span>
      </h2>

      <div className={styles.gridContainer}>
        <ExpertsItem
          img={ceo}
          name="Eke Urum"
          role="Founder & CEO"
          alt="Portrait of Eke Urum, Founder & CEO"
        />
        <ExpertsItem
          img={financeLead}
          name="Sheriff Adeoti"
          role="Finance Lead"
          alt="Portrait of Sheriff Adeoti, Finance Lead"
        />
        <ExpertsItem
          img={finance}
          name="Damilare Akinlotan"
          role="Finance"
          alt="Portrait of Damilare Akinlotan, Finance team member"
        />
      </div>
    </section>
  );
};

export default Expert;
