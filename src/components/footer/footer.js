import React from "react";
import "../footer/footer.css";
// import { NavLink } from "react-router-dom";
import { useHistory } from "react-router";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';

import logo from "../../asset-img/codesandbots logo.svg";
import footerImage from "../../asset-img/images/footer_image.png";
import facebook from "../../asset-img/social-icon/facebook.svg"
import instagram from "../../asset-img/social-icon/instagram.svg"
import linkedin from "../../asset-img/social-icon/linkedin.svg"
import youtube from "../../asset-img/social-icon/youtube.svg"
import twitter from "../../asset-img/social-icon/twitter.svg"
// import { Router } from "react-router-dom/cjs/react-router-dom.min";

function Footer() {
  let history = useHistory();
  console.log(history);
  return (
    <>
      <div className="footer">
        <div className="footer_left">
          <div className="footer_logo">
            <img src={logo} alt="" />
          </div>
          <p>A Company of AVIPL</p>
          <div className="address foot-email">CONTACT US</div>
          <div className="address">
            {" "}
            Plot No.19, G1-Block, South City -II,<br></br>
            Gurugram<br></br>
            Haryana <br></br>
            India{" "}
          </div>
          <div className="address foot-no">
            Contact : +91-7976391232
          </div>
          <div className="address foot-email">
            Email : e-businessinnovator@avipl.in
          </div>
        </div>
        <div className="footer_mid">
          <div className="footer_options">
            <NavLink
             onClick={() => window.location.reload()}
             to={"/*"}
              className="footer_option"
            >Home
            </NavLink>
            
            <NavLink onClick={() => window.location.reload()}
            to={"/*"} className="footer_option">Courses
            </NavLink>

            
            <NavLink to="/contactus" className="footer_option">Contact Us
            </NavLink>

            {/* <NavLink to="/learninschool" className="footer_option">
              Learn In School
            </NavLink> */}

          </div>
          <div className="footer_socialmedia_icons">
            <div className="footer_socialmedia_icon">
              <a href={'https://www.instagram.com/codesandbots_/'} target="_blank">
                <img src={instagram} alt="insta-icon" />           
              </a>                  
            </div>
            
            <div className="footer_socialmedia_icon">
              <a href={'#'} target="_blank">
                <img src={youtube} alt="youtube-icon" />
              </a>
            </div>
            <div className="footer_socialmedia_icon">
              <a href={'https://www.linkedin.com/company/codesandbots/'} target="_blank">
                <img src={linkedin} alt="linkedin-icon" />  
              </a>
            </div>
            <div className="footer_socialmedia_icon">
              <a href={'https://twitter.com/codesandbots'} target="_blank">
                <img src={twitter} alt="twitter-icon" />
              </a>
            </div>
            <div className="footer_socialmedia_icon">
              <a href={'#'} target="_blank">
                <img src={facebook} alt="facebook-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer_right">
          <img src={footerImage} alt="" />
        </div>
      </div>
    </>
  );
}

export default Footer;
