import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

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
