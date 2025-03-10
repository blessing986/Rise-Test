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
      <div className="px-6 lg:px-[50px] mt-10">
        <div
          className={`flex flex-col md:flex-row justify-between items-center bg-[${bgColor}] px-4 lg:px-0 lg:pl-10 pt-10 lg:pt-0 rounded-[24px]`}>
          <div className="flex flex-col gap-[32px] md:w-[600px] lg:w-[430px] xl:w-[526px]">
            <h1 className="text-[#1C232B] font-semibold text-[24px] sm:text-[26px] md:text-[36px] xl:text-[48px] leading-[124%]">
              {title}
            </h1>
            <p className="text-[#71879C] text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-[148%]">
              {description}
            </p>

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
