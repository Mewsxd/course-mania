// import logo from './logo.svg';
// import './App.css';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";
import Home from "./pages/Home";
// import Detail from "./details component/Detail";
import LayoutComponent from "./LayoutComponent";
import { useEffect, useState } from "react";
import CoursesPage, { loader } from "./pages/CoursesPage";
// import CP from "./pages/CP";
function App() {
  // "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAKziylTfWS6CQcdrtez4TeNafZtKAeGFo&q=BharatiDWConsultancy&type=video&part=snippet"
  // "https://www.googleapis.com/youtube/v3/channels?key=AIzaSyAKziylTfWS6CQcdrtez4TeNafZtKAeGFo&id=UCifWfwxTfOYYoczCWmIY8bA&part=snippet"
  // "https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLyD1XCIRA3gRU_E_N863_Oiatc5EKPtp5&part=snippet&maxResults=50&key=AIzaSyAKziylTfWS6CQcdrtez4TeNafZtKAeGFo"
  const [playListIds, setPlayListIds] = useState([]);
  const [playListItemIds, setPlayListItemIds] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch(
          "https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyAKziylTfWS6CQcdrtez4TeNafZtKAeGFo&part=snippet&channelId=UCifWfwxTfOYYoczCWmIY8bA&maxResults=6"
        );
        const res = await req.json();
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  useEffect(() => {
    if (playListIds.length > 0) {
      // console.log(playListIds);
      const fetchPlayListItems = async () => {
        try {
          const req = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playListIds[0]}&part=snippet&maxResults=50&key=AIzaSyAKziylTfWS6CQcdrtez4TeNafZtKAeGFo`
          );
          const res = await req.json();
          const data = res?.items?.map(
            (item) => item?.snippet?.resourceId?.videoId
          );
          setPlayListItemIds(data);
        } catch (error) {
          console.error("Error fetching playlist items:", error);
        }
      };

      fetchPlayListItems();
    }
  }, [playListIds]);

  useEffect(() => {
    if (playListItemIds.length > 0) {
      const fetchVideoFrames = async () => {
        try {
          const req = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAKziylTfWS6CQcdrtez4TeNafZtKAeGFo&part=player&id=${playListItemIds.join(
              ","
            )}`
          );
          const res = await req.json();
          const data = res?.items?.map((item) => item.player.embedHtml);
          // console.log(data);
        } catch (error) {
          console.error("Error fetching video frames:", error);
        }
      };

      fetchVideoFrames();
    }
  }, [playListItemIds]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutComponent />,
      children: [
        { index: true, element: <Home /> },
        { path: ":courseId", element: <DetailsPage /> },
        { path: "courses", element: <CoursesPage /> },
        { path: "courses/:courseId", element: <DetailsPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
