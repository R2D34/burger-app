import React from "react";

import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideDrawerToggle from "../SideDrawerToggle/SideDrawerToggle";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <SideDrawerToggle clicked={props.toggleSideDrawer}>MENU</SideDrawerToggle>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems isAuth={props.isAuth} />
    </nav>
  </header>
);

export default toolbar;
