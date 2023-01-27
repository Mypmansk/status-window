import "./App.scss";

import Header from "./Components/Header/Header";
import LoginSection from "./Components/LoginSection/LoginSection";
import PasswordSection from "./Components/PasswordSection/PasswordSection";
import ContactSection from "./Components/ContactSection/ContactSection";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";

function App() {
  const [dataName, setDataName] = useState("");
  const [dataSurname, setDataSurname] = useState("");
  const [dataCity, setDataСity] = useState("");
  const [dataPassword, setDataPassword] = useState("");
  const [dataTelNumber, setDataTelNumber] = useState("");
  const [dataEmail, setDataEmail] = useState("");
  const [dataCheckBox, setDataChekBox] = useState("");
  let [dataChange, setDataChange] = useState(0);

  function increment(dataChange) { setDataChange(dataChange + 1) };



  let externalInformation = [];

  const callbackName = (dataName) => {
    setDataName(dataName);
  };
  const callbackSurname = (dataSurname) => {
    setDataSurname(dataSurname);
  };
  const callbackCity = (dataCity) => {
    setDataСity(dataCity);
  };
  const callbackPassword = (dataPassword) => {
    setDataPassword(dataPassword);
  };
  const callbackNumber = (dataTelNumber) => {
    setDataTelNumber(dataTelNumber);
  };
  const callbackEmail = (dataEmail) => {
    setDataEmail(dataEmail);
  };
  const callbackcheckBox = (dataCheckBox) => {
    setDataChekBox(dataCheckBox);
  };

  externalInformation.push({ name: dataName.name });
  externalInformation.push({ surname: dataSurname.surname });
  externalInformation.push({ city: dataCity.city });
  externalInformation.push({ pass: dataPassword.pass });
  externalInformation.push({ tell: dataTelNumber.tell });
  externalInformation.push({ email: dataEmail.email });

  let onClick = (e) => {
    e.preventDefault();

    if (dataCheckBox) {
      if (
        dataName.nameStatus &
        dataSurname.surnameStatus &
        dataPassword.passStatus &
        dataTelNumber.tellStatus &
        dataEmail.emailStatus
      ) {
        console.log(JSON.stringify(externalInformation))
        increment(dataChange)
      } else {
        if (
          (dataTelNumber.tell.length === 0) &
          dataName.nameStatus &
          dataSurname.surnameStatus &
          dataPassword.passStatus &
          dataEmail.emailStatus
        ) {
          console.log(JSON.stringify(externalInformation))
          increment(dataChange)
        } else {
          alert("Проверьте правильность введенных данных!");
        }
      }
    } else {
      if (
        (dataTelNumber.tell.length === 0) &
        (dataEmail.email.length === 0) &
        dataName.nameStatus &
        dataSurname.surnameStatus &
        dataPassword.passStatus
      ) {
        console.log(JSON.stringify(externalInformation))
        increment(dataChange)
      } else {
        if (
          (dataTelNumber.tell.length !== 0) &
          dataTelNumber.tellStatus &
          (dataEmail.email.length === 0) &
          dataName.nameStatus &
          dataSurname.surnameStatus &
          dataPassword.passStatus
        ) {
          console.log(JSON.stringify(externalInformation))
          increment(dataChange)
        } else {
          if (
            (dataTelNumber.tell.length === 0) &
            (dataEmail.email.length !== 0) &
            dataEmail.emailStatus &
            dataName.nameStatus &
            dataSurname.surnameStatus &
            dataPassword.passStatus
          ) {
            console.log(JSON.stringify(externalInformation))
            increment(dataChange)
          } else {
            alert("Проверьте правильность введенных данных");
          }
        }
      }
    }
  };

  return (
    <div className="form">
      <Header />

      <LoginSection
        name={callbackName}
        surname={callbackSurname}
        city={callbackCity}
      />
      <PasswordSection password={callbackPassword} />
      <ContactSection
        tell={callbackNumber}
        email={callbackEmail}
        checkBox={callbackcheckBox}
      />
      <Footer onClick={onClick} dataChange={dataChange} />
    </div>
  );
}

export default App;
