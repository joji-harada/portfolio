import React from 'react';
import "./Projects.css";

const Projects = props => {
    return(
    <div id="projects" className="card text-center shadow">
        <div className="overflow">
            <a href={props.link} title="Click to view code" target="_blank" rel="noopener noreferrer" ><img src={props.imgsrc} alt="mountain" className="card-img-top"/></a>
        </div>
        <div className="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">
                {props.description}
            </p>
            <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-success">View Code</a>
        </div>
    </div>
    );
};

export default Projects;