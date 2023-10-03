import React from "react";
import classes from "./PopularCourses.module.css";
import Courses from "./Courses";
import img1 from "../assets/pic1.svg";
import img2 from "../assets/pic2.svg";
import img3 from "../assets/pic3.svg";
import cloud from "../assets/cloud.png";
import downwardarrow from "../assets/arrow2.svg";
import { NavLink } from "react-router-dom";
const PopularCourses = () => {
  return (
    <div className={classes.outerContainer}>
      <div className={classes.upperContainer}>
        <section className={classes.upper}>
          <div className={classes.upperLeft}>
            <p>Popular Courses</p>
          </div>
          <div className={classes.upperRight}>
            <p className={classes.title}>
              Professional Courses{" "}
              <span className={classes.downwardArrow}>
                <img src={downwardarrow} />
              </span>
            </p>
            <div className={classes.filterRight}>
              <div className={classes.checkbox}>
                <input type="checkbox" />
                <label>Free courses</label>
              </div>
              <div className={classes.checkbox}>
                <input type="checkbox" />
                <label>Paid courses</label>
              </div>
              {/* <div> */}
              <p style={{ color: "black" }}>
                Sort:{" "}
                <span>
                  Low To High{" "}
                  <span className={classes.downwardArrow}>
                    <img src={downwardarrow} />
                  </span>
                </span>
              </p>
            </div>
            {/* </div> */}
          </div>
        </section>
      </div>
      <section className={classes.lower}>
        {/* <NavLink to="/course-1"> */}
        <Courses
          id="course-1"
          img={img1}
          tag="Popular"
          stars={4}
          p1="Unconscious Bias"
          p2="Duration : 25mins"
          price="15.90"
          priceDescription="*Free"
          logo="https://assets.website-files.com/6100439e3107e9f649d1f9fa/6100477a71d7bf39e2cfbe94_KeepLearingv4_KALogo.svg"
          reviewNumbers="43,230"
          type="Enroll"
        />
        {/* </NavLink> */}
        <Courses
          id="course-2"
          img={img2}
          tag="Best Seller"
          stars={5}
          p1="Communication"
          p2="Duration : 50mins"
          price="15.90"
          logo={cloud}
          reviewNumbers="30,435"
          type="Buy"
        />
        <Courses
          id="course-3"
          img={img3}
          tag="Best Seller"
          stars={5}
          p1="Critical thinking"
          p2="Duration : 1hour 12mins"
          price="10.90"
          logo="https://assets.website-files.com/6100439e3107e9f649d1f9fa/6100477a71d7bf39e2cfbe94_KeepLearingv4_KALogo.svg"
          reviewNumbers="28,435"
          type="Buy"
        />
      </section>
    </div>
  );
};

export default PopularCourses;
