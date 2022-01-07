import React, { useState } from "react";
import { useHistory } from "react-router";
import register_pic from "./register_pic.PNG";
import "./Register.css";

const Register = () => {
  const history = useHistory();

  const [user, setuser] = useState({
    firstName: "",
    lastName: "",
    Emailid: "",
    PhoneNo: "",
    Subject: "Robotics",
  });

  const [error, seterror] = useState({
    userfirstName: "",
    userlastName: "",
    userEmailid: "",
    userPhoneNo: "",
    userSubject: "",
  });
  let name, value;
  const getuserdata = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, Emailid, PhoneNo, Subject } = user;
    // const {
    //   userfirstName,
    //   userlastName,
    //   userEmailid,
    //   userPhoneNo,
    //   userSubject,
    // } = error;
    if (!firstName) {
      error.userfirstName = "Required";
      seterror(() => ({
        userfirstName: error.userfirstName,
      }));
    } else if (firstName.length < 3) {
      error.userfirstName = "Name must contain atleast 3 character";
      seterror(() => ({
        userfirstName: error.userfirstName,
      }));
    } else if (!lastName.trim()) {
      error.userlastName = "Required";
      seterror(() => ({
        userlastName: error.userlastName,
      }));
    } else if (!Emailid) {
      error.userEmailid = "Required";
      seterror(() => ({
        userEmailid: error.userEmailid,
      }));
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Emailid)) {
      error.userEmailid = "Enter Valid Email Address";
      seterror(() => ({
        userEmailid: error.userEmailid,
      }));
    } else if (!PhoneNo) {
      error.userPhoneNo = "Required";
      seterror(() => ({
        userPhoneNo: error.userPhoneNo,
      }));
    } else if (PhoneNo.length != 10) {
      error.userPhoneNo = "Mobile Number must contain 10 digit";
      seterror(() => ({
        userPhoneNo: error.userPhoneNo,
      }));
    } else {
      setuser((prevdata) => ({
        ...(prevdata = null),
      }));
      history.push("/home");
    }
  };

  return (
    <div className="register_main">
      <h1>Register for live Class</h1>
      <div className="register_container">
        <form className="register_form" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={user.firstName}
              name="firstName"
              onChange={getuserdata}
              placeholder="First Name"
              className={error.userfirstName ? " error" : ""}
            />
            {error.userfirstName ? (
              <small className="errormessage">{error.userfirstName}</small>
            ) : null}
          </div>
          <div>
            <input
              type="text"
              value={user.lastName}
              name="lastName"
              onChange={getuserdata}
              placeholder="Last Name"
              className={error.userlastName ? " error" : ""}
            />
            {error.userlastName ? (
              <small className="errormessage">{error.userlastName}</small>
            ) : null}
          </div>
          <div>
            <input
              type="email"
              value={user.Emailid}
              name="Emailid"
              onChange={getuserdata}
              placeholder="Email id"
              className={error.userEmailid ? " error" : ""}
            />
            {error.userEmailid ? (
              <small className="errormessage">{error.userEmailid}</small>
            ) : null}
          </div>
          <div>
            <input
              type="number"
              value={user.PhoneNo}
              name="PhoneNo"
              onChange={getuserdata}
              placeholder="Phone Number"
              className={error.userPhoneNo ? " error" : ""}
            />
            {error.userPhoneNo ? (
              <small className="errormessage">{error.userPhoneNo}</small>
            ) : null}
          </div>
          <div>
            <select value={user.Subject} onChange={getuserdata} name="Subject">
              <option>Robotics</option>
              <option>IOT</option>
              <option>Rubics Cube</option>
              <option>Coding</option>
            </select>
          </div>
          <button onClick={handleSubmit}>Register</button>
        </form>
      </div>
      <div className="first_circle"></div>
      <div className="second_circle"></div>
      <img src={register_pic} alt="loading" className="register_image" />
    </div>
  );
};

export default Register;
