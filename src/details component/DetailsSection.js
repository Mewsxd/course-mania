import React from "react";
import classes from "./DetailsSection.module.css";
const DetailsSection = (props) => {
  return (
    <div className={classes.container}>
      <p>Details</p>
      <p className={classes.tab}>{props.details}</p>
    </div>
  );
};

export default DetailsSection;
