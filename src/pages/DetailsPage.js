import React from "react";
import Navbar from "../components/Navbar";
import vid from "../assets/vid.mp4";
import thumb1 from "../assets/thumbnail1.svg";
import ReactPlayer from "react-player";
import playerIcon from "../assets/play icon.svg";
import classes from "./DetailsPage.module.css";
import { BiUser } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";
import { BsClock } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import "../home components/Stars.css";
import DetailsSection from "../details component/DetailsSection";
import Lessons from "../details component/Lessons";
import WriteReview from "../details component/WriteReview";
import { useNavigate, useParams } from "react-router-dom";
import coursesData from "../data";
import leftArrow from "../assets/Vector  (Stroke).svg";
// import coursesData from "../data";
const DetailsPage = () => {
  const { courseId } = useParams();
  const course = coursesData.find((data) => data.id === courseId);
  console.log(course);
  const arr = [];
  for (let i = 0; i < course.stars; i++) {
    arr.push(
      <span
        style={{ marginRight: "0.5vw", fontSize: "3rem" }}
        key={i}
        // STARS CLASS IS IN Stars.css
        className="fa fa-star checked stars"
      ></span>
    );
  }
  const navigate = useNavigate();
  function onBackClick() {
    navigate("..");
  }
  return (
    <div className={classes.mainContainer} style={{ textAlign: "center" }}>
      <div className={classes.detailsOuterContainer}>
        <div className={classes.detailsInnerContainer}>
          <div
            style={{ display: "flex", cursor: "pointer" }}
            onClick={onBackClick}
          >
            <img src={leftArrow} />
            <p className={classes.back}> Back</p>
          </div>
          <h1 className={classes.title}>{course.title}</h1>
          <ReactPlayer
            style={{ margin: "0 auto" }}
            width="80vw"
            height="37vw"
            className={classes.videoFrame}
            // className="react-player"
            url={vid}
            light={course.image}
            playing
            controls
            playIcon={<img src={playerIcon} style={{ width: "12%" }} />}
          />
          <section>
            <div className={classes.courseInfoBox}>
              <div className={classes.courseInfo}>
                <BiUser className={classes.courseIcon} />
                <p>
                  Creator : <span>{course.creator}</span>
                </p>
              </div>
              <div className={classes.courseInfo}>
                <FiUpload className={classes.courseIcon} />
                <p>
                  Uploaded on : <span>{course.uploadDate}</span>
                </p>
              </div>
              <div className={classes.courseInfo}>
                <BsClock className={classes.courseIcon} />
                <p>
                  Duration : <span>{course.duration}</span>
                </p>
              </div>
              <div className={classes.courseInfo}>
                <TbWorld className={classes.courseIcon} />
                <p>
                  Language : <span>{course.language} </span>
                </p>
              </div>
              {course.free ? (
                <p className={classes.free}>Free</p>
              ) : (
                <p
                  className={classes.free}
                  style={{ backgroundColor: "green" }}
                >
                  ${course.price}
                </p>
              )}
            </div>
            <button className={classes.enrollButton}>Enroll Now</button>
            <div style={{ color: "gold" }} className={classes.rating}>
              {/* STARS IS IN ARR */}
              {arr}
              <p>({course.rating})</p>
            </div>
          </section>
          <DetailsSection />
          <Lessons lessons={course.lessons} />
          <WriteReview />
        </div>
        <img className={classes.logo} src={course.logo} />
      </div>
    </div>

    // </main>
  );
};

export default DetailsPage;
