import { useRef } from "react";

import iphone from "../assets/iphone.png";
import iphone1 from "../assets/iphone1.png";
import playstore from "../assets/playstore.png";
import andriod from "../assets/andriod.png";
import barcode from "../assets/barcode.png";

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
        <button className="flex items-center justify-center p-3.5 lg:p-3.5 bg-[#71879C] bg-opacity-5 shadow-2xl rounded-[50px]">
          <div className="pr-1 sm:pr-2">
            <img src={iphone} alt="iphone" />
          </div>
          |
          <div className="pl-1 sm:pl-2 pr-2 sm:pr-3">
            <img src={playstore} alt="playstore" />
          </div>
          <h1 className="font-semibold text-sm lg:text-base text-[#1C232B]">
            Download App
          </h1>
        </button>
      </div>

      <dialog
        ref={dialogRef}
        className="backdrop:bg-white bg-opacity-[98%] rounded-2xl shadow-2xl"
        onClick={toggleBackdropHandler}>
        <div className="bg-white max-w-[300px] smPro:max-w-[340px] sm:max-w-[500px]">
          <div className="flex items-center justify-center py-4">
            <div className="flex items-center justify-center gap-3 bg-white p-2 rounded-xl drop-shadow-xl">
              <div>
                <img src={iphone1} alt="iphone1" className="w-8 h-8" />
              </div>
              <img src={andriod} alt="andriod" className="w-10 h-7" />
            </div>
          </div>

          <div className="text-center px-6">
            <h1 className="text-[31.18px] leading-[124%] font-bold text-black">
              Scan to download
            </h1>
            <p className="text-[16px] font-normal text-[#5E7387] leading-[148%] py-4">
              Position your phone camera within the frame and follow the link to
              download.
            </p>
            <div className="flex items-center justify-center">
              <img src={barcode} alt="Barcode" />
            </div>

            <p className="text-[16px] font-nnormal leading-[148%] text-[#5E7387] pb-6">
              Download the Blink app and Sign up or log in with your account.
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}
