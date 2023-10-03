import React from "react";
import classes from "./InstructedCourses.module.css";
import person1 from "../assets/person1.svg";
import person2 from "../assets/person2.svg";
import person3 from "../assets/person3.svg";
import person4 from "../assets/person4.svg";
import plant from "../assets/plant.svg";
import "./Stars.css";
const InstructedCourses = () => {
  return (
    <main className={classes.outerContainer}>
      <div className={classes.mainContainer}>
        <p className={classes.mainTitle}>Instructed Courses</p>
        <div className={classes.titleDescription}>
          <p>
            Want someone to instruct you? No worries, here we introduce our
            CourseMania’s online Tutors to assist & guide you in your
            professional Path
          </p>
          <button>Find a Tutor</button>
        </div>
        <p className={classes.peopleTitle}>Meet Our Popular Tutors</p>
        <div className={classes.personContainer}>
          <div className={classes.person}>
            <img src={person1} alt="" />
            <p className={classes.name}>Robert James</p>
            <p className={classes.role}>UI/UX Designer</p>
            <p>56 Courses</p>{" "}
            {/* THIS IS TARGETED AT 4TH P ELEMENT INSIDE PERSON CLASS IN CSS  */}
            <p className={classes.rating}>
              <span className="fa fa-star stars"></span>
              4.9
              <span> (76,335)</span>
            </p>
          </div>
          <div className={classes.person}>
            <img src={person2} alt="" />
            <p className={classes.name}>Jessica thomas</p>
            <p className={classes.role}>Graphic Designer</p>
            <p>62 Courses</p>
            <p className={classes.rating}>
              <span className="fa fa-star stars"></span> 4.9{" "}
              <span>(87,532)</span>
            </p>
          </div>
          <div className={classes.person}>
            <img src={person3} alt="" />
            <p className={classes.name}>Selena Mathew</p>
            <p className={classes.role}>Full Stach Developer</p>
            <p>37 Courses</p>
            <p className={classes.rating}>
              <span className="fa fa-star stars"></span>
              4.8 <span>(68,868)</span>
            </p>
          </div>
          <div className={classes.person}>
            <img src={person4} alt="" />
            <p className={classes.name}>Tom Henry </p>
            <p className={classes.role}>SQL,Tableu</p>
            <p>46 Courses</p>
            <p className={classes.rating}>
              <span className="fa fa-star stars"></span> 4.9{" "}
              <span>(88,973)</span>
            </p>
          </div>
        </div>
      </div>
      <img className={classes.plant} src={plant} alt="" />
    </main>
  );
};

export default InstructedCourses;
