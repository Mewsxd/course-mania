import React, { useEffect, useState } from "react";
import classes from "./DetailsPage.module.css";
import { BiUser } from "react-icons/bi";
import { FiUpload } from "react-icons/fi";
import { BsClock } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import "../home components/Stars.css";
import DetailsSection from "../details component/DetailsSection";
import Lessons from "../details component/Lessons";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import coursesData from "../data";
import leftArrow from "../assets/Vector  (Stroke).svg";
const DetailsPage = () => {
  const { courseId } = useParams(); // id of each particular playlist

  // const course = coursesData.find((data) => data.id === courseId);
  const [playListItemData, setPlayListItemData] = useState([]);
  const [videoIframes, setVideoIframes] = useState([]); // Stores all the iframe links of the playlist videos
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${courseId}&part=snippet&maxResults=50&key=AIzaSyAKziylTfWS6CQcdrtez4TeNafZtKAeGFo`
    )
      .then((res) => res.json())
      .then((data) => setPlayListItemData(data.items));
  }, []);
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
  if (!playListItemData) {
    return <p>Loading...</p>;
  }
  const date = new Date(playListItemData[0]?.snippet?.publishedAt);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const originalString = playListItemData[0]?.snippet?.title;

  // Replace forward slashes with hyphens
  let modifiedCourseName = originalString?.replace(/\//g, "|");

  // Replace backward slashes with hyphens
  modifiedCourseName = modifiedCourseName?.replace(/\\/g, "|");

  console.log(modifiedCourseName);

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
                  Duration : <span>2hr 22mins</span>
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
            <Link to={`/certificateform/${modifiedCourseName}`}>
              <button className={classes.enrollButton}>
                Request for certification
              </button>
            </Link>
            <div></div>
          </section>
          <DetailsSection details={playListItemData[0]?.snippet?.description} />
          <Lessons
            // lessons={course?.lessons}
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
