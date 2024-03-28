import React from "react";
import "../styles/landing-styles/navbar.css";
import { Link as ScrollLink } from "react-scroll";
function NavBar() {
  return (
    <>
      <div className="navbar">
        <ul className="unordered-list">
          <li className="list-element">
            <button>
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
            </button>
          </li>
          <li className="list-element">
            <button>
              <ScrollLink
                activeclassname="active"
                to="learn"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Learn
              </ScrollLink>
            </button>
          </li>
          <li className="list-element">
            <button>
              <ScrollLink
                activeclassname="active"
                to="docs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Docs
              </ScrollLink>
            </button>
          </li>
          <li className="list-element">
            <button>
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
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
