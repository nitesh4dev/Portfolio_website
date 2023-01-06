import React from "react";
import Navbar from "./conponents/Navbar";
import Home from "./conponents/Home";
import AboutMe from "./conponents/AboutMe";
import Projects from "./conponents/Projects";
import Contact from "./conponents/Contact";
import Footer from "./conponents/Footer";

const Main = () =>{
  return(
    <div className="main">
    <Navbar/>
    <Home/>
    <AboutMe/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Main;