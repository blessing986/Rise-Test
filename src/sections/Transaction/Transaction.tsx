import styles from "./Transaction.module.css";
import arrowRightGreen from "../../assets/arrowRightGreen.png";
import transaction from "../../assets/transaction.png";
import card from "../../assets/card.png";

const Transaction = () => {
  return (
    <div className={styles.container}>
      {/* Left Section */}
      <div className={styles.leftSection}>
        <img src={transaction} alt="transaction" />
        <div className={styles.cardImage}>
          <img src={card} alt="card" />
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.rightSection}>
        <h1 className={styles.heading}>
          Make transactions online with{" "}
          <span className={styles.italicText}>ease</span>
        </h1>

        <p className={styles.paragraph}>
          With the Rise US virtual card, you can pay for your subscriptions,
          shop online and enjoy a monthly transaction limit of up to $10,000.
        </p>

        <div>
          <button className={styles.ctaButton}>
            <span>Request for your US virtual card</span>
            <img src={arrowRightGreen} alt="arrowRightGreen" className={styles.icon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transaction;

