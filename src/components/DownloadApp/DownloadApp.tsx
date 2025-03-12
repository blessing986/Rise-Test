import { useRef } from "react";
import styles from "./DownloadApp.module.css";
import iphone1 from "../../assets/iphone1.png";
import andriod from "../../assets/andriod.png";
import barcode from "../../assets/barcode.png";

interface DownloadAppType {
  iphoneIcon: string;
  playstoreIcon: string;
  bgColor: string;
  textColor: string;
}

export default function DownloadApp({
  iphoneIcon,
  playstoreIcon,
  bgColor,
  textColor,
}: DownloadAppType) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const toggleModalHandler = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
      document.body.style.overflow = "hidden";
    }
  };

  const toggleBackdropHandler = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
      document.body.style.overflow = "";
    }
  };

  return (
    <>
      <div onClick={toggleModalHandler}>
        <button
          className={`${styles.downloadButton} bg-${bgColor}`}
          aria-label="Download the app">
          <div className={styles.pr1}>
            <img src={iphoneIcon} alt="Download from App Store" />
          </div>
          |
          <div className={styles.pr2}>
            <img src={playstoreIcon} alt="Download from Google Play" />
          </div>
          <h1 className={`${styles.downloadText} ${textColor}`}>
            Download App
          </h1>
        </button>
      </div>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        onClick={toggleBackdropHandler}>
        <div className={styles.modalContent}>
          <div className={styles.centered}>
            <div className={styles.iconWrapper}>
              <div>
                <img
                  src={iphone1}
                  alt="App interface on iPhone"
                  className={styles.iphone}
                />
              </div>
              <img
                src={andriod}
                alt="App interface on Android"
                className={styles.andriod}
              />
            </div>
          </div>

          <div className={styles.headingContsiner}>
            <h1 id="modal-title" className={styles.heading}>
              Scan to download
            </h1>
            <p id="modal-description" className={styles.text}>
              Position your phone camera within the frame and follow the link to
              download.
            </p>
            <div className={styles.barcodeWrapper}>
              <img src={barcode} alt="QR Code for downloading the app" />
            </div>

            <p className={styles.bottomText}>
              Download the Blink app and Sign up or log in with your account.
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}
