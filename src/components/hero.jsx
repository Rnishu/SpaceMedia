import React, { useEffect, useRef } from "react";
import NavBar from "./navbar";
import "../styles/hero.css";
import CreateEntity from "./createEntity";
function Hero() {
  const sun = useRef(null);
  const planetRef = useRef(null);
  const planetRadius = [20];
  const planetVelocity = [0.05];
  let planetRadian = new Array(8).fill(0);

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      const planet = planetRef.current.getEntityElement();
      planet.style.left = `${Math.cos(planetRadian[0]) * planetRadius[0]*2}vmin`;
      planet.style.top = `${Math.sin(planetRadian[0]) * planetRadius[0]}vmin`;
      planetRadian[0] += planetVelocity[0] * 0.02;
      if(planetRadian[0]%(2*Math.PI)<= Math.PI){
        planet.style.zIndex=4;
      }else{
        planet.style.zIndex=-1;
      }
    }, 10)

    return () => clearInterval(intervalId);
  },[planetRadian], [planetRadius], [planetRadius])
  return (
    <>
      <NavBar style={{ position: "sticky" }} />
      <div className="section" id="hero">
        <div className="galaxy galaxy-one">
          {<CreateEntity className="galaxyOne" dim="30vw" ref={null}/>}
        </div>
        <div className="galaxy galaxy-two">
          {<CreateEntity className="galaxyTwo" dim="20vw" ref={null}/>}
        </div>
        <div className="galaxy galaxy-three">
          {<CreateEntity className="galaxyThree" dim="20vw" ref={null}/>}
        </div>
        <div className="super-container">
          <div className="solarSystem">
            {<CreateEntity className="sun" dim="15vw" ref={sun}/>}
            {<CreateEntity className="planet" dim="3vw" ref={planetRef}/>}
          </div>
          <div className="text-container">
            <div className="flex-container">
              <span className="head">SPACEMEDIA</span>
              <span className="quote">Enjoy your Exploration</span>
              <button onclick="theme_change()">
                Get Started!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
