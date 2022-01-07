import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";

function Modal(props) {
  return (
    <div
      className={
        props.modal
          ? "modal_container modal_popup"
          : "modal_container modal_popdown"
      }
    >
      <div className="close_icon">
        <i class="fas fa-times " onClick={() => props.setmodal(false)}></i>
      </div>

      <h1>Live online instructor led training starting soon.</h1>
      <p>
        Now learn Robotics,Coding and internet of Things,Artificial
        Intelligence,AR,VR right from home by industry Experts live online
        Batches starting soon.Register now to book your slot and get details
        about your batch and starting data.
      </p>
      <Link to="/register" className="register_button">
        Register Now
      </Link>
    </div>
  );
}

export default Modal;
