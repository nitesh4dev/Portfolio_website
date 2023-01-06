import React from "react";
import "./projects.css";
import Allprojects from "../projectsList";
import { RiExternalLinkFill } from "react-icons/ri";

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <div className="header">
                <h1>PROJECTS</h1>
                <h3>Here you will find some of the personal projects that I created during my learning</h3>
            </div>
            {Allprojects.map((value) => {
                return(
                <div className="body" key={value.id}>
                    <div className="screen">
                        <img src= {value.image} alt="Project Image" />
                    </div>
                    <div className="abtprjct">
                        <h2>{value.name}</h2>
                        <p>{value.description}</p>
                        <a href={value.github}><button>GITHUB <RiExternalLinkFill /></button></a>
                    </div>
                </div>
                )
            })}

        </div>
    )
}

export default Projects;