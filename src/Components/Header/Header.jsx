import React from "react";
import classes from "./Header.module.scss";

function Header() {
  return (
    <div className={classes.header}>
      <p>Здравствуйте,&nbsp;</p>
      <p className={classes.userName}>Человек</p>
    </div>
  );
}
export default Header;
