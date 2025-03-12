import logoFooter from "../../assets/logoFooter.png";
import footer from "../../assets/footer.png";
import DownloadApp from "../DownloadApp/DownloadApp";
import styles from "./Footer.module.css";
import arrowRight from "../../assets/arrowRight.png";
import iphone from "../../assets/iphoneWhite.png";
import playstore from "../../assets/playstoreWhite.png";
import linkedIn from "../../assets/linkedIn.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import risebg from "../../assets/risebg.png";
import Newsletter from "../../sections/Newsletter/Newsletter";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.newsletterContainer}>
          <Newsletter />
        </div>

        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <div className={styles.footerTop}>
              <div className={styles.footerLogoSection}>
                <div className={styles.flexColumnGap12}>
                  <div>
                    <img src={logoFooter} alt="logoFooter" />
                  </div>
                  <p className={styles.textNormalSmall}>
                    Global dollar investments made simple.
                  </p>
                </div>

                <img src={footer} alt="footer" className={styles.footerImage} />
              </div>

              <div className={styles.mobileSection}>
                <DownloadApp
                  iphoneIcon={iphone}
                  playstoreIcon={playstore}
                  bgColor="#41BCC4"
                  textColor="#ffffff"
                />

                <div>
                  <button className={styles.ctaButton}>
                    <span>Start Investing</span>
                    <img
                      src={arrowRight}
                      alt="arrowRight"
                      className={styles.icon}
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.gridSection}>
              <div className={styles.flexColumn}>
                <h6 className={styles.heading}>
                  Company
                </h6>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    About us
                  </li>
                  <li className={styles.listItem}>
                    Careers
                  </li>
                  <li className={styles.listItem}>
                    FAQs
                  </li>
                </ul>
              </div>

              <div className={styles.flexColumn}>
                <h6 className={styles.heading}>
                  Explore
                </h6>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Why Rise
                  </li>
                  <li className={styles.listItem}>
                    Rise for Business
                  </li>
                  <li className={styles.listItem}>
                    Investment club
                  </li>
                  <li className={styles.listItem}>
                    Developer
                  </li>
                  <li className={styles.listItem}>
                    Blog
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.gridSection}>
              <div className={styles.flexColumn}>
                <h6 className={styles.heading}>
                  Legal
                </h6>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Privacy Policy
                  </li>
                  <li className={styles.listItem}>
                    Terms & Condition
                  </li>
                  <li className={styles.listItem}>
                    Disclosure
                  </li>
                </ul>
              </div>

              <div className={styles.flexColumn}>
                <h6 className={styles.heading}>
                  Contact us
                </h6>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    +234 01 888 3519
                  </li>
                  <li className={styles.listItem}>
                    +234 01 888 3519
                  </li>
                  <li className={styles.listItem}>
                    hello@risevest.com
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.hiddenContainer}>
              <DownloadApp
                iphoneIcon={iphone}
                playstoreIcon={playstore}
                bgColor="#41BCC4"
                textColor="#ffffff"
              />

              <div>
                <button className={styles.ctaButton}>
                  <span>Start Investing</span>
                  <img
                    src={arrowRight}
                    alt="arrowRight"
                    className={styles.icon}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className={styles.footerLinksContainer}>
            <div className={styles.textContainer}>
              <p>©2025 Risevest.</p>
              <span>All rights reserved.</span>
            </div>

            <ul className={styles.socialList}>
              <li className={styles.socialListItem}>
                <img src={linkedIn} alt="linkedIn" />
                <span className={styles.socialListText}>
                  LinkedIn
                </span>
              </li>
              <li className={styles.socialListItem}>
                <img src={twitter} alt="twitter" />
                <span className={styles.socialListText}>
                  Twitter
                </span>
              </li>
              <li className={styles.socialListItem}>
                <img src={instagram} alt="instagram" />
                <span className={styles.socialListText}>
                  Instagram
                </span>
              </li>
              <li className={styles.socialListItem}>
                <img src={facebook} alt="facebook" />
                <span className={styles.socialListText}>
                  Facebook
                </span>
              </li>
              <li className={styles.socialListItem}>
                <img src={youtube} alt="youtube" />
                <span className={styles.socialListText}>
                  Youtube
                </span>
              </li>
            </ul>
          </div>

          <img src={risebg} alt="risebg" className={styles.riseBg} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
