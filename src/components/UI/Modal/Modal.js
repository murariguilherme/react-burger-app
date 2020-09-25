import React from "react";
import Aux from "../../../hoc/AuxHoc";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.css";

const Modal = (props) => (
  <Aux>
    <Backdrop clicked={props.modalClosed} show={props.show} />
    <div
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
      className={styles.Modal}
    >
      {props.children}
    </div>
  </Aux>
);

export default Modal;
