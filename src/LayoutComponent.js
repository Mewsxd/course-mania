import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import lettuce from "./assets/lettuce.jpeg";
const LayoutComponent = () => {
  // const fs = require("fs");

  // const image = fs.readFileSync("YOUR_IMAGE.jpg", {
  //   encoding: "base64",
  // });
  // const [base64Image, setBase64Image] = useState(null);
  // file.addEventListener("change", (event) => {
  //   const selectedfile = event.target.files;
  //   if (selectedfile.length > 0) {
  //     const [imageFile] = selectedfile;
  //     const fileReader = new FileReader();
  //     fileReader.onload = () => {
  //       srcData = fileReader.result;
  //       console.log("base64:", srcData);
  //     };
  //     fileReader.readAsDataURL(imageFile);
  //   }
  // });
  // useEffect(() => {
  //   const imageUrl = { lettuce };
  //   fetch(imageUrl)
  //     .then((response) => response.arrayBuffer())
  //     .then((arrayBuffer) => {
  //       // Now, 'arrayBuffer' contains the binary content of the image
  //       const imageBlob = new Blob([arrayBuffer], { type: "image/jpeg" });

  //       const fileReader = new FileReader();
  //       fileReader.onload = () => {
  //         const srcData = fileReader.result;
  //         setBase64Image(srcData);
  //         console.log("base64:", srcData);
  //       };

  //       fileReader.readAsDataURL(imageBlob);
  //     })
  //     .catch((error) => console.error("Error fetching the image:", error));
  // }, []);
  // console.log(base64Image);
  // useEffect(() => {
  //   const axios = require("axios");
  //   const fs = require("fs");
  //   const image = fs.readFileSync("YOUR_IMAGE.jpg", {
  //     encoding: "base64",
  //   });
  //   axios({
  //     method: "POST",
  //     url: "https://classify.roboflow.com/fungal-disease-in-lettuce/1",
  //     params: {
  //       api_key: "9RkWsIpavDstX3vfZsyN",
  //     },
  //     data: image,
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //   })
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error.message);
  //     });
  // }, [base64Image]);
  // useEffect(() => {
  //   const image = "https://i.postimg.cc/gJG1YtTd/lettuce.jpg";
  //   fetch("https://classify.roboflow.com/fungal-disease-in-lettuce/1", {
  //     method: "POST",
  //     params: {
  //       api_key: "9RkWsIpavDstX3vfZsyN",
  //     },
  //     headers: {
  //       "Content-Type": "image/jpeg",
  //     },
  //     body: image,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // const axios = require("axios");
  // // const fs = require("fs");

  // // const image = fs.readFileSync("YOUR_IMAGE.jpg", {
  // //   encoding: "base64",
  // // });
  // const image = "https://i.postimg.cc/gJG1YtTd/lettuce.jpg";
  // axios({
  //   method: "POST",
  //   url: "https://classify.roboflow.com/fungal-disease-in-lettuce/1",
  //   params: {
  //     api_key: "9RkWsIpavDstX3vfZsyN",
  //   },
  //   data: image,
  //   headers: {
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   },
  // })
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error.message);
  //   });
  // }, []);
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default LayoutComponent;
