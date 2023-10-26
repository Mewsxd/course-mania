import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  function hamburgerListener() {
    setShowHamburger(!showHamburger);
  }
  return (
    <div className={classes.outerContainer}>
      <nav className={classes.container}>
        <div className={classes.left}>
          <NavLink to="/" onClick={() => setShowHamburger(false)}>
            Bharati DW Consultancy
          </NavLink>
        </div>
        <div className={classes.middle}>
          <ul>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              <li>Home</li>
            </NavLink>
            <NavLink to="/">
              <li style={{ color: "#444444", fontSize: "1.5vw" }}>About</li>
            </NavLink>
            <NavLink
              to="courses"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              <li style={{ color: "#444444", fontSize: "1.5vw" }}>Courses</li>
            </NavLink>
            <NavLink to="/">
              <li style={{ color: "#444444", fontSize: "1.5vw" }}>Tutors</li>
            </NavLink>
            <NavLink to="/">
              <li style={{ color: "#444444", fontSize: "1.5vw" }}>Contact</li>
            </NavLink>
          </ul>
        </div>
        <div className={classes.right}>
          <p>Login</p>
          <button>Register</button>
          <FaShoppingCart className={classes.icon} />
          <GiHamburgerMenu
            className={classes.hamburgerIcon}
            onClick={hamburgerListener}
          />
        </div>
      </nav>
      {showHamburger && (
        <div className={classes.responsiveNavbarContainer}>
          <ul onClick={() => setShowHamburger(false)}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              <li>Home</li>
            </NavLink>
            <NavLink to="/">
              <li style={{ color: "#444444" }}>About</li>
            </NavLink>
            <NavLink
              to="courses"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              <li style={{ color: "#444444" }}>Courses</li>
            </NavLink>
            <NavLink to="/">
              <li style={{ color: "#444444" }}>Tutors</li>
            </NavLink>
            <NavLink to="/">
              <li style={{ color: "#444444" }}>Contact</li>
            </NavLink>
            <NavLink to="/">
              <li style={{ color: "#444444" }}>Sign In</li>
            </NavLink>
            <NavLink to="/">
              <li style={{ color: "#444444" }}>Register</li>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
// style={{
//   color: "#444444",
//   fontSize: "1.5vw",
//   borderBottom: "3px solid #178C8C",
// }}
