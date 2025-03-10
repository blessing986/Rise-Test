import { useRef } from "react";
import styles from "./DownloadApp.module.css";

import iphone from "../../assets/iphone.png";
import iphone1 from "../../assets/iphone1.png";
import playstore from "../../assets/playstore.png";
import andriod from "../../assets/andriod.png";
import barcode from "../../assets/barcode.png";

export default function DownloadApp() {
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
        <button className={styles.downloadButton}>
          <div className={styles.pr1}>
            <img src={iphone} alt="iphone" />
          </div>
          |
          <div className={styles.pr2}>
            <img src={playstore} alt="playstore" />
          </div>
          <h1 className={styles.downloadText}>Download App</h1>
        </button>
      </div>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        onClick={toggleBackdropHandler}>
        <div className={styles.modalContent}>
          <div className={styles.centered}>
            <div className={styles.iconWrapper}>
              <div>
                <img src={iphone1} alt="iphone1" className={styles.iphone} />
              </div>
              <img src={andriod} alt="andriod" className={styles.andriod} />
            </div>
          </div>

          <div className={styles.headingContsiner}>
            <h1 className={styles.heading}>Scan to download</h1>
            <p className={styles.text}>
              Position your phone camera within the frame and follow the link to
              download.
            </p>
            <div className={styles.barcodeWrapper}>
              <img src={barcode} alt="Barcode" />
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
