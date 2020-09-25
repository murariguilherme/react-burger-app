import React from "react";

import Aux from "../../hoc/AuxHoc";
import classes from "./Layout.css";

const layout = ({ children }) => (
  <Aux>
    <div>Toolbar, SideDrawer</div>
    <main className={classes.Content}>{children}</main>
  </Aux>
);

export default layout;
