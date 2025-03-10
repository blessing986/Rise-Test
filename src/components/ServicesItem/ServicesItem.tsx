import styles from "./ServicesItem.module.css";
import arrowRightBlack from "../../assets/arrowRightBlack.png";

interface ServicesItemType {
  title: string;
  description: string;
  bgColor: string;
  buttonText: string;
  img: string;
}

const ServicesItem = ({
  title,
  description,
  bgColor,
  buttonText,
  img,
}: ServicesItemType) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box} style={{ backgroundColor: bgColor }}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>

            <div>
              <button className={styles.ctaButton}>
                <span>{buttonText}</span>
                <img
                  src={arrowRightBlack}
                  alt="arrowRightBlack"
                  className={styles.icon}
                />
              </button>
            </div>
          </div>

          <div>
            <img src={img} alt={title} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesItem;
