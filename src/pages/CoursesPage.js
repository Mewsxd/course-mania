import React, { useEffect, useState } from "react";
import classes from "./CoursesPage.module.css";
import Courses from "../home components/Courses";
import downwardarrow from "../assets/arrow2.svg";
import youtube from "../assets/youtube.svg";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
const PopularCourses = () => {
  const [playListData, setPlayListData] = useState([]);
  // const [playListItemIds, setPlayListItemIds] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch(
          "https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyAKziylTfWS6CQcdrtez4TeNafZtKAeGFo&part=snippet&channelId=UCifWfwxTfOYYoczCWmIY8bA&maxResults=50"
        );
        const res = await req.json();
        const data = res?.items;
        setPlayListData(data);
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts
  // const data = playListData.slice(0, 3);
  // console.log(data);
  console.log(playListData);
  return (
    <>
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
            </div>
          </section>
        </div>
        <section className={classes.lower}>
          {playListData.map((item) => (
            <Courses
              id={item?.id}
              img={
                item?.snippet?.thumbnails?.standard?.url
                  ? item?.snippet?.thumbnails?.standard?.url
                  : item?.snippet?.thumbnails?.medium?.url
              }
              tag="Best Seller"
              p1={item?.snippet?.title}
              p2="Duration: 1hr 20mins"
              logo={youtube}
              type="View Course"
            />
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PopularCourses;
{
  /* <Courses
              id={item.id}
              img={
                item?.snippet?.thumbnails?.standard?.url
                  ? item?.snippet?.thumbnails?.standard?.url
                  : item?.snippet?.thumbnails?.medium?.url
              }
              tag="Best Seller"
              p1={item?.snippet?.title}
              p2="Duration : 1hour 12mins"
              logo={youtube}
              type="View Course"
            /> */
}
{
  /* <Courses
            id={item?.id}
            img={
              item?.snippet?.thumbnails?.medium?.url ||
              item?.snippet?.thumbnails?.medium.url ||
              item?.snippet?.thumbnails?.default?.url
            }
            tag="Best Seller"
            p1={item?.snippet?.title}
            p2="Duration : 1hour 12mins"
            price="Free"
            logo={youtube}
            type="View Course"
          /> */
}
