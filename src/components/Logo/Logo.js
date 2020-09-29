import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import styles from "./Logo.css";

const Logo = () => {
  return (
    <div className={styles.Logo}>
      <img alt="" src={burgerLogo}></img>
    </div>
  );
};

export default Logo;
