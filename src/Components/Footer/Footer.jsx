import React, { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import classes from "./Footer.module.scss";

function Footer(props) {
  let date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    time = date.toLocaleTimeString();

  let monthNames = [
    { id: 0, monthName: "января" },
    { id: 1, monthName: "февраля" },
    { id: 2, monthName: "марта" },
    { id: 3, monthName: "апреля" },
    { id: 4, monthName: "мая" },
    { id: 5, monthName: "июня" },
    { id: 6, monthName: "июля" },
    { id: 7, monthName: "августа" },
    { id: 8, monthName: "сентября" },
    { id: 9, monthName: "октября" },
    { id: 10, monthName: "ноября" },
    { id: 11, monthName: "декабря" },
  ];
  let MonthName = monthNames.find((item) => item.id === month).monthName;

  const [changeState, setChangeState] = useState('')
  const [dayState, setDayState] = useState('')
  const [monthNameState, setMonthNameState] = useState('')
  const [yearState, setYearState] = useState('')
  const [timeState, setTimeState] = useState('')


  useEffect(() => {
    setDayState(day)
    setMonthNameState(MonthName)
    setYearState(year)
    setTimeState(time)
  }, [props.dataChange])

  return (

    <div className={classes.lastChange}>
      <Button onClick={props.onClick} />
      <p className={changeState}>
        последние изменения {dayState} {monthNameState} {yearState} в {timeState}
      </p>
    </div>
  );
}
export default Footer;
