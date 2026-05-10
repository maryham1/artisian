import Logo from "../../ui/Logo";

function Navbar() {
  return (
    <nav className=" flex w-full bg-transparent justify-between  items-center font-poppins font-normal text-[16px] laptop:text-[22px] tablet:text-[20px]">
      <Logo type="large" />
      <ul className="hidden laptop:gap-20 tablet:gap-10 items-center laptop:flex tablet:flex ">
        <li>
          <a href="">Home </a>
        </li>
        <li>
          <a href="">Features</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Faq</a>
        </li>
      </ul>
      <button className="bg-[#D03531] py-2 px-4 text-center text-white">
        Download App
      </button>
    </nav>
  );
}

export default Navbar;
