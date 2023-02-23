import React from "react";
import "./AboutMe.css";
import { RiExternalLinkFill } from "react-icons/ri";
import { Link } from "react-scroll";

const AboutMe = () => {
    return (
        <div className="aboutMe" id="about">
            <div className="header">
                <h1>ABOUT ME</h1>
                <h3>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</h3>
            </div>
            <div className="body">
                <div className="getToKnow">
                    <h2>Get to know me!</h2>
                    <p>I'm a <b>Frontend Web Developer</b> building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <b>Projects</b> section.</p>

                    <p>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my
                        <a style={{color:"#3D9970"}} href="https://www.linkedin.com/in/nitesh-vishwakarma-18a765229"> Linkedin <RiExternalLinkFill/> </a> where I post useful content related to Web Development and Programming </p>

                    <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                    <div style={{marginTop:"40px", width:"0px"}} className="gitLink">
                        <Link to="contact" smooth={true} duration={1000}><button>CONTACT</button></Link>
                    </div>
                </div>



                <div className="skill">
                    <div className="head">
                        <h2>My Skills</h2>
                    </div>
                    <div className="skills">
                        <div>HTML</div>
                        <div>CSS</div>
                        <div>JavaScript</div>
                        <div>React</div>
                        <div>Express</div>
                        <div>Firebase</div>
                        <div>MongoDB</div>
                        <div>Bootstrap</div>
                        <div>Git</div>
                        <div>Terminal</div>
                        <div>Responsive Designs</div>
                        <div>NPM</div>
                        <div>MUI</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;