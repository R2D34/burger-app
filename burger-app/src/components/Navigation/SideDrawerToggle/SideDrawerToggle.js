import React from "react";

const sideDrawerToggle = (props) => (
  <div onClick={props.clicked}>{props.children}</div>
);

export default sideDrawerToggle;
