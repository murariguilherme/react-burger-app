import React from "react";
import styles from "./Button.css";

const button = ({ children, clicked, btnType }) => (
  <button
    className={[styles.Button, styles[btnType]].join(" ")}
    onClick={clicked}
  >
    {children}
  </button>
);

export default button;
