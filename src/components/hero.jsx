import React, { useRef } from "react";
import "../styles/hero.css";
import CreateEntity from "../utility/solarSystemUtility/createEntity";
import createRotations from "../utility/solarSystemUtility/createRotation";
function Hero() {
  const planetRef = [useRef(null), useRef(null), useRef(null)];
  createRotations(planetRef);
  return (
    <>
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
        <div className="text-fields section-col">
          <div className="containers">
            <div className="head">Create your own Solar System</div>
            <div className="sub-head">Become a Type 1 civilization</div>
            <div className="paragraph">On our platform every user advances as a civilization, join interplanetary groups, explore space, collect resorces, build technology, and much more!</div>
          </div>
          <div className="containers"></div>
        </div>
        <div className="solar-container section-col">
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
              <p>
                Embark on a cosmic journey where connections transcend galaxies.
                Explore the stars, connect with friends, and make the universe
                your own on our space-themed social platform.
              </p>
            </div>
          </div>
        </div>
        <div className="text-fields section-col">
          <div className="containers"></div>
          <div className="containers"></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
