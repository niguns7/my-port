import React from 'react';
import Pic from "../../../assets/image.png";
import classes from "./Modal.module.css"

const Modal = () => {
  return (
    <div className={classes.Image}>
        <img src={Pic} alt="me"/>
    </div>
  )
}

export default Modal;