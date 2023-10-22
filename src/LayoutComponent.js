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

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default LayoutComponent;
