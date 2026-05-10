import Certifed from "./Certifed";
import Mission from "./Mission";

function About() {
  return (
    <section className="bg-[#F4F4F6] w-full px-5 py-10 laptop:px-15 laptop:py-10 tablet:px-10 tablet-py-10">
      <div className="flex flex-col laptop:flex-row gap-10 justify-between items-center m-auto tablet:flex-row  ">
        <div className="relative w-[400px] laptop:w-[500px] tablet:w-[400px] order-2 laptop:order-1 tablet:order-1">
          <img
            src="\Quick-image\company-associate\Group.png"
            className="relative w-[400px] laptop:w-[500px] tablet:w-[350px]"
          />
          <img
            src="\Quick-image\company-associate\female-engr.png"
            className="absolute top-10 left-10 w-[320px] laptop:w-[420px] tablet:w-[320px] h-auto"
          />
        </div>
        <div className="w-auto laptop:w-[600px] tablet:w-[400px]  flex flex-col gap-5 order-1 laptop:order-2 tablet:order-2">
          <h4 className="text-[20px] laptop:text-[36px] tablet:text-[30px] font-semibold text-black  ">
            Who we are
          </h4>
          <div className="space-y-2">
            <p className="text-[16px] laptop:text-[22px] tablet:text-[20px] text-[#4E545F]">
              We are Quick Artisan — a trusted platform that connects people
              with skilled and verified professionals for everyday home
              services.
            </p>
            <p className="text-[16px] laptop:text-[22px] tablet:text-[20px] text-[#4E545F]">
              From plumbing and electrical work to repairs and installations, we
              make it easy for you to find reliable experts right when you need
              them. Our goal is to remove the stress of searching for help and
              replace it with fast, simple, and dependable service.
            </p>
            <p className="text-[16px] laptop:text-[22px] tablet:text-[20px] text-[#4E545F]">
              We believe quality home services should be accessible to everyone.
              That’s why we carefully connect users with experienced artisans
              who are ready to deliver work you can trust — quickly, safely, and
              affordably.
            </p>
          </div>
        </div>
      </div>
      <Mission />
      <Certifed />
    </section>
  );
}

export default About;
