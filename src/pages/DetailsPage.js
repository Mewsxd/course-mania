import React, { useEffect, useState } from "react";
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
  const { courseId } = useParams(); // id of each particular playlist
  const course = coursesData.find((data) => data.id === courseId);
  const [playListItemData, setPlayListItemData] = useState([]);
  // const [playListItemIds, setPlayListItemIds] = useState([]);
  const [videoIframes, setVideoIframes] = useState([]); // Stores all the iframe links of the playlist videos
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${courseId}&part=snippet&maxResults=50&key=AIzaSyAKziylTfWS6CQcdrtez4TeNafZtKAeGFo`
    )
      .then((res) => res.json())
      .then((data) => setPlayListItemData(data.items));
  }, []);
  // console.log(playListItemData);
  const navigate = useNavigate();
  function onBackClick() {
    navigate("..");
  }

  useEffect(() => {
    const data = playListItemData.map(
      (item) => item?.snippet?.resourceId?.videoId
    );
    async function fetchVideoData() {
      const req = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAKziylTfWS6CQcdrtez4TeNafZtKAeGFo&part=player&id=${data}&maxWidth=1200`
      );
      const res = await req.json();
      const urls = res?.items?.map((item) => {
        return item?.player?.embedHtml;
      });
      setVideoIframes(urls);
    }
    fetchVideoData();
  }, [playListItemData]);
  const date = new Date(playListItemData[0]?.snippet?.publishedAt);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
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
          <h1 className={classes.title}>
            {playListItemData[0]?.snippet?.title}
          </h1>
          {/* <ReactPlayer
            style={{ margin: "0 auto" }}
            width="80vw"
            height="37vw"
            className={classes.videoFrame}
            url={vid}
            light={course.image}
            playing
            controls
            playIcon={<img src={playerIcon} style={{ width: "12%" }} />}
          /> */}
          {/* <iframe
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/apzFDeBx3Ic?si=YLSkHgTq-Y8dLI-F"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
          {/* <iframe
            width="100%"
            height="600px"
            src="https://www.youtube.com/embed/videoseries?si=R4IwYd4Cm-vOD-nu&amp;list=PLyD1XCIRA3gSkjVojnOWF6x1F7s9Qa9x2"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
          {/* <iframe>{videoIframes[0]}</iframe> */}
          {/* {
            typeof (
              <iframe
                width="100%"
                height="600px"
                src="https://www.youtube.com/embed/videoseries?si=R4IwYd4Cm-vOD-nu&amp;list=PLyD1XCIRA3gSkjVojnOWF6x1F7s9Qa9x2"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            )
          }
          {videoIframes[0]} */}
          {/* {videoIframes[0]} */}
          <div
            className={classes.mainVideoFrame}
            dangerouslySetInnerHTML={{ __html: videoIframes[0] }}
          />
          <section>
            <div className={classes.courseInfoBox}>
              <div className={classes.courseInfo}>
                <BiUser className={classes.courseIcon} />
                <p>
                  Creator : <span>Naresh Jasotani</span>
                </p>
              </div>
              <div className={classes.courseInfo}>
                <FiUpload className={classes.courseIcon} />
                <p>
                  Uploaded on :{" "}
                  <span>
                    {day}/{month}/{year}
                  </span>
                </p>
              </div>
              <div className={classes.courseInfo}>
                <BsClock className={classes.courseIcon} />
                <p>
                  Duration : <span>{course?.duration}</span>
                </p>
              </div>
              <div className={classes.courseInfo}>
                <TbWorld className={classes.courseIcon} />
                <p>
                  Language : <span>English </span>
                </p>
              </div>
              <p className={classes.free}>Free</p>
            </div>
            <button className={classes.enrollButton}>Enroll Now</button>
            <div></div>
            {/* <div style={{ color: "gold" }} className={classes.rating}>
              {arr}
              <p>({course.rating})</p>
            </div> */}
          </section>
          <DetailsSection details={playListItemData[0]?.snippet?.description} />
          <Lessons
            lessons={course?.lessons}
            playListItemData={playListItemData}
          />
        </div>
        <div className={classes.logo}>
          Bharati DW
          <br /> Consultancy
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
