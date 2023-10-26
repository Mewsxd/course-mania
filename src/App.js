import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";
import Home from "./pages/Home";
// import Detail from "./details component/Detail";
import LayoutComponent from "./LayoutComponent";
import { useEffect, useState } from "react";
import CoursesPage, { loader } from "./pages/CoursesPage";
import CertificateForm, { action } from "./pages/CertificateForm";
import FormComponent from "./components/FormComponent";
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

  // useEffect(() => {
  //   const apiFetch = async () => {
  //     const url =
  //       "https://plant-classifier.p.rapidapi.com/plantclassifier/plantNames";
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "0173a24741msh96b83362ece6ed0p152485jsn9de054820b87",
  //         "X-RapidAPI-Host": "plant-classifier.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.text();
  //       console.log(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   apiFetch();
  // }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutComponent />,
      children: [
        { index: true, element: <Home /> },
        { path: ":courseId", element: <DetailsPage /> },
        { path: "courses", element: <CoursesPage /> },
        { path: "courses/:courseId", element: <DetailsPage /> },
        { path: "/formRegister", element: <CertificateForm />, action: action },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
