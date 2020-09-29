import React, { useState } from "react";

import Aux from "../../hoc/AuxHoc";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.css";

const Layout = ({ children }) => {
  const [sideDrawerClosed, setSideDrawerClosed] = useState(false);

  const changeClosed = () => {
    setSideDrawerClosed(!sideDrawerClosed);
    return sideDrawerClosed;
  };

  return (
    <Aux>
      <Toolbar drawerToggleClicked={changeClosed} />
      <SideDrawer isOpen={!sideDrawerClosed} closed={changeClosed} />
      <div>Toolbar, SideDrawer</div>
      <main className={classes.Content}>{children}</main>
    </Aux>
  );
};

export default Layout;
