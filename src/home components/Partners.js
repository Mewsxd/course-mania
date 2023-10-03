import React from "react";
import classes from "./Partners.module.css";
import udemy1 from "../assets/udemy logo.png";
import udemy2 from "../assets/udemy.png";
import khan from "../assets/khan.png";
import khanlogo from "../assets/khan logo.png";
import coursera from "../assets/coursera.svg";
import cloud from "../assets/cloud.svg";
import udemy3 from "../assets/Udemy_Logo_3280x1712-scaled.jpg";
const Partners = () => {
  return (
    <div className={classes.outer}>
      <div className={classes.partners}>
        <div className={classes.logos}>
          <img
            src={udemy3}
            style={{ width: "80%" }}
            className={classes.first}
          />
        </div>
        <div className={classes.logos}>
          <img src={coursera} className={classes.second} />
        </div>
        <div className={classes.logos}>
          <img
            src={cloud}
            style={{ width: "140%" }}
            className={classes.third}
          />
        </div>
        <div className={classes.logos}>
          <img
            src="https://assets.website-files.com/6100439e3107e9f649d1f9fa/6100477a71d7bf39e2cfbe94_KeepLearingv4_KALogo.svg"
            style={{ width: "130%" }}
            className={classes.fourth}
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
