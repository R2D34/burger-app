import React from "react";

import classes from "./NavigationItems.module.css";

import NavigationItem from "./NavigationItem/NavigationItem";
import { checkPropTypes } from "prop-types";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Burger Builderus
    </NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
    {props.isAuth ? (
      <NavigationItem link="/logout">Log out</NavigationItem>
    ) : (
      <NavigationItem link="/auth">Authenticate</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
