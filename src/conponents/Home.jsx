import React from "react";
import { BsInstagram, BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdOutlineSimCardDownload } from "react-icons/md"
import { Typewriter } from 'react-simple-typewriter';
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div className="home" id="home">
            <div className="socialIcons">
                <ul>
                    <li><a href="https://www.instagram.com/nitesh__vishwa_karma"><BsInstagram /></a></li>
                    <li><a href="https://www.facebook.com/nitesh.vishwakarma.73436"><BsFacebook /> </a></li>
                    <li><a href="https://www.github.com/nitesh4dev"><BsGithub /> </a></li>
                    <li><a href="https://www.linkedin.com/in/nitesh-vishwakarma-18a765229"><BsLinkedin /> </a></li>
                </ul>
            </div>
            <div className="intro">
                <div className='typewriter'>
                    <h1>
                        Hey, I'm a Full-Stack web developer{' '}
                    </h1>
                    <h3> Technologies I've worked on are</h3>
                    <h2 className="technologies">
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['React', 'Javascript', 'NodeJs', 'Express', 'HTML', 'CSS', 'Bootstrap', 'Git', 'C/C++ basics', 'NPM']}
                            loop={50}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h2>
                </div>
                <div className="shortintro">
                    <p>I am a Full stack web developer with a passion for learning. 
                        I thrive on new challenges, embrace change, and am constantly seeking to expand my skill set.</p>
                </div>
                <div className="makeBtn">
                    <Link to="projects" smooth={true} duration={1000}><button>PROJECTS</button></Link>
                </div>
                <div className="icon-scroll"></div>
            </div>
            <div className="resume">
                <a href="https://drive.google.com/file/d/1AkIJaGYi3p1O-pHXgQFTY4vE5g5gSZDd/view?usp=share_link"><MdOutlineSimCardDownload /></a>
            </div>
        </div>
    )
}
export default Home;