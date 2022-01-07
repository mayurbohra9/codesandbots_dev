import { useEffect, useState } from "react";
import { Route } from "react-router";
import "./home.css";
import Body from "./components/body/body";
import CareerSection from "./components/carrerSection/carrerSection";
import ChooseSection from "./components/chooseUsSection/chooseUsSection";
import Header from "./components/header/header";
import ProgramSection from "./components/programSection/programSection";
import LandingPage from "./components/landingpage/LandingPage";
import Footer from "./components/footer/Footer";
import Modal from "../register_modal/Modal";
function Home() {
  const [dropdown, setdropdown] = useState(false);
  const [modal, setmodal] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setmodal(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className={modal ? "home_body" : null}>
      {modal ? <Modal modal={modal} setmodal={setmodal} /> : null}
      <div className={modal ? "app app_modal" : "app"}>
        <Header dropdown={dropdown} setdropdown={setdropdown} />
        <Body />
        <ProgramSection />
        <div className="image heading">
          <h3>career Guidance</h3>
        </div>
        <CareerSection />
        <div className="image heading">
          <h3>Benefits</h3>
        </div>
        <ChooseSection />
        <LandingPage />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
