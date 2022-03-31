import React from "react";
import { useHistory } from "react-router";
import "./body.css";
import child from "../../../../asset-img/kidpx.svg";

export default function Body() {
  let history = useHistory();
  return (
    <div className="body image">
      <div className="body-text">
        <h1>
          Better{" "}
          <span className="body-text-h1" style={{ color: "#5A2969" }}>
            Future
          </span>{" "}
          For your kids
        </h1>
        <p>
          Kids can learn what they love and have a bright future. Enroll today
          and start learning...
        </p>
        <div className="body-text-div">
          <div
            className="big-btn"
            onClick={() => {
              history.push("/content-page/IOT");
            }}
          >
            Explore
          </div>
          <div className="image arrow"></div>
        </div>
      </div>
      <div className="image triangle1"></div>
      <div className="image triangle3"></div>
      <div className="image rectangle"></div>
      <div className="image triangle4"></div>
      <div
        className="image child-image"
        style={{ backgroundImage: `url('${child}')` }}
      ></div>
      <div className="image triangle2"></div>

      <div className="image arrow1"></div>
    </div>
  );
}
