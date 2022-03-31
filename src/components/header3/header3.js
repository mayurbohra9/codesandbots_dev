import React, { useEffect, useState } from "react";
import "../header3/header3.css";
import logo from "../../asset-img/codesandbots logo.svg";
// import SearchIcon from "@mui/icons-material/Search";
import { NavLink, useHistory } from "react-router-dom";
// import { Logout } from "@mui/icons-material";
// import { axioss } from "../api/api";
// import { Dropdown } from 'react-bootstrap';
// import Regpopup from "../Regpopup/Regpopup";
// import Popup from "../Regpopup/Popup";

export default function Header({ dropdown, setdropdown }) {
  let h = useHistory();
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 760) {
        var drop = document.getElementById("header_right");
        if (drop.className === "header_right content-mobile-header_right") {
          drop.className = "header_right";
        }
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  // const Logout = () => {
  //   axioss({ method: 'post', url: '/logout' }).then((res) => {
  //     localStorage.clear();
  //     h.push('/');
  //     window.location.reload();
  //   }).catch((Err) => {
  //     // console.log(Err);
  //   })
  // }
  function OnClick() {
    var drop = document.getElementById("header_right");
    if (drop.className === "header_right") {
      drop.className += " content-mobile-header_right";
    } else {
      drop.className = "header_right";
    }
  }

  function LowerCard(name) {
    let history = useHistory();

    const handleCoursepage = (name) => {
      localStorage.setItem("course", name);
      history.push(`/content-page/${name}`);
    };

    return(
      <div className="learnbtn" onClick={() => handleCoursepage(name)}>{name}
    </div>
    );  
  }

  // const [isOpen, setIsOpen] = useState(false);
    
  //     const togglePopup = () => {
  //       setIsOpen(!isOpen);
  //     }

  return (
    <header>
      <div
        className="logo image"
        style={{ backgroundImage: `url('${logo}')` }}
      ></div>

      {/* <div className="header-search-head">
            <input type="search" placeholder="What you want to do today? " />
            <SearchIcon className="search-icon" />
      </div> */}
      <div
        className="image menu-logo"
        onClick={() => {
          OnClick();
        }}
      ></div>
      <div id="header_right3" className="header_right3">
        <div className="header_options">
          <NavLink
            to={"/"}
            className="header_link header_none"
          >
            <h3>Home</h3>
          </NavLink>


          {/* <NavLink
            onClick={() => window.location.reload()}
            to={"/home"}
            className="header_link header_none"
          >
            <h3>About</h3>
          </NavLink> */}

<NavLink
            onClick={() => window.location.reload()}
            to={"/home"}
            className="header_link header_none"
          >
      
          <div class="dropdown">
            <button class="dropbtn"><h3>Courses</h3></button>
            <div class="dropdown-content">
              {/* <div><a href="#">IOT</a></div> */}
              {LowerCard("IOT")}
              {LowerCard("Coding")}
              {LowerCard("Robotics")}
              {LowerCard("Rubik's Cubes")}</div>
          </div>

          </NavLink>

          

          <NavLink to={"/contactus"}
            className="header_link header_none"
          >
            <h3>Contact Us</h3>
          </NavLink>

          {/* {localStorage.getItem("Token") ? <NavLink
            onClick={() => window.location.reload()}
            to={"/e-commerce"}
            className="header_link header_none"
          >
            <h3>Shop</h3>
          </NavLink>
            : null} */}
          {/* <NavLink to="/learninschool" className="header_link header_none">
            <h3>Learn In School</h3>
          </NavLink> */}
        {/* </div> */}
        {/* <div className="header-buttons"> */}

          {/* <NavLink to={localStorage.getItem("Token") ? "/" : "/sign-in"} onClick={() => { if (localStorage.getItem("Token")) Logout(); }}>
            <div className="login header-btn">
              {localStorage.getItem("Token") ? "Logout" : "Log In"}              
            </div>
          </NavLink>

          <NavLink to={localStorage.getItem("Token") ? "/sign-in" : "/sign-up"} onClick={() => { if (localStorage.getItem("Token")) Logout(); }}>
            <div className="header-btn">
              {localStorage.getItem("Token") ? "" : "Sign Up"}
            </div>
          </NavLink> */}

          
          {/* <NavLink to="/register">
            {""}
            <div className="header-btn">Register</div>
          </NavLink> */}
          {/* <div>
          <input
            type="button"
            value="Register"
            onClick={togglePopup}
            className="header-btn"
          />

          {isOpen && <Popup

            content={<Regpopup/>}
            handleClose={togglePopup}
          />}
          </div> */}

        </div>
      </div>
    </header >
  );
}
