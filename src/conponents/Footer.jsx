import React from "react";
import "./contact.css";
import { BsInstagram, BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { AiOutlineCopyright } from "react-icons/ai"

const Footer = () => {
    return (
        <div className="footer">
            <div className="info">
                <div className="author">
                    <h2>NITESH VISHWAKARMA</h2>
                    <p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
                    <p style={{color:"white"}}><span style={{fontSize:"20px"}}><MdOutlineMail /></span>vnitesh062@gmail.com</p>
                </div>
                <div className="social">
                    <h2>SOCIAL</h2>
                    <ul>
                        <li><a href="https://www.instagram.com/nitesh__vishwa_karma"><BsInstagram /></a></li>
                        <li><a href="https://www.facebook.com/nitesh.vishwakarma.73436"><BsFacebook /></a></li>
                        <li><a href="https://www.github.com/nitesh4dev"><BsGithub /></a></li>
                        <li><a href="https://www.linkedin.com/in/nitesh-vishwakarma-18a765229"><BsLinkedin /></a></li>
                    </ul>
                </div>
                
            </div>
            <div className="copyright">
                <small><span><AiOutlineCopyright /> </span>Made with ❤️ by Nitesh 🌍karma</small>
            </div>
        </div>
    )
}

export default Footer;