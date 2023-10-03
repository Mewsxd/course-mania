import React from "react";
import classes from "./WriteReview.module.css";
import stars from "../assets/stars.svg";
const WriteReview = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>Write A Review</p>
      <div className={classes.textAreaContainer}>
        <textarea rows={3} placeholder="Type something"></textarea>
        <button className={classes.submitButton}>
          <img src={stars} />
        </button>
      </div>
      <h5>View Other's Reviews</h5>
    </div>
  );
};

export default WriteReview;
