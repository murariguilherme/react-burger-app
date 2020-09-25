import React from "react";
import styles from "./Backdrop.css";

const Backdrop = (props) =>
  props.show ? (
    <div onClick={props.clicked} className={styles.Backdrop}></div>
  ) : null;

export default Backdrop;
