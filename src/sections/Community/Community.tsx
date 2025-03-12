import styles from "./Community.module.css";
import arrowRight from "../../assets/arrowRight.png";
import community from "../../assets/community.png";
import communitySmall from "../../assets/communitySmall.png";

const Community = () => {
  return (
    <>
      <section className={styles.container} aria-labelledby="community-heading">
        <div className={styles.communityBox}>
          <div className={styles.textContainer}>
            <h1 id="community-heading" className={styles.heading}>
              Join the Rise Community
            </h1>

            <p className={styles.description}>
              Our Telegram community surrounds you with others who can help you
              along your financial journey with tips, advice and learning. It's
              completely free and open to new and seasoned investors.
            </p>

            <div>
              <button
                className={styles.ctaButton}
                aria-label="Join our community on Telegram">
                <span>Join our community</span>
                <img
                  src={arrowRight}
                  alt=""
                  className={styles.icon}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          <div className={styles.visibleOnSmall}>
            <img
              src={communitySmall}
              alt="Illustration of a diverse financial community"
            />
          </div>

          <div className={styles.hiddenOnSmall}>
            <img
              src={community}
              alt="Larger illustration of a diverse financial community"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
