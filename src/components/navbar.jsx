import React from "react";
import "../styles/navbar.css";
import { Link as ScrollLink } from "react-scroll";
function NavBar() {
  return (
    <>
      <div className="navbar">
        <ul className="unordered-list">
        <li className="list-element">
          <ScrollLink
            activeclassname="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Hero
          </ScrollLink>
        </li>
          <li className="list-element">
            <ScrollLink
              activeclassname="active"
              to="Docs"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Docs
            </ScrollLink>
          </li>
          <li className="list-element">
            <ScrollLink
              activeclassname="active"
              to="Learn"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Learn
            </ScrollLink>
          </li>
          <li className="list-element">
            <ScrollLink
              activeclassname="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </ScrollLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
