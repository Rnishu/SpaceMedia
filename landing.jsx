import React from "react";
import NavBar from "./src/landing-components/navbar";
import Learn from "./src/landing-components/learn";
import About from "./src/landing-components/about";
import Docs from "./src/landing-components/docs";
import Hero from "./src/landing-components/hero";
import Footer from "./src/landing-components/footer";
import "./landing.css";
function Landing(props) {
  return (
    <>
      <div className="landing-container">
        <NavBar />
        <Hero />
        <Learn />
        <Docs />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default Landing;
