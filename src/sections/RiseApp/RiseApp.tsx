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
            <h5 className={styles.title}>Download The Rise App</h5>
            <h1 className={styles.heading}>Rise makes investing simple.</h1>

            <div className={styles.ctaContainer}>
              <button className={styles.ctaButton}>
                <span>Start Investing</span>
                <img
                  src={arrowRight}
                  alt="arrowRight"
                  className={styles.icon}
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
              alt="risePhone"
              className={styles.risePhoneImage}
            />

            <div className={styles.absolutePosition}>
              <img src={riseBall} alt="riseBall" className="w-28 lg:w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiseApp;
