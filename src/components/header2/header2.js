import React, { useState, useEffect } from "react";
import "../header2/header2.css";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../asset-img/codesandbots logo.svg";
import { NavLink, useHistory } from "react-router-dom";
// import Avatar from "@mui/material/Avatar";
// import ava from "../../asset-img/avatar.svg";
// import { axioss } from "../api/api";


export default function Header({ dropdown, setdropdown }) {
  
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 760) {
                var drop = document.getElementById("header_right");
                if (drop.className === "header_right content-mobile-header_right") {
                    drop.className = "header_right";
                }
            }
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    let h = useHistory();

    function OnClick() {
        var drop = document.getElementById("header_right");
        if (drop.className === "header_right") {
            drop.className += " content-mobile-header_right";
        } else {
            drop.className = "header_right";
        }
    }


    // const Logout = () => {
    //     axioss({ method: "post", url: "/logout" })
    //     .then((res) => {
    //         localStorage.clear();
    //         h.push("/");
    //         window.location.reload();
    //     })
    //     .catch((Err) => {
    //         // console.log(Err);
    //     });
    // };

//   const [avatarDrop, setavatarDrop] = useState(false);

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


return (
    <header className="content-header">
        <div className="header-logo image" style={{ backgroundImage: `url('${logo}')` }}>
        </div>
        
        <div className="header-search-head">
            <input type="search" placeholder="What you want to do today? " />
            <SearchIcon className="search-icon" />
        </div>
        
        {/* <div className="image header-menu-logo" onClick={() => {OnClick();}}>
        </div> */}

        <div id="header_right" className="header_right">
            <div className="header-header_options">

                <NavLink to={"/"} className="header-header_link header_none">
                    <h3>Home</h3>
                </NavLink>

                <NavLink to={"/"} className="header-header_link header_none">
                <div class="dropdown">
                    <button class="dropbtn2"><h3>Courses</h3></button>
                    <div class="dropdown-content">
                        {/* <div><a href="#">IOT</a></div> */}
                        {LowerCard("IOT")}
                        {LowerCard("Coding")}
                        {LowerCard("Robotics")}
                        {LowerCard("Rubics Cube")}</div>
                    </div>
                </NavLink>
                
                <NavLink to={"/contactus"} className="header-header_link header_none">
                    <h3>Contact Us</h3>
                </NavLink>

            </div>

            {/* <Avatar onClick={() => {setavatarDrop(!avatarDrop);}}
                style={{ cursor: "pointer" }}
                className="header-head-avatar"
                src={}
            /> */}
            
            {/* {avatarDrop ? (
            <div className="header-avatar-dropdown">
                {localStorage.getItem("Token") ? (
                    <NavLink to="/">
                        <p>My Account</p>
                    </NavLink>
                    ) : (
                    <NavLink to="/sign-in">
                        <p>Login</p>
                    </NavLink>
                )}

                {localStorage.getItem("Token") ? (
                    <NavLink to="#">
                        <p>My Class</p>
                    </NavLink>
                ) : null}
                
                {localStorage.getItem("Token") ? (
                    <NavLink to="/" onClick={() => {Logout();}}>
                        <p>Logout</p>
                    </NavLink>
                ) : null} */}

            {/* </div>
            
            ) : null} */}

        </div>
    </header>
);
}