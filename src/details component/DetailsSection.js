import React from "react";
import classes from "./DetailsSection.module.css";
const DetailsSection = (props) => {
  return (
    <div className={classes.container}>
      <p>Details</p>
      <p className={classes.tab}>
        {/* Lorem ipsum dolor sit amet. Nam provident provident sit autem
        perferendis et error.Lorem ipsum dolor sit amet. Nam provident provident
        sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam provident
        provident sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam
        provident provident sit autem perferendis et error.Lorem ipsum dolor sit
        amet. Nam provident provident sit autem perferendis et error.Lorem ipsum
        dolor sit amet. Nam provident provident sit autem perferendvis et
        error.Lorem ipsum dolor sit amet. Nam provident provident sit autem
        perferendis et error.Lorem ipsum dolor sit amet. Nam provident provident
        sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam provident
        provident sit autem perferendis et error.Lorem ipsum dolor sit amet. Nam
        provident provident sit autem perferendis et error. */}
        {props.details}
      </p>
    </div>
  );
};

export default DetailsSection;
