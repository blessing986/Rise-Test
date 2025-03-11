import styles from "./Community.module.css";
import arrowRight from "../../assets/arrowRight.png";
import community from "../../assets/community.png";
import communitySmall from "../../assets/communitySmall.png";

const Community = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.communityBox}>
          <div className={styles.textContainer}>
            <h1 className={styles.heading}>Join the Rise Community</h1>

            <p className={styles.description}>
              Our Telegram community surrounds you with others who can help you
              along your financial journey with tips, advice and learning. It's
              completely free and open to new and seasoned investors.
            </p>

            <div>
              <button className={styles.ctaButton}>
                <span>Join our community</span>
                <img
                  src={arrowRight}
                  alt="arrowRight"
                  className={styles.icon}
                />
              </button>
            </div>
          </div>

          <div className={styles.visibleOnSmall}>
            <img src={communitySmall} alt="communitySmall" />
          </div>

          <div className={styles.hiddenOnSmall}>
            <img src={community} alt="community" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
