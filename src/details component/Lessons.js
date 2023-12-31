import React, { useEffect, useState } from "react";
import classes from "./Lessons.module.css";
const Lessons = (props) => {
  const [videoFrames, setVideoIframes] = useState([]); //Contains all the iframes of vidoes of a selected playlists
  const [videoData, setVideoData] = useState([]); // Contains general video data like title, descirption, etc with the help of part=snippet
  useEffect(() => {
    const data = props.playListItemData.map(
      (item) => item?.snippet?.resourceId?.videoId
    );
    // console.log(data);
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
  return (
    <div className={classes.container}>
      <p className={classes.title}>Lessons</p>
      {videoFrames?.map((item, index) => {
        return (
          <div className={classes.innerContainer} key={index}>
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
    </div>
  );
};

export default React.memo(Lessons);
