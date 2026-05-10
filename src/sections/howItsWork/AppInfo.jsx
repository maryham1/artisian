import Button from "../../ui/Button";
function AppInfo() {
  return (
    <div className="flex flex-col gap-20 laptop:flex-row justify-between mt-10 w-full">
      <div className="flex flex-col gap-5 laptop:gap-10 w-auto laptop:w-[540px] order-2 laptop:order-1">
        <h4 className="text-[26px] laptop:text-[36px] font-semibold text-black">
          Enjoy Our Quick Artisans Mobile App Features
        </h4>
        <p className="text-[18px] laptop:text-[22px] text-[#4E545F]">
          Enjoy a seamless experience with our mobile app, making it easy to
          find, book, and manage trusted artisans anytime, anywhere.
        </p>
        <Button />
      </div>
      <div className=" relative flex items-center justify-center order-1 laptop:order-2">
        <img
          src="\Quick-image\app\ellispse.png"
          className="z-10 w-[620px]  laptop:translate-y-68  laptop:translate-x-60 hidden laptop:block "
        />
        <img
          src="\Quick-image\app\mockup1.png"
          className="z-30 w-[170px] laptop:w-[270px] relative translate-x-30  laptop:-translate-x-30"
        />
        <img
          src="\Quick-image\app\mockup2.png"
          className="z-50 w-[150px] laptop:w-[230px] translate-y-13 -translate-x-38 laptop:translate-y-20 laptop:-translate-x-130"
        />
      </div>
    </div>
  );
}

export default AppInfo;
