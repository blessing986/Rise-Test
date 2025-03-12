import arrow from "../../assets/arrowRightGreen.png";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.newsletterBox}>
          <div className={styles.textContainer}>
            <h3 className={styles.heading}>Weekly newsletter</h3>
            <p className={styles.description}>
              Sign up for our weekly newsletter for fun, finance and more
            </p>
          </div>

          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="First name"
                className={`${styles.inputField} ${styles.firstName}`}
              />
              <input
                type="text"
                placeholder="Last name"
                className={`${styles.inputField} ${styles.lastName}`}
              />
            </div>

            <div className={styles.emailContainer}>
              <input
                type="email"
                placeholder="Email address"
                className={styles.inputField}
              />
              <div className={styles.submitButton}>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
