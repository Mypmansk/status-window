import React, { useState, useEffect, useRef } from "react";
import classes from "./PasswordSection.module.scss";

function PasswordSection(props) {
  const [Pass, setPass] = useState("");
  const [RepeetPass, setRepeetPass] = useState("");

  let [inputPassStatus, setInputPassStatus] = useState(false);
  let [passStatus, setPassStatus] = useState(false);

  const [inputColor, setInputColor] = useState(classes.inputBox);
  const [RepeetInputColor, setRepeetInputColor] = useState(classes.inputBox);

  function handlerPass(e) {
    setPass(e.target.value);
  }

  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (Pass.length === 0) {
        setInputColor(classes.inputBox);
        setInputPassStatus(false);
      } else {
        if (/^[A-Z]{6,14}$/i.test(Pass)) {
          setInputColor(classes.inputBox);
          setInputPassStatus(true);
        } else {
          setInputColor(classes.redBorder);
          setInputPassStatus(false);
        }
      }
    }
  }, [Pass]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (RepeetPass.length === 0) {
        setRepeetInputColor(classes.inputBox);
      } else {
        if (inputPassStatus & (Pass === RepeetPass)) {
          setRepeetInputColor(classes.inputBox);
          setPassStatus(true);
        } else {
          if (Pass !== RepeetPass) {
            setRepeetInputColor(classes.redBorder);
            setPassStatus(false);
          }
        }
      }
    }
  }, [inputPassStatus, Pass, RepeetPass]);

  useEffect(() => {
    props.password({ pass: Pass, passStatus: passStatus });
  }, [Pass, passStatus]);

  function handlerPassRepeat(e) {
    setRepeetPass(e.target.value);
  }

  return (
    <div className={classes.section}>
      <div className={classes.inputSection}>
        <div className={classes.nonImportant}>Пароль</div>
        <div className={classes.inputArea}>
          <input
            className={inputColor}
            type="text"
            value={Pass}
            onChange={handlerPass}
            placeholder="Введите Пароль"
          ></input>
          {/* <p>красное предупреждение</p> */}
        </div>
        <p>Должен содержать не менее 6 символов и только латинские буквы.</p>
      </div>

      <div className={classes.inputSection}>
        <div className={classes.importantStar}>Пароль еще раз</div>
        <div className={classes.inputArea}>
          <input
            className={RepeetInputColor}
            type="text"
            value={RepeetPass}
            onChange={handlerPassRepeat}
            placeholder="Повторите Пароль"
          ></input>
          {/* <p>красное предупреждение</p> */}
        </div>
        <p>Проверка на совпадение с паролем.</p>
      </div>
    </div>
  );
}
export default PasswordSection;
