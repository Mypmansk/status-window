import React, { useRef, useEffect, useState } from "react";
import classes from "./CitySection.module.scss";
import Option from "./Option/Option";

function CitySection(props) {
  const ref = useRef();
  const [cityName, setCityName] = useState();

  useEffect(() => {
    props.city({ city: ref.current.value });
  }, [cityName]);

  function selectedCity(e) {
    setCityName(e.target.value);
  }

  return (
    <div className={classes.inputSection}>
      <div className={classes.nonImportant}>Ваш город</div>
      <select
        name="city"
        className={classes.inputBox}
        ref={ref}
        onChange={selectedCity}
      >
        <Option />
      </select>
    </div>
  );
}
export default CitySection;
