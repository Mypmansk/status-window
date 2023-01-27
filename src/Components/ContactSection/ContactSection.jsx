import React, { useEffect, useState } from "react";
import classes from "./ContactSection.module.scss";
import MailSection from "./MailSection/MailSection";
import TellNumber from "./TellNumber/TellNumber";

function ContactSection(props) {
  return (
    <div className={classes.section}>
      <TellNumber tell={props.tell} />
      <MailSection email={props.email} checkBox={props.checkBox} />
    </div>
  );
}
export default ContactSection;
