import styles from "./ServicesItem.module.css";
import arrowRightBlack from "../../assets/arrowRightBlack.png";

interface ServicesItemType {
  title: string;
  description: string;
  bgColor: string;
  buttonText: string;
  img: string;
  imgAlt?: string;
}

const ServicesItem = ({
  title,
  description,
  bgColor,
  buttonText,
  img,
  imgAlt = "Service related illustration",
}: ServicesItemType) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box} style={{ backgroundColor: bgColor }}>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>

            <div>
              <button
                className={styles.ctaButton}
                type="button"
                aria-label={buttonText}>
                <span>{buttonText}</span>
                <img
                  src={arrowRightBlack}
                  alt="Arrow pointing right"
                  className={styles.icon}
                />
              </button>
            </div>
          </div>

          <div>
            <img src={img} alt={imgAlt} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesItem;
