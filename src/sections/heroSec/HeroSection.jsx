import Button from "../../ui/Button";
import About from "../aboutSec/About";
import Navbar from "../nav/Navbar";
import Flow from "./Flow";

function HeroSection() {
  return (
    <>
      <header className="bg-[#F4F4F6] px-5 py-10 laptop:px-15 laptop:py-10  tablet:px-15 tablet-py-10 relative overflow-x-hidden overflow-y-hidden ">
        <Navbar />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[#D03531]/7 blur-3xl   rounded-full"></div>
        <div className="font-poppins w-[335px] max-w-[360px] laptop:w-[780px] laptop:max-w-[780px] mt-10 laptop:mt-15">
          <h1 className="font-bold text-[24px] laptop:text-[46px] tablet:text-[36px]">
            Connect with{" "}
            <span className="text-[#D03531]">skilled artisans</span> improve
            productivity
          </h1>
          <p className="font-normal text-[16px] laptop:text-[22px] tablet:text-[20px] text-[#4E545F]">
            Bring the right talent to your effortless teams
          </p>
        </div>
        <div className="flex flex-col gap-10 justify-between items-center py-15 laptop:py-0  laptop:flex-row ">
          <div className="flex flex-col gap-10 order-2 laptop:order-1 ">
            <p className="text-[16px] laptop:text-[22px] tablet:text-[20px] font-normal text-[#4E545F] border-4 border-t-0 border-b-0 border-r-0 laptop:border-6 p-4  laptop:border-t-0 laptop:border-b-0 laptop:border-r-0 border-[#D03531] ">
              Connect with skilled professionals for all your home repair and
              maintenance needs, instantly and with ease. From small fixes to
              urgent repairs, get reliable help from trusted local experts in
              just a few taps.
            </p>
            <Button type="hidden" />
          </div>

          <div className="image flex items-center w-[300px] laptop:w-[700px] tablet:w-[500px] order-1 laptop:order-2  ">
            <div className="relative bg-[#E54E47]  flex justify-center p-0 laptop:p-10 items-center rounded-full  w-[260px] h-[250px] laptop:w-[650px] laptop:h-[650px] tablet:w-[450px] tablet:h-[450px] translate-y-1/9 translate-x-20.5 laptop:translate-x-1/5 laptop:translate-y-1/4  tablet:translate-x-1/5 tablet:translate-y-1/4  ">
              <img
                src="/Quick-image/company/artisians.png "
                className="absolute laptop:w-[480px] hidden laptop:block bottom-0 h-auto object-contain  laptop:-translate-y-28 laptop:-translate-x-10"
              />
              <img
                src="/Quick-image/company/artisian-mobile.png "
                className="absolute w-auto block laptop:hidden bottom-0 h-auto object-contain -translate-x-2  "
              />
            </div>
          </div>
        </div>
      </header>
      <Flow />
    </>
  );
}

export default HeroSection;

//
//
