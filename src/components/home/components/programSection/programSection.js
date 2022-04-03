import React from "react";
import { useHistory } from "react-router";
import "./programSection.css";
import robotic from "../../../../asset-img/images/Robotics.png";
import coding from "../../../../asset-img/images/Coding.png";
import iot from "../../../../asset-img/images/IOT.png";
import rubic from "../../../../asset-img/images/Rubics Cube.png";


export default function ProgramSection() {
  function LowerCard(name, image) {
    let history = useHistory();

    const handleCoursepage = (name) => {
      localStorage.setItem("course", name);
      history.push(`/content-page/${name}`);
    };

    return (
      <div className="lower-card">
        <div
          className="image lc-img"
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
        <div className="content">
          <div className="lc-text">
            <h3>{name}</h3>
            <div className="learnbtn" onClick={() => handleCoursepage(name)}>
              Explore
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="program-sec">
      <div className="ps-upper">
        <div className="ps-upper-text">
          <h2>What we provide you?</h2>
          <p>
            We give your child a live one on one interactive learning experience
          </p>
        </div>

      </div>
      <div className="ps-lower">
        {LowerCard(
          "Robotics",
          robotic,
          0
        )}
        
        {LowerCard(
          "IOT",         
          iot,
          0
        )}
        
        {LowerCard(
          "Coding",
          coding,
          0        
        )}

        {LowerCard(
          "Rubik's Cubes",
          rubic,
          1
        )}
      </div>
    </div>
  );
}
