import partners from "../assets/partners.png";

const Partners = () => {
  return (
    <>
      <div className="flex flex-col gap-[13.05px] border rounded-lg p-5">
        <h3 className="text-[#5E7387] font-normal text-[13.74px] leading-[124%]">
          Investors and Partners
        </h3>
        <img src={partners} alt="partners" />
      </div>
    </>
  );
};

export default Partners;
