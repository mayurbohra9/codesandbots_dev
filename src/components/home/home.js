import { useEffect, useState } from "react";
// import { Route } from "react-router";
import "./home.css";
import Header from "../header/header";
import Body from "./components/body/body";
import CareerSection from "./components/carrerSection/carrerSection";
import ChooseSection from "./components/chooseUsSection/chooseUsSection";
// import SlidingIcon from './components/slidingIcon/SlidingIcon';
import ProgramSection from "./components/programSection/programSection";
import OurMission from "./components/ourmission/ourmission";
import Review from "./components/review/Review";
import Footer from "../footer/footer";
import RSB from "../RstickyBtn/RstickyBtn";

function Home() {
  const [dropdown, setdropdown] = useState(false);
  return (
      <div>
        <Header dropdown={dropdown} setdropdown={setdropdown} />
        <Body />
        <ProgramSection />
        <div className="image heading1">
          <h3>career Guidance</h3>
        </div>
        <CareerSection />
        <div className="image heading2">
          <h3>Benefits</h3>
        </div>
        <ChooseSection />
        <OurMission />
        <Review />
        <Footer />
        <RSB />
      </div>
  );
}

export default Home;
