import React, { useEffect, useRef, useState } from "react";
import classes from "./MailSection.module.scss";

function MailSection(props) {
  let [mailInput, setMailInput] = useState("");
  const [inputColor, setInputColor] = useState(classes.inputBox);
  let [emailStatus, setEmailStatus] = useState(false);
  let refData = useRef(props.email);
  let [checkboxStatus, setCheckboxStatus] = useState(false);

  function handlerMail(e) {
    setMailInput(e.target.value);
  }

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (mailInput.length === 0) {
        setInputColor(classes.inputBox);
        setEmailStatus(false);
      } else {
        if (/^[\w-.]+@[\w-]+\.[a-z]{2,4}$/i.test(mailInput)) {
          setInputColor(classes.inputBox);
          refData.email = mailInput;
          setEmailStatus(true);
        } else {
          setInputColor(classes.redBorder);
          setEmailStatus(false);
        }
      }
    }
  }, [mailInput]);

  let onClick = (e) => {
    if (checkboxStatus === false) {
      setCheckboxStatus(true);

      if (mailInput.length === 0) {
        setInputColor(classes.redBorder);
      }
    } else {
      setCheckboxStatus(false);
      setInputColor(classes.inputBox);
    }
  };

  useEffect(() => {
    props.checkBox(checkboxStatus);
  }, [checkboxStatus]);

  useEffect(() => {
    props.email({ email: mailInput, emailStatus: emailStatus });
  }, [mailInput, emailStatus]);

  return (
    <>
      <div className={classes.inputSection}>
        <div className={classes.nonImportant}>Электронная почта</div>
        <div className={classes.inputArea}>
          <input
            value={mailInput}
            className={inputColor}
            onChange={handlerMail}
            type="text"
          ></input>
        </div>
        <p>Проверка на валидность email.</p>
      </div>

      <div className={classes.inputSection}>
        <div className={classes.nonImportant}>Я согласен</div>
        <div className={classes.checkbox}>
          <input type="checkbox" name="agreement" onClick={onClick}></input>
          <label htmlFor="agreement">
            {" "}
            принимать актуальную информацию на емейл
          </label>
        </div>
      </div>
    </>
  );
}
export default MailSection;
