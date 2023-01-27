import React, { useState, useEffect, useRef } from "react";
import CitySection from "./CitySection/CitySection";
import classes from "./LoginSection.module.scss";

function LoginSection(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [nameInputColor, setNameInputColor] = useState(classes.inputBox);
  const [surnameInputColor, setSurnameInputColor] = useState(classes.inputBox);
  let [nameStatus, seteNameStatus] = useState(false);
  let [surnameStatus, setSurnameStatus] = useState(false);
  function handlerName(e) {
    setName(e.target.value);
  }

  function handlerSurname(e) {
    setSurname(e.target.value);
  }
  useEffect(() => {
    props.name({ name: name, nameStatus: nameStatus });
    props.surname({ surname: surname, surnameStatus: surnameStatus });
  }, [name, surname, nameStatus, surnameStatus]);

  const isInitialMountName = useRef(true);
  useEffect(() => {
    if (isInitialMountName.current) {
      isInitialMountName.current = false;
    } else {
      if (name.length === 0) {
        setNameInputColor(classes.inputBox);
        seteNameStatus(false);
      } else {
        if (name.length > 0 && name.length < 2) {
          setNameInputColor(classes.redBorder);
          seteNameStatus(false);
        } else {
          if (/^[А-ЯЁ]+$/i.test(name)) {
            setNameInputColor(classes.inputBox);
            seteNameStatus(true);
          } else {
            setNameInputColor(classes.redBorder);
            seteNameStatus(false);
          }
        }
      }
    }
  }, [name]);

  const isInitialMountSurame = useRef(true);
  useEffect(() => {
    if (isInitialMountSurame.current) {
      isInitialMountSurame.current = false;
    } else {
      if (surname.length === 0) {
        setSurnameInputColor(classes.inputBox);
        setSurnameStatus(false);
      } else {
        if (surname.length > 0 && surname.length < 2) {
          setSurnameInputColor(classes.redBorder);
          setSurnameStatus(false);
        } else {
          if (/^[А-ЯЁ]+$/i.test(surname)) {
            setSurnameInputColor(classes.inputBox);
            setSurnameStatus(true);
          } else {
            setSurnameInputColor(classes.redBorder);
            setSurnameStatus(false);
          }
        }
      }
    }
  }, [surname]);

  return (
    <div className={classes.section}>
      <div className={classes.inputSection}>
        <div className={classes.importantStar}>Имя</div>
        <div className={classes.inputArea}>
          <input
            className={nameInputColor}
            type="text"
            value={name}
            onChange={handlerName}
            placeholder="Введите имя"
          ></input>
          {/* <p>красное предупреждение</p> */}
        </div>
        <p>Должен содержать не менее 2 символов и только кириллица.</p>
      </div>

      <div className={classes.inputSection}>
        <div className={classes.importantStar}>Фамилия</div>
        <div className={classes.inputArea}>
          <input
            className={surnameInputColor}
            type="text"
            value={surname}
            onChange={handlerSurname}
            placeholder="Введите фамилию"
          ></input>
          {/* <p>красное предупреждение</p> */}
        </div>
        <p>Должен содержать не менее 2 символов и только кириллица.</p>
      </div>

      <CitySection city={props.city} />
    </div>
  );
}
export default LoginSection;
