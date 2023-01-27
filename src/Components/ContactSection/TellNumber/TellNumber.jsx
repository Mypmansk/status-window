import React, { useEffect, useRef, useState } from "react";
import classes from "./TellNumber.module.scss";

function TellNumber(props) {
  const [tellInput, setTelInput] = useState("");
  const [inputColor, setInputColor] = useState(classes.inputBox);
  const [tellStatus, setTellStatus] = useState(false);

  function handlerTell(e) {
    setTelInput(e.target.value);
  }

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (tellInput.length === 0) {
        setInputColor(classes.inputBox);
        setTellStatus(false);
      } else {
        if (/^\+7 ?\(\d{3}\) ?\d{3}[ -]?\d{2}[ -]?\d{2}$/.test(tellInput)) {
          setInputColor(classes.inputBox);
          setTellStatus(true);
        } else {
          setInputColor(classes.redBorder);
          setTellStatus(false);
        }
      }
    }
  }, [tellInput]);
  useEffect(() => {
    props.tell({ tell: tellInput, tellStatus: tellStatus });
  }, [tellInput, tellStatus]);
  return (
    <div className={classes.inputSection}>
      <div className={classes.nonImportant}>Номер телефона</div>
      <div className={classes.inputArea}>
        <input
          value={tellInput}
          className={inputColor}
          onChange={handlerTell}
          type="text"
          placeholder="+7 (***) ***-**-**"
        ></input>
        {/* <p>красное предупреждение</p> */}
      </div>
      <p>Маска с международным форматом “+ 7 (999) 999-99-99”.</p>
    </div>
  );
}
export default TellNumber;
