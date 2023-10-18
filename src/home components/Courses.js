import React from "react";
import classes from "./Courses.module.css";
import "./Stars.css";
import { Link, NavLink } from "react-router-dom";
const Courses = (props) => {
  return (
    <main>
      <div className={classes.container}>
        <img src={props.img} alt="" />
        <div className={classes.innerContainer}>
          <p>{props.p1}</p>
          <p>{props.p2}</p>
          <p>Free</p>
          <img className={classes.logo} src={props.logo} />
          {props.type === "Enroll" ? (
            <button>{props.type} Now</button>
          ) : (
            <NavLink to={props.id}>
              <button style={{ backgroundColor: "#178c8c", color: "white" }}>
                {props.type}
              </button>
            </NavLink>
          )}
          <h3>{props.tag}</h3>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to={props.id}>
          <h2>View More Info</h2>
        </Link>
      </div>
    </main>
  );
};

export default Courses;
