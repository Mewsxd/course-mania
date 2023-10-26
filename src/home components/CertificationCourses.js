import React, { useEffect, useState } from "react";
import classes from "./CertificationCourses.module.css";
import Courses from "./Courses";
import downwardarrow from "../assets/arrow2.svg";
import youtube from "../assets/youtube.svg";
const CertificationCourses = () => {
  const [playListData, setPlayListData] = useState([]); // stores the data of last 3 playlists
  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyAKziylTfWS6CQcdrtez4TeNafZtKAeGFo&part=snippet&channelId=UCifWfwxTfOYYoczCWmIY8bA&maxResults=6"
    )
      .then((res) => res.json())
      .then((data) => setPlayListData(data.items.slice(-3)));
  }, []);
  // console.log(playListData);
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
        {playListData?.map((item) => (
          <Courses
            key={item.id}
            id={item.id}
            img={item?.snippet?.thumbnails?.standard?.url}
            tag="Best Seller"
            p1={item?.snippet?.title}
            p2="Duration : 1hour 12mins"
            price="10.90"
            logo={youtube}
            reviewNumbers="12,434"
            type="View Course"
          />
        ))}
      </section>
    </div>
  );
};

export default CertificationCourses;
