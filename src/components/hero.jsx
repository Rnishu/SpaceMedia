import React, { useEffect, useRef } from "react";
import NavBar from "./navbar";
import "../styles/hero.css";
import CreateEntity from "../utility/solarSystemUtility/createEntity";
import createRotations from "../utility/solarSystemUtility/createRotation";
function Hero() {
  const planetRef = [useRef(null),useRef(null), useRef(null)];
  createRotations(planetRef);
  return (
    <>
      <NavBar style={{ position: "sticky" }} />
      <div className="section" id="hero">
        <div className="galaxy galaxy-one">
          {<CreateEntity className="galaxyOne" dim="30vw" ref={null} />}
        </div>
        <div className="galaxy galaxy-two">
          {<CreateEntity className="galaxyTwo" dim="20vw" ref={null} />}
        </div>
        <div className="galaxy galaxy-three">
          {<CreateEntity className="galaxyThree" dim="20vw" ref={null} />}
        </div>
        <div className="super-container">
          <div className="solarSystem">
            {<CreateEntity className="sun" dim="15vw" />}
            {
              <CreateEntity
                className="planet"
                dim="3vw"
                ref={(el) => (planetRef[0].current = el)}
              />
            }
            {
              <CreateEntity
                className="planet"
                dim="1vw"
                ref={(el) => (planetRef[1].current = el)}
              />
            }
            {
              <CreateEntity
                className="planet"
                dim="2vw"
                ref={(el) => (planetRef[2].current = el)}
              />
            }
          </div>
          <div className="text-container">
            <div className="flex-container">
              <span className="head">SPACEMEDIA</span>
              <span className="quote">Enjoy your Exploration</span>
              <button>Get Started!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

