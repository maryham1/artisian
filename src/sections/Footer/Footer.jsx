import { BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import Logo from "../../ui/Logo";
import Policy from "./Policy";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useInView } from "react-intersection-observer";

function Footer() {
  const { ref, inView } = useInView({
    threshold: 0.15,
  });
  return (
    <section className="bg-[#F4F4F6]   px-5 py-10 laptop:px-15 laptop:py-10 w-full tablet:px-10 tablet-py-10 ">
      <div
        className={`flex flex-col gap-10 transition-all ease-in-out duration-700 ${inView ? "animate-fade-in1" : ""}`}
        ref={ref}
      >
        <div className="flex flex-col laptop:flex-row tablet:flex-row  gap-10 justify-between ">
          {/* social media */}
          <div className="space-y-2">
            <figure className="flex gap-2 laptop:gap-5 tablet:gap-4 items-center ">
              <a href="https://facebook.com/Mariam Olayiwola">
                <LazyLoadImage
                  src="\Quick-image\social-icon\facebook.png"
                  className="object-contain w-[20px] laptop:w-auto tablet:w-[30px]"
                />
              </a>
              <a href="https://instagram.com/Mariam | Codey_sis">
                <LazyLoadImage
                  src="\Quick-image\social-icon\instagram.png"
                  className="object-contain w-[20px] laptop:w-auto tablet:w-[30px]"
                />
              </a>
              <a href="https://www.linkedin.com/in/mariam-olayiwola-4bbb1031b/">
                <LazyLoadImage
                  src="\Quick-image\social-icon\Linkedin.png"
                  className="object-contain w-[20px] laptop:w-auto tablet:w-[30px]"
                />
              </a>
              <a href="https://x.com/Codey_sis">
                <LazyLoadImage
                  src="\Quick-image\social-icon\Twitter.png"
                  className="object-contain w-[20px] laptop:w-auto tablet:w-[30px]"
                />
              </a>
            </figure>
            <p className="text-[15px] laptop:text-[17px] tablet:text-[16px]">
              Follow us for updates, tips, and trusted service insights.
            </p>
          </div>
          {/* contact */}
          <div className="space-y-2">
            <h4 className="text-[20px] font-semibold">Contacts</h4>
            <figure className="flex items-center gap-2">
              <MdEmail className="text-[20px]" />
              <a
                href="mailto:maryham4real@gmail.com"
                className="text-[15px] laptop:text-[17px] tablet:text-[16px]"
              >
                quick@gmail.com
              </a>
            </figure>
            <figure className="flex items-center gap-2">
              <BiPhoneCall className="text-[20px]" />
              <a
                href="tel:+2349045808495"
                className="text-[15px] laptop:text-[17px] tablet:text-[16px]"
              >
                +2349045808495
              </a>
            </figure>
          </div>
          {/* legal */}
          <div className="space-y-2">
            <h4 className="text-[17px] laptop:text-[20px] tablet:text-[18px] font-semibold">
              Legal
            </h4>
            <div className="flex flex-col gap-2">
              <Link to="/policy" className="cursor-pointer">
                Privacy Policy
              </Link>
              <Link to="/terms" className="cursor-pointer">
                Terms and Conditions
              </Link>
              <Link to="/security" className="cursor-pointer">
                Security and Compliance
              </Link>
              <Link to="/community" className="cursor-pointer">
                Community Rules
              </Link>
            </div>
          </div>
          {/* download the app */}
          <div className="space-y-2">
            <h4 className="text-[17px] laptop:text-[20px] tablet:text-[18px] font-semibold">
              Get the App
            </h4>
            <button className="bg-[#D03531] py-2 px-4 text-center text-white">
              Download App
            </button>
          </div>
        </div>
        <Logo type="small" />
      </div>
      <div className="border-2 border-l-0 border-r-0 border-t-0 py-5 border-[#a6a7a9]" />
    </section>
  );
}

export default Footer;
