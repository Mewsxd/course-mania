import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import lettuce from "./assets/lettuce.jpeg";
const LayoutComponent = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default LayoutComponent;
