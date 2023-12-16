import React from "react";
import Learn from "./src/components/learn";
import About from "./src/components/about";
import Docs from "./src/components/docs";
import Hero from "./src/components/hero";
import Footer from "./src/components/footer";
function Landing(props){
    return(
        <>
            <Hero/>
            <Learn/>
            <Docs/>
            <About/>  
            <Footer/>
        </>
    );
}

export default Landing;