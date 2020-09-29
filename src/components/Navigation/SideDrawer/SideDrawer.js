import React from "react";
import Aux from "../../../hoc/AuxHoc";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./SideDrawer.css";

const SideDrawer = (props) => {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  if (props.isOpen) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }

  return (
    <Aux>
      <Backdrop clicked={props.closed} show={props.isOpen} />
      <div className={attachedClasses.join(" ")}>
        <div className={styles.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
