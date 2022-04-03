import React from "react";
// import { NavLink } from "react-router-dom";
import "./carrerSection.css";
import critical from "../../../../asset-img/images/critical.png";
import creative from "../../../../asset-img/images/creative.png";
import competitive from "../../../../asset-img/images/competitive.png";
import future from "../../../../asset-img/images/future.png";
export default function CareerSection() {
  return (
    <>
    {/* carrer Guidance section */}
    <div className="c-sec-body">
      <div className="c-content">
        <div className="c-text">
          <h2>
            How these<span style={{ color: "#FFB901" }}> Courses</span> will
            help you in future?
          </h2>
          <p>
            In Todays world we have upcoming technologies, where are world is
            growing rapidly with tech industries. We have self driven car and
            smart home...{" "}
          </p>
        </div>
      </div>
      <div className="dottedarrow"></div>
      <video className="image c-video">
        {/* <source src="movie.mp4" type="video/mp4"> */}
        {/* <source src="movie.ogg" type="video/ogg"> */}
      </video>
    </div>

    {/* what kids gain section */}
    <div className="kg-body">
      <div className="kg-upper">
        <h2>What the kids gain?</h2>
      </div>

      <div className="kg-lower">
        <div className="kg-lower-text">
      
            <div className="kg-lower-card">
              <div
                className="image kg-lower-card-image"
                style={{ backgroundImage: `url('${critical}')` }}
              ></div>
              <div className="image kg-lower-card-text">
                <h2>Critical Thinking</h2>
              </div>
            </div>  

            <div className="kg-lower-card">
              <div
                className="image kg-lower-card-image"
                style={{ backgroundImage: `url('${creative}')` }}
              ></div>
              <div className="image kg-lower-card-text">
                <h2>Creative Thinking</h2>
              </div>
            </div>

            <div className="kg-lower-card">
              <div
                className="image kg-lower-card-image"
                style={{ backgroundImage: `url('${competitive}')` }}
              ></div>
              <div className="image kg-lower-card-text">
                <h2>Competitive Edge</h2>
              </div>
            </div>
            
            <div className="kg-lower-card">
              <div
                className="image kg-lower-card-image"
                style={{ backgroundImage: `url('${future}')` }}
              ></div>
              <div className="image kg-lower-card-text">
                <h2>Future Ready Courses</h2>
              </div>
          </div>

          {/* <NavLink to="/sign-up">
          <div className="signup">Sign Up</div>
          </NavLink> */}

        </div>  
      </div>
      
    </div>
    </>
  );
}
