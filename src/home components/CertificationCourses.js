import React from "react";
import classes from "./CertificationCourses.module.css";
import Courses from "./Courses";
import certificationImage1 from "../assets/certification1.svg";
import certificationImage2 from "../assets/certification2.svg";
import certificationImage3 from "../assets/certification3.svg";
import cloud from "../assets/cloud.png";
import downwardarrow from "../assets/arrow2.svg";
const CertificationCourses = () => {
  return (
    <div className={classes.outerContainer}>
      <div className={classes.upperContainer}>
        <section className={classes.upper}>
          <div className={classes.upperLeft}>
            <p>Certification Courses</p>
          </div>
          <div className={classes.upperRight}>
            <div className={classes.checkbox}>
              <input type="checkbox" />
              <label>Free Certification</label>
            </div>
            <div className={classes.checkbox}>
              <input type="checkbox" />
              <label>Paid </label>
            </div>
            {/* <div> */}
            <p style={{ color: "black" }}>
              Sort:{" "}
              <span>
                Best Seller{" "}
                <span className={classes.downwardArrow}>
                  <img src={downwardarrow} />
                </span>
              </span>
            </p>
          </div>
        </section>
      </div>
      <section className={classes.lower}>
        <Courses
          id="course-4"
          img={certificationImage1}
          tag="Best Seller"
          stars={4}
          p1="Team Work"
          p2="Duration : 25mins"
          price="19.90"
          priceDescription="*Free"
          logo={cloud}
          reviewNumbers="24,100"
          type="Buy"
        />
        <Courses
          id="course-5"
          img={certificationImage2}
          tag="Best Seller"
          stars={5}
          p1="Leadership Skills"
          p2="Duration : 50mins"
          price="18.90"
          logo="https://assets.website-files.com/6100439e3107e9f649d1f9fa/6100477a71d7bf39e2cfbe94_KeepLearingv4_KALogo.svg"
          reviewNumbers="28,435"
          type="Buy"
        />
        <Courses
          id="course-6"
          img={certificationImage3}
          tag="Best Seller"
          stars={5}
          p1="Statistics"
          p2="Duration : 1hour 12mins"
          price="10.90"
          logo="https://assets.website-files.com/6100439e3107e9f649d1f9fa/6100477a71d7bf39e2cfbe94_KeepLearingv4_KALogo.svg"
          reviewNumbers="12,434"
          type="Buy"
        />
      </section>
    </div>
  );
};

export default CertificationCourses;
