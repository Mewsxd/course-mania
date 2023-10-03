import React from "react";
import classes from "./HeroSection.module.css";
// import leftImage from "../assets/Group 1639.png";
// import middleImage from "../assets/Group 1636.png";
// import imageRight from "../assets/Group 1641.png";
// import woman from "../assets/Illustration - pavan 691.png";
import udemy1 from "../assets/udemy logo.png";
import udemy2 from "../assets/udemy.png";
import khan from "../assets/khan.png";
import khanlogo from "../assets/khan logo.png";
import coursera from "../assets/coursera.png";
import cloud from "../assets/cloud.png";
const HeroSection = () => {
  return (
    <>
      <div className={classes.container}>
        {/* <img
        src={leftImage}
        style={{ position: "absolute", zIndex: 100 }}
        alt="pic1"
      />
      <img
        src={middleImage}
        style={{ position: "absolute", bottom: 0 }}
        alt="pic2"
      />
      <img
        src={imageRight}
        style={{ position: "absolute", right: 0, zIndex: 100 }}
        alt="pic3"
      />
      <img
        style={{ position: "absolute", right: "5%", bottom: 0, zIndex: 200 }}
        src={woman}
        alt="woman"
      /> */}
        {/* <input placeholder="Search for courses" /> */}
        <div className={classes.info}>
          <input placeholder="Search for courses" />
          <p>Explore what professionals like you are learning the most</p>
          <button>Visit courses</button>
        </div>

        {/* <div className={classes.inputIcons}>
        <i className="fa fa-search icon"></i>
        <input className="input-field" type="text"></input>
      </div> */}
      </div>
      {/* <section className={classes.sponsors}>
        <div
          className={classes.logos}
          style={{
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <img src={udemy1} alt="cn" />
          <div>
            <img src={udemy2} alt="cn" />
          </div>
        </div>
        <div className={classes.logos}>
          <img src={coursera} style={{ width: "90%" }} />
        </div>
        <div className={classes.logos}>
          <img src={cloud} style={{ width: "90%" }} />
        </div>
        <div className={classes.logos}>
          <img
            src="https://assets.website-files.com/6100439e3107e9f649d1f9fa/6100477a71d7bf39e2cfbe94_KeepLearingv4_KALogo.svg"
            style={{ width: "24rem" }}
          />
        </div>
      </section> */}
      {/* <h1>HELLO</h1> */}
      {/* <section className={classes.sponsors}>
        <div className={classes.logos}>
          <img src={udemy1} alt="cn" />
          <div>
            <img src={udemy2} alt="cn" />
          </div>
        </div>

        <div className={classes.logos}>
          <img src={coursera} style={{ width: "90%" }} />
        </div>
        <div className={classes.logos}>
          <img src={cloud} style={{ width: "90%" }} />
        </div>
        <div className={classes.logos}>
          <img src={khanlogo} style={{ width: "5%" }} alt="cn" />
          <img src={khan} style={{ width: "18%" }} alt="cn" />
        </div>
      </section> */}
    </>
  );
};

export default HeroSection;
