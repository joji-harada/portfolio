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
                Occaecat et incididunt nisi amet occaecat quis est. Consectetur sit do ipsum ipsum amet quis duis nostrud proident eu. Do aliqua qui eiusmod non adipisicing id aute ad. Esse ea anim reprehenderit consectetur esse ea labore cupidatat in mollit eiusmod laborum ullamco enim. Irure veniam magna incididunt exercitation. Exercitation velit sint incididunt eiusmod laboris duis exercitation dolor anim esse aliquip incididunt do. Cupidatat minim sint ad nulla magna id Lorem ullamco officia anim cupidatat ad aliquip id.
            </p>
            <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-success">View Code</a>
        </div>
    </div>
    );
};

export default Projects;