import React from "react";
import "./chooseUsSection.css";
import industry from "../../../../asset-img/industry-certificate.svg";
import expInst from "../../../../asset-img/experienced-instructor.svg";
import doubt from "../../../../asset-img/doubt-session.svg";

export default function ChooseSection() {
  return (
    <div className="image cs-body">
      <div className="cs-lower">
        <div className="cs-lower-text">
            
          <div className="cs-lower-card1">
            <div
              className="image cs-lower-card-image"
              style={{ backgroundImage: `url('${industry}')` }}
            ></div>
            <div className="image cs-lower-card-text">
              <h2>Industry Certification</h2>
              <p>
                After completion of the program the students will receive
                industry Recongnised Certificates.
              </p>
            </div>
          </div>

          <div className="cs-lower-card2">
            <div
              className="image cs-lower-card-image"
              style={{ backgroundImage: `url('${expInst}')` }}
            ></div>
            <div className="image cs-lower-card-text">
              <h2>Experienced Instructors</h2>
              <p>
                Our experts will be training the students and mentoring them.
              </p>
            </div>
          </div>

          <div className="cs-lower-card3">
            <div
              className="image cs-lower-card-image"
              style={{ backgroundImage: `url('${doubt}')` }}
            ></div>
            <div className="image cs-lower-card-text">
              <h2>Doubt Clearing Session</h2>
              <p>Students can clear doubts in our live sessions.</p>
            </div>
          </div>

          </div>
        </div>
    </div>
  );
}
