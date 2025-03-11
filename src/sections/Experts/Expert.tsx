import styles from "./Expert.module.css";
import ExpertsItem from "../../components/ExpertsItem/ExpertsItem";
import ceo from "../../assets/ceo.png";
import financeLead from "../../assets/financeLead.png";
import finance from "../../assets/finance.png";

const Expert = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Meet the <span className={styles.highlight}>Experts</span>
      </h1>

      <div className={styles.gridContainer}>
        <ExpertsItem img={ceo} name="Eke Urum" role="Founder & CEO" />
        <ExpertsItem
          img={financeLead}
          name="Sheriff Adeoti"
          role="Finance Lead"
        />
        <ExpertsItem img={finance} name="Damilare Akinlotan" role="Finance" />
      </div>
    </div>
  );
};

export default Expert;
