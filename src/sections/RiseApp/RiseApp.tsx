import styles from "./RiseApp.module.css";
import arrowRight from "../../assets/arrowRight.png";
import DownloadApp from "../../components/DownloadApp/DownloadApp";
import risePhone from "../../assets/risePhone.png";
import riseBall from "../../assets/riseBall.png";
import iphone from "../../assets/iphone.png";
import playstore from "../../assets/playstore.png";

const RiseApp = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h3 className={styles.title}>Download The Rise App</h3>
            <h1 className={styles.heading}>Rise makes investing simple.</h1>

            <div className={styles.ctaContainer}>
              <button className={styles.ctaButton} aria-label="Start Investing">
                <span>Start Investing</span>
                <img
                  src={arrowRight}
                  alt=""
                  className={styles.icon}
                  aria-hidden="true"
                />
              </button>

              <div className={styles.downloadContainer}>
                <DownloadApp
                  iphoneIcon={iphone}
                  playstoreIcon={playstore}
                  bgColor="#71879C1A"
                  textColor="#1C232B"
                />
              </div>
            </div>
          </div>

          <div className={styles.relativeContainer}>
            <img
              src={risePhone}
              alt="Rise app displayed on a phone screen"
              className={styles.risePhoneImage}
            />

            <div className={styles.absolutePosition}>
              <img
                src={riseBall}
                alt="Decorative circular design element"
                className={styles.riseBallImage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiseApp;
