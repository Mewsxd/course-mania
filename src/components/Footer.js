import React from "react";
import classes from "./Footer.module.css";
import img from "../assets/social media links.svg";
const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.footerContainer}>
        <ul>
          <li style={{ color: "white" }}>About Us</li>
          <li style={{ color: "white" }}>Contact Us</li>
          <li style={{ color: "white" }}>Careers</li>
          <li style={{ color: "white" }}>Blog</li>
        </ul>
        <ul>
          <li style={{ color: "white" }}>Udemy Business</li>
          <li style={{ color: "white" }}>Teach on Udemy</li>
          <li style={{ color: "white" }}>Get the App</li>
        </ul>
        <ul>
          <li style={{ color: "white" }}>Help And Support</li>
          <li style={{ color: "white" }}>Privacy Policy</li>
        </ul>
      </div>
      <div className={classes.mediaLink}>
        <p>Follow Us:</p>
        <img src={img} />
      </div>
    </div>
  );
};

export default Footer;
