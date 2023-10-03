import React from "react";
import classes from "./Navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className={classes.outerContainer}>
      <nav className={classes.container}>
        <div className={classes.left}>CourseMania</div>
        {/* <div className={classes.centre}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>Tutors</li>
          <li>Contact</li>
        </ul>
      </div> */}
        {/* <div className={classes.middle}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Courses</li>
          <li>Tutors</li>
          <li>Contact</li>
        </ul>
      </div> */}
        <div className={classes.middle}>
          <ul>
            <li
              style={{
                color: "#444444",
                fontSize: "1.5vw",
                borderBottom: "4px solid #178C8C",
              }}
            >
              Home
            </li>
            <li style={{ color: "#444444", fontSize: "1.5vw" }}>About</li>
            <li style={{ color: "#444444", fontSize: "1.5vw" }}>Courses</li>
            <li style={{ color: "#444444", fontSize: "1.5vw" }}>Tutors</li>
            <li style={{ color: "#444444", fontSize: "1.5vw" }}>Contact</li>
          </ul>
        </div>
        <div className={classes.right}>
          <p>Login</p>
          <button>Register</button>
          <FaShoppingCart className={classes.icon} />
          <GiHamburgerMenu className={classes.hamburgerIcon} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
