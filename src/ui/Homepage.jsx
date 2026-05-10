import { Outlet } from "react-router-dom";
import About from "../sections/aboutSec/About";
import Faq from "../sections/FaqSeC/Faq";
import Footer from "../sections/Footer/Footer";
import HeroSection from "../sections/heroSec/HeroSection";
import Feature from "../sections/howItsWork/Feature";

function Homepage() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <About />
      <Feature />
      <Faq />
      <Footer />
      <Outlet />
    </div>
  );
}

export default Homepage;
