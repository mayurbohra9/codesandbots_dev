// This page contains 'our mission section','doubt Section','benchmarking section','learning section','feature section'

import React from "react";
import "./ourmission.css";
import { NavLink } from "react-router-dom";
// import Review from "../review/Review";
import yes_pic from "../../../../asset-img/images/yes_pic.svg";
import childImage from "../../../../asset-img/images/school-boy-yellow-shirt-taking-virtual-classes-raising-hand 1.png";
import rocketImage from "../../../../asset-img/images/rocket.png";
import rocketImage2 from "../../../../asset-img/images/rocket_image.png";
// import womenImage1 from "../../asserts/images/school-boy-yellow-shirt-taking-virtual-classes-raising-hand 1.svg";


function LandingPage() {
  return (
    <>
      <div className="landing_page_container">
        
        {/* doubt section */}

        <div className="landing_page_doubt_section">
          <div className="landing_page_doubt_section_image">
            <img src={childImage} alt="" />
          </div>
          <div className="landing_page_doubt_section_text">
            {/* <h1>Free Doubt Sessions</h1> */}
            <p>
              Learning Will be Fun, Because Our Industry Experts Will Always Be
              there for Free to help clear the doubts of students and guide them
              while they learn various technologies and get hands on experience
              on their enrolled courses.
            </p>
          </div>
        </div>
        
        {/* feature section */}
        <div className="landing_page_feature_section">
          <div className="landing_page_feature_section_top">
            <div className="left_section">
              <h1>
                How we help{" "}
                <span className="heading_color"> you become better</span>?
              </h1>
            </div>
          </div>
          <div className="landing_page_feature_section_bottom">
            <ul>
              <li>Build logical thinking</li>
              <li>Sharpen problem solving</li>
              <li>Increase concentration</li>
              <li>Foster imagination and creativity</li>
              <li>Enhances their ability to build</li>
              <li>Opens up career opportunities</li>
            </ul>
            {/* <NavLink to="/sign-in">
              {" "}
              <button className="sign_up">Sign Up</button>
            </NavLink> */}
          </div>
          <div className="right_section">
            <img src={yes_pic} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
