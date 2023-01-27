import React from "react";
import classes from "./Button.module.scss";

function Button(props) {
  return (
    <button className={classes.button} onClick={props.onClick}>
      Изменить
    </button>
  );
}
export default Button;
