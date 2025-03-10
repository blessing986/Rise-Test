import hero from "../assets/hero.png";
import arrowRight from "../assets/arrowRight.png";
import DownloadApp from "../components/DownloadApp";
import Partners from "../components/Partners";
import arrow from "../assets/arrow.png";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center mb-20 xl:mb-10 px-5 sm:px-8 md:px-14 lg:px-6 xl:px-0">
      <div className="lg:w-[50%] xl:pl-[100px]">
        <div className="mt-14 lg:mt-24 xl:mt-0">
          <button className="text-[#41BCC4] uppercase font-medium text-[13px] tracking-[-3%] leading-[100%] bg-[#EDFFFF] px-3 py-2 rounded-[32px] border border-[#41BCC4] flex items-center gap-[5px]">
            Read our cost of living report 2024 <img src={arrow} alt="arrow" />
          </button>

          <div className="flex flex-col md:items-center md:justify-center lg:items-start gap-8 mt-6  xl:mb-32 md:text-center lg:text-start">
            <h1 className="font-semibold text-4xl md:text-7xl lg:text-5xl xl:text-6xl leading-[124%]">
              Dollar investments that help you{" "}
              <span className="text-[#0898A0] font-normal italic">grow.</span>{" "}
            </h1>

            <p className="text-[#5E7387] font-normal text-lg sm:text-[19px] lg:text-xl leading-[148%]">
              Rise gives you access to a carefully selected portfolio of global
              investments, across US stocks, US real estate and fixed income
              assets.
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-2 lg:gap-6 lg:mb-8 xl:mb-0">
              <button className="group bg-[#0898A0] text-white font-semibold text-sm lg:text-base leading-[124%] flex justify-center items-center sm:px-10 py-3.5 rounded-[50px] transition-all duration-1000 w-[40%] sm:w-auto">
                <span className="pr-3">Get Started</span>
                <img
                  src={arrowRight}
                  alt="arrowRight"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <div>
                <DownloadApp />
              </div>
            </div>
          </div>

          <div className="my-10 xl:my-0 ">
            <Partners />
          </div>
        </div>
      </div>

      <div className="lg:w-[400px] xl:w-[550px]">
        <img src={hero} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
