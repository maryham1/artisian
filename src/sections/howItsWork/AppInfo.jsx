import Button from "../../ui/Button";
function AppInfo() {
  return (
    <div className="flex flex-col gap-20 laptop:flex-row tablet:flex-row justify-between mt-10 tablet:mt-10 laptop:mt-20 w-full tablet:px-10 tablet-py-10">
      <div className="flex flex-col gap-5 laptop:gap-10 w-auto laptop:w-[540px] tablet:w-[340px] order-2 laptop:order-1 tablet:order-1">
        <h4 className="text-[26px] laptop:text-[36px] tablet:text-[30px] font-semibold text-black">
          Enjoy Our Quick Artisans Mobile App Features
        </h4>
        <p className="text-[18px] laptop:text-[22px] tablet:text-[20px] text-[#4E545F]">
          Enjoy a seamless experience with our mobile app, making it easy to
          find, book, and manage trusted artisans anytime, anywhere.
        </p>
        <Button />
      </div>
      <div className=" relative flex items-center justify-center order-1 laptop:order-2 tablet:order-2">
        <img
          src="\Quick-image\app\ellispse.png"
          className="z-10 w-[620px]  laptop:translate-y-68 tablet:block tablet:w-[570px] tablet:translate-x-30 tablet:translate-y-40  laptop:translate-x-60 hidden laptop:block "
        />
        <img
          src="\Quick-image\app\mockup1.png"
          className="z-30 w-[170px] laptop:w-[270px] tablet:w-[150px] relative translate-x-30 tablet:-translate-x-10  laptop:-translate-x-30"
        />
        <img
          src="\Quick-image\app\mockup2.png"
          className="z-50 w-[150px] laptop:w-[230px] tablet:w-[130px] translate-y-13 -translate-x-38 laptop:translate-y-20 laptop:-translate-x-130 tablet:-translate-60 tablet:translate-y-10"
        />
      </div>
    </div>
  );
}

export default AppInfo;
