import React from "react";
import classes from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.info}>
          <input placeholder="Search for courses" />
          <p>Explore what professionals like you are learning the most</p>
          <button>Visit courses</button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
