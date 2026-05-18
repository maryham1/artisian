import { useComponent } from "../../context/ScrollContext";
import Logo from "../../ui/Logo";

function Navbar({ isHeroVisible }) {
  const { aboutRef, feature, faq } = useComponent();
  return (
    <nav
      className={` z-100 flex w-full bg-transparent justify-between  items-center font-poppins font-normal text-[16px] laptop:text-[22px] tablet:text-[20px]  ${isHeroVisible ? "relative bg-transparent" : "fixed top-0 left-0 bg-white/40 backdrop-blur-xl shadow-md border-b border-white/20 px-5 py-5 laptop:px-15 laptop:py-5 "}`}
    >
      <Logo type="large" />
      <ul className="hidden laptop:gap-20 tablet:gap-10 items-center laptop:flex tablet:flex ">
        <li>
          <a href="" className="cursor-pointer">
            Home{" "}
          </a>
        </li>
        <li className="">
          <a
            href="#feature"
            className="cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              feature.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              aboutRef.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#faq"
            className="cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              faq.current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Faq
          </a>
        </li>
      </ul>
      <button className="bg-[#D03531] py-2 px-4 text-center text-white cursor-pointer">
        Download App
      </button>
    </nav>
  );
}

export default Navbar;
