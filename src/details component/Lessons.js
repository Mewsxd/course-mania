import React, { useEffect, useState } from "react";
import classes from "./Lessons.module.css";
const Lessons = (props) => {
  const arr = [];
  for (let i = 1; i < props.lessons; i++) {
    arr.push(
      <div className={classes.innerContainer}>
        <p className={classes.lessonNumber}>
          Lesson {i}: <span className={classes.lessonTitle}>Lesson Title</span>
        </p>
        <p className={classes.lessonDesc}>
          Lorem ipsum dolor sit amet. Nam provident provident sit autem
          perferendis et error.Lorem ipsum dolor sit amet. Nam provident
          provident sit autem perferendis et error.
        </p>
      </div>
    );
  }
  const [videoFrames, setVideoIframes] = useState([]); //Contains all the iframes of vidoes of a selected playlists
  const [videoData, setVideoData] = useState([]); // Contains general video data like title, descirption, etc with the help of part=snippet
  useEffect(() => {
    const data = props.playListItemData.map(
      (item) => item?.snippet?.resourceId?.videoId
    );
    console.log(data);
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAKziylTfWS6CQcdrtez4TeNafZtKAeGFo&part=snippet&id=${data}`
    )
      .then((res) => res.json())
      .then((data) => setVideoData(data.items));
  }, [props.playListItemData]);
  useEffect(() => {
    const data = props.playListItemData.map(
      // data contains all the video ids of individual videos needed for extracting iframes from video endpoint
      (item) => item?.snippet?.resourceId?.videoId
    );
    async function fetchVideoData() {
      const req = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAKziylTfWS6CQcdrtez4TeNafZtKAeGFo&part=player&id=${data}&maxWidth=200`
      );
      const res = await req.json();
      const urls = res?.items?.map((item) => {
        return item?.player?.embedHtml;
      });
      setVideoIframes(urls);
    }
    fetchVideoData();
  }, [props.playListItemData]);
  console.log(videoData);
  return (
    <div className={classes.container}>
      <p className={classes.title}>Lessons</p>
      {videoFrames?.map((item, index) => {
        return (
          <div className={classes.innerContainer}>
            <p className={classes.lessonNumber}>
              Lesson {index + 1}:{" "}
              <span className={classes.lessonTitle}>
                {videoData[index]?.snippet?.title}
              </span>
            </p>
            <div className={classes.videoContainer}>
              <div dangerouslySetInnerHTML={{ __html: item }}></div>
              <p className={classes.lessonDesc}>
                {videoData[index]?.snippet?.description}
              </p>
            </div>
          </div>
        );
      })}
      {arr}

      {/* <p className={classes.readMore}>Read more</p> */}
      {/* <div className={classes.innerContainer}>
        <p className={classes.lessonNumber}>
          Lesson 1: <span className={classes.lessonTitle}>Lesson Title</span>
        </p>
        <p className={classes.lessonDesc}>
          Lorem ipsum dolor sit amet. Nam provident provident sit autem
          perferendis et error.Lorem ipsum dolor sit amet. Nam provident
          provident sit autem perferendis et error.
        </p>
      </div> */}
    </div>
  );
};

export default Lessons;
