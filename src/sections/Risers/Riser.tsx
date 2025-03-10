import sanni from "../../assets/sanni.png";
import layo from "../../assets/layo.png";
import henry from "../../assets/henry.png";

const Riser = () => {
  return (
    <>
      <div className="px-5 lg:px-[50px] flex flex-col gap-[28px] mt-20">
        <h1 className="font-bold lg:font-semibold text-[24px] lg:text-[48px] text-black leading-[124%] text-center">
          Meet Some{" "}
          <span className="font-semibold lg:font-medium italic text-[#0898A0]">Risers</span>{" "}
        </h1>

        <div className="flex flex-col gap-[23px] lg:justify-between">
          <img src={sanni} alt="sanni" className="w-[372px]" />
          <img src={layo} alt="layo" className="w-[372px]" />
          <img src={henry} alt="henry" className="w-[372px]" />
        </div>
      </div>
    </>
  );
};

export default Riser;
