import React, { useEffect, useState } from "react";
import classes from "./PopularCourses.module.css";
import Courses from "./Courses";
import img1 from "../assets/pic1.svg";
import img2 from "../assets/pic2.svg";
import img3 from "../assets/pic3.svg";
import cloud from "../assets/cloud.png";
import downwardarrow from "../assets/arrow2.svg";
import youtube from "../assets/youtube.svg";
import { NavLink } from "react-router-dom";
const PopularCourses = () => {
  const [playListData, setPlayListData] = useState([]);
  const [playListItemIds, setPlayListItemIds] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch(
          "https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyAKziylTfWS6CQcdrtez4TeNafZtKAeGFo&part=snippet&channelId=UCifWfwxTfOYYoczCWmIY8bA&maxResults=6"
        );
        const res = await req.json();
        const data = res?.items;
        setPlayListData(data);
        // const data = res?.items;

        // const playList = data?.map((item) => item?.id);
        // setplayListData(playList);
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts
  const data = playListData.slice(0, 3);
  // console.log(data);
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
        {data.map((item) => (
          <Courses
            id={item.id}
            img={item.snippet.thumbnails.standard.url}
            tag="Best Seller"
            // stars={5}
            p1={item.snippet.title}
            p2="Duration : 1hour 12mins"
            price="Free"
            logo={youtube}
            // reviewNumbers="28,435"
            type="View Course"
          />
        ))}
        {/* <Courses
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
        /> */}
        {/* <NavLink to="/course-1"> */}
        {/* <Courses
          id="course-1"
          img={playListData[0]?.snippet?.thumbnails?.standard?.url}
          tag="Popular"
          stars={4}
          p1={playListData[0]?.snippet?.title}
          p2="Duration : 25mins"
          price="15.90"
          priceDescription="*Free"
          logo="https://assets.website-files.com/6100439e3107e9f649d1f9fa/6100477a71d7bf39e2cfbe94_KeepLearingv4_KALogo.svg"
          reviewNumbers="43,230"
          type="Enroll"
        />
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
        /> */}
      </section>
    </div>
  );
};

export default PopularCourses;
