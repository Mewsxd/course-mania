import React from "react";
import classes from "./Lessons.module.css";
const Lessons = (props) => {
  const arr = [];
  for (let i = 1; i < props.lessons; i++) {
    arr.push(
      <div className={classes.innerContainer}>
        <p className={classes.lessonNumber}>
          Lesson {i}: <span className={classes.lessonTitle}>Lesson Title</span>
        </p>
        <p className={classes.lessonDesc}>
          Lorem ipsum dolor sit amet. Nam provident provident sit autem
          perferendis et error.Lorem ipsum dolor sit amet. Nam provident
          provident sit autem perferendis et error.
        </p>
      </div>
    );
  }
  return (
    <div className={classes.container}>
      <p className={classes.title}>Lessons</p>
      {arr}
      <p className={classes.readMore}>Read more</p>
      {/* <div className={classes.innerContainer}>
        <p className={classes.lessonNumber}>
          Lesson 1: <span className={classes.lessonTitle}>Lesson Title</span>
        </p>
        <p className={classes.lessonDesc}>
          Lorem ipsum dolor sit amet. Nam provident provident sit autem
          perferendis et error.Lorem ipsum dolor sit amet. Nam provident
          provident sit autem perferendis et error.
        </p>
      </div> */}
    </div>
  );
};

export default Lessons;
