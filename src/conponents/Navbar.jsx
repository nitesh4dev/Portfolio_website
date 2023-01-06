import React, { useState } from "react";
import { TbMenu2 } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";
import "../App.css"
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const opnav = () =>{
        if(open){
            setOpen(false);
        }
        else{
            setOpen(true);
        }
     }
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <img src="https://res.cloudinary.com/dcf4tkmma/image/upload/v1671633590/Profile_picture_uturjv.jpg" height="60px" alt="myphoto" />
                    <h3>NITESH VISHWAKARMA</h3>
                </div>
                <div className="links">
                    <ul>
                    <li><Link to="home" smooth={true} duration={1000}>HOME</Link></li>
                    <li><Link to="about" smooth={true} duration={1000}>ABOUT</Link></li>
                    <li><Link to="projects" smooth={true} duration={1000}>PROJECTS</Link></li>
                    <li><Link to="contact" smooth={true} duration={1000}>CONTACT</Link></li>    
                    </ul>
                    <span className="menuico" onClick={opnav}>{open ? <MdClose/>: <TbMenu2/>}</span>
                </div>
            </div>
            <div className= {open ? "opnav": "clnav"}>
                <ul>
                    <li><Link to="home" smooth={true} duration={1000}>HOME</Link></li>
                    <li><Link to="about" smooth={true} duration={1000}>ABOUT</Link></li>
                    <li><Link to="projects" smooth={true} duration={1000}>PROJECTS</Link></li>
                    <li><Link to="contact" smooth={true} duration={1000}>CONTACT</Link></li>    
                </ul>
           </div>

        </>
    )
}
export default Navbar;