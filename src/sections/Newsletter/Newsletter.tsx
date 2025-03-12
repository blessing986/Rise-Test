import arrow from "../../assets/arrowRightGreen.png";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

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
              <label htmlFor="firstName" className={styles.srOnly}>
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="First name"
                className={`${styles.inputField} ${styles.firstName}`}
                aria-label="First name"
              />
              <label htmlFor="lastName" className={styles.srOnly}>
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Last name"
                className={`${styles.inputField} ${styles.lastName}`}
                aria-label="Last name"
              />
            </div>

            <div className={styles.emailContainer}>
              <label htmlFor="email" className={styles.srOnly}>
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email address"
                className={styles.inputField}
                aria-label="Email address"
              />
              <button
                type="submit"
                className={styles.submitButton}
                aria-label="Subscribe"
                onClick={handleClick}>
                <img src={arrow} alt="arrowSubmit" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
